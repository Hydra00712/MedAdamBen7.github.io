# Mohamed Benaddi - Personal Portfolio

A stunning, interactive personal portfolio website showcasing backend development expertise and DevOps enthusiasm. Built with modern web technologies for excellent performance, smooth animations, and responsive design.

## 🌟 Features

- **Dynamic Hero Section** with animated typing effect
- **Smooth Scroll Navigation** with progress indicator
- **Interactive Animations** using Framer Motion
- **Animated Background** with particle system
- **Responsive Design** for all devices (mobile, tablet, desktop)
- **Glass Morphism UI** with modern gradient effects
- **Project Showcase** with tech stack highlights
- **Skills Section** with animated progress bars
- **Contact Form** with validation
- **Social Links** integration
- **Optimized Performance** with lazy loading and code splitting

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Intersection Observer**: For scroll-triggered animations
- **Canvas**: For animated background particles

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Navigate to the project directory**
   ```bash
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173/`
   - The page will hot-reload as you make changes

## 🚀 Deployment

### Option 1: Deploy to GitHub Pages

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Update vite.config.ts** (if deploying to a subdirectory)
   ```typescript
   export default defineConfig({
     base: '/portfolio/', // Change to your repo name
     plugins: [react()],
   })
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Deploy using GitHub Pages**
   - Go to repository Settings → Pages
   - Set source to "GitHub Actions"
   - Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

### Option 2: Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** to connect your GitHub account and deploy

### Option 3: Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy using Netlify CLI**
   ```bash
   npm i -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

Or drag and drop the `dist` folder to Netlify's web interface.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── AnimatedBackground.tsx
│   │   └── ScrollProgress.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── public/
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Customization

Edit the data in each component to personalize your portfolio.

## 📊 Performance

- Code splitting with Vite
- Lazy loading with Intersection Observer
- CSS purging with Tailwind
- Automatic minification in production

## 🧪 Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Lint code
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📞 Contact

- **Email**: db11911918@gmail.com
- **LinkedIn**: [Mohamed Adam Benaddi](https://www.linkedin.com/in/mohamed-adam-benaddi-0ab801268)
- **Phone**: +212 708 163 796

---

**Built with ❤️ by Mohamed Benaddi**
