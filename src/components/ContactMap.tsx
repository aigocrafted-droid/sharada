import { MapPin, Phone, Clock, Mail, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../types';

export default function ContactMap() {
  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      
      {/* Structural backgrounds */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-amber-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[11px] font-bold text-red-600 tracking-widest uppercase block">GET IN TOUCH</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-slate-900 leading-tight">
            Contact & Location Details
          </h2>
          <p className="text-slate-600 font-sans max-w-xl mx-auto text-sm md:text-base">
            Visit us in Chitradurga or reach out to clear any queries on batches, curriculum, or demos.
          </p>
          <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full" />
        </div>

        {/* Info & Map Split Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column Details */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between text-left">
            <div className="space-y-6">
              
              {/* Address Block */}
              <div className="bg-slate-50 border border-slate-100 hover:border-amber-400 p-5 rounded-2xl flex items-start gap-4 transition-all group">
                <div className="p-3 bg-[#0a2342] text-amber-400 rounded-xl group-hover:bg-amber-400 group-hover:text-[#0a2342] transition-colors shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-slate-900 text-sm uppercase tracking-wider">Our Location Address</h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans font-medium">
                    Near Kindergarten School,<br />
                    Near District Court,<br />
                    Turuvanur Rd, VTG,<br />
                    Chitradurga, Karnataka – 577501
                  </p>
                </div>
              </div>

              {/* Telephone block */}
              <div className="bg-slate-50 border border-slate-100 hover:border-amber-400 p-5 rounded-2xl flex items-start gap-4 transition-all group">
                <div className="p-3 bg-[#0a2342] text-amber-400 rounded-xl group-hover:bg-amber-400 group-hover:text-[#0a2342] transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-slate-900 text-sm uppercase tracking-wider">Phone Contacts</h4>
                  <div className="space-y-1 text-slate-600 font-sans font-medium text-xs md:text-sm">
                    <p className="flex items-center gap-1.5">
                      <a href={`tel:${CONTACT_INFO.phone1.replace(/\s+/g, '')}`} className="hover:text-amber-500 font-bold transition-colors">
                        {CONTACT_INFO.phone1}
                      </a>
                      <span className="text-[10px] bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded-full uppercase font-bold font-mono">Primary</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <a href={`tel:${CONTACT_INFO.phone2.replace(/\s+/g, '')}`} className="hover:text-amber-500 font-bold transition-colors">
                        {CONTACT_INFO.phone2}
                      </a>
                      <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-full uppercase font-bold font-mono">Secondary</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Timing block */}
              <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex items-start gap-4">
                <div className="p-3 bg-[#0a2342] text-amber-400 rounded-xl shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-display font-bold text-slate-900 text-sm uppercase tracking-wider">Working Sessions</h4>
                  <div className="text-xs md:text-sm text-slate-600 leading-normal font-sans font-medium space-y-1">
                    <p className="font-bold text-[#0a2342]">{CONTACT_INFO.workingHours.days}</p>
                    <p>Morning Batch: <span className="font-semibold text-slate-800">{CONTACT_INFO.workingHours.morning}</span></p>
                    <p>Evening Batch: <span className="font-semibold text-slate-800">{CONTACT_INFO.workingHours.evening}</span></p>
                    <p className="text-red-600 font-bold text-[11px] uppercase tracking-wider">Sunday: {CONTACT_INFO.workingHours.sunday}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Action Button Box */}
            <div className="bg-amber-400/10 border border-amber-400/30 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
              <div className="text-left space-y-1">
                <h5 className="font-display font-bold text-slate-800 text-sm">Need Directions Assistance?</h5>
                <p className="text-[11px] text-slate-500 font-sans">Reach our support team online for direct help.</p>
              </div>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl flex items-center gap-1.5 text-xs shadow-md shadow-emerald-500/10 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white text-emerald-600" />
                Ask on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column Map Embed */}
          <div className="lg:col-span-7 h-[420px] lg:h-auto min-h-[380px] relative">
            <div className="absolute inset-0 bg-slate-100 rounded-3xl overflow-hidden border-2 border-amber-400 shadow-2xl relative">
              {/* Actual embedded map for Chitradurga Court area */}
              <iframe
                title="Shree Sharada Kalika Academy Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15478.431057476566!2d76.3900!3d14.2255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb7e296da34fa39%3A0xe67db588722421e4!2sDistrict%20Court%2C%20Chitradurga!5e0!3m2!1sen!2sin!4v1716912345678!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="brightness-95 contrast-95"
              />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-4 left-4 bg-[#0a2342] text-white py-2 px-3.5 rounded-xl border border-amber-400/40 text-xs font-display font-semibold flex items-center gap-1.5 shadow-lg max-w-[280px]">
                <MapPin className="w-4 h-4 text-amber-400 animate-bounce shrink-0" />
                <span className="truncate">Near District Court, Turuvanur Rd</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
