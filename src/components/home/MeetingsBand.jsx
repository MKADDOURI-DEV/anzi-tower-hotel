import { Link } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";
import { images } from "@/lib/images";
import Reveal from "@/components/site/Reveal";

export default function MeetingsBand({ lang, t }) {
  const section = t.home.meetings;

  return (
    <section className="bg-sand/45">
      <div className="container-page grid items-center gap-12 py-24 lg:grid-cols-12 lg:gap-16 lg:py-32">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-navy/70">{section.eyebrow}</p>
            <h2 className="mt-6 font-heading text-[2.3rem] leading-[1.04] text-navy sm:text-[2.9rem] lg:text-[3.4rem]">
              {section.title}
            </h2>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-navy/75">{section.body}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {section.points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 border-t border-navy/15 pt-3 text-[11px] uppercase tracking-[0.14em] text-navy/70"
                >
                  {point}
                </li>
              ))}
            </ul>
            <Link to="/$lang/meetings" params={{ lang }} className="link-arrow mt-10 text-navy">
              {section.cta}
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.06} className="lg:col-span-6 lg:col-start-7">
          <div className="group relative overflow-hidden bg-navy/5">
            <Image
              src={images.meetings}
              alt={t.alt.meetings}
              className="aspect-[5/4] w-full transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
              fittingType="fill"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}