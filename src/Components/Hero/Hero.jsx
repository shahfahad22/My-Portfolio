import React from "react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaComments, FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4
                 bg-gradient-to-b from-[#030A19] to-[#0a1a35] text-white relative pt-20 pb-8"
      style={{ minHeight: '100vh' }}
    >
      {/* Main Content Container */}
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center space-y-6 sm:space-y-8">
        
        {/* Intro Text - Fixed spacing */}
        <div className="mb-2 sm:mb-1">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-indigo-400 font-sans leading-tight">
            Hi, I'm a
          </p>
        </div>

        {/* Typewriter - Fixed height and spacing */}
        <div className="mb-4 sm:mb-1 min-h-[60px] sm:min-h-[80px] md:min-h-[100px] flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight">
            <Typewriter
              options={{
                strings: ["Frontend Developer", "MERN Stack Developer"],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 50,
              }}
            />
          </h1>
        </div>

        {/* Description - Now properly in 2 lines with increased width */}
        <div className="mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto px-4">
  <p className="text-gray-300 leading-relaxed text-base sm:text-lg md:text-xl text-center">
    A passionate <span className="text-indigo-400 font-semibold">Frontend Developer</span> with{" "}
    <span className="text-indigo-400 font-semibold">1+ years</span> of experience crafting
    interactive and responsive web interfaces.
  </p>
  <p className="text-gray-300 leading-relaxed text-base sm:text-lg md:text-xl mt-2 text-center">
    Skilled in React.js, Tailwind CSS, and modern JavaScript to build smooth, scalable, and
    user-friendly applications.
  </p>
</div>


        {/* Stats - Improved mobile layout */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 min-w-[100px] border border-gray-700/50">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-400">10+</h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Projects</p>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 min-w-[100px] border border-gray-700/50">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-400">90%</h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Satisfaction</p>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 min-w-[100px] border border-gray-700/50">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-400">24h</h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Response</p>
          </div>
        </div>

        {/* CTA Buttons - Better mobile spacing */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
          <button
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-purple-500 to-indigo-600 px-6 sm:px-8 py-3 rounded-full
                       font-semibold hover:scale-105 transition-transform text-sm sm:text-base cursor-pointer"
          >
            View My Work
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 sm:gap-6 text-xl sm:text-2xl">
          {[
            { href: "https://github.com/shahfahad22", icon: <FaGithub /> },
            { href: "https://www.linkedin.com/in/shah-fahad-4290a0251/?originalSubdomain=pk", icon: <FaLinkedin /> },
            { href: "https://wa.me/03449762513", icon: <FaComments /> },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-indigo-400 p-2 sm:p-3 rounded-full
                         text-indigo-400 hover:text-white
                         hover:bg-gradient-to-r from-purple-500 to-indigo-600
                         transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>


    </section>
  );
};

export default Hero;