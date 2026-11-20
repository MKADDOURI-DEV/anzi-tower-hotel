import { createFileRoute } from "@tanstack/react-router";
import { content } from "@/content";
import { pageMeta } from "@/lib/seo";
import { Image } from "@/components/ui/image";
import { images } from "@/lib/images";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";
import BookingCta from "@/components/site/BookingCta";

export const Route = createFileRoute("/$lang/activities")({
  head: ({ params }) => {
    const lang = params?.lang || "fr";
    const t = content[lang] || content.fr;
    return pageMeta({ lang, path: "/activities", ...t.meta.activities });
  },
  component: ActivitiesPage,
});

function ActivitiesPage() {
  const { lang } = Route.useParams();
  const t = content[lang] || content.fr;
  const page = t.pages.activities;

  return (
    <>
      <PageHero
        lang={lang}
        t={t}
        image="beach"
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        current={t.nav.activities}
      />

      <section className="container-page py-20 lg:py-24">
        <SectionIntro eyebrow={page.intro.eyebrow} title={page.intro.title} body={page.intro.body} />
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:gap-6">
          {page.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="group relative isolate overflow-hidden">
                <Image
                  src={images[item.image]}
                  alt={t.alt[item.image]}
                  className="aspect-[16/11] w-full transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  fittingType="fill"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                  <h2 className="font-heading text-[1.6rem] leading-tight lg:text-[2rem]">{item.title}</h2>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-ivory/80">{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page grid gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-navy/70">{t.nav.activities}</p>
            <h2 className="mt-5 font-heading text-[2.2rem] leading-tight text-navy sm:text-[2.8rem]">
              {page.excursions.title}
            </h2>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-navy/75">{page.excursions.body}</p>
            <p className="mt-8 max-w-md text-[13px] leading-relaxed text-navy/65">{page.note}</p>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <ol className="border-t border-navy/12">
            {page.excursions.items.map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <li className="flex items-baseline gap-6 border-b border-navy/12 py-5">
                  <span className="font-heading text-lg text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[17px] leading-relaxed text-navy/80">{item}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <BookingCta lang={lang} t={t} />
    </>
  );
}