import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: {
    title: string;
    description: string;
  }[];
}

export function ServicePageTemplate({
  title,
  subtitle,
  description,
  features,
  benefits,
}: ServicePageProps) {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-40 pb-20 bg-hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent blur-[120px]" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                {subtitle}
              </span>
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary-foreground mb-6">
                {title}
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Book This Service
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="tel:+971501234567">
                    <Phone className="w-5 h-5" />
                    Call 24/7
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                  What's Included
                </h2>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-muted rounded-2xl p-8">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
                  Why Choose Our Service
                </h3>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-foreground mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
