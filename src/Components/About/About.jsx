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
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-16 bg-[#08152b] text-white"
    >
      {/* Profile Picture with Lazy Loading */}
      <div ref={imageRef} className="md:w-1/3 flex justify-center mb-8 md:mb-0 relative">
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

      {/* Gradient Line */}
      <div
        ref={lineRef}
        className="w-40 md:w-1 h-1 md:h-98 bg-gradient-to-r md:bg-gradient-to-b from-purple-500 to-indigo-600 mb-8 md:mb-0 md:mx-8"
      ></div>

      {/* Text Content */}
      <div ref={textRef} className="md:w-2/3 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">
          About Me
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-6">
          Frontend Developer focused on creating seamless, responsive, and
          visually appealing user experiences.
        </p>

        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          The Developer Behind the Design
        </h3>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
          I'm <span className="text-indigo-400 font-medium">Shah Fahad</span>, a passionate
          Frontend Developer with <span className="text-indigo-400 font-medium">1+ years</span> of
          experience building modern and interactive web applications.
        </p>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
          My focus is on writing scalable, maintainable code while paying close attention
          to design detail and performance.
        </p>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Beyond coding, I'm constantly learning and exploring new technologies to
          improve my craft.
        </p>
      </div>
    </section>
  );
};

export default About;