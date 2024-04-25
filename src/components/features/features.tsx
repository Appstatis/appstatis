import { Feature } from "./feature";

export const Features = () => {
  // dummy data
  const featuresList = [
    {
      image: "https://via.placeholder.com/150",
      title: "Feature 1",
      description: "Description of feature 1",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Feature 2",
      description: "Description of feature 2",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Feature 3",
      description: "Description of feature 3",
    },
  ];

  return (
    <section className="grid gap-10 justify-center">
      {featuresList.map((feature) => (
        <Feature
          key={feature.title}
          image={feature.image}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
};
