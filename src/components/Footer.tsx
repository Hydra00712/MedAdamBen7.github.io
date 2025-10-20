import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: FiGithub,
      href: 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: FiLinkedin,
      href: 'https://www.linkedin.com/in/mohamed-adam-benaddi-0ab801268',
      label: 'LinkedIn',
    },
    {
      icon: FiMail,
      href: 'mailto:db11911918@gmail.com',
      label: 'Email',
    },
  ]

  return (
    <footer className="border-t border-accent/30 bg-gradient-to-b from-transparent to-secondary/40 py-16 px-8 sm:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl font-bold gradient-text mb-3">Mohamed Benaddi</h3>
            <p className="text-gray-400 text-lg">Backend Developer | DevOps Enthusiast</p>
          </motion.div>

          {/* Center Section - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h4 className="text-lg font-bold text-accent-light mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-accent-light transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-bold text-accent-light mb-4">Connect</h4>
            <div className="flex gap-4 justify-center md:justify-end">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.25, rotate: 5, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 bg-gradient-to-br from-accent/20 to-accent-light/20 hover:from-accent/40 hover:to-accent-light/40 rounded-lg text-accent-light transition-all duration-300 border border-accent/30 hover:border-accent/60"
                    aria-label={link.label}
                  >
                    <Icon size={24} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Mohamed Benaddi. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.15, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gradient-to-br from-accent/20 to-accent-light/20 hover:from-accent/40 hover:to-accent-light/40 rounded-lg text-accent-light transition-all duration-300 border border-accent/30 hover:border-accent/60"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={24} />
          </motion.button>
          <p className="text-gray-400 text-sm">
            Built with React, Vite & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

