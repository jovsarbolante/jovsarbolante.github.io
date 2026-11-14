# Jovilyn Arbolante — Portfolio & GitHub Maintenance Playbook

This document provides clear, step-by-step maintenance instructions for updating professional information, modifying portfolio items, generating new resume versions, and deploying changes to GitHub and GitHub Pages.

---

## 1. Running and Testing Locally

The personal website is built with clean, zero-dependency HTML5, CSS3, and JavaScript. It runs locally with Python 3's built-in web server.

### Local Server Launch:
```bash
# 1. Open Terminal and navigate to the project root
cd /Users/jovsarbolante/.gemini/antigravity/scratch/jovilyn-portfolio

# 2. Launch HTTP server on port 8000
python3 -m http.server 8000

# 3. Open in your browser:
# http://localhost:8000
# http://localhost:8000/resume.html
```

---

## 2. Deploying to GitHub & GitHub Pages

To make the personal website publicly live on `https://jovsarbolante.github.io`:

### Step A: Create the GitHub Repository
1. Log in to your GitHub account (`jovsarbolante`).
2. Create a new public repository named exactly:  
   `jovsarbolante.github.io`
   *(GitHub automatically serves public repositories with this exact naming pattern as a GitHub Pages site).*

### Step B: Initialize Git and Push Files
```bash
cd /Users/jovsarbolante/.gemini/antigravity/scratch/jovilyn-portfolio

# Initialize Git
git init
git branch -M main

# Add files (excluding private scratch files)
git add index.html resume.html css/ js/ data/ docs/ github/

# Commit
git commit -m "feat: release initial evidence-based portfolio and public resume"

# Add remote and push (requires GitHub credentials or SSH key)
git remote add origin https://github.com/jovsarbolante/jovsarbolante.github.io.git
git push -u origin main
```

### Step C: Verify GitHub Pages Settings
1. On GitHub, navigate to **Settings > Pages**.
2. Under **Build and deployment**, ensure **Source** is set to `Deploy from a branch`.
3. Select `main` branch and `/ (root)` folder, then click **Save**.
4. Within 1–2 minutes, your site will be live at `https://jovsarbolante.github.io`.

---

## 3. Setting Up Your GitHub Profile README & Pinned Repositories

### Step A: Create the Profile README Repository
1. On GitHub, create a new repository named exactly:  
   `jovsarbolante`
2. Set visibility to **Public**.
3. Check **Add a README file** (or push locally).
4. Copy the complete markdown from `github/PROFILE_README.md` and commit it as `README.md` in the root of `jovsarbolante/jovsarbolante`.

### Step B: Update Your GitHub Profile Bio
1. On GitHub, go to your profile page (`https://github.com/jovsarbolante`).
2. Click **Edit profile**.
3. In the **Bio** box, paste the verified bio from `github/PROFILE_BIO.txt`:  
   ```text
   Remote Operations & Executive Support Coordinator | BS Industrial Engineering | Lean Six Sigma Yellow Belt | Cross-border team lead & executive workflows
   ```
4. Enter Location: `Metro Manila, Philippines`
5. Enter Website: `https://jovsarbolante.github.io`
6. Click **Save**.

### Step C: Pin Your Repositories
1. On your profile page, click **Customize your pins**.
2. Select your repositories in the recommended order (from `github/FEATURED_PINS.md`):
   1. `jovsarbolante.github.io`
   2. `ea-operations-playbook`
   3. `cross-border-campaign-pacing-model`
   4. `sop-and-workflow-engine`
3. Click **Save pins**.

---

## 4. How to Update Professional Information

All core claims, metrics, experience, education, and credentials originate in:  
[`data/profile.json`](file:///Users/jovsarbolante/.gemini/antigravity/scratch/jovilyn-portfolio/data/profile.json)

### To Update Experience or Metrics:
1. Edit `data/profile.json`.
2. Update the corresponding section in `index.html` (e.g., `#experience`, `#capabilities`).
3. Update `resume.html` to keep dates and accomplishments in sync.
4. Run the automated verification script (`python3 test_portfolio.py`) to confirm link and data integrity.

---

## 5. How to Add or Edit a Portfolio Case Study

1. **In `data/profile.json`**:
   * Add a new object under `"portfolioCases"` with `id`, `badge`, `title`, `clientOrContext`, `summary`, `problem`, `objective`, `myRole`, `approach`, `deliverables`, `outcome`, and `evidenceType`.
2. **In `js/app.js`**:
   * Add the new case data to `caseStudyData` dictionary matching the `id`.
3. **In `index.html`**:
   * Add a corresponding `<article class="portfolio-card">` with `data-case-id="your-new-case-id"` on its button.

---

## 6. How to Update or Print the Public Resume

1. Open `resume.html` in your browser.
2. Click **🖨️ Print / Save as PDF** or press `Cmd+P` (Mac) / `Ctrl+P` (Windows).
3. The custom CSS `@media print` rules automatically hide the header, navigation, and buttons, producing an unblemished, professional 1–2 page PDF resume.
4. Privacy Standard: Always ensure phone number and street address remain omitted from public-facing files.
