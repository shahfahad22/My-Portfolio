import React, { useState, useEffect } from "react";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleSmoothScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  // Direct PDF download function
  const handleResumeDownload = () => {
    const pdfUrl = '/Shah_Fahad_Frontend_Developer.pdf'; // Correct file name
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Shah_Fahad_Frontend_Developer_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  // Navigation items data
  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "bg-[#030A19]/80 shadow-md" : "bg-[#030A19]/100"
      } text-white`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo - Fixed with explicit font family */}
        <h1 
          className="text-2xl font-bold cursor-pointer font-sans" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
        >
          Shah<span className="text-indigo-400">Fahad</span>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <li 
              key={item.id}
              onClick={() => handleSmoothScroll(item.id)}
              className="hover:text-indigo-400 transition-colors cursor-pointer font-medium py-2 px-1 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
          <li>
            <button 
              onClick={handleResumeDownload}
              className="cursor-pointer bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-2 rounded-lg flex items-center gap-2 hover:scale-105 transition-transform duration-300 font-medium shadow-lg hover:shadow-purple-500/25"
            >
              <FaDownload className="text-sm" />
              Resume
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none cursor-pointer p-1 hover:bg-white/10 rounded transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-[#040d24] border-t border-gray-800 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-2 py-4 px-6">
          {navItems.map((item) => (
            <li 
              key={item.id}
              onClick={() => handleSmoothScroll(item.id)}
              className="w-full text-center hover:text-indigo-400 cursor-pointer py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-300 font-medium border-b border-gray-800 last:border-b-0"
            >
              {item.label}
            </li>
          ))}
          <li className="w-full text-center pt-2">
            <button 
              onClick={handleResumeDownload}
              className="cursor-pointer bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 w-full max-w-xs mx-auto font-medium shadow-lg"
            >
              <FaDownload />
              Download Resume
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;