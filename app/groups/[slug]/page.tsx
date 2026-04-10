import Link from "next/link";
import { notFound } from "next/navigation";

import { EventCard } from "@/components/event-card";
import { JoinGroupButton } from "@/components/join-group-button";
import { PageHero } from "@/components/page-hero";
import { events, getGroup, groups } from "@/lib/content";

export async function generateStaticParams() {
  return groups.map((group) => ({
    slug: group.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const group = getGroup(slug);

  if (!group) {
    return {
      title: "Group not found"
    };
  }

  return {
    title: group.name,
    description: group.description
  };
}

export default async function GroupDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const group = getGroup(slug);

  if (!group) {
    notFound();
  }

  const relatedEvents = events
    .filter((event) => event.city === group.city)
    .slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={group.city}
        title={group.name}
        description={`${group.members} members · Led by ${group.leader}, ${group.age}`}
        primaryHref="/apply"
        primaryLabel="Join Circle Standouts"
        secondaryHref="/groups"
        secondaryLabel="Back to Groups"
      />

      <section className="bg-slate-50 py-16 text-slate-900 md:py-20">
        <div className="mx-auto grid max-w-content gap-8 px-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-brand-purple/10 bg-white p-8 shadow-purple-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple">
              Group Mission
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
              {group.description}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              {group.mission}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {group.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-chip px-3 py-1 text-[11px] font-semibold text-brand-purple"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="route-card rounded-[28px] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple">
              Local Membership
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Join this tribe
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              Membership is stored locally for this clone. Once you join, this
              group will appear on your My Groups route.
            </p>
            <div className="mt-8 space-y-3">
              <JoinGroupButton
                slug={group.slug}
                className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-purple"
              />
              <Link
                href="/my-groups"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white/80"
              >
                View My Groups
              </Link>
            </div>
          </div>
        </div>

        {relatedEvents.length > 0 ? (
          <div className="mx-auto mt-16 max-w-content px-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple">
              Nearby Events
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
              Pair this group with a plan
            </h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {relatedEvents.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
}
