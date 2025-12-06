import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Home, Settings, RefreshCw, Key, Gauge, Truck, CarFront } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: CarFront,
    title: "Mobile Tyre Fitting",
    description: "Professional tyre fitting at your location. We come to you with all the equipment needed for a swift replacement.",
    href: "/mobile-tyre-fitting",
  },
  {
    icon: Home,
    title: "Home Tyre Fitting",
    description: "Enjoy the convenience of having your tyres fitted at home. No need to visit a garage – we bring the service to your doorstep.",
    href: "/home-tyre-fitting",
  },
  {
    icon: Wrench,
    title: "Tyre Repair",
    description: "Expert puncture repairs on the spot. Our technicians assess the damage and provide lasting repairs when safe to do so.",
    href: "/mobile-tyre-repair",
  },
  {
    icon: RefreshCw,
    title: "Tyre Change",
    description: "Quick and efficient tyre changes for any situation. From spare tyre installation to complete replacements.",
    href: "/mobile-tyre-change",
  },
  {
    icon: Key,
    title: "Locking Wheel Nut Removal",
    description: "Lost your locking wheel nut key? Our specialists use advanced techniques to safely remove locked nuts without damage.",
    href: "/locking-wheel-nut-removal",
  },
  {
    icon: Gauge,
    title: "TPMS Replacement",
    description: "Tyre Pressure Monitoring System sensor replacement and programming. Keep your safety systems working perfectly.",
    href: "/tpms-sensor-replacement",
  },
  {
    icon: Truck,
    title: "Van Tyre Fitting",
    description: "Specialized service for commercial vans and light commercial vehicles. Minimize downtime for your business.",
    href: "/van-tyre-fitting",
  },
  {
    icon: Settings,
    title: "Truck Tyre Fitting",
    description: "Heavy-duty tyre solutions for trucks and larger vehicles. Professional equipment for the toughest jobs.",
    href: "/truck-tyre-fitting",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Complete Tyre Solutions at Your Location
          </h2>
          <p className="text-muted-foreground text-lg">
            From emergency roadside assistance to scheduled home fittings, we offer comprehensive mobile tyre services across Dubai.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.href}
              to={service.href}
              className={cn(
                "group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-accent/30",
                "animate-fade-up"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent-gradient transition-all duration-300">
                  <service.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
