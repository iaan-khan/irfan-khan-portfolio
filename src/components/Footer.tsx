import { profile } from '../data/profile'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-dark-700 bg-dark-900 px-4 sm:px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Main content */}
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold text-white">{profile.name}</h3>
            <p className="text-dark-400 text-sm font-mono">{profile.title}</p>
            <p className="text-dark-500 text-xs max-w-2xl mx-auto leading-relaxed">
              Senior Software Engineer specializing in Full-Stack Development, Cloud Architecture, Microservices, and AI-Powered Applications
            </p>
          </div>

          {/* Social links */}
          <div className="flex justify-center items-center gap-6">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-400 hover:text-accent-400 transition-colors flex items-center gap-2"
            >
              <Github size={18} />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-400 hover:text-accent-400 transition-colors flex items-center gap-2"
            >
              <Linkedin size={18} />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href={`mailto:${profile.social.email}`}
              className="text-dark-400 hover:text-accent-400 transition-colors flex items-center gap-2"
            >
              <Mail size={18} />
              <span className="text-sm">Email</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent"></div>

        {/* Credits */}
        <div className="text-center space-y-2 text-dark-500 text-xs font-mono">
          <p>
            Built with React + TypeScript + Tailwind CSS
          </p>
          <p>
            Deployed on GitHub Pages
          </p>
          <p>
            © {currentYear} Iaan Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
