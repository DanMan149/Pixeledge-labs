const clients = [
  { name: "USAShoppersHub", work: "Ecommerce Store" },
  { name: "TIF Pakistan", work: "Web Dev & Social Media" },
  { name: "SYKD Group", work: "Web Development" },
  { name: "Pikachu Bazaar", work: "Ecommerce Store" },
  { name: "Briqon.com", work: "Web Development" },
];

function Logo({ name, work }: { name: string; work: string }) {
  const initials = name
    .replace(/\.com$/, "")
    .split(/[\s]+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card/40 backdrop-blur px-6 py-5 min-w-[300px] transition hover:border-[var(--brand)]/50 hover:bg-card/70">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand font-display font-semibold text-primary-foreground">
        {initials}
      </div>
      <div>
        <div className="font-semibold text-foreground">{name}</div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider">{work}</div>
      </div>
    </div>
  );
}

export function Clients() {
  const loop = [...clients, ...clients];
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--brand)] font-medium">Selected Work</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">
            Trusted by ambitious <span className="text-gradient">brands</span>.
          </h2>
        </div>
      </div>

      <div className="mt-14 relative overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-max gap-5 animate-marquee hover:[animation-play-state:paused]">
          {loop.map((c, i) => (
            <Logo key={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
