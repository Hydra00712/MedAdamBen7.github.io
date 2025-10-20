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
      {/* Premium animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: scrollY * 0.5,
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/20 via-transparent to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: scrollY * -0.3,
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-tl from-indigo-600/20 via-transparent to-transparent rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 py-32"
      >
        {/* Main content */}
        <div className="text-center space-y-14">
          {/* Subtitle */}
          <motion.div variants={itemVariants}>
            <p className="text-purple-400 font-mono text-xs tracking-widest uppercase font-semibold">
              Welcome to my portfolio
            </p>
          </motion.div>

          {/* Main heading */}
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
              <span className="text-purple-400 font-semibold">{displayedText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-purple-400 font-semibold"
              >
                |
              </motion.span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto font-light"
          >
            Crafting scalable backend systems and cloud infrastructure. Final-year Computer Engineering student specializing in Java, Spring Boot, and DevOps practices.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              View My Work
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 border-2 border-purple-500 text-purple-300 font-bold text-lg rounded-xl hover:bg-purple-500/10 transition-all duration-300"
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
              className="text-gray-500 hover:text-purple-400 transition-colors"
            >
              <FiGithub size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.3, y: -5 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-purple-400 transition-colors"
            >
              <FiLinkedin size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.3, y: -5 }}
              href="mailto:your@email.com"
              className="text-gray-500 hover:text-purple-400 transition-colors"
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

