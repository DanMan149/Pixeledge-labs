import { Code2, Smartphone, Megaphone, Share2, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Production-grade websites and web apps. Performant, SEO-ready, and built on a modern stack tailored to your goals.",
    bullets: ["Custom web apps & dashboards", "E-commerce platforms", "Headless CMS & APIs", "Performance & SEO"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native-feel iOS & Android apps with elegant UX, robust backends, and seamless release pipelines.",
    bullets: ["iOS & Android apps", "Cross-platform builds", "Backend & integrations", "App Store launch support"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Strategy, content, and paid acquisition that turns traffic into a measurable, repeatable growth engine.",
    bullets: ["SEO & content strategy", "Performance ads (Meta/Google)", "Email & funnels", "Analytics & reporting"],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    desc: "Always-on social presence — from creative direction and content production to community and growth.",
    bullets: ["Content calendars & creative", "Community management", "Influencer collaborations", "Monthly insights"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--brand)] font-medium">Services</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">
            Everything you need to <span className="text-gradient">build & grow</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            One studio, two disciplines: world-class engineering and data-driven marketing —
            working in lockstep on every project.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="group glass-card relative overflow-hidden rounded-2xl p-7 transition hover:-translate-y-1 hover:glow-ring"
            >
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-brand opacity-0 blur-3xl transition group-hover:opacity-30" />
              <div className="flex items-start justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
