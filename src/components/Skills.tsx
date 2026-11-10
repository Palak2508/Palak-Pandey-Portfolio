import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Database, 
  Sparkles, 
  Layers, 
  Cpu, 
  TableProperties, 
  BarChart3, 
  GitBranch, 
  Server, 
  Coffee, 
  Globe, 
  SlidersHorizontal,
  Smartphone,
  FileSpreadsheet
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Map icons with vibrant futuristic palette
const skillIcons: Record<string, React.ReactNode> = {
  'Python': <Terminal className="w-8 h-8 text-[#16D9F5]" />,
  'SQL': <Database className="w-8 h-8 text-[#713BFF]" />,
  'Java': <Coffee className="w-8 h-8 text-[#FF4FA3]" />,
  'C++': <Code2 className="w-8 h-8 text-[#16D9F5]" />,
  'JavaScript': <Code2 className="w-8 h-8 text-amber-400" />,
  'TypeScript': <Terminal className="w-8 h-8 text-sky-400" />,
  'React': <Layers className="w-8 h-8 text-[#16D9F5]" />,
  'Tailwind CSS': <Layers className="w-8 h-8 text-teal-400" />,
  'Flask': <Server className="w-8 h-8 text-emerald-400" />,
  'Streamlit': <SlidersHorizontal className="w-8 h-8 text-[#FF4FA3]" />,
  'Android (Java, XML)': <Smartphone className="w-8 h-8 text-green-400" />,
  'HTML & CSS': <Globe className="w-8 h-8 text-orange-400" />,
  'Power BI (DAX, Power Query)': <BarChart3 className="w-8 h-8 text-[#FF4FA3]" />,
  'Microsoft Excel': <FileSpreadsheet className="w-8 h-8 text-emerald-400" />,
  'Pandas & NumPy': <TableProperties className="w-8 h-8 text-[#16D9F5]" />,
  'Matplotlib & EDA': <BarChart3 className="w-8 h-8 text-purple-400" />,
  'Scikit-learn & XGBoost': <Cpu className="w-8 h-8 text-[#713BFF]" />,
  'TensorFlow & Keras': <Layers className="w-8 h-8 text-[#FF4FA3]" />,
  'MobileNetV2 & Transfer Learning': <Sparkles className="w-8 h-8 text-[#16D9F5]" />,
  'RAG & LangChain': <Cpu className="w-8 h-8 text-cyan-300" />,
  'ChromaDB (Vector DB)': <Database className="w-8 h-8 text-[#713BFF]" />,
  'TF-IDF & NLP': <Sparkles className="w-8 h-8 text-rose-400" />,
  'Git & GitHub': <GitBranch className="w-8 h-8 text-[#16D9F5]" />,
  'AWS Fundamentals': <Server className="w-8 h-8 text-amber-400" />,
  'VS Code': <Code2 className="w-8 h-8 text-sky-400" />,
  'Customer Segmentation': <SlidersHorizontal className="w-8 h-8 text-[#FF4FA3]" />
};

export const Skills: React.FC = () => {
  const { skills: skillCategories } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', ...skillCategories.map((c) => c.category)];

  const allSkills = skillCategories.flatMap((c) => c.skills.map((s) => ({ ...s, category: c.category })));

  const displayedSkills = activeTab === 'All'
    ? allSkills
    : allSkills.filter((s) => s.category === activeTab);

  return (
    <section
      id="skills"
      className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#080B1E] via-[#10152D] to-[#080B1E] text-[#F8FAFF] relative z-10 border-b border-[#713BFF]/20"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F8FAFF]">
            Skills &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#713BFF] via-[#16D9F5] to-[#FF4FA3]">
              Abilities
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#713BFF] to-[#16D9F5] mx-auto mt-3 rounded-full shadow-[0_0_10px_rgba(22,217,245,0.6)]" />
          <p className="text-[#AAB4D0] text-sm sm:text-base mt-4 max-w-xl mx-auto">
            Technical proficiencies directly supported by my resume, internships, and project builds.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-[#713BFF] to-[#16D9F5] text-white shadow-lg shadow-[#713BFF]/40 scale-105'
                  : 'bg-[#10152D] text-[#AAB4D0] hover:text-[#F8FAFF] hover:bg-[#1a2042] border border-[#713BFF]/25'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dark Glass Container with Neon Accents */}
        <div className="bg-[#10152D]/90 border border-[#713BFF]/35 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {displayedSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="skill-card-lift bg-[#080B1E]/90 hover:bg-[#131b3b] border border-[#713BFF]/30 hover:border-[#16D9F5] rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-lg group cursor-pointer min-h-[130px] transition-all duration-200"
              >
                {/* Tech Icon above skill name */}
                <div className="mb-3 transform group-hover:scale-115 transition-transform duration-200 flex items-center justify-center filter drop-shadow-[0_0_8px_rgba(22,217,245,0.3)]">
                  {skillIcons[skill.name] || <Code2 className="w-8 h-8 text-[#16D9F5]" />}
                </div>

                {/* Skill Name */}
                <h3 className="text-xs sm:text-sm font-bold text-[#F8FAFF] group-hover:text-[#16D9F5] transition-colors line-clamp-2">
                  {skill.name}
                </h3>

                {/* Subtle highlight snippet */}
                {skill.highlight && (
                  <span className="text-[10px] text-[#AAB4D0] mt-1 line-clamp-1 group-hover:text-[#AAB4D0]">
                    {skill.highlight}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Quick Metrics Bar in Inner Container */}
          <div className="mt-10 pt-6 border-t border-[#713BFF]/25 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#16D9F5] font-mono">8+</p>
              <p className="text-xs text-[#AAB4D0] mt-0.5">Languages & Scripts</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#713BFF] font-mono">9+</p>
              <p className="text-xs text-[#AAB4D0] mt-0.5">Projects Delivered</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#FF4FA3] font-mono">166k+</p>
              <p className="text-xs text-[#AAB4D0] mt-0.5">Records Analyzed</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#16D9F5] font-mono">8.6</p>
              <p className="text-xs text-[#AAB4D0] mt-0.5">B.Tech CGPA</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
