import { useState } from "react";
import { motion } from "framer-motion";

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

export const BookingForm = () => {
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
  const [done, setDone] = useState(false);

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
    // Store for thank-you page
    sessionStorage.setItem("dazzle_lead", JSON.stringify({ name, phone, area: finalArea, tooth, duration, visit, waMsg }));
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
      // Redirect to thank-you page
      window.location.href = "/thank-you";
    }, 1200);
  };

  const progress = (step / TOTAL) * 100;

  // Option button style helper
  const optClass = (selected) =>
    `flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer text-left transition-all duration-150 w-full font-sans
    ${selected
      ? "border-blue-600 bg-blue-50 text-blue-900"
      : "border-slate-200 bg-slate-50 hover:border-blue-300 hover:bg-blue-50 text-slate-800"}`;

  return (
    <section id="booking" className="py-24 md:py-32 bg-[#F0F6FF] relative overflow-hidden">
      <div aria-hidden className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-blue-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3">
            🦷 Free Root Canal Checkup
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Book Your <span className="text-blue-700">FREE</span> Checkup
          </h2>
          <p className="mt-2 text-slate-500 text-sm font-medium">
            Takes 60 seconds · We call you back in 30 minutes
          </p>
          <div className="flex justify-center gap-3 mt-3 flex-wrap">
            {["⭐ 5.0 Google Rating", "💉 Zero Pain", "📅 Open 7 Days"].map((p) => (
              <span key={p} className="bg-white border border-blue-200 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                {p}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100"
        >
          {/* Progress bar */}
          <div className="h-1.5 bg-blue-100">
            <div
              className="h-1.5 bg-blue-600 transition-all duration-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Step label */}
          <div className="flex justify-between items-center px-7 pt-5 pb-1">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              {done ? "All Done!" : STEP_LABELS[step - 1]}
            </span>
            <span className="text-xs font-bold text-slate-400">
              {done ? "✅ Submitted" : `Step ${step} of ${TOTAL}`}
            </span>
          </div>

          {/* Form body */}
          {!done && (
            <div className="px-7 pb-7 pt-4">

              {/* Q1 — Name */}
              {step === 1 && (
                <motion.div key="q1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <p className="text-lg font-black text-slate-900 mb-1">What is your name? 👋</p>
                  <p className="text-sm text-slate-400 font-semibold mb-4">So we can address you properly when we call.</p>
                  <input
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 font-bold text-slate-800 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-slate-50 transition"
                    placeholder="e.g. Priya Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors[1] && <p className="text-red-600 text-xs font-bold mt-2">{errors[1]}</p>}
                </motion.div>
              )}

              {/* Q2 — Phone */}
              {step === 2 && (
                <motion.div key="q2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <p className="text-lg font-black text-slate-900 mb-1">Your mobile number? 📱</p>
                  <p className="text-sm text-slate-400 font-semibold mb-4">We will call you within 30 minutes to confirm your appointment.</p>
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
                </motion.div>
              )}

              {/* Q3 — Area */}
              {step === 3 && (
                <motion.div key="q3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <p className="text-lg font-black text-slate-900 mb-1">Which area are you from? 📍</p>
                  <p className="text-sm text-slate-400 font-semibold mb-4">Helps us understand how far you are from our clinic.</p>
                  <div className="grid grid-cols-2 gap-2.5">
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
                </motion.div>
              )}

              {/* Q4 — Which Tooth */}
              {step === 4 && (
                <motion.div key="q4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <p className="text-lg font-black text-slate-900 mb-1">Which tooth is paining? 🦷</p>
                  <p className="text-sm text-slate-400 font-semibold mb-4">Point to where it hurts in your mouth.</p>
                  <div className="grid grid-cols-2 gap-2.5">
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
                </motion.div>
              )}

              {/* Q5 — Duration */}
              {step === 5 && (
                <motion.div key="q5" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <p className="text-lg font-black text-slate-900 mb-1">How long have you had this pain? ⏱️</p>
                  <p className="text-sm text-slate-400 font-semibold mb-4">This helps our doctor understand how urgent your case is.</p>
                  <div className="flex flex-col gap-2.5">
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
                </motion.div>
              )}

              {/* Q6 — Visit Slot */}
              {step === 6 && (
                <motion.div key="q6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <p className="text-lg font-black text-slate-900 mb-1">When can you visit us? 📅</p>
                  <p className="text-sm text-slate-400 font-semibold mb-4">We are open all 7 days — morning 10 AM–1 PM and evening 5–9 PM.</p>
                  <div className="grid grid-cols-2 gap-2.5">
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
                </motion.div>
              )}

              {/* Nav buttons */}
              <div className="flex gap-3 mt-6">
                {step > 1 && (
                  <button type="button" onClick={back}
                    className="border-2 border-slate-200 text-slate-500 font-bold rounded-full px-5 py-3 text-sm hover:border-slate-400 transition">
                    ← Back
                  </button>
                )}
                <button type="button" onClick={next} disabled={submitting}
                  className="flex-1 bg-blue-700 hover:bg-blue-600 disabled:bg-slate-300 text-white font-black rounded-full py-3.5 text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-lg">
                  {submitting
                    ? "Sending… ⏳"
                    : step === TOTAL
                    ? "Book My FREE Checkup ✅"
                    : "Continue →"}
                </button>
              </div>

            </div>
          )}

          {/* Footer */}
          <div className="bg-slate-50 border-t border-slate-100 px-7 py-3 flex items-center gap-2">
            <span className="text-slate-400 text-base">🔒</span>
            <p className="text-xs text-slate-400 font-bold">
              Your details are private and safe · No spam ever ·{" "}
              <a href="tel:+919442645111" className="text-blue-600">+91 94426 45111</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingForm;

