# Technology Stack

Detailed documentation of technology choices, rationale, and implementation decisions.

---

## Core Technologies

### Next.js 16

**Choice**: Next.js 16 with App Router

**Rationale**:
- App Router for modern file-based routing
- React Server Components support
- Built-in image optimization
- Automatic code splitting
- Excellent TypeScript support
- Vercel deployment optimization

**Features Used**:
- `app/` directory structure
- `layout.tsx` for shared UI
- `metadata` API for SEO
- `next/font` for font optimization
- `next/image` for image optimization

---

### React 19

**Choice**: React 19 with functional components

**Rationale**:
- Latest stable release
- Improved performance
- Better TypeScript integration
- Modern hooks patterns

**Patterns Used**:
- `useState` for local state (theme toggle)
- `useEffect` for side effects (theme initialization)
- `useRef` for DOM references (scroll container)
- Client components via `"use client"` directive

---

### TypeScript 5

**Choice**: Strict TypeScript configuration

**Rationale**:
- Compile-time error detection
- Self-documenting code
- Excellent IDE support
- Safer refactoring

**Example Interface**:
```typescript
interface Project {
  slug: string;
  name: string;
  type: string;
  description: string;
  metrics: { label: string; type: "success" | "accent" | "muted" }[];
  stack: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  hasCaseStudy: boolean;
  year: string;
}
```

---

## Styling

### Tailwind CSS 4

**Choice**: Tailwind CSS 4 with CSS custom properties

**Rationale**:
- Utility-first rapid development
- Native CSS variables integration via `@theme inline`
- Automatic dark mode support
- Tree-shaking for minimal bundle size

**Configuration Highlights**:
```typescript
// tailwind.config.ts
darkMode: "class",
theme: {
  extend: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
      accent: "var(--accent)",
      // ...mapped from CSS variables
    }
  }
}
```

### CSS Custom Properties

**Choice**: CSS variables for theming

**Rationale**:
- Instant theme switching without rebuild
- Single source of truth for colors
- Easy dark mode implementation

---

## Animation

### Framer Motion 12

**Choice**: Framer Motion for declarative animations

**Rationale**:
- React-native animation library
- Declarative syntax
- Scroll-triggered animations
- Gesture support
- Layout animations

**Key Features Used**:

| Feature | Usage |
|---------|-------|
| `motion.div` | Animated containers |
| `whileInView` | Scroll-triggered animations |
| `useScroll` | Scroll progress tracking |
| `useTransform` | Scroll-to-style mapping |
| `viewport: { once: true }` | One-time triggers |

**Example**:
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
  {/* Content */}
</motion.div>
```

---

## Utilities

### clsx + tailwind-merge

**Choice**: clsx for conditional classes, tailwind-merge for deduplication

**Rationale**:
- Clean conditional class composition
- Resolves Tailwind class conflicts
- Common pattern in modern React

---

## Typography

### Fonts

| Font | Type | Usage |
|------|------|-------|
| Corporate S Pro | Local | Headings, body text |
| Geist Mono | Google | Code, monospace elements |

**Implementation**:
```typescript
const corporateSPro = localFont({
  src: "../fonts/CorporateSProMedium.otf",
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});
```

---

## Build & Development

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

### Development Server
- Hot Module Replacement (HMR)
- Fast Refresh for React components
- TypeScript compilation on-the-fly

---

## Deployment

**Platform**: Vercel (recommended)

**Benefits**:
- Zero-config Next.js deployment
- Automatic preview deployments
- Edge network distribution
- Built-in analytics

**Alternative**: Any Node.js hosting (self-host with `npm run build && npm start`)

---

## Dependencies Summary

### Production

| Package | Version | Purpose |
|---------|---------|---------|
| next | 16.1.0 | Framework |
| react | 19.2.3 | UI library |
| react-dom | 19.2.3 | React DOM |
| framer-motion | 12.23.26 | Animations |
| clsx | 2.1.1 | Class utilities |
| tailwind-merge | 3.4.0 | Class merging |

### Development

| Package | Version | Purpose |
|---------|---------|---------|
| typescript | ^5 | Type checking |
| tailwindcss | ^4 | CSS framework |
| @tailwindcss/postcss | ^4 | PostCSS plugin |
| eslint | ^9 | Linting |
| eslint-config-next | 16.1.0 | Next.js ESLint |
