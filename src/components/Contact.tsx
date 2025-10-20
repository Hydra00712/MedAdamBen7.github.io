import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi'

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'db11911918@gmail.com',
      href: 'mailto:db11911918@gmail.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+212 708 163 796',
      href: 'tel:+212708163796',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'Mohamed Adam Benaddi',
      href: 'https://www.linkedin.com/in/mohamed-adam-benaddi-0ab801268',
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: 'View Profile',
      href: 'https://github.com',
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
    <section id="contact" className="py-32 px-8 sm:px-12 lg:px-16">
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
            Get In Touch
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-20">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-10">
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                I'm always interested in hearing about new projects and opportunities. Feel free to reach out and let's connect!
              </p>

              <div className="space-y-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 12 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-5 transition-all duration-300 group cursor-pointer"
                    >
                      <Icon className="text-purple-400 text-3xl flex-shrink-0 group-hover:text-purple-300 transition-colors" />
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{info.label}</p>
                        <p className="text-gray-300 font-semibold text-base group-hover:text-purple-300 transition-colors">{info.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wide">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-transparent border-b border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-all duration-300 text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wide">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-transparent border-b border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-all duration-300 text-base"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wide">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-transparent border-b border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-all duration-300 resize-none text-base"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.08, boxShadow: '0 20px 50px rgba(167, 139, 250, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold rounded-lg transition-all duration-300 text-base"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

