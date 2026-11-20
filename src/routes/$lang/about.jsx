import { createFileRoute } from "@tanstack/react-router";
import { content } from "@/content";
import { pageMeta } from "@/lib/seo";
import { Image } from "@/components/ui/image";
import { images } from "@/lib/images";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";
import BookingCta from "@/components/site/BookingCta";

export const Route = createFileRoute("/$lang/about")({
  head: ({ params }) => {
    const lang = params?.lang || "fr";
    const t = content[lang] || content.fr;
    return pageMeta({ lang, path: "/about", ...t.meta.about });
  },
  component: AboutPage,
});

function AboutPage() {
  const { lang } = Route.useParams();
  const t = content[lang] || content.fr;
  const page = t.pages.about;

  return (
    <>
      <PageHero
        lang={lang}
        t={t}
        image="exterior"
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        current={t.nav.about}
      />

      <section className="container-page grid gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="lg:col-span-4">
          <SectionIntro eyebrow={page.story.eyebrow} title={page.story.title} />
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal>
            <div className="space-y-5 text-[17px] leading-relaxed text-navy/75">
              {page.story.body.map((paragraph, i) => (
                <p key={i} className={i === 0 ? "text-[19px] text-navy/85" : undefined}>
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-page grid gap-8 md:grid-cols-3 lg:gap-12">
          {page.values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.08}>
              <article className="border-t border-navy/15 pt-6">
                <h3 className="font-heading text-[1.6rem] leading-tight text-navy">{value.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-navy/70">{value.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page grid items-center gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <Reveal className="lg:col-span-6">
          <div className="group relative overflow-hidden bg-navy/5">
            <Image
              src={images.beach}
              alt={t.alt.beach}
              className="aspect-[4/3] w-full transition-transform duration-[1600ms] ease-out group-hover:scale-[1.03]"
              fittingType="fill"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-5 lg:col-start-8">
          <SectionIntro eyebrow={page.location.eyebrow} title={page.location.title} body={page.location.body} />
          <Reveal delay={0.1}>
            <dl className="mt-8 border-t border-navy/12">
              {page.location.items.map((item) => (
                <div key={item.label} className="flex items-baseline justify-between gap-6 border-b border-navy/12 py-3.5">
                  <dt className="text-[11px] uppercase tracking-[0.16em] text-navy/70">{item.label}</dt>
                  <dd className="text-end text-sm text-navy/80">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <BookingCta lang={lang} t={t} />
    </>
  );
}