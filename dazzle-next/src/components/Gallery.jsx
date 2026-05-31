"use client";

import { motion } from "framer-motion";
import { GALLERY } from "../lib/constants";

export const Gallery = () => {
  return (
    <section id="gallery" data-testid="gallery-section" className="py-24 md:py-32 bg-brand-navy text-white relative overflow-hidden">
      <div aria-hidden className="absolute top-10 right-10 w-80 h-80 bg-brand-teal/20 rounded-full blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -left-32 w-[460px] h-[460px] bg-brand-teal/10 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl">
          <div className="font-sans text-[11px] tracking-[0.3em] uppercase text-brand-teal-soft">Before · After</div>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
            Real transformations <span className="italic">from real patients.</span>
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed">
            A peek into smiles, skin and scalps reborn at Dazzle. All cases shared with patient consent.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              data-testid={`gallery-card-${i}`}
              className="group relative bg-white/5 rounded-3xl p-4 backdrop-blur-sm border border-white/10 overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/10">
                <img
                  src={g.image}
                  alt={`${g.label} before & after — real patient transformation at Dazzle Dental & Cosmetic Studio, Chennai`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform [transition-duration:1.2s] ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute top-3 left-3 bg-white text-brand-navy text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full shadow">
                  {g.label}
                </span>
              </div>
              <div className="mt-4 px-2 pb-2 flex items-center justify-between">
                <div className="font-serif text-lg">{g.label}</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-brand-teal-soft">Case {String(i + 1).padStart(2, "0")}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};