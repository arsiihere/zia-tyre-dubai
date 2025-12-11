import { Phone, Zap, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Call Us",
    description: "One call is all it takes. We answer instantly – no hold music, no waiting.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Instant Dispatch",
    description: "The moment you hang up, our nearest technician is already on the way to you.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "5-10 Min Arrival",
    description: "Within 5-10 minutes, our expert is at your location with all the tools and tyres needed.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Done & Driving",
    description: "Job completed, quality checked. You're back on the road – fast and safe.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            From Stranded to Sorted in 5-10 Minutes
          </h2>
          <p className="text-muted-foreground text-lg">
            We've eliminated every delay. Call, dispatch, arrive, done. It's that simple.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-20 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-full bg-card border-2 border-accent flex items-center justify-center shadow-card relative z-10">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent-gradient flex items-center justify-center text-accent-foreground font-heading font-bold text-sm shadow-accent">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
