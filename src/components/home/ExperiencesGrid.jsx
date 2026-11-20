import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Image } from "@/components/ui/image";
import { images } from "@/lib/images";
import SectionIntro from "@/components/site/SectionIntro";
import Reveal from "@/components/site/Reveal";

export default function ExperiencesGrid({ lang, t }) {
  const section = t.home.experiences;
  const items = t.pages.activities.items;

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <SectionIntro eyebrow={section.eyebrow} title={section.title} body={section.body} />
          <Reveal delay={0.1}>
            <Link to="/$lang/activities" params={{ lang }} className="link-arrow mt-8 text-navy">
              {section.cta}
            </Link>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
            {items.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} className={cn(index % 2 === 1 && "sm:mt-10")}>
                <article className="group relative isolate overflow-hidden">
                  <Image
                    src={images[item.image]}
                    alt={t.alt[item.image]}
                    className="aspect-[4/5] w-full transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                    fittingType="fill"
                  />
                  <div className="absolute inset-0 -z-0 bg-gradient-to-t from-navy/90 via-navy/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-ivory lg:p-6">
                    <h3 className="font-heading text-[1.5rem] leading-tight lg:text-[1.75rem]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ivory/80">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}