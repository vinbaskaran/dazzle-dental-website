// Shared server component that renders a service landing page from a SERVICES entry.
// Renders visible content (hero, procedure detail, FAQ, CTA, related links) and
// injects per-page JSON-LD: MedicalProcedure + BreadcrumbList + FAQPage.

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { SERVICES } from "@/app/services-content";

function buildFaqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  };
}

export function ServiceLanding({ slug }) {
  const service = SERVICES[slug];
  const { procedure, breadcrumb, faqs, related } = service;
  const faqSchema = buildFaqSchema(faqs);

  return (
    <div className="App">
      <div className="min-h-screen bg-brand-light text-brand-navy pb-[57px] lg:pb-0">
        {/* Per-page JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(procedure) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <Header />

        <main className="max-w-3xl mx-auto px-6 py-20 md:py-24">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
            <a href="/" className="hover:text-brand-navy">Home</a>
            <span className="mx-2">/</span>
            <span className="text-brand-navy">{service.crumbName}</span>
          </nav>

          {/* Hero */}
          <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">
            {service.label}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-brand-navy leading-tight">
            {service.h1}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {service.intro}
          </p>

          <a
            href="/#booking"
            className="inline-block mt-8 px-6 py-3 rounded-full bg-brand-navy text-white font-medium hover:opacity-90 transition"
          >
            Book a Free Consultation
          </a>

          {/* About the treatment */}
          <section className="mt-14">
            <h2 className="font-serif text-2xl md:text-3xl text-brand-navy">
              About {procedure.name}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {procedure.description}
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {procedure.preparation && (
                <div>
                  <h3 className="font-semibold text-brand-navy">Before treatment</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {procedure.preparation}
                  </p>
                </div>
              )}
              {procedure.howPerformed && (
                <div>
                  <h3 className="font-semibold text-brand-navy">How it's done</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {procedure.howPerformed}
                  </p>
                </div>
              )}
              {procedure.followup && (
                <div>
                  <h3 className="font-semibold text-brand-navy">Aftercare & follow-up</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {procedure.followup}
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-14">
            <h2 className="font-serif text-2xl md:text-3xl text-brand-navy">
              Frequently asked questions
            </h2>
            <div className="mt-6 divide-y divide-border">
              {faqs.map(([q, a]) => (
                <div key={q} className="py-5">
                  <h3 className="font-semibold text-brand-navy">{q}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related services */}
          <section className="mt-14">
            <h2 className="font-serif text-2xl md:text-3xl text-brand-navy">
              Related treatments
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {related.map((r) => (
                <a
                  key={r}
                  href={`/${r}`}
                  className="px-5 py-2.5 rounded-full border border-border text-sm font-medium text-brand-navy hover:bg-secondary transition"
                >
                  {SERVICES[r].crumbName} →
                </a>
              ))}
            </div>
          </section>

          {/* Closing CTA */}
          <section className="mt-14 rounded-2xl bg-brand-navy text-white p-8 text-center">
            <h2 className="font-serif text-2xl md:text-3xl">
              Your first consultation is on us.
            </h2>
            <p className="mt-3 text-white/80">
              Open all 7 days · 10 AM–1 PM & 5 PM–9 PM · Melakottaiyur, Chennai.
            </p>
            <a
              href="/#booking"
              className="inline-block mt-6 px-6 py-3 rounded-full bg-white text-brand-navy font-medium hover:opacity-90 transition"
            >
              Request an Appointment
            </a>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
        <MobileStickyCTA />
      </div>
    </div>
  );
}
