import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Code2, Phone } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#080B1E] text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8 border-t border-[#713BFF]/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#713BFF]/20">
          
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#713BFF] to-[#16D9F5] flex items-center justify-center text-white text-xs font-bold shadow-md shadow-[#713BFF]/30">
                <Code2 className="w-4 h-4" />
              </span>
              <span className="text-xl font-extrabold text-[#F8FAFF] tracking-tight">
                Palak <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#713BFF] to-[#16D9F5]">Pandey</span>
              </span>
            </div>
            <p className="text-xs text-[#AAB4D0] mt-1 max-w-sm">
              Thank you for visiting my personal portfolio website. Connect with me over LinkedIn or GitHub!
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#AAB4D0]">
            <a href="#home" className="hover:text-[#16D9F5] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#16D9F5] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#16D9F5] transition-colors">Skills</a>
            <a href="#education" className="hover:text-[#16D9F5] transition-colors">Education</a>
            <a href="#experience" className="hover:text-[#16D9F5] transition-colors">Experience</a>
            <a href="#projects" className="hover:text-[#16D9F5] transition-colors">Projects</a>
            <a href="#contact" className="hover:text-[#16D9F5] transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full bg-[#10152D] hover:bg-[#16D9F5] border border-[#713BFF]/30 text-[#AAB4D0] hover:text-[#080B1E] flex items-center justify-center transition-all shadow-xs"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-[#10152D] hover:bg-[#713BFF] border border-[#713BFF]/30 text-[#AAB4D0] hover:text-white flex items-center justify-center transition-all shadow-xs"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="w-9 h-9 rounded-full bg-[#10152D] hover:bg-[#FF4FA3] border border-[#713BFF]/30 text-[#AAB4D0] hover:text-white flex items-center justify-center transition-all shadow-xs"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
              aria-label="Phone"
              className="w-9 h-9 rounded-full bg-[#10152D] hover:bg-[#16D9F5] border border-[#713BFF]/30 text-[#AAB4D0] hover:text-[#080B1E] flex items-center justify-center transition-all shadow-xs"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-9 h-9 rounded-full bg-gradient-to-r from-[#713BFF] to-[#16D9F5] hover:from-[#8552FF] hover:to-[#3ee2fa] text-white flex items-center justify-center shadow-md shadow-[#713BFF]/30 transition-all hover:-translate-y-0.5 cursor-pointer ml-1"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Designed with ❤️ by Palak Pandey.</p>
          <p className="text-[#AAB4D0]">
            Midnight Navy & Neon Cyan Developer Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};
