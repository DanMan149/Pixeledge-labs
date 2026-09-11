import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import logo from "@/assets/pel-logo.png";

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="relative z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-5">
        <nav className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 md:flex md:justify-between" aria-label="Main navigation">
          <Link to="/" className="flex items-center" aria-label="Pixel Edge Labs — home">
            <img src={logo} alt="Pixel Edge Labs logo" className="h-16 w-16 rounded-md sm:h-20 sm:w-20" />
          </Link>
          <div className="hidden md:flex items-center gap-8 label-mono text-muted-foreground">
            <a href="/#services" className="hover:text-foreground transition">Services</a>
            <Link to="/products" className="hover:text-foreground transition">Products</Link>
            <Link to="/pricing" className="hover:text-foreground transition">Pricing</Link>
            <a href="/#work" className="hover:text-foreground transition">Portfolio</a>
            <a href="/#contact" className="hover:text-foreground transition">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme" className="rounded-none">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="rounded-none md:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="mt-4 border-y border-border bg-background py-2 md:hidden"
          >
            <div className="flex flex-col label-mono">
              <a href="/#services" onClick={closeMenu} className="border-b border-border px-3 py-4 text-muted-foreground transition hover:text-foreground">
                Services
              </a>
              <Link to="/products" onClick={closeMenu} className="border-b border-border px-3 py-4 text-muted-foreground transition hover:text-foreground">
                Products
              </Link>
              <Link to="/pricing" onClick={closeMenu} className="border-b border-border px-3 py-4 text-muted-foreground transition hover:text-foreground">
                Pricing
              </Link>
              <a href="/#work" onClick={closeMenu} className="border-b border-border px-3 py-4 text-muted-foreground transition hover:text-foreground">
                Portfolio
              </a>
              <a href="/#contact" onClick={closeMenu} className="px-3 py-4 text-muted-foreground transition hover:text-foreground">
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
