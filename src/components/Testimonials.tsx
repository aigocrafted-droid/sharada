import { useState, useEffect } from 'react';
import { Quote, Star,ChevronLeft, ChevronRight, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS_LIST } from '../types';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_LIST.length);
    }, 5000); // changes every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_LIST.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_LIST.length);
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-[#07162c] via-[#092241] to-[#040e1b] text-white relative overflow-hidden">
      
      {/* Dynamic graphic accents */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title for section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[11px] font-bold text-amber-400 tracking-widest uppercase block">TESTIMONIALS & REVIEWS</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight leading-tight text-white">
            What Parents & Students Say
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-400 to-red-600 mx-auto rounded-full" />
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative px-4 md:px-12">
          
          <div className="relative min-h-[280px] md:min-h-[240px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {TESTIMONIALS_LIST.map((test, index) => {
                if (index !== activeIndex) return null;
                return (
                  <motion.div
                    key={test.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="w-full bg-slate-950/40 border border-white/10 p-6 md:p-10 rounded-3xl relative text-center glass-glow"
                  >
                    {/* Quotation Graphics */}
                    <div className="absolute right-6 top-6 opacity-10">
                      <Quote className="w-20 h-20 text-amber-400 rotate-180" />
                    </div>
                    
                    <div className="flex flex-col items-center space-y-4 md:space-y-6">
                      {/* Avatar Mock */}
                      <div className="w-16 h-16 rounded-full bg-amber-400/10 border-2 border-amber-400 flex items-center justify-center text-amber-400 relative">
                        <User className="w-8 h-8" />
                        <span className="absolute -bottom-1 -right-1 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full border border-[#092241]">
                          {test.role}
                        </span>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-1">
                        {[...Array(test.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      {/* Comment text */}
                      <p className="text-base md:text-xl font-medium font-sans leading-relaxed text-slate-200">
                        {test.text}
                      </p>

                      {/* Author credentials */}
                      <div className="space-y-0.5">
                        <h4 className="text-amber-400 font-display font-bold text-sm tracking-wide">
                          {test.author}
                        </h4>
                        <span className="text-slate-400 text-xs uppercase tracking-widest font-mono">
                          Verified local profile
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Nav buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-amber-400 hover:text-slate-900 transition-all cursor-pointer shadow-lg"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-amber-400 hover:text-slate-900 transition-all cursor-pointer shadow-lg"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS_LIST.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full cursor-pointer transition-all ${
                  index === activeIndex ? 'w-6 bg-amber-400' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
