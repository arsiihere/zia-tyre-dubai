import Script from "next/script";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { buildMetadata, buildServiceJsonLd } from "@/lib/seo";

const service = {
  title: "TPMS Sensor Replacement",
  subtitle: "Safety System Service",
  description:
    "Keep your Tyre Pressure Monitoring System working correctly. We supply, fit, and program TPMS sensors for all vehicle makes – all from our mobile service.",
  features: [
    "OE-quality replacement sensors",
    "Universal sensors for most vehicles",
    "On-site programming and calibration",
    "Dashboard warning light reset",
    "Valve stem and seal replacement",
    "Pressure check and adjustment",
  ],
  benefits: [
    {
      title: "Maintain Safety Features",
      description:
        "A working TPMS alerts you to dangerous pressure drops. Don't ignore that warning light – get it fixed.",
    },
    {
      title: "Avoid MOT Failures",
      description:
        "In many regions, a faulty TPMS means failing your vehicle inspection. We keep you compliant.",
    },
    {
      title: "Expert Programming",
      description:
        "We have the diagnostic tools to program sensors correctly for your specific vehicle.",
    },
  ],
};

export const metadata = buildMetadata({
  title: service.title,
  description: service.description,
  path: "/tpms-sensor-replacement",
  keywords: [
    "TPMS sensor replacement Dubai",
    "tyre pressure sensor Dubai",
    "TPMS programming Dubai",
    "fix tyre pressure warning light",
  ],
});

export default function TPMSSensorReplacementPage() {
  const jsonLd = buildServiceJsonLd({
    name: service.title,
    description: service.description,
    path: "/tpms-sensor-replacement",
  });

  return (
    <>
      <ServicePageTemplate {...service} />
      <Script id="ld-tpms-sensor-replacement" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>
    </>
  );
}
