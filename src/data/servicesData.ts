export interface ServiceCategory {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  popularItems: string[];
  colorTheme: string;
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "prescription-medicines",
    title: "Prescription Medicines",
    iconName: "Pill",
    shortDesc: "Complete range of genuine ethical prescription drugs verified by qualified pharmacists.",
    fullDesc: "We stock authentic Schedule H, H1, cardiac, anti-diabetic, neurological, respiratory, and oncology medicines directly from top pharmaceutical brands like Sun Pharma, Cipla, GSK, Mankind, and Alkem.",
    features: [
      "100% Genuine and company-sealed batches",
      "Cold-chain maintenance for insulin & temperature-sensitive drugs",
      "Computerized billing with batch numbers and expiry tracking",
      "Monthly refill reminders for chronic disease management"
    ],
    popularItems: ["Anti-Diabetic Care", "Hypertension & BP Meds", "Antibiotics & Anti-fungs", "Cardiac & Cholesterol Care"],
    colorTheme: "from-emerald-500 to-teal-700"
  },
  {
    id: "otc-medicines",
    title: "OTC Medicines & First Aid",
    iconName: "HeartPulse",
    shortDesc: "Quick relief over-the-counter tablets, pain gels, syrups, and comprehensive first-aid kits.",
    fullDesc: "Immediate solutions for daily health issues including seasonal flu, headaches, acidity, minor cuts, burns, muscle sprains, and digestives without delays.",
    features: [
      "Fast-acting pain and fever relief formulations",
      "Digestives, antacids, and laxative preparations",
      "Complete home and travel first-aid box customization",
      "Antiseptic liquids, wound dressings, and surgical tapes"
    ],
    popularItems: ["Pain Relievers & Gels", "Cough & Cold Syrups", "Antacids & ORS Drinks", "First Aid Bandages & Dettol"],
    colorTheme: "from-blue-500 to-cyan-700"
  },
  {
    id: "health-devices",
    title: "Health Devices & Monitoring",
    iconName: "Activity",
    shortDesc: "Accurate digital health monitors, glucometers, BP machines, and pulse oximeters.",
    fullDesc: "Empower your family health with reliable, clinically validated diagnostic instruments from trusted brands like Omron, Accu-Chek, Dr. Morepen, and Dr. Trust.",
    features: [
      "Automatic Upper Arm Blood Pressure Monitors",
      "Glucometers with high-precision test strip refills",
      "Fingertip Pulse Oximeters & Digital Clinical Thermometers",
      "Compression Stockings & Orthopedic Support Braces"
    ],
    popularItems: ["Omron BP Monitors", "Accu-Chek Glucose Kits", "Pulse Oximeters", "Digital Thermometers"],
    colorTheme: "from-indigo-500 to-blue-700"
  },
  {
    id: "medical-equipment",
    title: "Medical & Surgical Equipment",
    iconName: "Stethoscope",
    shortDesc: "Reliable surgical disposables, nebulizers, oxygen concentrators, and mobility aids.",
    fullDesc: "Serving patients and clinical setups in Jehanabad with hospital-grade disposable syringes, IV sets, nebulizers, steam inhalers, wheelchairs, and air mattresses.",
    features: [
      "Compressor Nebulizer kits for children and adults",
      "Surgical gloves, face masks, catheter & IV supplies",
      "Water beds and anti-bedsore ripple air mattresses",
      "Walker frames, crutches, and mobility wheelchairs"
    ],
    popularItems: ["Nebulizers & Vaporizers", "Sterile Gloves & Masks", "Anti-Bedsore Air Mattresses", "Walking Sticks & Frames"],
    colorTheme: "from-teal-600 to-emerald-800"
  },
  {
    id: "home-care",
    title: "Home Care & Elderly Essentials",
    iconName: "Thermometer",
    shortDesc: "Specialized hygiene products, adult diapers, bed pads, and daily assistance gear.",
    fullDesc: "Dignified care for senior citizens and bedridden patients at home. We ensure continuous stock of high-absorbency adult pants, underpads, and sanitization kits.",
    features: [
      "Adult Pull-up Diaper pants in M, L, and XL sizes",
      "Bed protection underpads and moisture barrier creams",
      "Disinfectant sprayers, wet wipes, and hand sanitizers",
      "Bedside commode chairs and hot water bags"
    ],
    popularItems: ["Adult Diapers (Friends/Pampers)", "Underpads & Sheet Protectors", "Hot Water Bags & Heating Pads", "Commode Chairs"],
    colorTheme: "from-amber-500 to-orange-700"
  },
  {
    id: "supplements",
    title: "Health Supplements & Nutrition",
    iconName: "ShieldCheck",
    shortDesc: "Multivitamins, protein powders, calcium, immunity boosters, and herbal formulations.",
    fullDesc: "Boost energy and overall vitality with certified nutritional formulas, protein drinks for kids and seniors, omega-3 capsules, and Ayurvedic tonic options.",
    features: [
      "Doctor recommended Multivitamin & Mineral capsules",
      "High-protein powders (Whey, Ensure, Protinex, Horlicks)",
      "Calcium & Vitamin D3 bone health supplements",
      "Ayurvedic immunity tonics (Chyawanprash, Ashwagandha)"
    ],
    popularItems: ["Ensure & Protinex Powders", "Revital H & Becosules", "Calcium + D3 Tablets", "Chyawanprash & Herbal Syrups"],
    colorTheme: "from-emerald-600 to-green-800"
  },
  {
    id: "baby-care",
    title: "Baby Care & Mother Essentials",
    iconName: "ShoppingBag",
    shortDesc: "Gentle baby food formulas, diapers, dermatological baby skincare, and maternity needs.",
    fullDesc: "Everything for your precious little ones. Trusted baby nutrition, soft diapers, hypoallergenic baby soaps, oils, powders, and breast pumps for nursing mothers.",
    features: [
      "Infant formulas (Lactogen, Similac, Dexolac, Nan Pro)",
      "Premium baby diapers and wet wipes",
      "Himalaya & Johnson's baby oils, creams, and powders",
      "Maternity feeding bottles, breast pads, and rash gels"
    ],
    popularItems: ["Baby Infant Formulas", "Himalaya Skincare Range", "Pampers & MamyPoko Diapers", "Anti-Rash Ointments"],
    colorTheme: "from-rose-500 to-pink-700"
  },
  {
    id: "personal-care",
    title: "Personal Care & Hygiene",
    iconName: "Sparkles",
    shortDesc: "Dermatological soaps, hair care, oral hygiene, and premium skincare products.",
    fullDesc: "Complete personal grooming and hygiene products featuring herbal soaps, medicated shampoos, anti-dandruff solutions, dental pastes, and intimate hygiene washes.",
    features: [
      "Dermatologically tested acne and sensitive skin washes",
      "Medicated anti-dandruff shampoos and scalp lotions",
      "Sensodyne and Colgate specialized dental pastes",
      "Sanitary napkins, panty liners, and intimate hygiene gels"
    ],
    popularItems: ["Medicated Soaps & Shampoos", "Sensodyne Toothpastes", "Whisper & Stayfree Pads", "Moisturizing Lotions"],
    colorTheme: "from-purple-500 to-indigo-700"
  }
];
