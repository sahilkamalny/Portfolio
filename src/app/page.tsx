import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Building real web products,<br />not just projects.
          </h1>
        </div>
        
        <p className="animate-fade-in-delay mt-6 text-lg md:text-xl text-muted max-w-2xl">
          Full-stack software engineer focused on clean architecture, performance, and user retention.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-delay-2 mt-10 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center h-12 px-6 font-medium rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity"
          >
            View Projects
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center justify-center h-12 px-6 font-medium rounded-lg border border-border hover:bg-card transition-colors"
          >
            Resume (PDF)
          </Link>
        </div>

        {/* Credibility Line */}
        <p className="animate-fade-in-delay-2 mt-8 text-sm text-muted">
          Founder &amp; engineer of relearnable.ai — a production AI learning platform with 60-70% returning users.
        </p>
      </section>

      {/* Featured Project - relearnable.ai */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground">Featured Project</h2>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 md:p-8 hover:border-muted transition-colors">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-xl font-semibold text-foreground">relearnable.ai</h3>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent/10 text-accent">
              Full-Stack AI SaaS
            </span>
          </div>
          <p className="text-muted leading-relaxed">
            A production AI learning platform with a Knowledge Correction Engine that detects misconceptions and generates targeted remediation paths. Built with LLM-driven assessments powered by Google Gemini.
          </p>

          {/* Metrics */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-success/10 text-success">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              60–70% returning users
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent">
              50%+ faster load times
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-foreground/5 text-muted">
              Live production users
            </span>
          </div>

          {/* Tech Stack */}
          <div className="mt-6 flex flex-wrap gap-2 text-sm text-muted font-mono">
            <span>Next.js</span>
            <span className="text-border">·</span>
            <span>TypeScript</span>
            <span className="text-border">·</span>
            <span>PostgreSQL</span>
            <span className="text-border">·</span>
            <span>Supabase</span>
            <span className="text-border">·</span>
            <span>Gemini AI</span>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://relearnable.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-5 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors"
            >
              Live Site →
            </a>
            <Link
              href="/projects/relearnable"
              className="inline-flex items-center justify-center h-10 px-5 text-sm font-medium rounded-lg border border-border hover:bg-card hover:border-muted transition-colors"
            >
              Case Study
            </Link>
            <a
              href="https://github.com/sahilkamalny/relearnable"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-5 text-sm font-medium rounded-lg border border-border hover:bg-card hover:border-muted transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground">Other Projects</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Tratlus */}
          <Link href="/projects/tratlus" className="block rounded-xl border border-border bg-card p-6 hover:border-muted transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-foreground">Tratlus</h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-foreground/5 text-muted">AI Travel</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              AI-assisted travel planning with swipe-based preferences and calendar automation.
            </p>
            <div className="mt-4 text-xs text-success font-medium">60% less manual scheduling</div>
          </Link>

          {/* FlavorBot */}
          <Link href="/projects/flavorbot" className="block rounded-xl border border-border bg-card p-6 hover:border-muted transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-foreground">FlavorBot</h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-foreground/5 text-muted">AI Desktop</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Desktop AI recipe generator with interactive LLM-driven refinement loops.
            </p>
            <div className="mt-4 text-xs text-success font-medium">25% faster revisions</div>
          </Link>

          {/* Kairo */}
          <Link href="/projects/kairo" className="block rounded-xl border border-border bg-card p-6 hover:border-muted transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-foreground">Kairo</h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-foreground/5 text-muted">Systems</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Interactive REPL shell unifying OS utilities into a functional architecture.
            </p>
            <div className="mt-4 text-xs text-success font-medium">40% faster execution</div>
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Link href="/projects" className="text-sm text-accent hover:underline">
            View all projects →
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-semibold text-foreground mb-6">About</h2>
        <div className="text-muted leading-relaxed space-y-4 max-w-2xl">
          <p>
            I&apos;m a software engineer focused on building real products, not just academic projects. I enjoy working across the stack and turning loosely defined problems into shipped features.
          </p>
          <p>
            Currently seeking software engineering internships where I can contribute quickly and learn from strong teams.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <a href="mailto:sahilkamal.dev@gmail.com" className="text-accent hover:underline">
            sahilkamal.dev@gmail.com
          </a>
          <span className="text-border">·</span>
          <a href="https://github.com/sahilkamalny" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
            GitHub
          </a>
          <span className="text-border">·</span>
          <a href="https://linkedin.com/in/sahilkamalny" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
