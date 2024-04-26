import { IconProps } from "@radix-ui/react-icons/dist/types";

export type Feature = {
  Icon: React.ComponentType<IconProps>;
  title: string;
  description: string;
};
