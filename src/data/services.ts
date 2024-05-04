import {
  RocketIcon,
  AspectRatioIcon,
  DesktopIcon,
} from "@radix-ui/react-icons";
import type { Service } from "@/types/Service";

export const services: Service[] = [
  {
    Icon: AspectRatioIcon,
    title: "Website Design",
    description:
      "Creating visually stunning, user-centric web designs that ensure a seamless user experience across all devices.",
  },
  {
    Icon: DesktopIcon,
    title: "Website Development",
    description:
      "Leveraging leading technologies to build fast, responsive websites that enhance user engagement and improve conversion rates.",
  },
  {
    Icon: RocketIcon,
    title: "Website Maintenance",
    description:
      "Providing comprehensive maintenance services including performance optimization, security updates, and timely enhancements to keep your site running smoothly.",
  },
];
