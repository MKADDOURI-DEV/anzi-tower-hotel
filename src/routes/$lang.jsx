import { useEffect } from "react";
import { Outlet, createFileRoute, notFound, useLocation } from "@tanstack/react-router";
import { LANGS, content } from "@/content";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import StickyBooking from "@/components/site/StickyBooking";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (!LANGS.includes(params.lang)) throw notFound();
  },
  component: LangLayout,
});

function LangLayout() {
  const { lang } = Route.useParams();
  const t = content[lang];
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
  }, [lang, t.dir]);

  return (
    <div dir={t.dir} lang={lang} className="min-h-screen bg-ivory text-navy">
      <Header lang={lang} t={t} />
      <main key={pathname} className="animate-page-in">
        <Outlet />
      </main>
      <div className="bg-navy pb-20 lg:pb-0">
        <Footer lang={lang} t={t} />
      </div>
      <StickyBooking t={t} />
    </div>
  );
}