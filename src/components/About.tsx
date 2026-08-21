import { motion } from 'framer-motion'
import { profile } from '../data/profile'

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 border-b border-dark-700 bg-dark-900 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About</h2>
            <p className="text-dark-300">Background and experience</p>
          </div>

          {/* Main bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="border border-dark-700 bg-dark-850 p-6 sm:p-8 space-y-6"
          >
            <div className="space-y-4">
              <p className="text-dark-300 leading-relaxed">
                I'm a Senior Software Engineer with a focus on building and modernizing enterprise applications. My work spans full-stack development, cloud infrastructure, distributed systems, and AI-powered solutions.
              </p>

              <p className="text-dark-300 leading-relaxed">
                Over my career, I've worked on large-scale systems including enterprise learning management platforms, order management and fulfillment systems, and cloud-native microservices. I specialize in taking legacy systems and modernizing them while keeping them operational, which requires careful planning, deep architectural thinking, and strong engineering practices.
              </p>

              <p className="text-dark-300 leading-relaxed">
                I'm experienced with C#, .NET, ASP.NET Core, and AWS. I build REST APIs and event-driven microservices, work with Kubernetes and Docker, and handle infrastructure-as-code with Terraform. On the frontend, I work with Angular, React, and Vue.js. I also use Python for automation, debugging, and AI-assisted development.
              </p>

              <p className="text-dark-300 leading-relaxed">
                Beyond the core stack, I'm interested in system design, performance optimization, distributed systems patterns, and the intersection of AI and software engineering.
              </p>
            </div>

            {/* Key strengths */}
            <div className="pt-4 border-t border-dark-700">
              <h3 className="text-lg font-semibold text-accent-400 mb-3">Key Strengths</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex gap-3">
                  <span className="text-accent-500 flex-shrink-0">▸</span>
                  <span className="text-dark-300">
                    <strong>Legacy Modernization:</strong> Moving monoliths to microservices while keeping systems operational
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent-500 flex-shrink-0">▸</span>
                  <span className="text-dark-300">
                    <strong>Architecture Design:</strong> Event-driven, microservices, CQRS, and cloud-native patterns
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent-500 flex-shrink-0">▸</span>
                  <span className="text-dark-300">
                    <strong>Performance Troubleshooting:</strong> Investigating production issues and optimizing systems
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent-500 flex-shrink-0">▸</span>
                  <span className="text-dark-300">
                    <strong>Full-Stack Development:</strong> Backend APIs, frontend SPAs, and everything in between
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent-500 flex-shrink-0">▸</span>
                  <span className="text-dark-300">
                    <strong>Cloud Infrastructure:</strong> AWS, Kubernetes, Docker, and Terraform
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent-500 flex-shrink-0">▸</span>
                  <span className="text-dark-300">
                    <strong>AI & Automation:</strong> LLM integration, AI agents, and development automation
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
