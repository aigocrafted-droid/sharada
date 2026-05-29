import React from 'react';
import { ChevronRight, Smartphone, MapPin, Inbox, MessageSquare } from 'lucide-react';
import { ASSETS, CONTACT_INFO } from '../types';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 85;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Classes & Subjects', href: '#classes' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  const subjects = [
    { name: 'Kannada Literature & Grammar' },
    { name: 'Communicative English' },
    { name: 'Analytical Mathematics' },
    { name: 'Concept-based Science' },
    { name: 'Interactive Social Science' }
  ];

  return (
    <footer id="footer" className="bg-[#030d1b] text-slate-300 border-t border-amber-400/20">
      
      {/* Upper Footer: Sub-Grid Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          
          {/* Column 1: Brand details */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-amber-400 bg-white flex items-center justify-center p-1 shadow shadow-amber-400/30">
                <img
                  src={ASSETS.logo}
                  alt="Shree Sharada Kalika Academy Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-display text-sm md:text-base font-extrabold tracking-tight leading-4">
                  SHREE SHARADA KALIKA
                </span>
                <span className="text-amber-400 font-display text-xs font-semibold tracking-wider uppercase">
                  ACADEMY
                </span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-slate-400 font-sans leading-relaxed">
              Shree Sharada Kalika Academy is dedicated to building confident, knowledgeable, and successful students through practical learning and personal guidance in Chitradurga.
            </p>

            <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-1">
              <span className="text-[10px] text-amber-400 font-mono font-bold uppercase tracking-widest block">Academy Tagline</span>
              <p className="text-[#f1f5f9] font-display font-semibold text-xs leading-none">
                Quality Education • Better Future • Bright Tomorrow
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-5">
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider border-b border-white/10 pb-2">
              Quick Navigation
            </h4>
            
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs md:text-sm font-sans font-medium">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500/60 group-hover:translate-x-0.5 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Subjects Offered */}
          <div className="space-y-5">
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider border-b border-white/10 pb-2">
              Our Core Subjects
            </h4>

            <ul className="space-y-2.5 text-xs md:text-sm font-sans font-medium">
              {subjects.map((sub) => (
                <li key={sub.name} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full shrink-0" />
                  <span className="text-slate-400 group-hover:text-white transition-colors">{sub.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Reach Info */}
          <div className="space-y-5">
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider border-b border-white/10 pb-2">
              Chitradurga Office
            </h4>

            <div className="space-y-4 text-xs md:text-sm font-sans font-medium">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-slate-400 leading-relaxed font-sans">
                  Near Kindergarten School, Near District Court, Turuvanur Rd, VTG, Chitradurga, Karnataka – 577501
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Smartphone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone1.replace(/\s+/g, '')}`} className="hover:text-amber-400 text-white font-bold transition-colors">
                  {CONTACT_INFO.phone1}
                </a>
              </div>

              {/* Direct query anchor */}
              <a
                href={CONTACT_INFO.whatsappUrlGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-white transition-colors uppercase tracking-wider"
              >
                <MessageSquare className="w-4.5 h-4.5 fill-emerald-400 text-[#030d1b]" />
                Enquire via WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer Credits */}
      <div className="border-t border-slate-900 bg-slate-950/40 py-6 text-center text-[11px] text-slate-500 font-sans tracking-wide">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} Shree Sharada Kalika Academy. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed for Shree Sharada Kalika Academy, Chitradurga</span>
            <span className="text-amber-500">•</span>
            <span>Education Brand</span>
          </p>
        </div>
      </div>

    </footer>
  );
}
