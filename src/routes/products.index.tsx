import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ProductSlider } from "@/components/site/ProductSlider";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Software Built by Pixel Edge Labs" },
      {
        name: "description",
        content:
          "Ready-to-deploy software from Pixel Edge Labs: Fitness Pulse gym management, CrateWise inventory, Rosterix HRMS, Ticklio work-order portal, and Restaurant ERP.",
      },
      { property: "og:title", content: "Products — Software Built by Pixel Edge Labs" },
      {
        property: "og:description",
        content: "Software we've built. Ready when you are — gym, inventory, HR, ticketing, and restaurant platforms.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Products — Software Built by Pixel Edge Labs" },
      {
        name: "twitter:description",
        content: "Software we've built. Ready when you are.",
      },
    ],
    links: [{ rel: "canonical", href: "https://pixeledgelabs.pro/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="label-mono text-muted-foreground">// Products</p>
          <h1 className="mt-5 font-display font-extrabold uppercase leading-[0.9] tracking-[-0.04em] text-[12vw] sm:text-6xl lg:text-7xl">
            Software we've built.
            <br />
            <span className="text-gradient">Ready when you are.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            Products designed, engineered, and deployed by Pixel Edge Labs — built from real operational
            problems and ready to be tailored to your business.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((p) => (
              <article key={p.slug} className="glass-card flex flex-col overflow-hidden rounded-2xl">
                <ProductSlider images={p.images} alt={p.name} />
                <div className="flex flex-1 flex-col p-7">
                  <p className="label-mono text-xs text-[var(--brand-2)]">{p.category}</p>
                  <h2 className="mt-2 font-display text-2xl font-semibold">{p.name}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.short}</p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Button asChild variant="outline" className="rounded-none">
                      <Link to="/products/$slug" params={{ slug: p.slug }}>
                        Learn More
                      </Link>
                    </Button>

                    {p.demoState === "live" && p.demoUrl ? (
                      <Button
                        asChild
                        className="rounded-none bg-gradient-brand text-primary-foreground border-0 hover:opacity-90"
                      >
                        <a href={p.demoUrl} target="_blank" rel="noopener noreferrer">
                          View Demo <ArrowUpRight className="ml-1 h-4 w-4" />
                        </a>
                      </Button>
                    ) : (
                      <span className="label-mono text-xs text-muted-foreground border border-border px-4 py-2.5">
                        {p.demoState === "launching-soon" ? "Launching soon" : "Demo coming soon"}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
