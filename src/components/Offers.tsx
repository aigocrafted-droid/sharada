import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldAlert,
  ClipboardList,
  RefreshCw,
  HelpCircle,
  FileCheck2,
  TrendingUp,
  Award,
  Sparkles
} from 'lucide-react';
import { WHAT_WE_OFFER_ITEMS } from '../types';

export default function Offers() {
  const iconMap: { [key: string]: React.ReactNode } = {
    offer1: <ShieldAlert className="w-5 h-5 text-red-600" />,
    offer2: <ClipboardList className="w-5 h-5 text-indigo-600" />,
    offer3: <RefreshCw className="w-5 h-5 text-emerald-600" />,
    offer4: <HelpCircle className="w-5 h-5 text-amber-600" />,
    offer5: <FileCheck2 className="w-5 h-5 text-sky-600" />,
    offer6: <TrendingUp className="w-5 h-5 text-purple-600" />,
    offer7: <Award className="w-5 h-5 text-rose-600" />,
    offer8: <Sparkles className="w-5 h-5 text-orange-600" />
  };

  return (
    <section id="offers" className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Background graphic blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[11px] font-bold text-red-600 tracking-widest uppercase block">WHAT WE OFFER</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-slate-900 leading-tight">
            Complete Academic Support
          </h2>
          <p className="text-slate-600 font-sans max-w-xl mx-auto text-sm md:text-base">
            We cover school curriculums thoroughly while injecting modern practical approaches for comprehensive mental development.
          </p>
          <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full" />
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHAT_WE_OFFER_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all flex flex-col items-start text-left relative overflow-hidden"
            >
              {/* Highlight ribbon */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500/10 to-red-600/10" />

              {/* Icon Container */}
              <div className="p-3 rounded-xl bg-slate-100 mb-5 relative">
                {iconMap[item.id]}
              </div>

              {/* TEXT CONTENT */}
              <div className="space-y-2">
                <h3 className="font-display font-bold text-lg text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              {/* Accent dot indicator */}
              <span className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-slate-300 rounded-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
