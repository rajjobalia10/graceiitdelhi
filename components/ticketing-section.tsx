"use client";

import Image from "next/image";
import { useRef } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import { ticketingColumns } from "@/lib/content";

export function TicketingSection() {
  const railRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    railRef.current?.scrollBy({
      left: railRef.current.clientWidth * 0.9 * direction,
      behavior: "smooth"
    });
  };

  return (
    <section className="bg-black px-4 py-20 text-white md:px-6 lg:py-[120px]">
      <div className="mx-auto max-w-content">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="dice-heading text-white">Weirdly easy ticketing</h2>
          <div className="flex items-center gap-2 md:hidden">
            <button type="button" className="dice-icon-button dice-icon-button-dark" onClick={() => scroll(-1)} aria-label="Previous ticketing panel">
              <ArrowLeftIcon className="h-6 w-6" />
            </button>
            <button type="button" className="dice-icon-button dice-icon-button-dark" onClick={() => scroll(1)} aria-label="Next ticketing panel">
              <ArrowRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div
          ref={railRef}
          className="dice-scroll-rail flex gap-5 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible"
        >
          {ticketingColumns.map((column) => (
            <article key={column.caption} className="min-w-[280px] snap-start md:min-w-0">
              <div className="relative aspect-square overflow-hidden rounded-[4px] bg-[#111]">
                <Image
                  src={column.image}
                  alt={column.caption}
                  fill
                  sizes="(max-width: 767px) 280px, (max-width: 1279px) 33vw, 320px"
                  className="object-cover"
                />
              </div>
              <p className="dice-body-copy mt-6 max-w-[280px] text-white">{column.caption}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
