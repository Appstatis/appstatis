import { PricingItem } from "@/types/PricingItem";

export const pricing: PricingItem[] = [
  {
    title: "One Time",
    cost: 600,
    description: "Tailored for quick resolutions without ongoing obligations.",
    type: "one-time",
    features: [
      "5 pages.",
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
      "5 pages.",
      "Comprehensive technical support.",
      "Free hosting.",
      "Continuous maintenance and proactive support.",
      "Bug fixes and performance enhancements.",
      "Note: Additional charges for third-party services may apply.",
    ],
  },
  {
    title: "Custom",
    description:
      "Have a unique project in mind? Let's discuss your requirements and come up with a custom plan that suits your needs.",
  },
];
