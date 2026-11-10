import React, { useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PORTFOLIO_DATA } from './data/portfolioData';

export default function App() {
  const handleDownloadResume = useCallback(() => {
    confetti({
      particleCount: 85,
      spread: 70,
      origin: { y: 0.6 }
    });

    const link = document.createElement('a');
    link.href = PORTFOLIO_DATA.personal.resumePdfPath;
    link.download = 'Palak_Pandey_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-[#080B1E] text-[#F8FAFF] selection:bg-[#713BFF] selection:text-white">
      {/* Dark Transparent Glassmorphism Navigation Bar */}
      <Navbar onDownloadResume={handleDownloadResume} />

      {/* Main Sections with Midnight Navy + Electric Violet + Neon Cyan Palette */}
      <main className="w-full">
        {/* 1. Hero Section: 2-column layout, moving neon particle network, aurora glow */}
        <Hero onDownloadResume={handleDownloadResume} />

        {/* 2. About Section: Glassmorphism cards with violet and cyan highlights */}
        <About onDownloadResume={handleDownloadResume} />

        {/* 3. Skills Section: Dark glassmorphism cards with hover neon borders */}
        <Skills />

        {/* 4. Education Timeline: Violet and cyan indicators */}
        <Education />

        {/* 5. Work Experience: Glass cards with gradient accents */}
        <Experience />

        {/* 6. Projects Showcase: Modern cards with hover purple/cyan glow */}
        <Projects />

        {/* 7. Certifications & Achievements: Technical credentials & milestones */}
        <Achievements />

        {/* 8. Contact Section: Futuristic dark background and gradient submit */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
