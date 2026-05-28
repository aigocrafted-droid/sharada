import { motion } from 'motion/react';
import { Settings, Sparkles, BookCheck, ClipboardPlus, Lightbulb, Minimize2, CheckSquare } from 'lucide-react';
import { TEACHING_METHOD_STYLE } from '../types';

export default function TeachingStyle() {
  return (
    <section id="method" className="py-20 bg-white relative overflow-hidden">
      
      {/* Decorative accent layers */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-12 right-0 w-80 h-80 bg-[#0a2342]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Philosophical Overview & Visual Highlights */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-[11px] font-bold text-red-600 tracking-widest uppercase block flex items-center gap-2">
              <Settings className="w-4 h-4 animate-spin-slow text-amber-500" />
              SPECIAL TEACHING METHOD
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900 tracking-tight leading-tight">
              Our Unique Learning Approach
            </h2>
            <div className="w-20 h-1.5 bg-amber-400 rounded-full" />
            
            <div className="space-y-4 text-slate-600 font-sans leading-relaxed text-sm md:text-base">
              <p className="text-slate-800 font-semibold text-lg leading-snug">
                At Shree Sharada Kalika Academy, we believe students learn better when education becomes practical and engaging.
              </p>
              
              <p>
                Our pedagogy bypasses standard mechanical repeating. By structuring each concept with interactive applications first, we help students explore the real-world utility of every formula, grammatical structure, or programming file.
              </p>
              
              <div className="p-5 rounded-2xl bg-[#0a2342] text-white space-y-3 relative overflow-hidden shadow-xl">
                {/* Glowing light ball */}
                <div className="absolute right-0 top-0 w-16 h-16 bg-amber-400/20 rounded-full blur-xl" />
                
                <h4 className="font-display font-bold text-amber-400 text-lg flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-400 shrink-0" />
                  Practical Learning Focus
                </h4>
                
                <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-sans">
                  Instead of teaching only theory, we help students understand concepts through practical methods and repeated practice so they can remember lessons for a longer time.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 10 Pillars of Our Teaching Style */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-3xl relative">
            <h3 className="text-lg md:text-xl font-bold font-display text-[#0a2342] mb-6 flex items-center gap-2 text-left">
              <BookCheck className="w-5 h-5 text-amber-500" />
              Our Teaching Style Includes:
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {TEACHING_METHOD_STYLE.map((style, index) => (
                <motion.div
                  key={style.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="bg-white p-4 rounded-xl border border-slate-100 hover:border-amber-400/50 shadow-sm flex items-start gap-3 transition-all hover:shadow-md text-left"
                >
                  <div className="p-1 rounded-full bg-emerald-50 text-emerald-600 shrink-0 mt-0.5 border border-emerald-100">
                    <CheckSquare className="w-4 h-4 fill-emerald-500 text-white" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-slate-800 font-sans leading-tight">
                    {style.title}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Extra reassurance footer tagline */}
            <div className="mt-6 pt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs md:text-sm font-display text-[#0a2342] font-semibold text-left">
              <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
              Where Learning Becomes Easy & Meaningful
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
