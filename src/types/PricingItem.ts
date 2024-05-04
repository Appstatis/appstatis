export type PricingItem = {
  title: string;
  cost: number;
  description: string;
  type: "one-time" | "periodic";
  features: string[];
};
