export const CLINIC = {
  name: "Dazzle Dental & Cosmetic Studio",
  tagline: "Teeth · Skin · Hair",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "hello@dazzledentalstudio.in",
  address: "Mambakkam Main Road, Chennai, Tamil Nadu 600127, India",
  hours: [
    { day: "Mon – Sat", time: "10:00 AM – 9:00 PM" },
    { day: "Sunday", time: "10:00 AM – 2:00 PM" },
  ],
  logo: "https://customer-assets.emergentagent.com/job_1f6d6be4-4280-4438-98e9-2b968b61d501/artifacts/96gf8srp_IMG_7906.JPG",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    google: "https://share.google/KclVl8YovVFYIAvbh",
  },
};

export const SERVICE_CATEGORIES = [
  {
    id: "Teeth",
    title: "Teeth",
    overline: "Cosmetic & General Dentistry",
    description:
      "From flawless smile makeovers to advanced implants — restore confidence with precision dentistry.",
    image:
      "https://images.unsplash.com/photo-1758600434465-de17b9aef852?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwyfHxzbWlsaW5nJTIwd29tYW4lMjBwZXJmZWN0JTIwdGVldGh8ZW58MHx8fHwxNzc4NDg1MzU1fDA&ixlib=rb-4.1.0&q=85",
    items: [
      "Smile Designing & Veneers",
      "Teeth Whitening",
      "Invisible Aligners",
      "Dental Implants",
      "Root Canal Treatment",
      "Braces & Orthodontics",
    ],
  },
  {
    id: "Skin",
    title: "Skin",
    overline: "Aesthetic Dermatology",
    description:
      "Reveal radiant, healthy skin with medical-grade facials, peels, lasers and anti-ageing care.",
    image:
      "https://images.pexels.com/photos/37229316/pexels-photo-37229316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    items: [
      "Hydra Facial",
      "Chemical Peels",
      "Laser Hair Removal",
      "Pigmentation Treatment",
      "Anti-Ageing & Botox",
      "Acne Therapy",
    ],
  },
  {
    id: "Hair",
    title: "Hair",
    overline: "Trichology & Restoration",
    description:
      "Stronger, fuller hair through PRP therapy, scalp treatments and expert trichology consults.",
    image:
      "https://images.unsplash.com/photo-1764971590992-6cb000c079ac?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBoZWFsdGh5JTIwaGFpcnxlbnwwfHx8fDE3Nzg0ODUzNTV8MA&ixlib=rb-4.1.0&q=85",
    items: [
      "PRP Hair Therapy",
      "Hair Transplant Consult",
      "Anti-Hair-Fall Treatment",
      "Dandruff & Scalp Therapy",
    ],
  },
];

export const STATS = [
  { value: "12K+", label: "Smiles Transformed" },
  { value: "15+", label: "Years of Expertise" },
  { value: "20+", label: "Specialist Doctors" },
  { value: "4.9★", label: "Google Rating" },
];

export const DOCTORS = [
  {
    name: "Dr. Anika Reddy",
    role: "Cosmetic Dentist · Smile Designer",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
    bio: "12+ years crafting natural, confidence-restoring smiles using digital smile design.",
  },
  {
    name: "Dr. Karthik Iyer",
    role: "Implantologist · Oral Surgeon",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80",
    bio: "Specialist in single-day implants and full-mouth rehabilitation.",
  },
  {
    name: "Dr. Sneha Varma",
    role: "Aesthetic Dermatologist",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80",
    bio: "Board-certified dermatologist for skin glow, anti-ageing and laser care.",
  },
];

export const GALLERY = [
  {
    before: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1581585504143-4cdd64ee2664?auto=format&fit=crop&w=800&q=80",
    label: "Smile Makeover · Veneers",
  },
  {
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    label: "Teeth Whitening · 90 mins",
  },
  {
    before: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1612531048118-826c0e1ec96b?auto=format&fit=crop&w=800&q=80",
    label: "Hydra Facial Glow",
  },
];

export const TESTIMONIALS = [
  {
    name: "Priya R.",
    treatment: "Smile Designing",
    rating: 5,
    text: "I was nervous about veneers but the Dazzle team walked me through every step. The result looks completely natural — I can't stop smiling.",
  },
  {
    name: "Arjun M.",
    treatment: "Dental Implants",
    rating: 5,
    text: "Painless implant procedure with zero downtime. The clinic feels like a spa, not a dental office. Highly recommend Dr. Karthik.",
  },
  {
    name: "Lakshmi V.",
    treatment: "Hydra Facial + PRP",
    rating: 5,
    text: "My skin glows like never before, and my hairfall has reduced dramatically after 3 PRP sessions. Truly a one-stop studio.",
  },
  {
    name: "Rahul S.",
    treatment: "Invisible Aligners",
    rating: 5,
    text: "Got my teeth straightened without anyone noticing. The 3D smile preview before starting was such a wow moment.",
  },
];

export const TIME_SLOTS = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
  "07:00 PM", "07:30 PM", "08:00 PM",
];
