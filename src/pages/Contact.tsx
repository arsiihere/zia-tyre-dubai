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
    
    // Validate inputs
    const name = formData.name.trim().slice(0, 100);
    const phone = formData.phone.trim().slice(0, 20);
    const email = formData.email.trim().slice(0, 100);
    const service = formData.service.trim().slice(0, 50);
    const message = formData.message.trim().slice(0, 500);
    
    if (!name || !phone || !email || !service) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `🚗 *New Service Request*

👤 *Name:* ${name}
📞 *Phone:* ${phone}
📧 *Email:* ${email}
🔧 *Service:* ${service}
${message ? `📝 *Details:* ${message}` : ""}

_Sent from 24/7 Tyre Service Website_`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/971529702828?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Request Sent!",
      description: "We've opened WhatsApp for you. Send the message to complete your request.",
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
                Help Is Just 5-10 Minutes Away
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-2xl">
                Need tyres fitted or stuck with a flat? Call us now and we'll have a technician at your location in 5-10 minutes. No waiting around – we move fast.
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
                      Your Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      maxLength={100}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        maxLength={20}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        maxLength={100}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Required *
                    </label>
                    <select
                      className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                    >
                      <option value="">Select a service...</option>
                      <option value="Mobile Tyre Fitting">Mobile Tyre Fitting</option>
                      <option value="Home Tyre Fitting">Home Tyre Fitting</option>
                      <option value="Tyre Repair">Tyre Repair</option>
                      <option value="Tyre Change">Tyre Change</option>
                      <option value="Locking Wheel Nut Removal">Locking Wheel Nut Removal</option>
                      <option value="TPMS Sensor Replacement">TPMS Sensor Replacement</option>
                      <option value="Van Tyre Fitting">Van Tyre Fitting</option>
                      <option value="Truck Tyre Fitting">Truck Tyre Fitting</option>
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
                      maxLength={500}
                    />
                  </div>
                  <Button type="submit" variant="accent" size="lg" className="w-full">
                    <Send className="w-5 h-5" />
                    Send via WhatsApp
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
                      <p className="text-muted-foreground">5-10 Minutes • 24/7 • Every Day</p>
                    </div>
                  </div>
                </div>

                {/* Emergency Box */}
                <div className="bg-accent-gradient rounded-2xl p-6 text-accent-foreground">
                  <h3 className="font-heading font-bold text-xl mb-2">
                    Stranded Right Now?
                  </h3>
                  <p className="text-accent-foreground/90 mb-4">
                    Don't stress. Call us and we'll have a technician at your exact location in 5-10 minutes. That's our promise.
                  </p>
                  <Button variant="heroOutline" asChild className="border-accent-foreground/30 bg-accent-foreground/10 text-accent-foreground hover:bg-accent-foreground/20">
                    <a href="tel:+971529702828">
                      <Phone className="w-5 h-5" />
                      +971 52 970 2828
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
