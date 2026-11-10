import React from 'react';
import { 
  User, 
  MapPin, 
  FileDown, 
  GraduationCap, 
  Code2, 
  Layers, 
  Compass, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Award,
  BookOpen,
  Briefcase
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AboutProps {
  onDownloadResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onDownloadResume }) => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-[#080B1E] text-[#F8FAFF] relative overflow-hidden border-b border-[#713BFF]/20">
      
      {/* Subtle Glowing Violet & Cyan Divider bridging directly from Hero */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#713BFF]/40 to-transparent" />
        <div className="absolute top-0 w-44 h-[2px] bg-gradient-to-r from-transparent via-[#16D9F5]/70 to-transparent blur-[1px]" />
        <div className="absolute -top-1 w-2 h-2 rounded-full bg-[#16D9F5] shadow-[0_0_8px_#16D9F5]" />
      </div>

      {/* Subtle Animated Decorative Ambient Elements in Background */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#713BFF]/10 rounded-full blur-[120px] pointer-events-none aurora-glow-1" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#16D9F5]/10 rounded-full blur-[120px] pointer-events-none aurora-glow-2" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with tight, balanced spacing */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#713BFF]/15 border border-[#713BFF]/30 text-[#16D9F5] text-xs font-bold uppercase tracking-wider mb-2">
            <User className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFF] tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#713BFF] via-[#16D9F5] to-[#FF4FA3]">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#713BFF] to-[#16D9F5] mx-auto mt-2.5 rounded-full shadow-[0_0_8px_rgba(22,217,245,0.5)]" />
        </div>

        {/* 2-Column Content Grid: Left Intro Card + Right 4 Compact Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* LEFT SIDE: Professional About Me Introduction Card */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-[#10152D]/90 border border-[#713BFF]/35 hover:border-[#16D9F5]/50 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden group">
              
              {/* Subtle top card glow line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#713BFF] via-[#16D9F5] to-[#FF4FA3] opacity-80" />

              <div>
                {/* Intro Header Lockup */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#713BFF]/20">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#16D9F5]">Professional Introduction</span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#F8FAFF] tracking-tight mt-0.5">
                      Palak Pandey
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#080B1E] border border-[#713BFF]/30 text-xs font-semibold text-[#AAB4D0]">
                    <MapPin className="w-3.5 h-3.5 text-[#FF4FA3]" />
                    <span>Mumbai, India</span>
                  </div>
                </div>

                {/* Subtitle Headline */}
                <h4 className="text-sm sm:text-base font-bold text-[#16D9F5] mb-4">
                  B.Tech Information Technology Engineering (AI/ML Focus) · University of Mumbai
                </h4>

                {/* Narrative Paragraphs based on verified resume */}
                <div className="space-y-3.5 text-xs sm:text-sm text-[#AAB4D0] leading-relaxed">
                  <p>
                    I am a final-year Information Technology engineering undergraduate at <strong className="text-[#F8FAFF]">Pillai College of Engineering (University of Mumbai)</strong> specializing in <span className="text-[#16D9F5] font-semibold">Artificial Intelligence and Machine Learning</span>, maintaining a high academic standing with an <strong className="text-[#16D9F5]">8.6/10 CGPA</strong> (Expected 2027).
                  </p>
                  <p>
                    My core technical foundation spans object-oriented design and competitive programming in <strong className="text-[#F8FAFF]">Python, SQL, Java, and C++</strong>, complemented by full-stack engineering with <strong className="text-[#F8FAFF]">React, Next.js, TypeScript, and Flask</strong>. I am passionate about writing clean, modular code and solving algorithmic problems with precision.
                  </p>
                  <p>
                    During my internship as a <strong className="text-[#F8FAFF]">Data Analyst at HappieLoop Technologies</strong>, I cleaned and analyzed 3,900+ real-world customer records and built executive Power BI KPI dashboards. Across my academic builds, I have trained multimodal ML classifiers (86% accuracy, 0.904 ROC-AUC), analyzed 166,000+ commercial beauty records, and built RAG document assistants using ChromaDB and Llama 3.2 3B Instruct.
                  </p>
                </div>

                {/* Technical Pillars Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-5 pt-2">
                  <div className="p-3 rounded-2xl bg-[#080B1E]/70 border border-[#713BFF]/25 hover:border-[#713BFF]/50 transition-colors">
                    <span className="text-xs font-bold text-[#F8FAFF] block">Software Dev</span>
                    <span className="text-[11px] text-[#AAB4D0] mt-0.5 block">Full-stack apps, TypeScript, React & OOP</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#080B1E]/70 border border-[#16D9F5]/25 hover:border-[#16D9F5]/50 transition-colors">
                    <span className="text-xs font-bold text-[#F8FAFF] block">AI & Machine Learning</span>
                    <span className="text-[11px] text-[#AAB4D0] mt-0.5 block">Multimodal ML, RAG, ChromaDB & LLMs</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#080B1E]/70 border border-[#FF4FA3]/25 hover:border-[#FF4FA3]/50 transition-colors">
                    <span className="text-xs font-bold text-[#F8FAFF] block">Data Analytics</span>
                    <span className="text-[11px] text-[#AAB4D0] mt-0.5 block">EDA, 166k+ records, Power BI DAX</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-4 border-t border-[#713BFF]/20 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={onDownloadResume}
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#713BFF] via-[#8552FF] to-[#16D9F5] hover:from-[#8552FF] hover:to-[#3ee2fa] rounded-full shadow-lg shadow-[#713BFF]/35 hover:shadow-[0_0_25px_rgba(22,217,245,0.4)] transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-[#F8FAFF] hover:text-[#16D9F5] bg-[#080B1E] hover:bg-[#131b3b] border border-[#713BFF]/35 rounded-full shadow-sm transition-all hover:-translate-y-0.5"
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#16D9F5]" />
                </a>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: Four Compact Information Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* Card 1: Education */}
            <div className="bg-[#10152D]/85 hover:bg-[#131b3b] border border-[#713BFF]/30 hover:border-[#16D9F5]/60 rounded-3xl p-5 shadow-xl transition-all duration-300 backdrop-blur-md group">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#080B1E] border border-[#16D9F5]/40 text-[#16D9F5] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#F8FAFF]">Education</h4>
                  <span className="text-[11px] font-semibold text-[#16D9F5]">Pillai College of Engineering</span>
                </div>
              </div>
              <p className="text-xs text-[#AAB4D0] leading-snug">
                B.Tech in Information Technology Engineering (AI/ML Specialization), University of Mumbai · <strong className="text-[#F8FAFF]">CGPA: 8.6/10</strong> (Expected 2027). HSC Science (PCMB) · 75.8% (2023).
              </p>
            </div>

            {/* Card 2: Technical Skills */}
            <div className="bg-[#10152D]/85 hover:bg-[#131b3b] border border-[#713BFF]/30 hover:border-[#16D9F5]/60 rounded-3xl p-5 shadow-xl transition-all duration-300 backdrop-blur-md group">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#080B1E] border border-[#713BFF]/40 text-[#713BFF] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#F8FAFF]">Technical Skills</h4>
                  <span className="text-[11px] font-semibold text-[#713BFF]">Core Languages & Tools</span>
                </div>
              </div>
              <p className="text-xs text-[#AAB4D0] leading-snug">
                Python, SQL, Java, C++, TypeScript, React, Next.js, Tailwind CSS, Flask, Scikit-learn, XGBoost, Power BI (DAX), RAG, ChromaDB, Git & GitHub.
              </p>
            </div>

            {/* Card 3: Key Projects */}
            <div className="bg-[#10152D]/85 hover:bg-[#131b3b] border border-[#713BFF]/30 hover:border-[#16D9F5]/60 rounded-3xl p-5 shadow-xl transition-all duration-300 backdrop-blur-md group">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#080B1E] border border-[#FF4FA3]/40 text-[#FF4FA3] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#F8FAFF]">Projects</h4>
                  <span className="text-[11px] font-semibold text-[#FF4FA3]">AI/ML & Full-Stack Systems</span>
                </div>
              </div>
              <p className="text-xs text-[#AAB4D0] leading-snug">
                Multimodal Social Media Virality Prediction (86% accuracy, 0.904 ROC-AUC) · Nykaa/Tira Market Intelligence Dashboard (166k+ records) · College Knowledge RAG Assistant · Pizza Sales Analytics (50k+ SQL orders).
              </p>
            </div>

            {/* Card 4: Career Interests */}
            <div className="bg-[#10152D]/85 hover:bg-[#131b3b] border border-[#713BFF]/30 hover:border-[#16D9F5]/60 rounded-3xl p-5 shadow-xl transition-all duration-300 backdrop-blur-md group">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#080B1E] border border-[#16D9F5]/40 text-[#16D9F5] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#F8FAFF]">Career Interests</h4>
                  <span className="text-[11px] font-semibold text-[#16D9F5]">Role Alignment & Goals</span>
                </div>
              </div>
              <p className="text-xs text-[#AAB4D0] leading-snug">
                Software Development Engineer (SDE), Data Analyst, and AI/ML Engineering roles. Driven to architect high-performance full-stack applications and intelligent predictive systems.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
