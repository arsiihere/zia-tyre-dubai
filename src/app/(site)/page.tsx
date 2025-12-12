import { CTASection } from "@/components/home/CTASection";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Mobile Tyre Fitting & Emergency Tyre Repair in Dubai",
  description: siteConfig.description,
  path: "/",
  keywords: [
    "mobile tyre fitting Dubai",
    "mobile tyre repair Dubai",
    "emergency tyre change Dubai",
    "24/7 tyre service",
    "mobile puncture repair Dubai",
  ],
});

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <CTASection />
    </main>
  );
}
