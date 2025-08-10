import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function NavbarFAQ() {
  return (
    <section className="max-w-3xl mx-auto pb-8 px-4 relative z-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Can I customize the navbar colors and styles?
          </AccordionTrigger>
          <AccordionContent>
            Yes, all prebuilt navbars are fully customizable. You can change
            colors, fonts, spacing, and animations to fit your brand.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            Does the navbar support Framer Motion animations?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely! Each navbar includes subtle Framer Motion animations by
            default, and you can easily tweak the motion variants.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            Is it responsive for mobile devices?
          </AccordionTrigger>
          <AccordionContent>
            Yes, all navbars are built mobile-first and include smooth
            responsive menu transitions.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Can I add my own menu items?</AccordionTrigger>
          <AccordionContent>
            Of course! The navbars come with placeholder links that you can
            replace with your own menu structure.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            Do I need Tailwind CSS to use these navbars?
          </AccordionTrigger>
          <AccordionContent>
            Yes, the components are styled with Tailwind CSS, so having it in
            your project ensures everything looks perfect.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            Not finding the navbar style you want?
          </AccordionTrigger>
          <AccordionContent>
            No worries!   Just reach out to us with your ideas or requirements, and we&apos;ll work
            together to build a navbar that fits your style and functionality
            perfectly.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
