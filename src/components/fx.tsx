"use client";

// Client wrappers around the vendored ReactBits components, tuned to his brand.
import { useRef, useSyncExternalStore, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import LightRays from "@/components/rb/LightRays";
import RotatingText from "@/components/rb/RotatingText";
import SplitText from "@/components/rb/SplitText";
import Stack from "@/components/rb/Stack";
import CardSwap, { Card } from "@/components/rb/CardSwap";
import CircularGallery from "@/components/rb/CircularGallery";
import TextPressure from "@/components/rb/TextPressure";
import StarBorder from "@/components/rb/StarBorder";
import ClickSpark from "@/components/rb/ClickSpark";
import SpotlightCard from "@/components/rb/SpotlightCard";
import GlareHover from "@/components/rb/GlareHover";
import ScrollFloat from "@/components/rb/ScrollFloat";
import ShinyText from "@/components/rb/ShinyText";
import Particles from "@/components/rb/Particles";
import { FadeIn } from "@/components/motion";
import { offers, photos } from "@/lib/content";

// Some ReactBits pieces use Math.random() while rendering, which static prerender rejects.
// They render on the client only; the server sends a plain fallback with the same content.
const noop = () => () => {};
function useMounted() {
  return useSyncExternalStore(noop, () => true, () => false);
}

export function HeroRays() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <LightRays
        raysOrigin="top-center"
        raysColor="#7cc8ff"
        raysSpeed={0.8}
        lightSpread={0.9}
        rayLength={1.4}
        followMouse
        mouseInfluence={0.08}
        noiseAmount={0.05}
        opacity={0.85}
      />
    </div>
  );
}

export function HeroHeadline() {
  return (
    <h1 className="display mt-10 text-[clamp(3.75rem,8vw,7.5rem)]">
      <SplitText text="I make positive wisdom" tag="span" splitType="chars" effect="rise" trigger="load" delay={30} className="block" textAlign="left" />
      <RotatingAccent />
    </h1>
  );
}

function RotatingAccent() {
  const mounted = useMounted();
  const cls = "accent -ml-[0.08em] mt-2 inline-flex overflow-hidden pt-[0.04em] pb-[0.3em] pl-[0.08em] pr-[0.04em] text-[1.1em] normal-case leading-[1.05] text-ice";
  if (!mounted) return <span className={cls}>go viral.</span>;
  return (
      <RotatingText
        texts={["go viral.", "grow wealth.", "build fame."]}
        effect="slide"
        rotationInterval={2600}
        staggerDuration={0.02}
        mainClassName={cls}
      />
  );
}

export function HeroStack({ items }: { items: { src: string; alt: string }[] }) {
  return (
    <Stack
      layout="pile"
      autoplay
      autoplayDelay={3200}
      pauseOnHover
      sendToBackOnClick
      radius={20}
      frame={6}
      frameColor="#ffffff"
      shadow
      cards={items.map((p) => (
        <Image key={p.src} src={p.src} alt={p.alt} width={600} height={600} className="pointer-events-none size-full object-cover" />
      ))}
    />
  );
}

export function StarButton({ href, children, external = false }: { href: string; children: ReactNode; external?: boolean }) {
  const mounted = useMounted();
  if (!mounted)
    return (
      <a href={href} className="inline-flex rounded-full bg-cobalt px-4 py-3 font-semibold text-white">
        {children}
      </a>
    );
  return (
    <StarBorder
      as="a"
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      color="#7cc8ff"
      backgroundColor="#1f5bff"
      textColor="#ffffff"
      radius={999}
      theme="dark"
      hover="brighten"
      className="font-semibold"
    >
      {children}
    </StarBorder>
  );
}

export function OfferSwap() {
  return (
    <CardSwap width={420} height={300} cardDistance={50} verticalDistance={60} delay={4000} pauseOnHover theme="dark">
      {offers.map((o) => (
        <Card key={o.title} className="flex flex-col justify-end bg-gradient-to-br from-cobalt to-navy p-8 text-white">
          <p className="display text-6xl">{o.title}</p>
          <p className="mt-3 text-mist">{o.body}</p>
        </Card>
      ))}
    </CardSwap>
  );
}

export function PhotoGallery() {
  const ref = useRef<HTMLDivElement>(null);
  // The gallery moves on arrow keys; the buttons send those keys to it.
  const go = (key: "ArrowLeft" | "ArrowRight") => {
    const root = ref.current?.firstElementChild as HTMLElement | null;
    root?.dispatchEvent(new KeyboardEvent("keydown", { key, bubbles: true }));
  };
  const btn =
    "grid size-12 place-items-center rounded-full border border-line bg-white text-navy shadow-sm transition-[background-color,color,transform] duration-200 hover:bg-cobalt hover:text-white active:scale-95";
  return (
    <div>
      <div ref={ref} className="h-[420px] md:h-[620px]">
        <CircularGallery
          items={photos.map((p) => ({ image: p.img, text: p.title ?? "", alt: p.alt }))}
          bend={2}
          textColor="#0c1b3a"
          borderRadius={0.06}
          scrollEase={0.05}
          showTitles
          autoScroll={0.4}
        />
      </div>
      <div className="mt-4 flex justify-center gap-3">
        <button type="button" aria-label="Previous photo" onClick={() => go("ArrowLeft")} className={btn}>
          <ChevronLeft className="size-5" />
        </button>
        <button type="button" aria-label="Next photo" onClick={() => go("ArrowRight")} className={btn}>
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}

export function CtaPressure() {
  return (
    <div className="h-[120px] md:h-[220px]">
      <TextPressure text="LET'S BUILD" textColor="#ffffff" pressureColor="#7cc8ff" weight width italic={false} minFontSize={48} />
    </div>
  );
}

export function Sparks({ children }: { children: ReactNode }) {
  const mounted = useMounted();
  if (!mounted) return <>{children}</>;
  return (
    <ClickSpark sparkColor={["#7cc8ff", "#1f5bff"]} sparkCount={10} sparkRadius={22} shape="star">
      {children}
    </ClickSpark>
  );
}

export function Spotlight({ children, className = "" }: { children: ReactNode; className?: string }) {
  const mounted = useMounted();
  if (!mounted) return <div className={className}>{children}</div>;
  return (
    <SpotlightCard theme="dark" spotlightColor="rgba(124, 200, 255, 0.28)" className={className}>
      {children}
    </SpotlightCard>
  );
}

export function Glare({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <GlareHover width="100%" height="100%" background="transparent" borderRadius="16px" borderColor="transparent" glareColor="#ffffff" glareOpacity={0.35} className={className}>
      {children}
    </GlareHover>
  );
}

// Pull quote: particles drift behind, line one scatters into place on scroll,
// line two blurs in and catches a travelling light.
export function QuoteBand() {
  return (
    <section className="relative isolate overflow-hidden bg-deep px-6 py-32 text-center text-white md:py-48">
      <div className="absolute inset-0 -z-10 opacity-70" aria-hidden>
        <Particles
          particleCount={220}
          particleSpread={12}
          speed={0.08}
          particleColors={["#7cc8ff", "#1f5bff", "#ffffff"]}
          moveParticlesOnHover
          particleHoverFactor={0.6}
          alphaParticles
          particleBaseSize={90}
          disableRotation={false}
        />
      </div>
      <div className="absolute inset-x-0 top-1/2 -z-10 mx-auto h-64 max-w-3xl -translate-y-1/2 rounded-full bg-cobalt/25 blur-[120px]" aria-hidden />
      <blockquote className="accent mx-auto max-w-[22ch] text-[clamp(2.75rem,6.4vw,6rem)] leading-[1.02]">
        <ScrollFloat
          effect="scatter"
          splitBy="chars"
          order="center"
          fromColor="#7cc8ff"
          scrollStart="top bottom-=10%"
          scrollEnd="center center"
          stagger={0.02}
          textClassName="accent"
        >
          “One of the world’s most
        </ScrollFloat>
        <FadeIn delay={200}>
          <ShinyText
            text="sought-after strategists.”"
            color="#7cc8ff"
            shineColor="#ffffff"
            speed={2.6}
            delay={1.2}
            glow={0.6}
            className="accent -mb-[0.22em] px-[0.08em] pb-[0.22em] leading-[1.1]"
          />
        </FadeIn>
      </blockquote>
      <p className="caps mt-10 text-sm text-mist">As described in the press</p>
    </section>
  );
}
