/**
 * Shree Sharada Kalika Academy Data Structures and Static Content
 */

export interface HighlightItem {
  id: string;
  title: string;
}

export interface ChooseUsItem {
  id: number;
  title: string;
  description: string;
}

export interface OfferItem {
  id: string;
  title: string;
  description: string;
}

export interface MethodItem {
  id: number;
  title: string;
}

export interface ClassOffered {
  id: string;
  standard: string;
  description: string;
}

export interface SubjectOffered {
  id: string;
  name: string;
  description: string;
  color: string;
}

export interface FacilityItem {
  id: number;
  title: string;
  description: string;
}

export interface AchievementItem {
  id: string;
  title: string;
}

export interface TestimonialItem {
  id: number;
  author: string;
  role: 'Parent' | 'Student';
  text: string;
  rating: number;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// Import asset references
import logoImg from './assets/images/goddess_sharada_logo_1779991142532.png';
import classroomImg from './assets/images/indian_classroom_learning_1779991163002.png';
import computerLabImg from './assets/images/computer_lab_students_1779991189537.png';

export const ASSETS = {
  logo: logoImg,
  classroom: classroomImg,
  computerLab: computerLabImg,
  aboutPlaceholder: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80", // secondary about us
  mathematics: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
  successImg: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80", // happy graduates
  parentTrust: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" // parental advice/consultation
};

// Website contact links and numbers
export const CONTACT_INFO = {
  phone1: "+91 78994 11128",
  phone2: "+91 91646 56819",
  whatsappUrl: "https://wa.me/917899411128?text=Hello%20Shree%20Sharada%20Kalika%20Academy!%20I%20am%20interested%20in%20enquiring%20about%20admissions%20for%20the%20new%20batch%20of%206th-10th%20Standard.",
  whatsappUrlGeneral: "https://wa.me/917899411128?text=Hello%20Shree%20Sharada%20Kalika%20Academy!%20I%20am%20interested%20in%20enquiring%20about%20admissions%20for%20the%20new%20batch%20of%206th-10th%20Standard.",
  whatsappUrlDemo: "https://wa.me/917899411128?text=Hello%20Shree%20Sharada%20Kalika%20Academy!%20I%20would%20like%20to%20book%20a%20free%20demo%20class.",
  whatsappUrlQuery: "https://wa.me/917899411128?text=Hello%20Shree%20Sharada%20Kalika%20Academy!%20I%20have%20an%20enquiry%20regarding%20weekly%20tests%20and%20your%20coaching%2520schedule.",
  whatsappUrlHelp: "https://wa.me/917899411128?text=Hello%20Shree%20Sharada%20Kalika%20Academy!%20I%20need%20help%20joining%2Fenrolling%20my%20child.",
  address: "Near Kindergarten School, Near District Court, Turuvanur Rd, VTG, Chitradurga, Karnataka – 577501",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.6056554876613!2d76.3985!3d14.2251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDEzJzMwLjQiTiA3Nis0Nyc1NC42IkU!5e0!3m2!1sen!2sin!4v1716912345678!5m2!1sen!2sin", // dynamic map coordinate fallback
  workingHours: {
    days: "Monday – Saturday",
    morning: "7:00 AM – 9:00 AM",
    evening: "4:30 PM – 8:30 PM",
    sunday: "Closed"
  }
};

export const HERO_HIGHLIGHTS: HighlightItem[] = [
  { id: '1', title: 'Expert Teaching Staff' },
  { id: '2', title: 'Practical Learning Approach' },
  { id: '3', title: 'Weekly Tests & Reports' },
  { id: '4', title: 'Homework Guidance' },
  { id: '5', title: 'Individual Attention' },
  { id: '6', title: 'Strong Foundation Building' }
];

export const WHY_CHOOSE_US_ITEMS: ChooseUsItem[] = [
  {
    id: 1,
    title: "Individual Attention for Every Student",
    description: "We monitor every student personally and ensure no child is left behind."
  },
  {
    id: 2,
    title: "Homework Follow-Up Support",
    description: "We help students complete and understand school homework regularly."
  },
  {
    id: 3,
    title: "Practical Learning Methods",
    description: "We teach concepts using examples, activities, and practical understanding instead of only theory."
  },
  {
    id: 4,
    title: "Weekly Tests & Progress Reports",
    description: "Regular tests help students improve performance and build confidence."
  },
  {
    id: 5,
    title: "Strong Foundation Building",
    description: "We focus on strengthening basics to help students succeed in higher studies."
  },
  {
    id: 6,
    title: "Friendly & Motivating Environment",
    description: "Students learn comfortably in a supportive atmosphere."
  },
  {
    id: 7,
    title: "Experienced Teaching Team",
    description: "Dedicated faculty with passion for teaching and mentoring students."
  },
  {
    id: 8,
    title: "Concept-Based Learning",
    description: "Students learn “why” and “how” instead of simply memorizing answers."
  },
  {
    id: 9,
    title: "Practical Computer Knowledge",
    description: "Students gain real computer understanding with hands-on guidance."
  },
  {
    id: 10,
    title: "Discipline & Academic Growth",
    description: "We encourage time management, responsibility, and continuous improvement."
  }
];

export const WHAT_WE_OFFER_ITEMS: OfferItem[] = [
  {
    id: "offer1",
    title: "Complete Academic Support",
    description: "We help students improve both school performance and subject understanding."
  },
  {
    id: "offer2",
    title: "School Homework Guidance",
    description: "Students receive support in completing homework properly and understanding concepts clearly."
  },
  {
    id: "offer3",
    title: "Daily Practice Sessions",
    description: "Practice-based learning improves memory retention and confidence."
  },
  {
    id: "offer4",
    title: "Doubt Clearing Sessions",
    description: "Students can ask questions freely and clear doubts immediately."
  },
  {
    id: "offer5",
    title: "Concept Revision Classes",
    description: "Regular revision helps students remember topics effectively."
  },
  {
    id: "offer6",
    title: "Exam Preparation",
    description: "Special preparation sessions for unit tests, quarterly, half-yearly, and final exams."
  },
  {
    id: "offer7",
    title: "Motivation & Confidence Building",
    description: "We encourage students to believe in themselves and improve consistently."
  },
  {
    id: "offer8",
    title: "Practical Learning Activities",
    description: "We use examples, activities, demonstrations, and interactive learning methods."
  }
];

export const TEACHING_METHOD_STYLE: MethodItem[] = [
  { id: 1, title: "Concept explanation using real-life examples" },
  { id: 2, title: "Practice-based learning" },
  { id: 3, title: "Visual understanding techniques" },
  { id: 4, title: "Interactive classroom sessions" },
  { id: 5, title: "School homework assistance" },
  { id: 6, title: "Repeated revision methods" },
  { id: 7, title: "Individual performance monitoring" },
  { id: 8, title: "Easy-to-understand explanations" },
  { id: 9, title: "Activity-based learning" },
  { id: 10, title: "Student confidence building" }
];

export const CLASSES_OFFERED: ClassOffered[] = [
  {
    id: "std6",
    standard: "6th Standard",
    description: "Strong foundation building in all core subjects."
  },
  {
    id: "std7",
    standard: "7th Standard",
    description: "Improved subject understanding with regular practice."
  },
  {
    id: "std8",
    standard: "8th Standard",
    description: "Advanced concept learning and academic strengthening."
  },
  {
    id: "std9",
    standard: "9th Standard",
    description: "Preparation for higher academic challenges with detailed guidance."
  },
  {
    id: "std10",
    standard: "10th Standard",
    description: "Focused board exam preparation for State Board and CBSE students."
  }
];

export const SUBJECTS_OFFERED: SubjectOffered[] = [
  {
    id: "sub_kannada",
    name: "Kannada",
    description: "Grammar, reading, writing skills, comprehension, and exam preparation.",
    color: "from-red-500 to-amber-500"
  },
  {
    id: "sub_english",
    name: "English",
    description: "Communication skills, grammar, vocabulary, reading, writing, and comprehension.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: "sub_maths",
    name: "Mathematics",
    description: "Concept-based mathematics with problem-solving techniques and daily practice.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: "sub_cs",
    name: "Computer Science",
    description: "Practical computer learning, basic programming understanding, computer fundamentals, and digital skills.",
    color: "from-violet-500 to-fuchsia-400"
  }
];

export const FACILITIES_LIST: FacilityItem[] = [
  {
    id: 1,
    title: "Innovative Teaching Methods",
    description: "Modern learning techniques that make concepts easy to understand."
  },
  {
    id: 2,
    title: "Individual Student Attention",
    description: "Every student receives personalized academic guidance."
  },
  {
    id: 3,
    title: "Weekly Tests & Reports",
    description: "Regular assessment and parent progress updates."
  },
  {
    id: 4,
    title: "Homework Support",
    description: "Guidance for completing school assignments properly."
  },
  {
    id: 5,
    title: "Doubt Solving Sessions",
    description: "Dedicated time for clearing student doubts."
  },
  {
    id: 6,
    title: "Friendly Learning Environment",
    description: "Comfortable and positive atmosphere for learning."
  },
  {
    id: 7,
    title: "Concept Revision Programs",
    description: "Regular revision to strengthen memory and understanding."
  },
  {
    id: 8,
    title: "Practical Learning Sessions",
    description: "Learning through activities and examples instead of only textbook theory."
  },
  {
    id: 9,
    title: "Parent Communication",
    description: "Regular updates about student improvement and attendance."
  },
  {
    id: 10,
    title: "Motivation & Mentorship",
    description: "Helping students stay confident and focused."
  }
];

export const ACHIEVEMENTS_LIST: AchievementItem[] = [
  { id: 'ach1', title: 'Improve academic performance' },
  { id: 'ach2', title: 'Build strong subject knowledge' },
  { id: 'ach3', title: 'Increase confidence' },
  { id: 'ach4', title: 'Develop discipline and consistency' },
  { id: 'ach5', title: 'Improve problem-solving ability' },
  { id: 'ach6', title: 'Prepare for future academic success' }
];

export const STUDENT_JOURNEY_STEPS = [
  {
    step: 1,
    title: "Understanding Basics",
    description: "We identify the student’s strengths and weak areas with initial onboarding."
  },
  {
    step: 2,
    title: "Concept Learning",
    description: "Subjects are taught in simple and understandable custom interactive methods."
  },
  {
    step: 3,
    title: "Practice & Homework",
    description: "Students practice regularly and complete school homework with guidance."
  },
  {
    step: 4,
    title: "Weekly Evaluation",
    description: "Tests and custom reviews help measure improvement and identify fine gaps."
  },
  {
    step: 5,
    title: "Confidence & Success",
    description: "Students become highly confident, disciplined, and academically stronger."
  }
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: 1,
    author: "Parent Review 1",
    role: "Parent",
    text: "“The teachers provide excellent personal attention. My child has improved greatly in Mathematics and English.”",
    rating: 5
  },
  {
    id: 2,
    author: "Parent Review 2",
    role: "Parent",
    text: "“The academy helps students complete homework properly and understand concepts clearly.”",
    rating: 5
  },
  {
    id: 3,
    author: "Student Review 1",
    role: "Student",
    text: "“Classes are very easy to understand. Practical teaching methods help me remember lessons better.”",
    rating: 5
  },
  {
    id: 4,
    author: "Student Review 2",
    role: "Student",
    text: "“The teachers encourage us and clear all doubts patiently.”",
    rating: 5
  },
  {
    id: 5,
    author: "Parent Review 3",
    role: "Parent",
    text: "“Weekly tests and reports help us track our child’s improvement regularly.”",
    rating: 5
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 1,
    question: "Which classes do you teach?",
    answer: "We provide tuition for students from 6th to 10th standard."
  },
  {
    id: 2,
    question: "Which subjects are available?",
    answer: "We teach Kannada, English, Mathematics, and Computer Science."
  },
  {
    id: 3,
    question: "Do you help with school homework?",
    answer: "Yes. We provide complete homework guidance and follow-up support."
  },
  {
    id: 4,
    question: "Do you conduct weekly tests?",
    answer: "Yes. Weekly tests and progress monitoring are part of our learning process."
  },
  {
    id: 5,
    question: "Do you provide practical learning?",
    answer: "Yes. We focus on practical understanding along with theory-based learning."
  },
  {
    id: 6,
    question: "Do you provide personal attention?",
    answer: "Yes. Every student receives individual guidance and support."
  },
  {
    id: 7,
    question: "Is this suitable for weak students?",
    answer: "Absolutely. We help students improve gradually through strong basics and continuous practice."
  },
  {
    id: 8,
    question: "Do you provide exam preparation?",
    answer: "Yes. We conduct revision sessions, test preparation, and exam guidance."
  },
  {
    id: 9,
    question: "Where is the academy located?",
    answer: "Near Kindergarten School, Near District Court, Turuvanur Rd, VTG, Chitradurga, Karnataka – 577501."
  }
];
