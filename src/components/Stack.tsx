import { motion } from 'framer-motion'
import { techStack, capabilities } from '../data/stack'
import { Zap } from 'lucide-react'

export function Stack() {
  return (
    <section id="stack" className="py-20 sm:py-32 border-b border-dark-700 bg-dark-900 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section header */}
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Technology Stack</h2>
            <p className="text-dark-300">Languages, frameworks, and tools</p>
          </div>

          {/* Stack categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStack.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent-500 rounded-full"></span>
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1 bg-dark-800 text-dark-200 border border-dark-700 hover:border-accent-600 hover:text-accent-400 transition-colors rounded font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Capabilities */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Core Capabilities</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="border border-dark-700 bg-dark-850 p-6 space-y-3 hover:border-accent-600 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Zap size={20} className="text-accent-400" />
                    <h4 className="text-lg font-semibold text-white">{capability.title}</h4>
                  </div>
                  <p className="text-dark-300 text-sm leading-relaxed">{capability.description}</p>
                  <div className="flex flex-wrap gap-1 pt-2">
                    {capability.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-xs px-2 py-0.5 bg-dark-700 text-dark-300 font-mono rounded">
                        {tech}
                      </span>
                    ))}
                    {capability.technologies.length > 4 && (
                      <span className="text-xs px-2 py-0.5 bg-dark-700 text-dark-400">
                        +{capability.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
