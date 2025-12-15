import Image from "next/image";
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
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/40 rounded-full px-4 py-2 mb-6 animate-fade-up">
              <Zap className="w-4 h-4 text-accent animate-pulse-slow" />
              <span className="text-primary-foreground font-semibold text-sm">
                Instant Response • 10-15 Min Arrival • Dubai Wide
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
              We're 24/7 ready to provide you roadside assistance and come to your location for any kind of tyre repairing work in just 10 - 15 minutes
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
                  <p className="text-primary-foreground font-bold text-sm">10-15 Min</p>
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

          <div className="relative max-w-xl mx-auto lg:mx-0 lg:ml-auto animate-fade-up delay-200">
            <div className="absolute -right-10 -top-12 w-64 h-64 rounded-full bg-accent/25 blur-[120px]" />
            <div className="relative overflow-hidden rounded-[28px] border border-primary-foreground/10 bg-primary-foreground/5 shadow-2xl">
              <Image
                src="/mobile-tyre-replacement-dubai.webp"
                alt="Mobile tyre replacement van ready to help in Dubai"
                width={1024}
                height={1024}
                priority
                sizes="(min-width: 1280px) 520px, (min-width: 1024px) 420px, 90vw"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/35 via-transparent to-transparent" />
            </div>
            <div className="absolute -left-6 bottom-6 hidden sm:flex items-center gap-3 bg-background/90 border border-border/80 rounded-2xl px-4 py-3 shadow-card backdrop-blur">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-foreground font-semibold text-sm">24/7 Mobile Tyre Rescue</p>
                <p className="text-muted-foreground text-xs">On-site within 10-15 minutes</p>
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
