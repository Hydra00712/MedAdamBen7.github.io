import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const projects = [
    {
      title: 'Credit Scoring System',
      description: 'Spring Boot application for loan eligibility assessment and credit scoring with secure REST APIs and JWT authentication.',
      tech: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API', 'JWT'],
      icon: '💳',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Insurance Claims DApp',
      description: 'Blockchain-based claims management system using Hyperledger Besu for transparent and secure claim processing.',
      tech: ['Hyperledger Besu', 'Blockchain', 'Smart Contracts', 'Web3'],
      icon: '⛓️',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Ride Sharing Backend',
      description: 'Scalable Spring Boot backend for ride-sharing platform with user matching, payment processing, and real-time updates.',
      tech: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL', 'Redis'],
      icon: '🚗',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Task Management API',
      description: 'RESTful API for task management with authentication, authorization, and PostgreSQL database integration.',
      tech: ['Java', 'Spring Boot', 'REST API', 'PostgreSQL', 'Maven'],
      icon: '✅',
      color: 'from-orange-500 to-red-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="projects" className="py-32 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-24 gradient-text text-center leading-tight"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -12, boxShadow: '0 30px 60px rgba(0, 168, 255, 0.25)' }}
                className="group relative glass-effect rounded-2xl overflow-hidden transition-all duration-500"
              >
                {/* Gradient top accent */}
                <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />

                <div className="p-10 relative z-10 space-y-6">
                  <div className="flex items-start justify-between">
                    <motion.span
                      whileHover={{ scale: 1.2 }}
                      className="text-6xl flex-shrink-0"
                    >
                      {project.icon}
                    </motion.span>
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-3 group-hover:translate-x-0">
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2.5 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-lg text-cyan-400 transition-all duration-300"
                      >
                        <FiGithub size={22} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2.5 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-lg text-cyan-400 transition-all duration-300"
                      >
                        <FiExternalLink size={22} />
                      </motion.button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-base">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.08 }}
                        className="px-3 py-1.5 bg-cyan-500/15 rounded-full text-cyan-300 text-xs font-medium hover:bg-cyan-500/25 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

