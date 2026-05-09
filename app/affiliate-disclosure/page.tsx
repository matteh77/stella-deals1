import Link from "next/link";

export default function AffiliateDisclosurePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/" className="text-sm text-slate-500 hover:text-slate-950">
        ← Back
      </Link>

      <h1 className="mt-6 text-4xl font-bold text-slate-950">
        Affiliate Disclosure
      </h1>

      <p className="mt-6 leading-7 text-slate-600">
        In qualità di Affiliato Amazon, Stella Deals riceve un guadagno dagli
        acquisti idonei effettuati tramite i link presenti su questo sito.
      </p>

      <p className="mt-4 leading-7 text-slate-600">
        Stella Deals può includere link verso marketplace Amazon. Questi link
        aiutano i visitatori a verificare dettagli dei prodotti, disponibilità,
        opzioni di consegna e alternative direttamente su Amazon.
      </p>

      <p className="mt-4 leading-7 text-slate-600">
        L’eventuale commissione non comporta costi aggiuntivi per il visitatore.
        Prezzi, disponibilità, descrizioni dei prodotti e condizioni di acquisto
        possono cambiare su Amazon.
      </p>

      <p className="mt-4 leading-7 text-slate-600">
        Stella Deals non mostra prezzi statici, recensioni Amazon o valutazioni
        Amazon. Prima di acquistare, i visitatori devono sempre verificare le
        informazioni finali direttamente sulla pagina Amazon del prodotto.
      </p>

      <p className="mt-4 leading-7 text-slate-600">
        Amazon e il logo Amazon sono marchi di Amazon.com, Inc. o delle sue
        affiliate. Stella Deals non è un sito ufficiale Amazon e non è
        sponsorizzato o gestito da Amazon.
      </p>
    </main>
  );
}
