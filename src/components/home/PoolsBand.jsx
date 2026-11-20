import { Link } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";
import { images } from "@/lib/images";
import Reveal from "@/components/site/Reveal";

export default function PoolsBand({ lang, t }) {
  const section = t.home.pools;

  return (
    <section className="relative isolate flex min-h-[78vh] items-center overflow-hidden bg-navy text-ivory">
      <div className="absolute inset-0 -z-10">
        <Image src={images.pool} alt={t.alt.pool} className="h-full w-full" fittingType="fill" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-navy/25" />
      </div>

      <div className="container-page py-24 lg:py-32">
        <div className="max-w-xl">
          <Reveal>
            <p className="eyebrow text-sand">{section.eyebrow}</p>
            <h2 className="mt-6 font-heading text-[2.4rem] leading-[1.04] sm:text-[3rem] lg:text-[3.6rem]">
              {section.title}
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-ivory/80">{section.body}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {section.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-[12px] uppercase tracking-[0.14em] text-ivory/75">
                  <span className="h-px w-5 bg-sand" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            <Link to="/$lang/wellness" params={{ lang }} className="link-arrow mt-10 text-ivory">
              {section.cta}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}