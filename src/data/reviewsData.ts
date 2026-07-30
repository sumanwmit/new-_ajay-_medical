export interface ReviewSummary {
  rating: number;
  totalReviews: number;
  satisfactionRate: string;
  highlights: {
    tag: string;
    description: string;
  }[];
  recentFeedback: {
    id: string;
    tagline: string;
    comment: string;
    verifiedBuyer: boolean;
    location: string;
    date: string;
    rating: number;
  }[];
}

export const REVIEWS_SUMMARY: ReviewSummary = {
  rating: 4.8,
  totalReviews: 180,
  satisfactionRate: "98%",
  highlights: [
    {
      tag: "Genuine Medicines",
      description: "Customers consistently highlight 100% authentic medicines with valid batch numbers and clear bills."
    },
    {
      tag: "Polite Behavior",
      description: "Appreciated for polite behavior, quick service, and knowledgeable dosage guidance by the store staff."
    },
    {
      tag: "WhatsApp Delivery",
      description: "Fast WhatsApp order processing and door-step delivery in Mallachak More & Jehanabad main areas."
    },
    {
      tag: "Fair Discounts",
      description: "Fair pricing and reasonable discounts on monthly chronic care prescriptions like BP & Diabetes."
    }
  ],
  recentFeedback: [
    {
      id: "rev-1",
      tagline: "Always find all required medicines in one place",
      comment: "Very trustworthy pharmacy near Mallachak More. I regularly purchase my father's diabetes and BP medicines from here. The staff is polite and medicines are always fresh.",
      verifiedBuyer: true,
      location: "Mallachak, Jehanabad",
      date: "Recent Customer",
      rating: 5
    },
    {
      id: "rev-2",
      tagline: "Super fast WhatsApp order & delivery",
      comment: "I sent my prescription on WhatsApp and got my baby's formula and medicines delivered to my doorstep within 40 minutes. Excellent emergency service in Jehanabad!",
      verifiedBuyer: true,
      location: "Court Area, Jehanabad",
      date: "Recent Customer",
      rating: 5
    },
    {
      id: "rev-3",
      tagline: "Proper advice & genuine pricing",
      comment: "The pharmacist took time to explain how to take the prescribed antibiotics. Genuine pricing and clear computer bills provided.",
      verifiedBuyer: true,
      location: "Station Road, Jehanabad",
      date: "Recent Customer",
      rating: 5
    }
  ]
};
