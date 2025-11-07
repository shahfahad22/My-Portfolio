import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { FiExternalLink, FiGithub, FiStar, FiCode } from "react-icons/fi";
import hunzavally from "../../assets/Images/hunzavally.png";
import userDictonary from "../../assets/Images/userdictonary.png"
import ratedsolution from "../../assets/Images/ratedsolution.png"
import passwordgenerator from "../../assets/Images/passwordgenerator.png"
import foodify from "../../assets/Images/foodify.png"
import foodiehub from "../../assets/Images/foodiehub.png"
import miniweb from "../../assets/Images/miniweb.png"
import gadgetsmobileshop from "../../assets/Images/gadgetsmobileshop.png"

// Lazy Image Component
const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className="relative">
      {/* Loading Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-700 animate-pulse rounded-lg">
          <div className="flex items-center justify-center h-full">
            <FiCode className="text-gray-400 text-2xl" />
          </div>
        </div>
      )}
      
      {/* Actual Image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      )}
    </div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState("all");

  // Projects Data
  const projects = [
    {
      id: 1,
      title: "Gadgets Mobile-Shop",
      description: "A responsive e-commerce web application for mobile gadgets built with React.js, Tailwind CSS, and Redux. It features dynamic product listing, cart management using Local Storage, and a smooth, interactive UI for browsing, adding, and managing products. Frontend-only project with real-time state management and polished design.",
      image: gadgetsmobileshop, 
      technologies: ["React.js", "Tailwind CSS", "Local Storage","React Router DOM"],
      liveDemo: "https://gadgetsmobileshop1.netlify.app/register",
      github: "https://github.com/shahfahad22/React-Projects-Collection/tree/main/11-Gadgets%20Mobile-Shop",
      featured: true,
      category: "react"
    },
    {
      id: 2,
      title: "Mini E-Commerce Website",
      description: "A responsive mini e-commerce web application built with React.js and styled using Tailwind CSS. The app fetches product data from APIs using Axios, allows users to browse products, add items to the cart, and view order summaries. Frontend-only project with dynamic data rendering and interactive UI.",
      image: miniweb,
      technologies: ["React.js", "Tailwind CSS", "Axios", "Local Storage","React Router DOM"],
      liveDemo: "https://dapper-frangipane-2eaf10.netlify.app/login",
      github: "https://github.com/shahfahad22/React-Projects-Collection/tree/main/12-Hackathon",
      featured: true,
      category: "react"
    }, 
    {
      id: 3,
      title: "Foodie Hub",
      description: "A dynamic food discovery and ordering web application built with React.js and Axios. Features include interactive product cards, responsive design, smooth navigation, and a user-friendly interface for exploring and selecting dishes. Live demo and full source code available.",
      image: foodiehub,
      technologies: ["React.js", "Axios","CSS 3","React Router DOM"],
      liveDemo: "https://foodiehub12.netlify.app/#product-cards",
      github: "https://github.com/shahfahad22/React-Projects-Collection/tree/main/02-FoodieHub",
      featured: true,
      category: "react"
    },
    {
      id: 4,
      title: "Foodify",
      description: "A modern food ordering web application built with React.js and enhanced with GSAP animations for smooth, interactive user experience. Features include dynamic menu browsing, responsive design, and seamless navigation for discovering and ordering dishes.",
      image:  foodify,
      technologies: ["React.js", "Axios", "React Router DOM" , "GSAP Animation","Talwind CSS"],
      liveDemo: "https://foodiehubibi.netlify.app/",
      github: "https://github.com/shahfahad22/React-Projects-Collection/tree/main/10-Foodify",
      featured: false,
      category: "react"
    },
    {
      id: 5,
      title: "Password Generator",
      description: "A responsive web application that allows users to generate secure, random passwords with customizable options like length, character types, and complexity. Built with React.js and Tailwind CSS for a smooth and user-friendly interface.",
      image: passwordgenerator,
      technologies: ["React JS", "Tailwind CSS"],
      liveDemo: "https://passwordgenerators0.netlify.app/",
      github: "https://github.com/shahfahad22/React-Projects-Collection/tree/main/06-Password%20Generator",
      featured: false,
      category: "react"
    },
    {
      id: 6,
      title: "Rated Solution",
      description: "An interactive web dashboard showcasing ratings and data visualizations with current and historical trends. Built using HTML, CSS, and GSAP animations for smooth transitions and dynamic user experience.",
      image: ratedsolution, 
      technologies: ["HTML5", "CSS3", "GSAP Animation"],
      liveDemo: "https://ratedsolution.netlify.app/",
      github: "https://github.com/shahfahad22/HTML-CSS-JavaScript-Code-AllProject/tree/main/20-Rated%20Solution",
      featured: false,
      category: "html-css-js"
    },
    {
      id: 7,
      title: "User Dictionary",
      description: "A responsive web application that allows users to search, save, and manage word definitions efficiently. Built with HTML, CSS, and JavaScript, featuring a clean UI, search functionality, and interactive word lists for easy learning.",
      image: userDictonary , 
      technologies: ["HTML5", "CSS3", "JavaScript"],
      liveDemo: "https://userdictonary1.netlify.app/",
      github: "https://github.com/shahfahad22/HTML-CSS-JavaScript-Code-AllProject/tree/main/18-User%20dictorany",
      featured: false,
      category: "html-css-js"
    },
    {
      id: 8,
      title: "Hunza Valley",
      description: "A beautiful tourism website showcasing the stunning Hunza Valley, its culture, festivals, hotels, and attractions. Fully responsive design with smooth navigation built using HTML, CSS, and JavaScript.",
      image: hunzavally,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      liveDemo: "https://fancy-gnome-ed5bd0.netlify.app/",
      github: "https://github.com/shahfahad22/HTML-CSS-JavaScript-Code-AllProject/tree/main/24-Hunza%20Vally",
      featured: false,
      category: "html-css-js",
    },
  ];

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const filters = [
    { key: "all", label: "All Projects", count: projects.length },
    {
      key: "react",
      label: "React Projects",
      count: projects.filter((p) => p.category === "react").length,
    },
    {
      key: "html-css-js",
      label: "HTML/CSS/JS",
      count: projects.filter((p) => p.category === "html-css-js").length,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my recent work across different technologies and domains
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full cursor-pointer font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeFilter === filter.key
                  ? "bg-gradient-to-r from-blue-700 to-purple-700 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600"
              }`}
            >
              <span>{filter.label}</span>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  activeFilter === filter.key ? "bg-white/20" : "bg-gray-600"
                }`}
              >
                {filter.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-400/30 transition-all duration-500 ${
                  project.featured ? "ring-2 ring-blue-400/20" : ""
                }`}
              >
                {/* Project Image/Header with Lazy Loading */}
                <div className="relative h-48 overflow-hidden bg-gray-700">
                  {/* Lazy Loaded Image */}
                  <LazyImage 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm font-semibold">
                        <FiStar size={14} />
                        <span>Featured</span>
                      </div>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.category === "react"
                          ? "bg-blue-500/20 text-blue-400 border border-blue-400/30"
                          : "bg-green-500/20 text-green-400 border border-green-400/30"
                      }`}
                    >
                      {project.category === "react" ? "React" : "HTML/CSS/JS"}
                    </div>
                  </div>

                  {/* Project Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700/50 text-blue-400 rounded-full text-xs border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg transition-all duration-300 text-sm font-semibold"
                    >
                      <FiExternalLink size={16} />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 rounded-lg transition-all duration-300 text-sm font-semibold"
                    >
                      <FiGithub size={16} />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <FiCode size={48} className="text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl text-gray-400 mb-2">No projects found</h3>
            <p className="text-gray-500">Try selecting a different filter</p>
          </motion.div>
        )}

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/shahfahad22"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 px-6 py-3 border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 rounded-lg transition-all duration-300"
          >
            <span>View All Projects on GitHub</span>
            <FiGithub size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;