import { CheckCircle, Users, Award, Zap } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About 24/7 Tyre Service Dubai",
  description:
    "Learn why drivers trust our 5-10 minute mobile tyre response across Dubai. Certified technicians, fair pricing, and a relentless focus on getting you back on the road fast.",
  path: "/about",
  keywords: [
    "about tyre service Dubai",
    "mobile tyre technicians Dubai",
    "emergency tyre team Dubai",
    "24/7 tyre repair crew",
  ],
});

export default function AboutPage() {
  return (
    <main>
      <section className="pt-40 pb-16 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent blur-[120px]" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              About 24/7 Tyre Service
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Built for Speed. Driven by Trust.
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              When you're stranded with a flat tyre, you don't need promises – you need help NOW. That's exactly why we exist. We're Dubai's fastest mobile tyre service because we know every minute matters.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Why Speed Is Everything
              </h2>
              <p className="text-muted-foreground mb-4">
                24/7 Tyre Service was built on one simple truth: when your tyre fails, you need help immediately – not in an hour, not "soon." That's why we've engineered our entire operation around one goal: getting to you in 5-10 minutes.
              </p>
              <p className="text-muted-foreground mb-4">
                Our mobile units are strategically positioned across Dubai. The moment you call, our dispatch system finds the nearest available technician and sends them directly to your location. No paperwork. No delays. Just fast, professional help.
              </p>
              <p className="text-muted-foreground">
                Every one of our technicians is equipped with professional-grade tools and a full range of quality tyres. They arrive ready to solve your problem on the spot – whether it's 3am on Sheikh Zayed Road or Sunday afternoon at your home.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-muted rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent-gradient flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-foreground mb-1">5000+</h3>
                <p className="text-muted-foreground text-sm">Happy Customers</p>
              </div>
              <div className="bg-muted rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent-gradient flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-foreground mb-1">10+</h3>
                <p className="text-muted-foreground text-sm">Years Experience</p>
              </div>
              <div className="bg-accent/10 rounded-2xl p-6 text-center border-2 border-accent/30">
                <div className="w-12 h-12 rounded-full bg-accent-gradient flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-foreground mb-1">5-10 min</h3>
                <p className="text-muted-foreground text-sm">Arrival Window</p>
              </div>
              <div className="bg-muted rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent-gradient flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-foreground mb-1">100%</h3>
                <p className="text-muted-foreground text-sm">Satisfaction Goal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Our Promise to You
            </h2>
            <p className="text-muted-foreground">
              These aren't just words – they're the standards we hold ourselves to every single day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                Lightning Fast
              </h3>
              <p className="text-muted-foreground">
                5-10 minutes. That's our target for every single call. We've built our entire operation around getting to you as fast as humanly possible.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                Honest & Fair
              </h3>
              <p className="text-muted-foreground">
                No hidden fees. No pressure tactics. We quote a fair price upfront and stick to it. Your trust matters more than any upsell.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                Always Ready
              </h3>
              <p className="text-muted-foreground">
                24/7 means 24/7. Midnight, holidays, weekends – our team is always on standby because emergencies don't check the calendar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
