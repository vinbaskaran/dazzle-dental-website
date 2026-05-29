import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Doctors } from "@/components/Doctors";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { BookingForm } from "@/components/BookingForm";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <div className="App">
      <div
        data-testid="landing-page"
        className="min-h-screen bg-brand-light text-brand-navy pb-[57px] lg:pb-0"
      >
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Doctors />
          <Gallery />
          <Testimonials />
          <BookingForm />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
        <MobileStickyCTA />
      </div>
    </div>
  );
}
