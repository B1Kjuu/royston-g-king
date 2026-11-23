import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CtaBand({ title = "Let's build something", accent = "together." }) {
  return (
    <section className="relative overflow-hidden bg-cobalt text-white">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-24 md:flex-row md:items-end md:justify-between md:px-20 md:py-32">
        <h2 className="display text-[clamp(3.5rem,9vw,8.5rem)]">
          {title}
          <span className="accent block normal-case text-deep">{accent}</span>
        </h2>
        <Link
          href="/contact"
          className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-white px-8 py-5 text-lg font-semibold text-cobalt transition-transform duration-200 active:scale-[0.97] md:self-auto"
        >
          Work with Royston
          <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
