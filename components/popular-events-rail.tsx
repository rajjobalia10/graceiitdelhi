"use client";

import Image from "next/image";
import { useRef } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import { popularEvents, popularEventsIntro } from "@/lib/content";

export function PopularEventsRail() {
  const railRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    railRef.current?.scrollBy({
      left: railRef.current.clientWidth * 0.88 * direction,
      behavior: "smooth"
    });
  };

  return (
    <section className="bg-white px-4 py-[75px] md:px-6 lg:py-[150px]">
      <div className="mx-auto max-w-content">
        <div className="mb-9 flex items-end justify-between gap-4">
          <div className="max-w-[650px]">
            <h2 className="dice-heading mb-4">{popularEventsIntro.title}</h2>
            <p className="dice-body-copy max-w-[620px]">{popularEventsIntro.body}</p>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <button type="button" className="dice-icon-button" onClick={() => scroll(-1)} aria-label="Previous events">
              <ArrowLeftIcon className="h-6 w-6" />
            </button>
            <button type="button" className="dice-icon-button" onClick={() => scroll(1)} aria-label="Next events">
              <ArrowRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div ref={railRef} className="dice-scroll-rail flex gap-4 overflow-x-auto pb-2 md:gap-5">
          {popularEvents.map((event) => (
            <a
              key={event.href}
              href={event.href}
              target="_blank"
              rel="noreferrer"
              className="no-line min-w-[280px] snap-start md:min-w-[320px] lg:min-w-[340px]"
            >
              <article className="group">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[4px] bg-[#f2f2f2]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 767px) 280px, (max-width: 1279px) 320px, 340px"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="pt-4">
                  <h3 className="dice-body-copy font-bold">{event.title}</h3>
                  <p className="dice-small-copy mt-2 text-black/80">
                    {event.date} · {event.venue}
                  </p>
                  <p className="dice-small-copy mt-1 text-black/60">{event.price}</p>
                </div>
              </article>
            </a>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <a
            href={popularEventsIntro.ctaHref}
            target="_blank"
            rel="noreferrer"
            className="dice-button dice-button-black no-line inline-flex"
          >
            {popularEventsIntro.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
