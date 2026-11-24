// Everything the site says lives here. The starter ships with placeholder copy on purpose:
// the first collie goal ("The home page says what we sell") replaces it with the real product.
export const site = {
  name: "Your product",
  pitch: "One sentence that says what you sell and why it matters.",
  audience: "Built for the people who need it most.",
  benefits: [
    { title: "First benefit", text: "What changes for the customer, in one short line." },
    { title: "Second benefit", text: "Another reason to care, concrete and specific." },
    { title: "Third benefit", text: "The one that makes them try it today." },
  ],
  cta: { label: "Get started", href: "#" },
} as const;
