import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Zap, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Received!",
      description: "A technician is being dispatched. We'll call you within minutes.",
    });
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

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
                Get Help Now
              </span>
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary-foreground mb-6">
                Help Is Just 20 Minutes Away
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-2xl">
                Need tyres fitted or stuck with a flat? Call us now and we'll have a technician at your location in 20 minutes. No waiting around – we move fast.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Request Instant Help
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Required
                    </label>
                    <select
                      className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                    >
                      <option value="">Select a service...</option>
                      <option value="mobile-fitting">Mobile Tyre Fitting</option>
                      <option value="home-fitting">Home Tyre Fitting</option>
                      <option value="tyre-repair">Tyre Repair</option>
                      <option value="tyre-change">Tyre Change</option>
                      <option value="locking-nut">Locking Wheel Nut Removal</option>
                      <option value="tpms">TPMS Sensor Replacement</option>
                      <option value="van-fitting">Van Tyre Fitting</option>
                      <option value="truck-fitting">Truck Tyre Fitting</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Location & Details
                    </label>
                    <Textarea
                      placeholder="Where are you? What's the issue? Share any details that help us reach you faster..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" variant="accent" size="lg" className="w-full">
                    <Send className="w-5 h-5" />
                    Send – We'll Call You Immediately
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
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
                    href="tel:+971501234567"
                    className="flex items-start gap-4 p-4 rounded-xl bg-accent/10 border-2 border-accent/30 hover:bg-accent/20 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                        Call Now – Instant Answer
                      </h3>
                      <p className="text-accent font-bold text-lg">+971 50 123 4567</p>
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
                      <p className="text-muted-foreground">20 Minutes • 24/7 • Every Day</p>
                    </div>
                  </div>
                </div>

                {/* Emergency Box */}
                <div className="bg-accent-gradient rounded-2xl p-6 text-accent-foreground">
                  <h3 className="font-heading font-bold text-xl mb-2">
                    Stranded Right Now?
                  </h3>
                  <p className="text-accent-foreground/90 mb-4">
                    Don't stress. Call us and we'll have a technician at your exact location in 20 minutes or less. That's our promise.
                  </p>
                  <Button variant="heroOutline" asChild className="border-accent-foreground/30 bg-accent-foreground/10 text-accent-foreground hover:bg-accent-foreground/20">
                    <a href="tel:+971501234567">
                      <Phone className="w-5 h-5" />
                      +971 50 123 4567
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;