import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden min-h-[90vh] flex items-center">
      <style>{`
        @keyframes schematic-rotate {
          from { transform: rotateX(0deg) rotateY(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }
        @keyframes schematic-scan {
          0%, 100% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes schematic-ping {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 0.2; }
        }
        .schematic-perspective {
          perspective: 800px;
        }
        .schematic-sphere {
          transform-style: preserve-3d;
          animation: schematic-rotate 24s linear infinite;
        }
      `}</style>

      <div className="relative mx-auto w-full max-w-[1700px] px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="label-mono text-muted-foreground animate-fade-in">// Creative Technology Studio</p>
            <h1 className="mt-6 font-display font-extrabold uppercase leading-[0.88] tracking-[-0.05em] text-[18vw] sm:text-[14vw] lg:text-[12.5rem] animate-fade-up">
              PIXEL<br />EDGE
            </h1>
          </div>

          {/* Kinetic Schematic — fills the blank space above the CTA */}
          <div className="hidden lg:flex flex-col items-end justify-start pt-12 animate-fade-up" style={{ animationDelay: "120ms" }}>
            <div className="relative w-[280px] h-[280px] xl:w-[320px] xl:h-[320px]">
              {/* 3D wireframe sphere */}
              <div className="schematic-perspective absolute inset-0 flex items-center justify-center">
                <div className="schematic-sphere relative w-48 h-48 xl:w-56 xl:h-56">
                  {/* Vertical rings */}
                  <div className="absolute inset-0 rounded-full border border-[color-mix(in_oklab,var(--brand-2)_30%,transparent)]" style={{ transform: "rotateY(0deg)" }} />
                  <div className="absolute inset-0 rounded-full border border-[color-mix(in_oklab,var(--brand-2)_25%,transparent)]" style={{ transform: "rotateY(30deg)" }} />
                  <div className="absolute inset-0 rounded-full border border-[color-mix(in_oklab,var(--brand-2)_20%,transparent)]" style={{ transform: "rotateY(60deg)" }} />
                  <div className="absolute inset-0 rounded-full border border-[color-mix(in_oklab,var(--brand-2)_30%,transparent)]" style={{ transform: "rotateY(90deg)" }} />
                  <div className="absolute inset-0 rounded-full border border-[color-mix(in_oklab,var(--brand-2)_25%,transparent)]" style={{ transform: "rotateY(120deg)" }} />
                  <div className="absolute inset-0 rounded-full border border-[color-mix(in_oklab,var(--brand-2)_20%,transparent)]" style={{ transform: "rotateY(150deg)" }} />
                  {/* Horizontal rings */}
                  <div className="absolute inset-0 rounded-full border border-[color-mix(in_oklab,var(--foreground)_12%,transparent)]" style={{ transform: "rotateX(90deg) scale(0.9)" }} />
                  <div className="absolute inset-0 rounded-full border border-[color-mix(in_oklab,var(--foreground)_10%,transparent)]" style={{ transform: "rotateX(90deg) scale(0.6)" }} />
                  <div className="absolute inset-0 rounded-full border border-[color-mix(in_oklab,var(--brand-2)_35%,transparent)]" style={{ transform: "rotateX(90deg) scale(0.3)" }} />
                </div>
              </div>

              {/* Core pulse */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-3 h-3 bg-[var(--brand-2)]" style={{ animation: "schematic-ping 3s ease-in-out infinite" }} />
              </div>

              {/* Scanning line */}
              <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden pointer-events-none">
                <div className="w-full h-4 bg-gradient-to-b from-transparent via-[color-mix(in_oklab,var(--brand-2)_20%,transparent)] to-transparent" style={{ animation: "schematic-scan 5s ease-in-out infinite" }} />
              </div>

              {/* HUD callouts */}
              <div className="absolute top-0 right-0 p-3 border-l border-t border-[color-mix(in_oklab,var(--brand-2)_40%,transparent)]">
                <div className="label-mono text-[0.6rem] text-[var(--brand-2)] leading-none mb-1">VECTOR_CORE.ALPHA</div>
                <div className="font-mono text-[0.55rem] text-muted-foreground leading-tight">
                  LAT: 25.2048° N<br />LNG: 55.2708° E
                </div>
              </div>

              <div className="absolute bottom-6 -left-2 p-3 border-r border-b border-[color-mix(in_oklab,var(--foreground)_20%,transparent)]">
                <div className="label-mono text-[0.6rem] text-foreground leading-none mb-1">ENCRYPTION_LAYER</div>
                <div className="font-mono text-[0.55rem] text-muted-foreground uppercase tracking-tighter">AES-256_ACTIVE</div>
              </div>

              <div className="absolute top-1/2 -right-6 -translate-y-1/2 flex items-center gap-2">
                <div className="w-10 h-px bg-border" />
                <div className="label-mono text-[0.55rem] text-muted-foreground rotate-90 origin-left whitespace-nowrap">
                  DATA_FREQ: 2.4GHz
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
          <p className="max-w-md text-base sm:text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "180ms" }}>
            We architect digital experiences at the intersection of precision engineering and creative rebellion.
          </p>
          <div className="flex md:justify-end animate-fade-up" style={{ animationDelay: "260ms" }}>
            <a href="#contact" className="group inline-flex items-center gap-3">
              <Button size="lg" className="rounded-none bg-[var(--brand-2)] text-[var(--accent-foreground)] hover:opacity-90 h-12 px-6 label-mono">
                Start a project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between label-mono text-muted-foreground border-t border-border pt-6">
          <span>↓ Scroll</span>
          <span className="hidden sm:inline">WEB — MOBILE — MARKETING — SOCIAL</span>
        </div>
      </div>
    </section>
  );
}
