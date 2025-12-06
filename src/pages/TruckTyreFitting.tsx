import { ServicePageTemplate } from "@/components/ServicePageTemplate";

const TruckTyreFitting = () => {
  return (
    <ServicePageTemplate
      title="Truck Tyre Fitting Service"
      subtitle="Heavy Vehicle Specialists"
      description="Professional tyre solutions for trucks and heavy vehicles. Our mobile units carry the heavy-duty equipment needed to handle commercial truck tyres efficiently."
      features={[
        "Full range of truck tyre sizes",
        "Steer, drive, and trailer positions",
        "Retorquing service included",
        "Tyre pressure monitoring",
        "Multi-axle vehicle capability",
        "24/7 emergency truck service",
      ]}
      benefits={[
        {
          title: "Heavy-Duty Equipment",
          description: "We're properly equipped for truck tyres – no improvising. Professional jacks, guns, and balancing equipment.",
        },
        {
          title: "Roadside Truck Rescue",
          description: "Breakdown with your HGV? Our 24/7 team can reach you on highways across Dubai and get you moving.",
        },
        {
          title: "Commercial Expertise",
          description: "Our technicians understand commercial vehicle requirements and regulations for tyre fitting.",
        },
      ]}
    />
  );
};

export default TruckTyreFitting;
