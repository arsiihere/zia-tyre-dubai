import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Learn how 24/7 Tyre Service collects, uses, and protects your information when you request mobile tyre services across Dubai.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="container pt-40 pb-20">
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-heading font-bold text-foreground">Privacy Policy</h1>
          <p className="text-muted-foreground">
            We respect your privacy. This page explains what personal data we collect, how we use it, and the steps we take to keep it secure.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-semibold text-foreground">Information We Collect</h2>
          <p className="text-muted-foreground">
            When you contact us for tyre services, we collect details such as your name, phone number, email, vehicle information, and service location. This helps us dispatch the right technician and communicate quickly.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-semibold text-foreground">How We Use Your Data</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Responding to service requests and confirming bookings.</li>
            <li>Providing updates about arrival times and service progress.</li>
            <li>Sending invoices or receipts when required.</li>
            <li>Improving our response times and service quality.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-semibold text-foreground">Data Sharing</h2>
          <p className="text-muted-foreground">
            We do not sell your data. We only share details with trusted partners when necessary to complete your service (for example, payment processing or sourcing specific tyres you request).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-semibold text-foreground">Data Security</h2>
          <p className="text-muted-foreground">
            We store your information securely and only for as long as needed to deliver our services and meet legal requirements. You can request access or deletion of your data by contacting us.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-semibold text-foreground">Contact</h2>
          <p className="text-muted-foreground">
            For privacy questions, email <a href="mailto:info@247tyreservice.ae" className="text-primary underline">info@247tyreservice.ae</a> or call <a href="tel:+971529702828" className="text-primary underline">+971 52 970 2828</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
