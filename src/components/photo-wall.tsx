"use client";

import { useEffect, useState } from "react";

import Masonry from "@/components/rb/Masonry";
import { photos } from "@/lib/content";

export function PhotoWall() {
  const [small, setSmall] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const on = () => setSmall(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return (
    <Masonry
      items={small ? photos.slice(0, 12) : photos}
      columns={small ? 2 : "auto"}
      columnWidth={240}
      gap={small ? 10 : 14}
      radius={16}
      animateFrom="bottom"
      blurToFocus
      revealOnScroll
      hoverEffect="lift"
      captions="hover"
      lightbox
    />
  );
}
