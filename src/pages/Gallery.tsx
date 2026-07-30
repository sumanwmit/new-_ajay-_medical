import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { GALLERY_DATA, GalleryImage } from '../data/galleryData';
import { LightboxModal } from '../components/LightboxModal';
import { Filter, ZoomIn, Image as ImageIcon, Camera, CheckCircle2 } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = ['All', 'Store Front', 'Interior & Shelves', 'Medicines & Storage', 'Health Devices', 'Customer Service'];

  const filteredImages = selectedCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(img => img.category === selectedCategory);

  const activeImage = activeImageIndex !== null ? filteredImages[activeImageIndex] : null;

  const handleNext = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredImages.length);
    }
  };

  const handlePrev = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="space-y-12 pb-12">
      <SEO
        title="Store Gallery & Infrastructure | New Ajay Medical Hall, Jehanabad"
        description="Take a visual tour of New Ajay Medical Hall in Mallachak More, Jehanabad. View photos of our storefront, organized medicine shelves, cold-chain refrigeration, and diagnostic equipment counters."
        canonicalUrl="https://newajaymedicalhall.com/gallery"
      />

      {/* Gallery Header */}
      <section className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white p-8 sm:p-14 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
            Visual Experience
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mt-4">
            Store Photo Gallery
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            Explore our state-of-the-art retail premises at Mallachak More, Jehanabad. Inspect our clean medicine racks, medical refrigeration, health monitoring setup, and friendly pharmacy service counter.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="flex flex-wrap items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1 mr-2">
          <Filter className="w-3.5 h-3.5 text-emerald-500" /> Filter Gallery:
        </span>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setActiveImageIndex(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === cat
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Image Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredImages.map((img, index) => (
          <div
            key={img.id}
            onClick={() => setActiveImageIndex(index)}
            className="group cursor-pointer bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 transform scale-90 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-6 h-6" />
                </span>
              </div>
              <span className="absolute top-3 left-3 text-[10px] font-bold text-white bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                {img.category}
              </span>
            </div>

            <div className="p-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-emerald-600 transition-colors">
                {img.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                {img.caption}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Lightbox Popup Modal */}
      <LightboxModal
        image={activeImage}
        onClose={() => setActiveImageIndex(null)}
        onNext={filteredImages.length > 1 ? handleNext : undefined}
        onPrev={filteredImages.length > 1 ? handlePrev : undefined}
      />

      {/* Quality Assurance Assurance Banner */}
      <section className="bg-emerald-50 dark:bg-emerald-950/40 p-6 sm:p-8 rounded-3xl border border-emerald-200 dark:border-emerald-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
            <Camera className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Visit Our Store in Person</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
              Experience clean, hygienic medicine storage and friendly pharmacist consultation at Mallachak More, Jehanabad.
            </p>
          </div>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Ajay+Medical+Hall+Mallachak+More+Jehanabad+Bihar+804408"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-all shadow-md shrink-0"
        >
          View Store on Google Maps →
        </a>
      </section>
    </div>
  );
};
