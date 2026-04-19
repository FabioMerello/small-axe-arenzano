import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Clock, Users, User, Phone, MessageSquare, Check, ExternalLink } from "lucide-react";

const ADMIN_PHONE = "393737965678"; // formato internazionale per wa.me

const schema = z.object({
  customer_name: z.string().trim().min(2, "Nome troppo corto").max(80),
  customer_phone: z.string().trim().min(6, "Telefono non valido").max(20).regex(/^[+\d\s().-]+$/, "Telefono non valido"),
  reservation_date: z.string().min(1, "Seleziona una data"),
  reservation_time: z.string().min(1, "Seleziona un orario"),
  party_size: z.coerce.number().int().min(1, "Minimo 1 persona").max(30, "Massimo 30 persone"),
  notes: z.string().max(300).optional(),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  customer_name: "",
  customer_phone: "",
  reservation_date: "",
  reservation_time: "20:00",
  party_size: 2,
  notes: "",
};

export function ReservationForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<FormState | null>(null);

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        if (i.path[0]) errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("reservations").insert({
      customer_name: parsed.data.customer_name,
      customer_phone: parsed.data.customer_phone,
      reservation_date: parsed.data.reservation_date,
      reservation_time: parsed.data.reservation_time,
      party_size: parsed.data.party_size,
      notes: parsed.data.notes || null,
    });
    setLoading(false);

    if (error) {
      setErrors({ _form: "Errore nell'invio. Riprova o chiamaci." });
      return;
    }
    setSuccess(parsed.data);
    setForm(initial);
  };

  if (success) {
    const msg = encodeURIComponent(
      `Ciao Small Axe! Vorrei confermare la mia prenotazione:\n\n` +
        `👤 ${success.customer_name}\n` +
        `📅 ${success.reservation_date} alle ${success.reservation_time}\n` +
        `👥 ${success.party_size} persone\n` +
        `📞 ${success.customer_phone}` +
        (success.notes ? `\n📝 ${success.notes}` : "")
    );
    return (
      <div className="rounded-lg border border-primary/40 bg-card p-8 text-center shadow-glow">
        <div className="mx-auto h-14 w-14 grid place-items-center rounded-full bg-gradient-amber mb-4">
          <Check className="h-7 w-7 text-primary-foreground" />
        </div>
        <h3 className="font-display text-2xl tracking-wider text-foreground">Richiesta inviata!</h3>
        <p className="mt-2 text-muted-foreground">
          Ti ricontatteremo per la conferma. Vuoi avvisarci su WhatsApp?
        </p>
        <a
          href={`https://wa.me/${ADMIN_PHONE}?text=${msg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-amber px-6 py-3 font-display tracking-wider text-primary-foreground hover:opacity-90 transition"
        >
          Avvisa su WhatsApp <ExternalLink className="h-4 w-4" />
        </a>
        <button
          onClick={() => setSuccess(null)}
          className="mt-4 block mx-auto text-sm text-muted-foreground hover:text-primary"
        >
          Nuova prenotazione
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Field icon={User} label="Nome e cognome" error={errors.customer_name}>
        <input
          type="text"
          value={form.customer_name}
          onChange={(e) => setForm({ ...form, customer_name: e.target.value })}
          className="input"
          placeholder="Mario Rossi"
          maxLength={80}
        />
      </Field>

      <Field icon={Phone} label="Telefono" error={errors.customer_phone}>
        <input
          type="tel"
          value={form.customer_phone}
          onChange={(e) => setForm({ ...form, customer_phone: e.target.value })}
          className="input"
          placeholder="+39 333 1234567"
          maxLength={20}
        />
      </Field>

      <div className="grid grid-cols-2 gap-3">
        <Field icon={Calendar} label="Data" error={errors.reservation_date}>
          <input
            type="date"
            min={today}
            value={form.reservation_date}
            onChange={(e) => setForm({ ...form, reservation_date: e.target.value })}
            className="input"
          />
        </Field>
        <Field icon={Clock} label="Orario" error={errors.reservation_time}>
          <input
            type="time"
            value={form.reservation_time}
            onChange={(e) => setForm({ ...form, reservation_time: e.target.value })}
            className="input"
          />
        </Field>
      </div>

      <Field icon={Users} label="Persone" error={errors.party_size}>
        <input
          type="number"
          min={1}
          max={30}
          value={form.party_size}
          onChange={(e) => setForm({ ...form, party_size: Number(e.target.value) })}
          className="input"
        />
      </Field>

      <Field icon={MessageSquare} label="Note (opzionale)" error={errors.notes}>
        <textarea
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          className="input min-h-[80px] resize-y"
          placeholder="Allergie, occasioni speciali, tavolo all'esterno..."
          maxLength={300}
        />
      </Field>

      {errors._form && <p className="text-sm text-destructive">{errors._form}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-gradient-amber px-6 py-4 font-display tracking-wider text-primary-foreground shadow-glow hover:opacity-90 transition disabled:opacity-50"
      >
        {loading ? "Invio in corso..." : "Prenota un tavolo"}
      </button>

      <style>{`
        .input {
          width: 100%;
          background: var(--input);
          border: 1px solid var(--border);
          border-radius: 0.375rem;
          padding: 0.7rem 0.9rem;
          color: var(--foreground);
          font-family: var(--font-body);
          transition: border-color 0.2s;
        }
        .input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 2px oklch(0.72 0.17 65 / 0.2);
        }
        .input::-webkit-calendar-picker-indicator { filter: invert(0.7); }
      `}</style>
    </form>
  );
}

function Field({
  icon: Icon,
  label,
  error,
  children,
}: {
  icon: React.ElementType;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="flex items-center gap-2 text-sm font-display tracking-wider text-foreground/80 mb-1.5">
        <Icon className="h-3.5 w-3.5 text-primary" />
        {label}
      </span>
      {children}
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </label>
  );
}
