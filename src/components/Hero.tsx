import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ParticleBackground } from './ParticleBackground';

interface HeroProps {
  onDownloadResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadResume }) => {
  // Required exact phrases
  const roles = [
    'Software Developer',
    'AI & Machine Learning Enthusiast',
    'Data Analytics Enthusiast',
    'Full-Stack Developer'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = roles[currentRoleIndex];

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        timeout = setTimeout(() => {}, 300);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length - 1));
        }, 35);
      }
    } else {
      if (currentText === currentWord) {
        // Pause at complete word for 2.2 seconds before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, 75);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  return (
    <section
      id="home"
      className="relative w-full bg-[#080B1E] pt-24 pb-12 lg:py-0 lg:min-h-[500px] lg:h-[520px] flex items-center justify-center overflow-hidden"
    >
      {/* Animated Aurora Glowing Light Effects in Midnight Navy */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#713BFF]/20 rounded-full blur-[110px] pointer-events-none aurora-glow-1" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-[#16D9F5]/15 rounded-full blur-[120px] pointer-events-none aurora-glow-2" />
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-[#FF4FA3]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Moving Particle Network with subtle violet & cyan glow */}
      <ParticleBackground />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Greeting, Name, Typing Animation, About Me Button, Social Icons */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Hi There, */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFF] tracking-tight leading-tight">
              Hi There,
            </h2>

            {/* I'm Palak Pandey with Electric Violet to Neon Cyan gradient */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFF] tracking-tight mt-1 mb-3">
              I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#713BFF] via-[#16D9F5] to-[#FF4FA3] drop-shadow-[0_0_20px_rgba(113,59,255,0.4)]">
                Palak Pandey
              </span>
            </h1>

            {/* Dynamic Typing Title: Single line on desktop, graceful wrapping on mobile */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start text-lg sm:text-xl lg:text-2xl font-bold text-[#F8FAFF] mb-6 min-h-[38px]">
              <span className="text-[#AAB4D0] whitespace-nowrap">I Am Into&nbsp;</span>
              <span className="text-[#16D9F5] font-mono tracking-tight underline decoration-[#713BFF] underline-offset-4 whitespace-normal lg:whitespace-nowrap">
                {currentText}
              </span>
              <span className="w-0.5 h-6 bg-[#16D9F5] ml-1 inline-block animate-pulse shrink-0" />
            </div>

            {/* "About Me" Vibrant Gradient Button */}
            <div className="mb-6">
              <a
                href="#about"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#713BFF] via-[#8552FF] to-[#16D9F5] hover:from-[#8552FF] hover:to-[#3ee2fa] rounded-full shadow-lg shadow-[#713BFF]/35 hover:shadow-[0_0_30px_rgba(22,217,245,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                <span>About Me</span>
                <ArrowDown className="w-4 h-4 text-white" />
              </a>
            </div>

            {/* Circular Social Media Icons */}
            <div className="flex items-center gap-3.5 pt-1">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-[#10152D] hover:bg-[#713BFF] border border-[#713BFF]/30 hover:border-[#16D9F5] text-[#AAB4D0] hover:text-white flex items-center justify-center shadow-md shadow-black/40 hover:shadow-[0_0_15px_rgba(113,59,255,0.5)] transition-all duration-200 hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-[#10152D] hover:bg-[#16D9F5] border border-[#713BFF]/30 hover:border-[#16D9F5] text-[#AAB4D0] hover:text-[#080B1E] flex items-center justify-center shadow-md shadow-black/40 hover:shadow-[0_0_15px_rgba(22,217,245,0.5)] transition-all duration-200 hover:-translate-y-1"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-[#10152D] hover:bg-[#FF4FA3] border border-[#713BFF]/30 hover:border-[#FF4FA3] text-[#AAB4D0] hover:text-white flex items-center justify-center shadow-md shadow-black/40 hover:shadow-[0_0_15px_rgba(255,79,163,0.5)] transition-all duration-200 hover:-translate-y-1"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/[^0-9+]/g, '')}`}
                aria-label="Phone"
                className="w-10 h-10 rounded-full bg-[#10152D] hover:bg-[#16D9F5] border border-[#713BFF]/30 hover:border-[#16D9F5] text-[#AAB4D0] hover:text-[#080B1E] flex items-center justify-center shadow-md shadow-black/40 hover:shadow-[0_0_15px_rgba(22,217,245,0.5)] transition-all duration-200 hover:-translate-y-1"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Circular Profile Photograph with elegant, refined violet and cyan glow */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group">
              
              {/* Refined subtle outer halo with balanced intensity */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#713BFF] via-[#16D9F5] to-[#713BFF] opacity-30 group-hover:opacity-55 blur-md transition duration-500" />

              {/* Clean circular frame with delicate violet and cyan border */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-[#713BFF]/60 p-1 bg-[#10152D] shadow-[0_10px_30px_rgba(8,11,30,0.8)] ring-1 ring-[#16D9F5]/40 transition-all duration-300 group-hover:border-[#16D9F5]/70">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#080B1E]">
                  <img
                   src={`${import.meta.env.BASE_URL}assets/aistudio/palak_portfolio_74d0ad2d.jpg`}
                    alt="Palak Pandey"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                    loading="eager"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle Glowing Divider Transition at Bottom of Hero */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#713BFF]/40 to-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-[2px] bg-gradient-to-r from-[#713BFF] via-[#16D9F5] to-[#713BFF] blur-[1px]" />
      </div>
    </section>
  );
};
