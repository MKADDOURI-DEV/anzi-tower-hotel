import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Image } from "@/components/ui/image";
import { images } from "@/lib/images";

/** Filterable gallery with a fullscreen lightbox and keyboard navigation. */
export default function GalleryGrid({ t }) {
  const gallery = t.pages.gallery;
  const [filter, setFilter] = useState("all");
  const [index, setIndex] = useState(null);

  const visible = filter === "all" ? gallery.items : gallery.items.filter((i) => i.category === filter);

  useEffect(() => {
    if (index === null) return;
    const onKey = (event) => {
      if (event.key === "Escape") setIndex(null);
      if (event.key === "ArrowRight") setIndex((i) => (i + 1) % visible.length);
      if (event.key === "ArrowLeft") setIndex((i) => (i - 1 + visible.length) % visible.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, visible.length]);

  const active = index === null ? null : visible[index];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {gallery.categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => {
              setFilter(category.id);
              setIndex(null);
            }}
            aria-pressed={filter === category.id}
            className={cn(
              "border px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-colors",
              filter === category.id
                ? "border-navy bg-navy text-ivory"
                : "border-navy/20 text-navy/70 hover:border-navy/50 hover:text-navy"
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:gap-5">
        {visible.map((item, i) => (
          <button
            key={`${item.image}-${i}`}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden bg-navy/5 text-start lg:mb-5"
            aria-label={item.caption}
          >
            <Image
              src={images[item.image]}
              alt={t.alt[item.image]}
              className="w-full transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
              fittingType="fill"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-4 text-[11px] uppercase tracking-[0.18em] text-ivory opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {item.caption}
            </span>
          </button>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-navy/97 p-4 text-ivory sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
        >
          <div className="flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-[0.2em] text-ivory/70">{active.caption}</p>
            <button
              type="button"
              onClick={() => setIndex(null)}
              className="inline-flex h-10 w-10 items-center justify-center border border-ivory/30 transition-colors hover:bg-ivory/10"
              aria-label={t.nav.close}
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center py-4">
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + visible.length) % visible.length)}
              className="absolute start-0 z-10 inline-flex h-11 w-11 items-center justify-center border border-ivory/30 bg-navy/60 transition-colors hover:bg-ivory/10"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5 rtl:-scale-x-100" strokeWidth={1.5} />
            </button>

            <Image
              src={images[active.image]}
              alt={t.alt[active.image]}
              className="max-h-[76vh] w-auto max-w-full object-contain"
              fittingType="fit"
            />

            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % visible.length)}
              className="absolute end-0 z-10 inline-flex h-11 w-11 items-center justify-center border border-ivory/30 bg-navy/60 transition-colors hover:bg-ivory/10"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5 rtl:-scale-x-100" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}