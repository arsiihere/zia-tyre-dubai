import { Phone, Truck, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Contact Us",
    description: "Call our 24/7 hotline or book online. Tell us your location and what service you need.",
  },
  {
    icon: Truck,
    number: "02",
    title: "Technician Dispatched",
    description: "We immediately send our nearest fully-equipped technician to your location.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "On-Site Service",
    description: "Our expert performs the tyre fitting, repair, or replacement right where you are.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Back on the Road",
    description: "Quality checked and ready to go. Pay securely and drive with confidence.",
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
            Simple Process, Fast Results
          </h2>
          <p className="text-muted-foreground text-lg">
            Getting your tyres sorted has never been easier. Four simple steps to get you back on the road.
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
