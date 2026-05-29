"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Calendar as CalendarIcon, Loader2, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
} from "./ui/select";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { toast } from "sonner";
import { cn } from "../lib/utils";
import { SERVICE_CATEGORIES, TIME_SLOTS } from "../lib/constants";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const BookingForm = () => {
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    service_category: "", service: "",
    preferred_time: "", notes: "",
  });
  const [date, setDate] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const selectedCat = SERVICE_CATEGORIES.find((c) => c.id === form.service_category);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service_category || !date || !form.preferred_time) {
      toast.error("Please fill in name, phone, service, date and time.");
      return;
    }
    setLoading(true);
    try {
      const payload = {
        ...form,
        email: form.email || null,
        preferred_date: format(date, "yyyy-MM-dd"),
      };
      await axios.post(`${API}/appointments`, payload);
      setDone(true);
      toast.success("Appointment request received — we'll call you shortly.");
    } catch (err) {
      const detail = err?.response?.data?.detail || "Something went wrong. Please call us instead.";
      toast.error(typeof detail === "string" ? detail : "Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" data-testid="booking-section" className="py-24 md:py-32 bg-brand-light relative overflow-hidden">
      <div aria-hidden className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-brand-teal/15 rounded-full blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="font-sans text-[11px] tracking-[0.3em] uppercase text-brand-teal">Book a visit</div>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-tight tracking-tight">
              Your first <span className="italic">consultation is on us.</span>
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Tell us a little about you and pick a slot that suits. Our concierge will confirm within 30 minutes,
              Mon–Sat between 10 AM and 9 PM.
            </p>

            <div className="mt-10 space-y-5 text-sm">
              {[
                ["Free smile assessment", "30-min consult with a specialist · No obligation."],
                ["Transparent pricing", "Written treatment plan & cost before you decide."],
                ["EMI available", "0% interest plans for cosmetic procedures."],
              ].map(([t, s]) => (
                <div key={t} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal flex-none mt-0.5" />
                  <div>
                    <div className="font-medium text-brand-navy">{t}</div>
                    <div className="text-slate-500 mt-0.5">{s}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-[28px] shadow-[0_20px_60px_-15px_rgba(31,78,121,0.18)] p-8 md:p-10 border border-brand-navy/5">
              {done ? (
                <div data-testid="booking-success" className="py-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-teal/15 text-brand-teal flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="mt-6 font-serif text-3xl text-brand-navy">You're on our list ✨</h3>
                  <p className="mt-3 text-slate-600 max-w-md mx-auto">
                    We've received your request and our concierge will call you on <strong>{form.phone}</strong> shortly to confirm.
                  </p>
                  <Button
                    type="button"
                    data-testid="booking-new-button"
                    onClick={() => { setDone(false); setForm({ name: "", phone: "", email: "", service_category: "", service: "", preferred_time: "", notes: "" }); setDate(undefined); }}
                    className="mt-8 bg-brand-navy text-white hover:bg-brand-teal rounded-full px-8 py-6 uppercase tracking-[0.18em] text-xs"
                  >
                    Book Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={submit} data-testid="booking-form" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Full Name" required>
                      <Input
                        data-testid="booking-name-input"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="Your name"
                        className="border-0 border-b-2 border-brand-sand bg-transparent rounded-none px-0 focus-visible:ring-0 focus-visible:border-brand-teal h-11"
                      />
                    </Field>
                    <Field label="Phone" required>
                      <Input
                        data-testid="booking-phone-input"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="+91 ..."
                        className="border-0 border-b-2 border-brand-sand bg-transparent rounded-none px-0 focus-visible:ring-0 focus-visible:border-brand-teal h-11"
                      />
                    </Field>
                  </div>

                  <Field label="Email (optional)">
                    <Input
                      data-testid="booking-email-input"
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="you@email.com"
                      className="border-0 border-b-2 border-brand-sand bg-transparent rounded-none px-0 focus-visible:ring-0 focus-visible:border-brand-teal h-11"
                    />
                  </Field>

                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Service Category" required>
                      <Select
                        value={form.service_category}
                        onValueChange={(v) => { update("service_category", v); update("service", ""); }}
                      >
                        <SelectTrigger data-testid="booking-category-select" className="border-0 border-b-2 border-brand-sand bg-transparent rounded-none px-0 focus:ring-0 h-11">
                          <SelectValue placeholder="Choose..." />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICE_CATEGORIES.map((c) => (
                            <SelectItem key={c.id} value={c.id} data-testid={`booking-category-option-${c.id.toLowerCase()}`}>
                              {c.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                    <Field label="Specific Treatment">
                      <Select
                        value={form.service}
                        onValueChange={(v) => update("service", v)}
                        disabled={!selectedCat}
                      >
                        <SelectTrigger data-testid="booking-service-select" className="border-0 border-b-2 border-brand-sand bg-transparent rounded-none px-0 focus:ring-0 h-11">
                          <SelectValue placeholder={selectedCat ? "Choose treatment..." : "Pick category first"} />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedCat?.items.map((it) => (
                            <SelectItem key={it} value={it}>{it}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Preferred Date" required>
                      <Popover>
                        <PopoverTrigger asChild>
                          <button
                            type="button"
                            data-testid="booking-date-trigger"
                            className={cn(
                              "w-full h-11 flex items-center justify-between border-0 border-b-2 border-brand-sand bg-transparent rounded-none px-0 text-left",
                              !date && "text-slate-400"
                            )}
                          >
                            {date ? format(date, "EEE, dd MMM yyyy") : "Select a date"}
                            <CalendarIcon className="w-4 h-4 text-brand-teal" />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </Field>
                    <Field label="Preferred Time" required>
                      <Select value={form.preferred_time} onValueChange={(v) => update("preferred_time", v)}>
                        <SelectTrigger data-testid="booking-time-select" className="border-0 border-b-2 border-brand-sand bg-transparent rounded-none px-0 focus:ring-0 h-11">
                          <SelectValue placeholder="Choose slot..." />
                        </SelectTrigger>
                        <SelectContent className="max-h-72">
                          {TIME_SLOTS.map((t) => (
                            <SelectItem key={t} value={t}>{t}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>

                  <Field label="Notes (optional)">
                    <Textarea
                      data-testid="booking-notes-input"
                      value={form.notes}
                      onChange={(e) => update("notes", e.target.value)}
                      placeholder="Anything we should know? (sensitivities, prior treatments, etc.)"
                      rows={3}
                      className="border-0 border-b-2 border-brand-sand bg-transparent rounded-none px-0 focus-visible:ring-0 focus-visible:border-brand-teal resize-none"
                    />
                  </Field>

                  <Button
                    type="submit"
                    disabled={loading}
                    data-testid="booking-submit-button"
                    className="w-full bg-brand-navy text-white hover:bg-brand-teal rounded-full py-6 uppercase tracking-[0.22em] text-xs font-medium"
                  >
                    {loading ? (<><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</>) : "Request Appointment"}
                  </Button>
                  <p className="text-[11px] text-slate-400 text-center">
                    By submitting, you agree to be contacted by our team for confirmation.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, required, children }) => (
  <div>
    <Label className="text-[10px] tracking-[0.25em] uppercase text-slate-500">
      {label}{required && <span className="text-brand-teal ml-1">*</span>}
    </Label>
    <div className="mt-1">{children}</div>
  </div>
);