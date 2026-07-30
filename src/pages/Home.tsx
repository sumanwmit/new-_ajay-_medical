import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, ShieldCheck, HeartPulse, Pill, Clock, Award, CheckCircle2, ChevronRight, Search, Activity, Stethoscope, ArrowRight, Mail, Sparkles, Truck, RefreshCw } from 'lucide-react';
import { SEO } from '../components/SEO';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { ReviewSection } from '../components/ReviewSection';
import { HealthTipsSection } from '../components/HealthTipsSection';
import { SERVICES_DATA } from '../data/servicesData';
import { FAQ_DATA } from '../data/faqData';

interface HomeProps {
  onOpenOrderModal: (medName?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenOrderModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const featuredServices = SERVICES_DATA.slice(0, 6);
  const previewFAQs = FAQ_DATA.slice(0, 4);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
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
        title="New Ajay Medical Hall | Trusted Pharmacy in Jehanabad, Bihar 804408"
        description="Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices in Mallachak More, Jehanabad."
        canonicalUrl="https://newajaymedicalhall.com"
      />

      {/* ================= HERO & SPLIT FEATURE VIEW ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Branding & Primary CTAs */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
              ESTABLISHED IN JEHANABAD
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
              Your Trusted Partner for <span className="text-emerald-600 dark:text-emerald-400">Genuine Medicines.</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base mb-6 leading-relaxed">
              Providing genuine medicines, baby care, and surgical supplies at affordable prices in Mallachak More.
            </p>

            {/* Location Pill Box */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 mb-6">
              <div className="w-10 h-10 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Location</p>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-semibold">Mallachak More, Jehanabad, Bihar 804408</p>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex gap-3">
              <button
                onClick={() => onOpenOrderModal()}
                className="flex-1 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-emerald-100 dark:shadow-none flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </button>
              <button
                onClick={handleDirections}
                className="flex-1 py-3.5 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 text-slate-800 dark:text-slate-200 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all"
              >
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Get Directions</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Stock Preview & Quick Facts Bar */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
          {/* Quick Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              to="/services"
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors shadow-sm group"
            >
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Stethoscope className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Healthcare</p>
            </Link>

            <Link
              to="/services"
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors shadow-sm group"
            >
              <div className="w-12 h-12 bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <HeartPulse className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Baby Care</p>
            </Link>

            <Link
              to="/services"
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors shadow-sm group"
            >
              <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Pill className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Prescriptions</p>
            </Link>
          </div>

          {/* Inline Stock Checker Component */}
          <MedicineStockChecker
            onOrderClick={(medName) => onOpenOrderModal(medName)}
            limitDisplay={3}
            showViewAllButton={false}
          />

          {/* Quick Facts Bar */}
          <div className="bg-slate-900 rounded-2xl p-6 text-white flex items-center justify-around shadow-lg">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white">15+</p>
              <p className="text-[10px] uppercase tracking-wider text-slate-400">Years Service</p>
            </div>
            <div className="h-10 w-px bg-slate-800"></div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-emerald-400">5000+</p>
              <p className="text-[10px] uppercase tracking-wider text-slate-400">Medicines</p>
            </div>
            <div className="h-10 w-px bg-slate-800"></div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-teal-400">100%</p>
              <p className="text-[10px] uppercase tracking-wider text-slate-400">Genuine Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SHORT ABOUT PREVIEW ================= */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
              Welcome to New Ajay Medical Hall
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Serving Mallachak More & Jehanabad with Authenticity & Care
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              New Ajay Medical Hall is a premier retail chemist store established in Mallachak More, Jehanabad. Our mission is to make authentic healthcare accessible to every family with certified pharmacists, temperature-controlled drug storage, and prompt delivery options.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Authorized Company Distributor Supplies
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Cold-Chain Refrigerated Insulins & Vaccines
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Experienced Pharmacist Guidance
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Easy WhatsApp Prescription Upload
              </div>
            </div>
            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold transition-all shadow-md"
              >
                <span>Read Our Full Story & History</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1586015555751-63c233145d55?q=80&w=800&auto=format&fit=crop"
                alt="New Ajay Medical Hall Pharmacy Front"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-semibold text-emerald-300">Mallachak More Branch</p>
                <p className="text-sm font-bold">New Ajay Medical Hall, Jehanabad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED SERVICES PREVIEW (Max 6) ================= */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Our Healthcare Scope
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
              Featured Pharmacy Services & Offerings
            </h2>
          </div>
          <Link
            to="/services"
            className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 shrink-0"
          >
            <span>View All Services & Categories</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${service.colorTheme} text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                  <Pill className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {service.shortDesc}
                </p>

                <div className="mt-4 space-y-1.5">
                  {service.popularItems.slice(0, 3).map((item, i) => (
                    <div key={i} className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => onOpenOrderModal(service.title)}
                  className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 flex items-center gap-1"
                >
                  <span>Inquire / Order</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden">
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">
            Why Patients Choose Us
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-1 text-white">
            Uncompromising Quality & Patient Care First
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Why families in Mallachak More and Jehanabad trust New Ajay Medical Hall for their ongoing prescription needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700/60">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white">100% Genuine Medicines</h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Sourced directly from company licensed distributors with guaranteed batch details.
            </p>
          </div>

          <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700/60">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-3">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white">WhatsApp Doorstep Delivery</h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Snap a picture of your prescription and receive swift delivery in Jehanabad.
            </p>
          </div>

          <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700/60">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white">Qualified Pharmacists</h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Get accurate dosage guidance and drug interaction warnings from trained staff.
            </p>
          </div>

          <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700/60">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white">Fair Pricing & Refills</h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Special chronic care discounts for senior citizens and regular monthly refills.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MEDICINE STOCK CHECKER PREVIEW ================= */}
      <section>
        <MedicineStockChecker
          onOrderClick={(medName) => onOpenOrderModal(medName)}
          limitDisplay={4}
          showViewAllButton={true}
        />
      </section>

      {/* ================= REVIEWS PREVIEW ================= */}
      <ReviewSection showFullGrid={false} />

      {/* ================= FAQ PREVIEW ================= */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
              Frequently Asked Questions Preview
            </h2>
          </div>
          <a
            href="tel:9939467567"
            className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Have More Questions? Call Us Directly</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {previewFAQs.map((faq, i) => (
            <div
              key={i}
              className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200/80 dark:border-slate-700"
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">Q:</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HEALTH TIPS PREVIEW ================= */}
      <HealthTipsSection />

      {/* ================= CTA BANNER ================= */}
      <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Need Medicine Urgently in Jehanabad?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-emerald-100 leading-relaxed">
            Send your prescription photo on WhatsApp or call our pharmacy team directly. We verify and pack your medicines immediately!
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <button
              onClick={() => onOpenOrderModal()}
              className="px-6 py-3 bg-white hover:bg-slate-100 text-emerald-800 rounded-xl font-bold text-sm shadow-lg transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Order via WhatsApp Now</span>
            </button>

            <a
              href="tel:9939467567"
              className="px-6 py-3 bg-emerald-900/60 hover:bg-emerald-900/80 text-white rounded-xl font-bold text-sm border border-emerald-400/40 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-300" />
              <span>Call Store: +91 9939467567</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER SUBSCRIPTION ================= */}
      <section className="bg-slate-100 dark:bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 text-center">
        <div className="max-w-xl mx-auto space-y-3">
          <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Subscribe for Refill Alerts & Health Guidance
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            Get updates on new medical device arrivals, seasonal health precautions, and discount offers in Jehanabad.
          </p>

          {subscribed ? (
            <div className="p-3 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-semibold rounded-xl border border-emerald-300">
              Thank you for subscribing! We will keep you updated.
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 pt-2">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
