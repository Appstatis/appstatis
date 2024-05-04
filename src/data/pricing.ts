import { PricingItem } from "@/types/PricingItem";

export const pricing: PricingItem[] = [
  {
    title: "One Time",
    cost: 1000,
    description: "Tailored for quick resolutions without ongoing obligations.",
    type: "one-time",
    features: [
      "All-inclusive technical support.",
      "Post-launch support at $20/hr.",
      "Excludes third-party expenses.",
    ],
  },
  {
    title: "Periodic",
    cost: 150,
    description: "Ideal for small businesses and startups.",
    type: "periodic",
    features: [
      "Comprehensive technical support.",
      "Free hosting and domain registration.",
      "Continuous maintenance and proactive support.",
      "Bug fixes and performance enhancements.",
      "Note: Additional charges for third-party services may apply.",
    ],
  },
];
