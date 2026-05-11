import { motion } from "framer-motion";
import { ShieldCheck, Stethoscope, HeartHandshake, Award } from "lucide-react";
import { STATS } from "../lib/constants";

const PILLARS = [
  { icon: ShieldCheck, title: "Sterile & Safe", text: "Hospital-grade sterilisation and single-use instruments on every chair." },
  { icon: Stethoscope, title: "Specialist-led Care", text: "Each treatment delivered by a board-certified specialist, never a generalist." },
  { icon: HeartHandshake, title: "Painless Promise", text: "Modern anaesthesia, laser tools and a soothing studio for an unhurried visit." },
  { icon: Award, title: "Premium Materials", text: "We use globally trusted brands — Straumann, Invisalign, Cosmedix and more." },
];

export const About = () => {
  return (
    <section id="about" data-testid="about-section" className="relative py-24 md:py-32 bg-brand-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="font-sans text-[11px] tracking-[0.3em] uppercase text-brand-teal">Why Dazzle</div>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-tight tracking-tight">
              Not just a clinic. <span className="italic block">A confidence studio.</span>
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Born from a simple idea — that looking after your teeth, skin and hair should feel as good as a spa visit
              and as precise as a hospital. Dazzle brings together specialists, technology and warmth, all under one roof
              in Mambakkam.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {STATS.map((s) => (
                <div key={s.label} data-testid={`stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`} className="border-l-2 border-brand-teal pl-4">
                  <div className="font-serif text-3xl text-brand-navy">{s.value}</div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                data-testid={`pillar-${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                className={`bg-white rounded-3xl p-7 shadow-[0_8px_32px_rgba(31,78,121,0.06)] border border-brand-navy/5 ${
                  i % 2 === 1 ? "sm:mt-12" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-teal/15 text-brand-teal flex items-center justify-center">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 font-serif text-xl text-brand-navy">{p.title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
