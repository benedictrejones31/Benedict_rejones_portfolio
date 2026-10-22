# W Benedict Rejones — AI Engineer Portfolio

A production-grade, corporate-standard single-page portfolio engineered for **W Benedict Rejones**, AI Engineer.

Built with **React 18, TypeScript, Vite, Tailwind CSS, Framer Motion**, and **Lucide Icons**. All content is centralized in a single typed configuration file, allowing non-developers to edit copy, links, projects, and credentials without altering component code.

---

## 🚀 Quick Start

### 1. Prerequisites
- Node.js `18.x` or higher (tested on Node 20.x)
- npm or yarn

### 2. Installation
```bash
npm install
```

### 3. Local Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the live site with hot module replacement (HMR).

### 4. Production Build
```bash
npm run build
```
The optimized static build will be placed in the `dist/` directory.

---

## 📝 Editing Portfolio Content

All personal details, project entries, metrics, skills, and links reside in:
```
src/data/portfolio.ts
```

### Key Sections in `portfolio.ts`:
- **`meta`**: Name, headline, 2-line hero statement, profile photo toggle, and résumé link toggle.
- **`social`**: Email, phone, LinkedIn, GitHub, and LeetCode URLs.
- **`stats`**: At-a-glance verified metrics (e.g., ROC-AUC 0.97, 99.2% accuracy, 7 shipped projects).
- **`about`**: Professional narrative and three focus areas.
- **`projects`**: Ranked list of 9 AI/ML projects with outcome statements, metric badges, architectural highlights, and GitHub repository links.
- **`skills`**: 8 categorized skill groups (PyTorch, RAG, Computer Vision, MLOps, etc.).
- **`education` & `certifications`**: Degree, GPA, and accredited certifications.
- **`recognition`**: Hackathon finishes, LeetCode milestones, and bootcamp achievements.
- **`contact`**: Contact headings, SLA response notes, and Resend API key.

---

## 🎨 Design System & Motion

- **Muted, Restrained Palette**:
  - Light theme: Warm off-white (`#F7F6F2`), crisp surface cards (`#FFFFFF`), muted sage-teal accent (`#5E7C7A`).
  - Dark theme: Restrained charcoal (`#14181B`), elevated slate surfaces (`#1B2024`), soft sage accent (`#8FB0AC`).
  - Strict WCAG AA contrast compliance in both modes.
- **Quiet Motion**:
  - Theme toggle: Sun/Moon 90° cross-fade over 250ms.
  - Project cards: Accordion architectural breakdown with single-open state management and rotated chevron.
  - Category filters: Pill toggle with sliding spring indicator.
  - Respects user's `prefers-reduced-motion` settings automatically.

---

## 🚢 Deployment Guide

### Deploying to Vercel (Recommended)
This repository contains a pre-configured `vercel.json` and a serverless endpoint `/api/send.ts` powered by Resend for handling direct contact inquiries.

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete professional portfolio"
   git push origin main
   ```
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import `benedictrejones31/Benedict_rejones_portfolio`.
4. In **Environment Variables**, add:
   - `RESEND_API_KEY`: `your_resend_api_key_here` (from your Resend dashboard)
5. Click **Deploy**. Vercel will build the Vite app and serve the static assets worldwide on edge CDN.

### Deploying to Netlify
1. Connect your repository on Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Set `RESEND_API_KEY` in Netlify environment variables if using Netlify functions.

### Deploying to GitHub Pages
1. In `vite.config.ts`, set `base: '/Benedict_rejones_portfolio/'` (if hosted on repository subpath) or leave `'/'` for custom domains.
2. Run `npm run build`.
3. Deploy the `dist` directory to your `gh-pages` branch.

---

## 📄 License
MIT © W Benedict Rejones

