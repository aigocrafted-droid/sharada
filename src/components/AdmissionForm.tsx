import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, CheckCircle, Smartphone, MessageSquare, ClipboardList, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../types';

interface InquiryLog {
  id: string;
  studentName: string;
  parentName: string;
  className: string;
  phone: string;
  message: string;
  timestamp: string;
}

export default function AdmissionForm() {
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [className, setClassName] = useState('10th Standard');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [localInquiries, setLocalInquiries] = useState<InquiryLog[]>([]);

  useEffect(() => {
    // Load previously logged local storage enquiries if any
    try {
      const logs = localStorage.getItem('sska_admission_inquiries');
      if (logs) {
        setLocalInquiries(JSON.parse(logs));
      }
    } catch (e) {
      console.error("Local storage lookup failed safely.", e);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !parentName || !phone) {
      alert("Please enter the student's name, parent's name, and contact phone number.");
      return;
    }

    const newInquiry: InquiryLog = {
      id: Math.random().toString(36).substr(2, 9),
      studentName,
      parentName,
      className,
      phone,
      message,
      timestamp: new Date().toLocaleString()
    };

    const updated = [newInquiry, ...localInquiries];
    setLocalInquiries(updated);
    try {
      localStorage.setItem('sska_admission_inquiries', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }

    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    // Construct pre-filled WhatsApp message
    const waText = `Hello Shree Sharada Kalika Academy! I am interested in admission for 2026–27.
*Student:* ${studentName}
*Parent:* ${parentName}
*Class:* ${className}
*Phone:* ${phone}
*Message:* ${message || 'No additional message'}`;

    const encoded = encodeURIComponent(waText);
    const url = `https://wa.me/917899411128?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleResetForm = () => {
    setStudentName('');
    setParentName('');
    setClassName('10th Standard');
    setPhone('');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <section id="admission" className="py-20 bg-gradient-to-br from-[#0a2342] via-[#081a30] to-[#040e1b] text-white relative overflow-hidden">
      
      {/* Decorative vectors */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text Details */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-[11px] font-bold text-amber-400 tracking-widest uppercase block flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                ADMISSIONS OPEN FOR 2026–27
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-[1.15]">
                Give Your Child <br />
                the Right Guidance for <br />
                a <span className="text-amber-400">Brighter Future</span>
              </h2>
              <div className="w-16 h-1 bg-amber-400 rounded-full" />
            </div>

            <p className="text-slate-300 font-sans leading-relaxed text-sm md:text-base">
              Establish high academic standards, strong foundation building, confidence, discipline, and practical knowledge. Secure structural feedback from experienced teachers right here in Chitradurga.
            </p>

            {/* Quick shortcuts / Batches information */}
            <div className="space-y-4 border-t border-slate-800 pt-6">
              <h4 className="font-display font-bold text-slate-200 uppercase tracking-widest text-xs">Academy Shortcuts</h4>
              <div className="space-y-3.5 text-xs text-slate-400">
                <div className="flex items-start gap-3">
                  <Clock className="w-4.5 h-4.5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-200 font-semibold font-sans">Morning Batch Schedule</span>
                    <span className="text-[11px]">7:00 AM – 9:00 AM (Monday to Saturday)</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-4.5 h-4.5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-200 font-semibold font-sans">Evening Batch Schedule</span>
                    <span className="text-[11px]">4:30 PM – 8:30 PM (Monday to Saturday)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct call banner */}
            <div className="bg-slate-950/40 border border-white/10 p-5 rounded-2xl flex items-center gap-4">
              <div className="p-3 rounded-xl bg-red-600/20 text-red-400 border border-red-500/20">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] text-slate-400 font-mono uppercase">Call us directly</span>
                <span className="text-base font-bold text-white font-display">{CONTACT_INFO.phone1}</span>
              </div>
            </div>
          </div>

          {/* Right Column Admission Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 p-6 md:p-8 rounded-3xl border border-slate-100 shadow-2xl relative overflow-hidden">
              
              {/* Form aesthetic header */}
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-amber-400 via-red-600 to-indigo-600" />
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 text-left"
                  >
                    <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-4">
                      <ClipboardList className="w-5 h-5 text-indigo-600" />
                      <div>
                        <h3 className="font-display font-bold text-lg text-slate-900 leading-none">Admission Inquiry Form</h3>
                        <p className="text-[11px] text-slate-500 font-sans mt-1">Submit your details to book a free demo or secure enrollment.</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Student Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="student-name" className="block text-xs font-bold text-slate-700 font-sans uppercase">Student Name *</label>
                        <input
                          id="student-name"
                          type="text"
                          required
                          value={studentName}
                          onChange={(e) => setStudentName(e.target.value)}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a2342]/40 bg-slate-50 focus:bg-white text-sm"
                        />
                      </div>

                      {/* Parent Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="parent-name" className="block text-xs font-bold text-slate-700 font-sans uppercase">Parent Name *</label>
                        <input
                          id="parent-name"
                          type="text"
                          required
                          value={parentName}
                          onChange={(e) => setParentName(e.target.value)}
                          placeholder="e.g. Suresh Kumar"
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a2342]/40 bg-slate-50 focus:bg-white text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Class Selection */}
                      <div className="space-y-1.5">
                        <label htmlFor="class-select" className="block text-xs font-bold text-slate-700 font-sans uppercase">Target Class *</label>
                        <select
                          id="class-select"
                          value={className}
                          onChange={(e) => setClassName(e.target.value)}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a2342]/40 bg-slate-50 text-sm"
                        >
                          <option value="6th Standard">6th Standard</option>
                          <option value="7th Standard">7th Standard</option>
                          <option value="8th Standard">8th Standard</option>
                          <option value="9th Standard">9th Standard</option>
                          <option value="10th Standard">10th Standard (SSLC/CBSE)</option>
                        </select>
                      </div>

                      {/* Phone Number */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone-number" className="block text-xs font-bold text-slate-700 font-sans uppercase">Phone Number *</label>
                        <input
                          id="phone-number"
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="10-digit mobile number"
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a2342]/40 bg-slate-50 focus:bg-white text-sm"
                        />
                      </div>
                    </div>

                    {/* Message Box */}
                    <div className="space-y-1.5">
                      <label htmlFor="admission-message" className="block text-xs font-bold text-slate-700 font-sans uppercase">Additional Message (Optional)</label>
                      <textarea
                        id="admission-message"
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="e.g. Schedule preferences or subject-specific queries."
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a2342]/40 bg-slate-50 focus:bg-white text-sm"
                      />
                    </div>

                    {/* Action buttons inside form */}
                    <button
                      type="submit"
                      className="w-full bg-[#0a2342] hover:bg-[#07192f] text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-[#0a2342]/20 flex items-center justify-center gap-2 transform active:scale-[0.98] transition-all cursor-pointer text-sm"
                    >
                      <Send className="w-4 h-4" />
                      Submit Inquiry
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-10 space-y-6 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-150 bg-emerald-50 text-emerald-500 border border-emerald-200 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 fill-emerald-500 text-white" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-display font-extrabold text-2xl text-slate-900">Inquiry Logged Successfully!</h4>
                      <p className="text-xs text-slate-500 font-sans max-w-md">
                        Thank you for reaching out to Shree Sharada Kalika Academy. Your information has been logged securely in our client database records.
                      </p>
                    </div>

                    {/* Log details card */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 w-full text-left space-y-2 text-xs md:text-sm font-sans">
                      <div><strong className="text-[#0a2342]">Student:</strong> {studentName}</div>
                      <div><strong className="text-[#0a2342]">Class:</strong> {className}</div>
                      <div><strong className="text-[#0a2342]">Parent:</strong> {parentName}</div>
                      <div><strong className="text-[#0a2342]">Phone:</strong> {phone}</div>
                      {message && <div><strong className="text-[#0a2342]">Message:</strong> {message}</div>}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full">
                      <button
                        onClick={handleSendWhatsApp}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10 cursor-pointer"
                      >
                        <MessageSquare className="w-4.5 h-4.5 fill-white text-emerald-600" />
                        Send on WhatsApp
                      </button>

                      <button
                        onClick={handleResetForm}
                        className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 px-4 rounded-xl border border-slate-300 transition-colors cursor-pointer"
                      >
                        New Inquiry
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
