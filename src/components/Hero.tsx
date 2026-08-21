import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { profile } from '../data/profile'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center border-b border-dark-700 bg-dark-900 px-4 sm:px-6">
      <div className="max-w-4xl w-full py-20 sm:py-32">
        {/* Terminal window */}
        <motion.div
          className="border border-dark-700 rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Terminal header */}
          <div className="bg-dark-800 border-b border-dark-700 px-4 py-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs text-dark-400 font-mono ml-3">~/iaan-khan</div>
          </div>

          {/* Terminal content */}
          <div className="bg-dark-950 p-6 sm:p-8 font-mono text-sm">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {/* whoami command */}
              <motion.div variants={itemVariants} className="text-dark-300">
                <div className="text-accent-400">$ whoami</div>
              </motion.div>

              {/* Name */}
              <motion.div variants={itemVariants} className="space-y-2">
                <div className="text-2xl sm:text-4xl font-bold text-white">
                  {profile.name}
                </div>
              </motion.div>

              {/* Title and subtitle */}
              <motion.div variants={itemVariants} className="space-y-1">
                <div className="text-lg sm:text-xl text-accent-400">
                  {profile.title}
                </div>
                <div className="text-dark-300 text-base sm:text-lg">
                  {profile.subtitle}
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div variants={itemVariants} className="text-dark-300 leading-relaxed max-w-2xl">
                <p className="text-sm sm:text-base">
                  I build and modernize enterprise applications using C#, .NET, Angular, React, Vue.js, TypeScript, and AWS. Experienced with microservices, event-driven architecture, cloud infrastructure, and AI-powered solutions.
                </p>
              </motion.div>

              {/* Core stack */}
              <motion.div variants={itemVariants} className="pt-2">
                <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                  {profile.coreStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-dark-800 text-accent-300 border border-dark-700 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* CTA buttons */}
              <motion.div variants={itemVariants} className="pt-4 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent-600 text-dark-900 font-semibold hover:bg-accent-500 transition-colors text-sm"
                >
                  View Projects
                  <ExternalLink size={16} />
                </a>
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-dark-600 text-dark-300 hover:bg-dark-800 hover:text-accent-400 transition-colors text-sm"
                >
                  <Github size={18} />
                  GitHub
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-dark-600 text-dark-300 hover:bg-dark-800 hover:text-accent-400 transition-colors text-sm"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
                <a
                  href={`mailto:${profile.social.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-dark-600 text-dark-300 hover:bg-dark-800 hover:text-accent-400 transition-colors text-sm"
                >
                  <Mail size={18} />
                  Contact
                </a>
              </motion.div>

              {/* Footer prompt */}
              <motion.div variants={itemVariants} className="text-dark-400 pt-2">
                <span className="text-accent-400">$</span> Scroll to explore
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
