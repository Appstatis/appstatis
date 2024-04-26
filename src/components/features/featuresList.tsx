import { Button } from "../ui/button";
import { Feature } from "./feature";
import { Feature as TFeature } from "@/types/Feature";

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

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            What we promise you
          </h2>

          <p className="mt-4 text-gray-300">
            Expert web development services that are available around the clock,
            ensuring personalized and technology-driven solutions to meet your
            project needs, allowing you to focus on your core business while we
            handle your web development requirements.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresList.map((feature, index) => (
            <Feature
              key={index}
              Icon={feature.Icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button>Get Started Today</Button>
        </div>
      </div>
    </section>
  );
};
