# System Architecture

Detailed technical documentation of the Portfolio website's architecture, design patterns, and component structure.

---

## High-Level Architecture

```mermaid
flowchart TB
    subgraph Browser["Browser"]
        Client[Next.js Client]
    end
    
    subgraph NextJS["Next.js 16 App Router"]
        RSC[React Server Components]
        ClientComp[Client Components]
        Layout[Root Layout]
        Pages[Page Routes]
    end
    
    subgraph Styling["Styling Layer"]
        Tailwind[Tailwind CSS 4]
        CSSVars[CSS Custom Properties]
        Themes[Light/Dark Themes]
    end
    
    subgraph Animation["Animation Layer"]
        Framer[Framer Motion]
        CSS[CSS Keyframes]
    end
    
    Client --> NextJS
    Layout --> Tailwind
    Tailwind --> CSSVars
    CSSVars --> Themes
    ClientComp --> Framer
    RSC --> Layout
    Layout --> Pages
```

---

## Component Hierarchy

```mermaid
graph TD
    RootLayout[RootLayout]
    RootLayout --> Nav[Navigation]
    RootLayout --> Main[Main Content]
    RootLayout --> Footer[Footer]
    
    Nav --> LogoLink
    Nav --> NavLinks[Nav Links]
    Nav --> ThemeToggle
    
    Main --> HomePage
    Main --> ProjectsPage
    Main --> CaseStudies
    Main --> ResumePage
    
    HomePage --> HeroSection
    HomePage --> SelectedWork
    HomePage --> ProjectTimeline
    HomePage --> ContactSection
    
    ProjectTimeline --> TimelineItem[TimelineItem x4]
    
    subgraph Animations
        ScrollReveal
        MotionDiv[motion.div]
    end
    
    HeroSection --> ScrollReveal
    SelectedWork --> ScrollReveal
    ContactSection --> ScrollReveal
    TimelineItem --> MotionDiv
```

---

## Design System

### CSS Custom Properties

The design system uses CSS custom properties for theming:

```css
/* Light Mode (Default) */
:root {
  --background: #ffffff;
  --foreground: #171717;
  --muted: #737373;
  --accent: #1C64F2;
  --accent-hover: #1a56db;
  --success: #22c55e;
  --border: #e5e5e5;
  --card: #ffffff;
}

/* Dark Mode */
:root.dark {
  --background: #0a0a0a;
  --foreground: #e5e5e5;
  --muted: #a3a3a3;
  --accent: #1C64F2;
  --accent-hover: #3b82f6;
  --success: #22c55e;
  --border: #262626;
  --card: #171717;
}
```

### Tailwind Integration

CSS variables are mapped to Tailwind classes via `@theme inline`:

| CSS Variable | Tailwind Class | Usage |
|--------------|----------------|-------|
| `--background` | `bg-background` | Page backgrounds |
| `--foreground` | `text-foreground` | Primary text |
| `--muted` | `text-muted` | Secondary text |
| `--accent` | `bg-accent`, `text-accent` | CTAs, links |
| `--border` | `border-border` | Dividers, cards |
| `--card` | `bg-card` | Card backgrounds |

---

## Theme Toggle Implementation

```mermaid
sequenceDiagram
    participant User
    participant ThemeToggle
    participant LocalStorage
    participant DOM
    
    User->>ThemeToggle: Click toggle
    ThemeToggle->>LocalStorage: Save preference
    ThemeToggle->>DOM: Toggle .dark class
    DOM->>DOM: CSS variables update
```

### Flash Prevention

Theme is applied before React hydration via inline script in `<head>`:

```javascript
(function() {
  var theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  }
})();
```

---

## Animation Architecture

### Framer Motion Components

| Component | Animation Type | Trigger |
|-----------|---------------|---------|
| `ScrollReveal` | Fade + slide up | `whileInView` |
| `ProjectTimeline` | Scroll progress | `useScroll` |
| `TimelineItem` | Fade + slide | `whileInView` |

### CSS Animations

```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
.animate-fade-in-delay { animation: fadeIn 0.5s ease-out 0.15s forwards; }
```

---

## Routing Structure

```
/                     → Home (Hero + Timeline + Contact)
/projects             → Projects List
/projects/relearnable → Relearnable Case Study
/projects/tratlus     → Tratlus Case Study
/projects/flavorbot   → FlavorBot Case Study
/projects/kairo       → Kairo Case Study
/resume               → Resume Page
```

---

## Performance Optimizations

| Optimization | Implementation |
|--------------|----------------|
| **Image Optimization** | Next.js `Image` component with `priority` |
| **Font Loading** | `next/font` with `display: swap` |
| **CSS** | Tailwind tree-shaking, `@theme inline` |
| **Animations** | `viewport: { once: true }` for scroll triggers |
| **Bundle** | Next.js automatic code splitting |
