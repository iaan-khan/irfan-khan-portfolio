import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { Github, Linkedin, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = profile.navigation

  return (
    <header className="sticky top-0 z-40 border-b border-dark-700 bg-dark-900/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a href="#" className="flex items-center gap-2 text-white font-semibold hover:text-accent-400 transition-colors">
            <div className="w-8 h-8 flex items-center justify-center font-mono bg-accent-600 text-dark-900 font-bold text-sm">
              IK
            </div>
            <span className="hidden sm:inline text-sm font-mono">~/irfan-khan</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-dark-300 hover:text-accent-400 transition-colors text-sm font-mono"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social + Mobile menu toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-300 hover:text-accent-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-300 hover:text-accent-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-dark-300 hover:text-accent-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-dark-700 mt-4 pt-4 space-y-3"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className="block text-dark-300 hover:text-accent-400 transition-colors text-sm font-mono py-2"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-4 pt-2 border-t border-dark-700">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-300 hover:text-accent-400 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-300 hover:text-accent-400 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  )
}
