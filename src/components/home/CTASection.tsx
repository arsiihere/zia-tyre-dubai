import { Link } from "react-router-dom";
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
            Need Tyres Fitted{" "}
            <span className="text-gradient">Right Now?</span>
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Don't wait around at a garage. Our mobile tyre experts will come to you – at home, at work, or roadside – and get you moving again fast.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Book Your Service
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="tel:+971501234567">
                <Phone className="w-5 h-5" />
                +971 50 123 4567
              </a>
            </Button>
          </div>

          <p className="mt-8 text-primary-foreground/60 text-sm">
            Available 24/7 across Dubai • Most jobs completed in under an hour
          </p>
        </div>
      </div>
    </section>
  );
}
