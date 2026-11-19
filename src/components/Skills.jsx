import React, { useState, useRef } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaTools,
  FaJava,
  FaCheckCircle,
  FaLayerGroup
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiIonic,
  SiVite,
  SiRedux,
  SiMui
} from 'react-icons/si';
import { motion, useInView } from 'framer-motion';

const Skills = ({ theme }) => {
  const isDark = theme === 'dark';
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const categories = [
    { id: 'all', name: 'All Skills', icon: FaLayerGroup },
    { id: 'frontend', name: 'Frontend Excellence', icon: FaCode },
    { id: 'backend', name: 'Backend & APIs', icon: FaServer },
    { id: 'database', name: 'Databases', icon: FaDatabase },
    { id: 'mobile', name: 'Mobile & Hybrid', icon: FaMobileAlt },
    { id: 'tools', name: 'DevOps & Tools', icon: FaTools },
  ];

  const skillItems = [
    // Frontend
    { name: 'React.js', category: 'frontend', icon: FaReact, color: '#61DAFB', level: 92, highlight: 'Advanced' },
    { name: 'Next.js', category: 'frontend', icon: SiNextdotjs, color: '#000000', level: 86, highlight: 'SSR & SSG' },
    { name: 'Tailwind CSS', category: 'frontend', icon: SiTailwindcss, color: '#06B6D4', level: 95, highlight: 'Primary' },
    { name: 'JavaScript (ES6+)', category: 'frontend', icon: SiJavascript, color: '#F7DF1E', level: 90, highlight: 'Proficient' },
    { name: 'TypeScript', category: 'frontend', icon: SiTypescript, color: '#3178C6', level: 80, highlight: 'Type-Safe' },
    { name: 'HTML5 & CSS3', category: 'frontend', icon: FaHtml5, color: '#E34F26', level: 94, highlight: 'Responsive' },
    { name: 'Material-UI', category: 'frontend', icon: SiMui, color: '#007FFF', level: 85, highlight: 'Design System' },
    { name: 'Bootstrap', category: 'frontend', icon: SiBootstrap, color: '#7952B3', level: 88, highlight: 'Grid Layouts' },
    { name: 'Redux / Context', category: 'frontend', icon: SiRedux, color: '#764ABC', level: 82, highlight: 'State Mgmt' },

    // Backend
    { name: 'Node.js', category: 'backend', icon: FaNodeJs, color: '#339933', level: 84, highlight: 'REST Servers' },
    { name: 'Express.js', category: 'backend', icon: SiExpress, color: '#68A063', level: 85, highlight: 'API Middleware' },
    { name: 'REST APIs (10k+/day)', category: 'backend', icon: FaServer, color: '#FF6B6B', level: 88, highlight: 'High Scale' },
    { name: 'JWT & RBAC Security', category: 'backend', icon: FaCheckCircle, color: '#A855F7', level: 86, highlight: 'Auth' },
    { name: 'Core Java', category: 'backend', icon: FaJava, color: '#F89820', level: 80, highlight: 'OOP & Logic' },
    { name: 'JSP / Servlets', category: 'backend', icon: FaServer, color: '#0284C7', level: 75, highlight: 'Enterprise' },

    // Database
    { name: 'MongoDB', category: 'database', icon: SiMongodb, color: '#47A248', level: 82, highlight: 'NoSQL MERN' },
    { name: 'MySQL', category: 'database', icon: SiMysql, color: '#4479A1', level: 85, highlight: 'Relational' },
    { name: 'PostgreSQL', category: 'database', icon: SiPostgresql, color: '#4169E1', level: 80, highlight: 'Complex Queries' },

    // Mobile
    { name: 'Ionic Framework', category: 'mobile', icon: SiIonic, color: '#3880FF', level: 85, highlight: 'Hybrid Apps' },
    { name: 'Capacitor', category: 'mobile', icon: FaMobileAlt, color: '#119EFF', level: 82, highlight: 'Native Bridge' },
    { name: 'Android Studio', category: 'mobile', icon: FaMobileAlt, color: '#3DDC84', level: 75, highlight: 'Builds & Emulation' },

    // Tools
    { name: 'Git & GitHub', category: 'tools', icon: FaGitAlt, color: '#F05032', level: 90, highlight: 'Version Control' },
    { name: 'Postman', category: 'tools', icon: SiPostman, color: '#FF6C37', level: 88, highlight: 'API Testing' },
    { name: 'Vite', category: 'tools', icon: SiVite, color: '#646CFF', level: 92, highlight: 'Build Tooling' },
    { name: 'VS Code', category: 'tools', icon: FaTools, color: '#007ACC', level: 94, highlight: 'Environment' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillItems
    : skillItems.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`py-20 md:py-28 relative overflow-hidden ${
        isDark
          ? 'bg-gradient-to-b from-[#070b14] via-[#0b0f19] to-[#0f172a]'
          : 'bg-gradient-to-b from-indigo-50/40 via-white to-slate-50'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping"></span>
            Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Languages, Frameworks &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Tools I Work With
            </span>
          </h2>
          <p className={`mt-4 text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Frontend-heavy expertise paired with robust backend and database capabilities
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                    : isDark
                      ? 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60 border border-gray-700'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm'
                }`}
              >
                <Icon className={isActive ? 'text-white' : 'text-indigo-400'} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.03, duration: 0.4 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className={`p-5 rounded-2xl border transition-all duration-300 group ${
                isDark
                  ? 'bg-gray-800/40 border-gray-700/60 hover:border-indigo-500/40 hover:bg-gray-800/80 backdrop-blur-xl'
                  : 'bg-white/90 border-gray-200/90 hover:border-indigo-300 hover:shadow-lg backdrop-blur-xl'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className="p-2.5 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${skill.color}15` }}
                >
                  <skill.icon style={{ color: skill.color }} />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {skill.highlight}
                </span>
              </div>

              <h4 className={`font-bold text-sm mb-1 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                {skill.name}
              </h4>

              {/* Progress bar */}
              <div className="mt-3">
                <div className="flex items-center justify-between text-[11px] font-semibold text-gray-400 mb-1">
                  <span>Proficiency</span>
                  <span className="text-indigo-400">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-gray-700/30 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.2 + index * 0.02 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Highlights Callout */}
        <div className={`mt-14 p-6 rounded-3xl border max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 ${
          isDark
            ? 'bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-slate-900 border-indigo-500/30'
            : 'bg-gradient-to-r from-indigo-50 via-purple-50 to-white border-indigo-200 shadow-md'
        }`}>
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold flex items-center justify-center md:justify-start gap-2">
              <span className="text-yellow-400">⚡</span> Full Stack Architectural Experience
            </h4>
            <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Experienced in designing clean MVC architecture, RESTful API endpoints, token authentication, and responsive mobile-first UI patterns.
            </p>
          </div>

          <a
            href="#projects"
            className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105 transition-all shrink-0"
          >
            See Them in Action
          </a>
        </div>

      </div>
    </section>
  );
};

export default Skills;
