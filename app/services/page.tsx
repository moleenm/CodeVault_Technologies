import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Code,
  Shield,
  Network,
  ArrowRight,
  Check,
  Database,
  Cloud,
  Lock,
  Monitor,
  Smartphone,
  Globe,
  Server,
  Wifi,
  FileCode,
  Bug,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | CodeVault Technologies",
  description:
    "Explore our comprehensive technology services including custom software development, cybersecurity solutions, and enterprise networking.",
};

const softwareServices = [
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.",
  },
  {
    icon: Database,
    title: "Enterprise Systems",
    description:
      "Scalable enterprise solutions including ERP, CRM, and custom business process automation systems.",
  },
  {
    icon: FileCode,
    title: "API Development",
    description:
      "Robust RESTful and GraphQL APIs that enable seamless integration and data exchange between systems.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Cloud-native applications and migration services for AWS, Azure, and Google Cloud platforms.",
  },
  {
    icon: Monitor,
    title: "Legacy Modernization",
    description:
      "Transform outdated systems into modern, efficient applications without disrupting your business operations.",
  },
];

const securityServices = [
  {
    icon: Shield,
    title: "Security Assessments",
    description:
      "Comprehensive vulnerability assessments and penetration testing to identify and address security gaps.",
  },
  {
    icon: Bug,
    title: "Threat Detection",
    description:
      "Advanced threat intelligence and monitoring systems to detect and respond to cyber threats in real-time.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    description:
      "End-to-end encryption and data loss prevention solutions to safeguard your sensitive information.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description:
      "Rapid incident response and forensic analysis services to minimize damage and recovery time.",
  },
];

const networkServices = [
  {
    icon: Network,
    title: "Network Design",
    description:
      "Custom network architecture design optimized for performance, security, and scalability.",
  },
  {
    icon: Server,
    title: "Infrastructure Management",
    description:
      "Proactive monitoring, maintenance, and optimization of your network infrastructure.",
  },
  {
    icon: Wifi,
    title: "Wireless Solutions",
    description:
      "Enterprise-grade wireless network deployment with comprehensive coverage and security.",
  },
  {
    icon: Cloud,
    title: "Cloud Networking",
    description:
      "Hybrid and multi-cloud networking solutions for seamless connectivity across environments.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-card">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Our Services
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Comprehensive technology solutions for modern businesses
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                From custom software development to enterprise-grade security
                and networking, we provide end-to-end technology services that
                help your business thrive in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Software Development */}
        <section id="software" className="py-24 bg-background scroll-mt-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                <Code className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Software Development
                </h2>
                <p className="text-muted-foreground">
                  Custom solutions built with modern technologies
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {softwareServices.map((service) => (
                <div
                  key={service.title}
                  className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <service.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-card rounded-2xl border border-border">
              <h3 className="text-xl font-semibold text-foreground">
                Our Development Process
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  "Discovery & Planning",
                  "Design & Architecture",
                  "Development & Testing",
                  "Deployment & Support",
                ].map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-sm text-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cybersecurity */}
        <section id="cybersecurity" className="py-24 bg-card scroll-mt-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Cybersecurity Solutions
                </h2>
                <p className="text-muted-foreground">
                  Proactive defense against evolving threats
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {securityServices.map((service) => (
                <div
                  key={service.title}
                  className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <service.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-background rounded-2xl border border-border">
              <h3 className="text-xl font-semibold text-foreground">
                Security Features
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "24/7 Security Monitoring",
                  "Compliance Management",
                  "Employee Security Training",
                  "Zero Trust Architecture",
                  "Endpoint Protection",
                  "SIEM Integration",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Networking */}
        <section id="networking" className="py-24 bg-background scroll-mt-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                <Network className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Networking & IT Infrastructure
                </h2>
                <p className="text-muted-foreground">
                  Reliable infrastructure for seamless connectivity
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {networkServices.map((service) => (
                <div
                  key={service.title}
                  className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <service.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="consulting" className="py-24 bg-card scroll-mt-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Contact our team to discuss your project requirements and
                discover how we can help your business succeed.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">View Our Work</Link>
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
