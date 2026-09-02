import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1600, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return val;
}

const items = [
  { value: 90, suffix: "+", label: "Projects delivered" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 3, suffix: "+", label: "Years in the field" },
];

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="glass-card grid grid-cols-1 sm:grid-cols-3 rounded-3xl overflow-hidden">
          {items.map((it, i) => (
            <StatItem key={i} {...it} start={visible} divider={i < items.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, suffix, label, start, divider }: { value: number; suffix: string; label: string; start: boolean; divider: boolean }) {
  const v = useCountUp(value, 1600, start);
  return (
    <div className={`p-8 sm:p-10 text-center ${divider ? "sm:border-r border-border" : ""}`}>
      <div className="font-display text-5xl sm:text-6xl font-semibold text-gradient">
        {v}{suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}
