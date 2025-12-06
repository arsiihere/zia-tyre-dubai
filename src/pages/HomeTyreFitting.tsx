import { ServicePageTemplate } from "@/components/ServicePageTemplate";

const HomeTyreFitting = () => {
  return (
    <ServicePageTemplate
      title="Home Tyre Fitting Service"
      subtitle="Ultimate Convenience"
      description="Enjoy the comfort of having your tyres fitted in your own driveway. Our mobile service brings professional tyre fitting to your doorstep, saving you time and hassle."
      features={[
        "Fitted at your home at a time that suits you",
        "No need to drive on worn or damaged tyres",
        "Wide selection of premium and budget tyres",
        "Professional balancing with portable equipment",
        "Weekend and evening appointments available",
        "Friendly service with full clean-up afterwards",
      ]}
      benefits={[
        {
          title: "Your Schedule, Your Terms",
          description: "Book a time slot that works around your day. Early morning, evening, or weekend – we're flexible.",
        },
        {
          title: "Safe & Convenient",
          description: "No need to risk driving on damaged tyres to a garage. We handle everything at your property.",
        },
        {
          title: "Family Friendly",
          description: "Stay home with the kids while we work. No waiting rooms or disruption to your routine.",
        },
      ]}
    />
  );
};

export default HomeTyreFitting;
