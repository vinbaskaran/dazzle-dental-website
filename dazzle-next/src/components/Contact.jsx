"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { MapPin, Phone, Mail, Clock, Loader2, Send } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { CLINIC } from "../lib/constants";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in name, email and message.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent — we'll reply within 24 hours.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast.error("Couldn't send right now. Please call us.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-24 md:py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="font-sans text-[11px] tracking-[0.3em] uppercase text-brand-teal">Visit / Reach us</div>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-tight tracking-tight">
              Drop by, or <span className="italic">drop us a line.</span>
            </h2>

            <div className="mt-10 space-y-6">
              <Info icon={MapPin} title="Studio Address" body={CLINIC.address} />
              <Info icon={Phone} title="Call us" body={CLINIC.phone} href={`tel:${CLINIC.phoneRaw}`} testid="contact-phone" />
              <Info icon={Mail} title="Email" body={CLINIC.email} href={`mailto:${CLINIC.email}`} testid="contact-email" />
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-2xl bg-brand-teal/15 text-brand-teal flex items-center justify-center flex-none">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] tracking-widest uppercase text-slate-500">Hours</div>
                  {CLINIC.hours.map((h) => (
                    <div key={h.day} className="mt-1 text-brand-navy">
                      <span className="font-medium">{h.day}:</span> <span className="text-slate-600">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-3xl overflow-hidden border border-brand-navy/10 aspect-[16/10]" data-testid="contact-map">
              <iframe
                title="Dazzle Dental & Cosmetic Studio location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(CLINIC.mapQuery)}&output=embed`}
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
              />
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            data-testid="contact-form"
            className="lg:col-span-7 bg-white rounded-[28px] p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(31,78,121,0.12)] border border-brand-navy/5 self-start"
          >
            <div className="font-serif text-2xl text-brand-navy">Send us a message</div>
            <div className="mt-1 text-sm text-slate-500">Questions, second opinions, partnerships — all welcome.</div>

            <div className="mt-8 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <Input
                  data-testid="contact-name-input"
                  placeholder="Full name *"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="border-0 border-b-2 border-brand-sand rounded-none px-0 h-11 focus-visible:ring-0 focus-visible:border-brand-teal bg-transparent"
                />
                <Input
                  data-testid="contact-email-input"
                  placeholder="Email *"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="border-0 border-b-2 border-brand-sand rounded-none px-0 h-11 focus-visible:ring-0 focus-visible:border-brand-teal bg-transparent"
                />
              </div>
              <Input
                data-testid="contact-phone-input"
                placeholder="Phone (optional)"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                className="border-0 border-b-2 border-brand-sand rounded-none px-0 h-11 focus-visible:ring-0 focus-visible:border-brand-teal bg-transparent"
              />
              <Textarea
                data-testid="contact-message-input"
                placeholder="Your message *"
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="border-0 border-b-2 border-brand-sand rounded-none px-0 focus-visible:ring-0 focus-visible:border-brand-teal bg-transparent resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              data-testid="contact-submit-button"
              className="mt-8 bg-brand-navy text-white hover:bg-brand-teal rounded-full px-8 py-6 uppercase tracking-[0.22em] text-xs"
            >
              {loading ? (<><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</>) : (<><Send className="w-4 h-4 mr-2" /> Send Message</>)}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const Info = ({ icon: Icon, title, body, href, testid }) => (
  <div className="flex gap-4">
    <div className="w-11 h-11 rounded-2xl bg-brand-teal/15 text-brand-teal flex items-center justify-center flex-none">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <div className="text-[11px] tracking-widest uppercase text-slate-500">{title}</div>
      {href ? (
        <a href={href} data-testid={testid} className="text-brand-navy hover:text-brand-teal transition-colors">{body}</a>
      ) : (
        <div className="text-brand-navy">{body}</div>
      )}
    </div>
  </div>
);