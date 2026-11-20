import { Link } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";
import { images } from "@/lib/images";

export default function PageHero({ lang, t, image, eyebrow, title, subtitle, current }) {
  return (
    <section className="relative isolate flex min-h-[58vh] items-end overflow-hidden bg-navy pt-28 text-ivory lg:min-h-[64vh]">
      <div className="absolute inset-0 -z-10">
        <Image src={images[image]} alt={t.alt[image]} className="h-full w-full" fittingType="fill" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/45" />
      </div>

      <div className="container-page pb-14 pt-16 lg:pb-20">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-ivory/60"
        >
          <Link to="/$lang" params={{ lang }} className="transition-colors hover:text-ivory">
            {t.common.home}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-ivory/90">{current}</span>
        </nav>

        <p className="eyebrow text-sand">{eyebrow}</p>
        <h1 className="mt-4 max-w-[20ch] font-heading text-[2.5rem] leading-[1.02] tracking-[-0.01em] sm:text-[3.3rem] lg:text-[4.2rem]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ivory/75">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
}