import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQItem as TFAQItem } from "@/types/FAQItem";
import { memo } from "react";

const FAQItemComponent = ({ question, answer }: TFAQItem) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{question}</AccordionTrigger>
        <AccordionContent>{answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export const FAQItem = memo(FAQItemComponent);
