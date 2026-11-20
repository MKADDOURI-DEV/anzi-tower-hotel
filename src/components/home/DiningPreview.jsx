import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { images } from "@/lib/images";
import SectionIntro from "@/components/site/SectionIntro";
import Reveal from "@/components/site/Reveal";

export default function DiningPreview({ lang, t }) {
  const section = t.home.dining;
  const venues = t.pages.dining.venues;

  return (
    <section className="container-page py-24 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionIntro eyebrow={section.eyebrow} title={section.title} body={section.body} />
          <Reveal delay={0.1}>
            <Link to="/$lang/dining" params={{ lang }} className="link-arrow mt-8 text-navy">
              {section.cta}
            </Link>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <ul className="border-t border-navy/12">
            {venues.map((venue, index) => (
              <Reveal key={venue.id} delay={index * 0.04}>
                <li className="border-b border-navy/12">
                  <Link
                    to="/$lang/dining"
                    params={{ lang }}
                    hash={venue.id}
                    className="group flex items-center gap-6 py-6"
                  >
                    <span className="relative hidden h-20 w-28 shrink-0 overflow-hidden bg-navy/5 sm:block">
                      <Image
                        src={images[venue.image]}
                        alt={t.alt[venue.image]}
                        className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                        fittingType="fill"
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-heading text-[1.6rem] leading-tight text-navy">
                        {venue.name}
                      </span>
                      <span className="mt-1 block text-[13px] text-navy/70">
                        {venue.kind} · {venue.cuisine}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-navy/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}