import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-24 bg-hero-gradient relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-accent blur-[80px]" />
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-primary-foreground blur-[60px]" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Stranded?{" "}
            <span className="text-gradient">Help is 20 Minutes Away</span>
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            One call. Instant dispatch. Our technician is on the road to you immediately – no delays, no excuses. Get back on the road fast.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link href="/contact">
                Get Help Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="tel:+971529702828">
                <Phone className="w-5 h-5" />
                +971 52 970 2828
              </a>
            </Button>
          </div>

          <p className="mt-8 text-primary-foreground/60 text-sm">
            Available 24/7 • Instant Response • 20-Minute Arrival Anywhere in Dubai
          </p>
        </div>
      </div>
    </section>
  );
}
