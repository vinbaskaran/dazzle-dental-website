// Per-service content + structured data for Phase 4 SEO.
// Schema (MedicalProcedure, BreadcrumbList) and FAQ Q&As are reused verbatim
// from the original standalone pages in frontend/public/*.html.
// The shared <ServiceLanding> component renders these + injects JSON-LD.

export const SERVICES = {
  "dental-implants": {
    "slug": "dental-implants",
    "title": "Dental Implants in Melakottaiyur, Chennai | Dazzle Dental Studio",
    "description": "Get permanent dental implants in Melakottaiyur, Chennai by Dr. Aishwarya Lakshmi (BDS, FMC, PGDCC). Natural-looking, long-lasting tooth replacement. ★ 5.0 on Google · 100+ reviews. Free consultation.",
    "crumbName": "Dental Implants",
    "label": "PERMANENT TOOTH REPLACEMENT",
    "h1": "Dental Implants in Melakottaiyur, Chennai",
    "intro": "Missing teeth affect far more than your smile — they change how you eat, speak and feel about yourself. At Dazzle Dental & Cosmetic Studio in Melakottaiyur, Dr. Aishwarya Lakshmi (BDS, FMC, PGDCC) places titanium dental implants that look, feel and function like natural teeth. Whether you need a single tooth replaced or a full-mouth restoration, you get a permanent, long-lasting solution with transparent pricing and 0% EMI options.",
    "ogImage": "/og-image-implants.jpg",
    "related": [
      "root-canal",
      "smile-makeover",
      "wisdom-tooth-extraction"
    ],
    "procedure": {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Dental Implant",
      "alternateName": [
        "Tooth Implant",
        "Endosseous Implant",
        "Single Tooth Implant",
        "Full Mouth Implant"
      ],
      "description": "A dental implant is a titanium post surgically placed into the jawbone to act as an artificial tooth root, onto which a crown, bridge, or denture is attached — providing a permanent, natural-looking tooth replacement.",
      "procedureType": "Surgical",
      "followup": "Crown, bridge, or denture placement onto the healed implant post",
      "preparation": "Comprehensive dental exam, X-ray or CBCT scan to assess bone density and placement site",
      "howPerformed": "A titanium implant post is placed into the jawbone under local anaesthesia. After a healing period of 3–6 months, an abutment and custom ceramic crown are attached to restore full tooth function and aesthetics.",
      "bodyLocation": "Jawbone and oral cavity",
      "status": "EventScheduled",
      "performedBy": {
        "@type": "Dentist",
        "@id": "https://www.dazzledentalstudio.in/#dentist",
        "name": "Dazzle Dental & Cosmetic Studio",
        "telephone": "+91-94426-45111",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "First Floor, 76A/2, Kelambakkam–Vandalur Road",
          "addressLocality": "Melakottaiyur",
          "addressRegion": "Tamil Nadu",
          "postalCode": "600127",
          "addressCountry": "IN"
        }
      }
    },
    "breadcrumb": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.dazzledentalstudio.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Dental Implants",
          "item": "https://www.dazzledentalstudio.in/dental-implants"
        }
      ]
    },
    "faqs": [
      [
        "Is dental implant surgery painful?",
        "No. The procedure is performed under local anaesthesia, so you feel no pain during the surgery. You may experience mild soreness or swelling for a few days after, which is easily managed with prescribed medication. Most patients are surprised at how comfortable the process is."
      ],
      [
        "How long do dental implants last?",
        "With proper oral hygiene and regular dental check-ups, dental implants can last a lifetime. The titanium post fuses permanently with your jawbone (osseointegration). The ceramic crown on top may need replacement after 15–20 years due to normal wear."
      ],
      [
        "What is the cost of dental implants in Chennai?",
        "The cost of a dental implant in Chennai varies based on the number of implants, the type of crown used, and any additional procedures like bone grafting. At Dazzle Dental, we provide fully transparent pricing after a free consultation and X-ray assessment. There are no hidden charges."
      ],
      [
        "Am I a suitable candidate for dental implants?",
        "Most adults with one or more missing teeth are good candidates for dental implants. You need sufficient jawbone density, healthy gums, and good overall health. Patients with diabetes, smokers, or those with bone loss may still be candidates with additional assessment. A free consultation at Dazzle Dental will determine your suitability."
      ],
      [
        "How many visits does a dental implant take?",
        "A dental implant is typically completed over 2–4 visits across 3–6 months. The first visit involves the implant post placement. After a healing period for osseointegration, an abutment is attached followed by the final crown. We will walk you through the exact timeline during your consultation."
      ],
      [
        "Are dental implants better than dentures or bridges?",
        "Yes, in most cases. Implants are the gold standard for tooth replacement. Unlike dentures, they don't slip or require adhesives. Unlike bridges, they don't require grinding down healthy adjacent teeth. Implants preserve jawbone, look and function like natural teeth, and are a permanent solution."
      ],
      [
        "Where can I get dental implants near Kelambakkam?",
        "Dazzle Dental & Cosmetic Studio is located at First Floor, 76A/2, Kelambakkam–Vandalur Road, Melakottaiyur, Chennai 600127 — directly on the Kelambakkam–Vandalur corridor. Open all 7 days including evenings 5–9 PM."
      ]
    ]
  },
  "root-canal": {
    "slug": "root-canal",
    "title": "Painless Root Canal Treatment in Melakottaiyur, Chennai | Dazzle Dental Studio",
    "description": "Get painless root canal treatment in Melakottaiyur, Chennai by Dr. Aishwarya Lakshmi (BDS, FMC, PGDCC). Single-visit RCT using rotary endodontics. ★ 5.0 on Google · 100+ reviews. Free consultation.",
    "crumbName": "Root Canal Treatment",
    "label": "PAINLESS ENDODONTICS",
    "h1": "Painless Root Canal Treatment in Melakottaiyur, Chennai",
    "intro": "A severe toothache or deep decay doesn't have to mean losing your tooth. At Dazzle Dental & Cosmetic Studio, root canal treatment is carried out by Dr. Aishwarya Lakshmi using modern rotary endodontics and gentle anaesthesia — most patients are comfortable throughout and many cases are completed in a single visit. The goal is simple: relieve your pain and save your natural tooth.",
    "ogImage": "/og-image-root-canal.jpg",
    "related": [
      "dental-implants",
      "smile-makeover",
      "teeth-whitening"
    ],
    "procedure": {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Root Canal Treatment",
      "alternateName": [
        "RCT",
        "Endodontic Treatment",
        "Root Canal Therapy"
      ],
      "description": "Root canal treatment removes infected or inflamed pulp from inside a tooth, cleans and seals the canals to save the natural tooth from extraction.",
      "procedureType": "Surgical",
      "followup": "Ceramic crown placement to restore tooth strength",
      "preparation": "Local anaesthesia administered to ensure complete comfort",
      "howPerformed": "The infected pulp is removed, canals are cleaned using rotary endodontic instruments, disinfected, and sealed with biocompatible material.",
      "bodyLocation": "Tooth",
      "status": "EventScheduled",
      "performedBy": {
        "@type": "Dentist",
        "@id": "https://www.dazzledentalstudio.in/#dentist",
        "name": "Dazzle Dental & Cosmetic Studio",
        "telephone": "+91-94426-45111",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "First Floor, 76A/2, Kelambakkam–Vandalur Road",
          "addressLocality": "Melakottaiyur",
          "addressRegion": "Tamil Nadu",
          "postalCode": "600127",
          "addressCountry": "IN"
        }
      }
    },
    "breadcrumb": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.dazzledentalstudio.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Root Canal Treatment",
          "item": "https://www.dazzledentalstudio.in/root-canal"
        }
      ]
    },
    "faqs": [
      [
        "Is root canal treatment painful?",
        "No. Modern root canal treatment at Dazzle Dental is no more painful than getting a filling. We use local anaesthesia to completely numb the area before beginning. Most patients report feeling mild pressure but zero pain. Any post-procedure soreness resolves within 1–2 days."
      ],
      [
        "How many visits does root canal treatment take?",
        "Most root canals at Dazzle Dental are completed in a single visit using our rotary endodontic system. Complex cases with severe infection may require 2 sittings. Crown placement is a separate appointment, typically 1–2 weeks later."
      ],
      [
        "What is the cost of root canal treatment in Chennai?",
        "Root canal treatment cost varies based on which tooth is treated and the complexity of the case. At Dazzle Dental, we provide completely transparent pricing after your initial X-ray and diagnosis consultation — which is FREE. There are no hidden charges."
      ],
      [
        "How long does a root-canal treated tooth last?",
        "With a good ceramic crown and proper oral hygiene, a root-canal treated tooth can last a lifetime. We use high-quality biocompatible sealing materials for the best long-term outcomes."
      ],
      [
        "Can I eat after root canal treatment?",
        "You can eat once the anaesthesia wears off (usually 2–4 hours). Avoid chewing on the treated side until the permanent crown is placed. Soft foods are recommended for the first 24–48 hours."
      ],
      [
        "Is root canal better than tooth extraction?",
        "In most cases, yes. Saving your natural tooth through root canal treatment is almost always preferable to extraction. Natural teeth maintain your bite alignment, prevent bone loss, and are far more comfortable than any replacement. Extraction also leads to higher costs later — implants or bridges are more expensive than a root canal and crown."
      ],
      [
        "Where is Dazzle Dental located for root canal treatment?",
        "Dazzle Dental & Cosmetic Studio is located at First Floor, 76A/2, Kelambakkam–Vandalur Road, Melakottaiyur, Chennai 600127. We are easily accessible from Vandalur, Kelambakkam, Mambakkam, and Kandigai."
      ]
    ]
  },
  "braces-aligners": {
    "slug": "braces-aligners",
    "title": "Braces & Invisible Aligners in Melakottaiyur, Chennai | Dazzle Dental Studio",
    "description": "Get metal braces, ceramic braces or invisible aligners in Melakottaiyur, Chennai by Dr. Aishwarya Lakshmi (BDS, FMC, PGDCC). Straighter teeth, confident smile. ★ 5.0 on Google · 100+ reviews. Free consultation.",
    "crumbName": "Braces & Aligners",
    "label": "TEETH STRAIGHTENING",
    "h1": "Braces & Invisible Aligners in Melakottaiyur, Chennai",
    "intro": "Crooked, crowded or gapped teeth can be straightened beautifully at any age. Dazzle Dental & Cosmetic Studio offers the full range of orthodontic options — traditional metal braces, discreet ceramic braces and clear invisible aligners — tailored to your teeth and lifestyle. Dr. Aishwarya Lakshmi maps out a personalised treatment plan so you know exactly what to expect on the way to a confident, well-aligned smile.",
    "ogImage": "/og-image-braces.jpg",
    "related": [
      "smile-makeover",
      "teeth-whitening",
      "dental-implants"
    ],
    "procedure": {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Orthodontic Treatment",
      "alternateName": [
        "Dental Braces",
        "Invisible Aligners",
        "Clear Aligners",
        "Ceramic Braces",
        "Teeth Straightening"
      ],
      "description": "Orthodontic treatment uses braces or clear aligners to gradually move misaligned or crooked teeth into the correct position, improving both the appearance of the smile and the function of the bite.",
      "procedureType": "Non-Surgical",
      "followup": "Retainer wear to maintain teeth alignment after treatment completion",
      "preparation": "Dental X-rays and impressions to map current tooth positions and create a personalised treatment plan",
      "howPerformed": "Custom brackets and wires (braces) or a series of clear removable aligners are used to apply gentle, sustained pressure to move teeth progressively over weeks and months.",
      "bodyLocation": "Teeth and jaw",
      "status": "EventScheduled",
      "performedBy": {
        "@type": "Dentist",
        "@id": "https://www.dazzledentalstudio.in/#dentist",
        "name": "Dazzle Dental & Cosmetic Studio",
        "telephone": "+91-94426-45111",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "First Floor, 76A/2, Kelambakkam–Vandalur Road",
          "addressLocality": "Melakottaiyur",
          "addressRegion": "Tamil Nadu",
          "postalCode": "600127",
          "addressCountry": "IN"
        }
      }
    },
    "breadcrumb": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.dazzledentalstudio.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Braces & Aligners",
          "item": "https://www.dazzledentalstudio.in/braces-aligners"
        }
      ]
    },
    "faqs": [
      [
        "Are braces painful?",
        "Braces cause mild discomfort for 2–4 days after fitting and after each adjustment appointment as your teeth begin to move. This is normal and manageable with over-the-counter pain relief. The discomfort reduces significantly after the first few weeks as you get used to the appliance."
      ],
      [
        "How long does orthodontic treatment take?",
        "Treatment duration depends on the severity of misalignment. Minor corrections may take 6–12 months; moderate cases typically take 12–18 months; complex cases can take up to 24 months. Clear aligners often work faster for mild to moderate cases. Dr. Aishwarya will give you an accurate timeline after your initial assessment."
      ],
      [
        "What is the difference between metal braces and invisible aligners?",
        "Metal braces are fixed brackets bonded to teeth and connected with wires — they are highly effective for complex corrections and work continuously. Invisible aligners (like clear aligner trays) are removable, virtually invisible trays that you change every 1–2 weeks. Aligners suit mild to moderate cases and offer greater comfort and discretion. Both achieve excellent results; the right choice depends on your case and lifestyle."
      ],
      [
        "Are invisible aligners as effective as braces?",
        "Yes, for mild to moderate misalignment, clear aligners are equally effective as traditional braces. For complex cases involving significant rotation, bite correction, or large spacing, traditional braces may be more effective. Dr. Aishwarya will recommend the most effective option for your specific case after a thorough assessment."
      ],
      [
        "What is the cost of braces in Chennai?",
        "The cost depends on the type of treatment (metal, ceramic, or clear aligners) and the duration of treatment. At Dazzle Dental, we provide transparent pricing after your free initial consultation and X-ray assessment. There are no hidden fees — you know the full cost before starting."
      ],
      [
        "Can adults get braces or aligners?",
        "Absolutely. Orthodontic treatment is effective at any age. Adults often prefer ceramic braces or clear aligners for a more discreet appearance. There is no upper age limit — healthy teeth can be straightened at any point in life."
      ],
      [
        "Where can I get braces or aligners near Kelambakkam?",
        "Dazzle Dental & Cosmetic Studio is located at First Floor, 76A/2, Kelambakkam–Vandalur Road, Melakottaiyur, Chennai 600127 — directly on the Kelambakkam–Vandalur corridor. Open all 7 days including evenings 5–9 PM."
      ]
    ]
  },
  "teeth-whitening": {
    "slug": "teeth-whitening",
    "title": "Teeth Whitening in Melakottaiyur, Chennai | Dazzle Dental Studio",
    "description": "Get professional teeth whitening in Melakottaiyur, Chennai by Dr. Aishwarya Lakshmi (BDS, FMC, PGDCC). Safe, fast, dramatic results — 5–8 shades brighter in one visit. ★ 5.0 on Google · 100+ reviews. Free consultation.",
    "crumbName": "Teeth Whitening",
    "label": "SMILE BRIGHTENING",
    "h1": "Professional Teeth Whitening in Melakottaiyur, Chennai",
    "intro": "Years of coffee, tea and everyday staining can leave teeth looking dull. Professional teeth whitening at Dazzle Dental & Cosmetic Studio safely lifts deep stains to reveal a brighter, more confident smile — often several shades lighter in a single visit. Carried out by Dr. Aishwarya Lakshmi with clinically proven, enamel-safe whitening systems, it's one of the quickest ways to refresh your smile.",
    "ogImage": "/og-image-whitening.jpg",
    "related": [
      "smile-makeover",
      "braces-aligners",
      "root-canal"
    ],
    "procedure": {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Teeth Whitening",
      "alternateName": [
        "Tooth Whitening",
        "Dental Bleaching",
        "Smile Brightening",
        "Professional Teeth Bleaching"
      ],
      "description": "Professional teeth whitening is a cosmetic dental procedure that uses clinically proven bleaching agents to remove deep stains and discolouration from tooth enamel and dentine, resulting in a noticeably brighter, whiter smile.",
      "procedureType": "Noninvasive",
      "followup": "Maintenance whitening as needed; avoiding staining foods and beverages for 48 hours post-treatment",
      "preparation": "Dental examination and professional clean to remove surface plaque before whitening treatment",
      "howPerformed": "A professional-grade bleaching gel is applied to the teeth after gum protection is put in place. The gel is activated and left to work for the prescribed time. Multiple applications may be done in a single session for optimal results.",
      "bodyLocation": "Teeth (enamel and dentine)",
      "status": "EventScheduled",
      "performedBy": {
        "@type": "Dentist",
        "@id": "https://www.dazzledentalstudio.in/#dentist",
        "name": "Dazzle Dental & Cosmetic Studio",
        "telephone": "+91-94426-45111",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "First Floor, 76A/2, Kelambakkam–Vandalur Road",
          "addressLocality": "Melakottaiyur",
          "addressRegion": "Tamil Nadu",
          "postalCode": "600127",
          "addressCountry": "IN"
        }
      }
    },
    "breadcrumb": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.dazzledentalstudio.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Teeth Whitening",
          "item": "https://www.dazzledentalstudio.in/teeth-whitening"
        }
      ]
    },
    "faqs": [
      [
        "Is professional teeth whitening safe?",
        "Yes. Professional teeth whitening performed by a qualified dentist is safe for your enamel. At Dazzle Dental, we use clinically approved bleaching agents at safe concentrations, protect your gums before treatment, and tailor the procedure to your tooth sensitivity — ensuring effective, safe results."
      ],
      [
        "How many shades whiter can I expect after teeth whitening?",
        "Most patients at Dazzle Dental achieve 5–8 shades whiter teeth in a single professional session. Results vary depending on the original shade of your teeth and the nature of the staining. Patients with deep intrinsic stains (from tetracycline or fluorosis) may need multiple sessions for best results."
      ],
      [
        "How long does professional teeth whitening last?",
        "With proper care, professional teeth whitening results can last 1–3 years. Avoiding or reducing tea, coffee, red wine, and tobacco significantly extends results. Occasional top-up treatments help maintain brightness over time."
      ],
      [
        "Does teeth whitening cause sensitivity?",
        "Some patients experience mild, temporary sensitivity during or after whitening — this usually subsides within 24–48 hours. At Dazzle Dental, we assess your sensitivity levels beforehand and can adjust the treatment protocol or apply desensitising agents to keep you comfortable throughout."
      ],
      [
        "What is the cost of teeth whitening in Chennai?",
        "The cost of professional teeth whitening at Dazzle Dental varies based on the type of whitening and the degree of staining. We provide completely transparent pricing after a free consultation. Book a free consultation for an exact quote with no hidden charges."
      ],
      [
        "Is teeth whitening suitable for everyone?",
        "Professional whitening works best on natural teeth with extrinsic (surface) stains from food, tea, coffee, and tobacco. It is not suitable for crowns, veneers, or fillings (which will not whiten), and is not recommended for pregnant women or children under 16. A free consultation at Dazzle Dental will determine if whitening is right for you."
      ],
      [
        "Where can I get teeth whitening near Kelambakkam?",
        "Dazzle Dental & Cosmetic Studio is located at First Floor, 76A/2, Kelambakkam–Vandalur Road, Melakottaiyur, Chennai 600127 — directly on the Kelambakkam–Vandalur corridor. Open all 7 days including evenings 5–9 PM."
      ]
    ]
  },
  "smile-makeover": {
    "slug": "smile-makeover",
    "title": "Smile Makeover & Veneers in Melakottaiyur, Chennai | Dazzle Dental Studio",
    "description": "Transform your smile with a complete smile makeover or dental veneers in Melakottaiyur, Chennai. Dr. Aishwarya Lakshmi (BDS, FMC, PGDCC) designs smiles that look naturally stunning. ★ 5.0 on Google · 100+ reviews. Free consultation.",
    "crumbName": "Smile Makeover & Veneers",
    "label": "COSMETIC DENTISTRY",
    "h1": "Smile Makeover & Veneers in Melakottaiyur, Chennai",
    "intro": "A smile makeover combines the right mix of cosmetic treatments — veneers, whitening, bonding and contouring — to transform the colour, shape and alignment of your teeth. At Dazzle Dental & Cosmetic Studio, Dr. Aishwarya Lakshmi designs every smile around your face and your goals, previewing the result before treatment begins so you can move forward with complete confidence.",
    "ogImage": "/og-image-smile-makeover.jpg",
    "related": [
      "teeth-whitening",
      "braces-aligners",
      "dental-implants"
    ],
    "procedure": {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Smile Makeover",
      "alternateName": [
        "Dental Veneers",
        "Smile Design",
        "Cosmetic Smile Transformation",
        "Porcelain Veneers",
        "Composite Veneers"
      ],
      "description": "A smile makeover is a customised combination of cosmetic dental treatments — including veneers, teeth whitening, bonding, and contouring — designed to completely transform the appearance of a patient's smile in terms of colour, shape, size, and alignment.",
      "procedureType": "Noninvasive",
      "followup": "Regular dental check-ups; avoiding hard foods that may chip veneers; maintaining good oral hygiene",
      "preparation": "Comprehensive smile assessment, digital imaging or mock-up to preview the final result, shade selection for veneers or whitening",
      "howPerformed": "A smile makeover plan is designed based on the patient's goals and facial aesthetics. Treatments may include porcelain or composite veneers (thin shells bonded to the front of teeth), professional whitening, tooth contouring, bonding to repair chips, and gum contouring as needed. Each component is planned and sequenced for the best overall outcome.",
      "bodyLocation": "Teeth and oral cavity",
      "status": "EventScheduled",
      "performedBy": {
        "@type": "Dentist",
        "@id": "https://www.dazzledentalstudio.in/#dentist",
        "name": "Dazzle Dental & Cosmetic Studio",
        "telephone": "+91-94426-45111",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "First Floor, 76A/2, Kelambakkam–Vandalur Road",
          "addressLocality": "Melakottaiyur",
          "addressRegion": "Tamil Nadu",
          "postalCode": "600127",
          "addressCountry": "IN"
        }
      }
    },
    "breadcrumb": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.dazzledentalstudio.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Smile Makeover & Veneers",
          "item": "https://www.dazzledentalstudio.in/smile-makeover"
        }
      ]
    },
    "faqs": [
      [
        "What is included in a smile makeover?",
        "A smile makeover is a personalised combination of treatments chosen to address your specific concerns. It can include dental veneers (to change shape and colour), teeth whitening, dental bonding (to repair chips or gaps), tooth contouring, gum contouring, crowns, or orthodontic alignment. At Dazzle Dental, Dr. Aishwarya Lakshmi designs each smile makeover plan individually after a thorough consultation."
      ],
      [
        "What are dental veneers and how long do they last?",
        "Dental veneers are ultra-thin shells — made of porcelain or composite resin — that are bonded to the front surface of your teeth to change their colour, shape, size, or length. Porcelain veneers typically last 10–15 years with proper care; composite veneers last 5–7 years. They are stain-resistant, natural-looking, and one of the most transformative cosmetic dental treatments available."
      ],
      [
        "Is a smile makeover painful?",
        "Most smile makeover treatments are minimally invasive and comfortable. Veneer preparation involves very slight enamel reduction (typically less than 0.5 mm), done under local anaesthesia so you feel nothing. Whitening may cause brief, mild sensitivity. Bonding and contouring require no anaesthesia at all. At Dazzle Dental, your comfort is our priority at every step."
      ],
      [
        "How many visits does a smile makeover take?",
        "It depends on which treatments are included. A veneer-based smile makeover typically takes 2–3 visits: consultation and design, tooth preparation and temporaries, then final bonding. Simpler makeovers (whitening + bonding) can be completed in 1–2 visits. We will give you a clear timeline during your free consultation."
      ],
      [
        "What is the cost of a smile makeover in Chennai?",
        "The cost of a smile makeover depends on which treatments are included and how many teeth are involved. At Dazzle Dental, we provide fully transparent pricing after your free consultation and smile assessment. There are no hidden charges — you'll know the complete cost before any treatment begins."
      ],
      [
        "What is the difference between porcelain and composite veneers?",
        "Porcelain veneers are fabricated in a lab, last longer (10–15 years), are more stain-resistant, and have a more natural translucency — making them the gold standard. Composite veneers are applied chairside in a single visit, are more affordable, but generally last 5–7 years and may need touch-ups. Dr. Aishwarya will recommend the right option based on your goals, budget, and dental condition."
      ],
      [
        "Where can I get a smile makeover near Kelambakkam?",
        "Dazzle Dental & Cosmetic Studio is located at First Floor, 76A/2, Kelambakkam–Vandalur Road, Melakottaiyur, Chennai 600127 — directly on the Kelambakkam–Vandalur corridor. Open all 7 days including evenings 5–9 PM."
      ]
    ]
  },
  "wisdom-tooth-extraction": {
    "slug": "wisdom-tooth-extraction",
    "title": "Wisdom Tooth Removal in Melakottaiyur, Chennai | Dazzle Dental Studio",
    "description": "Painless wisdom tooth extraction in Melakottaiyur, Chennai by Dr. Aishwarya Lakshmi (BDS, FMC, PGDCC). Safe, swift removal with minimal recovery. ★ 5.0 on Google · 100+ reviews. Free consultation.",
    "crumbName": "Wisdom Tooth Extraction",
    "label": "ORAL SURGERY",
    "h1": "Wisdom Tooth Removal in Melakottaiyur, Chennai",
    "intro": "Impacted or painful wisdom teeth can cause swelling, crowding and infection if left untreated. At Dazzle Dental & Cosmetic Studio, wisdom tooth extraction is performed safely and swiftly by Dr. Aishwarya Lakshmi under local anaesthesia, with clear aftercare guidance for a smooth, comfortable recovery. Most cases are completed in a single visit.",
    "ogImage": "/og-image-wisdom-tooth.jpg",
    "related": [
      "root-canal",
      "dental-implants",
      "smile-makeover"
    ],
    "procedure": {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Wisdom Tooth Extraction",
      "alternateName": [
        "Wisdom Tooth Removal",
        "Third Molar Extraction",
        "Impacted Tooth Removal",
        "Wisdom Tooth Surgery"
      ],
      "description": "Wisdom tooth extraction is an oral surgical procedure to remove one or more third molars — the last teeth at the back of the mouth — when they are impacted, partially erupted, causing pain, crowding or infection.",
      "procedureType": "Surgical",
      "followup": "Soft diet for 3–5 days; prescribed antibiotics and pain relief; follow-up review to confirm healing",
      "preparation": "Dental X-ray and clinical assessment to determine the position and complexity of the wisdom tooth before extraction",
      "howPerformed": "The area is numbed with local anaesthesia. If the tooth is impacted, a small incision is made in the gum. The tooth may be sectioned for easier removal. The socket is cleaned and sutured if necessary. The procedure is completed in one visit for most cases.",
      "bodyLocation": "Third molars (wisdom teeth) — upper and/or lower jaw",
      "status": "EventScheduled",
      "performedBy": {
        "@type": "Dentist",
        "@id": "https://www.dazzledentalstudio.in/#dentist",
        "name": "Dazzle Dental & Cosmetic Studio",
        "telephone": "+91-94426-45111",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "First Floor, 76A/2, Kelambakkam–Vandalur Road",
          "addressLocality": "Melakottaiyur",
          "addressRegion": "Tamil Nadu",
          "postalCode": "600127",
          "addressCountry": "IN"
        }
      }
    },
    "breadcrumb": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.dazzledentalstudio.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Wisdom Tooth Extraction",
          "item": "https://www.dazzledentalstudio.in/wisdom-tooth-extraction"
        }
      ]
    },
    "faqs": [
      [
        "Does wisdom tooth extraction hurt?",
        "The extraction itself is painless because the area is fully numbed with local anaesthesia before the procedure begins. At Dazzle Dental, we apply a topical numbing gel before the injection so even the anaesthetic is virtually painless. After the procedure, mild soreness is normal for 2–3 days and is managed with prescribed medication."
      ],
      [
        "How do I know if my wisdom tooth needs to be removed?",
        "You may need a wisdom tooth removed if you experience pain or swelling at the back of your mouth, recurring infection or bad taste, difficulty opening your mouth, crowding of adjacent teeth, or your dentist identifies an impacted tooth on X-ray — even if it is currently painless. A free consultation at Dazzle Dental includes an X-ray assessment to give you a clear picture."
      ],
      [
        "How long does wisdom tooth removal take?",
        "A straightforward wisdom tooth extraction takes 20–40 minutes. An impacted wisdom tooth (one that has not fully erupted) may take slightly longer. Most patients have all four wisdom teeth removed in one or two appointments. Dr. Aishwarya Lakshmi will give you an accurate time estimate after reviewing your X-rays at the free consultation."
      ],
      [
        "What is the recovery time after wisdom tooth extraction?",
        "Most patients feel comfortable returning to normal activities within 2–3 days. Initial swelling and tenderness typically peak on day 2 and then subside. Complete healing of the gum tissue takes 2–4 weeks. We provide a detailed aftercare plan — including diet, medication, and hygiene guidance — to ensure smooth, complication-free recovery."
      ],
      [
        "What is the cost of wisdom tooth removal in Chennai?",
        "The cost of wisdom tooth extraction at Dazzle Dental varies based on the position of the tooth (erupted vs. impacted), the number of teeth, and any associated treatment needed. We provide completely transparent pricing after reviewing your X-rays at a free consultation — no hidden charges."
      ],
      [
        "Is it safe to remove all four wisdom teeth at once?",
        "Yes, it is generally safe to remove multiple wisdom teeth in a single appointment — and many patients prefer to get it done in one visit to minimise recovery periods. Dr. Aishwarya will recommend the best approach based on the position and complexity of each tooth, and your overall health."
      ],
      [
        "Where can I get wisdom tooth removal near Kelambakkam?",
        "Dazzle Dental & Cosmetic Studio is located at First Floor, 76A/2, Kelambakkam–Vandalur Road, Melakottaiyur, Chennai 600127 — directly on the Kelambakkam–Vandalur corridor. Open all 7 days including evenings 5–9 PM. Call +91 94426 45111 to book a free consultation."
      ]
    ]
  }
};

export const SERVICE_SLUGS = Object.keys(SERVICES);
