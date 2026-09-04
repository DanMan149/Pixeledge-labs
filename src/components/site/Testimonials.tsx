import { useEffect, useState } from "react";

const items = [
  {
    quote:
      "Pixel Edge Labs rebuilt our storefront from the ground up — load times dropped, conversions jumped. Easily the smoothest dev partnership we've had.",
    name: "Operations Lead",
    company: "USAShoppersHub",
  },
  {
    quote:
      "They handle both our website and social media — the consistency between brand, content, and product is unreal. Truly one team, end-to-end.",
    name: "Marketing Director",
    company: "TIF Pakistan",
  },
  {
    quote:
      "Sharp engineering, clean code, on-time delivery. Pixel Edge Labs felt like an in-house team from week one.",
    name: "Founder",
    company: "SYKD Group",
  },
  {
    quote:
      "From the first call to launch day, the team was strategic, transparent, and fast. Our store finally looks and performs like a real brand.",
    name: "Co-founder",
    company: "Pikachu Bazaar",
  },
  {
    quote:
      "They delivered our 3D print storefront ahead of schedule with a checkout flow that just works. Sales picked up the same week we launched.",
    name: "Founder",
    company: "Nexus 3D Prints",
  },
  {
    quote:
      "Pixel Edge Labs treats every detail like it matters. Communication was flawless and the final build exceeded what we scoped.",
    name: "Project Lead",
    company: "Briqon",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % items.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--brand)] font-medium">Testimonials</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">
          What partners <span className="text-gradient">say</span>.
        </h2>

        <div className="relative mt-12 glass-card rounded-3xl p-10 sm:p-14 min-h-[260px] flex flex-col items-center justify-center">
          {items.map((t, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 flex flex-col items-center justify-center px-8 sm:px-14 transition-all duration-700 ${
                idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
              }`}
            >
              <p className="font-display text-xl sm:text-2xl leading-relaxed text-foreground/90 max-w-2xl">
                "{t.quote}"
              </p>
              <div className="mt-6 text-sm text-muted-foreground">
                <span className="text-foreground font-medium">{t.name}</span> · {t.company}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-8 bg-gradient-brand" : "w-2 bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
