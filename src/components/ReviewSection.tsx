import React from 'react';
import { Star, ThumbsUp, ShieldCheck, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';
import { REVIEWS_SUMMARY } from '../data/reviewsData';

interface ReviewSectionProps {
  showFullGrid?: boolean;
}

export const ReviewSection: React.FC<ReviewSectionProps> = ({ showFullGrid = false }) => {
  const reviewsToDisplay = showFullGrid ? REVIEWS_SUMMARY.recentFeedback : REVIEWS_SUMMARY.recentFeedback.slice(0, 3);

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-800/40 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-10 my-8">
      {/* Title & Trust Rating Stats */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-700">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 mb-2 border border-emerald-300 dark:border-emerald-800">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Verified Local Customer Trust
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Jehanabad Patients & Families Say
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Real experiences from residents around Mallachak More and Jehanabad district.
          </p>
        </div>

        {/* Rating Score Card */}
        <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm shrink-0">
          <div className="text-center">
            <div className="text-3xl font-black text-slate-900 dark:text-white">
              {REVIEWS_SUMMARY.rating}
            </div>
            <div className="flex items-center justify-center gap-0.5 text-amber-400 mt-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5 block">
              {REVIEWS_SUMMARY.totalReviews}+ Verified Feedbacks
            </span>
          </div>

          <div className="h-10 w-px bg-slate-200 dark:bg-slate-700" />

          <div>
            <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
              {REVIEWS_SUMMARY.satisfactionRate}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-300 font-semibold">Satisfaction</div>
            <div className="text-[11px] text-slate-400">Prompt Local Support</div>
          </div>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
        {REVIEWS_SUMMARY.highlights.map((item, idx) => (
          <div
            key={idx}
            className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{item.tag}</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Customer Feedback Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviewsToDisplay.map((rev) => (
          <div
            key={rev.id}
            className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded font-medium">
                  {rev.date}
                </span>
              </div>

              <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-2">
                "{rev.tagline}"
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                "{rev.comment}"
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> Verified Customer
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3 h-3 text-slate-400" /> {rev.location}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Google Review Call to Action */}
      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <ThumbsUp className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Have you visited New Ajay Medical Hall?</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Share your feedback to help fellow patients in Jehanabad!</div>
          </div>
        </div>

        <a
          href="https://wa.me/919939467567?text=Hello%20New%20Ajay%20Medical%20Hall,%20I%20would%20like%20to%20leave%20feedback%20for%20my%20recent%20visit!"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 shrink-0"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
          Send Us Feedback
        </a>
      </div>
    </section>
  );
};
