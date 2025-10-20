import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Crédit Agricole du Maroc',
      period: '2024',
      description: 'Developed full-stack banking application with loan eligibility checking. Implemented JWT authentication and TOTP multi-factor authorization. Containerized environments using Docker for consistent deployment.',
      highlights: ['JWT Authentication', 'TOTP MFA', 'Docker', 'Agile', 'Git'],
      icon: '🏦',
    },
    {
      title: 'Web Development Intern',
      company: 'Coliz',
      period: '2023',
      description: 'Built and maintained frontend components using HTML, CSS, and JavaScript. Helped implement new website features and UI improvements. Participated in code reviews and Git version control.',
      highlights: ['HTML/CSS/JS', 'UI/UX', 'Code Review', 'Git'],
      icon: '🌐',
    },
    {
      title: 'Technical Support Intern',
      company: 'MaExpertiseService',
      period: '2022',
      description: 'Learned corporate IT operations and professional workplace practices. Gained experience with support workflows and communication.',
      highlights: ['IT Operations', 'Support', 'Communication'],
      icon: '🛠️',
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="experience" className="py-32 px-6 sm:px-8 lg:px-12">
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
            Experience
          </motion.h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 12, boxShadow: '0 20px 50px rgba(0, 168, 255, 0.2)' }}
                className="glass-effect p-10 rounded-2xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{exp.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-3">
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <span className="text-cyan-400 text-xs font-semibold bg-cyan-500/10 px-4 py-2 rounded-full w-fit">{exp.period}</span>
                    </div>
                    <p className="text-cyan-400 font-semibold text-lg mb-4">{exp.company}</p>
                    <p className="text-gray-400 mb-6 leading-relaxed text-base font-light">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.08 }}
                          className="px-3 py-1.5 bg-cyan-500/15 rounded-full text-cyan-300 text-xs font-medium hover:bg-cyan-500/25 transition-all duration-300 cursor-default"
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </div>
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

