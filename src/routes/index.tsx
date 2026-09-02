import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { Clients } from "@/components/site/Clients";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pixel Edge Labs — Web, Mobile & Digital Marketing Studio" },
      {
        name: "description",
        content:
          "Pixel Edge Labs builds high-performance websites, mobile apps, and growth-driven digital marketing & social media campaigns for modern brands.",
      },
      { name: "keywords", content: "web development, mobile apps, digital marketing, SEO, social media management, e-commerce, Pixel Edge Labs" },
      { property: "og:title", content: "Pixel Edge Labs — Web, Mobile & Digital Marketing Studio" },
      {
        property: "og:description",
        content: "Engineering and marketing in lockstep. We design, build, and grow modern brands across web, mobile, and social.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixeledgelabs.pro/" },
      { property: "og:image", content: "https://pixeledgelabs.pro/pel-logo.png" },
      { property: "og:site_name", content: "Pixel Edge Labs" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@pixeledgelabs" },
      { name: "twitter:creator", content: "@pixeledgelabs" },
      { name: "twitter:title", content: "Pixel Edge Labs — Web, Mobile & Digital Marketing Studio" },
      {
        name: "twitter:description",
        content: "Engineering and marketing in lockstep. We design, build, and grow modern brands across web, mobile, and social.",
      },
      { name: "twitter:image", content: "https://pixeledgelabs.pro/pel-logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://pixeledgelabs.pro/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://pixeledgelabs.pro/#organization",
          name: "Pixel Edge Labs",
          alternateName: "PEL",
          url: "https://pixeledgelabs.pro/",
          logo: {
            "@type": "ImageObject",
            url: "https://pixeledgelabs.pro/pel-logo.png",
            width: 512,
            height: 512,
          },
          description:
            "Creative technology studio building high-performance websites, mobile apps, and growth-driven digital marketing & social media campaigns.",
          contactPoint: {
            "@type": "ContactPoint",
            email: "hello@pixeledgelabs.pro",
            contactType: "customer support",
            availableLanguage: ["English"],
          },
          areaServed: { "@type": "Place", name: "Worldwide" },
          knowsAbout: [
            "Web Development",
            "Mobile App Development",
            "Digital Marketing",
            "Social Media Management",
            "SEO",
            "E-commerce",
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Services",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development", description: "Production-grade websites and web apps. Performant, SEO-ready, and built on a modern stack." } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development", description: "Native-feel iOS & Android apps with elegant UX, robust backends, and seamless release pipelines." } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing", description: "SEO, content, and paid acquisition that turns traffic into a measurable, repeatable growth engine." } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Management", description: "Always-on social presence — creative, content production, community, and growth." } },
            ],
          },
          sameAs: [
            "https://www.linkedin.com/company/pixel-edge-labs/",
            "https://www.instagram.com/pixeledgelabs/",
            "https://www.threads.com/@pixeledgelabs/",
            "https://x.com/pixeledgelabs",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://pixeledgelabs.pro/#website",
          url: "https://pixeledgelabs.pro/",
          name: "Pixel Edge Labs",
          publisher: { "@id": "https://pixeledgelabs.pro/#organization" },
          inLanguage: "en",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Clients />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
