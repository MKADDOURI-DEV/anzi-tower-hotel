import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { content } from "@/content";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";
import BookLink from "@/components/site/BookLink";

export const Route = createFileRoute("/$lang/contact")({
  head: ({ params }) => {
    const lang = params?.lang || "en";
    const t = content[lang] || content.fr;
    return pageMeta({ lang, path: "/contact", ...t.meta.contact });
  },
  component: ContactPage,
});

function ContactPage() {
  const { lang } = Route.useParams();
  const t = content[lang] || content.fr;
  const page = t.pages.contact;
  const d = page.details;

  const details = [
    {
      icon: MapPin,
      label: d.addressLabel,
      value: `${SITE.address.line1}, ${SITE.address.city}, ${SITE.address.country}`,
      href: SITE.mapLink,
      external: true,
    },
    { icon: Phone, label: d.phoneLabel, value: SITE.phone, href: SITE.phoneHref },
    { icon: Mail, label: d.emailLabel, value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: Clock, label: d.hoursLabel, value: d.hours.join(" · ") },
  ];

  return (
    <>
      <PageHero
        lang={lang}
        t={t}
        image="lobby"
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        current={t.nav.contact}
      />

      <section className="container-page grid gap-10 py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <div className="lg:col-span-4">
          <SectionIntro eyebrow={t.nav.contact} title={page.booking.title} body={page.booking.body} />
          <Reveal delay={0.1}>
            <div className="mt-8">
              <BookLink variant="navy">{t.common.bookStay}</BookLink>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <ul className="border-t border-navy/12">
            {details.map((item, i) => {
              const Icon = item.icon;
              const body = (
                <div className="flex items-start gap-4 py-5">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-navy/65">{item.label}</p>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-navy/80">{item.value}</p>
                  </div>
                </div>
              );

              return (
                <Reveal key={item.label} delay={i * 0.05}>
                  <li className="border-b border-navy/12">
                    {item.href ? (
                      <a
                        href={item.href}
                        {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="block transition-opacity hover:opacity-70"
                      >
                        {body}
                      </a>
                    ) : (
                      body
                    )}
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="font-heading text-[2rem] leading-tight text-navy lg:text-[2.4rem]">
                {page.directions.title}
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-navy/70">{page.directions.body}</p>
              <ul className="mt-6 space-y-2.5">
                {page.directions.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-navy/70">
                    <span className="mt-2 h-px w-4 shrink-0 bg-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={SITE.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow mt-8 text-navy"
              >
                {t.common.getDirections}
                <ExternalLink className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={0.06}>
              <p className="eyebrow mb-4 text-navy/70">{page.map.title}</p>
              <div className="overflow-hidden border border-navy/12">
                <iframe
                  title={`${SITE.name} — ${page.map.title}`}
                  src={SITE.mapEmbed}
                  className="h-[380px] w-full border-0 lg:h-[440px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <p className="mt-3 text-[12px] text-navy/65">{page.map.note}</p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}