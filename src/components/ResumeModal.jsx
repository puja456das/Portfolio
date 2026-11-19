import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTimes,
  FaFilePdf,
  FaDownload,
  FaExternalLinkAlt,
  FaPrint,
  FaBriefcase,
  FaGraduationCap,
  FaAward,
  FaCode,
  FaServer,
  FaMobileAlt,
  FaDatabase,
  FaCheckCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaEye
} from 'react-icons/fa';

const ResumeModal = ({ isOpen, onClose, theme }) => {
  const [activeTab, setActiveTab] = useState('interactive'); // 'interactive' | 'pdf'
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={`relative w-full max-w-5xl h-[92vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl border ${
            isDark
              ? 'bg-[#0f172a] border-indigo-500/30 text-gray-100'
              : 'bg-white border-gray-200 text-gray-800'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar */}
          <div className={`flex flex-wrap items-center justify-between px-5 py-4 border-b gap-3 ${
            isDark ? 'border-gray-800 bg-[#131d36]' : 'border-gray-200 bg-gray-50'
          }`}>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-md">
                <FaFilePdf className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold flex items-center gap-2">
                  Puja Das <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 font-semibold">Resume / CV</span>
                </h3>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Software Developer • Frontend & Full Stack
                </p>
              </div>
            </div>

            {/* View switcher tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/10 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700">
              <button
                onClick={() => setActiveTab('interactive')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  activeTab === 'interactive'
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow'
                    : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                }`}
              >
                <FaEye className="text-xs" /> Interactive CV
              </button>
              <button
                onClick={() => setActiveTab('pdf')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  activeTab === 'pdf'
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow'
                    : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                }`}
              >
                <FaFilePdf className="text-xs" /> PDF Document
              </button>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              <a
                href="/resume.pdf"
                download="Puja_Das_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white shadow transition-all hover:scale-105"
                title="Download PDF"
              >
                <FaDownload className="text-xs" />
                <span className="hidden sm:inline">Download</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                  isDark
                    ? 'border-gray-700 text-gray-300 hover:bg-gray-800'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
                title="Open in new tab"
              >
                <FaExternalLinkAlt className="text-xs" />
                <span className="hidden sm:inline">New Tab</span>
              </a>
              <button
                onClick={onClose}
                className={`p-2 rounded-lg transition-colors ${
                  isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-200 text-gray-600'
                }`}
                aria-label="Close modal"
              >
                <FaTimes className="text-base" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar">
            {activeTab === 'interactive' ? (
              <div className="max-w-4xl mx-auto space-y-6">
                {/* Header Card */}
                <div className={`p-6 rounded-2xl border ${
                  isDark
                    ? 'bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-slate-900 border-indigo-500/20'
                    : 'bg-gradient-to-r from-indigo-50 via-purple-50 to-white border-indigo-100'
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h1 className="text-3xl font-extrabold tracking-tight">
                        Puja Das
                      </h1>
                      <p className="text-base font-semibold text-indigo-400 mt-1">
                        Software Developer <span className="text-gray-400 font-normal">| Frontend Specialist & MERN Full Stack</span>
                      </p>
                      <div className="flex flex-wrap gap-y-1.5 gap-x-4 mt-3 text-xs text-gray-500 dark:text-gray-300">
                        <span className="flex items-center gap-1.5">
                          <FaEnvelope className="text-indigo-400" />
                          <a href="mailto:pujadas09262001@gmail.com" className="hover:underline">pujadas09262001@gmail.com</a>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FaPhoneAlt className="text-indigo-400" />
                          <a href="tel:+918927850682" className="hover:underline">+91 8927850682</a>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FaMapMarkerAlt className="text-indigo-400" />
                          Newtown, Kolkata, West Bengal, India
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-3 mt-3 text-xs">
                        <a
                          href="https://github.com/puja456das"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-semibold"
                        >
                          <FaGithub /> github.com/puja456das
                        </a>
                        <a
                          href="https://linkedin.com/in/puja-das-190049221"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-blue-400 hover:text-blue-300 font-semibold"
                        >
                          <FaLinkedin /> linkedin.com/in/puja-das-190049221
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 shrink-0">
                      <div className="px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-center">
                        <p className="text-lg font-bold text-indigo-400">2.5+ Years</p>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Professional Exp.</p>
                      </div>
                      <div className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center">
                        <p className="text-lg font-bold text-purple-400">10,000+ Req/day</p>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">REST API Load</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Summary */}
                <div className={`p-5 rounded-2xl border ${
                  isDark ? 'bg-gray-800/30 border-gray-700/60' : 'bg-gray-50 border-gray-200'
                }`}>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400 mb-2 flex items-center gap-2">
                    <FaCheckCircle className="text-xs" /> Professional Summary
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    Dedicated Software Developer with 2.5+ years of experience in web and mobile app development.
                    Proficient in building responsive, scalable applications with a strong emphasis on modern UI/UX,
                    clean code, and maintainability. While deeply specialized in high-performance frontend engineering
                    (React.js, Next.js, Tailwind CSS), also possessing proven full stack capabilities in Node.js, Express.js,
                    REST APIs serving 10,000+ requests per day, JWT authentication, and databases (MongoDB, MySQL, PostgreSQL).
                  </p>
                </div>

                {/* Experience */}
                <div className={`p-5 rounded-2xl border ${
                  isDark ? 'bg-gray-800/30 border-gray-700/60' : 'bg-gray-50 border-gray-200'
                }`}>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400 mb-4 flex items-center gap-2">
                    <FaBriefcase className="text-xs" /> Professional Experience
                  </h4>
                  <div className="space-y-6">
                    {/* Role 1 */}
                    <div className="relative pl-4 border-l-2 border-indigo-500">
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                        <h5 className="font-bold text-base text-gray-900 dark:text-white">
                          Software Developer
                        </h5>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400">
                          06/2024 – Present
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-purple-400 mb-2">
                        Transmogrify Global Private Limited <span className="text-gray-500 text-xs font-normal">• Kolkata, India</span>
                      </p>
                      <ul className="list-disc list-inside space-y-1.5 text-xs text-gray-600 dark:text-gray-300">
                        <li>Developed end-to-end web applications using MERN stack (MongoDB, Express, React, Node.js).</li>
                        <li>Designed and implemented REST APIs serving 10,000+ requests per day with high reliability.</li>
                        <li>Created responsive front-end interfaces with Tailwind CSS and Material-UI.</li>
                        <li>Implemented JWT-based authentication and role-based access control (RBAC).</li>
                      </ul>
                    </div>

                    {/* Role 2 */}
                    <div className="relative pl-4 border-l-2 border-gray-400 dark:border-gray-600">
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                        <h5 className="font-bold text-base text-gray-900 dark:text-white">
                          Web Developer
                        </h5>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-500/10 text-gray-400">
                          12/2023 – 05/2024
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-purple-400 mb-2">
                        Sambhav Consultants <span className="text-gray-500 text-xs font-normal">• Kolkata, India</span>
                      </p>
                      <ul className="list-disc list-inside space-y-1.5 text-xs text-gray-600 dark:text-gray-300">
                        <li>Built responsive websites using HTML, CSS, JavaScript, and Bootstrap.</li>
                        <li>Assisted in debugging, testing, and cross-browser compatibility fixes across devices.</li>
                        <li>Managed codebase using Git and documented project milestones in agile sprints.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className={`p-5 rounded-2xl border ${
                  isDark ? 'bg-gray-800/30 border-gray-700/60' : 'bg-gray-50 border-gray-200'
                }`}>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-2">
                    <FaCode className="text-xs" /> Technical Skills
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-indigo-500/5 border border-indigo-500/10">
                      <p className="font-bold text-indigo-400 mb-1 flex items-center gap-1.5">
                        <FaCode /> Frontend Technologies
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        React.js, Next.js, HTML5, CSS3, Tailwind CSS, Bootstrap, Material-UI, JavaScript (ES6+), Core Java
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-purple-500/5 border border-purple-500/10">
                      <p className="font-bold text-purple-400 mb-1 flex items-center gap-1.5">
                        <FaServer /> Backend & APIs
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Node.js, Express.js, RESTful API Development, JWT Authentication, RBAC, JSP/Servlet
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/10">
                      <p className="font-bold text-cyan-400 mb-1 flex items-center gap-1.5">
                        <FaDatabase /> Databases
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        MySQL, MongoDB, PostgreSQL
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                      <p className="font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
                        <FaMobileAlt /> Mobile & Tools
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Ionic Framework, Capacitor, Git, GitHub, VS Code, Postman, XAMPP, Android Studio
                      </p>
                    </div>
                  </div>
                </div>

                {/* Projects Highlight */}
                <div className={`p-5 rounded-2xl border ${
                  isDark ? 'bg-gray-800/30 border-gray-700/60' : 'bg-gray-50 border-gray-200'
                }`}>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-2">
                    <FaAward className="text-xs" /> Featured Projects
                  </h4>
                  <div className="space-y-3 text-xs">
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">
                        E-Commerce & EV Charging Platform <span className="text-gray-500 font-normal">| React.js, Next.js, MySQL, REST API</span>
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Responsive UI, REST APIs for product catalog, cart, checkout, JWT auth, and MySQL inventory management.
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">
                        Job Application Portal <span className="text-gray-500 font-normal">| React.js, Context API, Axios, REST API</span>
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Separate applicant & employer dashboards, job postings, application submissions, and role-based access.
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">
                        Mobile Apps (Ionic Framework) <span className="text-gray-500 font-normal">| Ionic, React, PostgreSQL, Capacitor</span>
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Home Maid Helper Booking App & Shuttle Booking App with route tracking and booking history.
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">
                        Hospital & School Management Systems <span className="text-gray-500 font-normal">| React.js, Tailwind, REST APIs</span>
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Patient appointments, student admissions, attendance, fees, and multi-tier role access.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education & Certifications */}
                <div className={`p-5 rounded-2xl border ${
                  isDark ? 'bg-gray-800/30 border-gray-700/60' : 'bg-gray-50 border-gray-200'
                }`}>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-2">
                    <FaGraduationCap className="text-xs" /> Education & Achievements
                  </h4>
                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">
                          B.Tech in Computer Science and Engineering (85%)
                        </p>
                        <p className="text-gray-500">College of Engineering and Management, Kolaghat</p>
                      </div>
                      <span className="text-gray-400 font-medium">07/2019 – 06/2023</span>
                    </div>

                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">
                          12th Class, Science Stream (75%)
                        </p>
                        <p className="text-gray-500">Daspur Vivekananda High School</p>
                      </div>
                      <span className="text-gray-400 font-medium">2017 – 2019</span>
                    </div>

                    <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                      <p className="font-semibold text-indigo-400">Certifications & Honors:</p>
                      <ul className="list-disc list-inside mt-1 space-y-0.5 text-gray-600 dark:text-gray-300">
                        <li>Bronze Medal in International Math Olympiad (2016)</li>
                        <li>Java Full Stack Development with Angular – Anudip Foundation (2023)</li>
                        <li>Core Java – Oracle Academy (2021 – 2022)</li>
                        <li>NPTEL Certificate (2019)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full min-h-[65vh] flex flex-col items-center justify-center">
                <iframe
                  src="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
                  className="w-full h-full min-h-[65vh] rounded-xl border border-gray-300 dark:border-gray-700 shadow-inner"
                  title="Puja Das Resume PDF"
                />
              </div>
            )}
          </div>

          {/* Bottom Bar */}
          <div className={`px-6 py-3 border-t flex flex-wrap items-center justify-between text-xs gap-3 ${
            isDark ? 'border-gray-800 bg-[#131d36] text-gray-400' : 'border-gray-200 bg-gray-50 text-gray-600'
          }`}>
            <p className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Verified Resume • Updated 2026
            </p>
            <div className="flex items-center gap-3">
              <a
                href="/resume.pdf"
                download="Puja_Das_Resume.pdf"
                className="font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
              >
                <FaDownload /> Download Original PDF
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
