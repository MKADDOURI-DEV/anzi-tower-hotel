import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import BookLink from "./BookLink";

/** Persistent booking bar on small screens. */
export default function StickyBooking({ t }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ivory/15 bg-navy/95 backdrop-blur-md lg:hidden">
      <div className="flex items-stretch gap-3 px-4 py-3">
        <a
          href={SITE.phoneHref}
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-ivory/30 text-ivory"
          aria-label={`${t.common.call} ${SITE.phone}`}
        >
          <Phone className="h-4 w-4" strokeWidth={1.5} />
        </a>
        <BookLink variant="sand" className="h-12 flex-1 py-0">
          {t.common.bookStay}
        </BookLink>
      </div>
    </div>
  );
}