import { memo } from "react";

const FeatureComponent = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="grid space-x-28 place-items-center grid-cols-2">
      <div>
        <h2 className="font-bold text-2xl">{title}</h2>
        <p>{description}</p>
      </div>
      {/* hack: not using Image because it throws an error */}
      <img src={image} alt={title} className="w-full" />
    </div>
  );
};

export const Feature = memo(FeatureComponent);
