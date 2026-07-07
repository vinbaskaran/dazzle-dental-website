# Dazzle Dental Studio — Project Reference

Reference for working on **www.dazzledentalstudio.in**. Last updated: 2026-07-07.

---

## 1. Hosting & deployment

Hosted on **Render** (not Netlify — Render also supports the `_redirects` file, which caused earlier confusion). Two services deploy from GitHub **`vinbaskaran/dazzle-dental-website`**, branch **`main`**, auto-deploy on push:

- **`dazzle-frontend`** (Static Site) → **this is the live website**. Builds the Create React App in `frontend/` and publishes `frontend/build`. That build also copies everything in `frontend/public/` (the standalone HTML service pages, `_redirects`, images) into the site root.
- **`dazzle-backend`** (Python/FastAPI web service, `backend/`) → **RETIRED / suspended**. Nothing on the site uses it anymore (see §5). It was crash-looping. Safe to delete; deleting it does not touch its MongoDB or the committed secrets.

Deploy timing: editing a file in `frontend/public/*.html` still goes through a Render rebuild; editing React (`frontend/src`) needs the rebuild (~a couple of minutes) + a hard refresh (Ctrl+Shift+R) to bust cache.

## 2. Repo layout (what matters)

- **`frontend/`** — Create React App. **The live site.**
  - `public/` — standalone static HTML pages + assets:
    - Service/landing pages: `root-canal.html`, `dental-implants.html`, `braces-aligners.html`, `teeth-whitening.html`, `smile-makeover.html`, `wisdom-tooth-extraction.html`, `hydra-facial.html`, `hair-prp.html`
    - Lead funnel: `free-checkup.html` (ad landing form), `thank-you.html`
    - `index.html` — CRA shell (the React homepage mounts here)
    - `_redirects` — clean URL → `.html` (e.g. `/root-canal` → `/root-canal.html`), plus `/free-checkup` and `/thank-you`
    - `sitemap.xml`, `robots.txt`, `doctor-aishwarya.jpg`, `gallery/`, og-images
  - `src/` — React homepage. Components in `src/components/` (Hero, Header, Services, Doctors, Gallery, Testimonials, FAQ, **BookingForm**, **Contact**, Footer, About). Data in **`src/lib/constants.js`** (doctor info, services, clinic details). Tailwind config `tailwind.config.js` holds brand tokens.
- **`dazzle-next/`** — a separate Next.js build that is **NOT deployed**. Ignore unless doing a deliberate migration.
- **`backend/`** — FastAPI (retired). `backend/.env` contains real secrets committed to the repo → **rotate them** (Mongo connection string, Resend key).

## 3. Design system (keep everything on-brand)

- **Fonts:** `Playfair Display` (serif — headings), `Outfit` (sans — body).
- **Colors** (Tailwind `brand.*` in React; CSS variables in the static HTML pages):
  - navy `#1F4E79`, navy-deep `#163A5C`, dark/navy-dark `#0A1929`
  - teal `#5BA9A8`, teal-soft `#9ECCCB` (static pages use `rgba(91,169,168,0.15)`)
  - light `#FDFDFB`, sand `#F5F5F0`, pearl `#EDF2F4`
  - text `#0F172A`, muted `#475569`, border `#E2E4E0`
- Buttons: navy background → teal on hover, subtle translateY lift.
- **Analytics on every page:** GTM `GTM-NFHTT4T6`, GA4 `G-ZRBD0QKYY4`.
- **Clinic facts:** Dr. Aishwarya Lakshmi (BDS · FMC · PGDCC). Phone `+91 94426 45111`. Melakottaiyur, Kelambakkam–Vandalur Rd, Chennai 600127. Open all 7 days, 10 AM–1 PM & 5–9 PM. Email `dazzledentalcosmetic@gmail.com`.

## 4. Lead capture — forms → Google Sheet + email

**All** forms POST (fire-and-forget, `mode:"no-cors"`, `keepalive:true`, body = JSON string, `Content-Type: text/plain`) to a **Google Apps Script web app** that appends to a Google Sheet **and** emails `dazzledentalcosmetic@gmail.com`.

- **Endpoint (`/exec`):** `https://script.google.com/macros/s/AKfycbz6wDB8f81J1I1HEWIsnwzh8jZM13Le-G-u6Ixp3OPII5M4ef6DotzUs7s_w5SU3M1KEA/exec`
- **Sheet:** "Dazzle_Google Ads_RT enquiries" — bookings go to `Sheet1` (Date, Name, Phone, Area, Tooth, Pain Since, Visit Time); contact messages go to a `Contacts` tab (Timestamp, Name, Email, Phone, Message, Source).
- **Apps Script functions:** `doPost` (routes by `type`: `"contact"` vs default booking, sends email), `doGet` (guarded so a bare GET does not log a blank row), `testSheet`, `testEmail`. **If you edit the script, redeploy the SAME deployment as a "New version"** (Manage deployments → ✏️ → New version) so the `/exec` URL stays the same and the wired forms keep working.

**The forms (all 6-step: name, phone, area, tooth, pain duration, visit timing):**

- `src/components/BookingForm.jsx` — homepage booking form. Auto-advances on option select and auto-submits on the last step via `chooseOption(field, value)` (passes the picked value directly to avoid React stale-state lag). Redirects to `/thank-you`.
- `public/free-checkup.html` — ad landing page at `/free-checkup`, same flow, vanilla JS.
- `public/root-canal.html` — embedded 6-step form inside `#rcBook` (styles scoped under `#rcBook` with `rc-` classes to avoid clashing with page CSS). Redirects to `/thank-you`.
- `src/components/Contact.jsx` — homepage "Contact us" (name, email, phone, message); posts with `type:"contact"`.

Data hand-off: forms write `sessionStorage["dazzle_lead"]`; `thank-you.html` reads it to personalize the page, show a summary, and build the WhatsApp confirm link (WhatsApp number `919442645111`).

## 5. Changes made in the 2026-07 session

- Added `/free-checkup` (6-step lead form) and `/thank-you` pages, restyled from the manager's Nunito/bright-blue originals to the brand system. Added `_redirects` entries.
- **Self-hosted the doctor photo** at `/doctor-aishwarya.jpg`, replacing an expiring Google Business `lh3.googleusercontent.com/gps-cs-s/...` URL, on all 8 service pages **and** the homepage (`constants.js`). (Those Google URLs expire — never hot-link them.)
- Removed `autoFocus` on homepage BookingForm step 1 (it was auto-scrolling the page down to the booking section on load).
- Restyled the homepage BookingForm to brand navy/teal (was bright blue).
- Replaced the root-canal page's old single-step booking form with the 6-step form.
- Wired all forms to the Google Sheet + email via Apps Script; rewired `Contact.jsx` off the dead backend; retired `dazzle-backend`.
- Fixed the homepage form's option auto-advance (React stale-state bug that caused lag / false "please select" errors / no auto-submit).

## 6. Gotchas for future sessions

- **Live site = `frontend/` (React homepage) + `frontend/public/*.html` (static service pages). `dazzle-next/` is NOT deployed.** Make changes in `frontend/`.
- **Git CRLF churn:** the working tree shows ~150 files as "modified" due to line-ending normalization. **Never `git add -A`** — stage specific files only.
- **Remote auto-commits:** something (likely the Emergent platform) pushes to `main` between sessions, so pushes are often rejected. Fix: `git pull --rebase origin main` then `git push`. Don't force-push.
- A git `improper chunk offset` object-corruption warning has appeared; if git misbehaves, run `git fsck --full`.
- **Never hot-link Google Business `gps-cs-s` image URLs** — they expire. Host images in `frontend/public/`.
- Apps Script `doGet` logs a row on a raw GET (guarded now to skip blank rows); still avoid opening the `/exec` URL directly.
- `backend/.env` secrets are committed → rotate.

## 7. Working-style preferences (from the site owner)

- After any code change, provide a ready-to-run `git add <specific files> && git commit -m "…" && git push` command.
- Keep responses concise and direct.
- Proactively record non-obvious decisions/workarounds into this file for future reference.
