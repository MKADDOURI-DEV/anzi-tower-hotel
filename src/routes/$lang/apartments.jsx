import { createFileRoute } from "@tanstack/react-router";
import { content } from "@/content";
import { pageMeta } from "@/lib/seo";
import { Image } from "@/components/ui/image";
import { images } from "@/lib/images";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";
import StayRow from "@/components/site/StayRow";
import BookingCta from "@/components/site/BookingCta";

export const Route = createFileRoute("/$lang/apartments")({
  head: ({ params }) => {
    const lang = params?.lang || "fr";
    const t = content[lang] || content.fr;
    return pageMeta({ lang, path: "/apartments", ...t.meta.apartments });
  },
  component: ApartmentsPage,
});

function ApartmentsPage() {
  const { lang } = Route.useParams();
  const t = content[lang] || content.fr;
  const page = t.pages.apartments;

  return (
    <>
      <PageHero
        lang={lang}
        t={t}
        image="apartment"
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        current={t.nav.apartments}
      />

      <section className="container-page py-20 lg:py-24">
        <SectionIntro eyebrow={page.intro.eyebrow} title={page.intro.title} body={page.intro.body} />
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-page space-y-20 lg:space-y-28">
          {page.items.map((item, index) => (
            <StayRow key={item.id} lang={lang} t={t} item={item} reverse={index % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="bg-sand/40">
        <div className="container-page grid items-center gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
          <div className="lg:col-span-5">
            <SectionIntro eyebrow={page.family.eyebrow} title={page.family.title} body={page.family.body} />
            <Reveal delay={0.1}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {page.family.points.map((point) => (
                  <li
                    key={point}
                    className="border-t border-navy/15 pt-3 text-[11px] uppercase tracking-[0.14em] text-navy/70"
                  >
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-8 max-w-md text-[13px] leading-relaxed text-navy/65">{page.note}</p>
            </Reveal>
          </div>

          <Reveal delay={0.06} className="lg:col-span-6 lg:col-start-7">
            <div className="group relative overflow-hidden bg-navy/5">
              <Image
                src={images.garden}
                alt={t.alt.garden}
                className="aspect-[5/4] w-full transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
                fittingType="fill"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <BookingCta lang={lang} t={t} />
    </>
  );
}