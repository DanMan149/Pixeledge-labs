import logo from "@/assets/pel-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-display font-semibold">
          <img src={logo} alt="Pixel Edge Labs logo" className="h-8 w-8 rounded-md" />
          Pixel Edge <span className="text-gradient">Labs</span>
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pixel Edge Labs · pixeledgelabs.pro
        </div>
        <a href="mailto:d.hasan@pixeledgelabs.pro" className="text-sm text-muted-foreground hover:text-foreground transition">
          d.hasan@pixeledgelabs.pro
        </a>
      </div>
    </footer>
  );
}
