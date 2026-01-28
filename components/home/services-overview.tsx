"use client";

import Link from "next/link";
import {
  Code,
  Shield,
  Network,
  Database,
  Cloud,
  Lock,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "High-quality, scalable software solutions tailored to your business needs. From web applications to enterprise systems.",
    href: "/services#software",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description:
      "Proactive threat detection and prevention. We keep your business safe by identifying and neutralizing cyber threats.",
    href: "/services#cybersecurity",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: Network,
    title: "Networking & IT Infrastructure",
    description:
      "Robust network infrastructure for seamless connectivity, optimal performance, and maximum uptime.",
    href: "/services#networking",
    gradient: "from-indigo-500/20 to-cyan-500/20",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description:
      "Unlock your data potential with powerful analytics and intelligent automation for data-driven decisions.",
    href: "/services",
    gradient: "from-cyan-500/20 to-teal-500/20",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Migrate, optimize, and manage your cloud infrastructure securely and efficiently with expert guidance.",
    href: "/services",
    gradient: "from-teal-500/20 to-cyan-500/20",
  },
  {
    icon: Lock,
    title: "Security Consulting",
    description:
      "Expert advice on security strategy, compliance, and risk management to protect your digital assets.",
    href: "/services",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider">
            <span className="w-8 h-px bg-primary" />
            What we do
            <span className="w-8 h-px bg-primary" />
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Comprehensive Technology Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Our collection of tech services spans various needs at every stage
            of your digital transformation journey.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover gradient */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
