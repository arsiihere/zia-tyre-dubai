import { ServicePageTemplate } from "@/components/ServicePageTemplate";

const VanTyreFitting = () => {
  return (
    <ServicePageTemplate
      title="Mobile Van Tyre Fitting"
      subtitle="Commercial Vehicle Service"
      description="Specialized mobile tyre service for vans and light commercial vehicles. We understand your business can't afford downtime – that's why we come to you with fast, professional service."
      features={[
        "Commercial-grade van tyres in stock",
        "Load-rated tyres for heavy cargo",
        "Dual rear wheel service available",
        "Business premises or depot visits",
        "Fleet service options",
        "Out-of-hours appointments available",
      ]}
      benefits={[
        {
          title: "Minimize Business Downtime",
          description: "We work around your schedule and can often fit tyres while you load or during lunch breaks.",
        },
        {
          title: "Right Tyres for the Job",
          description: "We stock proper commercial tyres rated for the loads your van carries, not just car tyres.",
        },
        {
          title: "Fleet Discounts",
          description: "Running multiple vehicles? Ask about our business accounts and fleet pricing options.",
        },
      ]}
    />
  );
};

export default VanTyreFitting;
