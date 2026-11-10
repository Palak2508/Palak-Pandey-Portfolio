import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Code2 } from 'lucide-react';

interface NavbarProps {
  onDownloadResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDownloadResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'education', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 130;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B1E]/85 backdrop-blur-md shadow-lg shadow-[#080B1E]/60 border-b border-[#713BFF]/25 py-3'
          : 'bg-[#080B1E]/60 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group font-bold text-xl tracking-tight text-[#F8FAFF]"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#713BFF] to-[#16D9F5] flex items-center justify-center text-white shadow-md shadow-[#713BFF]/30 group-hover:scale-105 transition-transform">
              <Code2 className="w-4 h-4 text-white" />
            </span>
            <span className="text-xl font-extrabold text-[#F8FAFF]">
              Palak <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#713BFF] to-[#16D9F5]">Pandey</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-all duration-200 ${
                    isActive
                      ? 'text-[#16D9F5] font-bold bg-[#713BFF]/15 border-b-2 border-[#16D9F5] shadow-sm shadow-[#16D9F5]/20'
                      : 'text-[#AAB4D0] hover:text-[#F8FAFF] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Resume */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onDownloadResume}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#713BFF] to-[#16D9F5] hover:from-[#8552ff] hover:to-[#3ee2fa] rounded-full shadow-md shadow-[#713BFF]/30 hover:shadow-[0_0_20px_rgba(22,217,245,0.4)] transition-all duration-200 cursor-pointer active:scale-95"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#AAB4D0] hover:text-[#F8FAFF] hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#10152D]/95 backdrop-blur-xl border-b border-[#713BFF]/30 px-4 pt-3 pb-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? 'text-[#16D9F5] bg-[#713BFF]/20 font-bold'
                      : 'text-[#AAB4D0] hover:text-[#F8FAFF] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="pt-3 border-t border-[#713BFF]/25">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onDownloadResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-[#713BFF] to-[#16D9F5] rounded-full shadow-lg shadow-[#713BFF]/30 transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
