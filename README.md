# Iaan Khan — Senior Software Engineer Portfolio

A premium, production-ready personal portfolio website for Iaan Khan, showcasing experience in full-stack development, cloud architecture, microservices, and AI-powered applications.

## 🎯 Overview

This is a static frontend application built with **React + TypeScript + Vite** designed to be deployed on **GitHub Pages**. The website presents Iaan's professional experience, engineering work, architecture knowledge, and technology stack in a developer-focused, technically credible manner.

### Key Features

- **Developer-Focused Design**: Terminal-inspired UI with dark theme inspired by VS Code, GitHub, and Unix tools
- **Professional Experience Section**: Detailed professional work with expandable career timeline
- **Project Showcase**: Separate sections for professional engineering work and selected projects
- **Architecture Patterns**: Interactive exploration of design patterns used across projects
- **Technology Stack**: Comprehensive breakdown of languages, frameworks, and tools
- **Responsive Design**: Fully responsive from mobile to desktop
- **Performance Optimized**: Fast loading, minimal dependencies, Lighthouse-friendly
- **SEO Ready**: Open Graph, Twitter meta tags, semantic HTML
- **Accessibility**: Keyboard navigation, ARIA labels, focus states, reduced motion support
- **GitHub Pages Ready**: Static deployment, no backend required

## 🛠 Technology Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

### Deployment
- **GitHub Pages** - Static hosting
- **GitHub Actions** - CI/CD pipeline

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation and branding
│   │   ├── Hero.tsx            # Terminal-style hero section
│   │   ├── About.tsx           # Professional summary
│   │   ├── Experience.tsx      # Career timeline
│   │   ├── Projects.tsx        # Project showcase
│   │   ├── Architecture.tsx    # Architecture patterns
│   │   ├── Stack.tsx           # Technology stack
│   │   └── Footer.tsx          # Footer
│   ├── data/
│   │   ├── profile.ts          # Profile and contact info
│   │   ├── experience.ts       # Professional experience data
│   │   ├── projects.ts         # Projects data
│   │   ├── stack.ts            # Technology and capabilities
│   │   └── architecture.ts     # Architecture patterns
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # React entry point
│   └── index.css               # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── index.html                  # HTML template
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   The site will open at `http://localhost:5173`

### Development

```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 📦 Deployment

### GitHub Pages Setup

1. **Update repository settings**
   - Go to repository Settings → Pages
   - Set source to "GitHub Actions"
   - Save

2. **Enable GitHub Actions**
   - Go to Actions tab
   - Confirm the deploy workflow is enabled

3. **Push to main branch**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

   GitHub Actions will automatically build and deploy your site.

4. **Access your site**
   - Your site will be available at: `https://<username>.github.io/portfolio`
   - Or set a custom domain in repository settings

### Manual Build & Deployment

```bash
# Build production bundle
npm run build

# Deploy dist/ folder to GitHub Pages
# Option 1: Using gh-pages package
npm install --save-dev gh-pages
npx gh-pages -d dist

# Option 2: Manual push to gh-pages branch
git add dist -f
git commit -m "Build output"
git subtree push --prefix dist origin gh-pages
```

## 📝 Customization

### Update Profile Information

Edit `src/data/profile.ts`:
```typescript
export const profile = {
  name: 'Your Name',
  title: 'Your Title',
  social: {
    github: 'https://github.com/username',
    linkedin: 'https://linkedin.com/in/username',
    email: 'your@email.com',
  },
  // ... other fields
}
```

### Update Experience

Edit `src/data/experience.ts` to add/modify professional experience:
```typescript
export const experience: Experience[] = [
  {
    id: 'company-id',
    company: 'Company Name',
    role: 'Your Role',
    period: 'Time Period',
    // ... other fields
  },
]
```

### Update Projects

Edit `src/data/projects.ts` to showcase your work:
```typescript
export const projects: Project[] = [
  {
    id: 'project-id',
    name: 'Project Name',
    category: 'professional' | 'selected',
    // ... other fields
  },
]
```

### Update Technology Stack

Edit `src/data/stack.ts` to list your technologies and capabilities.

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  'dark': { /* your dark theme colors */ },
  'accent': { /* your accent colors */ },
}
```

## 🎨 Design Philosophy

The portfolio is built on these core principles:

- **Engineering Credibility over Visual Gimmicks**: The design speaks to CTOs, engineering managers, and technical recruiters
- **Developer-Focused**: Terminal inspiration, clean code visibility, technical clarity
- **Real Experience over Generic Claims**: Specific technologies, actual projects, measurable work
- **Performance First**: Fast loading, optimized bundle, minimal animations
- **Accessibility**: Keyboard navigation, proper contrast, screen reader support

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation throughout
- Proper focus states
- Color contrast WCAG AA compliance
- Reduced motion support
- Screen reader friendly

## 📊 Performance Optimization

- **Code Splitting**: Lazy loading components
- **Image Optimization**: No heavy image dependencies
- **Tree Shaking**: Unused code removal via Vite
- **Minification**: Automatic via build tool
- **CSS Purging**: Tailwind removes unused styles

### Target Lighthouse Scores
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🔍 SEO

The portfolio includes:
- Meta tags (title, description, keywords)
- Open Graph tags
- Twitter Card tags
- Canonical URL
- Semantic HTML headings
- Structured data ready

## 🐛 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android 90+)

## 📄 License

This portfolio template is provided as-is for personal use. Customize as needed.

## 🤝 Contributing

To update your portfolio:

1. Edit data files in `src/data/`
2. Update components in `src/components/` if needed
3. Test locally with `npm run dev`
4. Build with `npm run build`
5. Deploy to GitHub Pages

## 📞 Support

For questions or issues:
- Check GitHub Issues
- Review Vite documentation: https://vitejs.dev
- Review Tailwind CSS docs: https://tailwindcss.com
- Review React documentation: https://react.dev

## 🎓 Learning Resources

- **Vite**: https://vitejs.dev/guide/
- **React**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org/docs/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/

## 🎯 Next Steps

1. Fork/clone this repository
2. Update all data files with your information
3. Customize colors and theme if desired
4. Test locally with `npm run dev`
5. Push to GitHub and enable GitHub Pages
6. Set up custom domain (optional)
7. Share your portfolio!

---

**Built with React + TypeScript + Vite**  
**Deployed on GitHub Pages**  
**Designed for Senior Software Engineers**
