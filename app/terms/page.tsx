import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/" className="text-sm text-slate-500 hover:text-slate-950">
        ← Back
      </Link>

      <h1 className="mt-6 text-4xl font-bold text-slate-950">
        Terms
      </h1>

      <p className="mt-6 leading-7 text-slate-600">
        Product information on Stella Deals is provided for general
        informational and editorial purposes only. Prices, availability, delivery
        options, product specifications and purchase conditions may change on
        Amazon or other third-party websites.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-950">
        No Direct Sales
      </h2>

      <p className="mt-4 leading-7 text-slate-600">
        Stella Deals does not sell products directly. The website may link to
        Amazon marketplaces or other third-party websites where visitors can
        verify product information and complete purchases. Stella Deals is not
        responsible for transactions, payments, shipping, delivery, returns,
        warranties or customer support related to products purchased on
        third-party websites.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-950">
        Product Information
      </h2>

      <p className="mt-4 leading-7 text-slate-600">
        The content on this website is based on general product categories and
        practical use cases. It should not be considered professional advice,
        technical certification or a guarantee that a product is suitable for a
        specific user. Visitors should always verify product details directly on
        Amazon before making a purchase.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-950">
        Intellectual Property
      </h2>

      <p className="mt-4 leading-7 text-slate-600">
        The original text, structure and editorial content published on Stella
        Deals belong to the website owner unless otherwise stated. Third-party
        names, trademarks and marketplaces belong to their respective owners.
        Stella Deals is not endorsed by, sponsored by or officially connected
        with Amazon unless clearly stated after any future program approval.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-950">
        External Links
      </h2>

      <p className="mt-4 leading-7 text-slate-600">
        This website may include links to external websites. Stella Deals cannot
        control external content, availability, policies or product pages.
        Visitors should review the terms and privacy policies of any third-party
        website they visit.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-950">
        Applicable Law
      </h2>

      <p className="mt-4 leading-7 text-slate-600">
        These terms are intended to be interpreted under Italian law, where
        applicable, without prejudice to mandatory consumer protection rules that
        may apply in the visitor’s country of residence.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-slate-950">
        Contact
      </h2>

      <p className="mt-4 leading-7 text-slate-600">
        For questions about these terms, contact Stella Deals at{" "}
        <a
          href="mailto:stelladeals.contact@gmail.com"
          className="font-semibold text-amber-700"
        >
          stelladeals.contact@gmail.com
        </a>
        .
      </p>
    </main>
  );
}
