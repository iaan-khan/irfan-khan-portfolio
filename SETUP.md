# Portfolio Setup Guide

## Step 1: Initial Setup

### Clone or Download
```bash
# If cloning
git clone <repository-url>
cd portfolio

# Or download and extract the ZIP
unzip portfolio.zip
cd portfolio
```

### Install Dependencies
```bash
npm install
```

## Step 2: Customize Your Information

### 1. Update Profile (`src/data/profile.ts`)
```typescript
export const profile = {
  name: 'Your Name',
  title: 'Your Title',
  subtitle: 'Your Subtitle',
  bio: 'Your bio text',
  coreStack: ['Tech1', 'Tech2', ...],
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    email: 'your@email.com',
  },
}
```

### 2. Update Experience (`src/data/experience.ts`)
Add your professional experience with:
- Company name and role
- Period of employment
- Detailed responsibilities
- Key highlights
- Technologies used

### 3. Update Projects (`src/data/projects.ts`)
Add your projects with:
- Project name and title
- Category (professional or selected)
- Domain and description
- Features and technical work
- Architecture details
- Technologies used

### 4. Update Technology Stack (`src/data/stack.ts`)
Add your:
- Programming languages
- Frameworks and libraries
- Cloud platforms
- Architectures and patterns
- Core capabilities

### 5. Update Architecture Patterns (`src/data/architecture.ts`)
Customize the architecture patterns you've used in your projects.

## Step 3: Test Locally

```bash
# Start development server
npm run dev

# Open http://localhost:5173 in your browser
# Make changes and see them update in real-time
```

## Step 4: Customize Theme (Optional)

### Color Scheme
Edit `tailwind.config.js`:
```javascript
colors: {
  'dark': {
    '900': '#0f0f0f',  // Main background
    '850': '#131313',
    '800': '#1a1a1a',
    // ... adjust other shades
  },
  'accent': {
    '500': '#0ea5e9',  // Main accent color
    '600': '#0284c7',
    // ... adjust other shades
  }
}
```

### Typography
Modify font families and sizes in `tailwind.config.js`.

## Step 5: Build for Production

```bash
# Build the project
npm run build

# This creates a 'dist' folder with production-ready files
```

## Step 6: Deploy to GitHub Pages

### Option A: Using GitHub Actions (Recommended)

1. **Create GitHub Repository**
   - Go to github.com and create a new repository
   - Name it whatever you want (e.g., `portfolio`)
   - Make it public

2. **Push Your Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Select "GitHub Actions"
   - Save

4. **Wait for Deployment**
   - GitHub Actions will automatically build and deploy
   - Check the Actions tab to see the build status
   - Once complete, your site is live at `https://yourusername.github.io/portfolio`

### Option B: Manual Deployment

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Deploy
npx gh-pages -d dist
```

### Option C: Custom Domain

After setting up GitHub Pages:

1. Update your domain registrar to point to GitHub Pages:
   - Add CNAME record pointing to `yourusername.github.io`
   - OR use GitHub's nameservers

2. Add CNAME file to `public/` folder:
   ```
   yourdomain.com
   ```

3. Update vite config if needed

## Step 7: Verify Deployment

- Visit `https://yourusername.github.io/portfolio`
- Test all navigation links
- Check mobile responsiveness
- Verify all project links work

## Step 8: Optional Enhancements

### Add Google Analytics
Update `index.html` with Google Analytics script (if desired).

### Add Resume PDF
Place your resume in `public/resume.pdf` and link it in the header.

### Add Project Images
Add project screenshots to `public/images/` and reference them in project data.

### Custom Domain
Follow GitHub's custom domain setup guide.

## Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npm run build
```

### Deployment Issues
- Check GitHub Actions logs for build errors
- Verify repository is public
- Ensure branch is set to 'main'
- Clear GitHub Pages cache (may take a few minutes to update)

### Development Server Issues
```bash
# Kill the process and restart
npm run dev
```

### Link Issues
- Ensure all section IDs match navigation links
- Check that all data objects have required fields

## Next Steps

1. ✅ Customize all your information
2. ✅ Test locally
3. ✅ Deploy to GitHub
4. ✅ Share your portfolio!

## Support Resources

- **Vite Docs**: https://vitejs.dev/
- **React Docs**: https://react.dev
- **Tailwind Docs**: https://tailwindcss.com
- **GitHub Pages Docs**: https://pages.github.com/
- **TypeScript Docs**: https://www.typescriptlang.org/

---

**Your portfolio is now ready to showcase your engineering work!** 🚀
