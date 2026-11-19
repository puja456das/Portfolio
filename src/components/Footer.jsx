import React from 'react';
import {
  FaHeart,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaReact,
  FaFilePdf
} from 'react-icons/fa';
import { SiTailwindcss, SiVite } from 'react-icons/si';

const Footer = ({ theme, onOpenResume }) => {
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className={`py-12 border-t transition-colors relative overflow-hidden ${
      isDark
        ? 'bg-[#060911] border-gray-800 text-gray-400'
        : 'bg-white border-gray-200 text-gray-600'
    }`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-800/40">
          
          {/* Logo & Headline */}
          <div className="text-center md:text-left space-y-1">
            <a href="#home" className="inline-flex items-center gap-2">
              <span className={`text-2xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Puja<span className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">Das</span>
              </span>
            </a>
            <p className="text-xs max-w-sm">
              Software Developer • Frontend Specialist with Full Stack MERN Capabilities
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-indigo-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={onOpenResume}
              className="text-indigo-400 font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <FaFilePdf className="text-xs" /> Resume
            </button>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/puja456das"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border text-sm transition-all hover:scale-110 ${
                isDark ? 'border-gray-800 bg-gray-900 text-white hover:border-indigo-500' : 'border-gray-200 bg-gray-50 text-gray-800 shadow-sm'
              }`}
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/puja-das-190049221"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border text-sm transition-all hover:scale-110 ${
                isDark ? 'border-gray-800 bg-gray-900 text-blue-400 hover:border-blue-400' : 'border-gray-200 bg-gray-50 text-blue-600 shadow-sm'
              }`}
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:pujadas09262001@gmail.com"
              className={`p-2.5 rounded-xl border text-sm transition-all hover:scale-110 ${
                isDark ? 'border-gray-800 bg-gray-900 text-rose-400 hover:border-rose-400' : 'border-gray-200 bg-gray-50 text-rose-500 shadow-sm'
              }`}
              aria-label="Email Puja"
            >
              <FaEnvelope />
            </a>

            <button
              onClick={scrollToTop}
              className="ml-2 p-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-all hover:scale-105 shadow-md shadow-indigo-600/30 cursor-pointer"
              aria-label="Scroll to top"
            >
              <FaArrowUp className="text-xs" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs gap-3 text-center sm:text-left">
          <p className="flex items-center justify-center gap-1.5">
            Designed & Built with <FaHeart className="text-rose-500 animate-pulse" /> by <strong className="text-indigo-400">Puja Das</strong>
          </p>

          <div className="flex items-center justify-center gap-3 text-gray-500">
            <span className="flex items-center gap-1">
              <FaReact className="text-cyan-400" /> React
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <SiTailwindcss className="text-teal-400" /> Tailwind
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <SiVite className="text-purple-400" /> Vite
            </span>
            <span>•</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
