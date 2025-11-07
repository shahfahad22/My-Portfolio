// import React, { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { useInView } from 'framer-motion'
// import { useRef } from 'react'
// import { 
//   FiChevronLeft, 
//   FiChevronRight, 
//   FiStar, 
//   FiMessageSquare 
// } from 'react-icons/fi'

// const Testimonials = () => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, threshold: 0.2 })
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [direction, setDirection] = useState(0)

//   // Testimonials Data
//   const testimonials = [
//   {
//     id: 1,
//     initials: "MJ",
//     name: "Michael Johnson",
//     position: "CTO & Co-Founder",
//     company: "TechFlow Solutions",
//     text: "Working with Shah Fahad was an absolute pleasure. His expertise in React and modern frontend technologies helped us build a scalable and performant web application. He consistently delivered high-quality code and provided valuable insights throughout the development process. Would highly recommend!",
//     rating: 4
//   },
//   {
//     id: 2,
//     initials: "SR",
//     name: "Sarah Rodriguez",
//     position: "Product Manager",
//     company: "InnovateLabs",
//     text: "Shah Fahad transformed our vision into a beautiful, functional reality. His attention to detail and understanding of user experience principles resulted in an application that our users love. He was always responsive and met all deadlines with exceptional quality.",
//     rating: 4
//   },
//   {
//     id: 3,
//     initials: "DK",
//     name: "David Kim",
//     position: "Lead Developer",
//     company: "DigitalCraft Studios",
//     text: "I've had the pleasure of collaborating with Shah Fahad on multiple projects. His React skills are outstanding, and his ability to solve complex problems is impressive. He writes clean, maintainable code and is always willing to help team members. A true asset to any development team.",
//     rating: 5
//   },
//   {
//     id: 4,
//     initials: "EP",
//     name: "Emily Parker",
//     position: "UX Director",
//     company: "CreativeMinds Agency",
//     text: "Shah Fahad's frontend development skills are exceptional. He took our complex design requirements and implemented them flawlessly. His communication throughout the project was excellent, and he consistently went above and beyond to ensure the best possible outcome.",
//     rating: 4
//   },
//   {
//     id: 5,
//     initials: "AT",
//     name: "Alex Thompson",
//     position: "Startup Founder",
//     company: "Nexus Ventures",
//     text: "As a startup founder, finding reliable developers is crucial. Shah Fahad exceeded our expectations in every way. He built our MVP faster than anticipated and provided valuable technical guidance. His React expertise and problem-solving skills are top-notch.",
//     rating: 4
//   },

// ]

//   // Auto slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext()
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [currentIndex])

//   const handleNext = () => {
//     setDirection(1)
//     setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
//   }

//   const handlePrev = () => {
//     setDirection(-1)
//     setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
//   }

//   const goToSlide = (index) => {
//     setDirection(index > currentIndex ? 1 : -1)
//     setCurrentIndex(index)
//   }

//   // Fixed animation variants for mobile
//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? '100%' : '-100%',
//       opacity: 0,
//       scale: 0.95
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       scale: 1
//     },
//     exit: (direction) => ({
//       x: direction < 0 ? '100%' : '-100%',
//       opacity: 0,
//       scale: 0.95
//     })
//   }

//   return (
//     <section id="testimonials" ref={ref} className="py-20 bg-gray-800 overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-6">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8 }}
//           className="text-center "
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
//             What <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Clients Say</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
//           <p className="text-gray-400 max-w-2xl mx-auto text-lg">
//             Don't just take my word for it. Here's what my clients say about working with me.
//           </p>
//         </motion.div>

//         {/* Testimonials Carousel */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="relative max-w-6xl mx-auto"
//         >
//           {/* Carousel Container - Fixed height for mobile */}
//           <div className="relative h-[500px] sm:h-[550px] flex items-center justify-center">
//             <AnimatePresence mode="wait" custom={direction}>
//               <motion.div
//                 key={currentIndex}
//                 custom={direction}
//                 variants={slideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{
//                   x: { type: "spring", stiffness: 300, damping: 30 },
//                   opacity: { duration: 0.2 },
//                   scale: { duration: 0.3 }
//                 }}
//                 className="absolute w-full max-w-4xl px-4"
//               >
//                 <TestimonialCard 
//                   testimonial={testimonials[currentIndex]} 
//                   isActive={true} 
//                 />
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Navigation Controls - Moved Below Card */}
//           <div className="flex items-center justify-center space-x-4 sm:space-x-8 mt-6 sm:mt-8">
//             {/* Left Arrow */}
//             <button
//               onClick={handlePrev}
//               className="p-3 sm:p-4 bg-gray-900/80 cursor-pointer backdrop-blur-sm rounded-full border border-gray-600 text-white hover:bg-gray-800 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               aria-label="Previous testimonial"
//             >
//               <FiChevronLeft size={20} className="sm:w-6 sm:h-6" />
//             </button>

//             {/* Dots Indicator */}
//             <div className="flex justify-center space-x-2 sm:space-x-3">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                     index === currentIndex
//                       ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125'
//                       : 'bg-gray-600 hover:bg-gray-500'
//                   }`}
//                   aria-label={`Go to testimonial ${index + 1}`}
//                 />
//               ))}
//             </div>

//             {/* Right Arrow */}
//             <button
//               onClick={handleNext}
//               className="p-3 sm:p-4 bg-gray-900/80 backdrop-blur-sm rounded-full border cursor-pointer border-gray-600 text-white hover:bg-gray-800 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               aria-label="Next testimonial"
//             >
//               <FiChevronRight size={20} className="sm:w-6 sm:h-6" />
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// // Testimonial Card Component - Optimized for mobile
// const TestimonialCard = ({ testimonial, isActive = false }) => {
//   return (
//     <div className={`bg-gray-900 rounded-2xl p-6 sm:p-10 border-2 transition-all duration-500 ${
//       isActive 
//         ? 'border-blue-400/40 shadow-2xl shadow-blue-500/20' 
//         : 'border-gray-700'
//     }`}>
//       {/* Client Info - Moved to Top */}
//       <div className="flex items-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
//         {/* Avatar - Larger */}
//         <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-2xl">
//           {testimonial.initials}
//         </div>
        
//         {/* Client Details */}
//         <div className="flex-1 min-w-0">
//           <h4 className="text-white font-bold text-base sm:text-xl mb-1 truncate">{testimonial.name}</h4>
//           <p className="text-gray-400 text-xs sm:text-base mb-1 truncate">{testimonial.position}</p>
//           <p className="text-blue-400 text-xs sm:text-base font-semibold truncate">{testimonial.company}</p>
//         </div>
//       </div>

//       {/* Rating Stars - Moved below client info */}
//       <div className="flex justify-between items-center mb-4 sm:mb-6">
//         <div className="flex space-x-1">
//           {[...Array(testimonial.rating)].map((_, i) => (
//             <FiStar key={i} className="text-yellow-400 fill-current w-4 h-4 sm:w-5 sm:h-5" />
//           ))}
//         </div>
//         <FiMessageSquare className="text-blue-400 text-xl sm:text-2xl opacity-50" />
//       </div>

//       {/* Testimonial Text - Larger and better spacing */}
//       <p className="text-gray-300 leading-relaxed text-sm sm:text-lg mb-4 sm:mb-6 line-clamp-5">
//         {testimonial.text}
//       </p>

//       {/* Read More Button */}
//       {isActive && (
//         <button className="text-blue-400 hover:text-blue-300 text-sm sm:text-base font-semibold transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
//           Read More
//         </button>
//       )}
//     </div>
//   )
// }

// export default Testimonials