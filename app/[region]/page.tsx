import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, ShieldCheck, Search, Sparkles } from "lucide-react";
import { affiliateTags } from "@/data/affiliateTags";
import { brandName, categories, locales, regions, type RegionCode } from "@/data/locales";
import { products } from "@/data/products";

function isRegionCode(value: string): value is RegionCode { return regions.some((region) => region.code === value); }
function addAffiliateTag(url: string, region: RegionCode) { const tag = affiliateTags[region]; if (!tag) return url; try { const parsedUrl = new URL(url); parsedUrl.searchParams.set("tag", tag); return parsedUrl.toString(); } catch { return url; } }
export function generateStaticParams() { return regions.map((region) => ({ region: region.code })); }

export default async function RegionPage({ params }: { params: Promise<{ region: string }> }) {
  const resolvedParams = await params;
  if (!isRegionCode(resolvedParams.region)) notFound();
  const region = resolvedParams.region;
  const locale = locales[region];
  const availableProducts = products.map((product) => ({ ...product, localized: product.regions[region] })).filter((product) => product.localized);
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur"><div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5"><Link href="/" className="text-lg font-black tracking-tight text-slate-950">⭐ {brandName}</Link><nav className="flex flex-wrap justify-end gap-2 text-sm text-slate-600"><Link href="/guides" className="rounded-full bg-slate-100 px-3 py-1.5 font-medium hover:bg-slate-200">Guides</Link>{regions.map((item) => (<Link key={item.code} href={`/${item.code}`} className={`rounded-full px-3 py-1.5 font-medium ${item.code === region ? "bg-slate-950 text-white" : "bg-slate-100 hover:bg-slate-200"}`}>{item.flag} {item.code.toUpperCase()}</Link>))}</nav></div></header>
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.75fr] lg:items-center">
          <div className="rounded-[2rem] bg-white/90 p-8 shadow-soft ring-1 ring-slate-200"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{locale.eyebrow}</p><h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">{locale.title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{locale.subtitle}</p><div className="mt-8 flex flex-wrap gap-3"><span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"><ShieldCheck className="h-4 w-4" />{locale.trustBadge}</span><span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"><Search className="h-4 w-4" />{locale.curatedBadge}</span><span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800"><Sparkles className="h-4 w-4" />Stella Deals</span></div></div>
          <aside className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-soft"><h2 className="text-xl font-bold">{locale.aboutTitle}</h2><p className="mt-4 text-sm leading-7 text-slate-300">{locale.aboutText}</p><h3 className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">{locale.categoriesTitle}</h3><div className="mt-4 flex flex-wrap gap-2">{categories.map((category) => (<span key={category} className="rounded-full bg-white/10 px-3 py-1.5 text-sm">{category}</span>))}</div><Link href="/guides" className="mt-7 inline-flex rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-100">Read buying guides</Link></aside>
        </div>
        <div className="mt-8 rounded-3xl bg-amber-50 p-5 text-sm leading-6 text-amber-900 ring-1 ring-amber-200">Stella Deals may include links to Amazon marketplaces. Prices, availability and product details should always be checked directly on Amazon before purchase.</div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{availableProducts.map((product) => { const localized = product.localized!; const productUrl = addAffiliateTag(localized.amazonUrl, region); return (<article key={product.id} className="group overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-soft"><div className="flex h-48 items-center justify-center bg-gradient-to-br from-slate-100 to-amber-50 px-6 text-center"><div><div className="text-6xl transition group-hover:scale-110">{product.emoji}</div><p className="mt-4 rounded-full bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-500">{product.category}</p></div></div><div className="p-6"><h2 className="text-lg font-bold leading-7 text-slate-950">{localized.title}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{localized.description}</p><p className="mt-4 text-xs text-slate-400">{locale.noPriceText}</p><a href={productUrl} target="_blank" rel="nofollow sponsored noopener noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-600">{locale.button}<ExternalLink className="h-4 w-4" /></a></div></article>); })}</div>
      </section>
      <footer className="border-t border-slate-200 bg-white/90"><div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-500"><div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p>{locale.footerDisclosure}</p><div className="flex flex-wrap gap-4"><Link href="/guides" className="hover:text-slate-950">Guides</Link><Link href="/about" className="hover:text-slate-950">About</Link><Link href="/contact" className="hover:text-slate-950">Contact</Link><Link href="/affiliate-disclosure" className="hover:text-slate-950">Affiliate Disclosure</Link><Link href="/privacy-policy" className="hover:text-slate-950">Privacy Policy</Link><Link href="/terms" className="hover:text-slate-950">Terms</Link></div></div></div></footer>
    </main>
  );
}
