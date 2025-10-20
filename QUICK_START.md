# Quick Start Guide

## Running Locally

```powershell
cd portfolio
npm install
npm run dev
```

Visit `http://localhost:5173/` in your browser.

## Building for Production

```powershell
npm run build
```

This creates a `dist` folder with optimized files.

## Hosting on GitHub Pages (5 Minutes)

### Step 1: Create GitHub Repo
- Go to github.com → New Repository
- Name: `portfolio`
- Make it Public
- Create

### Step 2: Push Code to GitHub

```powershell
cd portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 3: Update vite.config.ts

Add this line to `vite.config.ts`:
```typescript
base: '/portfolio/',
```

### Step 4: Deploy

```powershell
npm install --save-dev gh-pages
npm run build
npx gh-pages -d dist
```

### Step 5: Enable GitHub Pages

- Go to your repo → Settings → Pages
- Select `gh-pages` branch
- Save

**Your site is live at:** `https://YOUR_USERNAME.github.io/portfolio/`

## Update Your Links

Edit `portfolio/src/components/Footer.tsx` and `Hero.tsx`:

Replace:
- `https://github.com` → Your GitHub profile URL
- `https://www.linkedin.com/in/...` → Your LinkedIn URL
- `mailto:db11911918@gmail.com` → Your email

## File Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── App.css
│   └── index.css
├── vite.config.ts
├── package.json
└── tsconfig.json
```

## Customization

### Change Your Name
Edit `src/components/Hero.tsx` line 94

### Update Projects
Edit `src/components/Projects.tsx` - modify the `projects` array

### Update Experience
Edit `src/components/Experience.tsx` - modify the `experiences` array

### Update Skills
Edit `src/components/Skills.tsx` - modify the `skillCategories` array

### Update Colors
Edit `src/index.css` - change the gradient colors

## Need Help?

See `GITHUB_HOSTING_GUIDE.md` for detailed instructions.

---

**Your portfolio is production-ready!** 🚀

