import Script from "next/script";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { buildMetadata, buildServiceJsonLd } from "@/lib/seo";

const service = {
  title: "Mobile Tyre Fitting in Dubai",
  subtitle: "Our Core Service",
  description:
    "Professional tyre fitting that comes to you. Whether you're at home, at work, or stranded roadside, our certified technicians arrive fully equipped to fit your new tyres quickly and safely.",
  features: [
    "Full range of tyre brands and sizes available",
    "Professional mounting and balancing on-site",
    "Valve replacement included",
    "Old tyre disposal handled for you",
    "Electronic wheel balancing for smooth driving",
    "Fits most cars, SUVs, and 4x4 vehicles",
  ],
  benefits: [
    {
      title: "No Garage Visits Needed",
      description:
        "Skip the queues and waiting rooms. We bring the complete tyre fitting service directly to your location.",
    },
    {
      title: "Same-Day Service Available",
      description:
        "Need tyres fitted today? We offer rapid response service with most jobs completed within hours of booking.",
    },
    {
      title: "Competitive Pricing",
      description:
        "Quality tyres at fair prices with no hidden call-out fees. Get a clear quote before we arrive.",
    },
  ],
};

export const metadata = buildMetadata({
  title: service.title,
  description: service.description,
  path: "/mobile-tyre-fitting",
  keywords: [
    "mobile tyre fitting Dubai",
    "mobile tire replacement Dubai",
    "tyre fitting at home Dubai",
    "emergency tyre fitting Dubai",
  ],
});

export default function MobileTyreFittingPage() {
  const jsonLd = buildServiceJsonLd({
    name: service.title,
    description: service.description,
    path: "/mobile-tyre-fitting",
  });

  return (
    <>
      <ServicePageTemplate {...service} />
      <Script id="ld-mobile-tyre-fitting" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>
    </>
  );
}
