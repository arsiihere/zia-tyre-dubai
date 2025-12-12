import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Zap, MapPin, Shield, MessageCircle } from "lucide-react";

export function HeroSection() {
  const whatsappMessage = encodeURIComponent("Hi! I need urgent tyre assistance. Please help!");
  const whatsappUrl = `https://wa.me/971529702828?text=${whatsappMessage}`;

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
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/40 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Zap className="w-4 h-4 text-accent animate-pulse-slow" />
            <span className="text-primary-foreground font-semibold text-sm">
              Instant Response • 5-10 Min Arrival • Dubai Wide
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
            Flat Tyre?{" "}
            <span className="text-gradient">We're Already</span>{" "}
            On Our Way
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl animate-fade-up delay-200">
            Don't panic. Don't wait. The moment you call, our expert technician is dispatched to your exact location. We reach you in just 5-10 minutes – anywhere in Dubai, anytime, day or night.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-fade-up delay-300">
            <Button variant="hero" size="lg" asChild>
              <Link href="/contact">
                Get Help Now
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="tel:+971529702828">
                <Phone className="w-5 h-5" />
                Call – We Answer Instantly
              </a>
            </Button>
          </div>

          {/* WhatsApp Button */}
          <div className="animate-fade-up delay-400 mb-12">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Message Us on WhatsApp</span>
            </a>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-up delay-500">
            <div className="flex items-center gap-3 bg-accent/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-accent/20">
              <Zap className="w-5 h-5 text-accent" />
              <div>
                <p className="text-primary-foreground font-bold text-sm">Instant</p>
                <p className="text-primary-foreground/60 text-xs">Response</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-primary-foreground/10">
              <div className="w-5 h-5 flex items-center justify-center text-accent font-bold text-sm">⚡</div>
              <div>
                <p className="text-primary-foreground font-bold text-sm">5-10 Min</p>
                <p className="text-primary-foreground/60 text-xs">We're There</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-primary-foreground/10">
              <MapPin className="w-5 h-5 text-accent" />
              <div>
                <p className="text-primary-foreground font-bold text-sm">All Dubai</p>
                <p className="text-primary-foreground/60 text-xs">Covered</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-primary-foreground/10">
              <Shield className="w-5 h-5 text-accent" />
              <div>
                <p className="text-primary-foreground font-bold text-sm">24/7</p>
                <p className="text-primary-foreground/60 text-xs">Always Ready</p>
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
