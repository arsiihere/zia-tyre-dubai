import { ServicePageTemplate } from "@/components/ServicePageTemplate";

const LockingWheelNutRemoval = () => {
  return (
    <ServicePageTemplate
      title="Locking Wheel Nut Removal"
      subtitle="Specialist Service"
      description="Lost your locking wheel nut key? Don't worry – our specialists use advanced extraction techniques to safely remove locked nuts without damaging your wheels."
      features={[
        "Non-destructive removal techniques",
        "Replacement locking nut sets available",
        "Works on all vehicle makes and models",
        "Alloy wheel protection during removal",
        "Same-day service in most cases",
        "Can combine with tyre fitting if needed",
      ]}
      benefits={[
        {
          title: "Wheel-Safe Methods",
          description: "We prioritize protecting your expensive alloys. Our techniques minimize the risk of scratches or damage.",
        },
        {
          title: "No Key Required",
          description: "Whether your key is lost, damaged, or rounded off, we have the tools and expertise to handle it.",
        },
        {
          title: "Quick Resolution",
          description: "Most locking nuts can be removed within 30-60 minutes, getting you back on track without delay.",
        },
      ]}
    />
  );
};

export default LockingWheelNutRemoval;
