import {
  RocketIcon,
  AspectRatioIcon,
  DesktopIcon,
} from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";

export const servicesIcons: { [key: string]: React.ComponentType<IconProps> } =
  {
    "website-design": AspectRatioIcon,
    "website-development": DesktopIcon,
    "website-maintenance": RocketIcon,
  };
