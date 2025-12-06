import { ServicePageTemplate } from "@/components/ServicePageTemplate";

const MobileTyreRepair = () => {
  return (
    <ServicePageTemplate
      title="Mobile Tyre Repair in Dubai"
      subtitle="Emergency Puncture Repair"
      description="Got a puncture? Our mobile tyre repair service gets you back on the road without the cost of a full replacement. We assess the damage and provide professional repairs wherever you are."
      features={[
        "Thorough inspection of tyre damage",
        "Industry-standard puncture repair methods",
        "Assessment of whether repair is safe",
        "Tyre pressure check and adjustment",
        "Spare tyre inspection included",
        "Quick turnaround – usually under 30 minutes",
      ]}
      benefits={[
        {
          title: "Save Money on Repairs",
          description: "A professional repair costs a fraction of a new tyre. We'll always advise honestly if replacement is needed.",
        },
        {
          title: "Safe & Lasting Repairs",
          description: "We only repair tyres when it's safe to do so, using methods that meet manufacturer standards.",
        },
        {
          title: "Roadside or At Home",
          description: "Stuck on the highway or noticed a slow puncture at home? We come to you either way.",
        },
      ]}
    />
  );
};

export default MobileTyreRepair;
