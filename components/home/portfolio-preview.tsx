import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ExternalLink,
  Building2,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

const projects = [
  {
    title: "SecureBank Platform",
    category: "Fintech",
    icon: Building2,
    description:
      "End-to-end digital banking platform with advanced security features and real-time fraud detection.",
    tags: ["React", "Node.js", "AWS", "ML"],
    gradient: "from-cyan-500/20 to-blue-600/20",
  },
  {
    title: "HealthGuard Network",
    category: "Healthcare",
    icon: HeartPulse,
    description:
      "HIPAA-compliant healthcare network with encrypted data transmission and secure patient portals.",
    tags: ["Network", "Security", "Compliance"],
    gradient: "from-blue-500/20 to-indigo-600/20",
  },
  {
    title: "CloudShield Enterprise",
    category: "Cybersecurity",
    icon: ShieldCheck,
    description:
      "Enterprise security suite with threat intelligence, vulnerability scanning, and incident response.",
    tags: ["Security", "Cloud", "Automation"],
    gradient: "from-indigo-500/20 to-cyan-600/20",
  },
];

export function PortfolioPreview() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider">
              <span className="w-8 h-px bg-primary" />
              Our Work
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Explore some of our recent work delivering innovative solutions
              across industries.
            </p>
          </div>
          <Button
            variant="outline"
            className="bg-transparent self-start md:self-auto"
            asChild
          >
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Project image placeholder with icon */}
              <div
                className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent" />
                <project.icon className="h-16 w-16 text-primary/50 group-hover:scale-110 transition-transform duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="mt-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
