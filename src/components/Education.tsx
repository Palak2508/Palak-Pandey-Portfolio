import React from 'react';
import { GraduationCap, Calendar, MapPin, BookCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#080B1E] border-b border-[#713BFF]/20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#713BFF]/15 border border-[#713BFF]/30 text-[#16D9F5] text-xs font-bold uppercase tracking-wider mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFF] tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#713BFF] via-[#16D9F5] to-[#FF4FA3]">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#713BFF] to-[#16D9F5] mx-auto mt-3 rounded-full" />
          <p className="text-[#AAB4D0] text-sm sm:text-base mt-4 max-w-xl mx-auto">
            Education is not the learning of facts, but the training of the mind to think.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative border-l-2 border-[#713BFF]/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {education.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Indicator Dot with electric violet to neon cyan glow */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-10 h-10 rounded-full bg-gradient-to-tr from-[#713BFF] to-[#16D9F5] border-4 border-[#080B1E] flex items-center justify-center text-white shadow-[0_0_15px_rgba(22,217,245,0.4)] group-hover:scale-110 transition-transform">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>

              {/* Glass Card Container */}
              <div className="bg-[#10152D]/85 hover:bg-[#131b3b] border border-[#713BFF]/30 hover:border-[#16D9F5]/60 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-[0_10px_30px_rgba(113,59,255,0.25)] transition-all duration-300 backdrop-blur-md">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16D9F5] uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5 text-[#16D9F5]" />
                    {item.period}
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#713BFF]/20 border border-[#713BFF]/40 text-[#16D9F5] text-xs font-bold self-start sm:self-auto">
                    {item.score}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#F8FAFF] tracking-tight">
                  {item.degree}
                </h3>

                <div className="flex items-center gap-2 text-sm text-[#AAB4D0] font-medium mt-1 mb-4">
                  <MapPin className="w-4 h-4 text-[#FF4FA3] shrink-0" />
                  <span>{item.institution}{item.location ? ` · ${item.location}` : ''}</span>
                </div>

                <p className="text-sm text-[#AAB4D0] leading-relaxed mb-5">
                  {item.description}
                </p>

                {item.courses && item.courses.length > 0 && (
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                      <BookCheck className="w-3.5 h-3.5 text-[#16D9F5]" />
                      Core Coursework & Specialized Modules
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.courses.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-3 py-1 rounded-lg bg-[#080B1E] text-[#AAB4D0] border border-[#713BFF]/25 text-xs font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
