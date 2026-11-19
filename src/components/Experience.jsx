import React, { useRef } from 'react';
import {
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaBuilding,
  FaAward,
  FaTrophy,
  FaCertificate,
  FaCheckCircle,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const Experience = ({ theme }) => {
  const isDark = theme === 'dark';
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const experiences = [
    {
      role: 'Software Developer',
      company: 'Transmogrify Global Private Limited',
      period: '06/2024 – Present',
      location: 'Kolkata, India',
      type: 'Full-Time',
      color: 'from-indigo-500 to-purple-600',
      highlights: [
        'Developed end-to-end full stack web applications using MERN stack (MongoDB, Express, React, Node.js).',
        'Designed, deployed, and scaled high-performance REST APIs serving 10,000+ requests per day.',
        'Created responsive, accessible front-end interfaces utilizing Tailwind CSS and Material-UI design systems.',
        'Implemented secure JWT-based authentication, authorization middleware, and role-based access control (RBAC).'
      ],
      skills: ['MERN Stack', 'React.js', 'Node.js', 'Express.js', 'REST APIs', 'Tailwind CSS', 'JWT & RBAC', 'MongoDB']
    },
    {
      role: 'Web Developer',
      company: 'Sambhav Consultants',
      period: '12/2023 – 05/2024',
      location: 'Kolkata, India',
      type: 'Contract / Full-Time',
      color: 'from-blue-500 to-cyan-600',
      highlights: [
        'Built modern, mobile-first responsive websites using HTML5, CSS3, JavaScript, and Bootstrap.',
        'Assisted in comprehensive debugging, unit testing, and cross-browser compatibility fixes.',
        'Managed codebase using Git, contributing clean commits and documentation in agile team standups.'
      ],
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Git & GitHub', 'Cross-Browser QA']
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'College of Engineering and Management, Kolaghat',
      period: '07/2019 – 06/2023',
      location: 'Kolaghat, West Bengal',
      grade: 'First Class with Distinction (85%)',
      color: 'from-purple-500 to-pink-500',
      desc: 'Comprehensive coursework covering Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Database Systems, Computer Networks, and Software Engineering.'
    },
    {
      degree: 'Higher Secondary (12th Class, Science Stream)',
      institution: 'Daspur Vivekananda High School',
      period: '2017 – 2019',
      location: 'West Bengal, India',
      grade: 'Score: 75%',
      color: 'from-blue-500 to-indigo-500',
      desc: 'Physics, Chemistry, Mathematics, and Computer Science foundation.'
    }
  ];

  const certifications = [
    {
      title: 'Bronze Medal in International Math Olympiad',
      issuer: 'International Math Olympiad (01/11/2016)',
      icon: FaTrophy,
      color: 'from-amber-400 to-orange-500',
      highlight: 'International Honor'
    },
    {
      title: 'Java Full Stack Development with Angular',
      issuer: 'Anudip Foundation (Cognizant Program, 2023)',
      icon: FaCertificate,
      color: 'from-indigo-500 to-purple-500',
      highlight: 'Full Stack Certified'
    },
    {
      title: 'Core Java Certification',
      issuer: 'Oracle Academy (2021 – 2022)',
      icon: FaCertificate,
      color: 'from-blue-500 to-cyan-500',
      highlight: 'Java Architecture'
    },
    {
      title: 'NPTEL Professional Certificate',
      issuer: 'NPTEL / IIT (2019)',
      icon: FaAward,
      color: 'from-emerald-500 to-teal-500',
      highlight: 'Verified Skill'
    }
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`py-20 md:py-28 relative overflow-hidden ${
        isDark
          ? 'bg-gradient-to-b from-[#070b14] via-[#0b0f19] to-[#0f172a]'
          : 'bg-gradient-to-b from-indigo-50/40 via-white to-slate-50'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping"></span>
            Career Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Work Experience &{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className={`mt-4 text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Professional journey building real software, backed by strong computer science academics
          </p>
        </div>

        {/* Experience & Education Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto mb-16">
          
          {/* Work Experience (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30">
                <FaBriefcase className="text-xl" />
              </div>
              <div>
                <h3 className={`text-2xl font-extrabold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Work Experience
                </h3>
                <p className="text-xs text-indigo-400 font-semibold">2.5+ Years of Industry Experience</p>
              </div>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
                    isDark
                      ? 'bg-gray-800/40 border-gray-700/60 hover:border-indigo-500/40 backdrop-blur-xl shadow-lg'
                      : 'bg-white border-gray-200 hover:border-indigo-300 shadow-sm backdrop-blur-xl'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h4 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {exp.role}
                      </h4>
                      <p className="text-sm font-semibold text-purple-400 flex items-center gap-1.5 mt-0.5">
                        <FaBuilding className="text-xs" /> {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {exp.period}
                      </span>
                      <span className={`text-[11px] flex items-center gap-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        <FaMapMarkerAlt className="text-xs text-rose-400" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 text-xs sm:text-sm my-4">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <FaCheckCircle className="text-emerald-400 shrink-0 mt-0.5 text-xs" />
                        <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-700/30">
                    {exp.skills.map((s, i) => (
                      <span
                        key={i}
                        className={`px-2.5 py-0.5 rounded-lg text-[11px] font-semibold border ${
                          isDark
                            ? 'bg-gray-700/40 text-gray-300 border-gray-600/50'
                            : 'bg-gray-100 text-gray-700 border-gray-200'
                        }`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-600/30">
                <FaGraduationCap className="text-xl" />
              </div>
              <div>
                <h3 className={`text-2xl font-extrabold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Education
                </h3>
                <p className="text-xs text-purple-400 font-semibold">Academic Excellence</p>
              </div>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className={`p-6 rounded-3xl border transition-all duration-300 ${
                    isDark
                      ? 'bg-gray-800/40 border-gray-700/60 hover:border-purple-500/40 backdrop-blur-xl shadow-lg'
                      : 'bg-white border-gray-200 hover:border-purple-300 shadow-sm backdrop-blur-xl'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      {edu.period}
                    </span>
                    <span className="text-xs font-bold text-emerald-400">
                      {edu.grade}
                    </span>
                  </div>

                  <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-semibold text-indigo-400 mt-1">
                    {edu.institution}
                  </p>
                  <p className={`text-[11px] mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {edu.location}
                  </p>
                  <p className={`text-xs sm:text-sm mt-3 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {edu.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Certifications & Honors Section */}
        <div>
          <h3 className={`text-2xl font-bold text-center mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Certifications & Honors
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {certifications.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-5 rounded-2xl border transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-800/30 border-gray-700/50 hover:border-indigo-500/40 backdrop-blur-xl'
                    : 'bg-white border-gray-200 hover:border-indigo-300 shadow-sm backdrop-blur-xl'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${item.color} text-white text-lg shadow-md`}>
                    <item.icon />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {item.highlight}
                  </span>
                </div>
                <h4 className={`font-bold text-sm mb-1 line-clamp-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h4>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {item.issuer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
