# Quick Start Guide - Mohamed Benaddi Portfolio

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd portfolio
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

Open your browser to `http://localhost:5173/`

### Step 3: Make Changes
Edit files in `src/components/` and see changes instantly with hot reload!

---

## 📝 Customization

### Update Your Information

1. **Hero Section** - `src/components/Hero.tsx`
   - Change the typing animation text
   - Update the description

2. **About Section** - `src/components/About.tsx`
   - Update your bio and goals
   - Modify quick facts

3. **Experience** - `src/components/Experience.tsx`
   - Add/edit your work experience
   - Update company names and dates

4. **Projects** - `src/components/Projects.tsx`
   - Add your projects
   - Update tech stack and descriptions

5. **Skills** - `src/components/Skills.tsx`
   - Update skill categories
   - Modify language proficiency

6. **Contact** - `src/components/Contact.tsx`
   - Update email, phone, LinkedIn
   - Modify contact information

7. **Footer** - `src/components/Footer.tsx`
   - Update social links
   - Change copyright year

---

## 🎨 Customize Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#0f172a',      // Dark blue background
  secondary: '#1e293b',    // Lighter blue
  accent: '#3b82f6',       // Bright blue
  'accent-light': '#60a5fa', // Light blue
}
```

---

## 🏗️ Build for Production

```bash
npm run build
```

Creates optimized files in `dist/` folder.

---

## 👀 Preview Production Build

```bash
npm run preview
```

Opens `http://localhost:4173/` with production build.

---

## 📦 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx              # Navigation
│   ├── Hero.tsx                # Hero section
│   ├── About.tsx               # About me
│   ├── Experience.tsx          # Work experience
│   ├── Projects.tsx            # Projects showcase
│   ├── Skills.tsx              # Skills & languages
│   ├── Contact.tsx             # Contact form
│   ├── Footer.tsx              # Footer
│   ├── AnimatedBackground.tsx  # Particle animation
│   └── ScrollProgress.tsx      # Scroll indicator
├── App.tsx                     # Main app
├── App.css                     # App styles
├── index.css                   # Global styles
└── main.tsx                    # Entry point
```

---

## 🚀 Deploy

### GitHub Pages (Free)
```bash
npm run build
git add .
git commit -m "Deploy portfolio"
git push origin main
```

See `DEPLOYMENT.md` for detailed instructions.

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

---

## 🔧 Useful Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality
```

---

## 💡 Tips

- **Hot Reload**: Changes save automatically in dev mode
- **Mobile Testing**: Use browser DevTools to test mobile view
- **Performance**: Check bundle size with `npm run build`
- **SEO**: Update meta tags in `index.html`

---

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Use different port
npm run dev -- --port 3000
```

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Blank Page
- Check browser console for errors
- Clear browser cache
- Restart dev server

---

## 📚 Learn More

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)

---

## 🎉 You're Ready!

Start customizing your portfolio and deploy it to the world! 🚀

For detailed deployment instructions, see `DEPLOYMENT.md`

