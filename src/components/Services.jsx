import React, { useRef } from 'react';
import {
  FaCode,
  FaServer,
  FaMobileAlt,
  FaDatabase,
  FaPalette,
  FaRocket,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const Services = ({ theme }) => {
  const isDark = theme === 'dark';
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const services = [
    {
      icon: FaCode,
      title: 'Frontend Web Development',
      badge: 'Specialty',
      desc: 'Building responsive, scalable web applications with React.js, Next.js, and Tailwind CSS. Focused on component modularity, fluid animations, and cross-browser perfection.',
      features: ['React.js & Next.js (SSR/SSG)', 'Tailwind CSS & Material-UI', 'State Management (Redux/Context)', 'Mobile-First Responsive Design'],
      color: 'from-cyan-400 to-blue-600',
    },
    {
      icon: FaServer,
      title: 'Full Stack & REST APIs',
      badge: 'Production-Proven',
      desc: 'Engineering high-throughput RESTful APIs with Node.js and Express.js capable of serving 10,000+ daily requests with JWT authentication and Role-Based Access Control.',
      features: ['MERN Stack Applications', 'Scalable REST API Architecture', 'JWT Authentication & Security', 'Third-Party API Integrations'],
      color: 'from-purple-500 to-indigo-600',
    },
    {
      icon: FaMobileAlt,
      title: 'Cross-Platform Mobile Apps',
      badge: 'iOS & Android',
      desc: 'Creating native-feel mobile applications with the Ionic Framework and Capacitor, utilizing React to write once and deploy smoothly on both iOS and Android platforms.',
      features: ['Ionic React Architecture', 'Capacitor Native Plugins', 'Live Geolocation & Tracking', 'App Store / Play Store Build Prep'],
      color: 'from-emerald-400 to-teal-600',
    },
    {
      icon: FaDatabase,
      title: 'Database Architecture',
      badge: 'Relational & NoSQL',
      desc: 'Designing and optimizing relational and document databases with MongoDB, MySQL, and PostgreSQL for maximum performance, data integrity, and fast indexing.',
      features: ['MongoDB Collections & Aggregations', 'MySQL Schema & Relational Design', 'PostgreSQL Data Pipelines', 'Data Normalization & Indexing'],
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: FaPalette,
      title: 'UI/UX Implementation',
      badge: 'Design to Code',
      desc: 'Converting Figma designs and wireframes into pixel-perfect, clean, maintainable code with strict adherence to accessibility, responsiveness, and design systems.',
      features: ['Figma to React Code', 'Modern Micro-Animations', 'Tailwind Utility Systems', 'Design Consistency Across Screens'],
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: FaRocket,
      title: 'Performance & Optimization',
      badge: 'Speed & SEO',
      desc: 'Auditing and optimizing existing web applications for maximum load speed, low bundle size, high Core Web Vitals scores, and clean SEO architecture.',
      features: ['Code Splitting & Lazy Loading', 'Asset & Image Optimization', 'Core Web Vitals Improvement', 'Cross-Browser Compatibility QA'],
      color: 'from-amber-400 to-orange-600',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`py-20 md:py-28 relative overflow-hidden ${
        isDark
          ? 'bg-gradient-to-b from-[#0f172a] via-[#0d1322] to-[#070b14]'
          : 'bg-gradient-to-b from-slate-50 via-white to-indigo-50/40'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping"></span>
            Services & Value
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            How I Can Help Your{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-500 bg-clip-text text-transparent">
              Team & Projects
            </span>
          </h2>
          <p className={`mt-4 text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Full-spectrum software development tailored to produce fast, beautiful, and scalable results
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
                isDark
                  ? 'bg-gray-800/40 border-gray-700/60 hover:border-indigo-500/40 backdrop-blur-xl shadow-lg'
                  : 'bg-white border-gray-200 hover:border-indigo-300 shadow-sm backdrop-blur-xl'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${svc.color} text-white flex items-center justify-center text-2xl shadow-lg`}>
                    <svc.icon />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-wider">
                    {svc.badge}
                  </span>
                </div>

                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {svc.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {svc.desc}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {svc.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs">
                      <FaCheckCircle className="text-emerald-400 shrink-0" />
                      <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-700/30">
                <a
                  href="#contact"
                  className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 transition-colors group"
                >
                  <span>Discuss Requirements</span>
                  <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
