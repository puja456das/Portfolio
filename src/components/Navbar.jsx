import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun, FaCode, FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = ({ toggleTheme, theme, onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const isDark = theme === 'dark';

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? isDark
            ? 'bg-[#0b0f19]/90 backdrop-blur-xl shadow-xl shadow-indigo-950/20 border-b border-indigo-500/20 py-3' 
            : 'bg-white/90 backdrop-blur-xl shadow-md border-b border-gray-200/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a 
            href="#home" 
            className="group flex items-center gap-2.5 transition-transform duration-300 hover:scale-105"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-[1.5px] shadow-lg shadow-indigo-500/25">
              <div className={`w-full h-full rounded-[10px] ${isDark ? 'bg-[#0b0f19]' : 'bg-white'} flex items-center justify-center font-mono font-bold text-sm bg-clip-text text-transparent bg-gradient-to-tr from-indigo-400 to-pink-500`}>
                &lt;PD /&gt;
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Puja<span className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">Das</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-semibold -mt-1">
                Software Dev
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isDark 
                    ? 'text-gray-300 hover:text-white hover:bg-indigo-500/10' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-indigo-50'
                } group`}
              >
                {link.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-pink-500 transition-all duration-300 group-hover:w-3/5 rounded-full"></span>
              </a>
            ))}

            {/* Resume Button in Navbar */}
            <button
              onClick={onOpenResume}
              className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-200"
            >
              <FaFilePdf className="text-xs" />
              Resume
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className={`ml-2 p-2.5 rounded-xl transition-all duration-300 hover:scale-110 ${
                isDark 
                  ? 'bg-gray-800/80 text-yellow-400 hover:bg-gray-700 border border-gray-700 shadow-sm' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {isDark ? (
                <FaSun size={16} />
              ) : (
                <FaMoon size={16} />
              )}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-sm flex items-center gap-1"
            >
              <FaFilePdf /> CV
            </button>

            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className={`p-2 rounded-lg transition-all ${
                isDark 
                  ? 'bg-gray-800 text-yellow-400 border border-gray-700' 
                  : 'bg-gray-100 text-gray-800 border border-gray-200'
              }`}
            >
              {isDark ? <FaSun size={15} /> : <FaMoon size={15} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all ${
                isDark 
                  ? 'text-gray-200 hover:bg-gray-800' 
                  : 'text-gray-800 hover:bg-gray-100'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-[500px] opacity-100 border-b' : 'max-h-0 opacity-0'
      } ${
        isDark 
          ? 'bg-[#0b0f19]/95 backdrop-blur-2xl border-indigo-500/20' 
          : 'bg-white/95 backdrop-blur-2xl border-gray-200'
      }`}>
        <div className="container mx-auto px-4 py-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                isDark 
                  ? 'text-gray-300 hover:text-white hover:bg-indigo-500/15' 
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              {link.name}
            </a>
          ))}

          <div className="pt-3 border-t border-gray-700/40 flex items-center justify-between">
            <button
              onClick={() => {
                handleLinkClick();
                onOpenResume();
              }}
              className="w-full py-2.5 rounded-xl text-center font-bold text-sm bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg flex items-center justify-center gap-2"
            >
              <FaFilePdf /> View & Download Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
