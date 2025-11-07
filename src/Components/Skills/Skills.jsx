import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FiCode, 
  FiLayout, 
  FiSmartphone,
  FiDatabase,
  FiGitBranch,
  FiZap,
  FiCheck
} from 'react-icons/fi'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  // Frontend Skills Data
  const frontendSkills = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML5", level: 95, icon: FiLayout, color: "from-orange-500 to-red-500" },
        { name: "CSS3", level: 90, icon: FiLayout, color: "from-blue-500 to-blue-600" },
        { name: "JavaScript", level: 85, icon: FiCode, color: "from-yellow-400 to-yellow-500" },
        { name: "React.js", level: 80, icon: FiZap, color: "from-cyan-500 to-blue-500" },
        { name: "Tailwind CSS", level: 88, icon: FiLayout, color: "from-teal-400 to-cyan-500" },
        { name: "Bootstrap", level: 75, icon: FiLayout, color: "from-purple-500 to-pink-500" },
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 62, icon: FiGitBranch, color: "from-gray-500 to-gray-400" },
        { name: "Responsive Design", level: 90, icon: FiSmartphone, color: "from-green-500 to-emerald-500" },
        { name: "REST APIs", level: 78, icon: FiDatabase, color: "from-indigo-500 to-purple-500" },
        { name: "VS Code", level: 88, icon: FiCode, color: "from-blue-500 to-blue-600" },
        { name: "Figma", level: 70, icon: FiLayout, color: "from-pink-500 to-purple-500" },
        { name: "npm/yarn", level: 80, icon: FiZap, color: "from-red-500 to-red-600" },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Here are the technologies and tools I use to bring ideas to life. 
            I'm passionate about learning new technologies and improving my skills.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {frontendSkills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-400/30 transition-all duration-500"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <FiCode className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    className="group"
                  >
                    {/* Skill Header */}
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                          <skill.icon className="text-white text-lg" />
                        </div>
                        <span className="text-white font-semibold text-lg">{skill.name}</span>
                      </div>
                      <span className="text-blue-400 font-bold text-sm">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          delay: (categoryIndex * 0.3) + (skillIndex * 0.15), 
                          duration: 1.5, 
                          ease: "easeOut" 
                        }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        {/* Animated shine effect */}
                        <motion.div
                          animate={{ 
                            x: ["0%", "100%"]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear",
                            delay: (categoryIndex * 0.3) + (skillIndex * 0.15) + 1
                          }}
                          className="absolute top-0 left-0 w-4 h-full bg-white/20 skew-x-12"
                        />
                      </motion.div>
                    </div>

                    {/* Skill Level Indicator */}
                    <div className="flex justify-between items-center mt-2 text-xs text-gray-400">
                      <span>Beginner</span>
                      <span>Intermediate</span>
                      <span>Advanced</span>
                      <span>Expert</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          {/* <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">🚀 Always Learning & Growing</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I believe in continuous learning and staying updated with the latest web technologies. 
              Currently exploring <span className="text-blue-400 font-semibold">Next.js</span>, 
              <span className="text-green-400 font-semibold"> TypeScript</span>, and 
              <span className="text-yellow-400 font-semibold"> Three.js</span> to enhance my skills 
              and build even better web experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {["Next.js", "TypeScript", "Three.js", "GraphQL", "AWS", "Docker"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 1 + (index * 0.1) }}
                  className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-blue-400 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills