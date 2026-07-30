import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  currentPageTitle: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPageTitle }) => {
  const location = useLocation();

  if (location.pathname === '/') return null;

  return (
    <nav className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center space-x-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
        <Link 
          to="/" 
          className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
        >
          <Home className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="font-semibold text-slate-900 dark:text-white truncate">
          {currentPageTitle}
        </span>
      </div>
    </nav>
  );
};
