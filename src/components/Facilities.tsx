import React from 'react';
import { motion } from 'motion/react';
import {
  Cpu,
  UserCheck,
  TrendingUp,
  BookOpenText,
  MessagesSquare,
  Sparkles,
  RefreshCw,
  FlaskConical,
  PhoneCall,
  Flame
} from 'lucide-react';
import { FACILITIES_LIST } from '../types';

export default function Facilities() {
  const iconMap: { [key: number]: React.ReactNode } = {
    1: <Cpu className="w-5 h-5 text-indigo-600" />,
    2: <UserCheck className="w-5 h-5 text-indigo-600" />,
    3: <TrendingUp className="w-5 h-5 text-indigo-600" />,
    4: <BookOpenText className="w-5 h-5 text-indigo-600" />,
    5: <MessagesSquare className="w-5 h-5 text-indigo-600" />,
    6: <Sparkles className="w-5 h-5 text-indigo-600" />,
    7: <RefreshCw className="w-5 h-5 text-indigo-600" />,
    8: <FlaskConical className="w-5 h-5 text-indigo-600" />,
    9: <PhoneCall className="w-5 h-5 text-indigo-600" />,
    10: <Flame className="w-5 h-5 text-indigo-600" />
  };

  return (
    <section id="facilities" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background shape */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-slate-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-amber-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title for section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[11px] font-bold text-red-600 tracking-widest uppercase block">ACADEMY ADVANTAGES</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-slate-900 leading-tight">
            Our Modern Facilities
          </h2>
          <p className="text-slate-600 font-sans max-w-xl mx-auto text-sm md:text-base">
            Equipped with progressive coaching materials, interactive methodologies, and premium support protocols.
          </p>
          <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full" />
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {FACILITIES_LIST.map((fac, idx) => (
            <motion.div
              key={fac.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-slate-50 border border-slate-100/90 rounded-2xl p-5 hover:border-amber-400 hover:bg-white transition-all text-left flex flex-col justify-between shadow-sm hover:shadow-lg relative overflow-hidden"
            >
              {/* Decorative side accent bar */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full -mr-6 -mt-6" />

              <div className="space-y-4">
                {/* Icon Circle */}
                <div className="p-3 w-fit rounded-xl bg-indigo-50 border border-indigo-100">
                  {iconMap[fac.id]}
                </div>

                {/* Text Description */}
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-base text-slate-900 leading-snug">
                    {fac.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    {fac.description}
                  </p>
                </div>
              </div>

              {/* Number overlay */}
              <span className="text-[10px] font-mono font-bold text-slate-300 self-end pt-3">
                FACILITY {fac.id.toString().padStart(2, '0')}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
