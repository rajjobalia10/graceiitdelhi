import Image from "next/image";
import Link from "next/link";

import { ClockIcon, MapPinIcon } from "@/components/icons";
import type { EventItem } from "@/lib/content";

type EventCardProps = {
  event: EventItem;
  compact?: boolean;
};

export function EventCard({ event, compact = false }: EventCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[20px] bg-white shadow-purple-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-purple-xl">
      <Link href={`/events/${event.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">View {event.title}</span>
      </Link>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={event.image}
          alt={`${event.title} event cover`}
          fill
          sizes={compact ? "(max-width: 768px) 75vw, 340px" : "(max-width: 768px) 100vw, 420px"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm">
          {event.tag}
        </span>
        <div className="absolute inset-x-0 bottom-0 bg-event px-4 pb-4 pt-10">
          <h3 className="mb-2 text-base font-bold leading-snug text-white">
            {event.title}
          </h3>
          <div className="flex flex-col gap-1 text-xs text-white/75">
            <div className="flex items-center gap-1.5">
              <MapPinIcon size={12} strokeWidth={2} />
              <span className="truncate">
                {event.city}, {event.location}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <ClockIcon size={12} strokeWidth={2} />
              <span>{event.time}</span>
            </div>
          </div>
        </div>
      </div>
      {!compact ? (
        <div className="relative z-20 space-y-3 border-t border-brand-purple/10 px-5 py-5 text-sm text-slate-600">
          <p>{event.description}</p>
          <div className="flex flex-wrap gap-2">
            {event.highlights.slice(0, 2).map((highlight) => (
              <span
                key={highlight}
                className="rounded-full bg-chip px-3 py-1 text-[11px] font-semibold text-brand-purple"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}
