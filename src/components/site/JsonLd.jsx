import { SITE } from "@/lib/site";

/** Hotel structured data for search engines. */
export default function JsonLd({ lang }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: SITE.name,
    url: `${SITE.url}/${lang}`,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.line1,
      addressLocality: "Agadir",
      postalCode: "80000",
      addressCountry: "MA",
    },
    starRating: { "@type": "Rating", ratingValue: "4" },
    numberOfRooms: 255,
    petsAllowed: false,
    amenityFeature: [
      "Three outdoor swimming pools",
      "Spa and hammam",
      "Fitness centre",
      "Restaurants and bars",
      "Meeting rooms",
      "Free Wi-Fi",
    ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}