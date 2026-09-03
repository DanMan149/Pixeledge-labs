import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden border border-border bg-muted/20">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${alt} screenshot ${i + 1}`}
          loading="lazy"
          width={1280}
          height={800}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
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
