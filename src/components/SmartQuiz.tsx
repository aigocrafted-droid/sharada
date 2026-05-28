import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Clock, 
  Award, 
  RotateCcw, 
  CheckCircle, 
  XCircle, 
  BookOpen, 
  Trophy, 
  Flame, 
  ChevronRight, 
  HelpCircle,
  TrendingUp,
  UserCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Question {
  id: string;
  subject: string;
  gradeLevel: string; // "6th", "7th", "8th", "9th", "10th", "All"
  questionText: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

const QUESTION_POOL: Question[] = [
  // Mathematics
  {
    id: 'm1',
    subject: 'Mathematics',
    gradeLevel: '6th',
    questionText: 'What is the value of 15 × 6 - 20?',
    options: ['70', '60', '80', '90'],
    correctAnswer: '70',
    explanation: 'Using BODMAS rules, first multiply 15 by 6 to get 90, then subtract 20 to get 70.'
  },
  {
    id: 'm2',
    subject: 'Mathematics',
    gradeLevel: '7th',
    questionText: 'If 3x + 5 = 20, what is the value of x?',
    options: ['4', '5', '6', '3'],
    correctAnswer: '5',
    explanation: 'Subtract 5 from both sides: 3x = 15. Divide by 3: x = 5.'
  },
  {
    id: 'm3',
    subject: 'Mathematics',
    gradeLevel: '8th',
    questionText: 'What is the sum of all interior angles in a triangle?',
    options: ['90°', '180°', '270°', '360°'],
    correctAnswer: '180°',
    explanation: 'The Angle Sum Property states that the sum of all interior angles of a triangle is always equal to 180 degrees.'
  },
  {
    id: 'm4',
    subject: 'Mathematics',
    gradeLevel: '9th',
    questionText: 'What is the value of 2 to the power of 5 (2⁵)?',
    options: ['10', '16', '32', '64'],
    correctAnswer: '32',
    explanation: '2 × 2 × 2 × 2 × 2 = 32.'
  },
  {
    id: 'm5',
    subject: 'Mathematics',
    gradeLevel: '10th',
    questionText: 'What is the area of a circle with a radius of 7 cm? (Use π ≈ 22/7)',
    options: ['44 sq.cm', '154 sq.cm', '98 sq.cm', '196 sq.cm'],
    correctAnswer: '154 sq.cm',
    explanation: 'Area = πr² = (22/7) × 7 × 7 = 154 sq.cm.'
  },
  {
    id: 'm6',
    subject: 'Mathematics',
    gradeLevel: '6th',
    questionText: 'What is the smallest prime number?',
    options: ['0', '1', '2', '3'],
    correctAnswer: '2',
    explanation: '2 is the smallest prime number and the only even prime number.'
  },
  {
    id: 'm7',
    subject: 'Mathematics',
    gradeLevel: '8th',
    questionText: 'What is the perimeter of a square with a side of 8 cm?',
    options: ['16 cm', '32 cm', '64 cm', '24 cm'],
    correctAnswer: '32 cm',
    explanation: 'Perimeter of a square is 4 × side. 4 × 8 = 32 cm.'
  },

  // Kannada
  {
    id: 'k1',
    subject: 'Kannada',
    gradeLevel: 'All',
    questionText: 'Kannada is the official language of which Indian state?',
    options: ['Kerala', 'Andhra Pradesh', 'Tamil Nadu', 'Karnataka'],
    correctAnswer: 'Karnataka',
    explanation: 'Kannada is the primary and official language spoken in Karnataka.'
  },
  {
    id: 'k2',
    subject: 'Kannada',
    gradeLevel: 'All',
    questionText: 'How many Swaras (vowels) are there in the Kannada Varnamale?',
    options: ['10', '13', '15', '34'],
    correctAnswer: '13',
    explanation: 'The Kannada alphabet (Varnamale) consists of 13 Swaras (vowels), 2 Yogavahakas, and 34 Vyanjanas.'
  },
  {
    id: 'k3',
    subject: 'Kannada',
    gradeLevel: '9th',
    questionText: 'Who is the first Kannada writer to receive the Jnanpith Award?',
    options: ['D. R. Bendre', 'Kuvempu', 'Shivaram Karanth', 'Masti Venkatesha Iyengar'],
    correctAnswer: 'Kuvempu',
    explanation: 'Kuppali Venkatappa Puttappa (Kuvempu) was the first Kannada author to receive the prestigious Jnanpith Award in 1967 for Sri Ramayana Darshanam.'
  },
  {
    id: 'k4',
    subject: 'Kannada',
    gradeLevel: 'All',
    questionText: 'Which historic fort in Karnataka is famous for \"Obavvana Kindi\" and the brave story of Onake Obavva?',
    options: ['Chitradurga Fort', 'Mysore Palace', 'Bidar Fort', 'Hampi'],
    correctAnswer: 'Chitradurga Fort',
    explanation: 'Chitradurga Fort is legendary for Onake Obavva, who single-handedly fought off Hyder Ali\'s soldiers with a wooden pestle (Onake) at a tiny spy hole.'
  },
  {
    id: 'k5',
    subject: 'Kannada',
    gradeLevel: '6th',
    questionText: 'How many letters are there in the complete Kannada Varnamale?',
    options: ['46', '49', '51', '52'],
    correctAnswer: '49',
    explanation: 'There are exactly 49 letters in the standard Kannada alphabet.'
  },

  // English
  {
    id: 'e1',
    subject: 'English',
    gradeLevel: '6th',
    questionText: 'Which of the following is a synonym for the word \"Brilliant\"?',
    options: ['Dull', 'Smart / Bright', 'Slow', 'Heavy'],
    correctAnswer: 'Smart / Bright',
    explanation: '\"Brilliant\" refers to someone or something highly intelligent, bright, or successful.'
  },
  {
    id: 'e2',
    subject: 'English',
    gradeLevel: '7th',
    questionText: 'Identify the noun in the sentence: \"The sweet child studies hard for exams.\"',
    options: ['sweet', 'studies', 'child', 'hard'],
    correctAnswer: 'child',
    explanation: '\"child\" is the noun referring to a person. \"studies\" is a verb, \"sweet\" is an adjective.'
  },
  {
    id: 'e3',
    subject: 'English',
    gradeLevel: '8th',
    questionText: 'What is the past participle form of the verb \"Go\"?',
    options: ['Went', 'Goes', 'Going', 'Gone'],
    correctAnswer: 'Gone',
    explanation: 'The conjugate forms are Go (Base), Went (Simple Past), and Gone (Past Participle).'
  },
  {
    id: 'e4',
    subject: 'English',
    gradeLevel: '9th',
    questionText: 'Fill in the blank: \"Neither the teacher nor the students ______ present at the hall yesterday.\"',
    options: ['was', 'were', 'is', 'are'],
    correctAnswer: 'were',
    explanation: 'With \"neither... nor\", the verb agrees with the closer subject. \"students\" is plural, so we use \"were\" for the past tense.'
  },
  {
    id: 'e5',
    subject: 'English',
    gradeLevel: '10th',
    questionText: 'What is the correct antonym of \"Expand\"?',
    options: ['Grow', 'Stretch', 'Shrink', 'Hasten'],
    correctAnswer: 'Shrink',
    explanation: 'To \"Expand\" means to make larger. Its exact opposite is \"Shrink\", which means to make or become smaller.'
  },

  // Computer Science
  {
    id: 'c1',
    subject: 'Computer Science',
    gradeLevel: '6th',
    questionText: 'What does CPU stand for?',
    options: ['Computer Processing Unit', 'Central Processing Unit', 'Central Program Utility', 'Common Power Unit'],
    correctAnswer: 'Central Processing Unit',
    explanation: 'CPU is the Central Processing Unit, responsible for executing instructions and acting as the brain of the computer.'
  },
  {
    id: 'c2',
    subject: 'Computer Science',
    gradeLevel: '7th',
    questionText: 'Which of the following acts as the brain of the computer?',
    options: ['Keyboard', 'CPU', 'Hard Disk', 'RAM'],
    correctAnswer: 'CPU',
    explanation: 'The CPU (Central Processing Unit) processes commands and performs calculations, serving as the main brain.'
  },
  {
    id: 'c3',
    subject: 'Computer Science',
    gradeLevel: '8th',
    questionText: 'What is the main purpose of RAM in a computer system?',
    options: ['Permanent storage of files', 'Cooling down the graphics card', 'Temporary fast data storage for running apps', 'Printing physical worksheets'],
    correctAnswer: 'Temporary fast data storage for running apps',
    explanation: 'RAM (Random Access Memory) is a volatile memory that stores temporary progress while applications are actively running.'
  },
  {
    id: 'c4',
    subject: 'Computer Science',
    gradeLevel: '9th',
    questionText: '1 Kilobyte (KB) is equal to how many bytes?',
    options: ['1000 bytes', '1024 bytes', '512 bytes', '2048 bytes'],
    correctAnswer: '1024 bytes',
    explanation: 'In the binary memory system, 1 Kilobyte is precisely equal to 1024 bytes (2¹⁰).'
  },
  {
    id: 'c5',
    subject: 'Computer Science',
    gradeLevel: '10th',
    questionText: 'What does WWW stand for in a website address?',
    options: ['World Wide Web', 'Windows Wide Network', 'Worldwide Wireless Web', 'Work Word Website'],
    correctAnswer: 'World Wide Web',
    explanation: 'WWW stands for World Wide Web, which is an information network created by Sir Tim Berners-Lee.'
  }
];

const INITIAL_MOCK_LEADERBOARD = [
  { name: 'Vijay Gowda', grade: '9th Std', score: '5/5', percentage: 100, date: 'Today' },
  { name: 'Sneha Belagavi', grade: '10th Std', score: '5/5', percentage: 100, date: 'Today' },
  { name: 'Preethika C.', grade: '8th Std', score: '4/5', percentage: 80, date: 'Yesterday' },
  { name: 'Abhishek Naik', grade: '10th Std', score: '4/5', percentage: 80, date: '2 days ago' },
  { name: 'Kushal Gowda', grade: '7th Std', score: '4/5', percentage: 80, date: '3 days ago' }
];

export default function SmartQuiz() {
  // Config state
  const [selectedGrade, setSelectedGrade] = useState<'All' | '6th' | '7th' | '8th' | '9th' | '10th'>('All');
  const [selectedSubject, setSelectedSubject] = useState<string>('Mixed Subjects');
  const [useDailyChallengeMode, setUseDailyChallengeMode] = useState<boolean>(false);
  
  // Game Play state
  const [isQuizActive, setIsQuizActive] = useState<boolean>(false);
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [wrongCount, setWrongCount] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(15);
  const [hasTimeRunOut, setHasTimeRunOut] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  
  // Timer interval ref
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Custom Leaderboard list
  const [leaderboard, setLeaderboard] = useState(INITIAL_MOCK_LEADERBOARD);
  const [studentName, setStudentName] = useState('');
  const [isSubmittedToLeaderboard, setIsSubmittedToLeaderboard] = useState(false);

  // Initialize and select questions based on configuration
  const startNewQuiz = (isDailySpeedrun: boolean = false) => {
    setUseDailyChallengeMode(isDailySpeedrun);
    
    // Filter questions based on criteria
    let pool = [...QUESTION_POOL];
    
    // 1. Filter by subject if not mixed
    const activeSub = isDailySpeedrun ? 'Mixed Subjects' : selectedSubject;
    if (activeSub !== 'Mixed Subjects') {
      pool = pool.filter(q => q.subject === activeSub);
    }
    
    // 2. Filter by grade if not All
    const activeGrade = isDailySpeedrun ? 'All' : selectedGrade;
    if (activeGrade !== 'All') {
      pool = pool.filter(q => q.gradeLevel === activeGrade || q.gradeLevel === 'All');
    }

    // fallback check if selected too narrow
    if (pool.length < 5) {
      pool = [...QUESTION_POOL];
      if (activeSub !== 'Mixed Subjects') {
        pool = pool.filter(q => q.subject === activeSub);
      }
    }

    // Shuffler: Randomize pool and pick 5 questions
    const shuffled = pool.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);
    
    setCurrentQuestions(selected);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setCorrectCount(0);
    setWrongCount(0);
    setTimeLeft(isDailySpeedrun ? 10 : 15); // Daily challenge is 10 sec speedrun!
    setHasTimeRunOut(false);
    setIsQuizActive(true);
    setIsCompleted(false);
    setIsSubmittedToLeaderboard(false);
  };

  // Timer tick effect
  useEffect(() => {
    if (isQuizActive && !isCompleted && selectedAnswer === null && !hasTimeRunOut) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setHasTimeRunOut(true);
            setWrongCount(w => w + 1);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isQuizActive, isCompleted, currentQuestionIndex, selectedAnswer, hasTimeRunOut]);

  // Handle choice submission
  const handleAnswerSelect = (option: string) => {
    if (selectedAnswer !== null || hasTimeRunOut) return; // Prevent double select or select on timeout
    
    if (timerRef.current) clearInterval(timerRef.current);
    setSelectedAnswer(option);
    
    const currentQ = currentQuestions[currentQuestionIndex];
    if (option === currentQ.correctAnswer) {
      setCorrectCount(c => c + 1);
    } else {
      setWrongCount(w => w + 1);
    }
  };

  // Move to next question or complete
  const handleNextQuestion = () => {
    const nextIdx = currentQuestionIndex + 1;
    if (nextIdx >= currentQuestions.length) {
      // Quiz complete!
      setIsCompleted(true);
      
      // Calculate highscore triggers
      const scorePercentage = (correctCount / currentQuestions.length) * 100;
      if (scorePercentage >= 80) {
        // Trigger amazing confetti physics!
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
    } else {
      // Advance to next
      setCurrentQuestionIndex(nextIdx);
      setSelectedAnswer(null);
      setHasTimeRunOut(false);
      setTimeLeft(useDailyChallengeMode ? 10 : 15);
    }
  };

  // Allow student to log score onto local leaderboard
  const handleSubmitLeaderboard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) return;
    
    const finalPct = Math.round((correctCount / currentQuestions.length) * 100);
    const newEntry = {
      name: studentName,
      grade: `${selectedGrade === 'All' ? 'Mixed' : selectedGrade} Std`,
      score: `${correctCount}/${currentQuestions.length}`,
      percentage: finalPct,
      date: 'Just Now'
    };
    
    setLeaderboard(prev => [newEntry, ...prev].sort((a,b) => b.percentage - a.percentage));
    setIsSubmittedToLeaderboard(true);
    setStudentName('');
  };

  // Subject list config helpers
  const subjects = ['Mixed Subjects', 'Kannada', 'English', 'Mathematics', 'Computer Science'];
  const grades = ['All', '6th', '7th', '8th', '9th', '10th'];
  
  // Motivational details based on results percentage
  const currentQ = currentQuestions[currentQuestionIndex];
  const totalQ = currentQuestions.length;
  const scorePercent = Math.round((correctCount / (totalQ || 1)) * 100);

  const getMotivationalText = (pct: number) => {
    if (pct === 100) return { title: 'Perfect Score! 👑', text: 'Stellar work! You possess a flawless subject foundation.', color: 'text-amber-400' };
    if (pct >= 80) return { title: 'Outstanding Achievement! 🌟', text: 'Incredibly smart! Ready to top the exams easily.', color: 'text-emerald-400' };
    if (pct >= 60) return { title: 'Good Job! 👍', text: 'Great attempt. Revise concepts regularly to reach 100%.', color: 'text-indigo-300' };
    return { title: 'Nice Attempt! 💪', text: 'Learning is a path of progress. Join our academy sessions to strengthen your fundamentals!', color: 'text-red-400' };
  };

  return (
    <section id="quiz-game" className="py-20 bg-gradient-to-b from-[#040e1b] via-[#092241] to-[#030d1b] relative overflow-hidden">
      
      {/* Decorative ambient blobs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-550 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-1/3 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Cyberpunk grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[11px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-cyan-400 tracking-widest uppercase block animate-pulse">
            INTERACTIVE PLAYGROUND
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-none">
            Smart Academia <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-amber-300">Quiz Challenge</span>
          </h2>
          <p className="text-slate-400 font-sans max-w-xl mx-auto text-xs md:text-sm">
            Put your school concepts to test! Select your grade and core subject to start your speedrun daily quiz.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-amber-400 to-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Outer Game Chassis */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          
          <AnimatePresence mode="wait">
            
            {/* 1. QUIZ SETTING STARTING SCREEN */}
            {!isQuizActive && !isCompleted && (
              <motion.div
                key="setup"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Setting configurations */}
                <div className="lg:col-span-7 space-y-6 text-left flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400/10 border border-amber-400/35 text-amber-300 font-display font-semibold rounded-full text-xs">
                        <Flame className="w-3.5 h-3.5 text-amber-400" />
                        Step 1: Choose Your Level & Subject
                      </div>
                      <h3 className="text-2xl font-bold font-display text-white">Configure Your Quiz</h3>
                      <p className="text-slate-400 text-xs font-sans">
                        Customize standard level. Our database fetches different randomized questions during every single speedrun attempt.
                      </p>
                    </div>

                    {/* Grade Selector */}
                    <div className="space-y-3">
                      <label className="block text-xs font-bold text-slate-300 font-mono uppercase tracking-wider">
                        Target Grade Level / Standard:
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                        {grades.map((grade) => (
                          <button
                            key={grade}
                            onClick={() => setSelectedGrade(grade as any)}
                            className={`py-2 px-3 text-xs font-sans rounded-xl border transition-all cursor-pointer font-bold ${
                              selectedGrade === grade
                                ? 'bg-cyan-500 text-white border-cyan-400 shadow-md shadow-cyan-400/20'
                                : 'bg-slate-900/60 text-slate-300 border-white/10 hover:border-slate-500'
                            }`}
                          >
                            {grade} {grade !== 'All' ? 'Std' : ''}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Subject Selector */}
                    <div className="space-y-3">
                      <label className="block text-xs font-bold text-slate-300 font-mono uppercase tracking-wider">
                        Core Subject Stream:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {subjects.map((sub) => (
                          <button
                            key={sub}
                            onClick={() => setSelectedSubject(sub)}
                            className={`py-3 px-4 text-xs font-sans rounded-xl border text-left transition-all cursor-pointer font-semibold ${
                              selectedSubject === sub
                                ? 'bg-amber-400 text-[#07162c] border-amber-300 shadow-md shadow-amber-400/20 font-bold'
                                : 'bg-slate-900/60 text-slate-300 border-white/10 hover:border-slate-500'
                            }`}
                          >
                            <span className="block truncate">{sub}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Area */}
                  <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => startNewQuiz(false)}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-cyan-500/10 flex items-center justify-center gap-2 transform active:scale-95 transition-all text-sm cursor-pointer border border-cyan-400/30 font-sans"
                    >
                      <BookOpen className="w-5 h-5" />
                      Start Smart Quiz
                    </button>
                    
                    <button
                      onClick={() => startNewQuiz(true)}
                      className="bg-gradient-to-r from-red-500 via-pink-500 to-amber-500 text-white font-bold py-4 px-6 rounded-2xl shadow-xl flex items-center justify-center gap-2 transform active:scale-95 transition-all text-sm cursor-pointer border border-white/10 font-sans animate-shimmer"
                    >
                      <Flame className="w-5 h-5 text-white animate-bounce" />
                      Daily Special Speedrun (10s)
                    </button>
                  </div>
                </div>

                {/* Right Leaderboard Panel */}
                <div className="lg:col-span-5 bg-slate-950/60 border border-white/5 rounded-2xl p-5 text-left flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                      <h4 className="font-display font-bold text-[#f1f5f9] text-base flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-amber-400" />
                        Chitradurga Hall of Fame
                      </h4>
                      <span className="text-[10px] bg-cyan-950 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded-full uppercase font-bold tracking-wider">
                        Weekly Live
                      </span>
                    </div>

                    <div className="space-y-2.5 max-h-[200px] overflow-y-auto pr-1">
                      {leaderboard.map((user, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold font-mono ${
                              idx === 0 ? 'bg-amber-400 text-slate-900 border border-amber-300' :
                              idx === 1 ? 'bg-slate-300 text-slate-900 border border-slate-200' :
                              idx === 2 ? 'bg-amber-700 text-white' : 'bg-slate-800 text-slate-400'
                            }`}>
                              {idx + 1}
                            </span>
                            <div>
                              <span className="block text-xs font-semibold text-slate-200 leading-tight">{user.name}</span>
                              <span className="text-[9px] text-slate-400 font-mono">{user.grade} • {user.date}</span>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <span className="block text-xs font-bold text-amber-300 font-mono">{user.score}</span>
                            <span className="text-[8px] uppercase tracking-wider text-slate-500 block font-bold leading-none">{user.percentage}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-amber-400/5 border border-amber-400/10 p-3.5 rounded-xl space-y-1.5 mt-3">
                    <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block">🎓 Expert TIP:</span>
                    <p className="text-[11px] text-slate-400 font-sans leading-normal">
                      Score a 5/5 to launch virtual confetti! Join Shree Sharada Kalika classes to improve logical accuracy and exam speed levels.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. LIVE ACTIVE GAME PLAY SCREEN */}
            {isQuizActive && !isCompleted && currentQ && (
              <motion.div
                key="play"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="space-y-6 text-left"
              >
                
                {/* Header of Active Play */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 px-3 py-1 rounded-xl uppercase tracking-wider font-mono">
                      {currentQ.subject}
                    </span>
                    <span className="text-xs font-bold text-slate-400 bg-slate-900 px-3 py-1 rounded-xl uppercase font-mono">
                      Q: {currentQuestionIndex + 1} / {totalQ}
                    </span>
                    {useDailyChallengeMode && (
                      <span className="text-xs font-bold text-red-400 bg-red-950/80 border border-red-500/20 px-3 py-1 rounded-xl uppercase tracking-widest font-mono flex items-center gap-1 animate-pulse">
                        <Flame className="w-3 h-3 text-red-500" />
                        Daily Rush
                      </span>
                    )}
                  </div>

                  {/* Timer widget */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 bg-slate-950/80 border border-white/10 px-4 py-1.5 rounded-full font-mono font-bold text-sm text-amber-300">
                      <Clock className="w-4 h-4 text-amber-400" />
                      <span>{timeLeft}s</span>
                    </div>

                    <div className="text-xs tracking-wider uppercase font-mono font-bold">
                      <span className="text-slate-400">Score:</span>{' '}
                      <span className="text-green-400">{correctCount}</span>{' '}
                      <span className="text-slate-400">/</span>{' '}
                      <span className="text-red-400">{wrongCount}</span>
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-amber-300 transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / totalQ) * 100}%` }}
                  />
                </div>

                {/* Question core content block */}
                <div className="space-y-4">
                  <h4 className="text-lg md:text-2xl font-bold font-display text-white leading-relaxed">
                    {currentQ.questionText}
                  </h4>

                  {/* Timer warning bar counts down internally */}
                  <div className="h-1 bg-slate-950/80 w-full rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all linear duration-1000 ${
                        timeLeft <= 3 ? 'bg-red-500' : 'bg-cyan-400'
                      }`}
                      style={{ width: `${(timeLeft / (useDailyChallengeMode ? 10 : 15)) * 100}%` }}
                    />
                  </div>
                </div>

                {/* 4 Choices Grid */}
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  {currentQ.options.map((option, index) => {
                    const isSelected = selectedAnswer === option;
                    const isCorrect = option === currentQ.correctAnswer;
                    const isWrong = isSelected && !isCorrect;
                    
                    // Style states after revealing
                    let btnStyle = 'bg-slate-900/60 text-slate-200 border-white/10 hover:border-slate-500';
                    let iconNode = null;

                    if (selectedAnswer !== null || hasTimeRunOut) {
                      // Correct choice always glowing green
                      if (isCorrect) {
                        btnStyle = 'bg-emerald-500/20 text-emerald-200 border-emerald-500 shadow-md shadow-emerald-500/20 font-bold';
                        iconNode = <CheckCircle className="w-5 h-5 text-emerald-400" />;
                      } 
                      // If user selected this wrong item, glow red
                      else if (isWrong) {
                        btnStyle = 'bg-red-500/20 text-red-200 border-red-500 shadow-md shadow-red-500/20 font-bold';
                        iconNode = <XCircle className="w-5 h-5 text-red-400" />;
                      } 
                      // All other normal choices fade out
                      else {
                        btnStyle = 'bg-slate-950/40 text-slate-500 border-white/5 opacity-55 cursor-not-allowed';
                      }
                    }

                    return (
                      <button
                        key={index}
                        disabled={selectedAnswer !== null || hasTimeRunOut}
                        onClick={() => handleAnswerSelect(option)}
                        className={`p-4 md:p-5 text-sm md:text-base font-sans font-medium rounded-2xl border text-left flex items-center justify-between gap-3 transition-all ${btnStyle} ${
                          selectedAnswer === null ? 'cursor-pointer hover:bg-slate-900 active:scale-[0.99]' : ''
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-slate-400 uppercase shrink-0">
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span>{option}</span>
                        </div>
                        {iconNode}
                      </button>
                    );
                  })}
                </div>

                {/* Question Info / Time's up & Explanatories section shown once selected or timed out */}
                <AnimatePresence>
                  {(selectedAnswer !== null || hasTimeRunOut) && (
                    <motion.div
                      key="explanation"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-5 rounded-2xl bg-slate-950/50 border border-white/5 space-y-3"
                    >
                      <div className="flex items-center gap-2">
                        {hasTimeRunOut && selectedAnswer === null ? (
                          <span className="text-xs font-bold text-red-400 bg-red-950 px-3 py-1 rounded-full uppercase tracking-wider font-mono">
                            ⏳ Time has Run Out!
                          </span>
                        ) : selectedAnswer === currentQ.correctAnswer ? (
                          <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full uppercase tracking-wider font-mono flex items-center gap-1">
                            ✓ Correct Answer!
                          </span>
                        ) : (
                          <span className="text-xs font-bold text-red-400 bg-red-950 px-3 py-1 rounded-full uppercase tracking-wider font-mono flex items-center gap-1">
                            ✗ Incorrect Answer
                          </span>
                        )}
                        <span className="text-[11px] text-slate-400 font-sans">
                          Correct: <strong className="text-white font-mono">{currentQ.correctAnswer}</strong>
                        </span>
                      </div>
                      
                      <p className="text-slate-350 text-xs md:text-sm font-sans leading-relaxed">
                        {currentQ.explanation}
                      </p>

                      <div className="text-right pt-2 border-t border-white/5">
                        <button
                          onClick={handleNextQuestion}
                          className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-2.5 px-5 rounded-xl inline-flex items-center gap-1 shadow-md shadow-indigo-600/10 cursor-pointer active:scale-95 transition-all"
                        >
                          {currentQuestionIndex + 1 < totalQ ? 'Next Question' : 'View Final Records'}
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            )}

            {/* 3. FINAL RESULTS SCOREBOARD OVERLAY */}
            {isCompleted && (
              <motion.div
                key="completed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-w-xl mx-auto space-y-8"
              >
                
                {/* Result Card Container */}
                <div className="p-6 md:p-8 rounded-3xl bg-slate-950/80 border border-white/10 space-y-6 relative overflow-hidden">
                  
                  {/* Decorative background color flow */}
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-red-500 via-amber-400 to-cyan-400" />
                  
                  {/* Performance feedback heads */}
                  <div className="text-center space-y-2">
                    <Trophy className="w-12 h-12 text-amber-400 mx-auto animate-bounce" />
                    <h3 className="text-2xl md:text-3xl font-extrabold font-display text-white">
                      {getMotivationalText(scorePercent).title}
                    </h3>
                    <p className={`${getMotivationalText(scorePercent).color} text-sm md:text-base font-sans font-medium px-4`}>
                      {getMotivationalText(scorePercent).text}
                    </p>
                  </div>

                  {/* Core stats grid layout */}
                  <div className="grid grid-cols-2 gap-4 text-center">
                    
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <span className="block text-[10px] text-slate-400 font-mono uppercase font-bold tracking-wider mb-1">SCORE REPORT</span>
                      <span className="text-2xl md:text-4xl font-extrabold text-white font-mono leading-none">
                        {correctCount} <span className="text-slate-500 text-lg">/ {totalQ}</span>
                      </span>
                      <span className="block text-[10px] text-slate-500 mt-1">{totalQ - correctCount} wrong answers</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <span className="block text-[10px] text-slate-400 font-mono uppercase font-bold tracking-wider mb-1">PERCENTAGE ACCURACY</span>
                      <span className="text-2xl md:text-4xl font-extrabold text-[#FACC15] font-mono leading-none">
                        {scorePercent}%
                      </span>
                      <span className="block text-[10px] text-slate-500 mt-1">Passing standard: 60%</span>
                    </div>

                  </div>

                  {/* Submit onto Leaderboard */}
                  {!isSubmittedToLeaderboard ? (
                    <form 
                      onSubmit={handleSubmitLeaderboard}
                      className="p-4 rounded-2xl bg-slate-900 border border-white/5 space-y-3"
                    >
                      <h4 className="font-display font-bold text-xs text-slate-200 uppercase tracking-widest text-left">
                        Join the Hall of Fame
                      </h4>
                      <p className="text-[11px] text-slate-400 font-sans text-left leading-normal">
                        Enter your name below to append your {correctCount}/{totalQ} score onto the academy live test record ledger!
                      </p>
                      
                      <div className="flex gap-2">
                        <input
                          type="text"
                          required
                          value={studentName}
                          onChange={(e) => setStudentName(e.target.value)}
                          placeholder="What's your student name?"
                          maxLength={25}
                          className="flex-1 px-4 py-2 bg-slate-950 text-slate-200 text-xs border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-cyan-500 font-sans"
                        />
                        <button
                          type="submit"
                          className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1 cursor-pointer"
                        >
                          <Award className="w-3.5 h-3.5 text-slate-950" />
                          Submit Score
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      Congratulations! Your score has been submitted to the Hall of Fame.
                    </div>
                  )}

                  {/* Play again or exit */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      onClick={() => startNewQuiz(useDailyChallengeMode)}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-5 rounded-xl border border-indigo-500/20 flex items-center justify-center gap-2 text-xs cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Try Speedrun Again
                    </button>
                    
                    <button
                      onClick={() => {
                        setIsQuizActive(false);
                        setIsCompleted(false);
                      }}
                      className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-3 px-5 rounded-xl border border-white/10 flex items-center justify-center gap-2 text-xs cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4" />
                      Change Configuration Settings
                    </button>
                  </div>

                </div>

              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
