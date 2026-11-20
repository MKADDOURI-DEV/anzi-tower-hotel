import { SITE } from "./site";

const OG_LOCALE = { fr: "fr_FR", en: "en_US", ar: "ar_MA" };

/**
 * Builds per-page, per-language metadata: title, description, canonical,
 * hreflang alternates and social cards.
 */
export function pageMeta({ lang, path = "", title, description }) {
  const url = `${SITE.url}/${lang}${path}`;
  const meta = [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE.name },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:locale", content: OG_LOCALE[lang] || "fr_FR" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];

  if (SITE.ogImage) {
    meta.push({ property: "og:image", content: SITE.ogImage });
    meta.push({ name: "twitter:image", content: SITE.ogImage });
  }

  return {
    meta,
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "fr", href: `${SITE.url}/fr${path}` },
      { rel: "alternate", hrefLang: "en", href: `${SITE.url}/en${path}` },
      { rel: "alternate", hrefLang: "ar", href: `${SITE.url}/ar${path}` },
      { rel: "alternate", hrefLang: "x-default", href: `${SITE.url}/fr${path}` },
    ],
  };
}

export default pageMeta;