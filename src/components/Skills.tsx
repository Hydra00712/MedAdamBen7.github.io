import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const skillCategories = [
    {
      category: 'Backend Development',
      icon: '⚙️',
      skills: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'Maven'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'DevOps & Cloud',
      icon: '☁️',
      skills: ['Docker', 'AWS (EC2, S3)', 'Linux/Bash', 'Git', 'CI/CD'],
      color: 'from-orange-500 to-red-500',
    },
    {
      category: 'Databases',
      icon: '🗄️',
      skills: ['PostgreSQL', 'SQL', 'Database Design', 'Query Optimization'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      category: 'Tools & Technologies',
      icon: '🛠️',
      skills: ['GitHub', 'GitLab', 'Postman', 'IntelliJ', 'VS Code'],
      color: 'from-purple-500 to-pink-500',
    },
  ]

  const languages = [
    { name: 'Arabic', level: 'Native', percentage: 100 },
    { name: 'French', level: 'Fluent', percentage: 95 },
    { name: 'English', level: 'Fluent', percentage: 90 },
    { name: 'German', level: 'Beginner', percentage: 40 },
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
    <section id="skills" className="py-32 px-6 sm:px-8 lg:px-12">
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
            Skills & Expertise
          </motion.h2>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0, 168, 255, 0.2)' }}
                className="glass-effect p-10 rounded-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-4xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 bg-cyan-500/15 rounded-lg text-cyan-300 font-medium text-sm hover:bg-cyan-500/25 transition-all duration-300 cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <motion.div variants={itemVariants} className="glass-effect p-10 rounded-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-10">Languages</h3>

            <div className="space-y-8">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-gray-300 text-base">{lang.name}</span>
                    <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-full">{lang.level}</span>
                  </div>
                  <div className="w-full bg-gray-700/30 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${lang.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: index * 0.15 }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

