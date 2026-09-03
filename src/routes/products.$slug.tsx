import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Check, Mail } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ProductSlider } from "@/components/site/ProductSlider";
import { Button } from "@/components/ui/button";
import { getProduct, products } from "@/lib/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product not found — Pixel Edge Labs" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    const title = `${product.name} — ${product.category} | Pixel Edge Labs`;
    return {
      meta: [
        { title },
        { name: "description", content: product.short },
        { property: "og:title", content: title },
        { property: "og:description", content: product.short },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: product.short },
      ],
      links: [{ rel: "canonical", href: `https://pixeledgelabs.pro/products/${product.slug}` }],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductPage,
});

function ProductNotFound() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-semibold">Product not found</h1>
        <p className="mt-4 text-muted-foreground">That product doesn't exist or has moved.</p>
        <Link to="/products" className="mt-8 inline-block label-mono text-xs text-[var(--brand-2)]">
          ← Back to products
        </Link>
      </section>
      <Footer />
    </main>
  );
}

function ProductPage() {
  const { product } = Route.useLoaderData();
  const isLive = product.demoState === "live" && !!product.demoUrl;
  const pendingLabel = product.demoState === "launching-soon" ? "Launching soon" : "Demo coming soon";

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link to="/products" className="label-mono text-xs text-muted-foreground hover:text-foreground transition">
            ← All products
          </Link>
          <p className="mt-6 label-mono text-xs text-[var(--brand-2)]">{product.category}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">{product.name}</h1>
          <p className="mt-5 max-w-3xl font-display text-2xl leading-snug sm:text-3xl">{product.headline}</p>
          <p className="mt-5 max-w-3xl text-muted-foreground leading-relaxed">{product.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {isLive ? (
              <Button
                asChild
                size="lg"
                className="rounded-none bg-gradient-brand text-primary-foreground border-0 hover:opacity-90"
              >
                <a href={product.demoUrl} target="_blank" rel="noopener noreferrer">
                  Try Live Demo <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            ) : (
              <span className="label-mono text-xs text-muted-foreground border border-border px-5 py-3">
                {pendingLabel}
              </span>
            )}
            <Button asChild size="lg" variant="outline" className="rounded-none">
              <a href={`mailto:hello@pixeledgelabs.pro?subject=${encodeURIComponent(`${product.name} — Get started`)}`}>
                Get Started
              </a>
            </Button>
          </div>

          {/* Browser mockup */}
          <div className="mt-14 overflow-hidden rounded-lg border border-border bg-muted/20">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
              <span className="ml-3 label-mono text-[0.6rem] text-muted-foreground">
                {product.slug}.app
              </span>
            </div>
            <img
              src={product.images[0]}
              alt={`${product.name} product interface`}
              width={1280}
              height={800}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="label-mono text-xs text-[var(--brand-2)]">// Key features</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">What's inside {product.name}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((f) => (
              <div key={f.title} className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UI previews */}
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="label-mono text-xs text-[var(--brand-2)]">// UI previews</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">A look at the interface</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {product.images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${product.name} interface preview ${i + 1}`}
                loading="lazy"
                width={1280}
                height={800}
                className="w-full border border-border"
              />
            ))}
          </div>
        </div>
      </section>

      {/* See it in action */}
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 sm:p-12">
            <p className="label-mono text-xs text-[var(--brand-2)]">// See it in action</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Take {product.name} for a spin
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              {isLive
                ? "Open the live demo in a new tab and explore the real product — no signup required."
                : `The interactive demo is being prepared. Tell us what you need and we'll walk you through ${product.name} personally.`}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {isLive ? (
                <Button
                  asChild
                  size="lg"
                  className="rounded-none bg-gradient-brand text-primary-foreground border-0 hover:opacity-90"
                >
                  <a href={product.demoUrl} target="_blank" rel="noopener noreferrer">
                    Try Live Demo <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              ) : (
                <span className="label-mono text-xs text-muted-foreground border border-border px-5 py-3">
                  {pendingLabel}
                </span>
              )}
              <Button asChild size="lg" variant="outline" className="rounded-none">
                <a href={`mailto:hello@pixeledgelabs.pro?subject=${encodeURIComponent(`${product.name} — Request a walkthrough`)}`}>
                  Request a walkthrough
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Built for + benefits */}
      <section className="py-16 border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="label-mono text-xs text-[var(--brand-2)]">// Who it's built for</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">Made for teams like yours</h2>
            <ul className="mt-6 space-y-3">
              {product.builtFor.map((b) => (
                <li key={b} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-2)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-mono text-xs text-[var(--brand-2)]">// Benefits</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">Outcomes you can measure</h2>
            <div className="mt-6 space-y-5">
              {product.benefits.map((b) => (
                <div key={b.title}>
                  <h3 className="font-semibold">{b.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 text-center sm:p-14">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Ready to put {product.name} to work?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              We'll configure, brand, and deploy it around your workflow — and support it after launch.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-none bg-gradient-brand text-primary-foreground border-0 hover:opacity-90"
              >
                <a href={`mailto:hello@pixeledgelabs.pro?subject=${encodeURIComponent(`${product.name} — Enquiry`)}`}>
                  <Mail className="mr-2 h-4 w-4" /> Get Started
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none">
                <Link to="/products">Explore other products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export const productSlugs = products.map((p) => p.slug);
