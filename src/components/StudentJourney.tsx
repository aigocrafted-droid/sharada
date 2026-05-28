import { motion } from 'motion/react';
import { Target, ThumbsUp, Calendar, Compass, UserCheck, Flame, Medal, CheckSquare, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS_LIST, STUDENT_JOURNEY_STEPS, ASSETS } from '../types';

export default function StudentJourney() {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Target className="w-5 h-5 text-amber-500" />;
      case 1:
        return <Compass className="w-5 h-5 text-amber-500" />;
      case 2:
        return <Calendar className="w-5 h-5 text-amber-500" />;
      case 3:
        return <UserCheck className="w-5 h-5 text-amber-500" />;
      case 4:
        return <Flame className="w-5 h-5 text-amber-500 animate-pulse" />;
      default:
        return <Medal className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="journey" className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Abstract light particles */}
      <div className="absolute top-1/4 left-0 w-84 h-84 bg-indigo-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* --- PART 1: ACHIEVEMENTS SECTION (Building Future Success Stories) --- */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Column Text Details */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-[11px] font-bold text-red-600 tracking-widest uppercase block flex items-center gap-1">
              <Medal className="w-4 h-4 text-amber-500" />
              BUILDING FUTURE SUCCESS STORIES
            </span>
            
            <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900 leading-tight">
              Our Commitment to <br />
              Student Academic Growth
            </h2>
            <div className="w-20 h-1.5 bg-red-600 rounded-full" />

            <p className="text-slate-600 font-sans leading-relaxed text-sm md:text-base">
              At Shree Sharada Kalika Academy, we believe education is much greater than simple textbook repetition. We align closely with core values to help students succeed holistically across general academic milestones.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {ACHIEVEMENTS_LIST.map((ach) => (
                <div
                  key={ach.id}
                  className="bg-white border border-slate-200/60 hover:border-amber-400 p-4 rounded-xl shadow-sm transition-all flex items-center gap-3.5"
                >
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0 border border-emerald-100">
                    <CheckSquare className="w-4.5 h-4.5 fill-emerald-500 text-white" />
                  </div>
                  <span className="text-xs md:text-sm font-bold text-slate-800 font-sans tracking-tight leading-tight">
                    {ach.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Custom Photo Asset Showcase */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Backglow layer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/25 to-red-600/15 rounded-3xl blur-2xl opacity-60 transform rotate-3" />
              
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={ASSETS.successImg}
                  alt="Students holding books celebrating academic success"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                
                {/* Floating parent-trust badge */}
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md p-3 rounded-2xl border border-white/10 flex items-center gap-2.5 shadow-lg">
                  <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center font-bold text-[#0a2342] text-xs">
                    ★
                  </div>
                  <div className="text-left leading-tight">
                    <span className="block text-[10px] text-slate-300 font-medium uppercase tracking-wider">Parents Rating</span>
                    <span className="text-xs font-bold text-white font-display">5.0 Star Academy</span>
                  </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent p-6 text-white text-left">
                  <p className="text-amber-400 font-display font-medium text-xs uppercase tracking-wider">Our Goal</p>
                  <h4 className="font-display font-bold text-base md:text-lg">Confident and structured academic leaders of tomorrow.</h4>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* --- PART 2: STUDENT JOURNEY Timeline Stepper --- */}
        <div className="pt-8 space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold font-display text-[#0a2342] tracking-tight">
              A Student’s Learning Journey
            </h3>
            <p className="text-slate-500 text-sm font-sans">
              How we guide your child from foundational understanding to full-fledged exam success.
            </p>
          </div>

          {/* Stepper Timeline Matrix */}
          <div className="grid lg:grid-cols-5 gap-6 relative">
            {/* Horizontal progress bar only on large screen */}
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-slate-200 -z-10" />

            {STUDENT_JOURNEY_STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-5 rounded-2xl border border-slate-200/80 text-left flex flex-col justify-between shadow-sm relative group hover:border-amber-400 transition-all hover:shadow-lg"
              >
                <div className="space-y-4">
                  
                  {/* Step bubble */}
                  <div className="flex justify-between items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center font-bold text-[#0a2342] group-hover:bg-amber-450/10 group-hover:bg-amber-400/10 group-hover:border-amber-400 transition-colors">
                      {getStepIcon(idx)}
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#0a2342] uppercase bg-amber-400/20 px-2.5 py-1 rounded-full border border-amber-400/30">
                      Step {step.step}
                    </span>
                  </div>

                  {/* Context details */}
                  <div className="space-y-1.5">
                    <h4 className="font-display font-bold text-base text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-sans leading-relaxed min-h-[48px]">
                      {step.description}
                    </p>
                  </div>

                </div>

                <div className="w-full h-1 bg-slate-100 group-hover:bg-amber-400 transition-colors mt-4 rounded-full" />
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
