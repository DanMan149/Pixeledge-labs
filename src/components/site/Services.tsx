import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { services } from "@/lib/services";
import { useCurrency, formatPrice } from "@/hooks/use-currency";

export function Services() {
  const { currency } = useCurrency();

  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--brand)] font-medium">Services</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">
            Everything you need to <span className="text-gradient">build & grow</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Design, engineering, and automation — delivered end to end, with transparent starting prices.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.slug}
              className="group glass-card flex flex-col rounded-2xl p-7 transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <p className="mt-5 label-mono text-xs text-muted-foreground">Starting from</p>
              <p className="mt-1 font-display text-2xl font-semibold">
                {formatPrice(currency, s.usd, s.pkr)}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 self-start border-b border-border pb-1 text-sm text-muted-foreground transition hover:text-foreground hover:border-foreground"
              >
                Get a quote
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/pricing"
            className="label-mono text-xs text-muted-foreground hover:text-foreground transition"
          >
            See full pricing & what's included →
          </Link>
        </div>
      </div>
    </section>
  );
}
