import { ServicePageTemplate } from "@/components/ServicePageTemplate";

const TPMSSensorReplacement = () => {
  return (
    <ServicePageTemplate
      title="TPMS Sensor Replacement"
      subtitle="Safety System Service"
      description="Keep your Tyre Pressure Monitoring System working correctly. We supply, fit, and program TPMS sensors for all vehicle makes – all from our mobile service."
      features={[
        "OE-quality replacement sensors",
        "Universal sensors for most vehicles",
        "On-site programming and calibration",
        "Dashboard warning light reset",
        "Valve stem and seal replacement",
        "Pressure check and adjustment",
      ]}
      benefits={[
        {
          title: "Maintain Safety Features",
          description: "A working TPMS alerts you to dangerous pressure drops. Don't ignore that warning light – get it fixed.",
        },
        {
          title: "Avoid MOT Failures",
          description: "In many regions, a faulty TPMS means failing your vehicle inspection. We keep you compliant.",
        },
        {
          title: "Expert Programming",
          description: "We have the diagnostic tools to program sensors correctly for your specific vehicle.",
        },
      ]}
    />
  );
};

export default TPMSSensorReplacement;
