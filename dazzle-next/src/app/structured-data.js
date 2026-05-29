// JSON-LD structured data migrated from CRA public/index.html.
// Phase 4 will refine/split per-page; for now these render site-wide via layout.js.

export const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "https://www.dazzledentalstudio.in/#dentist",
  name: "Dazzle Dental & Cosmetic Studio",
  alternateName: "Dazzle Dental and Cosmetic Studio",
  description:
    "Premium dental and cosmetic studio in Melakottaiyur, Chennai offering dentistry, aesthetic cosmetology and trichology — Teeth, Skin and Hair under one roof. Led by Dr. Aishwarya Lakshmi (BDS, FMC, PGDCC).",
  image: "https://www.dazzledentalstudio.in/og-image.jpg",
  logo: "https://www.dazzledentalstudio.in/logo.PNG",
  url: "https://www.dazzledentalstudio.in/",
  telephone: "+91-94426-45111",
  email: "dazzledentalcosmetic@gmail.com",
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: "First Floor, 76A/2, Kelambakkam–Vandalur Road",
    addressLocality: "Melakottaiyur",
    addressRegion: "Tamil Nadu",
    postalCode: "600127",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 12.8703, longitude: 80.0731 },
  areaServed: [
    { "@type": "Place", name: "Melakottaiyur" },
    { "@type": "Place", name: "Mambakkam" },
    { "@type": "Place", name: "Kelambakkam" },
    { "@type": "Place", name: "Vandalur" },
    { "@type": "Place", name: "Chennai" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "17:00",
      closes: "21:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/dazzledentalandcosmeticstudio/",
    "https://www.google.com/maps/search/?api=1&query=Dazzle+Dental+%26+Cosmetic+Studio+Melakottaiyur+Chennai",
  ],
  founder: {
    "@type": "Person",
    name: "Dr. Aishwarya Lakshmi",
    honorificPrefix: "Dr.",
    jobTitle: "Chief Dentist & Founder",
    hasCredential: ["BDS", "FMC", "PGDCC"],
  },
  employee: [
    {
      "@type": "Person",
      name: "Dr. Aishwarya Lakshmi",
      honorificPrefix: "Dr.",
      jobTitle: "Chief Dentist",
      hasCredential: ["BDS", "FMC", "PGDCC"],
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "100",
    reviewCount: "100",
  },
  medicalSpecialty: ["Dentistry", "CosmeticDentistry", "Dermatology"],
  availableService: [
    { "@type": "MedicalProcedure", name: "Smile Designing & Veneers" },
    { "@type": "MedicalProcedure", name: "Teeth Whitening" },
    { "@type": "MedicalProcedure", name: "Dental Implants" },
    { "@type": "MedicalProcedure", name: "Root Canal Treatment" },
    { "@type": "MedicalProcedure", name: "Invisible Braces" },
    { "@type": "MedicalProcedure", name: "Orthodontic Braces" },
    { "@type": "MedicalProcedure", name: "Crowns & Bridges" },
    { "@type": "MedicalProcedure", name: "Paediatric Dentistry" },
    { "@type": "MedicalProcedure", name: "Wisdom Tooth Extraction" },
    { "@type": "MedicalProcedure", name: "Hydra Facial" },
    { "@type": "MedicalProcedure", name: "Chemical Peeling" },
    { "@type": "MedicalProcedure", name: "Microdermabrasion" },
    { "@type": "MedicalProcedure", name: "Acne & Scar Treatment" },
    { "@type": "MedicalProcedure", name: "Dark Circle Removal" },
    { "@type": "MedicalProcedure", name: "Hair PRP" },
    { "@type": "MedicalProcedure", name: "Advanced PRP" },
  ],
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Manisha Suriyamoorthy" },
      datePublished: "2026-05-15",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "I recently had a root canal treatment done by Dr. Aishwarya and I am extremely pleased with the results. From start to finish, the entire experience was excellent. Highly recommend for people with dental problems.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sri Sai Electrics" },
      datePublished: "2026-01-15",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Had a great experience at this dental clinic. The doctors were very friendly and explained the treatment clearly. The clinic was clean and well-maintained, staff polite and professional, charges reasonable. Highly recommended.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Rahini Moorthy" },
      datePublished: "2025-11-10",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "The doctor was very kind and patient throughout the treatment. The service was excellent, and the clinic was clean and comfortable. She clearly explained every step.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Surendar Rajendiran" },
      datePublished: "2025-09-05",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "First visit to this clinic and a great experience. The doctor explained everything clearly. Got my teeth cleaned here and she was very polite and made me feel comfortable.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Ramkumar A" },
      datePublished: "2025-08-22",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Highly recommended for dental care. Doctor explained clearly and removed the wisdom tooth. Surgery done with no pain. Very friendly and attentive.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sriram PKNSS" },
      datePublished: "2025-01-26",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "I recently got a chemical peeling treatment at Dazzle Clinic and I'm thrilled with the results. My skin felt refreshed, with an immediate improvement in texture and glow. Dark spots started fading. Highly recommend!",
    },
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ["Where is Dazzle Dental & Cosmetic Studio located?", "We are located at First Floor, 76A/2, Kelambakkam–Vandalur Road, Melakottaiyur, Chennai 600127, just minutes away from Mambakkam, Kelambakkam, and Vandalur."],
    ["What are the clinic timings at Dazzle Dental?", "We are open all 7 days a week from 10:00 AM to 1:00 PM and again from 5:00 PM to 9:00 PM. Walk-ins welcome, but appointments are recommended."],
    ["Who is the chief dentist at Dazzle Dental Studio?", "Dr. Aishwarya Lakshmi (BDS, FMC, PGDCC) is the chief dentist and founder. She specialises in cosmetic dentistry, smile designing, and aesthetic cosmetology including skin and hair treatments."],
    ["Do you offer EMI or no-cost payment plans?", "Yes, we offer 0% interest EMI plans on cosmetic procedures including smile makeovers, implants, and orthodontic treatments. Speak to our concierge during your consultation."],
    ["Is the first consultation really free?", "Yes — your first 30-minute consultation with a specialist is complimentary. You will receive a written treatment plan and transparent costing before deciding to proceed."],
    ["Do you offer skin and hair treatments alongside dental care?", "Yes, Dazzle is a full Dental & Cosmetic Studio. We offer hydra facials, chemical peeling, microdermabrasion, acne treatment, dark circle removal, skin PRP, and hair PRP — all under one roof in Chennai."],
    ["How can I book an appointment at Dazzle Dental?", "You can book an appointment online through our website, call us at +91 94426 45111, or message us on WhatsApp. We typically confirm appointment requests within 30 minutes."],
    ["What is the cost of dental implants in Chennai?", "At Dazzle Dental & Cosmetic Studio, dental implant costs vary depending on the brand and number of implants needed. We offer transparent pricing and 0% EMI options. Book a free consultation for a personalised treatment plan and exact quote."],
    ["How much does teeth whitening cost in Melakottaiyur?", "Professional teeth whitening at Dazzle Dental is available at competitive prices. The cost depends on the whitening method — in-chair laser whitening or take-home kits. We offer a free consultation to recommend the best option for your teeth."],
    ["Are braces or Invisible braces (aligners) available at Dazzle Dental?", "Yes, we offer both traditional metal braces and invisible aligners (clear braces) at Dazzle Dental & Cosmetic Studio. Our orthodontist will assess your teeth and recommend the best option. Invisible aligners are popular for adults who want a discreet option."],
    ["What is a smile makeover and how long does it take?", "A smile makeover is a customised combination of cosmetic dental treatments — such as teeth whitening, veneers, bonding, or orthodontics — designed to improve the appearance of your smile. At Dazzle, same-day smile makeovers are available for select cases. A full makeover plan is discussed during your free consultation."],
    ["Is root canal treatment painful?", "No. At Dazzle Dental, root canal treatments are performed with modern anaesthesia and painless techniques. Most patients feel little to no discomfort during the procedure. The goal is to relieve pain, not cause it — and our patients consistently confirm this in their reviews."],
    ["What is Hydra Facial and who is it suitable for?", "HydraFacial is a non-invasive skin treatment that cleanses, exfoliates, and hydrates the skin in one session. It is suitable for all skin types and addresses concerns like dullness, fine lines, congested pores, and uneven texture. At Dazzle, HydraFacial sessions are performed by trained cosmetologists."],
    ["What is Hair PRP and how many sessions are needed?", "Hair PRP (Platelet-Rich Plasma) is a treatment where your own blood is processed to extract growth factors and injected into the scalp to stimulate hair growth. Typically 4–6 sessions spaced 4 weeks apart are recommended, followed by maintenance sessions. Results are usually visible after the second or third session."],
    ["Does Dazzle Dental treat children (paediatric dentistry)?", "Yes, we provide gentle paediatric dental care at Dazzle Dental & Cosmetic Studio. Our team is experienced in treating children in a friendly, stress-free environment — covering check-ups, fluoride treatments, fillings, and early orthodontic assessment."],
    ["Is the clinic near Vandalur or Kelambakkam?", "Yes. Dazzle Dental & Cosmetic Studio is located on the Kelambakkam–Vandalur Road in Melakottaiyur, making it easily accessible from Vandalur, Kelambakkam, Mambakkam, Kandigai, and surrounding areas. It is well-connected by road and close to Vandalur Zoo junction."],
    ["What skin treatments are available for acne and scars?", "At Dazzle Cosmetic Studio, we offer a range of treatments for acne and scarring including chemical peels, microdermabrasion, skin PRP, and targeted acne treatments. Our cosmetologist will assess your skin and design a personalised treatment plan."],
  ].map(([name, text]) => ({
    "@type": "Question",
    name,
    acceptedAnswer: { "@type": "Answer", text },
  })),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dazzle Dental & Cosmetic Studio",
  url: "https://www.dazzledentalstudio.in/",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.dazzledentalstudio.in/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};
