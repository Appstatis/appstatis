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
      "Specializing in creating custom web solutions tailored to meet your unique needs and goals.",
  },
  {
    Icon: DesktopIcon,
    title: "Website Development",
    description:
      "Crafting high-quality websites using cutting-edge technologies and innovative design and development approaches.",
  },
  {
    Icon: RocketIcon,
    title: "Website Maintenance",
    description:
      "Offering services to optimize website performance, as well as regular maintenance and support to ensure seamless operation.",
  },
];
