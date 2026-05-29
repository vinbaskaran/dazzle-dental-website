"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Where is Dazzle Dental & Cosmetic Studio located?",
    a: "We are at First Floor, 76A/2, Kelambakkam–Vandalur Road, Melakottaiyur, Chennai 600127 — just minutes from Mambakkam, Kelambakkam, and Vandalur. Free parking available.",
  },
  {
    q: "What are your clinic timings?",
    a: "We're open all 7 days a week, 10:00 AM – 1:00 PM and 5:00 PM – 9:00 PM. Appointments are recommended; walk-ins welcome subject to availability.",
  },
  {
    q: "Who is the chief dentist at Dazzle?",
    a: "Dr. Aishwarya Lakshmi (BDS, FMC, PGDCC) is our Chief Dentist and Founder. She specialises in cosmetic dentistry, smile design, and aesthetic cosmetology including skin & hair treatments.",
  },
  {
    q: "Is the first consultation really free?",
    a: "Yes — your first 30-minute consultation with a specialist is complimentary. You'll receive a written treatment plan with transparent pricing before any decision.",
  },
  {
    q: "Do you offer EMI / no-cost payment plans?",
    a: "Yes — 0% interest EMI plans are available on cosmetic procedures including smile makeovers, dental implants, and orthodontic treatments. Speak to our concierge during your visit.",
  },
  {
    q: "Do you offer skin and hair treatments too?",
    a: "Absolutely. Dazzle is a full Dental & Cosmetic Studio. We offer Hydra Facial, Chemical Peeling, Microdermabrasion, Acne & Scar Treatment, Dark Circle Removal, Skin PRP, and Hair PRP — all under one roof.",
  },
  {
    q: "How can I book an appointment?",
    a: "Book online through the form on this site, call +91 94426 45111, or WhatsApp us. Our concierge typically confirms appointment requests within 30 minutes during clinic hours.",
  },
];

export const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" data-testid="faq-section" className="py-24 md:py-32 bg-brand-light">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="font-sans text-[11px] tracking-[0.3em] uppercase text-brand-teal">Frequently asked</div>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-tight tracking-tight">
            Answers, before you <span className="italic">even ask.</span>
          </h2>
        </div>

        <div className="mt-14 divide-y divide-brand-navy/10 border-y border-brand-navy/10">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                data-testid={`faq-item-${i}`}
              >
                <button
                  type="button"
                  data-testid={`faq-toggle-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full text-left flex items-start justify-between gap-6 py-7 group"
                >
                  <span className="font-serif text-lg md:text-xl text-brand-navy pr-4 group-hover:text-brand-teal transition-colors">
                    {item.q}
                  </span>
                  <span className={`flex-none w-10 h-10 rounded-full border border-brand-navy/15 flex items-center justify-center transition-colors ${isOpen ? "bg-brand-navy text-white border-brand-navy" : "text-brand-navy"}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-7" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-slate-600 leading-relaxed pr-14">{item.a}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};