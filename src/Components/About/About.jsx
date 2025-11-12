import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProfilePic from "../../assets/Images/profile.jpeg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const lineRef = useRef(null);
  const textRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageInView, setImageInView] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    // Intersection Observer for image
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    // GSAP Animations
    gsap.fromTo(
      lineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: "left center",
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      }
    );

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-4 py-16
                 bg-gradient-to-b  bg-[#08152b] text-white"
    >
      {/* Main Content Container - Same width as Hero section */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0">
        
        {/* Left Column - Profile Image */}
        <div ref={imageRef} className="md:w-1/3 flex justify-center relative">
          {/* Loading Skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 animate-pulse flex items-center justify-center z-10">
              <div className="w-8 h-8 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          {/* Animated Background Glow */}
          <div className="absolute inset-0 w-48 h-48 md:w-64 md:h-64 rounded-full 
                        bg-indigo-500 blur-2xl opacity-30 animate-pulse"></div>

          {/* Actual Image */}
          {imageInView && (
            <img
              src={ProfilePic}    
              alt="Shah Fahad - Frontend Developer"
              className={`relative w-48 h-48 md:w-64 md:h-64 rounded-full 
                       border-4 border-indigo-400 shadow-[0_0_25px_rgba(79,70,229,0.6)] 
                       object-cover transition-all duration-700 ${
                         imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                       }`}
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
            />
          )}
        </div>

        {/* Middle Column - Gradient Line */}
        <div className="hidden md:flex justify-center items-center mx-8">
          <div
            ref={lineRef}
            className="w-1 h-64 bg-gradient-to-b from-purple-500 to-indigo-600"
          ></div>
        </div>

        {/* Mobile Gradient Line */}
        <div className="md:hidden w-40 h-1 flex justify-center">
          <div
            ref={lineRef}
            className="w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-600"
          ></div>
        </div>

        {/* Right Column - Text Content */}
        <div ref={textRef} className="md:w-2/3 text-center md:text-left px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-4 sm:mb-6">
            About Me
          </h2>
          
          <p className="text-gray-300 text-lg sm:text-xl mb-6 leading-relaxed">
            Frontend Developer focused on creating seamless, responsive, and
            visually appealing user experiences.
          </p>

          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-white">
            The Developer Behind the Design
          </h3>
          
          <div className="space-y-4 sm:space-y-6">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              I'm <span className="text-indigo-400 font-medium">Shah Fahad</span>, a passionate
              Frontend Developer with <span className="text-indigo-400 font-medium">1+ years</span> of
              experience building modern and interactive web applications.
            </p>
            
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              My focus is on writing scalable, maintainable code while paying close attention
              to design detail and performance.
            </p>
            
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Beyond coding, I'm constantly learning and exploring new technologies to
              improve my craft.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;