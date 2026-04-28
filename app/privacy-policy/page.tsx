import Link from "next/link";

const contactEmail = "stelladeals.contact@gmail.com";

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/" className="text-sm text-slate-500 hover:text-slate-950">
        Back
      </Link>

      <h1 className="mt-6 text-4xl font-bold text-slate-950">Privacy Policy</h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: April 28, 2026</p>

      <section className="mt-8 space-y-4 leading-7 text-slate-600">
        <h2 className="text-2xl font-bold text-slate-950">Contact</h2>
        <p>
          Stella Deals can be contacted by email at{" "}
          <a href={`mailto:${contactEmail}`} className="font-semibold text-amber-700 hover:text-slate-950">
            {contactEmail}
          </a>
          . This email address is used for privacy requests, general questions and website correspondence.
        </p>
      </section>

      <section className="mt-8 space-y-4 leading-7 text-slate-600">
        <h2 className="text-2xl font-bold text-slate-950">What This Website Collects</h2>
        <p>
          Stella Deals is an editorial product discovery website. It does not require account registration and does
          not currently collect personal data through user accounts, checkout forms or comment systems.
        </p>
        <p>
          If you contact Stella Deals by email, the information you include in the message, such as your email address,
          name if provided and message content, may be processed only to read, manage and respond to the request.
        </p>
      </section>

      <section className="mt-8 space-y-4 leading-7 text-slate-600">
        <h2 className="text-2xl font-bold text-slate-950">Hosting And Technical Logs</h2>
        <p>
          The website is hosted on Vercel. Like most hosting providers, Vercel may process technical logs needed to
          deliver the site, protect the service and diagnose errors. These logs may include information such as IP
          address, browser type, device information, operating system, requested pages, timestamps and similar technical
          data.
        </p>
      </section>

      <section className="mt-8 space-y-4 leading-7 text-slate-600">
        <h2 className="text-2xl font-bold text-slate-950">Cookies And Analytics</h2>
        <p>
          Stella Deals does not currently use its own analytics tools, advertising cookies or tracking cookies. This may
          change in the future if the site adds privacy-conscious analytics or other features. If that happens, this
          policy will be updated with clearer information before or when those tools are introduced.
        </p>
      </section>

      <section className="mt-8 space-y-4 leading-7 text-slate-600">
        <h2 className="text-2xl font-bold text-slate-950">External Links</h2>
        <p>
          Stella Deals contains external links to Amazon marketplaces and may link to other third-party websites. Once
          you open an external website, that website is responsible for its own privacy practices, cookies, terms and
          content. You should review the privacy policy of Amazon or any other third party you visit.
        </p>
      </section>

      <section className="mt-8 space-y-4 leading-7 text-slate-600">
        <h2 className="text-2xl font-bold text-slate-950">Legal Basis</h2>
        <p>
          Where GDPR applies, Stella Deals may process limited personal data based on legitimate interest, including
          operating and securing the website, responding to email requests, maintaining technical reliability and
          understanding basic service issues from hosting logs. If consent-based tools are introduced in the future,
          consent information will be provided where required.
        </p>
      </section>

      <section className="mt-8 space-y-4 leading-7 text-slate-600">
        <h2 className="text-2xl font-bold text-slate-950">Retention</h2>
        <p>
          Email correspondence is kept only for as long as reasonably necessary to respond to the request and manage
          follow-up communication. Technical logs are generally retained according to the hosting provider's operational
          and security practices. Stella Deals does not keep visitor profiles or customer accounts.
        </p>
      </section>

      <section className="mt-8 space-y-4 leading-7 text-slate-600">
        <h2 className="text-2xl font-bold text-slate-950">Your GDPR Rights</h2>
        <p>
          If GDPR applies to you, you may have the right to request access to your personal data, correction of
          inaccurate data, deletion, restriction of processing, objection to processing and data portability. You can
          contact Stella Deals at {contactEmail} to make a request.
        </p>
        <p>
          You also have the right to contact your local data protection authority. In Italy, this is the Garante per la
          protezione dei dati personali. Other European countries have their own competent supervisory authorities.
        </p>
      </section>
    </main>
  );
}
