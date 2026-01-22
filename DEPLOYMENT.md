# Deployment Guide

## 🚀 Deploy to GitHub

### Step 1: Initialize Git Repository

Open your terminal in the project directory and run:

```bash
cd /Users/vikasshetty/Documents/vikas-portfolio
git init
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Repository name: `vikas-portfolio` (or any name you prefer)
4. Description: "My portfolio website"
5. Choose **Public** or **Private**
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

### Step 3: Add Remote and Push

```bash
# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace YOUR_USERNAME with vikasf99)
git remote add origin https://github.com/vikasf99/vikas-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note**: If you haven't set up GitHub authentication, you may need to:
- Use a Personal Access Token instead of password
- Or set up SSH keys

---

## 🌐 Deploy to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. **Push your code to GitHub first** (follow steps above)

2. Go to [Vercel](https://vercel.com) and sign in with GitHub

3. Click "Add New..." → "Project"

4. Import your repository:
   - Select `vikasf99/vikas-portfolio` from the list
   - Click "Import"

5. Configure Project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

6. Environment Variables (if any):
   - Add any environment variables if needed
   - For this project, none are required

7. Click "Deploy"

8. Wait for deployment (usually 1-2 minutes)

9. Your site will be live at: `https://vikas-portfolio.vercel.app` (or a custom domain if you set one up)

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (from project directory)
cd /Users/vikasshetty/Documents/vikas-portfolio
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? vikas-portfolio
# - Directory? ./
# - Override settings? No
```

### Option 3: One-Click Deploy

After pushing to GitHub, you can use this button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vikasf99/vikas-portfolio)

---

## 📝 Post-Deployment

### Custom Domain (Optional)

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Environment Variables

If you need to add environment variables later:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variables for Production, Preview, and Development

### Continuous Deployment

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every push to other branches (creates preview URLs)

---

## 🔧 Troubleshooting

### Build Errors

If you encounter build errors:

1. **Check build logs** in Vercel dashboard
2. **Test locally first**:
   ```bash
   npm run build
   ```
3. **Common issues**:
   - Missing dependencies → Run `npm install`
   - TypeScript errors → Fix in code
   - Missing environment variables → Add in Vercel dashboard

### Git Authentication Issues

If `git push` fails:

1. **Use Personal Access Token**:
   - GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Generate new token with `repo` scope
   - Use token as password when pushing

2. **Or use SSH**:
   ```bash
   # Generate SSH key
   ssh-keygen -t ed25519 -C "your_email@example.com"
   
   # Add to GitHub
   # Copy public key: cat ~/.ssh/id_ed25519.pub
   # GitHub → Settings → SSH and GPG keys → New SSH key
   
   # Change remote to SSH
   git remote set-url origin git@github.com:vikasf99/vikas-portfolio.git
   ```

---

## ✅ Verification Checklist

- [ ] Code pushed to GitHub
- [ ] Repository is accessible at github.com/vikasf99/vikas-portfolio
- [ ] Vercel project created
- [ ] Deployment successful
- [ ] Site is live and accessible
- [ ] All pages working (home, interaction-motion)
- [ ] Dark/light mode working
- [ ] Command palette working (desktop)
- [ ] All links working correctly

---

## 🎉 You're Done!

Your portfolio is now live! Share your Vercel URL with the world.

**Next Steps**:
- Add custom domain (optional)
- Set up analytics (optional)
- Continue improving and iterating!
