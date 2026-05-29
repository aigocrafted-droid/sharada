import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Phone, Calendar, Users, Award, ShieldCheck, Sparkles } from 'lucide-react';
import { ASSETS, HERO_HIGHLIGHTS, CONTACT_INFO } from '../types';

export default function Hero() {
  const handleScrollToSection = (id: string, text?: string) => {
    const target = document.querySelector(id);
    if (target) {
      const offset = 85;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetOffset = elementPosition - offset;

      window.scrollTo({
        top: offsetOffset,
        behavior: 'smooth'
      });

      // If text is provided and it's for the form, auto fill message
      if (text && id === '#admission') {
        const msgInput = document.getElementById('admission-message') as HTMLTextAreaElement;
        if (msgInput) {
          msgInput.value = text;
          msgInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }
    }
  };

  return (
    <section
      id="home"
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-[#07162c] via-[#092241] to-[#040e1b] overflow-hidden"
    >
      {/* Decorative Blur Spheres (Premium Ambient Light Glows) */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Content Columns */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            
            {/* Glowing Accent Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs md:text-sm font-semibold tracking-wider uppercase backdrop-blur-sm shadow shadow-amber-400/5 cursor-pointer hover:bg-amber-400/15 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              Admissions Open for New Batch
            </motion.div>

            {/* Glowing Headings */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-display"
              >
                Empowering Students <br className="hidden sm:inline" />
                for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 drop-shadow-[0_2px_15px_rgba(251,191,36,0.15)]">Brighter Future</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-amber-300 font-sans font-medium max-w-2xl leading-relaxed"
              >
                Modern Tuition Academy for 6th to 10th Standard Students in Chitradurga
              </motion.p>
            </div>

            {/* Core Description Text */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4 text-slate-300 text-sm md:text-base font-sans leading-relaxed max-w-2xl"
            >
              <p>
                At Shree Sharada Kalika Academy, we believe every child has the potential to achieve academic excellence with the right guidance, practical learning, and continuous support. Our academy focuses not only on marks but also on real understanding, confidence, discipline, and long-term success.
              </p>
              <p className="border-l-2 border-amber-400/50 pl-4 bg-slate-900/40 py-2.5 pr-2 rounded-r-lg">
                We provide expert coaching for Kannada, English, Mathematics, Science, and Social Science with individual attention, school homework follow-up, weekly assessments, and practical teaching methods that help students remember concepts for a longer time.
              </p>
            </motion.div>

            {/* Three Prominent Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-start pt-2"
            >
              <button
                onClick={() => handleScrollToSection('#admission')}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-red-600/30 font-sans inline-flex items-center justify-center gap-2 transform active:scale-95 transition-all duration-300 cursor-pointer text-base group"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollToSection('#admission', 'Hello, I want to book a free Demo class for Shree Sharada Kalika Academy.')}
                className="bg-amber-400 hover:bg-amber-500 text-[#0c1f38] font-bold px-7 py-4 rounded-xl shadow-lg shadow-amber-400/20 font-sans inline-flex items-center justify-center gap-2 transform active:scale-95 transition-all duration-300 cursor-pointer text-base"
              >
                <Calendar className="w-5 h-5" />
                Book Free Demo Class
              </button>

              <button
                onClick={() => handleScrollToSection('#contact')}
                className="bg-slate-800/80 hover:bg-slate-700/80 text-white font-medium px-6 py-4 rounded-xl border border-slate-700 font-sans inline-flex items-center justify-center gap-2 transform active:scale-95 transition-all duration-300 cursor-pointer text-base"
              >
                <Phone className="w-4 h-4 text-slate-300" />
                Contact Us
              </button>
            </motion.div>

            {/* List of Hero Highlights Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 pt-4 border-t border-slate-800"
            >
              {HERO_HIGHLIGHTS.map((hl) => (
                <div key={hl.id} className="flex items-center gap-2 text-slate-300 text-xs md:text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{hl.title}</span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Image Container (Visual Showcase) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              
              {/* Backglow effect decor */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/30 to-red-600/30 rounded-3xl blur-2xl opacity-60 -rotate-3" />

              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden border border-amber-400/35 bg-slate-900 shadow-2xl overflow-hidden glass-glow">
                <img
                  src={ASSETS.classroom}
                  alt="Students Studying at Shree Sharada Kalika Academy"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Dark gradient overlay on bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Overlaid stats panel - Interactive statistics */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex justify-around items-center text-center">
                  <div>
                    <span className="block text-2xl font-extrabold text-amber-400 font-display">500+</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Students Guided</span>
                  </div>
                  <div className="h-8 w-[1px] bg-white/10" />
                  <div>
                    <span className="block text-2xl font-extrabold text-white font-display">100%</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Parent Trust</span>
                  </div>
                  <div className="h-8 w-[1px] bg-white/10" />
                  <div>
                    <span className="block text-2xl font-extrabold text-amber-400 font-display">Weekly</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Assessments</span>
                  </div>
                </div>

                {/* Floating Highlight Banner */}
                <span className="absolute top-4 right-4 bg-red-600 text-white font-display text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg border border-red-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                  Best Tuition in Chitradurga
                </span>
              </div>

              {/* Additional Decorative floating cards */}
              <div className="absolute -left-4 -bottom-4 bg-[#0a2342] border border-amber-400/40 p-3 rounded-2xl hidden sm:flex items-center gap-3 shadow-xl max-w-[190px]">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 flex items-center justify-center border border-amber-400/30">
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold font-display leading-tight">Concept Focused</h4>
                  <p className="text-[10px] text-slate-400">Deep structural understand</p>
                </div>
              </div>

              <div className="absolute -right-4 top-16 bg-slate-900 border border-amber-400/20 p-3 rounded-2xl hidden sm:flex items-center gap-3 shadow-xl max-w-[200px] z-10">
                <div className="w-10 h-10 rounded-xl bg-red-400/20 flex items-center justify-center border border-red-500/20">
                  <ShieldCheck className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold font-display leading-tight">Individual Focus</h4>
                  <p className="text-[10px] text-slate-400">No student left behind</p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
