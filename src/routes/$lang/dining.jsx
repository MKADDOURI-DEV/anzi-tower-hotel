import { createFileRoute } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { content } from "@/content";
import { pageMeta } from "@/lib/seo";
import { Image } from "@/components/ui/image";
import { images } from "@/lib/images";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";
import BookingCta from "@/components/site/BookingCta";

export const Route = createFileRoute("/$lang/dining")({
  head: ({ params }) => {
    const lang = params?.lang || "fr";
    const t = content[lang] || content.fr;
    return pageMeta({ lang, path: "/dining", ...t.meta.dining });
  },
  component: DiningPage,
});

function DiningPage() {
  const { lang } = Route.useParams();
  const t = content[lang] || content.fr;
  const page = t.pages.dining;

  return (
    <>
      <PageHero
        lang={lang}
        t={t}
        image="fez"
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        current={t.nav.dining}
      />

      <section className="container-page py-20 lg:py-24">
        <SectionIntro eyebrow={page.intro.eyebrow} title={page.intro.title} body={page.intro.body} />
      </section>

      <div className="pb-8">
        {page.venues.map((venue, index) => (
          <section
            key={venue.id}
            id={venue.id}
            className={cn("scroll-mt-24", index % 2 === 0 ? "bg-white" : "bg-ivory")}
          >
            <div className="container-page grid items-center gap-10 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20">
              <Reveal className={cn("lg:col-span-7", index % 2 === 1 && "lg:col-start-6")}>
                <div className="group relative overflow-hidden bg-navy/5">
                  <Image
                    src={images[venue.image]}
                    alt={t.alt[venue.image]}
                    className="aspect-[16/10] w-full transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
                    fittingType="fill"
                  />
                </div>
              </Reveal>

              <div
                className={cn(
                  "lg:col-span-4",
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-9"
                )}
              >
                <Reveal delay={0.06}>
                  <p className="eyebrow text-navy/70">{venue.kind}</p>
                  <h2 className="mt-3 font-heading text-[2rem] leading-tight text-navy lg:text-[2.6rem]">
                    {venue.name}
                  </h2>
                  <p className="mt-4 text-[16px] leading-relaxed text-navy/70">{venue.text}</p>

                  <dl className="mt-6 space-y-3 border-t border-navy/12 pt-5">
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.2em] text-navy/65">{t.pages.dining.hero.eyebrow}</dt>
                      <dd className="mt-1 text-sm text-navy/80">{venue.cuisine}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.2em] text-navy/65">{venue.atmosphere}</dt>
                      <dd className="mt-1 text-sm text-navy/80">{venue.hours}</dd>
                    </div>
                  </dl>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="container-page pb-16">
        <p className="max-w-2xl text-[13px] leading-relaxed text-navy/65">{page.note}</p>
      </div>

      <BookingCta lang={lang} t={t} />
    </>
  );
}