import { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Heading } from "@/components/ui/heading";

export function TeamMember({
  name,
  title,
  children: description,
}: {
  name: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Accordion className="w-full" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <Heading className="md:text-4xl">{name}</Heading>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col items-start gap-4">
          <h3 className="mt-4 text-lg">{title}</h3>
          <p className="text-justify text-base">{description}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
