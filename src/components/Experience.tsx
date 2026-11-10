import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#080B1E] border-b border-[#713BFF]/20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#713BFF]/15 border border-[#713BFF]/30 text-[#16D9F5] text-xs font-bold uppercase tracking-wider mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Internship & Roles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFF] tracking-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#713BFF] via-[#16D9F5] to-[#FF4FA3]">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#713BFF] to-[#16D9F5] mx-auto mt-3 rounded-full" />
          <p className="text-[#AAB4D0] text-sm sm:text-base mt-4 max-w-xl mx-auto">
            Hands-on corporate data analysis experience and collegiate organizational leadership.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experience.map((item, index) => (
            <div
              key={index}
              className="bg-[#10152D]/85 hover:bg-[#131b3b] border border-[#713BFF]/30 hover:border-[#16D9F5]/60 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-[0_10px_30px_rgba(113,59,255,0.25)] transition-all duration-300 relative overflow-hidden backdrop-blur-md"
            >
              {/* Subtle accent bar */}
              <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-b from-[#713BFF] via-[#16D9F5] to-[#FF4FA3]" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pl-2">
                <div>
                  <span className="inline-block px-3 py-0.5 rounded-full bg-[#713BFF]/20 border border-[#713BFF]/40 text-[#16D9F5] text-xs font-bold mb-2">
                    {item.type}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#F8FAFF] tracking-tight">
                    {item.role}
                  </h3>
                  <h4 className="text-base font-bold text-[#16D9F5] mt-0.5">
                    {item.company}
                  </h4>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-[#AAB4D0] space-y-1">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-[#F8FAFF]">
                    <Calendar className="w-3.5 h-3.5 text-[#16D9F5]" />
                    {item.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#AAB4D0]">
                    <MapPin className="w-3.5 h-3.5 text-[#FF4FA3]" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3 my-6 pl-2">
                {item.highlights.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#16D9F5] mt-0.5 shrink-0" />
                    <p className="text-sm text-[#AAB4D0] leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies Tag Strip */}
              <div className="pt-4 border-t border-[#713BFF]/20 flex flex-wrap items-center gap-2 pl-2">
                <span className="text-xs uppercase font-bold text-slate-400 mr-2">Skills Applied:</span>
                {item.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md bg-[#080B1E] text-[#16D9F5] border border-[#713BFF]/30 text-xs font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
