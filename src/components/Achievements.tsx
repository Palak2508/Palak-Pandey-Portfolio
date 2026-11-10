import React from 'react';
import { Trophy, Award, GraduationCap, Users, LineChart, CheckCircle2, ShieldCheck, BookmarkCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="w-6 h-6 text-[#16D9F5]" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-[#713BFF]" />,
  Users: <Users className="w-6 h-6 text-[#FF4FA3]" />,
  LineChart: <LineChart className="w-6 h-6 text-emerald-400" />
};

export const Achievements: React.FC = () => {
  const { achievements, certifications } = PORTFOLIO_DATA;

  return (
    <section id="achievements" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#080B1E] border-b border-[#713BFF]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#713BFF]/15 border border-[#713BFF]/30 text-[#16D9F5] text-xs font-bold uppercase tracking-wider mb-2">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Validation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFF] tracking-tight">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#713BFF] via-[#16D9F5] to-[#FF4FA3]">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#713BFF] to-[#16D9F5] mx-auto mt-3 rounded-full" />
          <p className="text-[#AAB4D0] text-sm sm:text-base mt-4 max-w-xl mx-auto">
            Verified credentials, academic excellence, and collegiate organizational achievements.
          </p>
        </div>

        {/* Milestone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-[#10152D]/85 hover:bg-[#131b3b] border border-[#713BFF]/30 hover:border-[#16D9F5]/60 rounded-3xl p-6 shadow-xl hover:shadow-[0_10px_30px_rgba(113,59,255,0.25)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group backdrop-blur-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#080B1E] border border-[#713BFF]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[item.icon] || <Award className="w-6 h-6 text-[#16D9F5]" />}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#713BFF]/20 border border-[#713BFF]/40 text-[#16D9F5]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-[#F8FAFF] group-hover:text-[#16D9F5] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-[#FF4FA3] mt-1">
                  {item.organization}
                </p>

                <p className="text-xs text-[#AAB4D0] mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#713BFF]/20 flex items-center gap-1.5 text-[11px] text-[#16D9F5] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Verified in Resume</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Sub-Section */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="w-5 h-5 text-[#16D9F5]" />
            <h3 className="text-xl font-extrabold text-[#F8FAFF] tracking-tight">
              Verified Technical Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="bg-[#10152D]/85 border border-[#713BFF]/30 hover:border-[#16D9F5]/60 rounded-2xl p-4 flex items-start gap-3.5 transition-all shadow-md hover:shadow-[0_0_20px_rgba(22,217,245,0.2)] backdrop-blur-sm"
              >
                <div className="p-2 rounded-xl bg-[#080B1E] text-[#16D9F5] shrink-0 mt-0.5 border border-[#713BFF]/25">
                  <BookmarkCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#F8FAFF] leading-snug">{cert.title}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-[#16D9F5] font-semibold">{cert.issuer}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#080B1E] text-[#AAB4D0] border border-[#713BFF]/25">
                      {cert.badge}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
