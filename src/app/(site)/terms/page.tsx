import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "Understand the terms for using 24/7 Tyre Service, including booking conditions, pricing transparency, and service limitations across Dubai.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="container pt-40 pb-20">
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-heading font-bold text-foreground">Terms of Service</h1>
          <p className="text-muted-foreground">
            By booking with 24/7 Tyre Service, you agree to the terms below. They ensure we can deliver safe, transparent, and reliable service every time.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-semibold text-foreground">Bookings & Availability</h2>
          <p className="text-muted-foreground">
            We operate 24/7 across Dubai. Appointment times are estimates based on traffic and technician availability. We'll keep you updated if conditions change.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-semibold text-foreground">Pricing</h2>
          <p className="text-muted-foreground">
            We provide transparent quotes before dispatch. Additional costs (for example, specialty tyres or parts) will be confirmed with you before work begins.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-semibold text-foreground">Service Limitations</h2>
          <p className="text-muted-foreground">
            For safety reasons, some tyres may not be repairable. In those cases we will recommend replacement. We reserve the right to decline unsafe repairs or work in hazardous locations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-semibold text-foreground">Payments</h2>
          <p className="text-muted-foreground">
            Payment is due upon completion of service unless otherwise agreed in writing. Business and fleet customers may have separate terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-semibold text-foreground">Contact</h2>
          <p className="text-muted-foreground">
            Questions about these terms? Email <a href="mailto:info@247tyreservice.ae" className="text-primary underline">info@247tyreservice.ae</a> or call <a href="tel:+971529702828" className="text-primary underline">+971 52 970 2828</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
