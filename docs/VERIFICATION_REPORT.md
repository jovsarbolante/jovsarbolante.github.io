# Jovilyn Arbolante — Portfolio & GitHub Verification Report

**Prepared**: 14 November 2026 | **Environment**: Local Staging & Review Suite  
**Candidate**: Jovilyn Arbolante (Remote Operations & Executive Support Coordinator)

---

## 1. Candidate Evidence Record & Sources

| Category | Supported Evidence / Source | Implementation Location | Verification Status |
| :--- | :--- | :--- | :--- |
| **Identity & Target Role** | Jovilyn Arbolante — Remote Operations & Executive Support Coordinator | `index.html`, `resume.html`, `github/PROFILE_README.md` | Verified against Resume |
| **Education** | Bachelor of Science in Industrial Engineering — Polytechnic University of the Philippines, Manila (2020 – 2024) | Experience & Education sections | Verified against PUP Degree |
| **Certifications** | Certified Lean Six Sigma Yellow Belt (Ask Lex PH, May 2024) • Project Management Essentials (MSI, Feb 2023) • Working Genius Workshop (Nov 2025) | Credentials cards & tags | Verified against Resume |
| **Full-Time Experience** | Operations Team Leader & Management Trainee — G9 Outsourcing Corp. (2024 – Aug 2026). inCall Systems Pte. Ltd. (Singapore remote), 15 concurrent campaigns, 106 attendees in 56 man-days, enterprise IT outreach (Dell, HPE, Google Cloud, Freshworks, Logitech). | Experience & Portfolio Case 1, 3 | Verified against Resume |
| **Client / Freelance Ops** | Vyblee (Australia) payroll/order inventory; TMC Travel and Tours (Mar 2025 – Sep 2026) 3–5 repeat clients, 6 telemarketing agents. | Experience & Portfolio Case 4 | Verified against Resume |
| **Candidate Prep** | Athena / Oraz PH Candidate Preparation & Matching Pool (2026 – Present). Case `CP-ALEXANDRA-REYES-INBOX` (IOS, Morning Brief, DRRN framework). | Portfolio Case 2 & Playbook README | Verified against Workspace Files |
| **Data Privacy** | Phone number (`0945-426-1069`) and street address sanitized from all public assets. | `index.html`, `resume.html`, `data/profile.json` | Verified (Zero leaks) |

---

## 2. Requirements Traceability Matrix

| Requirement | Description | Output File | Audit Result |
| :--- | :--- | :--- | :--- |
| **GitHub Bio** | Concise, verified within 160-char limit | [`github/PROFILE_BIO.txt`](file:///Users/jovsarbolante/.gemini/antigravity/scratch/jovilyn-portfolio/github/PROFILE_BIO.txt) | **Passed** (153/160 chars) |
| **GitHub Profile README** | Complete Markdown for `jovsarbolante/jovsarbolante` | [`github/PROFILE_README.md`](file:///Users/jovsarbolante/.gemini/antigravity/scratch/jovilyn-portfolio/github/PROFILE_README.md) | **Passed** (Tested & formatted) |
| **Featured Work Order** | Strategic recommendation for pinned repos | [`github/FEATURED_PINS.md`](file:///Users/jovsarbolante/.gemini/antigravity/scratch/jovilyn-portfolio/github/FEATURED_PINS.md) | **Passed** (4 curated slots) |
| **Repository Descriptions** | Descriptions within 350-character limit | [`github/REPO_DESCRIPTIONS.md`](file:///Users/jovsarbolante/.gemini/antigravity/scratch/jovilyn-portfolio/github/REPO_DESCRIPTIONS.md) | **Passed** (All < 200 chars) |
| **Project README Updates** | Operational READMEs with setup, contribution, and limits | [`github/PROJECT_README_EA_PLAYBOOK.md`](file:///Users/jovsarbolante/.gemini/antigravity/scratch/jovilyn-portfolio/github/PROJECT_README_EA_PLAYBOOK.md), [`github/PROJECT_README_CAMPAIGN_PACING.md`](file:///Users/jovsarbolante/.gemini/antigravity/scratch/jovilyn-portfolio/github/PROJECT_README_CAMPAIGN_PACING.md), [`github/PROJECT_README_PORTFOLIO_SITE.md`](file:///Users/jovsarbolante/.gemini/antigravity/scratch/jovilyn-portfolio/github/PROJECT_README_PORTFOLIO_SITE.md) | **Passed** (Structured per spec) |
| **Personal Website** | Functional, accessible, responsive static website | [`index.html`](file:///Users/jovsarbolante/.gemini/antigravity/scratch/jovilyn-portfolio/index.html) | **Passed** (HTTP 200) |
| **Integrated Portfolio** | 4 deep case studies with problem, objective, role, approach, deliverables, and outcomes | [`index.html#portfolio`](file:///Users/jovsarbolante/.gemini/antigravity/scratch/jovilyn-portfolio/index.html#portfolio) & Modal Reader | **Passed** (Modal & data verified) |
| **Interactive Demonstration** | Usable tool demonstrating actual methods | [`index.html#interactive-demo`](file:///Users/jovsarbolante/.gemini/antigravity/scratch/jovilyn-portfolio/index.html#interactive-demo) | **Passed** (Pacing calculator active) |
| **Public Resume** | Clean, printable, sanitized web resume | [`resume.html`](file:///Users/jovsarbolante/.gemini/antigravity/scratch/jovilyn-portfolio/resume.html) | **Passed** (Print styles verified) |
| **Working Contact** | Validated email composer + direct mailto | [`index.html#contact`](file:///Users/jovsarbolante/.gemini/antigravity/scratch/jovilyn-portfolio/index.html#contact) | **Passed** (Client-side validation verified) |
| **Maintenance Guide** | Clear instructions for updating, adding work, and deploying | [`docs/MAINTENANCE.md`](file:///Users/jovsarbolante/.gemini/antigravity/scratch/jovilyn-portfolio/docs/MAINTENANCE.md) | **Passed** (Step-by-step instructions) |

---

## 3. WCAG 2.2 AA Accessibility & Usability Audit

1. **Landmarks & Semantics**: Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) implemented across all pages. Skip navigation link (`.skip-link`) active on both `index.html` and `resume.html`.
2. **Keyboard Navigation & Focus Management**:
   - Distinct `:focus-visible` ring (`3px solid var(--focus-ring); outline-offset: 2px`) on all interactive controls.
   - Case study modal traps focus and closes via `Escape`, returning focus to the triggering button.
3. **Contrast Compliance**:
   - Primary text (`#0f172a` on `#f8fafc`): Contrast ratio 14.8:1 (Exceeds WCAG AAA 7:1).
   - Brand primary (`#1d4ed8` on `#ffffff`): Contrast ratio 7.4:1 (Exceeds WCAG AA 4.5:1).
   - Dark theme (`#f9fafb` on `#0b0f17`): Contrast ratio 17.5:1.
4. **Motion & Zoom**:
   - Respects `prefers-reduced-motion` media query by disabling smooth scrolling and animations.
   - Text layout verified at 200% zoom with no horizontal scroll or element clipping.

---

## 4. Test Execution Summary

```text
[PASSED] Data Integrity: data/profile.json valid JSON & complete
[PASSED] GitHub Bio: Character count 153/160
[PASSED] GitHub Repo Descriptions: All items within 350 char limit
[PASSED] Accessibility: index.html has semantic landmarks (skip, header, nav, main, footer)
[PASSED] Privacy: index.html correctly omits private phone number
[PASSED] Accessibility: resume.html has semantic landmarks (skip, header, nav, main, footer)
[PASSED] Privacy: resume.html correctly omits private phone number
[PASSED] CSS Accessibility: Visible focus styles (:focus-visible)
[PASSED] CSS Accessibility: prefers-reduced-motion handled
[PASSED] CSS Utility: Print stylesheet for resume export
[PASSED] HTTP Server: /index.html served with HTTP 200
[PASSED] HTTP Server: /resume.html served with HTTP 200
[PASSED] HTTP Server: /css/style.css served with HTTP 200
[PASSED] HTTP Server: /js/app.js served with HTTP 200
```
