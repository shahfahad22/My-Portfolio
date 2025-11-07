import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare, FiExternalLink } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const ref = useRef(null)
  const formRef = useRef()
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'shahfahadkpk02@gmail.com',
        phone: '+923449762513',
        reply_to: formData.email
      }

      // Send email using EmailJS
      await emailjs.send(
        'service_ojviw8d', // Replace with your EmailJS service ID
        'template_jfud9ic', // Replace with your EmailJS template ID
        templateParams,
        'AJbiPDlqxJ6YL4Y07' // Replace with your EmailJS public key
      )

      setSubmitStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Success message auto hide after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
      
      // Error message auto hide after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={ref} className="py-12 md:py-20 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 px-2"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Touch</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4 md:mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-4">
            Ready to bring your next project to life? Let's discuss how we can work together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8 px-2"
          >
            {/* Intro */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 md:mb-4">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Ready to work together? Get in touch for your next project or schedule a consultation call.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4 md:space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <div className="p-2 sm:p-3 bg-blue-500/20 rounded-lg flex-shrink-0">
                  <FiMail className="text-blue-400 text-lg sm:text-xl" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">Email</h4>
                  <a 
                    href="mailto:shahfahadkpk02@gmail.com" 
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base break-all"
                  >
                    shahfahadkpk02@gmail.com
                  </a>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">I'll respond within 2-4 hours</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <div className="p-2 sm:p-3 bg-green-500/20 rounded-lg flex-shrink-0">
                  <FiPhone className="text-green-400 text-lg sm:text-xl" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">Phone</h4>
                  <a 
                    href="tel:+923449762513" 
                    className="text-green-400 hover:text-green-300 transition-colors text-sm sm:text-base"
                  >
                    +92 344 9762513
                  </a>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">Available for calls</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <div className="p-2 sm:p-3 bg-purple-500/20 rounded-lg flex-shrink-0">
                  <FiMapPin className="text-purple-400 text-lg sm:text-xl" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">Location</h4>
                  <p className="text-purple-400 text-sm sm:text-base">Available Worldwide (Remote)</p>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">Working remotely since 2025</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800/50 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-700 mx-2 sm:mx-0"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Send a Message</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-gray-300 mb-2 text-xs sm:text-sm font-medium">
                    First Name *
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full pl-9 pr-3 sm:pl-10 sm:pr-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-sm sm:text-base"
                      placeholder="First Name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-gray-300 mb-2 text-xs sm:text-sm font-medium">
                    Last Name *
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full pl-9 pr-3 sm:pl-10 sm:pr-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-sm sm:text-base"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 text-xs sm:text-sm font-medium">
                  Email Address *
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-9 pr-3 sm:pl-10 sm:pr-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-sm sm:text-base"
                    placeholder="Email@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2 text-xs sm:text-sm font-medium">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-sm sm:text-base"
                  placeholder="Enter your subject here..."
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 text-xs sm:text-sm font-medium">
                  Message *
                </label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-3 top-3 text-gray-500" size={16} />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full pl-9 pr-3 sm:pl-10 sm:pr-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Message"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex cursor-pointer items-center justify-center space-x-2 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:from-blue-400 disabled:to-purple-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              <div className="min-h-[40px] sm:min-h-[50px]">
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 sm:p-4 bg-green-500/10 border border-green-500/30 rounded-lg"
                  >
                    <p className="text-green-400 text-center text-xs sm:text-sm">
                      ✅ Message sent successfully! I'll get back to you within 2-4 hours.
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 sm:p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
                  >
                    <p className="text-red-400 text-center text-xs sm:text-sm">
                      ❌ Failed to send message. Please try again or contact me directly at shahfahadkpk02@gmail.com
                    </p>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact