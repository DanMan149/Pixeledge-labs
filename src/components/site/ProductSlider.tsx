import { useEffect, useRef, useState } from "react";

export function ProductSlider({
  images,
  alt,
  interval = 4000,
}: {
  images: string[];
  alt: string;
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);
  const [dragX, setDragX] = useState(0);

  useEffect(() => {
    if (images.length < 2 || paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [images.length, interval, paused]);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + images.length) % images.length);

  const onPointerDown = (e: React.PointerEvent) => {
    if (images.length < 2) return;
    startX.current = e.clientX;
    startY.current = e.clientY;
    setPaused(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    const dy = e.clientY - (startY.current ?? 0);
    if (Math.abs(dx) > Math.abs(dy)) setDragX(dx);
  };

  const endDrag = () => {
    if (startX.current !== null && Math.abs(dragX) > 45) go(dragX < 0 ? 1 : -1);
    startX.current = null;
    startY.current = null;
    setDragX(0);
    setPaused(false);
  };

  return (
    <div
      className="relative aspect-[16/10] w-full select-none overflow-hidden border border-border bg-muted/20 touch-pan-y"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${alt} screenshot ${i + 1}`}
          loading="lazy"
          draggable={false}
          className={`absolute inset-0 h-full w-full object-contain object-center p-2 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={i === index && dragX ? { transform: `translateX(${dragX * 0.25}px)` } : undefined}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-3 flex gap-1.5">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Show ${alt} screenshot ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 w-6 transition ${
                i === index ? "bg-[var(--brand-2)]" : "bg-foreground/25 hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
