import React from 'react';
import { HeartPulse, Thermometer, ShieldAlert, Sparkles, ChevronRight, Stethoscope } from 'lucide-react';

export const HealthTipsSection: React.FC = () => {
  const tips = [
    {
      title: "Proper Storage of Antibiotics & Insulin",
      category: "Medicine Safety",
      description: "Keep insulins and liquid antibiotics in the refrigerator at 2°C–8°C. Never freeze them, and store dry tablets away from direct sunlight.",
      icon: Thermometer,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Managing Blood Pressure at Home",
      category: "Chronic Care",
      description: "Measure your BP at the same time daily while resting for 5 minutes. Maintain a low-sodium diet and avoid missed daily doses.",
      icon: HeartPulse,
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Seasonal Fever & Dengue Prevention",
      category: "Seasonal Wellness",
      description: "Use mosquito repellents, drink plenty of fluids & ORS electrolytes. Never take self-medicated pain relievers without doctor consultation.",
      icon: ShieldAlert,
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section className="py-12 my-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 mb-2 border border-emerald-300 dark:border-emerald-800">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Pharmacist Recommended Advice
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Latest Healthcare & Medicine Tips
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Practical guidelines to keep your family healthy and informed.
          </p>
        </div>

        <a
          href="https://wa.me/919939467567?text=Hello%20Pharmacist,%20I%20have%20a%20health%20query"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 md:mt-0 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
        >
          <span>Ask Pharmacist a Question</span>
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tips.map((tip, idx) => {
          const IconComp = tip.icon;
          return (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${tip.color} text-white flex items-center justify-center mb-4 shadow-md`}>
                  <IconComp className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                  {tip.category}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-3 mb-2">
                  {tip.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {tip.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center text-[11px] font-semibold text-slate-500">
                <Stethoscope className="w-3.5 h-3.5 text-emerald-500 mr-1.5" />
                <span>New Ajay Medical Hall Advice</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
