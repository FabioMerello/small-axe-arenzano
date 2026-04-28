import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/termini")({
  head: () => ({
    meta: [
      { title: "Termini e Condizioni — Small Axe Pub Arenzano" },
      { name: "description", content: "Termini e condizioni di utilizzo del sito e del servizio di prenotazione di Small Axe Pub." },
      { property: "og:title", content: "Termini e Condizioni — Small Axe Pub" },
      { property: "og:description", content: "Condizioni di utilizzo del sito e regole di prenotazione." },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: TerminiPage,
});

function TerminiPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-4xl md:text-5xl tracking-wider text-primary mb-2">Termini e Condizioni</h1>
      <p className="text-sm text-muted-foreground mb-10">Ultimo aggiornamento: 28 aprile 2026</p>

      <div className="space-y-6 text-foreground/90 leading-relaxed">
        <section>
          <h2 className="font-display text-2xl tracking-wider text-primary mt-8 mb-3">1. Oggetto</h2>
          <p>I presenti Termini disciplinano l'utilizzo del sito <strong>smallaxepub.it</strong> e del servizio di prenotazione tavoli online del locale Small Axe Pub, con sede in Via Bocca 12, 16011 Arenzano (GE).</p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wider text-primary mt-8 mb-3">2. Prenotazioni</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>La richiesta di prenotazione inviata tramite il modulo non costituisce conferma automatica.</li>
            <li>La prenotazione si considera confermata solo dopo riscontro esplicito da parte del gestore.</li>
            <li>In caso di impossibilità a presentarsi, l'utente è tenuto a comunicarlo con almeno <strong>2 ore</strong> di anticipo.</li>
            <li>Il tavolo viene mantenuto per un massimo di <strong>15 minuti</strong> oltre l'orario prenotato.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wider text-primary mt-8 mb-3">3. Comportamento all'interno del locale</h2>
          <p>Il gestore si riserva il diritto di rifiutare l'ingresso o allontanare clienti che assumano comportamenti molesti, violenti o contrari alle norme di legge. La somministrazione di alcolici è vietata ai minori di 18 anni ai sensi della normativa vigente.</p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wider text-primary mt-8 mb-3">4. Proprietà intellettuale</h2>
          <p>Tutti i contenuti del sito (testi, immagini, logo, grafica) sono di proprietà di Small Axe Pub o dei rispettivi titolari e sono protetti dalle norme sul diritto d'autore. Ne è vietata la riproduzione senza autorizzazione.</p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wider text-primary mt-8 mb-3">5. Limitazione di responsabilità</h2>
          <p>Il gestore non risponde di eventuali interruzioni del servizio online dovute a cause tecniche, manutenzione o forza maggiore. Le informazioni su menu, prezzi ed eventi sono soggette a variazioni senza preavviso.</p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wider text-primary mt-8 mb-3">6. Legge applicabile e foro competente</h2>
          <p>I presenti Termini sono regolati dalla legge italiana. Per qualsiasi controversia è competente in via esclusiva il Foro di Genova, fatte salve le disposizioni inderogabili a tutela del consumatore.</p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wider text-primary mt-8 mb-3">7. Contatti</h2>
          <p>Small Axe Pub — Via Bocca 12, 16011 Arenzano (GE) · <a href="mailto:info@smallaxepub.it" className="text-primary hover:underline">info@smallaxepub.it</a> · <a href="tel:+393737965678" className="text-primary hover:underline">373 796 5678</a></p>
        </section>
      </div>
    </div>
  );
}
