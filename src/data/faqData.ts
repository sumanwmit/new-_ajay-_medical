export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Medicine & Prescription' | 'Order & Home Delivery' | 'Payments & Discounts';
}

export const FAQ_DATA: FAQItem[] = [
  {
    category: 'General',
    question: 'Where is New Ajay Medical Hall located in Jehanabad?',
    answer: 'We are conveniently located at Mallachak More, Jehanabad, Bihar 804408 (New Ajay Medical Hall). You can easily find us near the main Mallachak junction with ample parking space for quick visits.'
  },
  {
    category: 'General',
    question: 'What are the opening and operating hours of New Ajay Medical Hall?',
    answer: 'We are open 7 days a week from 7:00 AM to 10:30 PM. We also offer emergency on-call medicine support during late nights for urgent healthcare needs.'
  },
  {
    category: 'Medicine & Prescription',
    question: 'Are all medicines sold at New Ajay Medical Hall 100% genuine and authentic?',
    answer: 'Yes, absolutely! We source all pharmaceuticals, syrups, vaccines, and surgical items directly from authorized company distributors and licensed manufacturers with strict quality checks.'
  },
  {
    category: 'Medicine & Prescription',
    question: 'Is a doctor prescription required to purchase medicines?',
    answer: 'A valid prescription from a registered medical practitioner (RMP / MBBS) is mandatory for Schedule H, H1, and Narcotic prescription medicines. Over-the-counter (OTC) items, vitamins, baby care, and general health supplements do not require a prescription.'
  },
  {
    category: 'Order & Home Delivery',
    question: 'How can I order medicines on WhatsApp from New Ajay Medical Hall?',
    answer: 'Simply click our WhatsApp Order button, attach a clear photo of your doctor’s prescription or type the required medicine names along with your complete address, and send it to +91 9939467567. Our team will verify and dispatch your order promptly.'
  },
  {
    category: 'Order & Home Delivery',
    question: 'Do you offer home delivery in Jehanabad town and surrounding areas?',
    answer: 'Yes, we provide fast local door-step delivery across Jehanabad city and nearby localities around Mallachak More. Free delivery is available on qualifying order amounts.'
  },
  {
    category: 'Payments & Discounts',
    question: 'What payment options do you accept at the store and for WhatsApp orders?',
    answer: 'We accept Cash, UPI (Google Pay, PhonePe, Paytm, BHIM), Bank Transfers, and Credit/Debit Cards for seamless transactions.'
  },
  {
    category: 'Payments & Discounts',
    question: 'Do you offer discount on monthly chronic medicines (Diabetes, BP, Heart care)?',
    answer: 'Yes, we offer attractive discounts on regular monthly refills for chronic care patients in Jehanabad, ensuring affordable healthcare for every family.'
  }
];
