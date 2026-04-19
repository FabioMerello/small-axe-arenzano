import { createFileRoute, Link } from "@tanstack/react-router";
import heroPub from "@/assets/hero-pub.jpg";
import beer from "@/assets/beer.jpg";
import { Beer, Music, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Small Axe — Pub ad Arenzano · Birre, Cocktail, Musica" },
      { name: "description", content: "Il pub di riferimento ad Arenzano. Selezione di birre artigianali, cocktail d'autore e serate live." },
      { property: "og:title", content: "Small Axe — Pub ad Arenzano" },
      { property: "og:description", content: "Birre artigianali, cocktail e musica dal vivo ad Arenzano." },
      { property: "og:image", content: heroPub },
      { name: "twitter:image", content: heroPub },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <img
          src={heroPub}
          alt="Interno del pub Small Axe ad Arenzano"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto max-w-7xl px-6 py-32 w-full">
          <span className="inline-block font-display tracking-[0.3em] text-primary text-sm mb-6">
            ARENZANO · DAL 2014
          </span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground leading-[0.9] text-balance">
            Birre, cocktail<br />
            <span className="italic font-serif text-primary">& buona musica.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Small Axe è il pub dove la riviera ligure incontra l'anima del rock. Spillatura impeccabile, drink curati, vinili giusti.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-amber px-8 py-4 font-display tracking-wider text-primary-foreground shadow-glow hover:opacity-90 transition"
            >
              Scopri il menu <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 rounded-md border border-foreground/30 px-8 py-4 font-display tracking-wider text-foreground hover:border-primary hover:text-primary transition"
            >
              Prenota un tavolo
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid gap-8 md:grid-cols-3">
        {[
          { icon: Beer, title: "20 birre alla spina", text: "Artigianali italiane e selezioni belghe in costante rotazione." },
          { icon: Music, title: "Live ogni weekend", text: "Rock, blues e dj set. Il palco è di chi ha qualcosa da dire." },
          { icon: MapPin, title: "Cuore di Arenzano", text: "A due passi dal lungomare, in una vecchia bottega restaurata." },
        ].map((f) => (
          <div key={f.title} className="group rounded-lg border border-border bg-card p-8 hover:border-primary/50 transition shadow-warm">
            <f.icon className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-display text-2xl tracking-wider text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid gap-12 md:grid-cols-2 items-center">
        <div className="relative">
          <img
            src={beer}
            alt="Birra artigianale spillata al Small Axe"
            width={1024}
            height={1280}
            loading="lazy"
            className="rounded-lg shadow-warm"
          />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-gradient-amber p-6 rounded-lg shadow-glow">
            <div className="font-display text-5xl text-primary-foreground">10+</div>
            <div className="font-display tracking-wider text-primary-foreground/80 text-sm">ANNI DI STORIA</div>
          </div>
        </div>
        <div>
          <span className="font-display tracking-[0.3em] text-primary text-sm">LA NOSTRA STORIA</span>
          <h2 className="mt-3 font-display text-5xl text-foreground leading-tight">
            Un piccolo pub<br />con grandi idee.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Aperto nel 2014 in una vecchia bottega di Via Bocca, Small Axe nasce dalla passione di tre amici per la birra ben fatta e il reggae di Bob Marley — da cui prende il nome.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Oggi è il punto d'incontro di Arenzano: un posto dove sederti al bancone, parlare con il barista e scoprire qualcosa di nuovo da bere ogni settimana.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="rounded-2xl bg-gradient-amber p-12 md:p-20 text-center shadow-glow">
          <h2 className="font-display text-4xl md:text-6xl text-primary-foreground">Ti aspettiamo stasera.</h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">Mar–Dom · dalle 17:00 alle 02:00</p>
          <Link
            to="/contatti"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-background px-8 py-4 font-display tracking-wider text-foreground hover:bg-card transition"
          >
            Come raggiungerci <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
