import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiCode, FiMail, FiPhone, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-white mb-4"
            >
              Shah<span className="text-indigo-400">Fahad</span>
            </motion.h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              MERN Stack Developer crafting digital experiences with modern technologies and clean code.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="https://github.com/shahfahad22" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiGithub size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
              <a 
                href="mailto:shahfahadkpk02@gmail.com"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4 text-lg">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FiMail size={16} />
                <span className="text-sm">shahfahadkpk02@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FiPhone size={16} />
                <span className="text-sm">+92 344 9762513</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FiCode size={16} />
                <span className="text-sm">Available for freelance work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
<div className="border-t border-gray-800 pt-6">
  <div className="flex justify-center">
    
    {/* Copyright - Centered */}
    <div className="text-gray-400 text-sm text-center">
      <span>© {currentYear} Shah Fahad. All rights reserved.</span>
    </div>

  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;













