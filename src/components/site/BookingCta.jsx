import { Link } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";
import { images } from "@/lib/images";
import Reveal from "./Reveal";
import BookLink from "./BookLink";

/** Full-width closing call to action over a panoramic view of the bay. */
export default function BookingCta({ lang, t }) {
  const c = t.home.cta;

  return (
    <section className="relative isolate overflow-hidden bg-navy text-ivory">
      <div className="absolute inset-0 -z-10">
        <Image src={images.panorama} alt={t.alt.panorama} className="h-full w-full" fittingType="fill" />
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      <div className="container-page flex flex-col items-center py-28 text-center lg:py-36">
        <Reveal>
          <p className="eyebrow text-sand">{t.brand.place}</p>
          <h2 className="mx-auto mt-6 max-w-[22ch] font-heading text-[2.4rem] leading-[1.05] sm:text-[3.2rem] lg:text-[4rem]">
            {c.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-ivory/80">{c.body}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <BookLink variant="sand">{t.common.bookStay}</BookLink>
            <Link
              to="/$lang/contact"
              params={{ lang }}
              className="inline-flex items-center justify-center border border-ivory/40 px-6 py-3.5 text-[11px] uppercase tracking-[0.24em] text-ivory transition-colors hover:bg-ivory/10"
            >
              {c.secondary}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}