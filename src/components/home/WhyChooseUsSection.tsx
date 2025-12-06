import { Clock, Shield, ThumbsUp, MapPin, Banknote, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Tyre emergencies don't follow schedules. That's why our team is ready around the clock, every day of the year.",
  },
  {
    icon: MapPin,
    title: "30–45 Minute Response",
    description: "We know time matters. Our strategically located technicians reach you fast, anywhere in Dubai.",
  },
  {
    icon: Shield,
    title: "Certified Technicians",
    description: "Every member of our team is fully trained and certified to handle all types of tyre services professionally.",
  },
  {
    icon: Banknote,
    title: "Transparent Pricing",
    description: "No hidden fees or surprise charges. We provide clear quotes upfront so you know exactly what to expect.",
  },
  {
    icon: ThumbsUp,
    title: "Quality Guaranteed",
    description: "We use premium tyres and equipment. Every job comes with our satisfaction guarantee for your peace of mind.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Have questions? Our friendly team is here to help you choose the right tyres and services for your vehicle.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Dubai's Most Trusted Mobile Tyre Service
          </h2>
          <p className="text-muted-foreground text-lg">
            We've built our reputation on reliability, expertise, and putting our customers first.
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
