"use client";

import { useRef } from "react";

import { GroupCard } from "@/components/group-card";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { groups } from "@/lib/content";

export function GroupsRail() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    railRef.current?.scrollBy({
      left: direction === "left" ? -264 : 264,
      behavior: "smooth"
    });
  };

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-content px-5">
        <div className="mb-10 flex items-center justify-between gap-6">
          <div>
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple">
              Tribes
            </span>
            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Find your tribe
            </h2>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollByAmount("left")}
              aria-label="Scroll left"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-purple/25 text-brand-purple transition-colors duration-200 hover:bg-brand-light"
            >
              <ChevronLeftIcon size={20} strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount("right")}
              aria-label="Scroll right"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-purple/25 text-brand-purple transition-colors duration-200 hover:bg-brand-light"
            >
              <ChevronRightIcon size={20} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={railRef}
        className="flex gap-6 overflow-x-auto px-5 pb-4 md:px-[calc((100vw-1040px)/2+20px)]"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        {groups.map((group) => (
          <div key={group.slug} className="w-[240px] flex-shrink-0 snap-start">
            <GroupCard group={group} />
          </div>
        ))}
        <div className="w-1 flex-shrink-0" aria-hidden="true" />
      </div>
    </section>
  );
}
