import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import SectionIntro from "@/components/site/SectionIntro";
import StayRow from "@/components/site/StayRow";
import Reveal from "@/components/site/Reveal";

export default function StayPreview({ lang, t }) {
  const section = t.home.stay;
  const items = t.pages.rooms.items;

  return (
    <section className="bg-white pb-24 pt-20 lg:pb-32 lg:pt-28">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionIntro eyebrow={section.eyebrow} title={section.title} body={section.body} />
          <Reveal delay={0.1}>
            <Link
              to="/$lang/rooms"
              params={{ lang }}
              className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-navy"
            >
              {section.cta}
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100"
                strokeWidth={1.5}
              />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-28">
          {items.map((item, index) => (
            <StayRow key={item.id} lang={lang} t={t} item={item} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}