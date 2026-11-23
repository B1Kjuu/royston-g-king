import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/rb/ScrollReveal";
import { Glare, QuoteBand, HeroHeadline, HeroRays, HeroStack, OfferSwap, PhotoGallery, StarButton } from "@/components/fx";
import { CtaBand } from "@/components/cta-band";
import { FadeIn, OutletLoop, Stat, VelocityBand } from "@/components/motion";
import { headshot, offers, plaques, roles, socials } from "@/lib/content";

const stats = [
  { to: 15, suffix: "M+", label: "followers" },
  { to: 1, suffix: "B+", label: "views" },
  { to: 1, suffix: "M+", label: "community members" },
  { to: 100, suffix: "+", label: "companies helped" },
];

const heroPhotos = [
  { src: "/site/img41.jpg", alt: "Royston G King with Will Smith" },
  { src: "/site/img19.jpg", alt: "Royston G King with Gordon Ramsay" },
  { src: "/site/img35.jpg", alt: "Royston G King with Tim Cook" },
  { src: "/site/img36.jpg", alt: "Royston G King with Paris Hilton" },
  { src: "/site/img05.jpg", alt: "Royston G King at an event" },
];

export default function Home() {
  return (
    <>
      {/* Hero: his name, the promise, and the proof in photos */}
      <section className="ice-glow relative overflow-hidden text-white">
        <HeroRays />
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-16 px-6 pt-32 pb-20 lg:grid-cols-[1.1fr_1fr] md:px-20 md:pt-40 md:pb-28">
          <div className="rise">
            <div className="flex items-center gap-4">
              <Image
                src={headshot}
                alt="Royston G King"
                width={300}
                height={300}
                priority
                className="size-20 rounded-full object-cover ring-2 ring-ice md:size-24"
              />
              <div>
                <p className="text-lg font-semibold">Royston G King</p>
                <p className="caps text-sm text-ice">Forbes 30 Under 30 · Monaco</p>
              </div>
            </div>
            <HeroHeadline />
            <p className="mt-8 max-w-[34ch] text-lg text-mist md:text-xl">
              And help people and brands grow wealth and fame.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <StarButton href="/contact">
                <span className="inline-flex items-center gap-2 px-3 py-1.5">
                  Work with me <ArrowRight className="size-4" />
                </span>
              </StarButton>
              <a
                href="https://www.youtube.com/@RoystonGKingSuccess"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ice/40 px-7 py-4 font-semibold transition-colors duration-200 hover:border-ice hover:bg-white/5"
              >
                Watch on YouTube
              </a>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[420px]">
            <div className="absolute inset-10 rounded-full bg-ice/25 blur-3xl" aria-hidden />
            <HeroStack items={heroPhotos} />
          </div>
        </div>

        {/* Real outlet logos from his site */}
        <div className="relative border-t border-white/10 bg-deep">
          <p className="caps pt-10 text-center text-sm text-mist">Featured in</p>
          <OutletLoop />
        </div>
      </section>

      {/* The statement, revealed word by word on scroll */}
      <section className="mx-auto max-w-[1440px] px-6 py-28 md:px-20 md:py-40">
        <ScrollReveal
          baseOpacity={0.12}
          enableBlur
          baseRotation={2}
          blurStrength={6}
          highlightColor="#1f5bff"
          textClassName="text-[clamp(2rem,4.6vw,4.25rem)] leading-[1.08] tracking-[-0.02em] font-semibold"
        >
          Serial entrepreneur. Two-time Amazon best-selling author. TEDx speaker and investor. 15 million followers, a billion views, a community of a million, and over a hundred companies and nonprofits helped to grow.
        </ScrollReveal>
        <div className="mt-20 grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 100}>
              <Stat to={s.to} suffix={s.suffix} label={s.label} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="overflow-hidden border-y border-line bg-white py-10">
        <VelocityBand />
      </section>

      {/* Roles, with his YouTube plaques */}
      <section className="border-t border-line bg-white">
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-6 py-24 md:px-20 md:py-32 lg:grid-cols-[1fr_1.1fr]">
          <FadeIn className="overflow-hidden rounded-2xl">
            <Glare>
            <Image src={plaques} alt="Royston G King's YouTube award plaques" width={1400} height={1400} className="h-full w-full object-cover" />
            </Glare>
          </FadeIn>
          <div>
            <h2 className="display text-[clamp(3rem,6vw,5.5rem)]">
              Built on work,
              <span className="accent block normal-case text-cobalt">shared for free.</span>
            </h2>
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {roles.map((r) => (
                <li key={r.title} className="grid gap-1 py-5 md:grid-cols-[1fr_1.2fr] md:gap-8">
                  <h3 className="text-xl font-semibold">{r.title}</h3>
                  <p className="text-muted">{r.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Ways to work together */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-20 md:py-32">
          <h2 className="display text-[clamp(3rem,6vw,5.5rem)]">
            Bring Royston <span className="accent normal-case text-ice">in.</span>
          </h2>
          <div className="mt-14 grid items-center gap-16 lg:grid-cols-[1.3fr_1fr]">
          <FadeIn><ul className="border-t border-white/15">
            {offers.map((o) => (
              <li key={o.title}>
                <Link
                  href="/contact"
                  className="group grid items-center gap-3 border-b border-white/15 py-8 transition-colors duration-300 hover:bg-white/[0.03] md:grid-cols-[1.1fr_1.4fr_auto] md:gap-10 md:py-10"
                >
                  <span className="display text-5xl transition-colors duration-300 group-hover:text-ice md:text-7xl">{o.title}</span>
                  <span className="max-w-[40ch] text-lg text-mist">{o.body}</span>
                  <span className="inline-flex items-center gap-2 font-semibold text-ice">
                    {o.cta}
                    <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul></FadeIn>
          <div className="relative hidden h-[460px] lg:block">
            <OfferSwap />
          </div>
          </div>
        </div>
      </section>

      {/* Moments: his own photos */}
      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-20">
          <h2 className="display text-[clamp(3rem,6vw,5.5rem)]">
            In the room <span className="accent normal-case text-cobalt">with</span>
          </h2>
          <div className="mt-12">
            <PhotoGallery />
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <QuoteBand />

      {/* Follow */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-20 md:py-32">
        <h2 className="display text-[clamp(3rem,6vw,5.5rem)]">
          15M+ people <span className="accent normal-case text-cobalt">already follow.</span>
        </h2>
        <FadeIn><ul className="mt-12 grid gap-x-10 md:grid-cols-2">
          {socials.map((s) => (
            <li key={s.platform + s.handle}>
              <a href={s.href} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-4 border-b border-line py-6">
                <span>
                  <span className="caps block text-sm text-muted">{s.platform}</span>
                  <span className="mt-1 block text-2xl font-semibold tracking-[-0.02em] transition-colors group-hover:text-cobalt">{s.handle}</span>
                </span>
                <span className="flex items-center gap-3 text-muted">
                  <span className="hidden text-sm sm:inline">{s.note}</span>
                  <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cobalt" />
                </span>
              </a>
            </li>
          ))}
        </ul></FadeIn>
      </section>

      <CtaBand pressure />
    </>
  );
}
