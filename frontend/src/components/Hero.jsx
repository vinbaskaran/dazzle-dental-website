import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden bg-brand-light"
    >
      {/* Decorative teal blobs */}
      <div aria-hidden className="absolute -top-24 -right-32 w-[420px] h-[420px] bg-brand-teal/25 rounded-full blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -left-32 w-[460px] h-[460px] bg-brand-navy/10 rounded-full blur-3xl" />
      <div aria-hidden className="absolute inset-0 grain opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-teal/15 text-brand-navy"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase">Teeth · Skin · Hair</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-brand-navy leading-[1.05] mt-6 text-balance"
          >
            A studio for the
            <span className="block italic text-brand-teal">smile you've been hiding.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
            className="mt-7 font-sans text-base md:text-lg text-slate-600 leading-relaxed max-w-xl"
          >
            Dazzle is where modern dentistry meets aesthetic dermatology and trichology — a single studio in Chennai
            crafting confident, camera-ready you, from teeth to skin to hair.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#booking"
              data-testid="hero-book-button"
              className="group inline-flex items-center justify-center gap-2 bg-brand-navy text-white px-8 py-4 rounded-full hover:bg-brand-teal transition-colors duration-300 font-sans tracking-[0.18em] uppercase text-xs"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              data-testid="hero-services-link"
              className="inline-flex items-center justify-center bg-transparent border border-brand-navy text-brand-navy px-8 py-4 rounded-full hover:bg-brand-navy hover:text-white transition-colors duration-300 font-sans tracking-[0.18em] uppercase text-xs"
            >
              Explore Treatments
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex items-center gap-6"
          >
            <div className="flex -space-x-3">
              {["1559839734-2b71ea197ec2", "1594824476967-48c8b964273f", "1612349317150-e413f6a5b16d"].map((id) => (
                <img
                  key={id}
                  src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=120&q=80`}
                  alt=""
                  className="w-10 h-10 rounded-full ring-2 ring-brand-light object-cover"
                />
              ))}
            </div>
            <div className="text-sm">
              <div className="text-brand-navy font-medium">★ 4.9 · 2,400+ reviews</div>
              <div className="text-slate-500">Trusted by families across Chennai</div>
            </div>
          </motion.div>
        </div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-6 relative"
        >
          <div className="relative aspect-[4/5] rounded-[36px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(31,78,121,0.35)]">
            <img
              src="https://images.pexels.com/photos/5355921/pexels-photo-5355921.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=720"
              alt="Modern dental studio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent" />
          </div>

          {/* Floating chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden md:block absolute -left-8 bottom-12 bg-white rounded-2xl shadow-xl p-5 max-w-[230px] border border-brand-navy/5"
          >
            <div className="font-serif text-2xl text-brand-navy">12K+</div>
            <div className="text-xs text-slate-500 mt-1">Smiles transformed in our studio</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="hidden md:block absolute -right-6 top-10 bg-brand-navy text-white rounded-2xl shadow-xl p-5 max-w-[220px]"
          >
            <div className="font-sans text-[10px] tracking-[0.25em] uppercase text-brand-teal-soft">Painless · Premium</div>
            <div className="mt-2 font-serif text-lg leading-tight">Same-day smile makeovers available.</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
