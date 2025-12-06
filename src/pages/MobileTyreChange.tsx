import { ServicePageTemplate } from "@/components/ServicePageTemplate";

const MobileTyreChange = () => {
  return (
    <ServicePageTemplate
      title="Mobile Tyre Change Service"
      subtitle="Fast Tyre Replacement"
      description="Whether you need a spare fitted or a complete tyre swap, our mobile tyre change service handles it all. Quick, professional, and available around the clock across Dubai."
      features={[
        "Spare tyre installation and removal",
        "Single or multiple tyre changes",
        "Seasonal tyre swaps available",
        "Wheel nut torque check included",
        "Tyre condition assessment",
        "Emergency breakdown assistance",
      ]}
      benefits={[
        {
          title: "Rapid Response",
          description: "We understand breakdowns are stressful. Our team prioritizes getting to you fast so you're not left waiting.",
        },
        {
          title: "Full Wheel Care",
          description: "We don't just swap tyres – we check your wheels, nuts, and advise on any concerns we spot.",
        },
        {
          title: "Any Time, Any Place",
          description: "Late night flat on Sheikh Zayed Road? Early morning issue in JLT? We're there when you need us.",
        },
      ]}
    />
  );
};

export default MobileTyreChange;
