import { FeaturesList } from "./featuresList";
import { featuresList } from "../../data/featuresList";

/**
 * Features is a functional component that abstracts the logic of the FeaturesList component.
 */
export const Features = () => {
  return <FeaturesList featuresList={featuresList} />;
};
