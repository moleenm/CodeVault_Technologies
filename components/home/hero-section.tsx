"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Code, Network, CheckCircle2, MessageCircle,

 } from "lucide-react";

const features = [
  "Enterprise-grade security",
  "24/7 Technical support",
  "Scalable solutions",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_100%,rgba(56,189,248,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_100%_100%,rgba(14,165,233,0.08),transparent)]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
      />

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Trusted Technology Partner in Zimbabwe
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary">
                Secure
              </span>
              <br />
              Digital Solutions
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
              We design, deploy and secure software systems that help
              organizations operate efficiently and safely in a digital world.
            </p>

            {/* Feature list */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto text-base px-8 shadow-lg shadow-primary/25"
                asChild
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base px-8 bg-transparent"
                asChild
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>

          {/* Right side - Shield visual with service cards */}
          <div className="relative hidden lg:block">
            {/* Central shield visual */}
            <div className="relative flex items-center justify-center h-96">
              {/* Glow effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
              </div>

              {/* Shield icon */}
              <div className="relative z-10 flex items-center justify-center">
                <div className="relative">
                  <Shield className="h-48 w-48 text-primary/20" strokeWidth={0.5} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Code className="h-12 w-12 text-primary mx-auto" />
                      <p className="mt-2 text-sm font-medium text-primary">Secure by Design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating service cards */}
            <div className="absolute top-8 -left-4 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Software Dev
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Custom solutions
                  </p>
                </div>
              </div>
            </div>

            <div
              className="absolute top-1/3 -right-4 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-xl animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Cybersecurity
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Threat protection
                  </p>
                </div>
              </div>
            </div>

            <div
              className="absolute bottom-8 left-1/4 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-xl animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Network className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    IT Infrastructure
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Network solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 pt-12 border-t border-border/50">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "100+", label: "Projects Delivered" },
              { value: "99.9%", label: "Uptime Guarantee" },
              { value: "50+", label: "Happy Clients" },
              { value: "24/7", label: "Support Available" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
                  {/* 🔥 Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-[9999] group">
        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-foreground text-background text-xs px-3 py-1 rounded-md shadow-lg whitespace-nowrap">
            Chat with us on WhatsApp
          </div>
        </div>

        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/263711924045?text=Hello%20I%20would%20like%20to%20get%20in%20touch"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="h-7 w-7" />
        </a>
      </div>

    </section>
  );
}
