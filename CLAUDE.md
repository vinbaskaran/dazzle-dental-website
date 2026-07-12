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
- **Mobile spacing (all 8 service pages, ≤768px):** a `<style>` override before `</head>` (marker `mobile spacing tightened`) sets `section` vertical padding to **32px top / 40px bottom** (was 88px; added 2026-07-11 to cut scroll length for ad traffic). The **hero** is handled separately — `.hero{padding:0 !important}` + `.hero-left{padding:32px 6% 40px}` — so it matches the same 32/40 rhythm. Desktop unchanged.
- **Analytics on every page:** GTM `GTM-NFHTT4T6`, GA4 `G-ZRBD0QKYY4`, **Microsoft Clarity** `xknxl0n8dh` (heatmaps + session recordings).
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

## 5b. Patient video testimonials (root-canal page) — 2026-07-11

Added a **patient video testimonial carousel** to `frontend/public/root-canal.html`, directly below the hero (before the trust strip), titled "Watch Our Patients' Real Experiences".

- **Source videos:** 5 vertical (9:16) clips from the manager's shared Drive folder "Dazzle_Patient testimonial" (owner balaitsmi@gmail.com). Downloaded, then **compressed with ffmpeg** to 720x1280 H.264 (`-crf 26`, `-movflags +faststart`, AAC 96k) — raw ~278 MB became ~22 MB total. Self-hosted in **`frontend/public/testimonials/1.mp4 … 5.mp4`** with **poster stills `1.jpg … 5.jpg`** (frame grabbed ~2s in).
- **Component:** the manager's uploaded React `TestimonialCarousel.jsx`/`.module.css` could NOT drop into this static page — it was **ported to vanilla HTML/CSS/JS** scoped under `#rcTestimonials` / `.rct-*`. On-brand (navy/teal, Playfair+Outfit). Swipeable scroll-snap track, dot nav + desktop arrows, **lazy-load** (`preload="none"`, real `src` set from `data-src` only on first play), tap-to-play with sound, single-video-at-a-time. **No name captions** (real patients, no consented names).
- The Drive **connector cannot enumerate files inside a shared folder** (only the folder itself) — the owner must share files directly, or you copy them into your own Drive, for the connector to read them. Here the videos were downloaded manually instead.

- **2026-07-11:** Replaced the hand-built inline **SVG tooth-anatomy diagram** in the "Inside Your Tooth" card with a raster image **`/gallery/Inside our tooth.png`** (referenced URL-encoded as `Inside%20our%20tooth.png`). Styled via `.anatomy-svg img`. The old SVG is gone from `root-canal.html` (recoverable from git history if ever needed).

- **2026-07-11:** In the "Why Patients Choose Dazzle" section, the main image is now **`/gallery/Root canal.png`** (self-hosted, replaced a hot-linked Pexels URL). NOTE: this PNG has a **clinic-room inset composited into the image itself** (bottom-right) — do NOT re-add an HTML `.why-img-accent` inset or you'll get a duplicate (that bug happened and was removed). The PNG was also cropped to strip baked-in AI junk (stray "ff" text + a teal pill column on the right edge). The old `.why-img-accent` CSS rules remain but are now unused/dead.

## 5c. Microsoft Clarity (analytics) — 2026-07-11

Added **Microsoft Clarity** (free heatmaps + session recordings) to the whole site. **Project ID: `xknxl0n8dh`** (account: Google `vineethbaskaran1@gmail.com`).

- **Install method: via GTM, NOT in code.** Clarity's own "Google Tag Manager" auto-connect created an official Microsoft Clarity tag inside container **`GTM-NFHTT4T6`** firing on **All Pages**, and published it. There is **no Clarity `<script>` in any HTML file** — do not add one (it would double-count). Every page (React homepage + all static pages) is covered automatically, including future pages.
- **Verified live** on 2026-07-11 via browser: `window.clarity` is an active function and the tag loads as `https://www.clarity.ms/tag/xknxl0n8dh?ref=gtm` on both `/` and `/root-canal`. The `?ref=gtm` + firing on production confirms the GTM version is published.
- To manage/pause it: change the tag in GTM (tagmanager.google.com → `GTM-NFHTT4T6`), or the project at clarity.microsoft.com. If a cookie-consent banner is added later, Clarity may need to be gated under analytics consent.

## 5d. Privacy Policy + analytics disclosure — 2026-07-11

Created **`frontend/public/privacy-policy.html`** (on-brand, at `/privacy-policy` via `_redirects`; added to `sitemap.xml`). Covers form data collected (name, phone, area, tooth concern, visit time, email/message → Google Sheet + email), cookies, **GA4, Microsoft Clarity (session replay/heatmaps), Google Ads**, third-party processing, data retention, user rights (India DPDP), and links the Microsoft Privacy Statement. Opens with Microsoft's recommended site-disclosure statement.

- **Footer "Privacy Policy" link + a one-line analytics disclosure added to every page:** the 7 intact static service pages (root-canal, dental-implants, teeth-whitening, smile-makeover, wisdom-tooth-extraction, hydra-facial, hair-prp), the React homepage (`src/components/Footer.jsx`), the ad landing page (`free-checkup.html`, important for Google Ads policy), and `thank-you.html`.
- Rationale: local competitors set a low bar (smiledentistree.com has no policy at all; karpagamdentalcare.com has a boilerplate one with a leftover `.local` dev URL). This is a real, tailored policy. Not legal advice — owner should have it reviewed.

- **2026-07-11: root-canal.html has NO mobile sticky CTA bar — removed intentionally.** Clarity/analytics showed mobile visitors tapped the fixed bottom "WhatsApp Us / Call Now" bar instead of viewing the page and submitting the booking form. Removed the `.sticky-bar` element + its CSS + the `body{padding-bottom:72px}` that reserved space for it. Desktop floating `.wa` WhatsApp circle and the hero "WhatsApp Us" button were kept. Do NOT re-add a mobile sticky CTA bar here without checking conversion data.

## 6. Gotchas for future sessions

- **Live site = `frontend/` (React homepage) + `frontend/public/*.html` (static service pages). `dazzle-next/` is NOT deployed.** Make changes in `frontend/`.
- **Git CRLF churn:** the working tree shows ~150 files as "modified" due to line-ending normalization. **Never `git add -A`** — stage specific files only.
- **Remote auto-commits:** something (likely the Emergent platform) pushes to `main` between sessions, so pushes are often rejected. Fix: `git pull --rebase origin main` then `git push`. Don't force-push.
- A git `improper chunk offset` object-corruption warning has appeared; if git misbehaves, run `git fsck --full`.
- **Never hot-link Google Business `gps-cs-s` image URLs** — they expire. Host images in `frontend/public/`.
- Apps Script `doGet` logs a row on a raw GET (guarded now to skip blank rows); still avoid opening the `/exec` URL directly.
- `backend/.env` secrets are committed → rotate.
- **Flaky sandbox mount can truncate large-file writes.** On 2026-07-11 edits to `root-canal.html` AND this `CLAUDE.md` silently truncated the files mid-write (cut off mid-tag/sentence). Recovery: `git show HEAD:<path> > /tmp/clean && cp /tmp/clean <path>`, then re-apply edits via a script. After editing, **verify with `wc -l` + `tail`** and check tag balance.
- **Stale `.git/index.lock`** appeared and could NOT be removed from the sandbox ("Operation not permitted"). Read-only git (`git show`, `git status`) still works, but commits are blocked until it's deleted. Remove it in your own Git Bash: `rm -f .git/index.lock`.
- **`braces-aligners.html` was TRUNCATED/BROKEN in the repo — REPAIRED 2026-07-11.** (discovered 2026-07-11). It ends mid-tag in the Related Services section (~1346 lines, no `</html>`) — missing the rest of Related Services, the footer, WhatsApp button, and ALL page scripts (FAQ accordion, animations, booking→WhatsApp). Introduced by the flaky-mount truncation during the past **942a818** "cross-links" commit; last intact version is **da65a4b** (1363 lines, but predates GTM/doctor-photo/cross-links). Needs reconstruction: take the current head + rebuild the missing tail from a sibling page (adapt Related Services links for braces). It is the one service page WITHOUT the new footer privacy link. Likely broken on the live site below the fold. **FIX:** rebuilt the tail (Related Services with 4 cross-links, footer + privacy link, WhatsApp, and the page's own scripts recovered verbatim from git **da65a4b**) grafted onto the current head (GTM + self-hosted doctor photo preserved). Verified tag-balanced. If this recurs on other pages, same recipe.
- **Self-hosted videos** live in `frontend/public/testimonials/`. Compress new source videos (720p, CRF 26, faststart) before committing — never commit raw phone MP4s (tens of MB each).

## 7. Working-style preferences (from the site owner)

- After any code change, provide a ready-to-run `git add <specific files> && git commit -m "…" && git push` command.
- Keep responses concise and direct.
- Proactively record non-obvious decisions/workarounds into this file for future reference.
