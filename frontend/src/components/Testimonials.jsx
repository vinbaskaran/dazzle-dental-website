import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../lib/constants";

export const Testimonials = () => {
  return (
    <section id="testimonials" data-testid="testimonials-section" className="py-24 md:py-32 bg-brand-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl">
          <div className="font-sans text-[11px] tracking-[0.3em] uppercase text-brand-teal">Loved by patients</div>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-tight tracking-tight">
            Stories that make us <span className="italic">smile every day.</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              data-testid={`testimonial-card-${i}`}
              className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-[0_8px_32px_rgba(31,78,121,0.06)] border border-brand-navy/5"
            >
              <Quote className="w-9 h-9 text-brand-teal/30 absolute top-7 right-7" />
              <div className="flex gap-0.5 text-brand-teal">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-brand-teal" />
                ))}
              </div>
              <p className="mt-5 font-serif text-lg lg:text-xl text-brand-navy leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 pt-5 border-t border-brand-navy/10 flex justify-between items-center">
                <div className="font-medium text-brand-navy">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-brand-teal">{t.treatment}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
