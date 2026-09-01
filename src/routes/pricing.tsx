import { createFileRoute } from "@tanstack/react-router";
import { Check, Mail } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";
import { useCurrency, formatPrice } from "@/hooks/use-currency";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Pixel Edge Labs" },
      {
        name: "description",
        content:
          "Transparent starting prices for web development, e-commerce, Shopify, SaaS/MVP, UI/UX, API integrations, AI automation, maintenance, and redesign projects.",
      },
      { property: "og:title", content: "Pricing — Pixel Edge Labs" },
      {
        property: "og:description",
        content: "Starting prices and what's included for every Pixel Edge Labs service.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pixeledgelabs.pro/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  const { currency, setCurrency } = useCurrency();

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--brand)] font-medium">Pricing</p>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">
                Simple, <span className="text-gradient">transparent</span> starting prices.
              </h1>
              <p className="mt-4 text-muted-foreground">
                Every engagement starts here. Scope, timeline, and complexity shape the final quote.
              </p>
            </div>

            <div className="inline-flex items-center rounded-md border border-border p-1 label-mono text-xs">
              {(["USD", "PKR"] as const).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCurrency(c)}
                  className={`px-3 py-1.5 transition ${
                    currency === c
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.slug} className="glass-card flex flex-col rounded-2xl p-7">
                <h2 className="text-xl font-semibold">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <p className="mt-5 label-mono text-xs text-muted-foreground">Starting from</p>
                <p className="mt-1 font-display text-3xl font-semibold">
                  {formatPrice(currency, s.usd, s.pkr)}
                </p>

                <p className="mt-6 label-mono text-xs text-muted-foreground">Includes</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {s.includes.map((f) => (
                    <li key={f} className="flex gap-2">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--brand)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-10 text-sm text-muted-foreground max-w-3xl">
            Starting price includes the features listed above. Projects requiring additional
            functionality, pages, integrations, or custom development will be quoted based on scope.
          </p>

          <div className="mt-16 glass-card rounded-3xl p-10 sm:p-14 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">
              Need something <span className="text-gradient">more complex?</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Every project is unique. Contact us with your requirements and we'll provide a tailored
              proposal.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="mailto:d.hasan@pixeledgelabs.pro">
                <Button size="lg" className="bg-gradient-brand text-primary-foreground border-0 hover:opacity-90 h-12 px-6">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact us
                </Button>
              </a>
              <a href="mailto:d.hasan@pixeledgelabs.pro?subject=Get%20a%20quote">
                <span className="inline-flex items-center gap-1.5 border-b border-border pb-1 text-sm text-muted-foreground transition hover:text-foreground hover:border-foreground">
                  Get a quote →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
