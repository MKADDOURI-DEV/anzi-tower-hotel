import { createFileRoute } from "@tanstack/react-router";
import { content } from "@/content";
import { pageMeta } from "@/lib/seo";
import { Image } from "@/components/ui/image";
import { images } from "@/lib/images";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";
import BookingCta from "@/components/site/BookingCta";

export const Route = createFileRoute("/$lang/wellness")({
  head: ({ params }) => {
    const lang = params?.lang || "fr";
    const t = content[lang] || content.fr;
    return pageMeta({ lang, path: "/wellness", ...t.meta.wellness });
  },
  component: WellnessPage,
});

function WellnessPage() {
  const { lang } = Route.useParams();
  const t = content[lang] || content.fr;
  const page = t.pages.wellness;

  return (
    <>
      <PageHero
        lang={lang}
        t={t}
        image="spa"
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        current={t.nav.wellness}
      />

      <section className="container-page py-20 lg:py-24">
        <SectionIntro eyebrow={page.intro.eyebrow} title={page.intro.title} body={page.intro.body} />
      </section>

      <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-navy text-ivory">
        <div className="absolute inset-0 -z-10">
          <Image src={images.pool} alt={t.alt.pool} className="h-full w-full" fittingType="fill" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/55 to-navy/20" />
        </div>
        <div className="container-page py-24">
          <div className="max-w-xl">
            <Reveal>
              <h2 className="font-heading text-[2.2rem] leading-tight sm:text-[2.8rem]">{page.pools.title}</h2>
              <p className="mt-5 text-[17px] leading-relaxed text-ivory/80">{page.pools.body}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {page.pools.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border-t border-ivory/20 pt-3 text-[11px] uppercase tracking-[0.14em] text-ivory/75"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-page grid items-center gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-navy/70">{t.nav.wellness}</p>
            <h2 className="mt-5 font-heading text-[2.2rem] leading-tight text-navy sm:text-[2.8rem]">
              {page.spa.title}
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-navy/75">{page.spa.body}</p>
            <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
              {page.spa.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-t border-navy/12 py-3 text-[11px] uppercase tracking-[0.14em] text-navy/70"
                >
                  <span className="h-px w-4 bg-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-md text-[13px] leading-relaxed text-navy/65">{page.note}</p>
          </Reveal>
        </div>

        <Reveal delay={0.06} className="lg:col-span-6 lg:col-start-7">
          <div className="group relative overflow-hidden bg-navy/5">
            <Image
              src={images.spa}
              alt={t.alt.spa}
              className="aspect-[4/5] w-full transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
              fittingType="fill"
            />
          </div>
        </Reveal>
      </section>

      <BookingCta lang={lang} t={t} />
    </>
  );
}