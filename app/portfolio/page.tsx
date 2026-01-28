import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio | CodeVault Technologies",
  description:
    "Explore our portfolio of successful projects in software development, cybersecurity, and networking solutions.",
};

const projects = [
  {
    title: "SecureBank Platform",
    category: "Fintech",
    description:
      "End-to-end digital banking platform with advanced security features, real-time fraud detection, and seamless mobile banking experience for over 2 million users.",
    tags: ["React", "Node.js", "AWS", "ML", "PostgreSQL"],
    highlights: [
      "99.99% uptime achieved",
      "50% reduction in fraud",
      "2M+ active users",
    ],
  },
  {
    title: "HealthGuard Network",
    category: "Healthcare",
    description:
      "HIPAA-compliant healthcare network infrastructure serving 50+ hospitals with encrypted data transmission, secure patient portals, and integrated telemedicine capabilities.",
    tags: ["Network Security", "Compliance", "Azure", "Kubernetes"],
    highlights: [
      "50+ hospitals connected",
      "HIPAA compliant",
      "Zero data breaches",
    ],
  },
  {
    title: "CloudShield Enterprise",
    category: "Cybersecurity",
    description:
      "Enterprise-grade security suite with advanced threat intelligence, automated vulnerability scanning, and real-time incident response for Fortune 500 companies.",
    tags: ["Security", "Cloud", "Python", "Automation"],
    highlights: [
      "500+ threats blocked daily",
      "24/7 monitoring",
      "ISO 27001 certified",
    ],
  },
  {
    title: "LogiTrack Pro",
    category: "Logistics",
    description:
      "Comprehensive logistics management platform with real-time tracking, route optimization, and predictive analytics for a global shipping company.",
    tags: ["React Native", "Node.js", "MongoDB", "IoT"],
    highlights: [
      "30% cost reduction",
      "Real-time tracking",
      "100K+ shipments/day",
    ],
  },
  {
    title: "EduConnect Platform",
    category: "Education",
    description:
      "Modern learning management system with interactive video conferencing, AI-powered content recommendations, and comprehensive analytics for educational institutions.",
    tags: ["Next.js", "WebRTC", "AI/ML", "PostgreSQL"],
    highlights: [
      "500K+ students",
      "40% engagement increase",
      "Multi-language support",
    ],
  },
  {
    title: "RetailFlow POS",
    category: "Retail",
    description:
      "Cloud-based point-of-sale system with inventory management, customer analytics, and omnichannel integration for retail chains across North America.",
    tags: ["React", "Golang", "Redis", "AWS"],
    highlights: [
      "5000+ stores",
      "Real-time inventory",
      "99.9% uptime",
    ],
  },
];

const categories = [
  "All",
  "Fintech",
  "Healthcare",
  "Cybersecurity",
  "Logistics",
  "Education",
  "Retail",
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-card">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Our Portfolio
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Showcasing our best work
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Explore some of our most impactful projects across various
                industries. Each project represents our commitment to
                excellence, innovation, and client success.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-background border-b border-border sticky top-20 z-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={category}
                  type="button"
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="group overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="aspect-video bg-secondary flex items-center justify-center relative">
                    <span className="text-muted-foreground text-sm">
                      {project.category}
                    </span>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="h-5 w-5 text-foreground" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-border">
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                        Key Results
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {project.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="text-center p-2 bg-background rounded-lg"
                          >
                            <span className="text-xs text-muted-foreground">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-card">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to build something amazing?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Let us help you create your next successful project. Our team is
                ready to bring your vision to life.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
