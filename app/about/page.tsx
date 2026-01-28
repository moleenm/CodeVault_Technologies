import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Lightbulb,
  Shield,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | CodeVault Technologies",
  description:
    "Learn about CodeVault Technologies - our story, mission, vision, and values that drive us to deliver exceptional technology solutions.",
};

const values = [
  {
    icon: Shield,
    title: "Security First",
    description:
      "We prioritize security in every solution we build, ensuring your digital assets are protected.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of the curve, continuously exploring new technologies and approaches.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with our clients as partners, not just service providers.",
  },
  {
    icon: Zap,
    title: "Excellence",
    description:
      "We deliver nothing but the highest quality in everything we do.",
  },
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    bio: "20+ years in enterprise software development and cybersecurity leadership.",
  },
  {
    name: "Marcus Johnson",
    role: "CTO",
    bio: "Former lead architect at major tech companies with expertise in scalable systems.",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Security",
    bio: "Certified ethical hacker with experience protecting Fortune 500 companies.",
  },
  {
    name: "David Kim",
    role: "VP of Engineering",
    bio: "Passionate about building high-performance teams and delivering quality code.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-card">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                About Us
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Building Secure Digital Solutions
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                CodeVault Technologies is a technology solutions company focused
                on building secure, reliable, and scalable digital systems for
                modern businesses. We combine technical expertise with a
                security-first mindset to deliver solutions that are both
                functional and resilient.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Our Story
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    CodeVault Technologies was founded to address the growing
                    need for secure, reliable technology solutions in Zimbabwe
                    and beyond. We recognized that businesses needed a trusted
                    partner who truly understands both technology and security.
                  </p>
                  <p>
                    We specialize in software development, cybersecurity
                    solutions, and IT infrastructure, helping organizations
                    improve efficiency while protecting their digital assets.
                  </p>
                  <p>
                    Our approach combines technical expertise with a
                    security-first mindset to deliver solutions that are both
                    functional and resilient. Today, we serve organizations
                    across various industries, empowering them to thrive in an
                    increasingly digital world.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-card border border-border flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-6xl font-bold text-primary">10+</p>
                    <p className="mt-2 text-lg text-muted-foreground">
                      Years of Excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-card">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="p-8 bg-background rounded-2xl border border-border">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Our Mission
                  </h3>
                </div>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  To design, deploy and secure software systems that help
                  organizations operate efficiently and safely in a digital
                  world. We are committed to delivering excellence in every
                  project while maintaining the highest standards of security
                  and reliability.
                </p>
              </div>
              <div className="p-8 bg-background rounded-2xl border border-border">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Our Vision
                  </h3>
                </div>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  To become a trusted provider of secure digital solutions for
                  businesses in Zimbabwe and beyond. We envision a world where
                  every organization can thrive in the digital age with
                  confidence and security.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Core Values
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                These principles guide everything we do at CodeVault
                Technologies.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="text-center p-6 rounded-lg bg-card border border-border"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-card">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Leadership Team
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Meet the people driving our vision forward.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="text-center p-6 rounded-lg bg-background border border-border"
                >
                  <div className="w-20 h-20 rounded-full bg-secondary mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
