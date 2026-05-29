"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { DOCTORS } from "../lib/constants";

export const Doctors = () => {
  const doctor = DOCTORS[0];

  return (
    <section id="doctors" data-testid="doctors-section" className="py-24 md:py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <div className="font-sans text-[11px] tracking-[0.3em] uppercase text-brand-teal">Meet the founder</div>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-tight tracking-tight">
              The specialist behind <span className="italic">every Dazzle smile.</span>
            </h2>
          </div>
          <p className="text-slate-600 max-w-md leading-relaxed">
            A dental surgeon trained in cosmetology — bringing teeth, skin and hair expertise to one studio in Chennai.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          data-testid="doctor-feature-card"
          className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
        >
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] shadow-[0_30px_80px_-20px_rgba(31,78,121,0.35)] group">
              <img
                src={doctor.image}
                alt={`${doctor.name} — ${doctor.credentials}, Chief Dentist at Dazzle Dental & Cosmetic Studio, Chennai`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-navy/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="font-serif text-2xl leading-tight">{doctor.name}</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-brand-teal-soft mt-1">{doctor.credentials}</div>
              </div>
            </div>
            <div className="hidden md:block absolute -bottom-6 -right-6 bg-brand-teal text-white px-6 py-4 rounded-2xl shadow-xl">
              <div className="font-serif text-lg leading-tight">{doctor.role}</div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="font-sans text-[11px] tracking-[0.3em] uppercase text-brand-teal">{doctor.role}</div>
            <h3 className="mt-3 font-serif text-3xl md:text-4xl text-brand-navy tracking-tight leading-tight">
              {doctor.name}
            </h3>
            <div className="mt-2 text-brand-teal font-medium tracking-wide">{doctor.credentials}</div>

            <p className="mt-7 text-slate-600 leading-relaxed text-base md:text-lg">
              {doctor.bio}
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {doctor.highlights.map((h) => (
                <div key={h} className="flex items-start gap-3 bg-brand-sand/60 rounded-2xl px-5 py-4">
                  <div className="w-7 h-7 rounded-full bg-brand-teal/15 text-brand-teal flex items-center justify-center flex-none mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-sm text-brand-navy font-medium">{h}</div>
                </div>
              ))}
            </div>

            <a
              href="#booking"
              data-testid="doctor-book-button"
              className="mt-10 inline-flex items-center gap-2 bg-brand-navy text-white px-8 py-4 rounded-full hover:bg-brand-teal transition-colors duration-300 font-sans tracking-[0.18em] uppercase text-xs"
            >
              Book a Consult with Dr. Aishwarya →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};