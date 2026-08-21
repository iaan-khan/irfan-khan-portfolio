import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { ExternalLink, Github, Zap } from 'lucide-react'
import { useState } from 'react'

export function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)

  const professionalProjects = projects.filter((p) => p.category === 'professional')
  const selectedProjects = projects.filter((p) => p.category === 'selected')

  const selectedProject = selectedProjectId ? projects.find((p) => p.id === selectedProjectId) : null

  return (
    <section id="projects" className="py-20 sm:py-32 border-b border-dark-700 bg-dark-900 px-4 sm:px-6">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
            <p className="text-dark-300">Professional work and engineering projects</p>
          </div>

          {/* Professional Projects */}
          <div className="space-y-8">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-white uppercase tracking-widest text-sm">
                Professional Engineering Work
              </h3>
              <div className="h-px bg-gradient-to-r from-accent-600 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {professionalProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedProjectId(project.id)}
                  className="cursor-pointer group border border-dark-700 hover:border-accent-600 bg-dark-850 hover:bg-dark-800 transition-all p-6 space-y-4"
                >
                  {/* Domain badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.domain.map((d) => (
                      <span key={d} className="text-xs px-2 py-1 bg-dark-700 text-accent-300 rounded">
                        {d}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white group-hover:text-accent-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-dark-300 text-sm leading-relaxed line-clamp-3">{project.description}</p>

                  {/* Key technologies */}
                  <div className="flex flex-wrap gap-1 pt-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className="text-xs px-1.5 py-0.5 bg-dark-700 text-dark-300 font-mono">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-xs px-1.5 py-0.5 bg-dark-700 text-dark-400">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="text-accent-400 text-sm font-medium flex items-center gap-1 pt-2">
                    View details
                    <ExternalLink size={14} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div className="space-y-8">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-white uppercase tracking-widest text-sm">
                Selected Projects
              </h3>
              <div className="h-px bg-gradient-to-r from-accent-600 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedProjectId(project.id)}
                  className="cursor-pointer group border border-dark-700 hover:border-accent-600 bg-dark-850 hover:bg-dark-800 transition-all p-6 space-y-4"
                >
                  {/* Domain badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.domain.slice(0, 2).map((d) => (
                      <span key={d} className="text-xs px-2 py-1 bg-dark-700 text-accent-300 rounded">
                        {d}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white group-hover:text-accent-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-dark-300 text-sm leading-relaxed line-clamp-2">{project.description}</p>

                  {/* Key technologies */}
                  <div className="flex flex-wrap gap-1 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-xs px-1.5 py-0.5 bg-dark-700 text-dark-300 font-mono">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs px-1.5 py-0.5 bg-dark-700 text-dark-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="text-accent-400 text-sm font-medium flex items-center gap-1 pt-2">
                    View details
                    <ExternalLink size={14} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Project Detail Modal */}
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProjectId(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-dark-850 border border-dark-700 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="border-b border-dark-700 p-6 sm:p-8 sticky top-0 bg-dark-850 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{selectedProject.title}</h3>
                    <p className="text-dark-400">{selectedProject.name}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProjectId(null)}
                    className="text-dark-400 hover:text-white transition-colors flex-shrink-0 text-2xl"
                  >
                    ×
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-8">
                  {/* Domain */}
                  <div>
                    <h4 className="text-sm font-semibold text-accent-400 mb-2 uppercase">Domain</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.domain.map((d) => (
                        <span key={d} className="text-sm px-3 py-1 bg-dark-700 text-accent-300 rounded">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-sm font-semibold text-accent-400 mb-2 uppercase">Overview</h4>
                    <p className="text-dark-300 leading-relaxed">{selectedProject.description}</p>
                  </div>

                  {/* Detailed description */}
                  <div>
                    <h4 className="text-sm font-semibold text-accent-400 mb-3 uppercase">Engineering Work</h4>
                    <ul className="space-y-2">
                      {selectedProject.detailedDescription.map((item, i) => (
                        <li key={i} className="text-dark-300 text-sm flex gap-3">
                          <span className="text-accent-500 flex-shrink-0">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-accent-400 mb-2 uppercase">Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature) => (
                        <div key={feature} className="text-dark-300 text-sm flex gap-2">
                          <span className="text-accent-500">✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Architecture */}
                  {selectedProject.architecture && (
                    <div>
                      <h4 className="text-sm font-semibold text-accent-400 mb-2 uppercase">Architecture</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.architecture.map((arch) => (
                          <span key={arch} className="text-sm px-2 py-1 bg-dark-700 text-dark-200 rounded flex items-center gap-1">
                            <Zap size={14} />
                            {arch}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-accent-400 mb-2 uppercase">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-dark-700 text-accent-300 border border-dark-600 font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-dark-600 text-dark-300 hover:bg-dark-800 hover:text-accent-400 transition-colors"
                      >
                        <Github size={18} />
                        GitHub
                      </a>
                    )}
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-accent-600 text-dark-900 hover:bg-accent-500 transition-colors"
                      >
                        <ExternalLink size={18} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
