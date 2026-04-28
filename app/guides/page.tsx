import Link from "next/link";
import { guides } from "@/data/guides";
import { brandName } from "@/data/locales";

export default function GuidesPage() {
  return (
    <main className="min-h-screen px-6 py-12"><section className="mx-auto max-w-6xl"><Link href="/" className="text-sm text-slate-500 hover:text-slate-950">← Back to {brandName}</Link><div className="mt-6 rounded-[2rem] bg-white/90 p-8 shadow-soft ring-1 ring-slate-200"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Buying Guides</p><h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Practical guides for choosing useful products.</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">These guides help visitors understand what types of products can be useful in everyday situations such as travel, study, desk setup, charging, organisation and content creation.</p><div className="mt-10 grid gap-5 md:grid-cols-2">{guides.map((guide) => (<Link key={guide.slug} href={`/guides/${guide.slug}`} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-soft"><div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500"><span className="rounded-full bg-amber-100 px-3 py-1 text-amber-700">{guide.category}</span><span>{guide.readTime}</span><span>{guide.date}</span></div><h2 className="mt-4 text-2xl font-bold leading-8 text-slate-950">{guide.title}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{guide.excerpt}</p><p className="mt-5 text-sm font-semibold text-amber-700">Read guide →</p></Link>))}</div></div></section></main>
  );
}
