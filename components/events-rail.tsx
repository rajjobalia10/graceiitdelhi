import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";
import { events } from "@/lib/content";
import { EventCard } from "@/components/event-card";

export function EventsRail() {
  return (
    <section className="bg-brand-light/30 py-20 md:py-28">
      <div className="mx-auto max-w-content px-5">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple">
              Events Near You
            </span>
            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              What&apos;s happening around you
            </h2>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-brand-purple transition-colors duration-200 hover:text-brand-dark"
          >
            See all
            <ArrowRightIcon size={15} strokeWidth={2.5} />
          </Link>
        </div>
      </div>

      <div
        className="flex gap-5 overflow-x-auto px-5 pb-4 md:px-[calc((100vw-1040px)/2+20px)]"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        {events.map((event) => (
          <div
            key={event.slug}
            className="w-[300px] flex-shrink-0 snap-start sm:w-[320px] md:w-[340px]"
          >
            <EventCard event={event} compact />
          </div>
        ))}
        <div className="w-1 flex-shrink-0" aria-hidden="true" />
      </div>
    </section>
  );
}
