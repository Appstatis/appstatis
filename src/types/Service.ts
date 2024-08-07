import { IconProps } from "@radix-ui/react-icons/dist/types";

export type Service = {
  id: string;
  Icon: React.ComponentType<IconProps>;
  title: string;
  description: string;
};
