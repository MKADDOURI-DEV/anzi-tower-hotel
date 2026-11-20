import { Link } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";
import { images } from "@/lib/images";
import Reveal from "@/components/site/Reveal";

export default function IntroSection({ lang, t }) {
  const intro = t.home.intro;

  return (
    <section className="container-page pb-20 pt-24 lg:pb-28 lg:pt-32">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-navy/70">{intro.eyebrow}</p>
            <h2 className="mt-6 max-w-[15ch] font-heading text-[2.3rem] leading-[1.04] tracking-[-0.01em] text-navy sm:text-[2.9rem] lg:text-[3.5rem]">
              {intro.title}
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.08}>
            <div className="space-y-5 text-[17px] leading-relaxed text-navy/75">
              {intro.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <Link to="/$lang/about" params={{ lang }} className="link-arrow mt-8 text-navy">
              {intro.link}
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 grid items-end gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <div className="group relative overflow-hidden bg-navy/5">
            <Image
              src={images.exterior}
              alt={t.alt.exterior}
              className="aspect-[4/3] w-full transition-transform duration-[1600ms] ease-out group-hover:scale-[1.03]"
              fittingType="fill"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-4 lg:col-start-9">
          <dl className="border-t border-navy/10">
            {t.home.facts.map((fact, i) => (
              <Reveal key={fact.label} delay={i * 0.05}>
                <div className="flex items-baseline justify-between gap-4 border-b border-navy/10 py-5">
                  <dt className="text-[10px] uppercase tracking-[0.22em] text-navy/70">{fact.label}</dt>
                  <dd className="font-heading text-[2rem] leading-none text-navy">{fact.value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}