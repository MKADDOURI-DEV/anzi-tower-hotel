import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { images } from "@/lib/images";
import { bookingHref } from "@/lib/booking";

const HERO_CSS = `
.hs5{position:relative;isolation:isolate;display:flex;flex-direction:column;justify-content:flex-end;min-height:100svh;overflow:hidden;background:#102B3A;color:#F7F4EE}
.hs5-bg{position:absolute;inset:0;z-index:-2}
.hs5-bg img{width:100%;height:100%;object-fit:cover;object-position:center}
.hs5-scrim{position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,rgba(16,43,58,.72) 0%,rgba(16,43,58,.26) 42%,rgba(16,43,58,.94) 100%)}
.hs5-inner{container:hs5/inline-size;width:100%;max-width:1400px;margin-inline:auto;padding:clamp(110px,15vh,180px) clamp(20px,2.2cqi,64px) 0;display:flex;flex-direction:column}
.hs5-head{display:flex;flex-direction:column;align-items:center;text-align:center}
.hs5-eyebrow{margin:0;font-size:11px;letter-spacing:.34em;text-transform:uppercase;color:#D8C5A5}
.hs5-title{margin:clamp(16px,2.2cqi,26px) 0 0;max-width:19ch;font-family:var(--font-heading);font-weight:400;font-size:clamp(2.5rem,1rem + 5.4cqi,5.8rem);line-height:1.03;letter-spacing:-0.015em}
.hs5-letter{display:inline;animation:hs5-wave 5.5s linear infinite;animation-delay:calc(var(--hs5-i,0)*.07s)}
@keyframes hs5-wave{0%,18%,100%{color:#F7F4EE}9%{color:#D8C5A5}}
.hs5-sub{margin:clamp(16px,1.9cqi,24px) 0 0;max-width:48ch;font-size:clamp(15px,1.05cqi,17px);line-height:1.65;color:rgba(247,244,238,.82)}
.hs5-actions{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:16px 28px;margin-top:clamp(24px,3cqi,36px)}
.hs5-btn{display:inline-flex;align-items:stretch;height:46px;background:#D8C5A5;border:1px solid #D8C5A5;color:#102B3A;text-decoration:none;overflow:hidden;transition:background-color .3s ease,border-color .3s ease}
.hs5-btn:hover{background:#F7F4EE;border-color:#F7F4EE}
.hs5-btn-label{display:inline-flex;align-items:center;padding:0 18px;font-size:11px;font-weight:500;letter-spacing:.2em;text-transform:uppercase}
.hs5-btn-divider{width:1px;align-self:stretch;background:rgba(16,43,58,.35)}
.hs5-btn-arrow{display:inline-flex;align-items:center;justify-content:center;width:46px}
.hs5-btn-arrow svg{width:16px;height:16px;transition:transform .3s ease}
.hs5-btn:hover .hs5-btn-arrow svg{transform:translateX(3px)}
.hs5-secondary{display:inline-flex;align-items:center;gap:10px;padding-bottom:6px;border-bottom:1px solid rgba(247,244,238,.35);font-size:11px;letter-spacing:.24em;text-transform:uppercase;color:rgba(247,244,238,.9);text-decoration:none;transition:border-color .3s ease,color .3s ease}
.hs5-secondary:hover{color:#fff;border-color:#fff}
.hs5-scroll{display:flex;align-items:center;justify-content:center;gap:10px;margin:clamp(18px,2.4cqi,30px) 0 clamp(8px,1.2cqi,16px);font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:rgba(247,244,238,.6)}
.hs5-scroll-line{display:block;width:1px;height:32px;background:linear-gradient(to bottom,rgba(247,244,238,.75),transparent);animation:hs5-drop 2.6s ease-in-out infinite}
@keyframes hs5-drop{0%,100%{opacity:.35;transform:scaleY(.5)}50%{opacity:1;transform:scaleY(1)}}
.hs5-gallery{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:100%;gap:clamp(8px,1.1cqi,18px);margin-top:clamp(8px,1.6cqi,20px);height:min(32cqi,420px);overflow:hidden}
.hs5-photo{align-self:stretch;min-width:0;min-height:0}
.hs5-photo--2{transform:translateY(clamp(0px,7cqi - 28px,68px))}
.hs5-photo-frame{position:relative;margin:0;width:100%;height:calc(100% + clamp(40px,9cqi,130px));border-radius:2px 2px 0 0;overflow:hidden;background:#0e2a44}
.hs5-img{display:block;width:100%;height:100%;object-fit:cover;object-position:center}
[dir="rtl"] .hs5-title{line-height:1.32;letter-spacing:normal}
@media (max-width:640px){.hs5-gallery{height:min(52cqi,260px)}.hs5-sub{max-width:34ch}}
@media (prefers-reduced-motion:reduce){.hs5-letter{animation:none;color:#F7F4EE}.hs5-scroll-line{animation:none}}
`;

export default function Hero({ lang, t }) {
  const h = t.hero;
  const reduce = useReducedMotion();
  const isRtl = t.dir === "rtl";

  let counter = 0;
  const letters = Array.from(h.title).map((ch) => (ch === " " ? { ch, i: null } : { ch, i: counter++ }));

  const rise = (delay) =>
    reduce
      ? { initial: false, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.22, 0.61, 0.36, 1] },
        };

  const strip = [
    { key: "exterior", src: images.exterior },
    { key: "pool", src: images.pool },
    { key: "suite", src: images.suite },
  ];

  return (
    <section className="hs5" aria-label={t.brand.name}>
      <style>{HERO_CSS}</style>

      <div className="hs5-bg">
        <Image src={images.hero} alt={h.imageAlt} className="h-full w-full" fittingType="fill" />
      </div>
      <div className="hs5-scrim" aria-hidden="true" />

      <div className="hs5-inner">
        <div className="hs5-head">
          <motion.p className="hs5-eyebrow" {...rise(0.05)}>
            {h.eyebrow}
          </motion.p>

          <motion.h1 className="hs5-title" {...rise(0.12)}>
            {isRtl
              ? h.title
              : letters.map((l, idx) =>
                  l.i === null ? (
                    <span key={idx}> </span>
                  ) : (
                    <span key={idx} className="hs5-letter" style={{ "--hs5-i": l.i }}>
                      {l.ch}
                    </span>
                  )
                )}
          </motion.h1>

          <motion.p className="hs5-sub" {...rise(0.24)}>
            {h.subtitle}
          </motion.p>

          <motion.div className="hs5-actions" {...rise(0.34)}>
            <a className="hs5-btn" href={bookingHref()} target="_blank" rel="noopener noreferrer">
              <span className="hs5-btn-label">{h.primary}</span>
              <span className="hs5-btn-divider" aria-hidden="true" />
              <span className="hs5-btn-arrow" aria-hidden="true">
                <svg viewBox="0 0 17.4 17.4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.3517 1.52148L14.1053 4.6806C15.9753 6.82906 15.9753 10.3126 14.1053 12.4611L11.3517 15.6202"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    opacity="0.97"
                  />
                  <path
                    d="M15.5039 8.62988L1.07414 8.62988"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                  />
                </svg>
              </span>
            </a>

            <Link to="/$lang/about" params={{ lang }} className="hs5-secondary">
              {h.secondary}
            </Link>
          </motion.div>

          <motion.div className="hs5-scroll" {...rise(0.46)}>
            <span className="hs5-scroll-line" aria-hidden="true" />
            <span>{t.common.scroll}</span>
          </motion.div>
        </div>

        <div className="hs5-gallery">
          {strip.map((photo, idx) => (
            <div key={photo.key} className={`hs5-photo hs5-photo--${idx + 1}`}>
              <motion.figure
                className="hs5-photo-frame"
                initial={reduce ? false : { opacity: 0, y: 40 }}
                animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 + idx * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <Image src={photo.src} alt={t.alt[photo.key]} className="hs5-img" fittingType="fill" />
              </motion.figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}