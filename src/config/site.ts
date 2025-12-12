const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://247tyreservice.ae";
const normalizedUrl = (rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`).replace(/\/$/, "");

export const siteConfig = {
  name: "24/7 Mobile Tyre Service Dubai",
  shortName: "24/7 Tyre Service",
  description:
    "Instant 5-10 minute mobile tyre fitting, repair, TPMS replacement, and emergency call-outs across Dubai. Book professional technicians who come directly to you—24/7.",
  url: normalizedUrl,
  phone: "+971529702828",
  email: "info@247tyreservice.ae",
  address: "Dubai, United Arab Emirates",
  serviceArea: "Dubai, UAE",
};
