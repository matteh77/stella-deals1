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
        In qualità di Affiliato Amazon, Stella Deals può ricevere un guadagno
        dagli acquisti idonei effettuati tramite i link presenti su questo sito.
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
        Prima di acquistare, i visitatori devono sempre verificare le
        informazioni finali direttamente su Amazon.
      </p>
    </main>
  );
}
