import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_LIST } from '../types';

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1); // first item open by default

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-white relative overflow-hidden">
      
      {/* Visual background layers */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-amber-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-indigo-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title for section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[11px] font-bold text-red-600 tracking-widest uppercase block flex items-center justify-center gap-1">
            <HelpCircle className="w-4 h-4 text-amber-500" />
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-slate-900 leading-tight">
            Common Inquiries & Answers
          </h2>
          <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full" />
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4 text-left">
          {FAQ_LIST.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all ${
                  isOpen
                    ? 'border-amber-400 bg-amber-50/20 shadow-md shadow-amber-400/5'
                    : 'border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-slate-300'
                } overflow-hidden`}
              >
                
                {/* Accordion header button */}
                <button
                  onClick={() => handleToggle(faq.id)}
                  className="w-full px-6 py-5 flex justify-between items-center gap-4 text-left font-display font-bold text-slate-900 text-sm md:text-base cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#0a2342] opacity-30 font-mono text-xs font-semibold mr-1">
                      {faq.id.toString().padStart(2, '0')}
                    </span>
                    {faq.question}
                  </span>
                  
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-amber-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {/* Accordion answer content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 font-sans text-xs md:text-sm leading-relaxed border-t border-slate-200/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
