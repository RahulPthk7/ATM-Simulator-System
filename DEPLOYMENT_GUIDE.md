# ATM Simulator System - Deployment Guide 🚀

This guide will help you deploy your ATM Simulator System to both **GitHub Pages** (web version) and **Render** (Java application).

## 📋 Prerequisites

1. **GitHub Account**: For repository hosting and GitHub Pages
2. **Render Account**: For Java application deployment (free tier available)
3. **Git**: Installed on your local machine

## 🌐 Part 1: Deploy Web Version to GitHub Pages

### Step 1: Push to GitHub Repository

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: ATM Simulator System"
   ```

2. **Create a new repository on GitHub**:
   - Go to [GitHub](https://github.com)
   - Click "New repository"
   - Name it: `atm-simulator-system`
   - Make it public
   - Don't initialize with README (we already have files)

3. **Connect and push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/atm-simulator-system.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages

1. **Go to your repository settings**:
   - Navigate to your GitHub repository
   - Click on "Settings" tab
   - Scroll down to "Pages" in the left sidebar

2. **Configure Pages**:
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select "main"
   - **Folder**: Select "docs"
   - Click "Save"

3. **Wait for deployment**:
   - GitHub will automatically deploy your site
   - Your live URL will be: `https://YOUR-USERNAME.github.io/atm-simulator-system/`
   - It may take 5-10 minutes for the first deployment

### Step 3: Access Your Live Web Demo

✅ **Your web ATM simulator will be available at**:
```
https://YOUR-USERNAME.github.io/atm-simulator-system/
```

**Demo credentials for testing**:
- Card: `1234567812345678`, PIN: `1234` (Balance: $5,000)
- Card: `9876543210987654`, PIN: `9876` (Balance: $2,500)

---

## ☁️ Part 2: Deploy Java Application to Render

### Step 1: Prepare Your Repository

Make sure all the deployment files we created are in your repository:
- ✅ `Dockerfile`
- ✅ `build.sh`
- ✅ `render.yaml`

### Step 2: Create Render Account and Service

1. **Sign up for Render**:
   - Go to [render.com](https://render.com)
   - Sign up with GitHub (recommended)

2. **Create New Web Service**:
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select `atm-simulator-system` repository

3. **Configure the Service**:
   ```yaml
   Name: atm-simulator-java
   Environment: Docker
   Build Command: chmod +x build.sh && ./build.sh
   Start Command: /app/start.sh
   Instance Type: Free
   ```

4. **Environment Variables** (Optional):
   ```
   JAVA_OPTS=-Djava.awt.headless=true -Xms256m -Xmx512m
   DISPLAY=:1
   ```

### Step 3: Deploy

1. **Click "Create Web Service"**
2. **Wait for build** (this can take 5-15 minutes)
3. **Access your application** at the provided Render URL

> **Note**: The Java GUI application deployment to Render is complex because it requires a virtual display. For better results, consider creating a web API version of your Java application instead.

---

## 🔧 Alternative Deployment Options

### Option 1: Heroku (Java)
```bash
# Install Heroku CLI
# Create Procfile
echo "web: java -cp target/classes:target/dependency/* ASimulatorSystem.Login" > Procfile

# Deploy
heroku create your-app-name
git push heroku main
```

### Option 2: GitHub Codespaces (Development)
1. Enable Codespaces for your repository
2. Create a devcontainer configuration
3. Run the application in the cloud environment

### Option 3: Railway (Java Alternative)
1. Connect your GitHub repository to Railway
2. Configure build settings for Java
3. Deploy with one click

---

## 📊 Deployment Status Checklist

### GitHub Pages (Web Demo)
- [ ] Repository created and code pushed
- [ ] Pages enabled in repository settings
- [ ] `docs` folder configured as source
- [ ] GitHub Actions workflow running
- [ ] Live URL accessible
- [ ] Demo accounts working

### Render (Java App)
- [ ] Render account created
- [ ] Repository connected
- [ ] Docker configuration working
- [ ] Build successful
- [ ] Application running
- [ ] Virtual display configured

---

## 🐛 Troubleshooting

### GitHub Pages Issues:
- **404 Error**: Check if Pages is enabled and `docs` folder is selected
- **Files not updating**: Clear browser cache, check GitHub Actions
- **CSS/JS not loading**: Ensure file paths are correct and case-sensitive

### Render Issues:
- **Build failing**: Check Dockerfile and build.sh syntax
- **Display issues**: Java GUI apps are challenging on cloud platforms
- **Memory issues**: Upgrade to paid plan or optimize memory usage

### General Issues:
- **Git push rejected**: Pull latest changes first: `git pull origin main`
- **Permission denied**: Check file permissions: `chmod +x build.sh`

---

## 📝 Live URLs

After successful deployment, update these URLs:

1. **Web Demo (GitHub Pages)**:
   ```
   🌐 https://YOUR-USERNAME.github.io/atm-simulator-system/
   ```

2. **Java Application (Render)**:
   ```
   ☁️ https://your-app-name.onrender.com
   ```

---

## 🎯 Next Steps

1. **Custom Domain**: Configure a custom domain for GitHub Pages
2. **HTTPS**: Both GitHub Pages and Render provide HTTPS automatically
3. **Analytics**: Add Google Analytics to track usage
4. **Monitoring**: Set up uptime monitoring for Render deployment
5. **CI/CD**: Enhance GitHub Actions for automated testing

---

## 📞 Support

If you encounter issues:

1. **Check the logs**:
   - GitHub Actions logs in the "Actions" tab
   - Render build logs in the dashboard

2. **Common solutions**:
   - Ensure all file paths are correct
   - Check that all dependencies are included
   - Verify environment variables are set

3. **Resources**:
   - [GitHub Pages Documentation](https://docs.github.com/en/pages)
   - [Render Documentation](https://render.com/docs)

---

**🎉 Congratulations!** You now have both a web demo and cloud-hosted Java application for your ATM Simulator System!
