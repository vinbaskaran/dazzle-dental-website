import "./globals.css";
import Script from "next/script";
import { Toaster } from "sonner";
import { dentistSchema, faqSchema, websiteSchema } from "./structured-data";

const SITE_URL = "https://www.dazzledentalstudio.in";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Dazzle Dental & Cosmetic Studio | Best Dentist in Melakottaiyur, Chennai — Teeth · Skin · Hair",
  description:
    "Dazzle Dental & Cosmetic Studio in Melakottaiyur, Chennai — led by Dr. Aishwarya Lakshmi (BDS, FMC, PGDCC). Painless dental care, smile makeovers, hydra facial, chemical peels & hair PRP. ★ 5.0 on Google · 100+ reviews. Book a free consultation.",
  keywords: [
    "dentist Melakottaiyur",
    "dental clinic Mambakkam",
    "cosmetic dentist Chennai",
    "smile makeover Chennai",
    "dental implants Chennai",
    "teeth whitening Mambakkam",
    "root canal Melakottaiyur",
    "hydra facial Chennai",
    "chemical peel Chennai",
    "hair PRP Chennai",
    "Dr Aishwarya Lakshmi",
    "Dazzle Dental",
    "best clinic in kandigai",
    "dental clinic vandalur kelambakkam road",
    "skin treatment kandigai",
    "hair prp vandalur",
  ],
  authors: [{ name: "Dazzle Dental & Cosmetic Studio" }],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: { canonical: "/" },
  verification: {
    google: "YZlK3g3NpU9fUkLoi97xARxT_I7TGdJOhppUtXfxjys",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Dazzle Dental & Cosmetic Studio",
    title:
      "Dazzle Dental & Cosmetic Studio | Best Dentist in Melakottaiyur, Chennai",
    description:
      "Premium dental & cosmetic studio in Chennai — Teeth, Skin & Hair under one roof. ★ 5.0 on Google. Led by Dr. Aishwarya Lakshmi (BDS, FMC, PGDCC). Book a free consultation today.",
    url: SITE_URL + "/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dazzle Dental & Cosmetic Studio logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dazzle Dental & Cosmetic Studio | Chennai",
    description:
      "Best dentist in Melakottaiyur · Smile Makeovers · Implants · Hydra Facial · Hair PRP. ★ 5.0 · 100+ Google reviews.",
    images: ["/og-image.jpg"],
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Melakottaiyur, Chennai, Tamil Nadu",
    "geo.position": "12.8703;80.0731",
    ICBM: "12.8703, 80.0731",
  },
};

export const viewport = {
  themeColor: "#1F4E79",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://lh3.googleusercontent.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        {children}
        <Toaster
          position="top-center"
          richColors
          toastOptions={{ style: { fontFamily: "Outfit, sans-serif" } }}
        />
        <Script id="posthog-init" strategy="afterInteractive">
          {`!(function (t, e) { var o, n, p, r; e.__SV || ((window.posthog = e), (e._i = []), (e.init = function (i, s, a) { function g(t, e) { var o = e.split("."); 2 == o.length && ((t = t[o[0]]), (e = o[1])), (t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))); }); } ((p = t.createElement("script")).type = "text/javascript"), (p.crossOrigin = "anonymous"), (p.async = !0), (p.src = s.api_host.replace(".i.posthog.com", "-assets.i.posthog.com") + "/static/array.js"), (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(p, r); var u = e; for (void 0 !== a ? (u = e[a] = []) : (a = "posthog"), u.people = u.people || [], u.toString = function (t) { var e = "posthog"; return "posthog" !== a && (e += "." + a), t || (e += " (stub)"), e; }, u.people.toString = function () { return u.toString(1) + ".people (stub)"; }, o = "init me ws ys ps bs capture je Di ks register register_once register_for_session unregister unregister_for_session Ps getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty Es $s createPersonProfile Is opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing Ss debug xs getPageViewId captureTraceFeedback captureTraceMetric".split(" "), n = 0; n < o.length; n++) g(u, o[n]); e._i.push([i, s, a]); }), (e.__SV = 1)); })(document, window.posthog || []);
          posthog.init("phc_xAvL2Iq4tFmANRE7kzbKwaSqp1HJjN7x48s3vr0CMjs", { api_host: "https://us.i.posthog.com", person_profiles: "identified_only", session_recording: { recordCrossOriginIframes: true, capturePerformance: false } });`}
        </Script>
      </body>
    </html>
  );
}
