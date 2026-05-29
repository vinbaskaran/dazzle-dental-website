import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";

export const metadata = {
  title: "Root Canal in Chennai | Dazzle Dental & Cosmetic Studio",
  description:
    "Root Canal at Dazzle Dental & Cosmetic Studio, Melakottaiyur, Chennai. Expert care, transparent pricing, 0% EMI. Book a free consultation.",
  alternates: { canonical: "/root-canal" },
};

export default function Page() {
  return (
    <div className="App">
      <div className="min-h-screen bg-brand-light text-brand-navy pb-[57px] lg:pb-0">
        <Header />
        <main className="max-w-3xl mx-auto px-6 py-24">
          <h1 className="font-serif text-4xl md:text-5xl text-brand-navy">Root Canal</h1>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Content for this page is being migrated. Detailed treatment information,
            FAQs and structured data will be added in Phase 4 of the migration.
          </p>
          <a
            href="/#booking"
            className="inline-block mt-8 px-6 py-3 rounded-full bg-brand-navy text-white font-medium"
          >
            Book a Free Consultation
          </a>
        </main>
        <Footer />
        <WhatsAppButton />
        <MobileStickyCTA />
      </div>
    </div>
  );
}
