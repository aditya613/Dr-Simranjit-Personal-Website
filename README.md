# Academic Portfolio Website — Dr. Simranjit Singh

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Motion](https://img.shields.io/badge/Motion-Framer-FF0055?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

<p align="center">
  A high-end, responsive personal academic portfolio website designed and engineered for <strong>Dr. Simranjit Singh</strong> — Associate Professor in the Department of Electronics & Communication Engineering at <strong>Punjab Engineering College (PEC), Chandigarh</strong>.
</p>

[Live Demo](#) · [Key Features](#-key-features) · [Tech Stack](#-tech-stack) · [Project Structure](#-project-structure) · [Getting Started](#-getting-started)

</div>

---

## 👨‍🏫 About the Professor

**Dr. Simranjit Singh** is an acclaimed researcher and educator with over 15 years of academic excellence:
- **Top 2% Most-Cited Scientist Worldwide** by Stanford University & Elsevier (2021 & 2025).
- **Fellow IETE** & **Senior Member IEEE** (Executive Committee member of IEEE Delhi Section & Vice Chair of IEEE Photonics Society Rajasthan Chapter).
- **Postdoctoral Associate (UGC Raman Fellow)** at **The Institute of Optics, University of Rochester, NY, USA** under Prof. Govind P. Agrawal.
- **Coordinator of DoT-sponsored 5G Use Case Lab** at PEC — ranked **#1 Nationally** among 100 labs across India (Dec. 2025).
- **73 SCI-indexed journal papers** (cumulative impact factor > 108), 1,305+ citations, H-index 20, 1 Indian Patent, and 3 Springer books/chapters.
- **₹3.9 Crore+** in sponsored research grants from SERB, DST, MeitY, UGC, ANRF, and RUSA.

---

## ✨ Design Philosophy & UX

The website was designed with a **"Soft Structuralism" modern academic white theme** that balances visual elegance with scholarly authority:

- **Refined Color Palette**: Crisp white (`#ffffff`) and porcelain slate (`#f8fafc`) backgrounds paired with high-contrast rich ink typography (`#090d16` / `#0f172a`) and prestigious royal cobalt accents (`#1d4ed8`).
- **Elevated Card Architecture**: Double-bezel cards with hairline borders (`#e2e8f0`), subtle glassmorphism, and soft diffused ambient shadows.
- **Haptic Motion & Scroll Reveals**: Fluid, physics-based scroll transitions powered by Motion with hardware-accelerated animations (`transform` and `opacity`).
- **Zero Hydration Mismatches**: Strictly clean SSR and client-hydration architecture in Next.js 16 App Router.
- **Mobile-First Responsiveness**: Smooth collapsible mobile navigation with animated hamburger morph and responsive grids.

---

## 📑 Website Sections

| Section | Description |
| :--- | :--- |
| **Hero** | High-resolution portrait framing with ambient halo, credential badges (IETE Fellow, IEEE Senior Member, Raman Fellow), quick impact metrics, and primary CTAs. |
| **About & Biography** | Complete academic narrative from TIET to Rochester and PEC, education qualification timeline, verified identifiers (ORCID, Scopus, Google Scholar, ResearchGate), and memberships. |
| **Research & Expertise** | Interactive cards for 3 core domains (Optical Fiber Communications, 5G/6G MIMO Antennas, Information Security & ML), 8 sponsored research grants with live status tags, and faculty awards. |
| **Publications & Patent** | Citation metrics dashboard (73 SCI, 1,305 citations, H-20), 64-element MIMO patent highlight, Springer books/chapters, and 8 highlighted SCI journal publications with Impact Factors. |
| **Teaching & Experience** | Career timeline (PEC, Univ. of Rochester, Punjabi Univ., Thapar Univ.), editorial board appointments (SPIE, DRDO, IETE, IET), courses taught, and PhD supervision records. |
| **Skills & Leadership** | Domain skill tags, simulation software proficiencies (OptiSystem, CST, MATLAB, Qiskit), IEEE executive roles, and institutional leadership responsibilities at PEC (IIC President, EIC Coordinator). |
| **Contact & Footer** | Direct institutional email, phone, department office coordinates, external profiles, and academic copyright footer. |

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Webpack runtime)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type checking)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Design Tokens
- **Animations**: [Motion](https://motion.dev/) (`motion/react`)
- **Iconography**: [@phosphor-icons/react](https://phosphoricons.com/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) via `next/font` (`Outfit` + `JetBrains Mono`)

---

## 📂 Project Structure

```text
Dr-Simranjit-Personal-Website/
├── Dr.Simranjit.jpg                     # High-res source portrait
├── Dr_Simranjit_Singh_Portfolio_Content.md # Complete resume and data source
├── portfolio/                           # Next.js Application Root
│   ├── app/
│   │   ├── components/
│   │   │   ├── Navbar.tsx               # Floating glass header & mobile drawer
│   │   │   ├── Hero.tsx                 # Hero section, portrait & stat counters
│   │   │   ├── About.tsx                # Bio, academic identifiers & education
│   │   │   ├── Research.tsx             # Domains, grants list & award highlights
│   │   │   ├── Publications.tsx         # Books, patent, SCI papers & metrics
│   │   │   ├── Teaching.tsx             # Positions, editorial appointments & courses
│   │   │   ├── Skills.tsx               # Tech stack, IEEE & PEC leadership
│   │   │   └── Contact.tsx              # Direct contact cards & academic footer
│   │   ├── globals.css                  # Design system tokens, utilities & cards
│   │   ├── layout.tsx                   # SEO metadata, OpenGraph tags & typography
│   │   └── page.tsx                     # Single-page application assembler
│   ├── public/
│   │   └── Dr.Simranjit.jpg             # Public optimized portrait
│   ├── next.config.ts                   # Next.js configuration
│   ├── package.json                     # Dependencies & scripts
│   └── tsconfig.json                    # TypeScript compiler options
└── README.md                            # Repository showcase documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js 18.18+** or higher and `npm` installed.

### 1. Clone the repository
```bash
git clone https://github.com/aditya613/Dr-Simranjit-Personal-Website.git
cd Dr-Simranjit-Personal-Website/portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 🌐 Deployment

This website is ready for seamless deployment on **Vercel**:

1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com/new).
3. Set the **Root Directory** to `portfolio`.
4. Deploy — Vercel will automatically build and optimize the site globally.

---

## 👤 Author & Acknowledgements

- **Website Built by**: [Aditya](https://github.com/aditya613)
- **Built for**: **Dr. Simranjit Singh**, Associate Professor, Dept. of ECE, Punjab Engineering College (PEC), Chandigarh, India.
- **Academic Content**: Verified and sourced from institutional records and Dr. Singh's curriculum vitae.
