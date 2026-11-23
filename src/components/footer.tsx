import Link from "next/link";
import { nav, site, socials } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-deep text-mist">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 md:grid-cols-[1fr_auto_auto] md:px-20">
        <div>
          <p className="display text-4xl text-white md:text-6xl">Royston G King</p>
          <p className="accent mt-2 text-2xl text-ice">Positive wisdom, gone viral.</p>
        </div>
        <ul className="text-[15px]">
          {nav.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="inline-block py-2.5 hover:text-white">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="text-[15px]">
          {socials.map((s) => (
            <li key={s.platform}>
              <a href={s.href} target="_blank" rel="noreferrer" className="inline-block py-2.5 hover:text-white">
                {s.platform}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto max-w-[1440px] border-t border-white/10 px-6 py-6 text-sm md:px-20">
        © 2026 {site.name}
      </div>
    </footer>
  );
}
