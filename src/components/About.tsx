import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

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
    <section id="about" className="py-32 px-8 sm:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto">
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
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-20 items-start">
            <motion.div variants={itemVariants} className="space-y-10">
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                I'm a diligent final-year Computer Engineering student at the International University of Rabat, specializing in backend development with Java and Spring Boot. My passion lies in building scalable, robust systems that power modern applications.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed font-light">
                With hands-on experience in full-stack development, cloud technologies, and DevOps practices, I'm eager to apply my technical skills in challenging environments. I'm particularly interested in microservices architecture, containerization, and cloud infrastructure.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Beyond coding, I'm a fast learner who thrives in collaborative environments. I believe in writing clean, maintainable code and continuously improving my craft through real-world projects and challenges.
              </p>

              <div className="pt-8">
                <h3 className="text-2xl font-bold text-white mb-8">Quick Facts</h3>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-center space-x-4">
                    <span className="text-3xl">📍</span>
                    <span className="text-base">Location: Morocco</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="text-3xl">🎓</span>
                    <span className="text-base">Education: Computer Engineering (Final Year)</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="text-3xl">💼</span>
                    <span className="text-base">Focus: Backend Development & DevOps</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="text-3xl">🚀</span>
                    <span className="text-base">Passion: Scalable Systems & Cloud Tech</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="glass-effect p-10 rounded-2xl space-y-8">
                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-start space-x-5 p-4 rounded-lg hover:bg-cyan-500/5 transition-colors"
                >
                  <div className="text-4xl flex-shrink-0">🎯</div>
                  <div>
                    <h4 className="text-lg font-bold text-cyan-400 mb-2">My Goal</h4>
                    <p className="text-gray-400 text-base leading-relaxed font-light">To become a proficient DevOps engineer while contributing to backend systems that impact millions of users.</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-start space-x-5 p-4 rounded-lg hover:bg-cyan-500/5 transition-colors"
                >
                  <div className="text-4xl flex-shrink-0">💡</div>
                  <div>
                    <h4 className="text-lg font-bold text-cyan-400 mb-2">My Approach</h4>
                    <p className="text-gray-400 text-base leading-relaxed font-light">I combine technical excellence with creative problem-solving to deliver solutions that are both powerful and elegant.</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-start space-x-5 p-4 rounded-lg hover:bg-cyan-500/5 transition-colors"
                >
                  <div className="text-4xl flex-shrink-0">🌱</div>
                  <div>
                    <h4 className="text-lg font-bold text-cyan-400 mb-2">Always Learning</h4>
                    <p className="text-gray-400 text-base leading-relaxed font-light">Technology evolves rapidly, and so do I. I'm committed to staying current with industry trends and best practices.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

