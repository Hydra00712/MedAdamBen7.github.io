# How to Host Your Portfolio on GitHub Pages

## Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click the **+** icon in the top right → **New repository**
3. Name it: `portfolio` (or any name you prefer)
4. Choose **Public** (so it's visible to everyone)
5. Click **Create repository**

## Step 2: Initialize Git in Your Project

Open PowerShell in your portfolio folder and run:

```powershell
cd portfolio
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Update vite.config.ts for GitHub Pages

Edit `portfolio/vite.config.ts` and add the `base` property:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  // Add this line
})
```

If you named your repo differently, replace `portfolio` with your repo name.

## Step 4: Build and Deploy

1. Build the project:
```powershell
npm run build
```

2. Create a `gh-pages` branch and deploy:
```powershell
npm install --save-dev gh-pages
```

3. Add deploy scripts to `package.json`:

Find the `"scripts"` section and add:
```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "preview": "vite preview",
  "deploy": "npm run build && npx gh-pages -d dist"
}
```

4. Deploy:
```powershell
npm run deploy
```

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select **gh-pages** branch and **/ (root)** folder
5. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio/`

## Alternative: Deploy with GitHub Actions (Automatic)

Create `.github/workflows/deploy.yml`:

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

Then just push to main and it deploys automatically!

## Troubleshooting

**Site not showing?**
- Wait 5-10 minutes for GitHub to process
- Check that `base: '/portfolio/'` is in vite.config.ts
- Verify gh-pages branch exists in Settings → Pages

**Styles not loading?**
- Make sure `base` path matches your repo name exactly
- Clear browser cache (Ctrl+Shift+Delete)

**Want a custom domain?**
- In Settings → Pages, add your custom domain
- Update your domain's DNS records (see GitHub docs)

## Quick Commands Reference

```powershell
# First time setup
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main

# After making changes
git add .
git commit -m "Your message"
git push

# Deploy
npm run deploy
```

Done! Your portfolio is now live on GitHub Pages! 🚀

