# Dazzle Dental & Cosmetic Studio — PRD

## Original Problem Statement
Build a website for the dental clinic Dazzle Dental & Cosmetic Studio (Teeth · Skin · Hair) located near Mambakkam, Chennai. Brand assets: deep navy + teal palette, Playfair Display serif wordmark.

## User Choices (defaults assumed)
- Booking-enabled marketing site
- DB-only confirmation (clinic calls patient back)
- Before/After gallery + testimonials
- Premium cosmetic / spa-like editorial vibe
- Used info from supplied Google Maps link (clinic info stored in `/app/frontend/src/lib/constants.js`)

## User Personas
1. **Prospective Patient** — Discovers clinic via Google/Instagram, browses services, books a free consultation.
2. **Returning Patient** — Quickly contacts the clinic via WhatsApp/phone for a follow-up visit.
3. **Clinic Staff (future admin)** — Will eventually need a dashboard to manage appointments/contact messages.

## Architecture
- **Frontend**: React 19 + Tailwind + Framer Motion + Shadcn UI (Calendar, Select, Popover, Input, Textarea, Button, Sonner toasts).
- **Backend**: FastAPI + Motor (async MongoDB). All routes prefixed `/api`.
- **DB collections**: `appointments`, `contact_messages`, `status_checks`.

## Implemented (2026-05)
- Landing page with sections: Hero, Services (Teeth/Skin/Hair bento cards), About + stats, Doctors, Before/After Gallery, Testimonials, Booking Form, Contact + embedded Google Map, Footer.
- Sticky glass header + responsive mobile menu.
- Floating WhatsApp CTA.
- Appointment booking with shadcn calendar + time-slot select; success state shown after submit.
- Contact form with toast feedback.
- Backend endpoints: `GET /api/`, `GET /api/services`, `POST/GET /api/appointments`, `POST/GET /api/contact`.
- All interactive elements tagged with `data-testid`.
- Tested end-to-end: 100% backend (9/9) + 100% frontend (8/8).

## Backlog
### P0
- Real clinic info (exact address, phone, doctor names/photos) — currently using sensible defaults.
### P1
- Admin dashboard to view/manage appointments + contact messages (auth required).
- Email/WhatsApp confirmation on appointment submission (Resend/SendGrid + Twilio).
- Validate `service` against catalog server-side; reject past dates server-side.
### P2
- AI Smile Assistant chatbot (Claude/GPT).
- Blog / Dental tips section for SEO.
- Online consultation form with photo upload.
- Multi-language (Tamil + English).
