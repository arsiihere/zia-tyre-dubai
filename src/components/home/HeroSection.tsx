import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-hero-gradient overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent blur-[120px]" />
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-primary-foreground blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Fast Arrival • Dubai Wide • 24/7 Service
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
            Expert Mobile Tyre{" "}
            <span className="text-gradient">Fitting & Rescue</span>{" "}
            Across Dubai
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl animate-fade-up delay-200">
            Stuck with a flat? Need new tyres at home or work? Our certified technicians arrive in 30–45 minutes, fully equipped to get you back on the road safely.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up delay-300">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Book Now
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="tel:+971501234567">
                <Phone className="w-5 h-5" />
                Call 24/7
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-up delay-400">
            <div className="flex items-center gap-3 bg-primary-foreground/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-primary-foreground/10">
              <Clock className="w-5 h-5 text-accent" />
              <div>
                <p className="text-primary-foreground font-semibold text-sm">24/7</p>
                <p className="text-primary-foreground/60 text-xs">Always Open</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-primary-foreground/10">
              <MapPin className="w-5 h-5 text-accent" />
              <div>
                <p className="text-primary-foreground font-semibold text-sm">Dubai</p>
                <p className="text-primary-foreground/60 text-xs">Full Coverage</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-primary-foreground/10">
              <Shield className="w-5 h-5 text-accent" />
              <div>
                <p className="text-primary-foreground font-semibold text-sm">Certified</p>
                <p className="text-primary-foreground/60 text-xs">Technicians</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-primary-foreground/10">
              <div className="w-5 h-5 flex items-center justify-center text-accent font-bold text-sm">⚡</div>
              <div>
                <p className="text-primary-foreground font-semibold text-sm">30–45 min</p>
                <p className="text-primary-foreground/60 text-xs">Response Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
}
