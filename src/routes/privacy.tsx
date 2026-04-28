import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Small Axe Pub Arenzano" },
      { name: "description", content: "Informativa sulla privacy di Small Axe Pub ai sensi del Regolamento UE 2016/679 (GDPR)." },
      { property: "og:title", content: "Privacy Policy — Small Axe Pub" },
      { property: "og:description", content: "Come trattiamo i tuoi dati personali ai sensi del GDPR." },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-4xl md:text-5xl tracking-wider text-primary mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-10">Ultimo aggiornamento: 28 aprile 2026</p>

      <div className="prose prose-invert max-w-none space-y-6 text-foreground/90 leading-relaxed">
        <section>
          <h2 className="font-display text-2xl tracking-wider text-primary mt-8 mb-3">1. Titolare del trattamento</h2>
          <p>
            Il Titolare del trattamento dei dati è <strong>Small Axe Pub</strong>, con sede in Via Bocca 12, 16011 Arenzano (GE), Italia.
            <br />Contatti: <a href="mailto:info@smallaxepub.it" className="text-primary hover:underline">info@smallaxepub.it</a> · Tel. <a href="tel:+393737965678" className="text-primary hover:underline">373 796 5678</a>
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wider text-primary mt-8 mb-3">2. Tipologie di dati raccolti</h2>
          <p>Raccogliamo i seguenti dati personali quando li fornisci volontariamente tramite il modulo di prenotazione o di contatto:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nome e cognome</li>
            <li>Numero di telefono</li>
            <li>Indirizzo e-mail (facoltativo)</li>
            <li>Data, orario e numero di persone della prenotazione</li>
            <li>Eventuali note aggiuntive da te inserite</li>
          </ul>
          <p>Inoltre, durante la navigazione possono essere raccolti automaticamente dati tecnici (indirizzo IP, tipo di browser, pagine visitate) tramite cookie e tecnologie analoghe (vedi <a href="/cookies" className="text-primary hover:underline">Cookie Policy</a>).</p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wider text-primary mt-8 mb-3">3. Finalità e basi giuridiche</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Gestione prenotazioni</strong> — base giuridica: esecuzione di misure precontrattuali e contrattuali (art. 6.1.b GDPR).</li>
            <li><strong>Risposta a richieste di contatto</strong> — base giuridica: legittimo interesse (art. 6.1.f GDPR).</li>
            <li><strong>Adempimenti di legge</strong> (fiscali, contabili, amministrativi) — base giuridica: obbligo legale (art. 6.1.c GDPR).</li>
            <li><strong>Cookie tecnici</strong> — non richiedono consenso. <strong>Cookie analitici/marketing</strong> — consenso (art. 6.1.a GDPR).</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wider text-primary mt-8 mb-3">4. Modalità di trattamento e conservazione</h2>
          <p>I dati sono trattati con strumenti elettronici e protetti da misure di sicurezza adeguate. I dati delle prenotazioni sono conservati per <strong>24 mesi</strong> dalla data dell'evento, salvo obblighi di legge superiori. I dati di contatto sono conservati per il tempo strettamente necessario alla risposta.</p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wider text-primary mt-8 mb-3">5. Destinatari dei dati</h2>
          <p>I dati possono essere comunicati a:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Personale autorizzato del locale</li>
            <li>Fornitori di servizi IT e hosting (Responsabili del trattamento ex art. 28 GDPR)</li>
            <li>Autorità pubbliche, ove richiesto dalla legge</li>
          </ul>
          <p>I dati <strong>non vengono diffusi</strong> e non sono oggetto di profilazione automatizzata.</p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wider text-primary mt-8 mb-3">6. Trasferimento dati extra-UE</h2>
          <p>Eventuali trasferimenti verso paesi al di fuori dello Spazio Economico Europeo avvengono unicamente verso fornitori che garantiscono un livello di protezione adeguato (es. Clausole Contrattuali Standard approvate dalla Commissione Europea).</p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wider text-primary mt-8 mb-3">7. Diritti dell'interessato</h2>
          <p>Ai sensi degli artt. 15-22 del GDPR hai diritto di:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Accedere ai tuoi dati</li>
            <li>Richiederne la rettifica o la cancellazione</li>
            <li>Limitare od opporti al trattamento</li>
            <li>Ricevere i dati in formato strutturato (portabilità)</li>
            <li>Revocare il consenso in qualsiasi momento</li>
            <li>Proporre reclamo al <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Garante per la Protezione dei Dati Personali</a></li>
          </ul>
          <p>Per esercitare i tuoi diritti scrivi a <a href="mailto:info@smallaxepub.it" className="text-primary hover:underline">info@smallaxepub.it</a>.</p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wider text-primary mt-8 mb-3">8. Modifiche alla policy</h2>
          <p>Il Titolare si riserva di modificare la presente informativa. Le modifiche saranno pubblicate su questa pagina con la data di aggiornamento.</p>
        </section>
      </div>
    </div>
  );
}
