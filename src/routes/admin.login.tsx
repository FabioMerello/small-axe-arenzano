import { createFileRoute, redirect, Link } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin/login")({
  head: () => ({
    meta: [
      { title: "Accesso gestore — Small Axe" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  beforeLoad: async () => {
    const { data } = await supabase.auth.getSession();
    if (data.session) throw redirect({ to: "/admin" });
  },
  component: LoginPage,
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = Route.useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setError(error.message);
      else navigate({ to: "/admin" });
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/admin` },
      });
      if (error) setError(error.message);
      else setError("Account creato. Chiedi di essere abilitato come admin, poi accedi.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <span className="font-display tracking-[0.3em] text-primary text-sm">AREA RISERVATA</span>
          <h1 className="mt-3 font-display text-5xl text-foreground">Gestore</h1>
          <p className="mt-3 text-muted-foreground">
            {mode === "signin" ? "Accedi per vedere le prenotazioni" : "Crea un account amministratore"}
          </p>
        </div>

        <form onSubmit={submit} className="rounded-lg border border-border bg-card p-8 shadow-warm space-y-4">
          <label className="block">
            <span className="text-sm font-display tracking-wider text-foreground/80 mb-1.5 block">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-input border border-border rounded-md px-3 py-2.5 text-foreground focus:outline-none focus:border-primary"
            />
          </label>
          <label className="block">
            <span className="text-sm font-display tracking-wider text-foreground/80 mb-1.5 block">Password</span>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-input border border-border rounded-md px-3 py-2.5 text-foreground focus:outline-none focus:border-primary"
            />
          </label>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-gradient-amber px-6 py-3 font-display tracking-wider text-primary-foreground shadow-glow hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Attendi..." : mode === "signin" ? "Accedi" : "Crea account"}
          </button>

          <button
            type="button"
            onClick={() => { setMode(mode === "signin" ? "signup" : "signin"); setError(""); }}
            className="w-full text-sm text-muted-foreground hover:text-primary text-center"
          >
            {mode === "signin" ? "Crea un account" : "Ho già un account"}
          </button>
        </form>

        <Link to="/" className="block text-center mt-6 text-sm text-muted-foreground hover:text-primary">
          ← Torna al sito
        </Link>
      </div>
    </div>
  );
}
