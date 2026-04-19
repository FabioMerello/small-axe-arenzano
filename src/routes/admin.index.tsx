import { createFileRoute, redirect, Link } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { format, parseISO } from "date-fns";
import { it } from "date-fns/locale";
import { Calendar, Clock, Users, Phone, LogOut, RefreshCw, MessageSquare, Filter } from "lucide-react";

type Status = "pending" | "confirmed" | "rejected" | "completed";
type Reservation = {
  id: string;
  customer_name: string;
  customer_phone: string;
  reservation_date: string;
  reservation_time: string;
  party_size: number;
  notes: string | null;
  status: Status;
  created_at: string;
};

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "Prenotazioni — Small Axe Admin" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  beforeLoad: async () => {
    const { data } = await supabase.auth.getSession();
    if (!data.session) throw redirect({ to: "/admin/login" });
  },
  component: AdminPage,
});

const statusLabels: Record<Status, { label: string; cls: string }> = {
  pending: { label: "In attesa", cls: "bg-amber-glow/20 text-amber-glow border-amber-glow/40" },
  confirmed: { label: "Confermata", cls: "bg-primary/20 text-primary border-primary/40" },
  rejected: { label: "Rifiutata", cls: "bg-destructive/20 text-destructive border-destructive/40" },
  completed: { label: "Completata", cls: "bg-muted text-muted-foreground border-border" },
};

function AdminPage() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Status | "all">("all");
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const navigate = Route.useNavigate();

  const load = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("reservations")
      .select("*")
      .order("reservation_date", { ascending: false })
      .order("reservation_time", { ascending: false });
    if (!error && data) setReservations(data as Reservation[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { navigate({ to: "/admin/login" }); return; }
      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .maybeSingle();
      setIsAdmin(!!roles);
      if (roles) load();
      else setLoading(false);
    })();
  }, [load, navigate]);

  const updateStatus = async (id: string, status: Status) => {
    const { error } = await supabase.from("reservations").update({ status }).eq("id", id);
    if (!error) {
      setReservations((rs) => rs.map((r) => (r.id === id ? { ...r, status } : r)));
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/admin/login" });
  };

  if (isAdmin === false) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6 text-center">
        <div className="max-w-md">
          <h1 className="font-display text-4xl text-foreground">Accesso non autorizzato</h1>
          <p className="mt-3 text-muted-foreground">
            Il tuo account non è ancora abilitato come amministratore. Contatta il supporto.
          </p>
          <button onClick={logout} className="mt-6 inline-flex items-center gap-2 text-primary hover:underline">
            <LogOut className="h-4 w-4" /> Esci
          </button>
        </div>
      </div>
    );
  }

  const filtered = filter === "all" ? reservations : reservations.filter((r) => r.status === filter);
  const counts = reservations.reduce<Record<string, number>>((acc, r) => {
    acc[r.status] = (acc[r.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <span className="font-display tracking-[0.3em] text-primary text-sm">DASHBOARD</span>
          <h1 className="font-display text-4xl md:text-5xl text-foreground">Prenotazioni</h1>
        </div>
        <div className="flex gap-2">
          <button
            onClick={load}
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary transition"
          >
            <RefreshCw className="h-4 w-4" /> Aggiorna
          </button>
          <button
            onClick={logout}
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm hover:border-destructive hover:text-destructive transition"
          >
            <LogOut className="h-4 w-4" /> Esci
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <Filter className="h-4 w-4 text-muted-foreground" />
        {(["all", "pending", "confirmed", "completed", "rejected"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-3 py-1.5 rounded-full text-xs font-display tracking-wider border transition ${
              filter === s
                ? "bg-gradient-amber text-primary-foreground border-transparent"
                : "border-border text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {s === "all" ? `TUTTE (${reservations.length})` : `${statusLabels[s].label.toUpperCase()} (${counts[s] || 0})`}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-muted-foreground py-12 text-center">Caricamento...</p>
      ) : filtered.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border p-12 text-center">
          <p className="text-muted-foreground">Nessuna prenotazione.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((r) => (
            <ReservationCard key={r.id} r={r} onStatus={updateStatus} />
          ))}
        </div>
      )}

      <Link to="/" className="block text-center mt-12 text-sm text-muted-foreground hover:text-primary">
        ← Torna al sito
      </Link>
    </div>
  );
}

function ReservationCard({ r, onStatus }: { r: Reservation; onStatus: (id: string, s: Status) => void }) {
  const date = format(parseISO(r.reservation_date), "EEEE d MMMM yyyy", { locale: it });
  const meta = statusLabels[r.status];
  return (
    <article className="rounded-lg border border-border bg-card p-5 hover:border-primary/40 transition">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex-1 min-w-[250px]">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="font-display text-xl tracking-wider text-foreground">{r.customer_name}</h3>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-display tracking-wider border ${meta.cls}`}>
              {meta.label.toUpperCase()}
            </span>
          </div>
          <div className="mt-3 grid sm:grid-cols-2 gap-y-1.5 gap-x-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> {date}</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> {r.reservation_time.slice(0, 5)}</span>
            <span className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> {r.party_size} {r.party_size === 1 ? "persona" : "persone"}</span>
            <a href={`tel:${r.customer_phone}`} className="flex items-center gap-2 hover:text-primary">
              <Phone className="h-4 w-4 text-primary" /> {r.customer_phone}
            </a>
          </div>
          {r.notes && (
            <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground bg-muted/30 rounded p-3">
              <MessageSquare className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span className="italic">{r.notes}</span>
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 min-w-[140px]">
          {r.status === "pending" && (
            <>
              <button
                onClick={() => onStatus(r.id, "confirmed")}
                className="rounded-md bg-gradient-amber px-3 py-2 text-xs font-display tracking-wider text-primary-foreground hover:opacity-90"
              >
                Conferma
              </button>
              <button
                onClick={() => onStatus(r.id, "rejected")}
                className="rounded-md border border-destructive/50 px-3 py-2 text-xs font-display tracking-wider text-destructive hover:bg-destructive/10"
              >
                Rifiuta
              </button>
            </>
          )}
          {r.status === "confirmed" && (
            <button
              onClick={() => onStatus(r.id, "completed")}
              className="rounded-md border border-border px-3 py-2 text-xs font-display tracking-wider text-foreground hover:border-primary hover:text-primary"
            >
              Segna completata
            </button>
          )}
          {(r.status === "rejected" || r.status === "completed") && (
            <button
              onClick={() => onStatus(r.id, "pending")}
              className="rounded-md border border-border px-3 py-2 text-xs font-display tracking-wider text-muted-foreground hover:border-primary hover:text-primary"
            >
              Riapri
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
