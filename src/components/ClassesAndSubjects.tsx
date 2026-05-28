import { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, ChevronRight, Binary, Award, CheckCircle2, Languages, Sigma } from 'lucide-react';
import { CLASSES_OFFERED, SUBJECTS_OFFERED, ASSETS } from '../types';

export default function ClassesAndSubjects() {
  const [activeClass, setActiveClass] = useState<string>('std10');

  // Subjects with icons and specific layout graphics
  const getSubjectIcon = (id: string) => {
    switch (id) {
      case 'sub_kannada':
        return <Languages className="w-8 h-8 text-amber-500" />;
      case 'sub_english':
        return <BookOpen className="w-8 h-8 text-blue-500" />;
      case 'sub_maths':
        return <Sigma className="w-8 h-8 text-emerald-500" />;
      case 'sub_cs':
        return <Binary className="w-8 h-8 text-violet-500" />;
      default:
        return <GraduationCap className="w-8 h-8 text-amber-500" />;
    }
  };

  const getSubjectSyllabusHighlights = (id: string) => {
    switch (id) {
      case 'sub_kannada':
        return ['Vyakarana (Grammar)', 'Sahitya (Literature)', 'Patra Lekhana (Letter Writing)', 'Prabandha (Essay Writing)'];
      case 'sub_english':
        return ['Spoken Fluency', 'Parts of Speech & Tenses', 'Academic Comprehension', 'Creative Vocabulary'];
      case 'sub_maths':
        return ['Algebra & Geometry Triggers', 'Arithmetic Practice', 'Board-centric Key Formulas', 'Weekly Speed Drills'];
      case 'sub_cs':
        return ['Hands-on fundamental operations', 'Logo, Scratch, HTML Basics', 'Information Tech Fundamentals', 'Hardware & Office suite practice'];
      default:
        return [];
    }
  };

  return (
    <section id="classes" className="py-20 bg-slate-900 bg-gradient-to-b from-[#040e1b] via-[#081a30] to-[#040e1b] text-white relative overflow-hidden">
      {/* Decorative vector sparks */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title for section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[11px] font-bold text-amber-400 tracking-widest uppercase block">CURRICULUM MODULES</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight leading-tight text-white">
            Classes We Teach & Subjects We Offer
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-400 to-red-600 mx-auto rounded-full" />
        </div>

        {/* --- PART 1: CLASSES OFFERED --- */}
        <div className="mb-20 space-y-8">
          <div className="flex flex-col items-center text-center space-y-2">
            <h3 className="text-2xl font-bold font-display text-amber-300">Target Academic Levels</h3>
            <p className="text-slate-400 text-sm font-sans max-w-xl">
              We provide specific target approaches customized to each child's respective school textbook standards.
            </p>
          </div>

          {/* Interactive Class Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {CLASSES_OFFERED.map((cls) => (
              <button
                key={cls.id}
                onClick={() => setActiveClass(cls.id)}
                className={`px-5 py-3 rounded-xl font-display text-sm md:text-base font-bold transition-all flex items-center gap-2 cursor-pointer border ${
                  activeClass === cls.id
                    ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-lg shadow-amber-450/15'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                {cls.standard}
              </button>
            ))}
          </div>

          {/* Class details block */}
          <div className="max-w-3xl mx-auto bg-slate-950/60 border border-white/15 p-6 md:p-8 rounded-3xl relative overflow-hidden text-left shadow-2xl glass-glow">
            <div className="absolute right-0 top-0 w-32 h-32 bg-amber-400/5 rounded-full blur-2xl" />
            
            {CLASSES_OFFERED.filter(c => c.id === activeClass).map((cls) => (
              <motion.div
                key={cls.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <h4 className="text-xl md:text-2xl font-bold text-white font-display">
                    {cls.standard} Coaching Program
                  </h4>
                  <span className="bg-red-600/20 text-red-400 text-xs font-bold font-sans uppercase tracking-widest px-3 py-1 rounded-full border border-red-500/20">
                    6th to 10th Series
                  </span>
                </div>
                
                <p className="text-slate-300 font-sans leading-relaxed text-sm md:text-base">
                  Our {cls.standard} coaching module ensures a custom layout that focuses on {cls.description.toLowerCase()}. We bridge school coursework, ensuring every math derivation, grammar block, and digital skill has interactive foundations.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4.5 h-4.5 text-amber-500 shrink-0" />
                    <span>State Board & CBSE Syllabus Parallel Match</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4.5 h-4.5 text-amber-500 shrink-0" />
                    <span>School Homework Mapping & Support</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4.5 h-4.5 text-amber-500 shrink-0" />
                    <span>Weekly Test Series in Chitradurga format</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4.5 h-4.5 text-amber-500 shrink-0" />
                    <span>Performance Analytics Shared Directly with Parents</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- PART 2: SUBJECTS OFFERED (Interactive Subject Cards) --- */}
        <div className="pt-8 space-y-12">
          <div className="flex flex-col items-center text-center space-y-2">
            <h3 className="text-2xl font-bold font-display text-amber-300">Subject Coverage Matrix</h3>
            <p className="text-slate-400 text-sm font-sans max-w-xl">
              We specialize in the four pillar subjects vital for modern middle-school academic excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SUBJECTS_OFFERED.map((sub, idx) => (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-slate-950/40 border border-white/10 hover:border-amber-400/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                {/* Media Image Banner for Subjects */}
                <div className="h-44 relative bg-slate-900">
                  <img
                    src={sub.id === 'sub_cs' ? ASSETS.computerLab : sub.id === 'sub_maths' ? ASSETS.mathematics : ASSETS.classroom}
                    alt={sub.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center brightness-90 shadow-inner"
                  />
                  {/* Color overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                  
                  {/* Subject badge */}
                  <span className="absolute bottom-3 left-4 text-white font-display font-extrabold text-lg flex items-center gap-2 drop-shadow-md">
                    <span className="p-1.5 rounded-lg bg-slate-950/65 border border-white/20">
                      {getSubjectIcon(sub.id)}
                    </span>
                    {sub.name}
                  </span>
                </div>

                {/* Subject Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-5 text-left bg-gradient-to-b from-slate-950/60 to-slate-900/60">
                  <div className="space-y-4">
                    <p className="text-xs text-slate-300 leading-relaxed font-sans min-h-[48px]">
                      {sub.description}
                    </p>

                    <div className="space-y-2 border-t border-white/5 pt-4">
                      <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold font-display">Syllabus Pillars</span>
                      <ul className="space-y-1.5 text-xs text-slate-400">
                        {getSubjectSyllabusHighlights(sub.id).map((h, i) => (
                          <li key={i} className="flex items-center gap-2 font-sans truncate">
                            <span className="w-1 h-1 bg-amber-400 rounded-full shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href="#admission"
                    className="flex items-center justify-between font-display text-xs font-bold text-amber-300 hover:text-white transition-colors pt-2 group"
                  >
                    <span>Inquire this subject</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
