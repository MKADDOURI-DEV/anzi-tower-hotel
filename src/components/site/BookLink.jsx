import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { bookingHref } from "@/lib/booking";

const VARIANTS = {
  navy: "bg-navy text-ivory hover:bg-charcoal",
  sand: "bg-sand text-navy hover:bg-gold",
  ivory: "bg-ivory text-navy hover:bg-sand",
  outline: "border border-current text-current hover:bg-white/10",
};

export default function BookLink({ children, variant = "navy", className, showArrow = true }) {
  return (
    <a
      href={bookingHref()}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center justify-center gap-3 px-6 py-3.5 text-[11px] uppercase tracking-[0.24em] transition-colors duration-300",
        VARIANTS[variant],
        className
      )}
    >
      <span>{children}</span>
      {showArrow ? (
        <ArrowUpRight
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      ) : null}
    </a>
  );
}