import React, { useState, useRef } from 'react';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaCheck,
  FaCopy,
  FaPaperPlane,
  FaComments,
  FaFilePdf
} from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const Contact = ({ theme, onOpenResume }) => {
  const isDark = theme === 'dark';
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('pujadas09262001@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+918927850682');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger mailto with formatted body
    const mailtoUrl = `mailto:pujadas09262001@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const contactCards = [
    {
      title: 'Email Address',
      value: 'pujadas09262001@gmail.com',
      icon: FaEnvelope,
      color: 'from-cyan-400 to-blue-500',
      action: 'copy',
      onAction: handleCopyEmail,
      isCopied: copiedEmail,
      link: 'mailto:pujadas09262001@gmail.com'
    },
    {
      title: 'Phone Number',
      value: '+91 8927850682',
      icon: FaPhoneAlt,
      color: 'from-emerald-400 to-teal-500',
      action: 'copy',
      onAction: handleCopyPhone,
      isCopied: copiedPhone,
      link: 'tel:+918927850682'
    },
    {
      title: 'WhatsApp Chat',
      value: 'Chat on WhatsApp',
      icon: FaWhatsapp,
      color: 'from-green-500 to-emerald-600',
      action: 'link',
      link: 'https://wa.me/918927850682'
    },
    {
      title: 'Current Location',
      value: 'Newtown, Kolkata, India',
      icon: FaMapMarkerAlt,
      color: 'from-purple-500 to-pink-500',
      action: 'link',
      link: 'https://maps.google.com/?q=Newtown+Kolkata'
    }
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`py-20 md:py-28 relative overflow-hidden ${
        isDark
          ? 'bg-gradient-to-b from-[#070b14] via-[#0b0f19] to-[#04060a]'
          : 'bg-gradient-to-b from-indigo-50/40 via-white to-slate-50'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping"></span>
            Let's Collaborate
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Get in Touch &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-500 bg-clip-text text-transparent">
              Start a Conversation
            </span>
          </h2>
          <p className={`mt-4 text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Open for full-time Software Developer roles, freelance projects, and exciting collaborations
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">
          
          {/* Left Cards & Profiles (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact info grid */}
            <div className="space-y-4">
              {contactCards.map((card, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className={`p-5 rounded-2xl border flex items-center justify-between gap-4 transition-all duration-300 ${
                    isDark
                      ? 'bg-gray-800/40 border-gray-700/60 hover:border-indigo-500/40 backdrop-blur-xl'
                      : 'bg-white border-gray-200 hover:border-indigo-300 shadow-sm backdrop-blur-xl'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${card.color} text-white flex items-center justify-center text-xl shadow-md shrink-0`}>
                      <card.icon />
                    </div>
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {card.title}
                      </p>
                      <a
                        href={card.link}
                        target={card.action === 'link' ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className={`text-sm font-bold hover:underline ${isDark ? 'text-white' : 'text-gray-800'}`}
                      >
                        {card.value}
                      </a>
                    </div>
                  </div>

                  {card.action === 'copy' && (
                    <button
                      onClick={card.onAction}
                      className={`p-2 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1 cursor-pointer ${
                        card.isCopied
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                          : isDark
                            ? 'bg-gray-700/50 text-gray-300 hover:bg-gray-700 border-gray-600'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-300'
                      }`}
                      title="Copy to clipboard"
                    >
                      {card.isCopied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                      <span className="hidden sm:inline">{card.isCopied ? 'Copied' : 'Copy'}</span>
                    </button>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Channels Box */}
            <div className={`p-6 rounded-3xl border ${
              isDark ? 'bg-gray-800/40 border-gray-700/60' : 'bg-white border-gray-200 shadow-sm'
            }`}>
              <h4 className={`text-sm font-bold uppercase tracking-wider text-indigo-400 mb-4`}>
                Official Profiles & Social
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/puja456das"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-2xl border flex items-center gap-2.5 transition-all hover:scale-105 ${
                    isDark
                      ? 'bg-gray-700/40 border-gray-600 text-white hover:border-indigo-400'
                      : 'bg-gray-50 border-gray-200 text-gray-800 hover:border-indigo-400'
                  }`}
                >
                  <FaGithub className="text-xl" />
                  <div className="text-left">
                    <p className="text-xs font-bold leading-none">GitHub</p>
                    <p className="text-[10px] text-gray-400">@puja456das</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/puja-das-190049221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-2xl border flex items-center gap-2.5 transition-all hover:scale-105 ${
                    isDark
                      ? 'bg-blue-950/30 border-blue-900 text-blue-300 hover:border-blue-400'
                      : 'bg-blue-50 border-blue-200 text-blue-700 hover:border-blue-400'
                  }`}
                >
                  <FaLinkedin className="text-xl text-blue-400" />
                  <div className="text-left">
                    <p className="text-xs font-bold leading-none">LinkedIn</p>
                    <p className="text-[10px] text-gray-400">in/puja-das</p>
                  </div>
                </a>
              </div>

              {/* Resume Trigger */}
              <button
                onClick={onOpenResume}
                className="w-full mt-4 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <FaFilePdf /> View & Download Full Resume
              </button>
            </div>

          </div>

          {/* Right Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className={`p-8 rounded-3xl border relative ${
              isDark
                ? 'bg-gray-800/40 border-gray-700/60 backdrop-blur-xl'
                : 'bg-white border-gray-200 shadow-md backdrop-blur-xl'
            }`}>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <FaComments className="text-xl" />
                </div>
                <div>
                  <h3 className={`text-2xl font-extrabold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Send a Message
                  </h3>
                  <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Have a project or job opportunity? Let's talk!
                  </p>
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-center space-y-3"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500 text-white flex items-center justify-center text-3xl shadow-lg shadow-emerald-500/40">
                    <FaCheck />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-400">Message Ready!</h4>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Your email client should have opened with the message. You can also reach me directly at <strong>pujadas09262001@gmail.com</strong>.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all ${
                          isDark
                            ? 'bg-gray-900/60 border-gray-700 text-white focus:border-indigo-500'
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-500'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all ${
                          isDark
                            ? 'bg-gray-900/60 border-gray-700 text-white focus:border-indigo-500'
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Opportunity / Job Offer"
                      className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all ${
                        isDark
                          ? 'bg-gray-900/60 border-gray-700 text-white focus:border-indigo-500'
                          : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-500'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, timeline, or position..."
                      className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all resize-none ${
                        isDark
                          ? 'bg-gray-900/60 border-gray-700 text-white focus:border-indigo-500'
                          : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-500'
                      }`}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.01] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
