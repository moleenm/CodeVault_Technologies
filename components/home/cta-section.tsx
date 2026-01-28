import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card via-card to-card/80 border border-border">
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
            }}
          />

          <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider">
                <span className="w-8 h-px bg-primary" />
                Get Started
                <span className="w-8 h-px bg-primary" />
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                Ready to transform your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                  digital infrastructure
                </span>
                ?
              </h2>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Partner with CodeVault Technologies and let us help you design,
                deploy, and secure software systems that drive your business
                forward.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-base px-8 shadow-lg shadow-primary/25"
                  asChild
                >
                  <Link href="/contact">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Start a Conversation
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-base px-8 bg-transparent"
                  asChild
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Schedule a Call
                  </Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">
                  Trusted by organizations across Zimbabwe and beyond
                </p>
                <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
                  {["Finance", "Healthcare", "Education", "Government"].map(
                    (sector) => (
                      <span
                        key={sector}
                        className="text-sm font-medium text-muted-foreground"
                      >
                        {sector}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
