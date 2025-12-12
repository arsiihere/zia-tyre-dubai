import { CTASection } from "@/components/home/CTASection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Mobile Tyre Services Across Dubai",
  description:
    "Browse our full range of on-demand tyre services: mobile fitting, puncture repair, TPMS replacement, lock nut removal, van and truck tyre support—anywhere in Dubai.",
  path: "/services",
  keywords: [
    "mobile tyre services Dubai",
    "tyre fitting service Dubai",
    "mobile tyre repair",
    "truck tyre fitting Dubai",
  ],
});

export default function ServicesPage() {
  return (
    <main>
      <section className="pt-40 pb-16 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent blur-[120px]" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              What We Offer
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Our Complete Tyre Services
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              From emergency roadside rescue to scheduled home fittings, we offer the full range of mobile tyre services across Dubai. Available 24/7 with rapid response times.
            </p>
          </div>
        </div>
      </section>

      <ServicesSection />
      <CTASection />
    </main>
  );
}
