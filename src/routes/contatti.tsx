import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — Small Axe Pub Arenzano" },
      { name: "description", content: "Vieni a trovarci in Via Bocca 12, Arenzano. Telefono, orari e mappa del Small Axe Pub." },
      { property: "og:title", content: "Contatti — Small Axe Pub" },
      { property: "og:description", content: "Indirizzo, orari e contatti del Small Axe Pub di Arenzano." },
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
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-8">
          {[
            { icon: MapPin, title: "Indirizzo", lines: ["Via Bocca 12", "16011 Arenzano (GE)"] },
            { icon: Clock, title: "Orari", lines: ["Martedì – Domenica", "17:00 – 02:00", "Lunedì chiuso"] },
            { icon: Phone, title: "Telefono", lines: ["+39 010 912 3456"] },
            { icon: Mail, title: "Email", lines: ["ciao@smallaxepub.it"] },
          ].map((c) => (
            <div key={c.title} className="flex gap-4">
              <div className="h-12 w-12 grid place-items-center rounded-full bg-gradient-amber shadow-glow shrink-0">
                <c.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display tracking-wider text-foreground text-lg">{c.title}</h3>
                {c.lines.map((l) => (
                  <p key={l} className="text-muted-foreground">{l}</p>
                ))}
              </div>
            </div>
          ))}

          <div className="flex gap-3 pt-4">
            <a href="#" aria-label="Instagram" className="h-12 w-12 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="h-12 w-12 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden border border-border shadow-warm min-h-[400px]">
          <iframe
            title="Mappa Small Axe Arenzano"
            src="https://www.google.com/maps?q=Arenzano,+Genova,+Italy&output=embed"
            className="w-full h-full min-h-[400px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
