import { memo } from "react";
import { Feature as TFeature } from "@/types/Feature";

/**
 * FeatureComponent is a functional component that represents
 * a single feature of the features section on the index page.
 */
const FeatureComponent = ({ Icon, title, description }: TFeature) => {
  return (
    <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:shadow-white/10">
      <Icon width={22} height={22} color="white" />

      <h2 className="mt-4 text-xl font-bold text-white">{title}</h2>

      <p className="mt-1 text-sm text-gray-300">{description}</p>
    </div>
  );
};

export const Feature = memo(FeatureComponent);
