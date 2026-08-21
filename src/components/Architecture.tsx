import { motion } from 'framer-motion'
import { architecturePatterns } from '../data/architecture'
import { Code2 } from 'lucide-react'
import { useState } from 'react'

export function Architecture() {
  const [selectedId, setSelectedId] = useState<string | null>(architecturePatterns[0].id)
  const selectedPattern = architecturePatterns.find((p) => p.id === selectedId)

  return (
    <section id="architecture" className="py-20 sm:py-32 border-b border-dark-700 bg-dark-900 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section header */}
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Architecture Patterns</h2>
            <p className="text-dark-300">Design patterns and architectural approaches across projects</p>
          </div>

          {/* Grid of architecture patterns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {architecturePatterns.map((pattern) => (
              <motion.button
                key={pattern.id}
                onClick={() => setSelectedId(pattern.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`p-4 text-left border transition-all ${
                  selectedId === pattern.id
                    ? 'border-accent-600 bg-dark-800'
                    : 'border-dark-700 bg-dark-850 hover:border-dark-600'
                }`}
              >
                <div className="flex items-start gap-3 mb-2">
                  <Code2 size={20} className="text-accent-400 flex-shrink-0 mt-1" />
                  <h3 className="font-semibold text-white">{pattern.name}</h3>
                </div>
                <p className="text-sm text-dark-400 line-clamp-2">{pattern.description}</p>
              </motion.button>
            ))}
          </div>

          {/* Detailed view */}
          {selectedPattern && (
            <motion.div
              key={selectedPattern.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="border border-dark-700 bg-dark-850 p-6 sm:p-8 space-y-6"
            >
              {/* Header */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">{selectedPattern.name}</h3>
                <p className="text-dark-300">{selectedPattern.description}</p>
              </div>

              {/* Diagram */}
              <div className="border border-dark-700 bg-dark-900 p-4 rounded overflow-x-auto">
                <pre className="font-mono text-xs text-dark-400 whitespace-pre">
                  {selectedPattern.diagram}
                </pre>
              </div>

              {/* Characteristics */}
              <div>
                <h4 className="text-sm font-semibold text-accent-400 mb-3">Characteristics</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedPattern.characteristics.map((char) => (
                    <div key={char} className="flex gap-2 text-sm text-dark-300">
                      <span className="text-accent-500">▪</span>
                      <span>{char}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h4 className="text-sm font-semibold text-accent-400 mb-3">Use Cases</h4>
                <ul className="space-y-1">
                  {selectedPattern.useCases.map((useCase) => (
                    <li key={useCase} className="text-sm text-dark-300 flex gap-2">
                      <span className="text-accent-500">→</span>
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Projects using this pattern */}
              {selectedPattern.projects.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-accent-400 mb-2">Used In</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPattern.projects.map((proj) => (
                      <span key={proj} className="text-xs px-3 py-1 bg-dark-700 text-dark-200 rounded">
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
