import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ChevronUp, ShoppingBag } from 'lucide-react';

interface FloatingActionsProps {
  onOpenOrderModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenOrderModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleDirectWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello New Ajay Medical Hall, I would like to inquire/order medicines."
    );
    window.open(`https://wa.me/919939467567?text=${msg}`, '_blank');
  };

  return (
    <>
      {/* Desktop & Mobile Floating Side Buttons */}
      <div className="fixed bottom-20 md:bottom-8 right-4 md:right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Back to top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-10 h-10 rounded-full bg-slate-900/90 dark:bg-slate-100/90 text-white dark:text-slate-900 shadow-lg hover:scale-110 active:scale-95 transition-all flex items-center justify-center border border-slate-700/50 dark:border-slate-300/50 backdrop-blur-md"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}

        {/* Direct Call Button */}
        <a
          href="tel:9939467567"
          aria-label="Call Store"
          className="group relative w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center"
        >
          <Phone className="w-6 h-6 animate-pulse" />
          <span className="absolute right-14 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Call +91 9939467567
          </span>
        </a>

        {/* Floating WhatsApp Button */}
        <button
          onClick={handleDirectWhatsApp}
          aria-label="Chat on WhatsApp"
          className="group relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 transition-all flex items-center justify-center ring-4 ring-emerald-500/30"
        >
          <MessageSquare className="w-6 h-6 md:w-7 md:h-7 fill-white/20" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-white animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-white" />
          <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-emerald-900 text-white text-xs font-bold rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            WhatsApp Order / Quick Inquiry
          </span>
        </button>
      </div>

      {/* Mobile Bottom Sticky Action Dock */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-2.5 shadow-2xl">
        <div className="grid grid-cols-3 gap-2">
          <a
            href="tel:9939467567"
            className="flex flex-col items-center justify-center py-1.5 px-2 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 rounded-xl text-[11px] font-bold border border-blue-200 dark:border-blue-800/60"
          >
            <Phone className="w-4 h-4 mb-0.5 text-blue-600 dark:text-blue-400" />
            <span>Call Store</span>
          </a>

          <button
            onClick={onOpenOrderModal}
            className="flex flex-col items-center justify-center py-1.5 px-2 bg-emerald-600 text-white rounded-xl text-[11px] font-bold shadow-md"
          >
            <ShoppingBag className="w-4 h-4 mb-0.5" />
            <span>Order Meds</span>
          </button>

          <button
            onClick={handleDirectWhatsApp}
            className="flex flex-col items-center justify-center py-1.5 px-2 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 rounded-xl text-[11px] font-bold border border-emerald-200 dark:border-emerald-800/60"
          >
            <MessageSquare className="w-4 h-4 mb-0.5 text-emerald-600 dark:text-emerald-400" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </>
  );
};
