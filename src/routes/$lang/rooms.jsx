import { createFileRoute } from "@tanstack/react-router";
import { content } from "@/content";
import { pageMeta } from "@/lib/seo";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";
import StayRow from "@/components/site/StayRow";
import BookingCta from "@/components/site/BookingCta";

export const Route = createFileRoute("/$lang/rooms")({
  head: ({ params }) => {
    const lang = params?.lang || "fr";
    const t = content[lang] || content.fr;
    return pageMeta({ lang, path: "/rooms", ...t.meta.rooms });
  },
  component: RoomsPage,
});

function RoomsPage() {
  const { lang } = Route.useParams();
  const t = content[lang] || content.fr;
  const page = t.pages.rooms;

  return (
    <>
      <PageHero
        lang={lang}
        t={t}
        image="suite"
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        current={t.nav.rooms}
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

      <section className="container-page py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="font-heading text-[2rem] leading-tight text-navy lg:text-[2.4rem]">
                {page.amenities.title}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {page.amenities.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-t border-navy/12 py-3.5 text-[13px] uppercase tracking-[0.14em] text-navy/70"
                >
                  <span className="h-px w-5 bg-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-xl text-[13px] leading-relaxed text-navy/65">{page.note}</p>
          </div>
        </div>
      </section>

      <BookingCta lang={lang} t={t} />
    </>
  );
}