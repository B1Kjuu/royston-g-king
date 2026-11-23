import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { contactTopics, socials } from "@/lib/content";
import { CONTACT_FORM_ENABLED } from "@/lib/flags";

export const metadata: Metadata = {
  title: "Contact",
  description: "Partnerships, speaking, advisory or press: work with Royston G King.",
};

const field =
  "w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-base text-navy placeholder:text-muted/70 disabled:cursor-not-allowed disabled:opacity-70";

export default function Contact() {
  const off = !CONTACT_FORM_ENABLED;

  return (
    <>
      <section className="ice-glow text-white">
        <div className="mx-auto max-w-[1440px] px-6 pt-36 pb-40 md:px-20 md:pt-44">
          <h1 className="display rise text-[clamp(3.75rem,9vw,7.5rem)]">
            Work with
            <span className="accent block normal-case text-ice">Royston.</span>
          </h1>
          <p className="mt-8 max-w-[48ch] text-lg text-mist">
            Partnerships, speaking, advisory or press. Tell him what you have in mind.
          </p>
        </div>
      </section>

      <section className="mx-auto -mt-24 grid max-w-[1440px] gap-8 px-6 pb-28 md:grid-cols-[1.6fr_1fr] md:px-20">
        <form className="rounded-2xl bg-white p-6 shadow-[0_30px_60px_-30px_rgb(12_27_58/0.35)] md:p-12" aria-describedby="form-status">
          {off && (
            <div id="form-status" role="status" className="mb-8 rounded-xl border border-ice bg-[#e8f3ff] px-5 py-4">
              <p className="font-semibold">Contact form coming soon</p>
              <p className="mt-1 text-muted">For now, message Royston on Instagram @roystongking or LinkedIn.</p>
            </div>
          )}
          <fieldset disabled={off} className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">
              Name
              <input name="name" autoComplete="name" placeholder="Your full name" className={field} />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Email
              <input name="email" type="email" autoComplete="email" placeholder="you@company.com" className={field} />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Company or brand
              <input name="company" autoComplete="organization" placeholder="Where you work" className={field} />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Topic
              <select name="topic" defaultValue="" className={field}>
                <option value="" disabled>
                  Choose a topic
                </option>
                {contactTopics.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold md:col-span-2">
              Message
              <textarea name="message" rows={6} placeholder="What do you have in mind?" className={field} />
            </label>
            <button
              type="submit"
              className="rounded-full bg-cobalt px-8 py-4 font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-[#3b6fff] active:scale-[0.97] disabled:bg-line disabled:text-muted md:col-span-2"
            >
              {off ? "Contact form coming soon" : "Send message"}
            </button>
          </fieldset>
        </form>

        <aside className="self-start rounded-2xl bg-navy p-8 text-white md:p-10">
          <Image
            src="/site/img16.jpg"
            alt="Royston G King"
            width={96}
            height={96}
            className="size-24 rounded-full object-cover ring-2 ring-ice"
          />
          <p className="display mt-6 text-4xl">Royston G King</p>
          <p className="mt-1 text-mist">Entrepreneur, author, speaker</p>
          <ul className="mt-8 border-t border-white/15">
            {socials.map((s) => (
              <li key={s.platform + s.handle}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 border-b border-white/15 py-4"
                >
                  <span>
                    <span className="block text-sm text-mist">{s.platform}</span>
                    <span className="font-semibold group-hover:text-ice">{s.handle}</span>
                  </span>
                  <ArrowUpRight className="size-4 text-ice" />
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </>
  );
}
