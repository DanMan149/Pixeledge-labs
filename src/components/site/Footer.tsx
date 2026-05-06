import logo from "@/assets/pel-logo.png";
import { Linkedin, Instagram, AtSign, Twitter } from "lucide-react";

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/pixel-edge-labs/", icon: Linkedin },
  { name: "Instagram", href: "https://www.instagram.com/pixeledgelabs/", icon: Instagram },
  { name: "Threads", href: "https://www.threads.com/@pixeledgelabs/", icon: AtSign },
  { name: "X", href: "https://x.com/pixeledgelabs", icon: Twitter },
];

export function Footer() {
  return (
    <footer className="border-t border-border mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-display font-semibold">
          <img src={logo} alt="Pixel Edge Labs logo" className="h-8 w-8 rounded-md" />
          Pixel Edge <span className="text-gradient">Labs</span>
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pixel Edge Labs
        </div>
        <div className="flex items-center gap-1">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
