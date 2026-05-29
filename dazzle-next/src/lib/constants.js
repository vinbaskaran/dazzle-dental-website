export const CLINIC = {
  name: "Dazzle Dental & Cosmetic Studio",
  tagline: "Teeth · Skin · Hair",
  phone: "+91 94426 45111",
  phoneRaw: "+919442645111",
  whatsapp: "919442645111",
  email: "dazzledentalcosmetic@gmail.com",
  address:
    "First Floor, 76A/2, Kelambakkam–Vandalur Road, Melakottaiyur, Chennai – 600127, Tamil Nadu",
  mapQuery:
    "Dazzle Dental and Cosmetic Studio, Kelambakkam Vandalur Road, Melakottaiyur, Chennai 600127",
  hours: [
    { day: "All Days", time: "10:00 AM – 1:00 PM" },
    { day: "All Days", time: "5:00 PM – 9:00 PM" },
  ],
  logo: "/logo.PNG",
  social: {
    instagram: "https://www.instagram.com/dazzledentalandcosmeticstudio/",
    google: "https://share.google/PRNCci4CXp1uExMpm",
  },
};

export const SERVICE_CATEGORIES = [
  {
    id: "Teeth",
    title: "Teeth",
    overline: "Cosmetic & General Dentistry",
    learnMoreLinks: [
      { url: "/dental-implants", label: "Implants Guide" },
      { url: "/root-canal", label: "Root Canal Guide" },
      { url: "/braces-aligners", label: "Braces & Aligners Guide" },
      { url: "/teeth-whitening", label: "Teeth Whitening Guide" },
      { url: "/smile-makeover", label: "Smile Makeover Guide" },
      { url: "/wisdom-tooth-extraction", label: "Wisdom Tooth Guide" },
    ],
    description:
      "From flawless smile makeovers to implants, root canals and braces — full-spectrum dentistry under one roof.",
    image:
      "https://images.unsplash.com/photo-1758600434465-de17b9aef852?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwyfHxzbWlsaW5nJTIwd29tYW4lMjBwZXJmZWN0JTIwdGVldGh8ZW58MHx8fHwxNzc4NDg1MzU1fDA&ixlib=rb-4.1.0&q=85",
    items: [
      "Teeth Whitening",
      "Veneers & Crowns",
      "Dental Implants",
      "Root Canals",
      "Invisible Braces",
      "Braces (Orthodontics)",
      "Dentures & Bridges",
      "Cosmetic Procedures",
      "Teeth Reshaping",
      "Teeth Cleaning",
      "Fillings & Sealants",
      "Extractions",
      "Oral Surgery",
      "Paediatric Dentistry",
      "Emergency Care",
      "Check-ups & X-ray",
    ],
  },
  {
    id: "Skin",
    title: "Skin",
    overline: "Aesthetic Cosmetology",
    learnMoreLinks: [
      { url: "/hydra-facial", label: "Hydra Facial Guide" },
    ],
    description:
      "Reveal radiant, healthy skin with medical-grade facials, peels and targeted treatments.",
    image:
      "https://images.pexels.com/photos/5069430/pexels-photo-5069430.jpeg?auto=compress&cs=tinysrgb&w=1200&q=85",
    items: [
      "Hydra Facial",
      "Chemical Peeling",
      "Microdermabrasion",
      "Acne & Scar Treatment",
      "Dark Circle Removal",
      "Melasma Treatment",
      "Skin Tag & Wart Removal",
      "Lip Peel",
      "Microblading",
      "Skin PRP",
    ],
  },
  {
    id: "Hair",
    title: "Hair",
    overline: "Trichology & Restoration",
    learnMoreLinks: [
      { url: "/hair-prp", label: "Hair PRP Guide" },
    ],
    description:
      "Stronger, fuller hair through clinical PRP therapy and advanced trichology care.",
    image:
      "https://images.unsplash.com/photo-1764971590992-6cb000c079ac?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBoZWFsdGh5JTIwaGFpcnxlbnwwfHx8fDE3Nzg0ODUzNTV8MA&ixlib=rb-4.1.0&q=85",
    items: [
      "Hair PRP",
      "Advanced PRP",
    ],
  },
];

export const STATS = [
  { value: "5★", label: "Google Rating" },
  { value: "100+", label: "Patient Reviews" },
  { value: "30+", label: "Treatments Offered" },
  { value: "All Days", label: "Open · 10–1 & 5–9" },
];

export const DOCTORS = [
  {
    name: "Dr. Aishwarya Lakshmi",
    credentials: "BDS · FMC · PGDCC",
    role: "Chief Dentist & Founder",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGBnkZLSjhHx82lKDpM6lZN1dPebjAlNmF2HnFwsje16LOmRqXzQ20TMhxd2Pcz5U5XucgRzOl3c3bJxPjmmCMXl4KodDtDYIrRbP1bq1aFluyq4l7dBMbsTxkCGI-w3L7_iIA=s680-w680-h510-rw",
    bio: "Dr. Aishwarya leads Dazzle as the chief dentist, blending aesthetic dentistry with skin & hair care. Her practice combines a Bachelor of Dental Surgery (BDS) with a Fellowship in Maxillofacial Cosmetology (FMC) and a Post-Graduate Diploma in Clinical Cosmetology (PGDCC) — bringing teeth, skin and hair expertise under one studio.",
    highlights: [
      "Smile Designing & Veneers",
      "Cosmetology",
      "Hair & Skin PRP",
      "Painless General Dentistry",
    ],
  },
];

export const GALLERY = [
  {
    image: "/gallery/gallery-1-smile-makeover-veneers.jpg",
    label: "Smile Makeover — Veneers",
  },
  {
    image: "/gallery/gallery-2-smile-makeover-whitening.jpg",
    label: "Smile Makeover — Whitening",
  },
  {
    image: "/gallery/gallery-3-smile-makeover-bonding.jpg",
    label: "Smile Makeover — Composite Bonding",
  },
  {
    image: "/gallery/gallery-4-hydra-facial.jpg",
    label: "Hydra Facial",
  },
  {
    image: "/gallery/gallery-5-dental-bridge.jpg",
    label: "Dental Bridge",
  },
  {
    image: "/gallery/gallery-6-teeth-cleaning.jpg",
    label: "Teeth Cleaning",
  },
];

export const TESTIMONIALS = [
  {
    name: "Mukesh Thiru",
    treatment: "Root Canal Treatment",
    time: "16 hours ago",
    rating: 5,
    text: "I recently visited this dental hospital for a root canal treatment, and my experience was very good. The doctors were professional, patient, and explained the procedure clearly, which made me feel comfortable throughout the treatment, and the hospital maintained good hygiene and cleanliness. The treatment was smooth and relatively painless. I truly appreciate the care and attention I received and would recommend this hospital to anyone looking for quality dental care.",
  },
  {
    name: "Sri Sai Electrics",
    treatment: "Dental Care",
    time: "18 weeks ago",
    rating: 5,
    text: "Had a great experience at this dental clinic. The doctors were very friendly and explained the treatment clearly, which made me feel comfortable throughout. The clinic was clean and well-maintained, and the staff were polite and professional. Appointment timings were followed properly with minimal waiting time. The treatment results were excellent and the charges were reasonable. Highly recommended for quality dental care.",
  },
  {
    name: "Rahini Moorthy",
    treatment: "General Treatment",
    time: "27 weeks ago",
    rating: 5,
    text: "The doctor was very kind and patient throughout the treatment. The service was excellent, and the clinic was clean and comfortable. She clearly explained every step, which made me feel relaxed and confident.",
  },
  {
    name: "SURENDAR Rajendiran",
    treatment: "Teeth Cleaning",
    time: "36 weeks ago",
    rating: 5,
    text: "This was my first visit to this clinic, and I had a great experience. The doctor explained everything very clearly and in detail about the procedures. I got my teeth cleaned here, and she was very polite and made me feel comfortable throughout.",
  },
  {
    name: "Ramkumar A",
    treatment: "Wisdom Tooth Extraction",
    time: "38 weeks ago",
    rating: 5,
    text: "Highly recommended for dental care. Doctor explained clearly and removed the wisdom tooth. The surgery has been done with no pain. She is very friendly and attentive too.",
  },
  {
    name: "Sriram PKNSS",
    treatment: "Chemical Peeling",
    time: "26 Jan 2025 · Local Guide",
    rating: 5,
    text: "I recently got a chemical peeling treatment at Dazzle Clinic, and I'm thrilled with the results even though it's a new one! After the treatment, my skin felt refreshed, and I noticed an immediate improvement in texture and glow. Over the next few days, my skin continued to clear up, and the dark spots started fading. I'm extremely happy with the outcome and will definitely return for more treatments. Highly recommend Dazzle Clinic!",
  },
];

export const TIME_SLOTS = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
  "07:00 PM", "07:30 PM", "08:00 PM",
];
