import { ArrowRight, Briefcase, MapPin, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobs = [
  {
    title: "Business Development / Lead Generation Partner",
    type: "Commission / Revenue Share",
    location: "Remote · Worldwide",
    comp: "15–25% per closed project",
    summary:
      "Find and qualify software development opportunities and move them toward a deal. Our team joins technical and discovery calls and handles estimation, proposals, and architecture discussions.",
    responsibilities: [
      "Source clients via LinkedIn, Reddit, Upwork, cold outreach, and partnerships",
      "Qualify opportunities and manage the pipeline to close",
      "Coordinate with our team on scoping, proposals, and estimates",
      "Build long-term agency partnerships and repeat business",
    ],
    requirements: [
      "Proven B2B lead generation experience",
      "Background selling software / web development services",
      "Strong written and verbal communication",
    ],
  },
  {
    title: "Experienced Upwork Bidder",
    type: "Commission Based",
    location: "Remote · Worldwide",
    comp: "Negotiable % per acquired project",
    summary:
      "Consistently find and win relevant development projects on Upwork with sharp, personalized proposals — quality over volume. Our developers handle technical discussions, estimates, and client calls.",
    responsibilities: [
      "Find quality jobs and filter out unrealistic projects",
      "Write personalized proposals, never copy-paste bids",
      "Position our portfolio to fit each project brief",
      "Follow up with prospects and convert replies into meetings",
      "Track proposals, responses, interviews, and conversions",
    ],
    requirements: [
      "Previous Upwork bidding experience strongly preferred",
      "Understands full-stack, React/Next.js, backend/API, SaaS bids",
      "Comfortable bidding on e-commerce, mobile, and custom software",
    ],
  },
];

export function Careers() {
  return (
    <section id="careers" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--brand)] font-medium">Careers</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">
            Work <span className="text-gradient">with us</span>.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We're a web, mobile, and digital solutions studio looking for partners who can bring in great projects.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {jobs.map((job) => (
            <article
              key={job.title}
              className="glass-card rounded-3xl p-8 flex flex-col text-left"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Briefcase className="h-3.5 w-3.5 text-[var(--brand)]" />
                  {job.type}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[var(--brand)]" />
                  {job.location}
                </span>
              </div>

              <h3 className="mt-4 font-display text-2xl sm:text-3xl font-semibold leading-tight">
                {job.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{job.summary}</p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-foreground/70 font-medium">
                    What you'll do
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--brand)]" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-foreground/70 font-medium">
                    What we're looking for
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {job.requirements.map((r) => (
                      <li key={r} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--brand)]" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6">
                <span className="inline-flex items-center gap-2 text-sm text-foreground/80">
                  <Percent className="h-4 w-4 text-[var(--brand)]" />
                  {job.comp}
                </span>
                <a
                  href={`mailto:d.hasan@pixeledgelabs.pro?subject=${encodeURIComponent(`Application — ${job.title}`)}`}
                >
                  <Button className="bg-gradient-brand text-primary-foreground border-0 hover:opacity-90">
                    Apply now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
