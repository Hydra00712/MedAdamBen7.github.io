import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

interface HeroProps {
  scrollY: number
}

export default function Hero({ scrollY }: HeroProps) {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Backend Developer | DevOps Enthusiast'

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 60)

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: scrollY * 0.5,
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: scrollY * -0.3,
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-cyan-500/5 via-transparent to-transparent rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-32"
      >
        {/* Main content */}
        <div className="text-center space-y-12">
          {/* Subtitle */}
          <motion.div variants={itemVariants}>
            <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase font-semibold">
              Welcome to my portfolio
            </p>
          </motion.div>

          {/* Main heading - MUCH LARGER */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tight"
          >
            <span className="text-white block mb-4">Mohamed Adam</span>
            <span className="gradient-text block">Benaddi</span>
          </motion.h1>

          {/* Typing subtitle */}
          <motion.div
            variants={itemVariants}
            className="h-16 flex items-center justify-center"
          >
            <p className="text-2xl sm:text-3xl text-gray-300 font-mono font-light tracking-wide">
              <span className="text-cyan-400 font-semibold">{displayedText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-cyan-400 font-semibold"
              >
                |
              </motion.span>
            </p>
          </motion.div>

          {/* Description - BETTER SPACING */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto font-light"
          >
            Crafting scalable backend systems and cloud infrastructure. Final-year Computer Engineering student specializing in Java, Spring Boot, and DevOps practices.
          </motion.p>

          {/* CTA Buttons - BETTER SPACING */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
            >
              View My Work
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 border-2 border-cyan-500 text-cyan-400 font-bold text-lg rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-8 justify-center pt-8"
          >
            <motion.a
              whileHover={{ scale: 1.3, y: -5 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition-colors"
            >
              <FiGithub size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.3, y: -5 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition-colors"
            >
              <FiLinkedin size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.3, y: -5 }}
              href="mailto:your@email.com"
              className="text-gray-500 hover:text-cyan-400 transition-colors"
            >
              <FiMail size={28} />
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex justify-center pt-20"
        >
          <FiArrowDown className="text-gray-600 text-2xl" />
        </motion.div>
      </motion.div>
    </section>
  )
}

