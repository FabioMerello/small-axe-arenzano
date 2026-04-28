import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Small Axe Pub Arenzano" },
      { name: "description", content: "Cookie Policy di Small Axe Pub: tipologie di cookie utilizzati e modalità di gestione del consenso." },
      { property: "og:title", content: "Cookie Policy — Small Axe Pub" },
      { property: "og:description", content: "Informativa sull'uso dei cookie ai sensi della normativa GDPR ed ePrivacy." },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-4xl md:text-5xl tracking-wider text-primary mb-2">Cookie Policy</h1>
      <p className="text-sm text-muted-foreground mb-10">Ultimo aggiornamento: 28 aprile 2026</p>

      <div className="space-y-6 text-foreground/90 leading-relaxed">
        <section>
          <h2 className="font-display text-2xl tracking-wider text-primary mt-8 mb-3">1. Cosa sono i cookie</h2>
          <p>I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell'utente, dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva. Vengono utilizzati per eseguire autenticazioni, monitorare sessioni e memorizzare informazioni sulle attività degli utenti.</p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wider text-primary mt-8 mb-3">2. Tipologie di cookie utilizzati</h2>

          <h3 className="font-display text-xl text-foreground mt-6 mb-2">Cookie tecnici (necessari)</h3>
          <p>Indispensabili per il corretto funzionamento del sito (navigazione, autenticazione area gestore, sicurezza). <strong>Non richiedono il consenso</strong> dell'utente ai sensi dell'art. 122 del Codice Privacy.</p>

          <h3 className="font-display text-xl text-foreground mt-6 mb-2">Cookie analitici</h3>
          <p>Utilizzati per raccogliere informazioni in forma aggregata sul numero di utenti e su come visitano il sito. Vengono installati solo previo consenso dell'utente.</p>

          <h3 className="font-display text-xl text-foreground mt-6 mb-2">Cookie di profilazione e marketing</h3>
          <p>Attualmente <strong>non utilizziamo</strong> cookie di profilazione o pubblicitari di terze parti. Qualora venissero introdotti in futuro, sarà richiesto consenso preventivo tramite banner.</p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wider text-primary mt-8 mb-3">3. Tabella riepilogativa</h2>
          <div className="overflow-x-auto border border-border rounded-md">
            <table className="w-full text-sm">
              <thead className="bg-card/50">
                <tr className="text-left">
                  <th className="px-4 py-2">Cookie</th>
                  <th className="px-4 py-2">Tipologia</th>
                  <th className="px-4 py-2">Durata</th>
                  <th className="px-4 py-2">Finalità</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="px-4 py-2">sb-access-token</td><td className="px-4 py-2">Tecnico</td><td className="px-4 py-2">Sessione</td><td className="px-4 py-2">Autenticazione area gestore</td></tr>
                <tr><td className="px-4 py-2">sb-refresh-token</td><td className="px-4 py-2">Tecnico</td><td className="px-4 py-2">30 giorni</td><td className="px-4 py-2">Mantenimento sessione</td></tr>
                <tr><td className="px-4 py-2">cookie-consent</td><td className="px-4 py-2">Tecnico</td><td className="px-4 py-2">12 mesi</td><td className="px-4 py-2">Memorizzazione preferenze cookie</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wider text-primary mt-8 mb-3">4. Gestione delle preferenze</h2>
          <p>Puoi modificare in qualsiasi momento le tue preferenze sui cookie tramite le impostazioni del tuo browser. Di seguito i link alle guide ufficiali:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/it/kb/Eliminare%20i%20cookie" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
            <li><a href="https://support.microsoft.com/it-it/microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
          </ul>
          <p>La disabilitazione dei cookie tecnici può compromettere alcune funzionalità del sito, in particolare l'accesso all'area gestore.</p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wider text-primary mt-8 mb-3">5. Titolare e contatti</h2>
          <p>Titolare: Small Axe Pub, Via Bocca 12, 16011 Arenzano (GE) — <a href="mailto:info@smallaxepub.it" className="text-primary hover:underline">info@smallaxepub.it</a>. Per maggiori informazioni consulta la <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.</p>
        </section>
      </div>
    </div>
  );
}
