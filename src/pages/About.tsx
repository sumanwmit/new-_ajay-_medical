import React from 'react';
import { SEO } from '../components/SEO';
import { ShieldCheck, Award, HeartPulse, Pill, Clock, MapPin, CheckCircle2, UserCheck, Stethoscope, Sparkles, Building2, History } from 'lucide-react';

export const About: React.FC = () => {
  const timelineEvents = [
    {
      year: "Establishment",
      title: "Founding at Mallachak More",
      desc: "Opened as a licensed retail chemist with a vision to make genuine healthcare accessible in Jehanabad."
    },
    {
      year: "Infrastructure Expansion",
      title: "Cold-Chain & Digital Billing Setup",
      desc: "Installed specialized medical refrigeration for insulins and vaccines, alongside computerized inventory tracking."
    },
    {
      year: "Service Innovation",
      title: "WhatsApp Order & Home Delivery",
      desc: "Launched fast door-step delivery across Jehanabad for prescription refills and elderly patients."
    },
    {
      year: "Present Day",
      title: "Trusted Healthcare Partner",
      desc: "Serving thousands of local families daily with 100% authentic pharmaceuticals, surgical items, and health devices."
    }
  ];

  return (
    <div className="space-y-12 pb-12">
      <SEO
        title="About Us | New Ajay Medical Hall, Mallachak More, Jehanabad"
        description="Learn about New Ajay Medical Hall's business story, mission, certified pharmacists, cold-chain infrastructure, and commitment to providing genuine medicines in Jehanabad, Bihar."
        canonicalUrl="https://newajaymedicalhall.com/about"
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white p-8 sm:p-14 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
            Dedicated Healthcare Excellence
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mt-4">
            About New Ajay Medical Hall
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            Your neighborhood pharmacy in Mallachak More, Jehanabad. Committed to patient safety, authentic medicines, and compassionate healthcare guidance since day one.
          </p>
        </div>
      </section>

      {/* Business Story & Overview */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Our Journey & Heritage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              A Legacy Built on Genuine Care & Integrity
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              New Ajay Medical Hall was established in the heart of Mallachak More, Jehanabad, to eliminate the risk of counterfeit or sub-standard drugs in local healthcare. Over the years, we have built an unshakeable reputation for providing 100% genuine medicines directly sourced from authorized manufacturer sales networks.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Whether you require vital daily prescription medicines for diabetes, blood pressure, cardiac care, or urgent antibiotics, baby foods, or orthopedic devices, our trained pharmacists take time to review your prescriptions, explain correct dosage timings, and ensure proper storage protocols.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
              <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Licensed Retail Chemist</span>
              </div>
              <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Cold Chain Storage Setup</span>
              </div>
              <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Computerized Tax Invoices</span>
              </div>
              <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Fast Local WhatsApp Delivery</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1cdb?q=80&w=800&auto=format&fit=crop"
                alt="Pharmacist Consulting Patient at New Ajay Medical Hall"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Core Values */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Our Mission</h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            To safeguard community health in Jehanabad by providing 100% authentic pharmaceuticals, expert guidance, and prompt door-step medicine delivery at affordable rates.
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4">
            <HeartPulse className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Our Vision</h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            To remain the most trusted, patient-centric pharmacy network in Jehanabad district, recognized for zero compromise on medicine authenticity and service speed.
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Core Values</h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Unwavering integrity, strict quality control, empathetic customer interactions, and absolute transparency in batch expiration and pricing.
          </p>
        </div>
      </section>

      {/* Pharmacist / Store Owner Message */}
      <section className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-500 shadow-2xl mb-3">
              <img
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop"
                alt="Pharmacist Manager at New Ajay Medical Hall"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold text-white">Chief Pharmacist & Management</h3>
            <p className="text-xs text-emerald-300 font-semibold">New Ajay Medical Hall, Jehanabad</p>
          </div>

          <div className="md:col-span-8 space-y-3">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              A Personal Promise
            </span>
            <h2 className="text-2xl font-bold text-white">
              "Your Family's Health is Our Personal Responsibility"
            </h2>
            <blockquote className="text-sm text-slate-300 italic leading-relaxed border-l-2 border-emerald-500 pl-4 py-1">
              "When a patient walks into New Ajay Medical Hall at Mallachak More, they are not just buying a strip of tablets — they are placing their health and trust in our hands. We pledge that every medicine leaving our counter is verified for batch validity, stored at correct temperatures, and sold with clear dosage instructions."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Business Timeline */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Evolution & Growth
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            Store History & Major Milestones
          </h2>
        </div>

        <div className="relative border-l-2 border-emerald-500/40 ml-4 space-y-8">
          {timelineEvents.map((item, idx) => (
            <div key={idx} className="relative pl-6">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" />
              <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                {item.year}
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Infrastructure Features */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
          <Building2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-2" />
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Store Location</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Prime position at Mallachak More junction with convenient parking and accessibility.
          </p>
        </div>

        <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
          <Clock className="w-8 h-8 text-teal-600 dark:text-teal-400 mb-2" />
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">7-Day Availability</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Open every single day from 7:00 AM to 10:30 PM with emergency helpline options.
          </p>
        </div>

        <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
          <ShieldCheck className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Quality Assurance</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Strict verification of batch manufacturing, expiry dates, and tamper-evident packaging.
          </p>
        </div>

        <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
          <UserCheck className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-2" />
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Customer Support</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Friendly, courteous staff trained to guide you through prescribed dosage instructions.
          </p>
        </div>
      </section>
    </div>
  );
};
