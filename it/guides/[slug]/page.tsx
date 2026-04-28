import Link from "next/link";
import { notFound } from "next/navigation";
import {
  italianGuides,
  getItalianGuideBySlug
} from "@/data/itGuides";

export function generateStaticParams() {
  return italianGuides.map((guide) => ({ slug: guide.slug }));
}

export default async function ItalianGuidePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const guide = getItalianGuideBySlug(resolvedParams.slug);

  if (!guide) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 py-12">
      <article className="mx-auto max-w-3xl rounded-[2rem] bg-white/90 p-8 shadow-soft ring-1 ring-slate-200">
        <Link
          href="/it/guides"
          className="text-sm text-slate-500 hover:text-slate-950"
        >
          ← Torna alle guide Italia
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-700">
            {guide.category}
          </span>
          <span>{guide.readTime}</span>
          <span>Aggiornato il {guide.date}</span>
        </div>

        <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          {guide.title}
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          {guide.excerpt}
        </p>

        <div className="mt-8 rounded-3xl bg-slate-50 p-5 text-sm leading-6 text-slate-600 ring-1 ring-slate-200">
          Questa guida ha scopo informativo. Non mostra prezzi, recensioni o
          valutazioni Amazon. Prezzi, disponibilità e dettagli dei prodotti
          devono sempre essere verificati direttamente su Amazon prima
          dell’acquisto.
        </div>

        <div className="mt-10 space-y-9">
          {guide.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold text-slate-950">
                {section.heading}
              </h2>
              <p className="mt-3 leading-8 text-slate-600">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-amber-50 p-6 ring-1 ring-amber-200">
          <h2 className="text-xl font-bold text-slate-950">
            Esplora i prodotti collegati
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-700">
            Stella Deals organizza idee prodotto per categorie e regioni. Puoi
            consultare la pagina italiana per vedere prodotti selezionati con
            link verso Amazon.it.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/it"
              className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white hover:bg-amber-600"
            >
              Vai alla pagina Italia
            </Link>

            <Link
              href="/guides"
              className="rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-200"
            >
              Guide internazionali
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
