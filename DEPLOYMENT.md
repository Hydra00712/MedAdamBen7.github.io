# Deployment Guide - Mohamed Benaddi Portfolio

This guide provides step-by-step instructions for deploying your portfolio to various platforms.

## 🚀 Quick Start

### Build for Production

```bash
cd portfolio
npm run build
```

This creates a `dist` folder with optimized production files.

## 📍 Deployment Options

### 1. GitHub Pages (Free & Easy)

**Best for**: Personal portfolios, GitHub integration

#### Steps:

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Update Vite Config** (if using subdirectory)
   
   Edit `vite.config.ts`:
   ```typescript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     base: '/portfolio/', // Change to your repo name
     plugins: [react()],
   })
   ```

3. **Create GitHub Actions Workflow**
   
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

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - Wait for workflow to complete
   - Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio`

---

### 2. Vercel (Recommended - Fastest)

**Best for**: Best performance, automatic deployments, free tier

#### Steps:

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow Prompts**
   - Connect GitHub account
   - Select project
   - Vercel auto-detects Vite configuration
   - Your site goes live instantly!

4. **Custom Domain** (Optional)
   - Go to Vercel Dashboard
   - Project Settings → Domains
   - Add your custom domain

---

### 3. Netlify (Easy & Powerful)

**Best for**: Drag-and-drop simplicity, great features

#### Option A: CLI Deployment

```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

#### Option B: Web Interface

1. Build locally: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Your site is live!

#### Option C: Git Integration

1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Auto-deploys on every push!

---

### 4. AWS S3 + CloudFront

**Best for**: Enterprise, custom domain, full control

#### Steps:

1. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://your-portfolio-bucket
   ```

2. **Build Project**
   ```bash
   npm run build
   ```

3. **Upload to S3**
   ```bash
   aws s3 sync dist/ s3://your-portfolio-bucket --delete
   ```

4. **Create CloudFront Distribution**
   - AWS Console → CloudFront
   - Create distribution
   - Origin: Your S3 bucket
   - Enable HTTPS
   - Add custom domain (Route 53)

---

### 5. Docker Deployment

**Best for**: Containerized environments, production servers

#### Create Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

#### Build and Run

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## 🔧 Environment Configuration

### Update Meta Tags

Edit `index.html` to update:
- `og:url` - Your domain
- `og:image` - Social media preview image
- `twitter:image` - Twitter preview

### Update Contact Links

Edit components to update:
- Email address
- LinkedIn profile
- GitHub profile
- Phone number

---

## ✅ Pre-Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test production build: `npm run preview`
- [ ] Update all contact information
- [ ] Update meta tags with your domain
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify animations perform well
- [ ] Test form submission
- [ ] Check SEO meta tags
- [ ] Optimize images if added

---

## 🔍 Post-Deployment Testing

### Performance Check

```bash
# Lighthouse audit
npm install -g lighthouse
lighthouse https://your-domain.com
```

### SEO Check

- Use Google Search Console
- Submit sitemap
- Check mobile-friendly
- Verify meta tags

### Browser Testing

- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers

---

## 🚨 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Blank Page After Deploy

- Check browser console for errors
- Verify `base` path in `vite.config.ts`
- Clear browser cache
- Check file permissions

### Slow Performance

- Optimize images
- Enable gzip compression
- Use CDN
- Check bundle size: `npm run build -- --analyze`

---

## 📊 Monitoring

### Google Analytics

Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Uptime Monitoring

- Use UptimeRobot (free)
- Set up alerts for downtime
- Monitor performance metrics

---

## 🔐 Security

- Enable HTTPS (all platforms do this)
- Keep dependencies updated: `npm audit fix`
- Use environment variables for sensitive data
- Regular security scans

---

## 📞 Support

For deployment issues:
- Check platform documentation
- Review error logs
- Test locally first
- Ask in community forums

---

**Happy Deploying! 🎉**

