import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionComponent() {
  return (
    <div className="w-[30%] mx-auto my-10">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is the refund policy?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            recusandae molestiae tempore magnam adipisci dolorum, vero maiores,
            velit corporis enim incidunt laborum rerum. Incidunt cumque numquam
            ea perferendis voluptatibus? Sint.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What is the payment process?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            recusandae molestiae tempore magnam adipisci dolorum, vero maiores,
            velit corporis enim incidunt laborum rerum. Incidunt cumque numquam
            ea perferendis voluptatibus? Sint.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
