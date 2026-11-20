import { createFileRoute } from "@tanstack/react-router";
import { content } from "@/content";
import { pageMeta } from "@/lib/seo";
import Hero from "@/components/site/Hero";
import IntroSection from "@/components/home/IntroSection";
import StayPreview from "@/components/home/StayPreview";
import PoolsBand from "@/components/home/PoolsBand";
import DiningPreview from "@/components/home/DiningPreview";
import ExperiencesGrid from "@/components/home/ExperiencesGrid";
import MeetingsBand from "@/components/home/MeetingsBand";
import BookingCta from "@/components/site/BookingCta";
import JsonLd from "@/components/site/JsonLd";

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => {
    const lang = params?.lang || "fr";
    const t = content[lang] || content.fr;
    return pageMeta({ lang, path: "", ...t.meta.home });
  },
  component: HomePage,
});

function HomePage() {
  const { lang } = Route.useParams();
  const t = content[lang] || content.fr;

  return (
    <>
      <JsonLd lang={lang} />
      <Hero lang={lang} t={t} />
      <IntroSection lang={lang} t={t} />
      <StayPreview lang={lang} t={t} />
      <PoolsBand lang={lang} t={t} />
      <DiningPreview lang={lang} t={t} />
      <ExperiencesGrid lang={lang} t={t} />
      <MeetingsBand lang={lang} t={t} />
      <BookingCta lang={lang} t={t} />
    </>
  );
}