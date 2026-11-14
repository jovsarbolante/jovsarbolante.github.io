# Jovilyn Arbolante — Portfolio & Systems Showcase (`jovsarbolante.github.io`)

**Production Repository for Personal Website, Operational Case Studies, and Public Resume**

> **Live Preview / GitHub Pages**: `https://jovsarbolante.github.io`  
> **Author**: Jovilyn Arbolante (Remote Operations & Executive Support Coordinator)  
> **Architecture**: Semantic Static Website (HTML5, Vanilla CSS3, Vanilla JS, Zero Fragile Dependencies)

---

## 1. Purpose & Intended Audience

This repository contains the complete source code for Jovilyn Arbolante's professional personal website and integrated portfolio. Designed specifically for an Executive Support and Operations leader, it emphasizes **clarity, accessible design (WCAG 2.2 AA), structured evidence, and zero fluff**.

**Intended Audience**:
* Founders, executives, and hiring managers seeking an executive assistant or operations coordinator.
* Athena / Oraz PH evaluation partners and client-matching managers.
* Prospective partners and clients.

---

## 2. Features & Architecture

* **Evidence-Based Portfolio**: 4 in-depth operational case studies covering Industrial Engineering campaign pacing, simulated EA inbox architecture (DRRN framework), distributed team standup rhythms, and international client operations.
* **Interactive Campaign Pacing Calculator**: An inspectable, interactive tool embedded directly in the site allowing visitors to simulate man-day vs. quota pacing variations.
* **Dedicated Public Resume**: Clean, printable, and downloadable sanitized public resume (protecting personal private details per security guidelines).
* **Accessible & Fast**:
  * Meets WCAG 2.2 AA guidelines (keyboard accessible, visible focus, high contrast, semantic landmarks).
  * 100% lightweight static code with zero external tracking scripts, heavy frameworks, or external fonts.
  * Native dark/light mode toggle with persistent user preference.
* **Direct Working Contact**: Mailto integration with pre-formatted inquiry parameters and truthful client-side form validation.

---

## 3. Local Development & Testing

Run locally with Python 3:

```bash
# Navigate to the repository root
cd jovsarbolante.github.io

# Start local HTTP server
python3 -m http.server 8000

# Open in browser:
# http://localhost:8000
```

---

## 4. Maintenance & Updates

* All profile claims, metrics, experience, and case study texts are centralized in `data/profile.json` and mirrored in semantic HTML in `index.html` and `resume.html`.
* Detailed deployment and maintenance procedures are documented in [`docs/MAINTENANCE.md`](file:///Users/jovsarbolante/.gemini/antigravity/scratch/jovilyn-portfolio/docs/MAINTENANCE.md).
