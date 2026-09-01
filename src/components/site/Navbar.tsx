import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import logo from "@/assets/pel-logo.png";

export function Navbar() {
  const { theme, toggle } = useTheme();
  return (
    <header className="relative z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-5">
        <nav className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-display font-bold uppercase tracking-tight">
            <img src={logo} alt="Pixel Edge Labs logo" className="h-8 w-8 rounded-md" />
            <span className="text-sm sm:text-base">PIXEL EDGE <span className="text-muted-foreground font-normal">LABS</span></span>
          </a>
          <div className="hidden md:flex items-center gap-8 label-mono text-muted-foreground">
            <a href="/#services" className="hover:text-foreground transition">Services</a>
            <Link to="/pricing" className="hover:text-foreground transition">Pricing</Link>
            <a href="/#work" className="hover:text-foreground transition">Portfolio</a>
            <a href="/#faq" className="hover:text-foreground transition">FAQ</a>
            <a href="/#contact" className="hover:text-foreground transition">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme" className="rounded-none">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
