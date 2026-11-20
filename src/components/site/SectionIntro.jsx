import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

/**
 * Editorial section heading: small tracked eyebrow, large serif title,
 * optional supporting paragraph. `tone="dark"` is for navy sections.
 */
export default function SectionIntro({ eyebrow, title, body, tone = "light", align = "start", className }) {
  const dark = tone === "dark";
  const paragraphs = Array.isArray(body) ? body : body ? [body] : [];

  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <Reveal>
        <p className={cn("eyebrow", dark ? "text-sand" : "text-navy/70")}>{eyebrow}</p>
        <h2
          className={cn(
            "mt-5 font-heading text-[2.2rem] leading-[1.06] tracking-[-0.01em] sm:text-[2.9rem] lg:text-[3.4rem]",
            dark ? "text-ivory" : "text-navy"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {paragraphs.length > 0 && (
        <Reveal delay={0.08}>
          <div className={cn("mt-6 space-y-4 text-[17px] leading-relaxed", dark ? "text-ivory/75" : "text-navy/70")}>
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      )}
    </div>
  );
}