import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SERVICE_CATEGORIES } from "../lib/constants";

export const Services = () => {
  return (
    <section id="services" data-testid="services-section" className="relative py-24 md:py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl">
          <div className="font-sans text-[11px] tracking-[0.3em] uppercase text-brand-teal">What we do</div>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-tight tracking-tight">
            Three studios. <span className="italic">One destination</span> for your most confident self.
          </h2>
          <p className="mt-5 text-slate-600 leading-relaxed">
            Whether you need a smile makeover, glowing skin, or fuller hair — our specialists work side-by-side, so your
            transformation feels seamless and unhurried.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-12 gap-6 lg:gap-8">
          {SERVICE_CATEGORIES.map((cat, idx) => (
            <motion.article
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.12, ease: "easeOut" }}
              data-testid={`service-card-${cat.id.toLowerCase()}`}
              className={`group relative overflow-hidden rounded-[32px] ${
                idx === 1 ? "md:col-span-6" : "md:col-span-6 lg:col-span-3"
              } ${idx === 0 ? "lg:col-span-5" : ""} ${idx === 2 ? "lg:col-span-4" : ""} aspect-[4/5] lg:aspect-auto lg:min-h-[620px]`}
            >
              <img
                src={cat.image}
                alt={`${cat.title} treatments at Dazzle Dental & Cosmetic Studio, Melakottaiyur — ${cat.overline}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent" />

              <div className="relative h-full flex flex-col justify-end p-7 lg:p-9 text-white">
                <div className="font-sans text-[10px] tracking-[0.3em] uppercase text-brand-teal-soft">{cat.overline}</div>
                <h3 className="mt-3 font-serif text-4xl lg:text-5xl tracking-tight">{cat.title}</h3>
                <p className="mt-3 text-sm text-white/80 max-w-md leading-relaxed">{cat.description}</p>

                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 max-w-md">
                  {cat.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-[13px] text-white/85">
                      <Check className="w-3.5 h-3.5 mt-1 flex-none text-brand-teal-soft" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <a
                    href="#booking"
                    data-testid={`service-${cat.id.toLowerCase()}-book-link`}
                    className="self-start inline-flex items-center gap-2 bg-white text-brand-navy px-6 py-3 rounded-full font-sans tracking-[0.18em] uppercase text-[11px] hover:bg-brand-teal hover:text-white transition-colors"
                  >
                    Book {cat.title} Consult →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Treatment Guides */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-16 border-t border-border pt-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="font-sans text-[11px] tracking-[0.3em] uppercase text-brand-teal">Treatment Guides</div>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            {SERVICE_CATEGORIES.filter(cat => cat.learnMoreLinks?.length).map((cat) => (
              <div key={cat.id}>
                <div className="font-serif text-lg text-brand-navy mb-4">{cat.title}</div>
                <ul className="space-y-2">
                  {cat.learnMoreLinks.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        className="group flex items-center gap-2 text-[13px] font-sans text-slate-600 hover:text-brand-teal transition-colors"
                      >
                        <span className="w-4 h-px bg-slate-300 group-hover:bg-brand-teal group-hover:w-5 transition-all duration-200 flex-none" />
                        {link.label.replace(" Guide", "")}
                        <span className="ml-auto text-slate-300 group-hover:text-brand-teal transition-colors text-xs">→</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
