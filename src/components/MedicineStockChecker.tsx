import React, { useState, useMemo } from 'react';
import { Search, Filter, Pill, CheckCircle2, AlertCircle, XCircle, RefreshCw, MessageSquare, Tag, Clock } from 'lucide-react';
import medicineData from '../data/medicineStock.json';

export interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  subCategory?: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: "Available" | "Limited Stock" | "Out of Stock" | string;
  description: string;
  prescriptionRequired: boolean;
}

interface StockCheckerProps {
  onOrderClick?: (medName?: string) => void;
  title?: string;
  subtitle?: string;
  limitDisplay?: number;
  showViewAllButton?: boolean;
}

export const MedicineStockChecker: React.FC<StockCheckerProps> = ({
  onOrderClick,
  title = "Live Medicine Inventory & Availability Checker",
  subtitle = "Instantly search for prescription drugs, health devices, and baby care stock at New Ajay Medical Hall, Mallachak More, Jehanabad.",
  limitDisplay,
  showViewAllButton = false,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(medicineData.map(item => item.category)));
    return ['All', ...cats];
  }, []);

  // Filtered medicine list
  const filteredMedicines = useMemo(() => {
    return (medicineData as MedicineItem[]).filter(med => {
      const matchesSearch = 
        med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (med.subCategory && med.subCategory.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || med.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchTerm, selectedCategory, selectedStatus]);

  const displayedMedicines = limitDisplay ? filteredMedicines.slice(0, limitDisplay) : filteredMedicines;

  const handleWhatsAppInquire = (medName: string, brand: string) => {
    const message = encodeURIComponent(
      `Hello New Ajay Medical Hall,\n\nI am inquiring about the availability of *${medName}* (${brand}).\nCould you please confirm if this item is ready for pickup or home delivery?\n\nThank you!`
    );
    window.open(`https://wa.me/919939467567?text=${message}`, '_blank');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Available':
        return (
          <span className="px-2 py-1 bg-emerald-600 text-white text-[10px] font-bold rounded-md uppercase tracking-wider">
            Available
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="px-2 py-1 bg-amber-500 text-white text-[10px] font-bold rounded-md uppercase tracking-wider">
            Limited
          </span>
        );
      case 'Out of Stock':
      default:
        return (
          <span className="px-2 py-1 bg-slate-400 dark:bg-slate-700 text-white text-[10px] font-bold rounded-md uppercase tracking-wider">
            Out of Stock
          </span>
        );
    }
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-800 overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-10 -translate-y-6">
          <Pill className="w-64 h-64 text-white" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-emerald-600/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-emerald-100 mb-3 border border-emerald-400/30">
            <RefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-300" style={{ animationDuration: '6s' }} />
            Updated Inventory System
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{title}</h2>
          <p className="mt-2 text-sm sm:text-base text-emerald-100 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="p-4 sm:p-6 bg-slate-50/80 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Main Search Input */}
          <div className="md:col-span-6 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by medicine name, brand (e.g. Crocin, Omron, Alkem)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Dropdown */}
          <div className="md:col-span-3">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none cursor-pointer"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'All' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Status Dropdown */}
          <div className="md:col-span-3">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none cursor-pointer"
            >
              <option value="All">All Stock Status</option>
              <option value="Available">Available Only</option>
              <option value="Limited Stock">Limited Stock Only</option>
              <option value="Out of Stock">Out of Stock Only</option>
            </select>
          </div>
        </div>

        {/* Results Counter & Active Pills */}
        <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-1">
          <div>
            Showing <strong className="text-slate-800 dark:text-slate-200">{displayedMedicines.length}</strong> of{' '}
            <strong className="text-slate-800 dark:text-slate-200">{medicineData.length}</strong> inventory items
          </div>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            {searchTerm && (
              <span className="bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                Keyword: "{searchTerm}"
              </span>
            )}
            {selectedCategory !== 'All' && (
              <span className="bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                Category: {selectedCategory}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Inventory Grid */}
      <div className="p-4 sm:p-6">
        {displayedMedicines.length === 0 ? (
          <div className="text-center py-12 px-4 bg-slate-50 dark:bg-slate-800/30 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
            <Pill className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">No matching medicines found</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
              We might still have this medicine in our main pharmacy store. Please contact us on WhatsApp directly for instant manual verification.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedStatus('All');
                }}
                className="px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 rounded-lg text-xs font-medium transition-colors"
              >
                Reset Filters
              </button>
              <button
                onClick={() => handleWhatsAppInquire(searchTerm || 'Unlisted Medicine', 'New Ajay Medical Hall')}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Ask Pharmacist on WhatsApp
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {displayedMedicines.map((item) => (
              <div
                key={item.id}
                className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/50">
                      {item.brand}
                    </span>
                    {getStatusBadge(item.status)}
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 min-h-[2rem]">
                    {item.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Tag className="w-3 h-3 text-emerald-500" /> MRP:
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white text-sm">
                        ₹{item.mrp.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" /> Expiry:
                      </span>
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {item.expiry}
                      </span>
                    </div>

                    {item.prescriptionRequired && (
                      <div className="text-[11px] text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-900/50 mt-1 font-medium">
                        * Prescription Required
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleWhatsAppInquire(item.name, item.brand)}
                      className="w-full py-2 px-2 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      Inquire
                    </button>
                    <button
                      onClick={() => onOrderClick && onOrderClick(item.name)}
                      className="w-full py-2 px-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1 shadow-sm"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        {showViewAllButton && limitDisplay && medicineData.length > limitDisplay && (
          <div className="mt-8 text-center">
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg"
            >
              View Full Stock Catalog ({medicineData.length} Items) & Services →
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
