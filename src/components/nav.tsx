"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/content";

export function Nav() {
  const path = usePathname();
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-6 md:px-20">
        <Link href="/" className="display -my-3 shrink-0 py-3 text-lg text-white md:text-2xl">
          Royston G King
        </Link>
        <nav className="flex items-center gap-4 md:gap-10">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={path === item.href ? "page" : undefined}
              className="-my-3 py-3 text-sm font-medium text-mist transition-colors hover:text-white aria-[current=page]:text-white md:text-[15px]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            data-cta
            className="hidden rounded-full bg-cobalt px-5 py-2.5 text-sm sm:inline-block font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-[#3b6fff] active:scale-[0.97]"
          >
            Work with me
          </Link>
        </nav>
      </div>
    </header>
  );
}
