import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, Navigation, ShieldAlert, Sparkles, Building2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.message) {
      setSubmitted(true);
    }
  };

  const handleDirections = () => {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=Ajay+Medical+Hall+Mallachak+More+Jehanabad+Bihar+804408',
      '_blank'
    );
  };

  return (
    <div className="space-y-12 pb-12">
      <SEO
        title="Contact Us & Store Location | New Ajay Medical Hall, Jehanabad"
        description="Contact New Ajay Medical Hall in Mallachak More, Jehanabad, Bihar 804408. Call +91 9939467567 or WhatsApp us for instant medicine orders, working hours, and map directions."
        canonicalUrl="https://new-ajay-medical.vercel.app/contact"
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white p-8 sm:p-14 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mt-4">
            Contact & Visit Our Pharmacy
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            We are here to assist you with genuine medicine orders, doctor prescription verification, and healthcare queries in Jehanabad.
          </p>
        </div>
      </section>

      {/* Contact Cards & Store Information Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Business Info & Working Hours (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">
              Store Information
            </h2>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Store Address</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  Ajay Medical Hall, New, Mallachak More, Jehanabad, Bihar 804408
                </p>
                <button
                  onClick={handleDirections}
                  className="mt-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Phone Helpline</h3>
                <a
                  href="tel:9939467567"
                  className="text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-600 block mt-0.5"
                >
                  +91 9939467567
                </a>
                <span className="text-[11px] text-slate-500">Available Mon–Sun (7:00 AM – 10:30 PM)</span>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">WhatsApp Order Number</h3>
                <a
                  href="https://wa.me/919939467567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline block mt-0.5"
                >
                  +91 9939467567
                </a>
                <span className="text-[11px] text-slate-500">Fast prescription review & instant dispatch</span>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Store Opening Hours</h3>
                <div className="text-xs text-slate-600 dark:text-slate-300 mt-1 space-y-1">
                  <div className="flex justify-between gap-4 font-semibold">
                    <span>Monday – Sunday:</span>
                    <span className="text-emerald-600 dark:text-emerald-400">7:00 AM – 10:30 PM</span>
                  </div>
                  <div className="text-[11px] text-slate-500">Open 365 days including holidays</div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Notice Card */}
          <div className="p-5 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 rounded-2xl flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
            <div className="text-xs text-rose-900 dark:text-rose-200">
              <strong className="font-bold">Late Night Emergency Support:</strong> In case of urgent prescription requirements after closing hours, call +91 9939467567 directly.
            </div>
          </div>
        </div>

        {/* Right Column: Quick Inquiry Form (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <h2 className="text-xl font-extrabold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
            Send Quick Message / Inquiry
          </h2>

          {submitted ? (
            <div className="p-6 bg-emerald-50 dark:bg-emerald-950/60 rounded-2xl border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto" />
              <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-200">Message Received!</h3>
              <p className="text-xs text-emerald-700 dark:text-emerald-300 max-w-md mx-auto">
                Thank you, {formData.name}. Our pharmacist team at New Ajay Medical Hall will contact you shortly on {formData.phone}.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Phone / Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9939467567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Inquiry Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Medicine Availability">Medicine Stock Inquiry</option>
                    <option value="Monthly Refill">Monthly Chronic Refill</option>
                    <option value="Home Delivery">Home Delivery Details</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Your Message / Medicine Details <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Type your query or list required medicines here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ================= GOOGLE MAP INTEGRATION ================= */}
      <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Interactive Google Map Location
            </span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mt-0.5">
              Find New Ajay Medical Hall in Jehanabad
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Located at Mallachak More junction, Jehanabad, Bihar 804408
            </p>
          </div>

          <button
            onClick={handleDirections}
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2 shrink-0"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Live GPS Driving Directions</span>
          </button>
        </div>

        {/* Embedded Map Frame */}
        <div className="w-full h-96 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner bg-slate-100 dark:bg-slate-800">
          <iframe
            title="New Ajay Medical Hall Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.823612981327!2d84.98687!3d25.21332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzQ4LjAiTiA4NMK1NTknMTIuNyJF!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
};
