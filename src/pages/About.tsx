import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/home/CTASection";
import { CheckCircle, Users, Award, Target } from "lucide-react";

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-40 pb-16 bg-hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent blur-[120px]" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                About Zia Chohan
              </span>
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary-foreground mb-6">
                Your Trusted Mobile Tyre Partner in Dubai
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-2xl">
                We're not just a tyre service – we're your reliable partner when you need help the most. Serving Dubai's drivers with professional, honest, and convenient mobile tyre solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                  Built on Reliability & Trust
                </h2>
                <p className="text-muted-foreground mb-4">
                  Zia Chohan Mobile Tyre Services was founded with a simple mission: to make professional tyre care accessible, convenient, and stress-free for every driver in Dubai.
                </p>
                <p className="text-muted-foreground mb-4">
                  We understand that tyre problems never come at convenient times. That's why we've built a service that works around your schedule – not the other way around. Whether it's 3am on a highway or a Sunday morning at home, we're there.
                </p>
                <p className="text-muted-foreground">
                  Our team of certified technicians brings years of experience and genuine care for customer safety. Every service we provide is backed by our commitment to quality and honest pricing.
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
                <div className="bg-muted rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent-gradient flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-foreground mb-1">30 min</h3>
                  <p className="text-muted-foreground text-sm">Avg Response</p>
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

        {/* Values */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground">
                These principles guide everything we do at Zia Chohan.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  Customer First
                </h3>
                <p className="text-muted-foreground">
                  Your safety and convenience are our top priorities. We design every aspect of our service around what's best for you.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  Honest & Transparent
                </h3>
                <p className="text-muted-foreground">
                  No hidden fees, no unnecessary upselling. We tell you exactly what you need and charge fair prices for quality work.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  Excellence Always
                </h3>
                <p className="text-muted-foreground">
                  From our equipment to our technicians to our customer service, we maintain the highest standards in everything.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default About;
