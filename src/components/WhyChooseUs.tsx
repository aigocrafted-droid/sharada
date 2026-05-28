import React from 'react';
import { motion } from 'motion/react';
import {
  UserCheck,
  FileText,
  Hammer,
  ClipboardCheck,
  Building,
  Smile,
  GraduationCap,
  Lightbulb,
  MonitorPlay,
  TrendingUp
} from 'lucide-react';
import { WHY_CHOOSE_US_ITEMS, CONTACT_INFO } from '../types';

export default function WhyChooseUs() {
  // Mapping the 10 reasons to relevant beautiful Lucide icons
  const iconMap: { [key: number]: React.ReactNode } = {
    1: <UserCheck className="w-6 h-6 text-amber-400" />,
    2: <FileText className="w-6 h-6 text-amber-400" />,
    3: <Hammer className="w-6 h-6 text-amber-400" />,
    4: <ClipboardCheck className="w-6 h-6 text-amber-400" />,
    5: <Building className="w-6 h-6 text-amber-400" />,
    6: <Smile className="w-6 h-6 text-amber-400" />,
    7: <GraduationCap className="w-6 h-6 text-amber-400" />,
    8: <Lightbulb className="w-6 h-6 text-amber-400" />,
    9: <MonitorPlay className="w-6 h-6 text-amber-400" />,
    10: <TrendingUp className="w-6 h-6 text-amber-400" />
  };

  return (
    <section id="why-choose-us" className="py-20 bg-slate-550 bg-gradient-to-b from-[#0a2342] to-[#040e1b] text-white relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[11px] font-bold text-amber-400 tracking-widest uppercase block">WHY CHOOSE US</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight leading-tight">
            Why Parents & Students Choose <br />
            Our Modern Academy
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-red-600 mx-auto rounded-full" />
        </div>

        {/* 10 points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {WHY_CHOOSE_US_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-slate-900/60 border border-white/10 rounded-2xl p-5 hover:border-amber-400/50 transition-all flex flex-col justify-between text-left relative glass-glow group"
            >
              {/* Inner container */}
              <div className="space-y-4">
                
                {/* Number Accent and Icon */}
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-amber-400/10 group-hover:border-amber-400/30 transition-colors">
                    {iconMap[item.id]}
                  </div>
                  <span className="text-3xl font-extrabold font-mono text-white/10 leading-none group-hover:text-amber-400/20 transition-colors">
                    {item.id.toString().padStart(2, '0')}
                  </span>
                </div>

                {/* Text Context */}
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-base text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans group-hover:text-slate-300 transition-colors">
                    {item.description}
                  </p>
                </div>

              </div>
              
              {/* Card visual footer */}
              <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-amber-400 to-red-600 transition-all duration-300 mt-4 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Trust Seal */}
        <div className="mt-16 bg-slate-900/40 border border-amber-400/20 p-6 rounded-2xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-2">
            <h4 className="font-display font-bold text-lg text-amber-300">Have Questions About Teaching Formats?</h4>
            <p className="text-slate-400 text-sm font-sans">
              Connect directly with our administrators for details on daily schedules, student progress tracking, and batch availability.
            </p>
          </div>
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg shadow-amber-450/10 shrink-0 flex items-center gap-2 text-sm"
          >
            Ask on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
