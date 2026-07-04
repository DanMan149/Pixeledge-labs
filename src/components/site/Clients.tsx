import usashoppershub from "@/assets/clients/usashoppershub.png";
import tif from "@/assets/clients/tif.png";
import sykd from "@/assets/clients/sykd.png";
import pikachubazaar from "@/assets/clients/pikachubazaar.png";
import briqon from "@/assets/clients/briqon.png";
import nexusprints from "@/assets/clients/nexusprints.png";
import fitnesspulse from "@/assets/clients/fitnesspulse.png";
import todaysagift from "@/assets/clients/todaysagift.png";
import alnoor from "@/assets/clients/alnoor.png";
import duneandpalm from "@/assets/clients/duneandpalm.png";
import falconfreight from "@/assets/clients/falconfreight.png";
import majliscoffee from "@/assets/clients/majliscoffee.png";
import miragerealty from "@/assets/clients/miragerealty.png";
import oasisfit from "@/assets/clients/oasisfit.png";

const clients = [
  { name: "USAShoppersHub", work: "Ecommerce Store", logo: usashoppershub },
  { name: "TIF Pakistan", work: "Web Dev & Social Media", logo: tif },
  { name: "SYKD Group", work: "Web Development", logo: sykd },
  { name: "Pikachu Bazaar", work: "Ecommerce Store", logo: pikachubazaar },
  { name: "Briqon", work: "Web Development", logo: briqon },
  { name: "Nexus 3D Prints", work: "E-Commerce Store", logo: nexusprints },
  { name: "Fitness Pulse", work: "Gym Management Software", logo: fitnesspulse },
  { name: "Today's A Gift", work: "E-Commerce & SEO", logo: todaysagift },
  { name: "Al Noor Interiors", work: "Web Development & Branding", logo: alnoor },
  { name: "Dune & Palm", work: "Hospitality Website", logo: duneandpalm },
  { name: "Falcon Freight", work: "Logistics Platform", logo: falconfreight },
  { name: "Majlis Coffee Co.", work: "E-Commerce & Social Media", logo: majliscoffee },
  { name: "Mirage Realty", work: "Real Estate Web App", logo: miragerealty },
  { name: "Oasis Fit", work: "Mobile App & Marketing", logo: oasisfit },
];

function Logo({ name, work, logo }: { name: string; work: string; logo: string }) {
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card/40 backdrop-blur px-6 py-5 min-w-[300px] transition hover:border-[var(--brand)]/50 hover:bg-card/70">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/90 overflow-hidden">
        <img src={logo} alt={`${name} logo`} className="h-full w-full object-contain" loading="lazy" />
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
