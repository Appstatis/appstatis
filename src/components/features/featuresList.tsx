import useTranslation from "next-translate/useTranslation";
import { Header } from "../header";
import { Feature } from "./feature";
import { Feature as TFeature } from "@/types/Feature";
import { useAnimateInView } from "@/hooks/useAnimateInView";

/**
 * FeaturesListComponent is a functional component that represents a list of features on the index page.
 */
export const FeaturesList = ({
  featuresList,
}: {
  featuresList: TFeature[];
}) => {
  if (featuresList.length === 0 || featuresList.length % 3 !== 0) {
    throw new Error("Features list must have a length that is a multiple of 3");
  }

  const { t } = useTranslation("common");
  const { ref } = useAnimateInView(".features", {
    opacity: [0, 1],
    duration: 3000,
  });

  return (
    <div className="mt-[15vh] mb-[20vh] mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <Header
        title={t("features.title")}
        description={t("features.description")}
      />

      <div
        ref={ref}
        className="opacity-0 features mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {featuresList.map((feature) => (
          <Feature
            key={feature.id}
            id={feature.id}
            Icon={feature.Icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};
