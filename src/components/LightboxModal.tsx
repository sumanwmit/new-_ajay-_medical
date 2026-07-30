import React from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download } from 'lucide-react';
import { GalleryImage } from '../data/galleryData';

interface LightboxModalProps {
  image: GalleryImage | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  image,
  onClose,
  onNext,
  onPrev,
}) => {
  const [zoomLevel, setZoomLevel] = React.useState(1);

  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Controls */}
        <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between text-white">
          <div>
            <h3 className="text-sm font-bold text-white">{image.title}</h3>
            <span className="text-xs text-emerald-400 font-medium">{image.category}</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setZoomLevel(prev => (prev === 1 ? 1.5 : 1))}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1"
              title="Toggle Zoom"
            >
              {zoomLevel === 1 ? <ZoomIn className="w-4 h-4" /> : <ZoomOut className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 hover:bg-rose-600 text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden p-4 min-h-[300px]">
          {onPrev && (
            <button
              onClick={onPrev}
              className="absolute left-4 z-10 p-3 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white transition-colors border border-slate-700 shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <img
            src={image.url}
            alt={image.alt}
            style={{ transform: `scale(${zoomLevel})` }}
            className="max-h-[65vh] w-auto object-contain transition-transform duration-300 rounded-lg shadow-xl"
          />

          {onNext && (
            <button
              onClick={onNext}
              className="absolute right-4 z-10 p-3 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white transition-colors border border-slate-700 shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Caption Bar */}
        <div className="p-4 bg-slate-950/90 border-t border-slate-800 text-slate-300 text-xs sm:text-sm">
          <p className="leading-relaxed">{image.caption}</p>
        </div>
      </div>
    </div>
  );
};
