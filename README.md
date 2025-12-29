<div align="center">

# Sahil Kamal — Portfolio

### Personal Portfolio Website

🚀 **Live Production Site** — *Showcasing production software, engineering projects, and technical expertise*

[![Next.js](https://img.shields.io/badge/Next.js-16.1-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

---

**[🌐 Live Site](https://sahilkamal.dev)** · **[💼 LinkedIn](https://linkedin.com/in/sahilkamalny)** · **[🐙 GitHub](https://github.com/sahilkamalny)** · **[📧 Contact](mailto:sahilkamal.dev@gmail.com)**

</div>

---

## 📸 Screenshots

<div align="center">

| Hero Section | Project Timeline |
|:---:|:---:|
| ![Hero Section](assets/hero-section.png) | ![Timeline](assets/project-timeline.png) |

| Dark Mode | Projects Page |
|:---:|:---:|
| ![Dark Mode](assets/dark-mode.png) | ![Projects](assets/projects-page.png) |

</div>

---

## ✨ Features

### 🎨 Modern Design System
- **CSS Custom Properties**: Centralized design tokens for colors, spacing, and typography
- **Light/Dark Mode**: Smooth theme toggle with localStorage persistence
- **Responsive Layout**: Mobile-first design that scales beautifully to desktop

### 📜 Scroll-Animated Timeline
- Interactive project timeline with scroll-triggered animations
- Alternating left/right layout on desktop, linear on mobile
- Animated progress line that fills as you scroll
- Project cards with metrics, tech stack, and action buttons

### ✨ Smooth Animations
- **Framer Motion Integration**: Page transitions, hover effects, and scroll reveals
- **ScrollReveal Component**: Reusable scroll-triggered fade-in animations
- **CSS Keyframe Animations**: Performance-optimized fade-in effects

### 📄 Case Study Pages
- Dedicated pages for each featured project
- Technical deep-dives with architecture explanations
- Live demo links and GitHub repository links

### 🎯 Recruiter-Optimized
- Clear professional summary with quantifiable achievements
- Prominent contact CTAs (Email, LinkedIn, GitHub)
- Downloadable resume integration
- SEO-optimized metadata

---

## 🏗️ Architecture Overview

```mermaid
flowchart TB
    subgraph Client["Frontend (Next.js 16 App Router)"]
        Layout[Root Layout]
        Pages[Pages]
        Components[Components]
    end
    
    subgraph Pages
        Home[Home Page]
        Projects[Projects List]
        CaseStudy[Case Studies]
        Resume[Resume Page]
    end
    
    subgraph Components
        Timeline[ProjectTimeline]
        ThemeToggle[ThemeToggle]
        ScrollReveal[ScrollReveal]
        LogoLink[LogoLink]
    end
    
    Layout --> Pages
    Home --> Timeline
    Home --> ScrollReveal
    Layout --> ThemeToggle
    Layout --> LogoLink
```

### Key Architectural Decisions

| Component | Choice | Rationale |
|-----------|--------|-----------|
| **Framework** | Next.js 16 | App Router, RSC support, optimized builds |
| **UI Library** | React 19 | Latest features, improved performance |
| **Language** | TypeScript 5 | Type safety, better DX, self-documenting |
| **Styling** | Tailwind CSS 4 | Utility-first, CSS variables integration |
| **Animations** | Framer Motion 12 | Declarative animations, scroll triggers |
| **Fonts** | Custom + Google | Corporate S Pro + Geist Mono |

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with nav + footer
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # CSS custom properties + themes
│   │   ├── projects/           # Projects routes
│   │   │   ├── page.tsx        # Projects list
│   │   │   ├── relearnable/    # Case study
│   │   │   ├── tratlus/        # Case study
│   │   │   ├── flavorbot/      # Case study
│   │   │   └── kairo/          # Case study
│   │   └── resume/             # Resume page
│   ├── components/
│   │   ├── ProjectTimeline.tsx # Scroll-animated timeline
│   │   ├── ThemeToggle.tsx     # Dark/light mode toggle
│   │   ├── LogoLink.tsx        # Animated home link
│   │   └── ui/
│   │       └── ScrollReveal.tsx # Scroll animation wrapper
│   └── fonts/                  # Custom fonts
├── public/
│   ├── profile.png             # Profile image
│   └── resume.pdf              # Downloadable resume
├── tailwind.config.ts          # Tailwind configuration
├── next.config.ts              # Next.js configuration
└── package.json                # Dependencies
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/sahilkamalny/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Framework** | Next.js 16 (App Router) |
| **UI** | React 19, TypeScript 5 |
| **Styling** | Tailwind CSS 4, CSS Custom Properties |
| **Animation** | Framer Motion 12 |
| **Utilities** | clsx, tailwind-merge |
| **Fonts** | Corporate S Pro, Geist Mono |
| **Deployment** | Vercel |

---

## 📊 Featured Projects

| Project | Type | Highlights |
|---------|------|------------|
| **[Relearnable](https://relearnable.ai)** | AI SaaS | 80+ users, Knowledge Correction Engine |
| **[Tratlus](https://tratlus.vercel.app)** | AI Travel | Google APIs, Stripe integration |
| **FlavorBot** | Desktop App | 🏆 RamHacks 2025 Winner |
| **Kairo** | OS Shell | 100+ chainable commands |

---

## 📬 Contact

**Sahil Kamal** — Software Engineer

- 🌐 Portfolio: [sahilkamal.dev](https://sahilkamal.dev)
- 💼 LinkedIn: [linkedin.com/in/sahilkamalny](https://linkedin.com/in/sahilkamalny)
- 🐙 GitHub: [github.com/sahilkamalny](https://github.com/sahilkamalny)
- 📧 Email: [sahilkamal.dev@gmail.com](mailto:sahilkamal.dev@gmail.com)

---

<div align="center">

### 📝 License

This project is open source under the [MIT License](LICENSE).

**© 2025 Sahil Kamal**

</div>
