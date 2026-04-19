import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { ReservationForm } from "@/components/ReservationForm";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti & Prenotazioni — Small Axe Pub Arenzano" },
      { name: "description", content: "Prenota un tavolo al Small Axe Pub di Arenzano. Indirizzo, telefono, orari e mappa." },
      { property: "og:title", content: "Contatti — Small Axe Pub" },
      { property: "og:description", content: "Prenota online o chiamaci al 373 796 5678. Via Bocca 12, Arenzano." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center mb-16">
        <span className="font-display tracking-[0.3em] text-primary text-sm">VIENI A TROVARCI</span>
        <h1 className="mt-3 font-display text-6xl md:text-7xl text-foreground">Contatti</h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Prenota un tavolo online o chiamaci direttamente.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Info */}
        <div className="space-y-8">
          {[
            { icon: MapPin, title: "Indirizzo", lines: ["Via Bocca 12", "16011 Arenzano (GE)"] },
            { icon: Clock, title: "Orari", lines: ["Martedì – Domenica", "17:00 – 02:00", "Lunedì chiuso"] },
            {
              icon: Phone,
              title: "Telefono",
              lines: ["373 796 5678"],
              href: "tel:+393737965678",
            },
            { icon: Mail, title: "Email", lines: ["ciao@smallaxepub.it"], href: "mailto:ciao@smallaxepub.it" },
          ].map((c) => (
            <div key={c.title} className="flex gap-4">
              <div className="h-12 w-12 grid place-items-center rounded-full bg-gradient-amber shadow-glow shrink-0">
                <c.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display tracking-wider text-foreground text-lg">{c.title}</h3>
                {c.href ? (
                  <a href={c.href} className="text-muted-foreground hover:text-primary block">
                    {c.lines.join(" · ")}
                  </a>
                ) : (
                  c.lines.map((l) => <p key={l} className="text-muted-foreground">{l}</p>)
                )}
              </div>
            </div>
          ))}

          <div className="flex gap-3 pt-4">
            <a href="#" aria-label="Instagram" className="h-12 w-12 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="h-12 w-12 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition"><Facebook className="h-5 w-5" /></a>
          </div>

          <div className="rounded-lg overflow-hidden border border-border shadow-warm h-[300px]">
            <iframe
              title="Mappa Small Axe Arenzano"
              src="https://www.google.com/maps?q=Arenzano,+Genova,+Italy&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Form */}
        <div>
          <div className="rounded-lg border border-border bg-card p-6 md:p-8 shadow-warm">
            <h2 className="font-display text-3xl text-foreground mb-1">Prenota un tavolo</h2>
            <p className="text-sm text-muted-foreground mb-6">Ti ricontatteremo per la conferma.</p>
            <ReservationForm />
          </div>
        </div>
      </div>
    </div>
  );
}
