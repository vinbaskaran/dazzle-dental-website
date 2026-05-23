import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../lib/constants";

export const Testimonials = () => {
  return (
    <section id="testimonials" data-testid="testimonials-section" className="py-24 md:py-32 bg-brand-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="font-sans text-[11px] tracking-[0.3em] uppercase text-brand-teal">Loved on Google</div>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-tight tracking-tight">
              Real reviews from <span className="italic">real patients.</span>
            </h2>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Dazzle+Dental+%26+Cosmetic+Studio+Melakottaiyur+Chennai"
            target="_blank"
            rel="noreferrer"
            data-testid="testimonials-google-link"
            className="inline-flex items-center gap-3 bg-white border border-brand-navy/10 rounded-full pl-3 pr-5 py-2 shadow-[0_4px_18px_rgba(31,78,121,0.06)]"
          >
            <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center font-medium text-brand-navy ring-1 ring-brand-navy/10">G</span>
            <div className="text-left leading-tight">
              <div className="flex gap-0.5 text-brand-teal">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-3.5 h-3.5 fill-brand-teal" />
                ))}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5 tracking-wide">5.0 · 100+ Google reviews</div>
            </div>
          </a>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              data-testid={`testimonial-card-${i}`}
              className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-[0_8px_32px_rgba(31,78,121,0.06)] border border-brand-navy/5 flex flex-col"
            >
              <Quote className="w-9 h-9 text-brand-teal/30 absolute top-7 right-7" />
              <div className="flex gap-0.5 text-brand-teal">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-brand-teal" />
                ))}
              </div>
              <p className="mt-5 font-serif text-base lg:text-lg text-brand-navy leading-relaxed italic flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 pt-5 border-t border-brand-navy/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-teal/15 text-brand-teal flex items-center justify-center font-medium text-sm">
                    {t.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                  <div className="leading-tight">
                    <div className="font-medium text-brand-navy text-sm">{t.name}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{t.time} · Google</div>
                  </div>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-brand-teal text-right whitespace-nowrap">
                  {t.treatment}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
