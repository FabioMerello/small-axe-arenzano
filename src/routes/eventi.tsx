import { createFileRoute } from "@tanstack/react-router";
import eventsImg from "@/assets/events.jpg";

export const Route = createFileRoute("/eventi")({
  head: () => ({
    meta: [
      { title: "Eventi & Live — Small Axe Pub Arenzano" },
      { name: "description", content: "Concerti live, dj set e serate a tema al Small Axe Pub di Arenzano. Scopri il calendario." },
      { property: "og:title", content: "Eventi al Small Axe" },
      { property: "og:description", content: "Live, dj set e serate a tema ad Arenzano." },
      { property: "og:image", content: eventsImg },
      { name: "twitter:image", content: eventsImg },
    ],
  }),
  component: EventsPage,
});

const events = [
  { date: "25 APR", day: "VEN", name: "The Loud Brothers", type: "ROCK LIVE", time: "22:00" },
  { date: "26 APR", day: "SAB", name: "Vinyl Night · DJ Marco", type: "DJ SET", time: "23:00" },
  { date: "02 MAG", day: "VEN", name: "Open Mic", type: "ACUSTICO", time: "21:30" },
  { date: "03 MAG", day: "SAB", name: "Blues Riviera Trio", type: "BLUES LIVE", time: "22:00" },
  { date: "09 MAG", day: "VEN", name: "Reggae Night", type: "DJ SET", time: "22:30" },
  { date: "10 MAG", day: "SAB", name: "The Smokers", type: "ROCK LIVE", time: "22:00" },
];

function EventsPage() {
  return (
    <>
      <section className="relative h-[50vh] flex items-center overflow-hidden">
        <img
          src={eventsImg}
          alt="Concerto live al Small Axe Pub"
          width={1600}
          height={1024}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto max-w-7xl px-6 w-full">
          <span className="font-display tracking-[0.3em] text-primary text-sm">CALENDARIO</span>
          <h1 className="mt-3 font-display text-6xl md:text-8xl text-foreground">Eventi & Live</h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="space-y-4">
          {events.map((e) => (
            <article
              key={e.date + e.name}
              className="group flex items-center gap-6 rounded-lg border border-border bg-card p-6 hover:border-primary hover:shadow-glow transition"
            >
              <div className="text-center min-w-[80px] border-r border-border pr-6">
                <div className="font-display text-3xl text-primary">{e.date}</div>
                <div className="font-display text-xs tracking-widest text-muted-foreground">{e.day}</div>
              </div>
              <div className="flex-1">
                <div className="font-display tracking-[0.2em] text-xs text-accent">{e.type}</div>
                <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition mt-1">
                  {e.name}
                </h3>
              </div>
              <div className="font-display text-foreground text-lg hidden sm:block">{e.time}</div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-muted-foreground">
          Ingresso libero · per i live consigliata la prenotazione del tavolo
        </p>
      </section>
    </>
  );
}
