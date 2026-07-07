"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { SERVICES } from "@/app/services-content";

// ── FAQ Schema builder ──
function buildFaqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  };
}

// ── Areas / options ──
const AREAS = ["Melakottaiyur", "Mambakkam", "Vandalur", "Kelambakkam", "Perumbakkam", "Other"];
const TEETH = [
  { value: "Upper Front Teeth", icon: "⬆️", sub: "Top row, front teeth" },
  { value: "Upper Back Teeth", icon: "↖️", sub: "Top row, back teeth" },
  { value: "Lower Front Teeth", icon: "⬇️", sub: "Bottom row, front teeth" },
  { value: "Lower Back Teeth", icon: "↙️", sub: "Bottom row, back teeth" },
  { value: "Multiple Teeth", icon: "😬", sub: "More than one tooth" },
  { value: "Not Sure", icon: "🤷", sub: "Doctor can find it" },
];
const DURATIONS = [
  { value: "Just started today", icon: "🔴", sub: "Pain started today" },
  { value: "2–3 days", icon: "🟠", sub: "A few days of pain" },
  { value: "1–2 weeks", icon: "🟡", sub: "About a week or two" },
  { value: "More than 1 month", icon: "⚪", sub: "Pain for a long time" },
];
const SLOTS = [
  { value: "Today – Morning", icon: "🌅", sub: "10 AM – 1 PM" },
  { value: "Today – Evening", icon: "🌆", sub: "5 PM – 9 PM" },
  { value: "Tomorrow – Morning", icon: "📅", sub: "10 AM – 1 PM" },
  { value: "Tomorrow – Evening", icon: "🗓️", sub: "5 PM – 9 PM" },
  { value: "This Weekend", icon: "🎉", sub: "Saturday or Sunday" },
  { value: "Flexible – Call me", icon: "📞", sub: "Call me to fix a time" },
];
const STEP_LABELS = ["Your Name", "Mobile Number", "Your Area", "Tooth Affected", "Pain Duration", "Visit Timing"];
const TOTAL = 6;

// ── Booking Form ──
function RootCanalBookingForm() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [areaOther, setAreaOther] = useState("");
  const [tooth, setTooth] = useState("");
  const [duration, setDuration] = useState("");
  const [visit, setVisit] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = (s) => {
    if (s === 1 && !name.trim()) return { 1: "Please enter your name." };
    if (s === 2 && !/^\d{10}$/.test(phone.replace(/\s/g, "")))
      return { 2: "Please enter a valid 10-digit mobile number." };
    if (s === 3) {
      const a = area === "Other" ? areaOther.trim() : area;
      if (!a) return { 3: "Please select or type your area." };
    }
    if (s === 4 && !tooth) return { 4: "Please select which tooth is affected." };
    if (s === 5 && !duration) return { 5: "Please select how long you've had the pain." };
    if (s === 6 && !visit) return { 6: "Please select when you can visit." };
    return {};
  };

  const next = () => {
    const errs = validate(step);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    if (step === TOTAL) { handleSubmit(); return; }
    setStep((s) => s + 1);
  };

  const back = () => { setErrors({}); setStep((s) => s - 1); };

  const handleSubmit = () => {
    setSubmitting(true);
    const finalArea = area === "Other" ? (areaOther.trim() || "Other") : area;
    const waMsg = encodeURIComponent(
      `Hi Dazzle Dental! I'd like to book a FREE Root Canal Checkup 🦷\n\nName: ${name}\nPhone: ${phone}\nArea: ${finalArea}\nTooth: ${tooth}\nPain since: ${duration}\nCan visit: ${visit}`
    );

    // ── Save to Google Sheets ──
    fetch("https://script.google.com/macros/s/AKfycbz6wDB8f81J1I1HEWIsnwzh8jZM13Le-G-u6Ixp3OPII5M4ef6DotzUs7s_w5SU3M1KEA/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        area: finalArea,
        tooth,
        duration,
        visit,
        date: new Date().toLocaleString("en-IN"),
      }),
    }).catch(() => {});

    // ── Save for thank-you page ──
    sessionStorage.setItem("dazzle_lead", JSON.stringify({ name, phone, area: finalArea, tooth, duration, visit, waMsg }));

    setTimeout(() => {
      setSubmitting(false);
      window.location.href = "/thank-you";
    }, 1200);
  };

  const progress = (step / TOTAL) * 100;

  const optClass = (selected) =>
    `flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer text-left transition-all duration-150 w-full font-sans
    ${selected ? "border-blue-600 bg-blue-50 text-blue-900" : "border-slate-200 bg-slate-50 hover:border-blue-300 hover:bg-blue-50 text-slate-800"}`;

  return (
    <div id="booking" className="mt-14 rounded-2xl overflow-hidden border border-blue-100 shadow-xl bg-white">

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 px-6 py-6 text-white relative overflow-hidden">
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-6xl opacity-10 pointer-events-none">🦷</div>
        <div className="inline-block bg-white/15 border border-white/25 text-blue-100 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-2">
          Free Root Canal Checkup
        </div>
        <h2 className="font-serif text-2xl text-white">Book Your FREE Checkup</h2>
        <p className="text-white/75 text-sm mt-1 font-medium">Takes 60 seconds · We call you back in 30 minutes</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {["⭐ 5.0 Google Rating", "💉 Zero Pain", "📅 Open 7 Days"].map((p) => (
            <span key={p} className="bg-white/15 border border-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">{p}</span>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-blue-100">
        <div className="h-1.5 bg-blue-600 transition-all duration-500 rounded-full" style={{ width: `${progress}%` }} />
      </div>

      {/* Step label */}
      <div className="flex justify-between items-center px-6 pt-4 pb-1">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{STEP_LABELS[step - 1]}</span>
        <span className="text-xs font-bold text-slate-400">Step {step} of {TOTAL}</span>
      </div>

      {/* Form body */}
      <div className="px-6 pb-6 pt-3">

        {/* Q1 — Name */}
        {step === 1 && (
          <div>
            <p className="text-lg font-black text-slate-900 mb-1">What is your name? 👋</p>
            <p className="text-sm text-slate-400 font-semibold mb-4">So we can address you properly when we call.</p>
            <input
              className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 font-bold text-slate-800 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-slate-50 transition"
              placeholder="e.g. Priya Sharma"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
            {errors[1] && <p className="text-red-600 text-xs font-bold mt-2">{errors[1]}</p>}
          </div>
        )}

        {/* Q2 — Phone */}
        {step === 2 && (
          <div>
            <p className="text-lg font-black text-slate-900 mb-1">Your mobile number? 📱</p>
            <p className="text-sm text-slate-400 font-semibold mb-4">We will call you within 30 minutes to confirm.</p>
            <input
              className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 font-bold text-slate-800 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-slate-50 transition"
              placeholder="e.g. 98765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              inputMode="numeric"
              maxLength={12}
              autoFocus
            />
            {errors[2] && <p className="text-red-600 text-xs font-bold mt-2">{errors[2]}</p>}
          </div>
        )}

        {/* Q3 — Area */}
        {step === 3 && (
          <div>
            <p className="text-lg font-black text-slate-900 mb-1">Which area are you from? 📍</p>
            <p className="text-sm text-slate-400 font-semibold mb-4">Helps us understand how far you are from our clinic.</p>
            <div className="grid grid-cols-2 gap-2">
              {AREAS.map((a) => (
                <button key={a} type="button" className={optClass(area === a)}
                  onClick={() => { setArea(a); setErrors({}); }}>
                  <span className="text-lg">🏘️</span>
                  <span className="font-bold text-sm">{a}</span>
                </button>
              ))}
            </div>
            {area === "Other" && (
              <input
                className="w-full mt-3 border-2 border-slate-200 rounded-xl px-4 py-3 font-bold text-slate-800 text-sm outline-none focus:border-blue-500 bg-slate-50 transition"
                placeholder="Type your area name…"
                value={areaOther}
                onChange={(e) => setAreaOther(e.target.value)}
                autoFocus
              />
            )}
            {errors[3] && <p className="text-red-600 text-xs font-bold mt-2">{errors[3]}</p>}
          </div>
        )}

        {/* Q4 — Tooth */}
        {step === 4 && (
          <div>
            <p className="text-lg font-black text-slate-900 mb-1">Which tooth is paining? 🦷</p>
            <p className="text-sm text-slate-400 font-semibold mb-4">Point to where it hurts in your mouth.</p>
            <div className="grid grid-cols-2 gap-2">
              {TEETH.map((t) => (
                <button key={t.value} type="button" className={optClass(tooth === t.value)}
                  onClick={() => { setTooth(t.value); setErrors({}); setTimeout(next, 220); }}>
                  <span className="text-xl mt-0.5">{t.icon}</span>
                  <div>
                    <div className="font-bold text-sm leading-tight">{t.value}</div>
                    <div className="text-xs text-slate-400 font-semibold mt-0.5">{t.sub}</div>
                  </div>
                </button>
              ))}
            </div>
            {errors[4] && <p className="text-red-600 text-xs font-bold mt-2">{errors[4]}</p>}
          </div>
        )}

        {/* Q5 — Duration */}
        {step === 5 && (
          <div>
            <p className="text-lg font-black text-slate-900 mb-1">How long have you had this pain? ⏱️</p>
            <p className="text-sm text-slate-400 font-semibold mb-4">This helps our doctor understand how urgent your case is.</p>
            <div className="flex flex-col gap-2">
              {DURATIONS.map((d) => (
                <button key={d.value} type="button" className={optClass(duration === d.value)}
                  onClick={() => { setDuration(d.value); setErrors({}); setTimeout(next, 220); }}>
                  <span className="text-xl mt-0.5">{d.icon}</span>
                  <div>
                    <div className="font-bold text-sm">{d.value}</div>
                    <div className="text-xs text-slate-400 font-semibold">{d.sub}</div>
                  </div>
                </button>
              ))}
            </div>
            {errors[5] && <p className="text-red-600 text-xs font-bold mt-2">{errors[5]}</p>}
          </div>
        )}

        {/* Q6 — Visit */}
        {step === 6 && (
          <div>
            <p className="text-lg font-black text-slate-900 mb-1">When can you visit us? 📅</p>
            <p className="text-sm text-slate-400 font-semibold mb-4">Open all 7 days — morning 10 AM–1 PM and evening 5–9 PM.</p>
            <div className="grid grid-cols-2 gap-2">
              {SLOTS.map((s) => (
                <button key={s.value} type="button" className={optClass(visit === s.value)}
                  onClick={() => { setVisit(s.value); setErrors({}); }}>
                  <span className="text-xl mt-0.5">{s.icon}</span>
                  <div>
                    <div className="font-bold text-sm leading-tight">{s.value}</div>
                    <div className="text-xs text-slate-400 font-semibold mt-0.5">{s.sub}</div>
                  </div>
                </button>
              ))}
            </div>
            {errors[6] && <p className="text-red-600 text-xs font-bold mt-2">{errors[6]}</p>}
          </div>
        )}

        {/* Nav buttons */}
        <div className="flex gap-3 mt-5">
          {step > 1 && (
            <button type="button" onClick={back}
              className="border-2 border-slate-200 text-slate-500 font-bold rounded-full px-5 py-3 text-sm hover:border-slate-400 transition">
              ← Back
            </button>
          )}
          <button type="button" onClick={next} disabled={submitting}
            className="flex-1 bg-blue-700 hover:bg-blue-600 disabled:bg-slate-300 text-white font-black rounded-full py-3.5 text-sm tracking-wide transition-all shadow-md hover:shadow-lg">
            {submitting ? "Sending… ⏳" : step === TOTAL ? "Book My FREE Checkup ✅" : "Continue →"}
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-50 border-t border-slate-100 px-6 py-3 flex items-center gap-2">
        <span className="text-slate-400">🔒</span>
        <p className="text-xs text-slate-400 font-bold">
          Your details are private and safe · No spam ·{" "}
          <a href="tel:+919442645111" className="text-blue-600">+91 94426 45111</a>
        </p>
      </div>
    </div>
  );
}

// ── Main ServiceLanding component ──
export function ServiceLanding({ slug }) {
  const service = SERVICES[slug];
  const { procedure, breadcrumb, faqs, related } = service;
  const faqSchema = buildFaqSchema(faqs);

  return (
    <div className="App">
      <div className="min-h-screen bg-brand-light text-brand-navy pb-[57px] lg:pb-0">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(procedure) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        <Header />

        <main className="max-w-3xl mx-auto px-6 py-20 md:py-24">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
            <a href="/" className="hover:text-brand-navy">Home</a>
            <span className="mx-2">/</span>
            <span className="text-brand-navy">{service.crumbName}</span>
          </nav>

          {/* Hero */}
          <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">{service.label}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-brand-navy leading-tight">{service.h1}</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{service.intro}</p>

          <a href="#booking"
            className="inline-block mt-8 px-6 py-3 rounded-full bg-brand-navy text-white font-medium hover:opacity-90 transition">
            Book a Free Consultation
          </a>

          {/* About the treatment */}
          <section className="mt-14">
            <h2 className="font-serif text-2xl md:text-3xl text-brand-navy">About {procedure.name}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{procedure.description}</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {procedure.preparation && (
                <div>
                  <h3 className="font-semibold text-brand-navy">Before treatment</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{procedure.preparation}</p>
                </div>
              )}
              {procedure.howPerformed && (
                <div>
                  <h3 className="font-semibold text-brand-navy">How it's done</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{procedure.howPerformed}</p>
                </div>
              )}
              {procedure.followup && (
                <div>
                  <h3 className="font-semibold text-brand-navy">Aftercare & follow-up</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{procedure.followup}</p>
                </div>
              )}
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-14">
            <h2 className="font-serif text-2xl md:text-3xl text-brand-navy">Frequently asked questions</h2>
            <div className="mt-6 divide-y divide-border">
              {faqs.map(([q, a]) => (
                <div key={q} className="py-5">
                  <h3 className="font-semibold text-brand-navy">{q}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related services */}
          <section className="mt-14">
            <h2 className="font-serif text-2xl md:text-3xl text-brand-navy">Related treatments</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {related.map((r) => (
                <a key={r} href={`/${r}`}
                  className="px-5 py-2.5 rounded-full border border-border text-sm font-medium text-brand-navy hover:bg-secondary transition">
                  {SERVICES[r].crumbName} →
                </a>
              ))}
            </div>
          </section>

          {/* ── NEW 6-STEP BOOKING FORM ── */}
          <RootCanalBookingForm />

        </main>

        <Footer />
        <WhatsAppButton />
        <MobileStickyCTA />
      </div>
    </div>
  );
}

