import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { LANGS } from "@/content";
import { SITE } from "@/lib/site";
import BookLink from "./BookLink";

const LANG_LABEL = { fr: "FR", en: "EN", ar: "AR" };

export default function Header({ lang, t }) {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const rest = pathname.replace(/^\/(fr|en|ar)(?=\/|$)/, "");
  const solid = scrolled || open;

  const to = (path) => ({ to: path ? `/$lang${path}` : "/$lang", params: { lang } });
  const isActive = (path) => (path === "" ? rest === "" || rest === "/" : rest.startsWith(path));

  const items = [
    { key: "home", path: "", label: t.nav.home },
    { key: "about", path: "/about", label: t.nav.about },
    { key: "stay", path: "/rooms", label: t.nav.stay },
    { key: "dining", path: "/dining", label: t.nav.dining },
    { key: "wellness", path: "/wellness", label: t.nav.wellness },
    { key: "activities", path: "/activities", label: t.nav.activities },
    { key: "meetings", path: "/meetings", label: t.nav.meetings },
    { key: "contact", path: "/contact", label: t.nav.contact },
  ];

  const stayLinks = [
    { label: t.nav.rooms, path: "/rooms" },
    { label: t.nav.apartments, path: "/apartments" },
    { label: t.nav.gallery, path: "/gallery" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
          solid ? "border-b border-navy/10 bg-ivory/95 text-navy backdrop-blur-md" : "text-ivory"
        )}
      >
        <div className="container-page flex h-20 items-center justify-between gap-6 lg:h-24">
          <Link {...to("")} className="flex shrink-0 items-baseline gap-2.5" aria-label={SITE.name}>
            <span className="font-heading whitespace-nowrap text-[1.45rem] leading-none tracking-[0.01em] sm:text-[1.6rem]">
              {t.brand.name}
            </span>
            <span className="hidden whitespace-nowrap text-[9px] uppercase tracking-[0.34em] opacity-70 sm:inline xl:hidden">
              {t.brand.sub}
            </span>
          </Link>

          <nav className="hidden min-w-0 items-center gap-3 xl:flex 2xl:gap-6" aria-label={t.nav.menu}>
            {items.map((item) =>
              item.key === "stay" ? (
                <div key={item.key} className="group relative">
                  <Link
                    {...to("/rooms")}
                    className={cn(
                      "flex items-center gap-1.5 whitespace-nowrap py-2 text-[11px] uppercase tracking-[0.2em] transition-opacity",
                      isActive("/rooms") || isActive("/apartments") ? "opacity-100" : "opacity-70 hover:opacity-100"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
                  </Link>
                  <div className="invisible absolute start-0 top-full w-56 translate-y-2 border border-navy/10 bg-ivory p-2 text-navy opacity-0 shadow-[0_20px_50px_-30px_rgba(16,43,58,0.6)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {stayLinks.map((s) => (
                      <Link
                        key={s.path}
                        {...to(s.path)}
                        className="block px-3 py-2.5 text-[11px] uppercase tracking-[0.18em] text-navy/70 transition-colors hover:bg-sand/40 hover:text-navy"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.key}
                  {...to(item.path)}
                  className={cn(
                    "relative whitespace-nowrap py-2 text-[11px] uppercase tracking-[0.2em] transition-opacity",
                    isActive(item.path) ? "opacity-100" : "opacity-70 hover:opacity-100"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-0 bottom-0 h-px origin-left transition-transform duration-300",
                      solid ? "bg-navy" : "bg-ivory",
                      isActive(item.path) ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </Link>
              )
            )}
          </nav>

          <div className="flex shrink-0 items-center gap-4">
            <div className="hidden items-center gap-3 whitespace-nowrap text-[10px] uppercase tracking-[0.2em] lg:flex">
              {LANGS.map((code) => (
                <Link
                  key={code}
                  {...to(rest)}
                  params={{ lang: code }}
                  className={cn(
                    "transition-opacity",
                    code === lang ? "opacity-100 underline underline-offset-4" : "opacity-60 hover:opacity-100"
                  )}
                  aria-current={code === lang ? "true" : undefined}
                >
                  {LANG_LABEL[code]}
                </Link>
              ))}
            </div>

            <BookLink variant={solid ? "navy" : "sand"} className="hidden px-5 py-3 lg:inline-flex">
              {t.nav.book}
            </BookLink>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center border border-current/30 transition-colors hover:bg-current/10 xl:hidden"
              aria-label={t.nav.menu}
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-navy text-ivory xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-page flex h-20 items-center justify-between">
              <span className="font-heading text-[1.45rem] leading-none">{t.brand.name}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center border border-ivory/30 transition-colors hover:bg-ivory/10"
                aria-label={t.nav.close}
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>

            <nav className="container-page flex-1 overflow-y-auto pb-8" aria-label={t.nav.menu}>
              <ul className="border-t border-ivory/15">
                {items.map((item, i) => (
                  <motion.li
                    key={item.key}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
                    className="border-b border-ivory/15"
                  >
                    <Link
                      {...to(item.path)}
                      className="flex items-center justify-between py-4 font-heading text-[1.6rem] leading-none"
                    >
                      {item.label}
                      <span className="text-[10px] uppercase tracking-[0.2em] text-sand/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </motion.li>
                ))}
                {stayLinks.map((s, i) => (
                  <li key={s.path} className="border-b border-ivory/15">
                    <Link
                      {...to(s.path)}
                      className="flex items-center justify-between py-3.5 ps-6 text-[11px] uppercase tracking-[0.2em] text-ivory/70"
                    >
                      {s.label}
                      <span className="text-[10px] text-sand/50">{String(i + 1).padStart(2, "0")}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-5 text-[11px] uppercase tracking-[0.24em]">
                {LANGS.map((code) => (
                  <Link
                    key={code}
                    {...to(rest)}
                    params={{ lang: code }}
                    className={cn(code === lang ? "text-sand underline underline-offset-4" : "text-ivory/60")}
                  >
                    {LANG_LABEL[code]}
                  </Link>
                ))}
              </div>

              <a href={SITE.phoneHref} className="mt-6 flex items-center gap-3 text-sm text-ivory/70">
                <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                {SITE.phone}
              </a>
            </nav>

            <div className="border-t border-ivory/15 p-5">
              <BookLink variant="sand" className="w-full py-4">
                {t.common.bookStay}
              </BookLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}