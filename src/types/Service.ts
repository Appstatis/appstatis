import { IconProps } from "@radix-ui/react-icons/dist/types";

export type Service = {
  Icon: React.ComponentType<IconProps>;
  title: string;
  description: string;
};
