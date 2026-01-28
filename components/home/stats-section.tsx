import { Users, Award, Clock, Zap } from "lucide-react";

const stats = [
  {
    icon: Zap,
    value: "100+",
    label: "Projects Delivered",
    description: "Successful implementations",
  },
  {
    icon: Award,
    value: "99.9%",
    label: "Uptime Guarantee",
    description: "System reliability",
  },
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
    description: "Across Zimbabwe & beyond",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support Available",
    description: "Always here for you",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative group text-center p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
