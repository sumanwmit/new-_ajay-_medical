import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { EmergencyBanner } from './components/EmergencyBanner';
import { Navbar } from './components/Navbar';
import { Breadcrumbs } from './components/Breadcrumbs';
import Footer from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';

// Lazy Loaded Page Components
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Page title helper for Breadcrumbs
function BreadcrumbWrapper() {
  const location = useLocation();
  const pathMap: Record<string, string> = {
    '/about': 'About Us',
    '/services': 'Services & Medicines',
    '/gallery': 'Photo Gallery',
    '/contact': 'Contact & Directions',
  };

  const currentTitle = pathMap[location.pathname] || 'Page';

  return <Breadcrumbs currentPageTitle={currentTitle} />;
}

// Loading Spinner for Lazy Pages
function PageLoadingFallback() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center space-y-4">
      <div className="w-12 h-12 rounded-full border-4 border-emerald-200 border-t-emerald-600 animate-spin" />
      <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
        Loading New Ajay Medical Hall...
      </p>
    </div>
  );
}

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedMedicineForOrder, setSelectedMedicineForOrder] = useState('');

  const handleOpenOrderModal = (medName?: string) => {
    if (medName) {
      setSelectedMedicineForOrder(medName);
    } else {
      setSelectedMedicineForOrder('');
    }
    setIsOrderModalOpen(true);
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
          
          {/* Top Emergency & Operating Banner */}
          <EmergencyBanner />

          {/* Sticky Navigation Header */}
          <Navbar onOpenOrderModal={() => handleOpenOrderModal()} />

          {/* Dynamic Route Breadcrumbs */}
          <BreadcrumbWrapper />

          {/* Main Page Route Content */}
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Suspense fallback={<PageLoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home onOpenOrderModal={handleOpenOrderModal} />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services onOpenOrderModal={handleOpenOrderModal} />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                {/* Fallback Route redirects to Home */}
                <Route path="*" element={<Home onOpenOrderModal={handleOpenOrderModal} />} />
              </Routes>
            </Suspense>
          </main>

          {/* Global Footer with Tracking Snippet */}
          <Footer />

          {/* Floating Actions: Call, WhatsApp, Back to Top */}
          <FloatingActions onOpenOrderModal={() => handleOpenOrderModal()} />

          {/* WhatsApp Order Form Modal */}
          <WhatsAppOrderModal
            isOpen={isOrderModalOpen}
            onClose={() => setIsOrderModalOpen(false)}
            initialMedicineName={selectedMedicineForOrder}
          />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
