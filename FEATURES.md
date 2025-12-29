# Feature Deep Dive

Comprehensive documentation of the Portfolio website's core features and implementation details.

---

## 🎨 Design System

### Theme Toggle

A smooth dark/light mode toggle with persistent preferences:

**Features:**
- Instant toggle without page reload
- LocalStorage persistence
- Flash prevention on initial load
- Accessible button with screen reader support

**Implementation:**
```tsx
const toggle = () => {
  const newDark = !isDark;
  setIsDark(newDark);
  localStorage.setItem("theme", newDark ? "dark" : "light");
  document.documentElement.classList.toggle("dark", newDark);
};
```

### Color System

| Token | Light | Dark | Purpose |
|-------|-------|------|---------|
| background | `#ffffff` | `#0a0a0a` | Page background |
| foreground | `#171717` | `#e5e5e5` | Primary text |
| muted | `#737373` | `#a3a3a3` | Secondary text |
| accent | `#1C64F2` | `#1C64F2` | CTAs, links |
| border | `#e5e5e5` | `#262626` | Dividers |

---

## 📜 Scroll-Animated Timeline

An interactive project showcase with scroll-driven animations.

### Features
- **Alternating Layout**: Cards alternate left/right on desktop
- **Scroll Progress Line**: Animated line fills as you scroll
- **Staggered Reveals**: Cards animate in sequentially
- **Mobile Responsive**: Linear layout on mobile

### Technical Implementation

```tsx
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start end", "end start"],
});

const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
```

### Timeline Card Structure

Each project card includes:
- Project name and type badge
- Description text
- Metrics with color-coded badges (success/accent/muted)
- Tech stack tags
- Action buttons (Live Site, Case Study, GitHub)

---

## ✨ ScrollReveal Component

A reusable animation wrapper for scroll-triggered reveals.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | - | Content to animate |
| `width` | `"fit-content"` \| `"100%"` | `"fit-content"` | Container width |
| `delay` | number | `0` | Animation delay in seconds |

### Usage

```tsx
<ScrollReveal delay={0.3}>
  <h2>This fades in on scroll</h2>
</ScrollReveal>
```

### Animation Settings
- **Effect**: Fade in + slide up (20px)
- **Duration**: 0.5 seconds
- **Trigger**: When element enters viewport (50px margin)
- **Once**: Only animates once per page load

---

## 🏠 Hero Section

The landing section optimized for immediate impact.

### Components
1. **Profile Image**: Circular with white border and shadow
2. **Large Typography**: "SOFTWARE ENGINEER" headline
3. **Personal Intro**: Name with accent color
4. **Bio Text**: Quantifiable achievements and skills
5. **Credibility Badge**: Award + Founder title
6. **CTA Buttons**: Projects and Resume links

### Performance
- Profile image marked as `priority` for immediate load
- Initial content uses CSS animations (no JS)
- ScrollReveal only on secondary content

---

## 📄 Case Study Pages

Dedicated pages for each featured project.

### Structure
- Back navigation link
- Project header with type badge
- Detailed description
- Key metrics (success/accent/muted types)
- Full tech stack
- Action buttons (Live Site, GitHub)

### Projects Showcased

| Project | Type | Key Achievement |
|---------|------|-----------------|
| Relearnable | AI SaaS | 100+ users, 1,300+ assessments |
| Tratlus | AI Travel | <30s itinerary generation |
| FlavorBot | Desktop AI | RamHacks 2025 Winner |
| Kairo | OS Shell | 40% faster execution |

---

## 📱 Responsive Design

Mobile-first approach with Tailwind breakpoints.

### Breakpoints Used

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Default | < 768px | Mobile layout |
| `md:` | ≥ 768px | Desktop layout |

### Key Responsive Patterns

- **Navigation**: Full nav on desktop, compact on mobile
- **Timeline**: Alternating on desktop, linear on mobile
- **Hero**: Stacked on mobile, side-by-side on desktop
- **Cards**: Full-width on mobile, contained on desktop

---

## 🔗 Navigation

Fixed header with backdrop blur.

### Features
- Sticky positioning with `fixed top-0`
- Semi-transparent background with blur
- Logo as home link
- Theme toggle always visible
- Responsive nav items

### Links
- Projects → `/projects`
- Resume → `/resume`
- GitHub → External link
