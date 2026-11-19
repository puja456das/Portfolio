import React, { useRef } from 'react';
import {
  FaCode,
  FaServer,
  FaMobile,
  FaPaintBrush,
  FaTrophy,
  FaRocket,
  FaAward,
  FaLaptopCode,
  FaFilePdf,
  FaDownload,
  FaEye,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaShieldAlt
} from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const About = ({ theme, onOpenResume }) => {
  const isDark = theme === 'dark';
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const stats = [
    { label: 'Experience', value: '2.5+ Yrs', icon: FaRocket, color: 'from-indigo-500 to-blue-500', desc: 'Web & Mobile Apps' },
    { label: 'API Throughput', value: '10k+ /day', icon: FaServer, color: 'from-purple-500 to-pink-500', desc: 'REST APIs at Transmogrify' },
    { label: 'Projects Built', value: '15+', icon: FaLaptopCode, color: 'from-cyan-400 to-teal-500', desc: 'Full Stack & Frontend' },
    { label: 'Academic Merit', value: '85%', icon: FaGraduationCap, color: 'from-amber-400 to-orange-500', desc: 'B.Tech in CSE' },
  ];

  const pillars = [
    {
      icon: FaCode,
      title: 'Frontend Architecture',
      desc: 'Crafting responsive, high-performance user interfaces using React.js, Next.js, and Tailwind CSS with modern UI/UX principles.',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: FaServer,
      title: 'Full Stack & REST APIs',
      desc: 'Developing scalable backend systems with Node.js, Express.js, JWT authentication, RBAC, and database integration (MongoDB, MySQL, PostgreSQL).',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: FaMobile,
      title: 'Cross-Platform Mobile',
      desc: 'Engineering hybrid mobile apps using the Ionic Framework with Capacitor and React, creating fluid native experiences for iOS & Android.',
      color: 'from-emerald-400 to-teal-500',
    },
    {
      icon: FaShieldAlt,
      title: 'Maintainable Clean Code',
      desc: 'Writing modular, reusable, type-safe code with adherence to Agile methodologies, thorough testing, and Git version control.',
      color: 'from-amber-400 to-rose-500',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-20 md:py-28 relative overflow-hidden ${
        isDark
          ? 'bg-gradient-to-b from-[#0f172a] via-[#0d1322] to-[#070b14]'
          : 'bg-gradient-to-b from-slate-50 via-white to-indigo-50/40'
      }`}
    >
      {/* Decorative Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping"></span>
            About My Background
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Engineering Web Solutions with{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Precision & Creativity
            </span>
          </h2>
          <p className={`mt-4 text-base md:text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Bridging pixel-perfect visual design with robust, reliable backend architecture
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`p-6 rounded-3xl border transition-all duration-300 text-center ${
                isDark
                  ? 'bg-gray-800/40 border-gray-700/60 hover:border-indigo-500/40 backdrop-blur-xl shadow-lg'
                  : 'bg-white/80 border-gray-200/80 hover:border-indigo-300 shadow-md backdrop-blur-xl'
              }`}
            >
              <div className={`w-12 h-12 mx-auto rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white text-xl shadow-lg mb-3`}>
                <item.icon />
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
                {item.value}
              </p>
              <p className={`text-sm font-bold mt-1 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                {item.label}
              </p>
              <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Main Content Layout: Story + Resume Card */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Detailed Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className={`p-8 rounded-3xl border ${
              isDark
                ? 'bg-gray-800/40 border-gray-700/60 backdrop-blur-xl'
                : 'bg-white/90 border-gray-200 backdrop-blur-xl shadow-sm'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <FaLaptopCode className="text-xl" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Puja Das – Software Developer
                  </h3>
                  <p className="text-xs text-indigo-400 font-semibold">
                    Kolkata, West Bengal, India • 2.5+ Years Experience
                  </p>
                </div>
              </div>

              <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <p>
                  I am a passionate, results-oriented <strong>Software Developer</strong> who thrives on building complete digital products. 
                  My main focus and love lies in <strong>Frontend Engineering</strong>—crafting lightning-fast, accessible, and delightful interfaces with <strong>React.js, Next.js, and modern Tailwind CSS</strong>.
                </p>
                <p>
                  At the same time, I bring strong, practical <strong>Full Stack & Backend capabilities</strong>. At <span className="text-indigo-400 font-semibold">Transmogrify Global</span>, I built end-to-end MERN stack solutions and engineered REST APIs that reliably handle over <span className="font-semibold text-purple-400">10,000+ daily requests</span>, implemented JWT security, role-based access control (RBAC), and database schemas across MongoDB, MySQL, and PostgreSQL.
                </p>
                <p>
                  I also specialize in hybrid mobile development using the <strong>Ionic Framework</strong> and Capacitor, turning complex web architectures into fluid cross-platform mobile apps for Android and iOS.
                </p>
              </div>

              {/* Highlights Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-6 mt-6 border-t border-gray-700/30 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-400 shrink-0" />
                  <span>B.Tech in CSE (85% Score)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-400 shrink-0" />
                  <span>REST APIs (10,000+ reqs/day)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-400 shrink-0" />
                  <span>Full Stack MERN & Next.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-400 shrink-0" />
                  <span>Bronze Medalist - Math Olympiad</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Resume Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className={`p-8 rounded-3xl border relative overflow-hidden ${
              isDark
                ? 'bg-gradient-to-br from-indigo-950/60 via-purple-950/40 to-slate-900 border-indigo-500/30 shadow-2xl shadow-indigo-950/50'
                : 'bg-gradient-to-br from-indigo-50 via-purple-50 to-white border-indigo-200 shadow-xl'
            }`}>
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-indigo-500/20 to-pink-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/30">
                    <FaFilePdf className="text-2xl" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-extrabold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Official Resume
                    </h3>
                    <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Puja Das • PDF Format
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Verified
                </span>
              </div>

              <p className={`text-sm mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Explore my full professional journey, including detailed work experience at Transmogrify Global & Sambhav Consultants, projects, technical proficiencies, and education credentials.
              </p>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={onOpenResume}
                  className="w-full py-3.5 px-5 rounded-2xl font-bold text-sm bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
                >
                  <FaEye className="text-base group-hover:scale-110 transition-transform" />
                  <span>View Interactive Resume (CV)</span>
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="/resume.pdf"
                    download="Puja_Das_Resume.pdf"
                    className={`py-3 px-4 rounded-xl font-semibold text-xs border text-center transition-all flex items-center justify-center gap-1.5 ${
                      isDark
                        ? 'border-gray-700 bg-gray-800/80 hover:bg-gray-700 text-gray-200'
                        : 'border-gray-300 bg-white hover:bg-gray-50 text-gray-800 shadow-sm'
                    }`}
                  >
                    <FaDownload />
                    <span>Download PDF</span>
                  </a>

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`py-3 px-4 rounded-xl font-semibold text-xs border text-center transition-all flex items-center justify-center gap-1.5 ${
                      isDark
                        ? 'border-gray-700 bg-gray-800/80 hover:bg-gray-700 text-gray-200'
                        : 'border-gray-300 bg-white hover:bg-gray-50 text-gray-800 shadow-sm'
                    }`}
                  >
                    <FaExternalLinkAlt />
                    <span>Open in Tab</span>
                  </a>
                </div>
              </div>

              {/* Quick Info Box */}
              <div className={`mt-6 p-4 rounded-2xl border text-xs ${
                isDark ? 'bg-black/30 border-gray-700/50 text-gray-300' : 'bg-white/80 border-gray-200 text-gray-600'
              }`}>
                <div className="flex items-center justify-between py-1 border-b border-gray-700/30">
                  <span className="font-medium text-gray-400">Current Role</span>
                  <span className="font-semibold text-indigo-400">Software Developer</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-gray-700/30">
                  <span className="font-medium text-gray-400">Primary Focus</span>
                  <span className="font-semibold text-purple-400">React.js & Full Stack</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="font-medium text-gray-400">Education</span>
                  <span className="font-semibold text-cyan-400">B.Tech CSE (85%)</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Engineering */}
        <div>
          <h3 className={`text-2xl font-bold text-center mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Core Engineering Competencies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`p-6 rounded-3xl border transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-800/30 border-gray-700/50 hover:border-indigo-500/30 backdrop-blur-xl'
                    : 'bg-white border-gray-200 hover:border-indigo-300 shadow-sm backdrop-blur-xl'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${pillar.color} text-white flex items-center justify-center text-xl shadow-lg mb-4`}>
                  <pillar.icon />
                </div>
                <h4 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {pillar.title}
                </h4>
                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
