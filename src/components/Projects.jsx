import React, { useState, useRef } from 'react';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaCheckCircle,
  FaTimes,
  FaLayerGroup,
  FaArrowRight
} from 'react-icons/fa';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const Projects = ({ theme }) => {
  const isDark = theme === 'dark';
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const filterTabs = [
    { id: 'all', label: 'All Projects', icon: FaLayerGroup },
    { id: 'fullstack', label: 'Full Stack & APIs', icon: FaServer },
    { id: 'frontend', label: 'Frontend Focused', icon: FaCode },
    { id: 'mobile', label: 'Mobile Apps (Ionic)', icon: FaMobileAlt },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce & EV Charging Platform',
      category: 'fullstack',
      badge: 'Full Stack (React + MySQL)',
      desc: 'High-performance e-commerce solution with integrated EV charging station comparison, installation booking, cart, checkout, and inventory management.',
      icon: '⚡',
      color: 'from-cyan-400 to-blue-600',
      tech: ['React.js', 'Next.js', 'MySQL', 'REST API', 'Tailwind CSS'],
      github: 'https://github.com/puja456das',
      features: [
        'Responsive product catalog with search, multi-faceted filtering, and sorting',
        'Cart, checkout, and order placement workflow with secure payment integration',
        'User authentication, profile management, and order history tracking',
        'Relational database architecture in MySQL for product inventory and orders'
      ],
      architecture: 'Client-server architecture using Next.js / React on the frontend consuming RESTful API endpoints with MySQL relational database storage.'
    },
    {
      id: 2,
      title: 'Job Application & Employer Portal',
      category: 'fullstack',
      badge: 'Full Stack (React + Node.js)',
      desc: 'Comprehensive employment portal connecting applicants with employers, featuring resume builder, job posting, and real-time application tracking.',
      icon: '💼',
      color: 'from-blue-500 to-indigo-600',
      tech: ['React.js', 'Node.js', 'Context API', 'Axios', 'REST API', 'Tailwind CSS'],
      github: 'https://github.com/puja456das',
      features: [
        'Distinct role-based dashboards for Applicants and Employers',
        'Job posting workflow, resume upload, applicant screening, and interview scheduling',
        'Application submission and real-time tracking with status notifications',
        'State management using React Context API and Axios for asynchronous API handling'
      ],
      architecture: 'Single Page Application (SPA) with Context API state management communicating with Node.js backend services.'
    },
    {
      id: 3,
      title: 'Transmogrify Enterprise MERN Suite',
      category: 'fullstack',
      badge: 'Enterprise MERN Stack',
      desc: 'Robust enterprise web application and API engine engineered at Transmogrify Global serving 10,000+ daily requests with JWT authentication.',
      icon: '🚀',
      color: 'from-purple-500 to-pink-600',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Auth', 'RBAC', 'Tailwind CSS'],
      github: 'https://github.com/puja456das',
      features: [
        'Engineered scalable REST APIs serving 10,000+ requests per day',
        'Implemented JWT token authentication and fine-grained Role-Based Access Control (RBAC)',
        'Built modern, responsive admin dashboards with Tailwind CSS and Material-UI',
        'Optimized MongoDB schemas for high concurrency and fast query retrieval'
      ],
      architecture: 'Full MERN Stack implementation with JWT authentication middleware, Express routers, MongoDB aggregation pipelines, and modular React views.'
    },
    {
      id: 4,
      title: 'Hospital Management System',
      category: 'frontend',
      badge: 'Healthcare Management',
      desc: 'Centralized hospital management system facilitating patient registration, appointment scheduling, doctor rosters, and billing administration.',
      icon: '🏥',
      color: 'from-red-400 to-rose-600',
      tech: ['React.js', 'Bootstrap', 'Tailwind CSS', 'REST API', 'Axios'],
      github: 'https://github.com/puja456das',
      features: [
        'Patient admission, medical record archiving, and digital prescription access',
        'Doctor scheduling, appointment slot booking, and consultation status',
        'Automated billing, invoicing, and medical inventory tracking modules',
        'Pixel-perfect responsive interface tested for desktop and clinical tablet usage'
      ],
      architecture: 'Component-driven React application with custom hooks for real-time patient data fetching and schedule syncing.'
    },
    {
      id: 5,
      title: 'School Management System',
      category: 'frontend',
      badge: 'EdTech Portal',
      desc: 'Multi-role educational administration portal featuring student admissions, attendance tracking, report cards, and parent-teacher communication.',
      icon: '🎓',
      color: 'from-teal-400 to-emerald-600',
      tech: ['React.js', 'Tailwind CSS', 'REST API', 'JavaScript ES6+'],
      github: 'https://github.com/puja456das',
      features: [
        'Student admissions workflow, automated attendance tracking, and fee records',
        'Teacher dashboard for grade entry, exam scheduling, and student progress reports',
        'Role-based views customized for Admin, Teacher, Student, and Parent logins',
        'Clean, accessible UI built with Tailwind CSS following design best practices'
      ],
      architecture: 'Modular React UI with dynamic route-guards based on user roles and REST API connectivity.'
    },
    {
      id: 6,
      title: 'Home Maid Helper Booking App',
      category: 'mobile',
      badge: 'Mobile App (Ionic)',
      desc: 'On-demand household service booking mobile application built with Ionic React and Capacitor, featuring helper profiles and live order tracking.',
      icon: '🧹',
      color: 'from-pink-500 to-rose-600',
      tech: ['Ionic Framework', 'React', 'Capacitor', 'PostgreSQL', 'Tailwind CSS'],
      github: 'https://github.com/puja456das',
      features: [
        'Cross-platform mobile application running smoothly on iOS and Android',
        'Helper service selection, flexible slot scheduling, and user profile management',
        'Integrated payment gateway and real-time service order tracking',
        'Capacitor native APIs for push notifications and device geolocation'
      ],
      architecture: 'Ionic React mobile frontend wrapped with Capacitor for native device capabilities backed by PostgreSQL database.'
    },
    {
      id: 7,
      title: 'Shuttle Booking & Tracking App',
      category: 'mobile',
      badge: 'Mobile App (Ionic)',
      desc: 'Commuter shuttle booking system featuring live route selection, seat reservations, PostgreSQL database, and booking history.',
      icon: '🚐',
      color: 'from-amber-400 to-orange-600',
      tech: ['Ionic Framework', 'React', 'PostgreSQL', 'Android Studio', 'Capacitor'],
      github: 'https://github.com/puja456das',
      features: [
        'Route selection, stops display, and interactive seat booking interface',
        'Real-time shuttle location tracking and arrival time estimations',
        'Booking history, ticket digital passes, and cancellation support',
        'Built and tested on Android Studio with smooth 60fps animations'
      ],
      architecture: 'Cross-platform mobile application integrating mapping, geolocation, and asynchronous booking transactions.'
    },
    {
      id: 8,
      title: 'Online Food Order & Delivery System',
      category: 'fullstack',
      badge: 'Full Stack Suite',
      desc: 'End-to-end food delivery platform with restaurant catalog, cart management, delivery partner tracking, and admin dashboard.',
      icon: '🍕',
      color: 'from-orange-500 to-red-600',
      tech: ['Java', 'JSP / Servlet', 'MySQL', 'React.js', 'REST API'],
      github: 'https://github.com/puja456das',
      features: [
        'Complete food ordering flow with restaurant menus, reviews, and dish customization',
        'Cart management, order placement, and live delivery status updates',
        'Dedicated admin panel for restaurant owners to update menus and orders',
        'Robust MySQL database integration with JDBC and RESTful controllers'
      ],
      architecture: 'Layered architecture combining backend business logic, relational MySQL queries, and dynamic web user interface.'
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`py-20 md:py-28 relative overflow-hidden ${
        isDark
          ? 'bg-gradient-to-b from-[#0f172a] via-[#0d1322] to-[#070b14]'
          : 'bg-gradient-to-b from-slate-50 via-white to-indigo-50/40'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping"></span>
            Featured Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Selected Projects &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-500 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <p className={`mt-4 text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Real applications spanning Frontend, Full Stack MERN systems, and Ionic mobile apps
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                    : isDark
                      ? 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60 border border-gray-700'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm'
                }`}
              >
                <Icon className={isActive ? 'text-white' : 'text-indigo-400'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`rounded-3xl border flex flex-col justify-between overflow-hidden transition-all duration-300 group shadow-lg ${
                isDark
                  ? 'bg-gray-800/40 border-gray-700/60 hover:border-indigo-500/40 backdrop-blur-xl'
                  : 'bg-white border-gray-200 hover:border-indigo-300 shadow-sm backdrop-blur-xl'
              }`}
            >
              {/* Card Header Banner */}
              <div className={`p-6 bg-gradient-to-r ${project.color} text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-4xl p-2 rounded-2xl bg-white/20 backdrop-blur-md shadow-inner">
                    {project.icon}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-black/30 backdrop-blur-md uppercase tracking-wider text-white border border-white/20">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className={`text-xl font-bold tracking-tight mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.desc}
                  </p>
                </div>

                {/* Tech Pills */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border ${
                          isDark
                            ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20'
                            : 'bg-indigo-50 text-indigo-700 border-indigo-100'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className={`pt-4 border-t flex items-center justify-between gap-3 ${
                  isDark ? 'border-gray-700/50' : 'border-gray-200'
                }`}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Architecture</span>
                    <FaArrowRight className="text-[10px]" />
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                      isDark
                        ? 'border-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-200'
                        : 'border-gray-300 bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 shadow-2xl border ${
                isDark
                  ? 'bg-[#0f172a] border-indigo-500/30 text-white'
                  : 'bg-white border-gray-200 text-gray-800'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{selectedProject.icon}</span>
                  <div>
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                      {selectedProject.badge}
                    </span>
                    <h3 className="text-2xl font-extrabold">{selectedProject.title}</h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className={`p-2 rounded-xl transition-colors ${
                    isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <FaTimes />
                </button>
              </div>

              {/* Description */}
              <p className={`text-sm sm:text-base leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {selectedProject.desc}
              </p>

              {/* Architecture Section */}
              <div className={`p-4 rounded-2xl border mb-6 text-xs sm:text-sm ${
                isDark ? 'bg-indigo-950/30 border-indigo-500/20 text-indigo-200' : 'bg-indigo-50 border-indigo-100 text-indigo-900'
              }`}>
                <h4 className="font-bold text-indigo-400 uppercase tracking-wider text-xs mb-1">
                  Architecture Overview:
                </h4>
                <p>{selectedProject.architecture}</p>
              </div>

              {/* Key Features Implemented */}
              <div className="mb-6">
                <h4 className="font-bold text-sm uppercase tracking-wider text-indigo-400 mb-3">
                  Key Features Implemented:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {selectedProject.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-emerald-400 shrink-0 mt-0.5 text-xs" />
                      <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Badges */}
              <div className="mb-6">
                <h4 className="font-bold text-sm uppercase tracking-wider text-indigo-400 mb-2">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-xl text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-700/40">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl font-bold text-xs bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg transition-all flex items-center gap-2"
                >
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
