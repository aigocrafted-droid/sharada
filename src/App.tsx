/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Offers from './components/Offers';
import ClassesAndSubjects from './components/ClassesAndSubjects';
import TeachingStyle from './components/TeachingStyle';
import Facilities from './components/Facilities';
import StudentJourney from './components/StudentJourney';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import AdmissionForm from './components/AdmissionForm';
import ContactMap from './components/ContactMap';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* Main Structural Flow */}
      <main className="flex-1">
        {/* 2. Hero Banner presentation */}
        <Hero />

        {/* 3. About Us details block */}
        <About />

        {/* 4. Why Parents / Kids Choose Us */}
        <WhyChooseUs />

        {/* 5. Complete Offerings breakdown */}
        <Offers />

        {/* 6. Classes Taught & Interactive Subject cards */}
        <ClassesAndSubjects />

        {/* 7. Facilities Listing */}
        <Facilities />

        {/* 8. Modern Unique Learning Approach & Support details */}
        <TeachingStyle />

        {/* 9. Visual Student Achievements & Learning roadmaps */}
        <StudentJourney />

        {/* 10. Sliding Reviews Container */}
        <Testimonials />

        {/* 11. FAQ Accordions */}
        <FAQ />

        {/* 12. Interactive Form & Local logging database */}
        <AdmissionForm />

        {/* 13. Location Maps and schedule badges */}
        <ContactMap />
      </main>

      {/* 14. Academic Tagline Footer and navigation indices */}
      <Footer />

      {/* 15. Floater WhatsApp support / Sticky action triggers */}
      <FloatingButtons />
    </div>
  );
}
