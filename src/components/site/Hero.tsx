import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden min-h-[90vh] flex items-center">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="label-mono text-muted-foreground animate-fade-in">// Creative Technology Studio</p>
        <h1 className="mt-6 font-display font-extrabold uppercase leading-[0.88] tracking-[-0.05em] text-[18vw] sm:text-[14vw] lg:text-[11rem] animate-fade-up">
          PIXEL<br />EDGE
        </h1>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
          <p className="max-w-md text-base sm:text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "120ms" }}>
            We architect digital experiences at the intersection of precision engineering and creative rebellion.
          </p>
          <div className="flex md:justify-end animate-fade-up" style={{ animationDelay: "240ms" }}>
            <a href="#contact" className="group inline-flex items-center gap-3">
              <Button size="lg" className="rounded-none bg-[var(--brand-2)] text-[var(--accent-foreground)] hover:opacity-90 h-12 px-6 label-mono">
                Start a project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
        <div className="mt-16 flex items-center justify-between label-mono text-muted-foreground border-t border-border pt-6">
          <span>↓ Scroll</span>
          <span className="hidden sm:inline">WEB — MOBILE — MARKETING — SOCIAL</span>
        </div>
      </div>
    </section>
  );
}
