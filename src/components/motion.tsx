"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import LogoLoop from "@/components/rb/LogoLoop";
import ScrollVelocity from "@/components/rb/ScrollVelocity";
import CountUp from "@/components/rb/CountUp";

// Logos cut one by one from his site's "Featured in" walls (public/logos/lNN.png).
const ids = Array.from({ length: 51 }, (_, i) => i).filter((i) => i !== 27);
const logos = ids.map((i) => ({ src: `/logos/l${String(i).padStart(2, "0")}.png`, alt: "Press outlet logo" }));
const half = Math.ceil(logos.length / 2);

export function OutletLoop() {
  return (
    <div className="space-y-8 py-10">
      <LogoLoop logos={logos.slice(0, half)} speed={60} direction="left" logoHeight={34} gap={56} pauseOnHover scaleOnHover fadeOut fadeOutColor="#060e20" />
      <LogoLoop logos={logos.slice(half)} speed={60} direction="right" logoHeight={34} gap={56} pauseOnHover scaleOnHover fadeOut fadeOutColor="#060e20" />
    </div>
  );
}

export function VelocityBand() {
  return (
    <ScrollVelocity
      texts={["Positive wisdom", "Go viral"]}
      velocity={60}
      className="display px-6 text-[clamp(3rem,9vw,8rem)] text-navy"
      separator={<span className="accent px-6 normal-case text-cobalt">✦</span>}
    />
  );
}

export function Stat({ to, suffix, label }: { to: number; suffix: string; label: string }) {
  return (
    <div>
      <p className="display text-[clamp(3rem,6vw,5.5rem)] text-cobalt">
        <CountUp to={to} duration={2} separator="," />
        {suffix}
      </p>
      <p className="accent text-2xl">{label}</p>
    </div>
  );
}

// Fades a block up the first time it scrolls into view.
export function FadeIn({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setShown(true), io.disconnect()), { rootMargin: "0px 0px -10% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform,filter] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100 blur-0" : "translate-y-8 opacity-0 blur-[6px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
