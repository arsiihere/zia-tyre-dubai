import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Zap, Facebook, Instagram, Twitter } from "lucide-react";

const services = [
  { name: "Mobile Tyre Fitting", href: "/mobile-tyre-fitting" },
  { name: "Home Tyre Fitting", href: "/home-tyre-fitting" },
  { name: "Mobile Tyre Repair", href: "/mobile-tyre-repair" },
  { name: "Mobile Tyre Change", href: "/mobile-tyre-change" },
  { name: "Locking Wheel Nut Removal", href: "/locking-wheel-nut-removal" },
  { name: "TPMS Sensor Replacement", href: "/tpms-sensor-replacement" },
  { name: "Van Tyre Fitting", href: "/van-tyre-fitting" },
  { name: "Truck Tyre Fitting", href: "/truck-tyre-fitting" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "All Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-gradient flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-sm">24/7</span>
              </div>
              <span className="font-heading font-bold text-xl">24/7 Tyre Service</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Dubai's fastest mobile tyre service. Instant response, 20-minute arrival, expert technicians. When you're stranded, we're already on our way.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+971529702828" className="text-sm hover:text-accent transition-colors">
                    +971 52 970 2828
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:info@247tyreservice.ae" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  info@247tyreservice.ae
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  Dubai, United Arab Emirates
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  20-Minute Arrival • 24/7
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} 24/7 Tyre Service. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}