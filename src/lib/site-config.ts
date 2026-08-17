// Update these details anytime you need to change contact info, pricing, or branding.
// This is the single source of truth for the Safe Space landing page.

export const siteConfig = {
  name: "Safe Space",
  tagline: "Talk to someone who doesn't know you—and never will.",

  // The email address shown across the site and used in the mailto CTA.
  email: "hello@safespace.vault",

  // The session price and label shown in the Investment section.
  // Add a currency symbol here if you want one (e.g. "₦", "$", "€").
  price: "10,000",
  priceLabel: "per deep-dive session",
  currency: "",

  // How long the visitor should expect to wait for a response.
  responseTime: "48 hours",
} as const;
