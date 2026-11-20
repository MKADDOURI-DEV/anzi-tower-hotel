import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Image } from "@/components/ui/image";
import { images } from "@/lib/images";
import Reveal from "./Reveal";

/**
 * One accommodation entry: large photograph beside an editorial text column.
 * `reverse` flips the composition so rows alternate down the page.
 */
export default function StayRow({ lang, t, item, reverse = false }) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
      <Reveal
        className={cn("lg:col-span-7", reverse ? "lg:col-start-6" : "lg:col-start-1")}
      >
        <div className="group relative overflow-hidden bg-navy/5">
          <Image
            src={images[item.image]}
            alt={t.alt[item.image]}
            className="aspect-[16/11] w-full transition-transform duration-[1600ms] ease-out group-hover:scale-[1.045]"
            fittingType="fill"
          />
        </div>
      </Reveal>

      <Reveal
        delay={0.08}
        className={cn(
          "lg:col-span-4",
          reverse ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-9"
        )}
      >
        <p className="eyebrow text-navy/70">{item.view}</p>
        <h3 className="mt-4 font-heading text-[1.9rem] leading-[1.1] text-navy sm:text-[2.4rem]">
          {item.name}
        </h3>
        <p className="mt-4 text-[16px] leading-relaxed text-navy/70">{item.text}</p>

        <ul className="mt-6 space-y-2.5">
          {item.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-navy/70"
            >
              <span className="h-px w-5 bg-gold" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <Link
          to={item.href || "/$lang/rooms"}
          params={{ lang }}
          className="link-arrow mt-8 text-navy"
        >
          {t.common.discover}
        </Link>
      </Reveal>
    </div>
  );
}