import { motion } from 'framer-motion'
import { experience } from '../data/experience'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(experience[0].id)

  return (
    <section id="experience" className="py-20 sm:py-32 border-b border-dark-700 bg-dark-900 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience</h2>
            <p className="text-dark-300">Professional engineering work</p>
          </div>

          {/* Career timeline */}
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-dark-700 hover:border-dark-600 transition-colors"
              >
                {/* Experience header */}
                <button
                  onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                  className="w-full p-6 text-left hover:bg-dark-800 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-white">{exp.company}</h3>
                        <span className="text-xs font-mono text-dark-400">{exp.period}</span>
                      </div>
                      <div className="text-accent-400 text-sm font-medium mb-1">{exp.role}</div>
                      <p className="text-dark-400 text-sm">{exp.summary}</p>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-dark-400 transition-transform flex-shrink-0 ${
                        expandedId === exp.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded content */}
                {expandedId === exp.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-dark-700 bg-dark-850 p-6"
                  >
                    <div className="space-y-6">
                      {/* Domain */}
                      <div>
                        <h4 className="text-sm font-semibold text-accent-400 mb-2">Domain</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.domain.map((d) => (
                            <span key={d} className="text-xs bg-dark-700 text-dark-200 px-2 py-1 rounded">
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <h4 className="text-sm font-semibold text-accent-400 mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {exp.description.map((desc, i) => (
                            <li key={i} className="text-sm text-dark-300 flex gap-3">
                              <span className="text-accent-500 flex-shrink-0 mt-1">→</span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h4 className="text-sm font-semibold text-accent-400 mb-2">Highlights</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {exp.highlights.map((h) => (
                            <div key={h} className="text-xs text-dark-300 flex items-start gap-2">
                              <span className="text-accent-500">▪</span>
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-accent-400 mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-2 py-1 bg-dark-700 text-accent-300 border border-dark-600 font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
