import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { SITE } from "@/lib/site";
import BookLink from "./BookLink";

export default function Footer({ lang, t }) {
  const to = (path) => ({ to: path ? `/$lang${path}` : "/$lang", params: { lang } });

  const columns = [
    {
      title: t.footer.stayTitle,
      links: [
        { label: t.nav.rooms, path: "/rooms" },
        { label: t.nav.apartments, path: "/apartments" },
        { label: t.nav.gallery, path: "/gallery" },
      ],
    },
    {
      title: t.footer.discoverTitle,
      links: [
        { label: t.nav.dining, path: "/dining" },
        { label: t.nav.wellness, path: "/wellness" },
        { label: t.nav.activities, path: "/activities" },
        { label: t.nav.meetings, path: "/meetings" },
      ],
    },
    {
      title: t.footer.hotelTitle,
      links: [
        { label: t.nav.about, path: "/about" },
        { label: t.nav.contact, path: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-navy text-ivory">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <div className="lg:col-span-4">
          <Link {...to("")} className="inline-flex items-baseline gap-2.5">
            <span className="font-heading text-[1.7rem] leading-none">{t.brand.name}</span>
            <span className="text-[9px] uppercase tracking-[0.34em] opacity-70">{t.brand.sub}</span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/65">{t.footer.blurb}</p>

          <address className="mt-8 space-y-3 text-sm not-italic text-ivory/75">
            <a
              href={SITE.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 transition-colors hover:text-ivory"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
              <span>
                {SITE.address.line1}
                <br />
                {SITE.address.city}, {SITE.address.country}
              </span>
            </a>
            <a href={SITE.phoneHref} className="flex items-center gap-3 transition-colors hover:text-ivory">
              <Phone className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 transition-colors hover:text-ivory">
              <Mail className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
              {SITE.email}
            </a>
          </address>
        </div>

        {columns.map((col) => (
          <nav key={col.title} className="lg:col-span-2" aria-label={col.title}>
            <h2 className="eyebrow text-sand">{col.title}</h2>
            <ul className="mt-5 space-y-3">
              {col.links.map((link) => (
                <li key={link.path}>
                  <Link
                    {...to(link.path)}
                    className="text-sm text-ivory/70 transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="lg:col-span-2">
          <h2 className="eyebrow text-sand">{t.footer.newsletterTitle}</h2>
          <p className="mt-5 text-sm leading-relaxed text-ivory/65">{t.footer.newsletterText}</p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-4 inline-block border-b border-ivory/30 pb-1 text-sm text-ivory transition-colors hover:border-ivory"
          >
            {SITE.email}
          </a>
        </div>
      </div>

      <div className="border-t border-ivory/15">
        <div className="container-page flex flex-col items-start justify-between gap-5 py-6 sm:flex-row sm:items-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-ivory/65">
            © {new Date().getFullYear()} {SITE.name}. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] uppercase tracking-[0.2em] text-ivory/65">{t.footer.legal}</span>
            <BookLink variant="outline" className="border-ivory/40 px-4 py-2 text-[10px]">
              {t.nav.book}
            </BookLink>
          </div>
        </div>
      </div>
    </footer>
  );
}