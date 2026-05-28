import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, MessageSquare, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ASSETS, CONTACT_INFO } from '../types';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Classes & Subjects', href: '#classes' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Smart Quiz', href: '#quiz-game' },
    { name: 'Our Method', href: '#method' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 85; // Navbar height offset
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

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a2342]/95 backdrop-blur-md shadow-lg border-b border-amber-400/20 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400 bg-white flex items-center justify-center p-1 shadow-md shadow-amber-400/20 group-hover:scale-105 transition-transform">
                <img
                  src={ASSETS.logo}
                  alt="Shree Sharada Kalika Academy Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-display text-sm md:text-base font-bold tracking-tight leading-4 group-hover:text-amber-400 transition-colors">
                  SHREE SHARADA KALIKA
                </span>
                <span className="text-amber-400 font-display text-xs font-semibold tracking-wider uppercase">
                  ACADEMY
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="text-slate-200 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-colors font-sans"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#admission"
              onClick={(e) => handleScrollTo(e, '#admission')}
              className="bg-red-600 hover:bg-red-700 text-white font-sans text-sm font-bold px-5 py-2.5 rounded-full shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-0.5 border border-red-500/30 whitespace-nowrap"
            >
              Enroll Now
            </a>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 hover:bg-amber-500 text-[#0a2342] font-semibold text-sm px-4 py-2.5 rounded-full shadow-md shadow-amber-400/10 flex items-center gap-1.5 transition-all duration-300 whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 fill-[#0a2342]" />
              Inquiry
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-2">
            <a
              href="#admission"
              onClick={(e) => handleScrollTo(e, '#admission')}
              className="bg-red-600 px-3.5 py-2 rounded-full text-white text-xs font-bold font-sans shadow shadow-red-600/30"
            >
              Enroll
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-amber-400 p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#0a2342]/98 shadow-2xl border-b border-amber-400/20 backdrop-blur-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="block text-slate-100 hover:text-amber-400 hover:bg-slate-800/40 px-4 py-3 rounded-lg text-base font-semibold font-sans tracking-wide transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href="#admission"
                  onClick={(e) => handleScrollTo(e, '#admission')}
                  className="w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl transition-colors"
                >
                  Enroll Now
                </a>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-amber-400 text-[#0a2342] font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5 fill-[#0a2342]" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
