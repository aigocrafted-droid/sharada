import React, { useState, useEffect } from 'react';
import { MessageSquare, ClipboardList, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTACT_INFO } from '../types';

export default function FloatingButtons() {
  const [showStickyEnroll, setShowStickyEnroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyEnroll(true);
      } else {
        setShowStickyEnroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToEnroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.querySelector('#admission');
    if (target) {
      const offset = 85;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed bottom-6 left-0 right-0 z-40 pointer-events-none flex justify-between px-6 items-center">
      
      {/* 1. Sticky Admission Button on the bottom-left */}
      <AnimatePresence>
        {showStickyEnroll && (
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -30, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto shadow-2xl"
          >
            <button
              onClick={handleScrollToEnroll}
              className="bg-red-600 hover:bg-red-700 text-white font-sans text-xs md:text-sm font-bold py-3 px-5 rounded-full flex items-center gap-2 border border-red-500/30 transform active:scale-95 transition-all shadow-lg cursor-pointer"
            >
              <ClipboardList className="w-4 h-4" />
              <span>Enrollment Open</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty space in-between */}
      <div className="flex-1" />

      {/* 2. Floating WhatsApp inquiry support on the bottom-right */}
      <div className="pointer-events-auto">
        <motion.a
          href={CONTACT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0.9 }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="bg-emerald-500 hover:bg-emerald-600 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-emerald-500/20 shadow-emerald-500/30 border border-emerald-400/40 relative group cursor-pointer"
          title="Direct WhatsApp Support"
        >
          {/* Ripple animation wave behind */}
          <span className="absolute inset-0 bg-emerald-500/30 rounded-full animate-ping opacity-60" />

          {/* Icon */}
          <MessageSquare className="w-7 h-7 fill-white text-emerald-500" />
          
          {/* Tooltip bubble that pops up on hover */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#0a2342] border border-amber-400/20 text-white font-display text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
            Enroll help online
          </span>
        </motion.a>
      </div>

    </div>
  );
}
