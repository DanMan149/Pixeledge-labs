import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl glass-card p-10 sm:p-16 text-center">
          <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[600px] rounded-full bg-gradient-brand opacity-20 blur-3xl" />
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--brand)] font-medium">Let's build</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">
            Have an idea? <span className="text-gradient">We're listening.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Tell us about your project. We'll reply within 24 hours with next steps and a free discovery call.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="mailto:hello@pixeledgelabs.pro">
              <Button size="lg" className="bg-gradient-brand text-primary-foreground border-0 hover:opacity-90 h-12 px-6">
                <Mail className="mr-2 h-4 w-4" />
                hello@pixeledgelabs.pro
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
