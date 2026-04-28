import Link from "next/link";
import { brandName, regions } from "@/data/locales";
import { guides } from "@/data/guides";

export default function HomePage() {
  const featuredGuides = guides.slice(0, 3);
  return (
    <main className="min-h-screen px-6 py-12">
      <section className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] bg-white/90 p-8 shadow-soft ring-1 ring-slate-200 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{brandName}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">Practical product ideas and buying guides for everyday life.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Stella Deals is an international product discovery website with regional Amazon pages and original buying guides. It focuses on useful items for tech, travel, home office, creators and daily routines.</p>
          <div className="mt-8 grid gap-4 rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200 md:grid-cols-3">
            <div><h2 className="text-lg font-bold text-slate-950">Original guides</h2><p className="mt-2 text-sm leading-6 text-slate-600">Practical articles explain how to choose useful products without relying only on product listings.</p></div>
            <div><h2 className="text-lg font-bold text-slate-950">Curated categories</h2><p className="mt-2 text-sm leading-6 text-slate-600">Products are grouped by real use: technology, travel, desk setups, creator tools and everyday essentials.</p></div>
            <div><h2 className="text-lg font-bold text-slate-950">Regional pages</h2><p className="mt-2 text-sm leading-6 text-slate-600">Localized pages help visitors browse Amazon marketplaces in several European regions.</p></div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/guides" className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-600">Read buying guides</Link>
            <Link href="/about" className="rounded-2xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-200">About Stella Deals</Link>
          </div>
          <h2 className="mt-12 text-2xl font-bold text-slate-950">Featured guides</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {featuredGuides.map((guide) => (<Link key={guide.slug} href={`/guides/${guide.slug}`} className="rounded-3xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-soft"><p className="text-xs font-bold uppercase tracking-wide text-amber-600">{guide.category}</p><h3 className="mt-3 text-lg font-bold leading-7 text-slate-950">{guide.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{guide.excerpt}</p></Link>))}
          </div>
          <h2 className="mt-12 text-2xl font-bold text-slate-950">Choose your region</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (<Link key={region.code} href={`/${region.code}`} className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-soft"><div className="text-4xl">{region.flag}</div><h3 className="mt-4 text-2xl font-semibold text-slate-950">{region.name}</h3><p className="mt-2 text-sm text-slate-500">Browse product ideas on Amazon.{region.domainLabel}</p><p className="mt-5 text-sm font-semibold text-amber-700">Open region →</p></Link>))}
          </div>
        </div>
      </section>
    </main>
  );
}
