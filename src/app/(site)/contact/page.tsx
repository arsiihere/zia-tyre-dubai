import { Phone, Mail, MapPin, Zap } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";
import { ContactForm } from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact 24/7 Tyre Service Dubai",
  description:
    "Call or message for instant Tyre Puncture and Repair Instant, repair, and emergency call-outs anywhere in Dubai. We answer immediately and dispatch within 10-15 minutes.",
  path: "/contact",
  keywords: [
    "contact tyre service Dubai",
    "emergency tyre contact",
    "mobile tyre hotline Dubai",
    "tyre repair WhatsApp Dubai",
  ],
});

export default function ContactPage() {
  return (
    <main>
      <section className="pt-40 pb-16 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent blur-[120px]" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Get Help Now
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Help Is Just 10-15 Minutes Away
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              Need tyres fitted or stuck with a flat? Call us now and we'll have a technician at your location in 10-15 minutes. No waiting around – we move fast.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Request Instant Help
              </h2>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Fastest Way? Call Us.
                </h2>
                <p className="text-muted-foreground mb-8">
                  For the fastest response, call us directly. We answer instantly and dispatch a technician to your location within minutes.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="tel:+971529702828"
                  className="flex items-start gap-4 p-4 rounded-xl bg-accent/10 border-2 border-accent/30 hover:bg-accent/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      Call Now – Instant Answer
                    </h3>
                    <p className="text-accent font-bold text-lg">+971 52 970 2828</p>
                  </div>
                </a>

                <a
                  href="mailto:info@247tyreservice.ae"
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted hover:bg-accent/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      Email Us
                    </h3>
                    <p className="text-muted-foreground">info@247tyreservice.ae</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted">
                  <div className="w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Service Area</h3>
                    <p className="text-muted-foreground">All areas across Dubai, UAE</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted">
                  <div className="w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Response Time</h3>
                    <p className="text-muted-foreground">10-15 Minutes • 24/7 • Every Day</p>
                  </div>
                </div>

                <div className="bg-accent-gradient rounded-2xl p-6 text-accent-foreground">
                  <h3 className="font-heading font-bold text-xl mb-2">
                    Stranded Right Now?
                  </h3>
                  <p className="text-accent-foreground/90 mb-4">
                    Don't stress. Call us and we'll have a technician at your exact location in 10-15 minutes. That's our promise.
                  </p>
                  <Button
                    variant="heroOutline"
                    asChild
                    className="border-accent-foreground/30 bg-accent-foreground/10 text-accent-foreground hover:bg-accent-foreground/20"
                  >
                    <a href="tel:+971529702828">
                      <Phone className="w-5 h-5" />
                      +971 52 970 2828
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
