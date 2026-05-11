import { motion } from "framer-motion";
import { GALLERY } from "../lib/constants";

export const Gallery = () => {
  return (
    <section id="gallery" data-testid="gallery-section" className="py-24 md:py-32 bg-brand-navy text-white relative overflow-hidden">
      <div aria-hidden className="absolute top-10 right-10 w-80 h-80 bg-brand-teal/20 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl">
          <div className="font-sans text-[11px] tracking-[0.3em] uppercase text-brand-teal-soft">Before · After</div>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
            Real transformations <span className="italic">from real patients.</span>
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed">
            A peek into smiles, skin and scalps reborn at Dazzle. (All images shared with consent.)
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {GALLERY.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              data-testid={`gallery-card-${i}`}
              className="bg-white/5 rounded-3xl p-4 backdrop-blur-sm border border-white/10"
            >
              <div className="grid grid-cols-2 gap-2">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <img src={g.before} alt="Before" className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 bg-white/90 text-brand-navy text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full">Before</span>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <img src={g.after} alt="After" className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 bg-brand-teal text-white text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full">After</span>
                </div>
              </div>
              <div className="mt-4 px-2 pb-2 font-serif text-lg">{g.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
