import {
  ChatBubbleIcon,
  LockOpen2Icon,
  LinkBreak2Icon,
  HeartIcon,
  ReloadIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";
import { Feature } from "@/types/Feature";

export const featuresList: Feature[] = [
  {
    Icon: LockOpen2Icon,
    title: "Transparent Processes",
    description:
      "We promise full transparency in all our dealings, giving you insight into every stage of our process.",
  },
  {
    Icon: ChatBubbleIcon,
    title: "Flexible Communication",
    description:
      "We prioritize efficient, meeting-free interactions, but are ready to meet when needed.",
  },
  {
    Icon: Pencil2Icon,
    title: "Tailored Solutions",
    description:
      "Understanding your needs is our top priority. We promise personalized solutions that are tailored to meet your unique challenges and objectives.",
  },
  {
    Icon: LinkBreak2Icon,
    title: "Innovation and Excellence",
    description:
      "We utilize modern, sleek, and optimized technologies to build superior web applications that offer the best performance in the market.",
  },
  {
    Icon: ReloadIcon,
    title: "Unlimited Requests",
    description:
      "We offer unlimited support—no matter how many requests you have, we're here to make each one happen.",
  },
  {
    Icon: HeartIcon,
    title: "Support and Aftercare",
    description:
      "We promise ongoing support and aftercare, ensuring that you continue to benefit from our services long after the initial purchase.",
  },
];
