import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { SERVICES_DATA, ServiceCategory } from '../data/servicesData';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { Pill, HeartPulse, Activity, Stethoscope, Thermometer, ShieldCheck, ShoppingBag, Sparkles, Check, MessageSquare, Phone, ChevronRight } from 'lucide-react';

interface ServicesProps {
  onOpenOrderModal: (medName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenOrderModal }) => {
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>('all');

  const filteredCategories = selectedCategoryTab === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.id === selectedCategoryTab);

  return (
    <div className="space-y-12 pb-12">
      <SEO
        title="Pharmacy Services & Medicine Categories | New Ajay Medical Hall, Jehanabad"
        description="Comprehensive healthcare offerings at New Ajay Medical Hall: Prescription drugs, OTC remedies, health monitoring devices, surgical equipment, baby care, and home nursing supplies in Jehanabad."
        canonicalUrl="https://new-ajay-medical.vercel.app/services"
      />

      {/* Services Header */}
      <section className="bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-900 text-white p-8 sm:p-14 rounded-3xl border border-emerald-700/50 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-700">
            Comprehensive Pharmacy Catalog
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mt-4">
            Our Products & Pharmacy Services
          </h1>
          <p className="mt-3 text-base sm:text-lg text-emerald-100 leading-relaxed">
            From daily prescription refills and pediatric baby formulas to emergency surgical equipment and digital health monitors, discover our complete healthcare range in Mallachak More, Jehanabad.
          </p>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="flex flex-wrap items-center gap-2 pb-2 overflow-x-auto">
        <button
          onClick={() => setSelectedCategoryTab('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
            selectedCategoryTab === 'all'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          All Categories ({SERVICES_DATA.length})
        </button>
        {SERVICES_DATA.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategoryTab(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              selectedCategoryTab === cat.id
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {cat.title}
          </button>
        ))}
      </section>

      {/* Detailed Category Service Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCategories.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.colorTheme} text-white flex items-center justify-center shadow-lg`}>
                  <Pill className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                  Jehanabad Stock
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                {service.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {service.fullDesc}
              </p>

              {/* Key Features List */}
              <div className="mt-5 space-y-2">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Key Highlights:</h4>
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Popular Brands / Items Tags */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-2">Popular In-Stock Items:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {service.popularItems.map((item, i) => (
                    <span key={i} className="text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-lg">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenOrderModal(service.title)}
                className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Order Category on WhatsApp</span>
              </button>
              <a
                href="tel:9939467567"
                className="py-3 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Inquire Call</span>
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* ================= EXCLUSIVE FEATURE: MEDICINE STOCK CHECKER ================= */}
      <section className="pt-6">
        <MedicineStockChecker
          onOrderClick={(medName) => onOpenOrderModal(medName)}
          title="Exclusive Feature: Searchable Medicine Inventory"
          subtitle="Check real-time stock status (Available, Limited, Out of Stock), MRP, and details across all product categories at New Ajay Medical Hall."
        />
      </section>

      {/* Service CTA */}
      <section className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Can't Find a Specific Prescription Drug?</h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            We source uncommon surgical supplies, rare chronic care formulations, and specialized injections within 24 hours on request.
          </p>
        </div>

        <button
          onClick={() => onOpenOrderModal("Special Medicine Request")}
          className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm shadow-lg transition-all shrink-0 flex items-center gap-2"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Submit Special Order Request</span>
        </button>
      </section>
    </div>
  );
};
