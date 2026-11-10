import React from 'react';
import { X, Github, CheckCircle, Sparkles, Layers } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#080B1E]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#10152D] border border-[#713BFF]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(113,59,255,0.3)] z-10 my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Ambient glow in modal */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#713BFF]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#AAB4D0] hover:text-[#F8FAFF] hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-0.5 rounded-full bg-[#713BFF]/20 border border-[#713BFF]/40 text-[#16D9F5] text-xs font-bold">
              {project.category}
            </span>
            {project.awardOrHighlight && (
              <span className="px-3 py-0.5 rounded-full bg-[#FF4FA3]/15 text-[#FF4FA3] border border-[#FF4FA3]/30 text-xs font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF4FA3]" />
                {project.awardOrHighlight}
              </span>
            )}
          </div>

          <h3 className="text-2xl font-extrabold text-[#F8FAFF] tracking-tight leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-[#16D9F5] font-bold mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Full Description */}
        <div className="mt-6 pt-5 border-t border-[#713BFF]/20">
          <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">
            Overview & Problem Solved
          </h4>
          <p className="text-sm text-[#AAB4D0] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Features */}
        <div className="mt-6">
          <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">
            Architectural Highlights & Capabilities
          </h4>
          <div className="space-y-2.5">
            {project.keyFeatures.map((feature, fIdx) => (
              <div key={fIdx} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#16D9F5] mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-[#F8FAFF]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mt-6 pt-5 border-t border-[#713BFF]/20">
          <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#16D9F5]" />
            Technologies & Frameworks
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 rounded-md bg-[#080B1E] text-[#16D9F5] border border-[#713BFF]/30 text-xs font-mono font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-5 border-t border-[#713BFF]/20 flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#713BFF] to-[#16D9F5] text-xs font-bold text-white shadow-md shadow-[#713BFF]/30 transition-all hover:shadow-[0_0_20px_rgba(22,217,245,0.4)]"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-[#AAB4D0] hover:text-[#F8FAFF] transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
