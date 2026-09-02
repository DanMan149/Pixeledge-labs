export type ServiceItem = {
  slug: string;
  title: string;
  desc: string;
  usd: number;
  pkr: number;
  includes: string[];
  /** Shown only on the pricing page, not in the homepage services section. */
  pricingOnly?: boolean;
  /** Recurring monthly pricing — price is displayed with a /month suffix. */
  monthly?: boolean;
};

export const services: ServiceItem[] = [
  {
    slug: "web-development",
    title: "Web Development",
    desc: "Build a professional digital presence with fast, responsive websites tailored to your business.",
    usd: 600,
    pkr: 80000,
    includes: [
      "Up to 5 pages",
      "Responsive design",
      "Contact forms",
      "Basic SEO setup",
      "Analytics setup",
      "Deployment",
    ],
  },
  {
    slug: "e-commerce",
    title: "E-commerce",
    desc: "Launch a powerful online store designed to convert visitors into customers.",
    usd: 1200,
    pkr: 200000,
    includes: [
      "Up to 50 products",
      "Responsive storefront",
      "Shopping cart & checkout",
      "Payment gateway integration",
      "Order management",
      "Basic SEO setup",
    ],
  },
  {
    slug: "shopify",
    title: "Shopify",
    desc: "Custom Shopify solutions built around your brand, products, and growth goals.",
    usd: 700,
    pkr: 110000,
    includes: [
      "Shopify store setup",
      "Theme customization",
      "Up to 20 products",
      "Payment & shipping configuration",
      "Essential apps/integrations",
      "Mobile optimization",
    ],
  },
  {
    slug: "custom-web-applications",
    title: "Custom Web Applications",
    desc: "Transform your business processes into powerful, purpose-built web applications.",
    usd: 2500,
    pkr: 450000,
    includes: [
      "Custom UI/UX",
      "Frontend & backend development",
      "Database integration",
      "User authentication",
      "Basic admin dashboard",
      "Deployment",
    ],
  },
  {
    slug: "saas-mvp-development",
    title: "SaaS & MVP Development",
    desc: "Turn your product idea into a market-ready MVP built for validation and growth.",
    usd: 3000,
    pkr: 600000,
    includes: [
      "Product architecture",
      "UI/UX design",
      "Core MVP functionality",
      "User authentication",
      "Database & API development",
      "Deployment",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    desc: "Create intuitive, engaging experiences that make your products easier to use.",
    usd: 300,
    pkr: 60000,
    includes: [
      "User flow planning",
      "Wireframes",
      "High-fidelity UI designs",
      "Responsive layouts",
      "Design system",
      "Developer-ready files",
    ],
  },
  {
    slug: "api-integrations",
    title: "API & Integrations",
    desc: "Connect your systems and automate data flow across the tools your business relies on.",
    usd: 300,
    pkr: 60000,
    includes: [
      "API integration",
      "Third-party service connection",
      "Authentication setup",
      "Data synchronization",
      "Testing & troubleshooting",
    ],
    pricingOnly: true,
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    desc: "Use AI and automation to streamline workflows, reduce manual work, and scale efficiently.",
    usd: 800,
    pkr: 150000,
    includes: [
      "Workflow analysis",
      "AI/API integration",
      "Process automation",
      "Custom automation logic",
      "Testing & deployment",
    ],
    pricingOnly: true,
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    desc: "Keep your website and applications secure, updated, and running at their best.",
    usd: 100,
    pkr: 20000,
    includes: [
      "Website updates",
      "Bug fixes",
      "Security updates",
      "Backups",
      "Performance monitoring",
      "Technical support",
    ],
    pricingOnly: true,
    monthly: true,
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    desc: "Grow your online presence with targeted digital marketing strategies built to reach the right audience, generate leads, and drive measurable results.",
    usd: 250,
    pkr: 40000,
    includes: [
      "Marketing strategy",
      "SEO optimization",
      "Paid ads management",
      "Content planning",
      "Lead generation campaigns",
      "Monthly performance reports",
    ],
    pricingOnly: true,
    monthly: true,
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    desc: "Build a consistent, engaging social presence with content, community management, and growth across your channels.",
    usd: 200,
    pkr: 25000,
    includes: [
      "Content calendar",
      "Post design & copywriting",
      "Scheduling & publishing",
      "Community management",
      "Hashtag & trend research",
      "Monthly analytics reports",
    ],
    pricingOnly: true,
    monthly: true,
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    desc: "Give your existing website a modern look, better performance, and an improved user experience.",
    usd: 600,
    pkr: 80000,
    includes: [
      "UI/UX redesign",
      "Responsive layouts",
      "Improved navigation",
      "Performance optimization",
      "Existing content migration",
      "Deployment",
    ],
    pricingOnly: true,
  },
];

/** Services shown on the homepage services section (pricing-only items excluded). */
export const homeServices: ServiceItem[] = services.filter((s) => !s.pricingOnly);
