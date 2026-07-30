import React from 'react';
import { Phone, Clock, MapPin, ShieldCheck } from 'lucide-react';

export const EmergencyBanner: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left Notice */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-[11px] sm:text-xs">
          <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Open 7 Days a Week: 7:00 AM – 10:30 PM
          </span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="inline-flex items-center gap-1 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            Mallachak More, Jehanabad (Bihar 804408)
          </span>
        </div>

        {/* Right Emergency Call */}
        <div className="flex items-center gap-4 text-[11px] sm:text-xs font-semibold">
          <span className="hidden lg:inline text-slate-400">24/7 Emergency & Regular Order Support:</span>
          <a
            href="tel:9939467567"
            className="inline-flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 transition-colors bg-emerald-950/60 hover:bg-emerald-900/80 px-2.5 py-1 rounded-full border border-emerald-800/80"
          >
            <Phone className="w-3 h-3 text-emerald-400 animate-bounce" />
            <span>+91 9939467567</span>
          </a>
        </div>
      </div>
    </div>
  );
};
