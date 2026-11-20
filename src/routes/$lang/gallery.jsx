import { createFileRoute } from "@tanstack/react-router";
import { content } from "@/content";
import { pageMeta } from "@/lib/seo";
import PageHero from "@/components/site/PageHero";
import SectionIntro from "@/components/site/SectionIntro";
import GalleryGrid from "@/components/site/GalleryGrid";
import BookingCta from "@/components/site/BookingCta";

export const Route = createFileRoute("/$lang/gallery")({
  head: ({ params }) => {
    const lang = params?.lang || "fr";
    const t = content[lang] || content.fr;
    return pageMeta({ lang, path: "/gallery", ...t.meta.gallery });
  },
  component: GalleryPage,
});

function GalleryPage() {
  const { lang } = Route.useParams();
  const t = content[lang] || content.fr;
  const page = t.pages.gallery;

  return (
    <>
      <PageHero
        lang={lang}
        t={t}
        image="panorama"
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        current={t.nav.gallery}
      />

      <section className="container-page py-16 lg:py-24">
        <SectionIntro eyebrow={page.intro.eyebrow} title={page.intro.title} body={page.intro.body} />
        <div className="mt-12">
          <GalleryGrid t={t} />
        </div>
      </section>

      <BookingCta lang={lang} t={t} />
    </>
  );
}