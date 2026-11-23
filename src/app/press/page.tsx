import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { highlights, pressByYear } from "@/lib/content";

export const metadata: Metadata = {
  title: "Press",
  description: "Features, interviews and lists about Royston G King, from 2020 to today.",
};

export default function Press() {
  return (
    <>
      <section className="ice-glow text-white">
        <div className="mx-auto max-w-[1440px] px-6 pt-36 pb-20 md:px-20 md:pt-44 md:pb-28">
          <h1 className="display rise text-[clamp(3.75rem,9vw,7.5rem)]">
            What the world
            <span className="accent block normal-case text-ice">is saying.</span>
          </h1>
          <p className="mt-8 max-w-[52ch] text-lg text-mist">
            Features, interviews and lists from 2020 to today, grouped by year.
          </p>
        </div>
        <ul className="mx-auto grid max-w-[1440px] border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <li key={h.title} className="border-b border-white/10 px-6 py-10 sm:border-r md:px-20 lg:px-10 lg:first:pl-20">
              <p className="caps text-sm text-ice">{h.label}</p>
              <p className="display mt-3 text-4xl">{h.title}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-20 md:py-28">
        {pressByYear.map((y) => (
          <details key={y.year} open={y.year === pressByYear[0].year} className="group border-b border-line">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-10 [&::-webkit-details-marker]:hidden">
              <h2 className="display text-6xl transition-colors group-hover:text-cobalt md:text-8xl">{y.year}</h2>
              <span className="text-muted">
                {y.items.length} features
                <span className="ml-3 inline-block transition-transform duration-300 group-open:rotate-45">+</span>
              </span>
            </summary>
            <ul className="flex flex-wrap gap-3 pb-12">
              {y.items.map((item, i) => {
                const inner = (
                  <>
                    <span className="font-semibold">{item.outlet}</span>
                    {item.title && <span className="text-muted">{item.title}</span>}
                    {item.href && <ArrowUpRight className="size-4 text-cobalt" />}
                  </>
                );
                const cls =
                  "inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-[15px]";
                return (
                  <li key={item.outlet + i}>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer" className={`${cls} transition-colors hover:border-cobalt`}>
                        {inner}
                      </a>
                    ) : (
                      <span className={cls}>{inner}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </details>
        ))}
      </section>

      <CtaBand title="Have a story or an event?" accent="Let's talk." />
    </>
  );
}
