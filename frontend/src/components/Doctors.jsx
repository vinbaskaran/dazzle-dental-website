import { motion } from "framer-motion";
import { DOCTORS } from "../lib/constants";

export const Doctors = () => {
  return (
    <section id="doctors" data-testid="doctors-section" className="py-24 md:py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <div className="font-sans text-[11px] tracking-[0.3em] uppercase text-brand-teal">Meet the team</div>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-tight tracking-tight">
              Specialists who <span className="italic">care, listen, and craft.</span>
            </h2>
          </div>
          <p className="text-slate-600 max-w-md leading-relaxed">
            Every Dazzle doctor is board-certified and continuously trained at international academies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {DOCTORS.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              data-testid={`doctor-card-${i}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5]">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-navy/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="font-serif text-2xl">{d.name}</div>
                  <div className="text-xs uppercase tracking-widest text-brand-teal-soft mt-1">{d.role}</div>
                </div>
              </div>
              <p className="mt-5 text-sm text-slate-600 leading-relaxed">{d.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
