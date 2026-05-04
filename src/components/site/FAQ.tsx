import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is a Creative Technology Studio?",
    a: "We are a hybrid firm that combines high-end software engineering with strategic digital marketing. We build the products and then create the systems to help them grow.",
  },
  {
    q: "Do I have to hire you for both development and marketing?",
    a: "Not at all. While we offer a full-circle approach, we frequently partner with clients for standalone projects, whether that's building a custom app or managing a social media rollout.",
  },
  {
    q: "What is the benefit of having dev and marketing under one roof?",
    a: "Alignment. Our marketers understand the technical nuances of your product, and our developers build with your growth goals in mind, ensuring a seamless experience for your users.",
  },
  {
    q: "What types of projects do you handle?",
    a: "We specialize in custom web and mobile applications, complex software solutions, and data-driven social media management for brands looking to scale their digital presence.",
  },
  {
    q: "How do we get started and what is the process?",
    a: "We begin with a discovery session to define your goals. From there, we move into rapid prototyping for development projects or a strategic \"roadmap\" phase for marketing and social media campaigns.",
  },
  {
    q: "Who owns the code and the content once the project is done?",
    a: "You do. Once the project is finalized and paid for, you have 100% ownership of the custom code, design assets, and marketing content we've created for you. No strings attached.",
  },
  {
    q: "How do you handle pricing?",
    a: "Every project at Pixel Edge Labs is unique. We offer project-based pricing for development (fixed-scope) and monthly retainer models for social media management and ongoing marketing support.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--brand)] font-medium">FAQ</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">
            Questions, <span className="text-gradient">answered</span>.
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass-card rounded-2xl px-6 border-0"
            >
              <AccordionTrigger className="text-left font-display text-lg font-medium hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
