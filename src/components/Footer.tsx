import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Pill, HeartPulse, ExternalLink, ShieldCheck, Award, MessageSquare } from 'lucide-react';

export default function Footer() {
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid')!);
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid, 
        visitor_id: visitorId, 
        session_id: sessionId,
        page_name: getPageName(), 
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent, 
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, { 
        method: 'POST', 
        mode: 'cors', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(payload) 
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = { 
        cid: cid, 
        session_id: sessionId, 
        page_name: getPageName(), 
        action: 'page_change' 
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, { 
          method: 'POST', 
          mode: 'cors', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(payload), 
          keepalive: true 
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: ReturnType<typeof setTimeout>;
    let isIdle = false;

    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') { 
        sendExitPayload(); 
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Background Accent Mesh */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-emerald-600/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-0 w-96 h-96 bg-teal-600/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-md">
                <Pill className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                New Ajay <span className="text-emerald-400">Medical Hall</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Your trusted licensed retail medical store in Jehanabad. Providing 100% genuine prescription medicines, OTC remedies, health devices, baby essentials, and surgical supplies at affordable prices.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" /> Licensed Pharmacy & Verified Quality
              </div>
              <div className="flex items-center gap-2 text-teal-400 font-semibold">
                <Award className="w-4 h-4" /> Serving Mallachak More & Jehanabad Community
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-emerald-500 pl-2">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors">About Our Store</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors">Services & Products</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 transition-colors">Store Photo Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact & Directions</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Store Categories & Essentials (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-emerald-500 pl-2">
              Medicine Categories
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Prescription Drugs & Antibiotics</li>
              <li>• Diabetes & Blood Pressure Meds</li>
              <li>• Digital BP & Glucose Monitors</li>
              <li>• Baby Formulas, Diapers & Skincare</li>
              <li>• Surgical Kits, Syringes & Nebulizers</li>
              <li>• First Aid & Antiseptic Supplies</li>
            </ul>
          </div>

          {/* Column 4: Contact & Working Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-emerald-500 pl-2">
              Store Contact & Hours
            </h3>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Ajay Medical Hall, New, Mallachak More, Jehanabad, Bihar 804408</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:9939467567" className="hover:text-emerald-300 font-semibold">+91 9939467567</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/919939467567" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 font-semibold">
                  WhatsApp: 9939467567
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Working Hours:</div>
                  <div className="text-slate-400">Monday – Sunday: 7:00 AM – 10:30 PM</div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong className="text-slate-400">Medical Disclaimer:</strong> New Ajay Medical Hall is a licensed retail pharmacy in Bihar. Prescription medicines are dispensed strictly against a valid doctor's prescription. Information on this website is for general educational awareness and stock verification purposes only and does not substitute medical advice from a qualified healthcare practitioner.
          </p>
        </div>

        {/* Bottom Copyright & Developer Credit */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} New Ajay Medical Hall. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <Link to="/contact" className="hover:text-emerald-400">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-emerald-400">Terms of Use</Link>
            <span>•</span>
            <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
