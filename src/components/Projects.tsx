import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  Eye, 
  CheckCircle2,
  Trophy
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filters = ['All', 'AI & ML', 'Data Analytics', 'Web & Mobile'];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#080B1E] border-b border-[#713BFF]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#713BFF]/15 border border-[#713BFF]/30 text-[#16D9F5] text-xs font-bold uppercase tracking-wider mb-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFF] tracking-tight">
            Projects <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#713BFF] via-[#16D9F5] to-[#FF4FA3]">Made</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#713BFF] to-[#16D9F5] mx-auto mt-3 rounded-full" />
          <p className="text-[#AAB4D0] text-sm sm:text-base mt-4 max-w-xl mx-auto">
            Multimodal ML systems, enterprise DAX dashboards, and scalable web applications.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-full transition-all duration-200 cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-[#713BFF] to-[#16D9F5] text-white shadow-lg shadow-[#713BFF]/40 scale-105'
                  : 'bg-[#10152D] text-[#AAB4D0] hover:text-[#F8FAFF] hover:bg-[#1a2042] border border-[#713BFF]/25'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#10152D]/85 hover:bg-[#141b3a] border border-[#713BFF]/30 hover:border-[#16D9F5]/60 rounded-3xl p-6 sm:p-7 shadow-xl hover:shadow-[0_12px_35px_rgba(113,59,255,0.3)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden backdrop-blur-md"
            >
              {/* Top violet & cyan accent line */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#713BFF] via-[#16D9F5] to-[#FF4FA3] absolute top-0 left-0" />

              <div>
                {/* Meta tags header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 mt-1">
                  <span className="text-[11px] font-bold px-3 py-0.5 rounded-full bg-[#713BFF]/20 border border-[#713BFF]/40 text-[#16D9F5]">
                    {project.category}
                  </span>
                  {project.awardOrHighlight && (
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#FF4FA3]/15 text-[#FF4FA3] border border-[#FF4FA3]/30 flex items-center gap-1">
                      <Trophy className="w-3 h-3 text-[#FF4FA3]" />
                      {project.awardOrHighlight}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-[#F8FAFF] group-hover:text-[#16D9F5] transition-colors tracking-tight leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs font-semibold text-[#16D9F5] mt-1 line-clamp-1">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#AAB4D0] mt-3 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Key feature preview */}
                <div className="mt-4 pt-4 border-t border-[#713BFF]/20">
                  <p className="text-[10px] uppercase font-bold text-slate-400 mb-1.5">Key Capability:</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16D9F5] mt-0.5 shrink-0" />
                    <p className="text-xs text-[#AAB4D0] line-clamp-2">
                      {project.keyFeatures[0]}
                    </p>
                  </div>
                </div>

                {/* Technologies List */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-[#080B1E] text-[#16D9F5] border border-[#713BFF]/25"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#080B1E] text-slate-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="mt-6 pt-4 border-t border-[#713BFF]/20 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16D9F5] hover:text-[#F8FAFF] transition-colors py-1.5 px-3 rounded-full hover:bg-[#713BFF]/20 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#080B1E] hover:bg-[#713BFF] text-[#AAB4D0] hover:text-white border border-[#713BFF]/30 transition-all text-xs font-semibold shadow-xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
