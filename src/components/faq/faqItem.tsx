import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQItem as TFAQItem } from "@/types/FAQItem";
import { memo } from "react";

/**
 * FAQItemComponent is a functional component that represents a single FAQ item.
 * It should be used inside the FAQItems component as a child.
 */
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
