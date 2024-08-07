import {
  ChatBubbleIcon,
  LockOpen2Icon,
  LinkBreak2Icon,
  HeartIcon,
  ReloadIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";

export const featuresIcons: { [key: string]: React.ComponentType<IconProps> } =
  {
    "transparent-processes": LockOpen2Icon,
    "flexible-communication": ChatBubbleIcon,
    "tailored-solutions": Pencil2Icon,
    "innovation-and-excellence": LinkBreak2Icon,
    "unlimited-requests": ReloadIcon,
    "support-and-aftercare": HeartIcon,
  };
