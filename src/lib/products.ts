import fitnesspulse1 from "@/assets/products/fitnesspulse-1.jpg";
import fitnesspulse2 from "@/assets/products/fitnesspulse-2.jpg";
import cratewise1 from "@/assets/products/cratewise-1.jpg";
import cratewise2 from "@/assets/products/cratewise-2.jpg";
import rosterix1 from "@/assets/products/rosterix-1.png";
import rosterix2 from "@/assets/products/rosterix-2.png";
import rosterix3 from "@/assets/products/rosterix-3.png";
import rosterix4 from "@/assets/products/rosterix-4.png";
import ticklio1 from "@/assets/products/ticklio-1.png";
import ticklio2 from "@/assets/products/ticklio-2.png";
import ticklio3 from "@/assets/products/ticklio-3.png";
import restaurant1 from "@/assets/products/restaurant-erp-1.png";

export type DemoState = "live" | "coming-soon" | "launching-soon";

export type Product = {
  slug: string;
  name: string;
  category: string;
  headline: string;
  short: string;
  description: string;
  images: string[];
  demoUrl?: string;
  demoState: DemoState;
  features: { title: string; desc: string }[];
  builtFor: string[];
  benefits: { title: string; desc: string }[];
};

export const products: Product[] = [
  {
    slug: "fitness-pulse",
    name: "Fitness Pulse",
    category: "Gym Management System",
    headline: "Run your gym, not your spreadsheets.",
    short:
      "An all-in-one gym management platform for memberships, check-ins, class schedules, trainers, and recurring billing — in one clean dashboard.",
    description:
      "Fitness Pulse gives gyms and fitness studios a single place to manage every member, plan, and payment. Front-desk staff can check members in seconds, trainers can manage their class rosters, and owners get a live view of attendance, renewals, and revenue. Built to replace the tangle of registers, WhatsApp reminders, and spreadsheets that most gyms still run on.",
    images: [fitnesspulse1, fitnesspulse2],
    demoUrl: "https://fitnesspulseweb.netlify.app/",
    demoState: "live",
    features: [
      { title: "Member management", desc: "Complete member profiles with plans, documents, medical notes, and full history." },
      { title: "Check-in & attendance", desc: "Fast front-desk check-in with attendance tracking and no-show visibility." },
      { title: "Membership & billing", desc: "Recurring plans, freezes, upgrades, invoices, and automated renewal reminders." },
      { title: "Class scheduling", desc: "Timetables, capacity limits, trainer assignment, and member bookings." },
      { title: "Trainer & staff tools", desc: "Assign trainers, track sessions, and manage staff access by role." },
      { title: "Reports & insights", desc: "Revenue, retention, peak-hour and attendance dashboards updated in real time." },
    ],
    builtFor: ["Independent gyms", "Fitness studios & CrossFit boxes", "Multi-branch fitness chains", "Personal training businesses"],
    benefits: [
      { title: "Fewer missed renewals", desc: "Automated reminders and renewal tracking keep recurring revenue predictable." },
      { title: "Less admin time", desc: "Check-ins, invoices, and schedules that used to take hours now take minutes." },
      { title: "Clear visibility", desc: "Know exactly how many members are active, at risk, or overdue at any moment." },
    ],
  },
  {
    slug: "cratewise",
    name: "CrateWise",
    category: "Inventory Management System",
    headline: "Know what you have, where it is, and when to reorder.",
    short:
      "Real-time stock control across warehouses and outlets, with barcode workflows, low-stock alerts, and purchase orders built in.",
    description:
      "CrateWise keeps inventory accurate without the manual counting. Track every SKU across multiple locations, move stock between warehouses, receive purchase orders against suppliers, and get alerted before anything runs out. Barcode-first workflows mean receiving, picking, and stock takes happen at the shelf instead of at a desk.",
    images: [cratewise1, cratewise2],
    demoUrl: "https://pel-ims-demo.netlify.app/",
    demoState: "live",
    features: [
      { title: "Multi-location stock", desc: "Track quantities per warehouse, outlet, or bin with instant transfers." },
      { title: "Barcode workflows", desc: "Scan to receive, pick, adjust, and run stock takes from any device." },
      { title: "Purchase orders", desc: "Raise POs, track partial deliveries, and reconcile supplier invoices." },
      { title: "Low-stock alerts", desc: "Reorder points and automatic alerts so nothing goes out of stock silently." },
      { title: "Batch & expiry tracking", desc: "Manage lots, serial numbers, and expiry dates for regulated goods." },
      { title: "Valuation reports", desc: "Stock value, movement history, and shrinkage reporting on demand." },
    ],
    builtFor: ["Retail & e-commerce operators", "Distributors and wholesalers", "Manufacturing & assembly units", "Multi-branch stores"],
    benefits: [
      { title: "No more stockouts", desc: "Reorder signals fire before demand outruns supply." },
      { title: "Accurate books", desc: "Live valuation and movement history that matches what's on the shelf." },
      { title: "Faster operations", desc: "Scan-driven receiving and picking cuts handling time dramatically." },
    ],
  },
  {
    slug: "rosterix",
    name: "Rosterix",
    category: "Human Resources Management System",
    headline: "Every employee, every policy, one system of record.",
    short:
      "HR software covering onboarding, attendance, leave, payroll inputs, and performance — with self-service for the whole team.",
    description:
      "Rosterix centralises the people side of your business. Keep a complete employee record from offer letter to exit, run leave and attendance by policy instead of by memory, and hand employees a self-service portal so HR stops being a ticket queue. Payroll inputs are generated automatically from approved attendance and leave.",
    images: [rosterix1, rosterix2],
    demoState: "coming-soon",
    features: [
      { title: "Employee records", desc: "Contracts, documents, job history, and org structure in one profile." },
      { title: "Attendance & shifts", desc: "Shift rosters, biometric/clock-in integration, overtime, and late tracking." },
      { title: "Leave management", desc: "Policy-driven balances, approval chains, and a shared team calendar." },
      { title: "Payroll inputs", desc: "Auto-computed earnings, deductions, and payroll-ready exports each cycle." },
      { title: "Onboarding & offboarding", desc: "Checklists, asset handover, and access tracking for every joiner and leaver." },
      { title: "Performance reviews", desc: "Goals, review cycles, and feedback captured against each employee." },
    ],
    builtFor: ["Growing SMEs", "Agencies & consultancies", "Multi-site operations teams", "HR teams outgrowing spreadsheets"],
    benefits: [
      { title: "Compliant by default", desc: "Policies enforced in software instead of relying on manual checks." },
      { title: "Self-service HR", desc: "Employees request leave and pull documents without emailing HR." },
      { title: "Payroll without panic", desc: "Every cycle starts from clean, approved attendance data." },
    ],
  },
  {
    slug: "ticklio",
    name: "Ticklio",
    category: "Internal Workorder Ticket Portal",
    headline: "Turn internal requests into tracked, accountable work.",
    short:
      "An internal ticketing and work-order portal where requests get logged, routed, prioritised, and resolved with a clear audit trail.",
    description:
      "Ticklio replaces the scattered emails, calls, and chat messages that internal teams run on. Staff raise a request through a simple portal, it's routed to the right team with the right priority, and everyone can see status, ownership, and history. Maintenance, IT, facilities, and admin teams get SLA timers and reporting so nothing gets quietly dropped.",
    images: [ticklio1, ticklio2],
    demoState: "coming-soon",
    features: [
      { title: "Request portal", desc: "Simple intake forms per category so requests arrive complete the first time." },
      { title: "Smart routing", desc: "Auto-assign tickets by department, category, location, or workload." },
      { title: "SLA & priority", desc: "Response and resolution timers with escalation when targets slip." },
      { title: "Work order tracking", desc: "Status timeline, attachments, comments, and full activity history." },
      { title: "Asset linking", desc: "Attach tickets to equipment, rooms, or assets to see recurring problems." },
      { title: "Reporting", desc: "Volume, resolution time, and backlog dashboards per team." },
    ],
    builtFor: ["IT & internal support teams", "Facilities & maintenance", "Manufacturing plants", "Multi-branch organisations"],
    benefits: [
      { title: "Nothing gets lost", desc: "Every request has an owner, a status, and a deadline." },
      { title: "Faster resolution", desc: "Routing and prioritisation put the right work in front of the right team." },
      { title: "Real accountability", desc: "Reporting shows where delays actually happen." },
    ],
  },
  {
    slug: "restaurant-erp",
    name: "Restaurant ERP",
    category: "Restaurant Operations Platform",
    headline: "From the first order to the last cost line — one platform.",
    short:
      "A complete restaurant operations system covering orders, kitchen display, inventory, recipe costing, staff, and multi-outlet reporting.",
    description:
      "Restaurant ERP connects the floor, the kitchen, and the back office. Orders flow from POS to the kitchen display without paper, ingredient stock depletes automatically against recipes, and owners see true food cost and margin per dish. Built for operators running one busy location or several outlets that need to be compared side by side.",
    images: [restaurant1, restaurant2],
    demoState: "launching-soon",
    features: [
      { title: "Orders & floor plan", desc: "Dine-in, takeaway, and delivery orders mapped to tables and sections." },
      { title: "Kitchen display", desc: "Live ticket queue with prep timers and course-by-course firing." },
      { title: "Recipe costing", desc: "Cost every dish from ingredient prices and track margin as costs change." },
      { title: "Inventory depletion", desc: "Stock reduces automatically as dishes are sold, with wastage logging." },
      { title: "Staff & shifts", desc: "Rosters, roles, and performance per shift across outlets." },
      { title: "Multi-outlet reporting", desc: "Compare sales, costs, and margins across every branch." },
    ],
    builtFor: ["Single-location restaurants", "Multi-outlet chains", "Cafés & cloud kitchens", "Catering operations"],
    benefits: [
      { title: "Protect your margins", desc: "Live food cost per dish instead of a monthly surprise." },
      { title: "Smoother service", desc: "Kitchen and floor stay in sync during peak hours." },
      { title: "One source of truth", desc: "Sales, stock, and staffing reported together, per outlet." },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const demoLabel: Record<DemoState, string> = {
  live: "View Demo",
  "coming-soon": "Demo coming soon",
  "launching-soon": "Launching soon",
};
