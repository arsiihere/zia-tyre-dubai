import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Mobile Tyre Fitting", href: "/mobile-tyre-fitting" },
  { name: "Home Tyre Fitting", href: "/home-tyre-fitting" },
  { name: "Tyre Repair", href: "/mobile-tyre-repair" },
  { name: "Tyre Change", href: "/mobile-tyre-change" },
  { name: "Locking Wheel Nut Removal", href: "/locking-wheel-nut-removal" },
  { name: "TPMS Replacement", href: "/tpms-sensor-replacement" },
  { name: "Van Tyre Fitting", href: "/van-tyre-fitting" },
  { name: "Truck Tyre Fitting", href: "/truck-tyre-fitting" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent" />
              <span className="font-semibold">Instant Response • We Reach You in 20 Minutes!</span>
            </div>
          </div>
          <a href="tel:+971529702828" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="w-4 h-4" />
            <span className="font-semibold">+971 52 970 2828</span>
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent-gradient flex items-center justify-center">
              <span className="text-accent-foreground font-heading font-bold text-sm">24/7</span>
            </div>
            <div>
              <span className="font-heading font-bold text-xl text-foreground">24/7 Tyre Service</span>
              <span className="hidden sm:block text-xs text-muted-foreground">Lightning Fast • Dubai Wide</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              item.name === "Services" ? (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      location.pathname === item.href || location.pathname.includes("tyre") || location.pathname.includes("tpms") || location.pathname.includes("locking")
                        ? "text-accent"
                        : "text-foreground hover:text-accent hover:bg-accent/5"
                    )}
                  >
                    Services
                  </Link>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="bg-card rounded-xl shadow-card-hover border border-border p-2 min-w-[240px]">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            className={cn(
                              "block px-4 py-2.5 rounded-lg text-sm transition-colors",
                              location.pathname === service.href
                                ? "bg-accent/10 text-accent"
                                : "text-foreground hover:bg-muted hover:text-accent"
                            )}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    location.pathname === item.href
                      ? "text-accent"
                      : "text-foreground hover:text-accent hover:bg-accent/5"
                  )}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+971529702828">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
            <Button variant="accent" size="sm" asChild>
              <Link to="/contact">Book Service</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    location.pathname === item.href
                      ? "bg-accent/10 text-accent"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline" asChild>
                  <a href="tel:+971529702828">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </Button>
                <Button variant="accent" asChild>
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Book Service</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}