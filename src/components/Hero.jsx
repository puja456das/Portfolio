import React, { useEffect, useRef } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
  FaReact,
  FaNodeJs,
  FaCode,
  FaFilePdf,
  FaEye,
  FaRocket,
  FaDatabase,
  FaServer
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiExpress, SiMongodb } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

import profileImage from '../assets/banner.jpg';

const Hero = ({ theme, onOpenResume }) => {
  const isDark = theme === 'dark';
  const floatingRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (floatingRef.current) {
        const { left, top, width, height } = floatingRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 30;
        const y = (e.clientY - top - height / 2) / 30;
        floatingRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const techBadges = [
    { name: 'React.js', icon: FaReact, color: 'text-cyan-400', border: 'hover:border-cyan-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white dark:text-white', border: 'hover:border-white' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-emerald-400', border: 'hover:border-emerald-400' },
    { name: 'Express.js', icon: SiExpress, color: 'text-yellow-400', border: 'hover:border-yellow-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400', border: 'hover:border-teal-400' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', border: 'hover:border-green-500' },
  ];

  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden ${
        isDark 
          ? 'bg-gradient-to-b from-[#070b14] via-[#0b0f19] to-[#0f172a]' 
          : 'bg-gradient-to-b from-indigo-50/50 via-white to-slate-50'
      }`}
    >
      {/* Background Glows & Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-80 md:w-[450px] h-80 md:h-[450px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/15 to-pink-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-10 left-5 w-80 md:w-[400px] h-80 md:h-[400px] bg-gradient-to-br from-cyan-500/15 via-blue-600/15 to-purple-600/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle, #6366f1 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-semibold backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Software Developer Roles</span>
              <span className="text-gray-400">•</span>
              <span className="text-purple-400 font-bold">2.5+ Years Exp</span>
            </div>

            {/* Hero Main Heading */}
            <div className="space-y-2">
              <p className={`text-base md:text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Hello, I am
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Puja Das
                </span>
              </h1>
              
              <div className="flex items-center justify-center lg:justify-start gap-2 pt-2 text-2xl sm:text-3xl md:text-4xl font-bold">
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>A</span>
                <TypeAnimation
                  sequence={[
                    'Software Developer',
                    2200,
                    'Frontend Specialist (React/Next)',
                    2200,
                    'Full Stack Developer (MERN)',
                    2200,
                    'REST API & Backend Engineer',
                    2000,
                    'Mobile App Developer (Ionic)',
                    2000,
                  ]}
                  wrapper="span"
                  speed={45}
                  repeat={Infinity}
                  className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent"
                />
              </div>
            </div>

            {/* Description */}
            <p className={`text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Dedicated Software Developer with 2.5+ years of experience delivering pixel-perfect,
              responsive web and mobile apps. Specializing heavily in modern <strong className="text-indigo-400 font-semibold">React.js & Next.js frontend architecture</strong>,
              while actively engineering robust backend solutions with <strong className="text-purple-400 font-semibold">Node.js, Express.js, REST APIs (serving 10,000+ daily reqs)</strong>, and relational & NoSQL databases.
            </p>

            {/* Tech Badges */}
            <div className="pt-2">
              <p className={`text-xs uppercase tracking-widest font-bold mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Core Stack
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                {techBadges.map((tech, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-300 hover:scale-105 ${
                      isDark
                        ? 'bg-gray-800/60 border-gray-700/80 text-gray-200'
                        : 'bg-white/80 border-gray-200 text-gray-700 shadow-sm'
                    } ${tech.border}`}
                  >
                    <tech.icon className={`text-sm ${tech.color}`} />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-4">
              <button
                onClick={onOpenResume}
                className="group relative px-7 py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <FaFilePdf className="text-base" />
                <span>View Resume</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              </button>

              <a
                href="#projects"
                className={`px-6 py-3.5 rounded-2xl font-bold text-sm border-2 transition-all duration-300 hover:scale-105 flex items-center gap-2 ${
                  isDark
                    ? 'border-indigo-400/40 text-indigo-300 hover:bg-indigo-500/15 hover:border-indigo-400'
                    : 'border-indigo-600 text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                <FaRocket className="text-sm" />
                <span>Explore Projects</span>
              </a>

              <a
                href="#contact"
                className={`px-5 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                  isDark
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800/80'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="https://github.com/puja456das"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl border text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-gray-800/50 border-gray-700 text-gray-300 hover:text-white hover:border-indigo-500'
                    : 'bg-white border-gray-200 text-gray-700 hover:text-black hover:border-indigo-500 shadow-sm'
                }`}
                aria-label="Puja Das GitHub Profile"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/puja-das-190049221"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl border text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-gray-800/50 border-gray-700 text-blue-400 hover:text-blue-300 hover:border-blue-400'
                    : 'bg-white border-gray-200 text-blue-600 hover:text-blue-700 hover:border-blue-500 shadow-sm'
                }`}
                aria-label="Puja Das LinkedIn Profile"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:pujadas09262001@gmail.com"
                className={`p-3 rounded-xl border text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-gray-800/50 border-gray-700 text-rose-400 hover:text-rose-300 hover:border-rose-400'
                    : 'bg-white border-gray-200 text-rose-500 hover:text-rose-600 hover:border-rose-500 shadow-sm'
                }`}
                aria-label="Email Puja Das"
              >
                <FaEnvelope />
              </a>

              <span className={`text-xs pl-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                📍 Newtown, Kolkata, India
              </span>
            </div>

          </div>

          {/* Right Hero Visual (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div 
              ref={floatingRef} 
              className="relative transition-transform duration-200 ease-out"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Outer Decorative Rings */}
              <div className="absolute -inset-6 rounded-full border border-dashed border-indigo-500/20 animate-spin-slow pointer-events-none"></div>
              <div className="absolute -inset-12 rounded-full border border-purple-500/10 animate-spin-slow-reverse pointer-events-none"></div>

              {/* Main Avatar Card Frame */}
              <div className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 rounded-3xl p-1.5 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl shadow-indigo-500/30">
                <div className={`w-full h-full rounded-[22px] overflow-hidden relative ${isDark ? 'bg-[#0f172a]' : 'bg-white'}`}>
                  <img
                    src={profileImage}
                    alt="Puja Das - Software Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Overlay Name Tag */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 text-white">
                    <p className="text-sm font-bold flex items-center justify-between">
                      <span>Puja Das</span>
                      <span className="text-emerald-400 text-xs font-semibold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Online
                      </span>
                    </p>
                    <p className="text-[11px] text-gray-300">Software Developer (Frontend & Full Stack)</p>
                  </div>
                </div>

                {/* Floating Badge 1 - Top Left */}
                <div className="absolute -top-4 -left-4 px-3.5 py-2 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs shadow-xl shadow-purple-600/30 flex items-center gap-2 border border-white/20 animate-float">
                  <FaReact className="text-cyan-300 text-base animate-spin-slow" />
                  <span>React Specialist</span>
                </div>

                {/* Floating Badge 2 - Bottom Right */}
                <div className="absolute -bottom-4 -right-4 px-3.5 py-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-bold text-xs shadow-xl shadow-pink-600/30 flex items-center gap-2 border border-white/20 animate-float-delayed">
                  <FaServer className="text-yellow-300 text-sm" />
                  <span>MERN & REST APIs</span>
                </div>

                {/* Floating Badge 3 - Middle Right */}
                <div className="absolute top-1/2 -right-6 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white font-semibold text-[11px] backdrop-blur-md border border-indigo-500/30 shadow-lg hidden sm:flex items-center gap-1.5">
                  <span className="text-base">⚡</span> 10k+ Req/Day
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-14">
          <a
            href="#about"
            className={`group flex flex-col items-center gap-1 text-xs uppercase tracking-widest font-semibold ${
              isDark ? 'text-gray-400 hover:text-indigo-400' : 'text-gray-500 hover:text-indigo-600'
            } transition-colors`}
          >
            <span>Learn More</span>
            <FaArrowDown className="text-sm animate-bounce group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
