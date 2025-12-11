import { Zap, Shield, ThumbsUp, MapPin, Banknote, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Instant Response",
    description: "The second you call, we're on it. No waiting on hold, no callbacks. Our dispatch team immediately sends a technician your way.",
  },
  {
    icon: MapPin,
    title: "5-10 Minute Arrival",
    description: "We don't make you wait. Our strategically positioned mobile units across Dubai ensure we reach you in just 5-10 minutes – guaranteed.",
  },
  {
    icon: Shield,
    title: "Certified Experts",
    description: "Every technician is fully trained and certified. They've seen every tyre problem and know exactly how to fix it fast.",
  },
  {
    icon: Banknote,
    title: "No Hidden Fees",
    description: "The price we quote is the price you pay. No surprises, no add-ons. Just honest, upfront pricing every time.",
  },
  {
    icon: ThumbsUp,
    title: "Done Right, First Time",
    description: "We use professional-grade equipment and premium tyres. Your safety is our priority – we never cut corners.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Tyre emergencies don't wait for business hours. Neither do we. Call anytime – 3am, Sunday, holiday – we answer.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Why We're Different
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Dubai's Fastest Mobile Tyre Service
          </h2>
          <p className="text-muted-foreground text-lg">
            When you're stranded with a flat, every minute feels like an hour. That's why speed is our obsession.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="flex gap-4 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-accent-gradient flex items-center justify-center shadow-accent">
                  <benefit.icon className="w-7 h-7 text-accent-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
