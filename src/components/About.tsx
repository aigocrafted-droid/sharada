import { motion } from 'motion/react';
import { BookOpen, Award, Users2, Sparkle } from 'lucide-react';
import { ASSETS } from '../types';

export default function About() {
  const stats = [
    { id: 1, label: "Individual Focus & Attention", icon: <Users2 className="w-5 h-5 text-amber-500" /> },
    { id: 2, label: "Practical Learning & Activities", icon: <BookOpen className="w-5 h-5 text-amber-500" /> },
    { id: 3, label: "Daily Homework Support", icon: <Award className="w-5 h-5 text-amber-500" /> },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      
      {/* Decorative vector assets */}
      <div className="absolute top-10 right-0 w-48 h-48 bg-amber-100/50 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-64 h-64 bg-slate-100 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Premium Interactive Illustration */}
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#0a2342] rounded-3xl transform rotate-3 shadow-xl opacity-10" />
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={ASSETS.aboutPlaceholder}
                  alt="Students learning attentively"
                  referrerPolicy="no-referrer"
                  className="w-full h-96 object-cover object-center"
                />
                
                {/* Overlaid Banner inside Image */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0a2342] to-[#0a2342]/10 p-6 text-white text-left">
                  <h4 className="text-amber-400 font-display font-bold text-lg">Deep Level Understanding</h4>
                  <p className="text-slate-200 text-xs font-sans mt-1">
                    Enabling interactive skill building that triggers natural logic over simple blind rote-memorization.
                  </p>
                </div>
              </div>

              {/* Float Badge */}
              <div className="absolute -right-6 top-8 bg-amber-400 text-slate-900 border-2 border-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <Sparkle className="w-6 h-6 text-[#0a2342] fill-[#0a2342] animate-spin-slow" />
                <div className="text-left">
                  <span className="block text-xs uppercase tracking-wider font-bold">Chitradurga</span>
                  <span className="text-sm font-extrabold font-display text-[#0a2342]">6th - 10th Specialists</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Academic Details Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-red-600 tracking-widest uppercase block">About Shree Sharada Kalika Academy</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 leading-tight">
                Dedicated Tuition Centre Located <br />
                in the heart of <span className="text-[#0a2342] relative inline-block">Chitradurga<span className="absolute bottom-0.5 left-0 w-full h-1.5 bg-amber-400/40 -z-10" /></span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-4 text-slate-600 font-sans leading-relaxed text-sm md:text-base"
            >
              <p className="font-medium text-slate-800 text-base">
                Shree Sharada Kalika Academy is built to provide high-quality education and personal guidance for school students. We specialize in coaching students from 6th to 10th standard by creating a friendly, disciplined, and motivating learning environment.
              </p>
              
              <p>
                Our academy was founded with the vision of helping students understand subjects deeply instead of memorizing theory without clarity. We focus on practical understanding, concept learning, daily practice, school homework support, and skill development.
              </p>

              <blockquote className="border-l-4 border-amber-400 pl-4 py-2 italic text-slate-700 bg-amber-50/50 rounded-r-lg font-medium">
                “We understand that every child learns differently. That is why our teaching methods are designed to make learning simple, interactive, practical, and interesting.”
              </blockquote>

              <p>
                At Shree Sharada Kalika Academy, our goal is not only academic success but also helping students build confidence, communication skills, discipline, and problem-solving ability.
              </p>
            </motion.div>

            {/* Quick Core highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-amber-200 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-amber-400/10 shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-800 text-left font-display leading-snug">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
