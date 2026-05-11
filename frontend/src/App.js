import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Doctors } from "./components/Doctors";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { BookingForm } from "./components/BookingForm";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

const Landing = () => (
  <div data-testid="landing-page" className="min-h-screen bg-brand-light text-brand-navy">
    <Header />
    <main>
      <Hero />
      <Services />
      <About />
      <Doctors />
      <Gallery />
      <Testimonials />
      <BookingForm />
      <Contact />
    </main>
    <Footer />
    <WhatsAppButton />
    <Toaster
      position="top-center"
      richColors
      toastOptions={{ style: { fontFamily: "Outfit, sans-serif" } }}
    />
  </div>
);

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
