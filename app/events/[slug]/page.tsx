import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { EventCard } from "@/components/event-card";
import { PageHero } from "@/components/page-hero";
import { events, getEvent } from "@/lib/content";

export async function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEvent(slug);

  if (!event) {
    return {
      title: "Event not found"
    };
  }

  return {
    title: event.title,
    description: event.description
  };
}

export default async function EventDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEvent(slug);

  if (!event) {
    notFound();
  }

  const relatedEvents = events.filter((item) => item.slug !== event.slug).slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={event.tag}
        title={event.title}
        description={`${event.city}, ${event.location} · ${event.time}`}
        primaryHref="/apply"
        primaryLabel="Join Circle Standouts"
        secondaryHref="/events"
        secondaryLabel="Back to Events"
      />

      <section className="bg-slate-50 py-16 text-slate-900 md:py-20">
        <div className="mx-auto grid max-w-content gap-8 px-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-[28px] shadow-purple-xl">
            <div className="relative aspect-[4/3]">
              <Image
                src={event.image}
                alt={`${event.title} cover`}
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="route-card rounded-[28px] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple">
              {event.date}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Why this Circle event works
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              {event.longDescription}
            </p>
            <ul className="mt-6 space-y-3">
              {event.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                >
                  {highlight}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-purple"
              >
                Apply for Early Access
              </Link>
              <Link
                href="/groups"
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white/80"
              >
                Match with a Group
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-content px-5">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple">
                More Events
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
                Keep exploring
              </h2>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {relatedEvents.map((item) => (
              <EventCard key={item.slug} event={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
