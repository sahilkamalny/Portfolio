import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ActuallyFeed Case Study — Sahil Kamal",
  description: "A full-stack donation platform with Stripe integration for an international humanitarian organization.",
};

export default function ActuallyFeedCaseStudy() {
  return (
    <div className="min-h-screen">
      <article className="max-w-3xl mx-auto px-6 pt-24 pb-32">
        {/* Header */}
        <header className="mb-12">
          <Link 
            href="/projects" 
            className="text-sm text-muted hover:text-foreground transition-colors mb-6 inline-block"
          >
            ← Back to Projects
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              ActuallyFeed
            </h1>
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-accent/10 text-accent">
              Full-Stack Donation Platform
            </span>
          </div>
          <p className="text-lg text-muted leading-relaxed">
            A donation platform with Stripe webhook integration built for an international humanitarian organization, featuring interactive geospatial impact tracking.
          </p>
          
          {/* Metrics */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-success/10 text-success">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              4x donation volume (250+)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent">
              80% faster transactions
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-foreground/5 text-muted">
              Interactive impact map
            </span>
          </div>

          {/* Links */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://actuallyfeed.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-5 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors"
            >
              Live Site →
            </a>
            <a
              href="https://github.com/sahilkamalny/actuallyfeed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-5 text-sm font-medium rounded-lg border border-border hover:border-muted transition-colors"
            >
              GitHub
            </a>
          </div>
        </header>

        {/* Content */}
        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Overview</h2>
            <p className="text-muted leading-relaxed">
              ActuallyFeed is a full-stack donation platform I built for an international humanitarian organization. The platform streamlines the donation process with seamless Stripe integration and provides donors with transparent impact visualization through an interactive geospatial map showing where their contributions make a difference.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Problem</h2>
            <p className="text-muted leading-relaxed">
              The organization was struggling with donation friction—their existing process was slow, had high abandonment rates, and donors had no visibility into where their money was going. The lack of transparency and cumbersome checkout experience was limiting their fundraising potential and donor engagement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Constraints</h2>
            <ul className="text-muted leading-relaxed space-y-2 list-disc list-inside">
              <li>Need to handle international payments securely and reliably</li>
              <li>Real-time transaction confirmation for immediate donor feedback</li>
              <li>Visual impact tracking that works across regions and device types</li>
              <li>Integration with existing organizational workflows</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Solution</h2>
            <p className="text-muted leading-relaxed">
              I designed and built a streamlined donation platform with Stripe webhooks for real-time payment confirmation. The key innovation was an interactive geospatial tracking map that visualizes donation impact across different regions—donors can see exactly where their contributions are making a difference. This combination of smooth UX and transparent impact reporting quadrupled donation volume.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Architecture &amp; Stack</h2>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4">
                  <span className="font-medium text-foreground min-w-[100px]">Frontend</span>
                  <span className="text-muted">Next.js, React, TypeScript</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-medium text-foreground min-w-[100px]">Payments</span>
                  <span className="text-muted">Stripe Checkout, Webhooks</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-medium text-foreground min-w-[100px]">Mapping</span>
                  <span className="text-muted">Interactive geospatial visualization</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-medium text-foreground min-w-[100px]">Deployment</span>
                  <span className="text-muted">Vercel with automatic CI/CD</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Key Engineering Decisions</h2>
            <ul className="text-muted leading-relaxed space-y-2 list-disc list-inside">
              <li>Stripe webhooks for reliable, real-time payment confirmation</li>
              <li>Optimistic UI updates during payment processing for better UX</li>
              <li>Geospatial data visualization for transparent impact reporting</li>
              <li>Progressive enhancement for cross-device compatibility</li>
              <li>Streamlined checkout flow reducing steps from 5 to 2</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Challenges &amp; Tradeoffs</h2>
            <p className="text-muted leading-relaxed">
              The primary challenge was ensuring webhook reliability for payment confirmations—lost webhooks mean lost donations. I implemented idempotent webhook handlers with retry logic and a reconciliation system that catches any missed events. For the impact map, I balanced detail granularity against performance, implementing progressive loading that shows aggregate data first then loads regional details on demand.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Results</h2>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-success">4x</div>
                  <div className="text-sm text-muted mt-1">Donation volume increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">250+</div>
                  <div className="text-sm text-muted mt-1">Donations processed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">80%</div>
                  <div className="text-sm text-muted mt-1">Faster transaction time</div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">What This Demonstrates</h2>
            <ul className="text-muted leading-relaxed space-y-2 list-disc list-inside">
              <li>Payment integration with production-grade webhook handling</li>
              <li>Geospatial data visualization and interactive mapping</li>
              <li>UX optimization with measurable conversion improvements</li>
              <li>Working with non-profit stakeholders to deliver real impact</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
