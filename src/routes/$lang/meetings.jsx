import { createFileRoute, Link } from "@tanstack/react-router";
import { content } from "@/content";
import { pageMeta } from "@/lib/seo";
import { Image } from "@/components/ui/image";
import { images } from "@/lib/images";
import { SITE } from "@/lib/site";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";

export const Route = createFileRoute("/$lang/meetings")({
  head: ({ params }) => {
    const lang = params?.lang || "fr";
    const t = content[lang] || content.fr;
    return pageMeta({ lang, path: "/meetings", ...t.meta.meetings });
  },
  component: MeetingsPage,
});

function MeetingsPage() {
  const { lang } = Route.useParams();
  const t = content[lang] || content.fr;
  const page = t.pages.meetings;

  return (
    <>
      <PageHero
        lang={lang}
        t={t}
        image="wedding"
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        current={t.nav.meetings}
      />

      <section className="container-page py-20 lg:py-24">
        <SectionIntro eyebrow={page.intro.eyebrow} title={page.intro.title} body={page.intro.body} />
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page grid gap-8 sm:grid-cols-2 lg:gap-12">
          {page.spaces.map((space, i) => (
            <Reveal key={space.title} delay={i * 0.06}>
              <article className="border-t border-navy/15 pt-6">
                <span className="font-heading text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-3 font-heading text-[1.7rem] leading-tight text-navy lg:text-[2rem]">
                  {space.title}
                </h2>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-navy/70">{space.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page grid items-center gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <Reveal className="lg:col-span-6">
          <div className="group relative overflow-hidden bg-navy/5">
            <Image
              src={images.meetings}
              alt={t.alt.meetings}
              className="aspect-[4/3] w-full transition-transform duration-[1600ms] ease-out group-hover:scale-[1.03]"
              fittingType="fill"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal>
            <h2 className="font-heading text-[2rem] leading-tight text-navy lg:text-[2.4rem]">
              {page.services.title}
            </h2>
            <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">
              {page.services.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-t border-navy/12 py-3 text-[11px] uppercase tracking-[0.14em] text-navy/70"
                >
                  <span className="h-px w-4 bg-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[13px] leading-relaxed text-navy/65">{page.note}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy text-ivory">
        <div className="container-page grid items-center gap-10 py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-sand">{t.nav.meetings}</p>
              <h2 className="mt-5 max-w-[24ch] font-heading text-[2.2rem] leading-tight sm:text-[2.8rem]">
                {page.cta.title}
              </h2>
              <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-ivory/75">{page.cta.body}</p>
            </Reveal>
          </div>

          <Reveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <div className="space-y-3">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center justify-between border border-ivory/30 px-5 py-4 text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-ivory/10"
              >
                {t.common.email}
                <span className="normal-case tracking-normal text-ivory/70">{SITE.email}</span>
              </a>
              <a
                href={SITE.phoneHref}
                className="flex items-center justify-between border border-ivory/30 px-5 py-4 text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-ivory/10"
              >
                {t.common.call}
                <span className="normal-case tracking-normal text-ivory/70">{SITE.phone}</span>
              </a>
              <Link
                to="/$lang/contact"
                params={{ lang }}
                className="flex items-center justify-between border border-ivory/30 px-5 py-4 text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-ivory/10"
              >
                {t.common.contactUs}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}