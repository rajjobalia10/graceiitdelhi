import { EventCard } from "@/components/event-card";
import { PageHero } from "@/components/page-hero";
import { events } from "@/lib/content";

export const metadata = {
  title: "Events"
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events Near You"
        title="Circle events built from the live landing snapshot"
        description="The original cirkle.live homepage only exposed four event cards. This expanded route turns that frozen set into a browsable, local-first events index."
        primaryHref="/apply"
        primaryLabel="Join Circle Standouts"
        secondaryHref="/groups"
        secondaryLabel="Explore Groups"
      />

      <section className="bg-slate-50 py-16 text-slate-900 md:py-20">
        <div className="mx-auto max-w-content px-5">
          <div className="grid gap-6 lg:grid-cols-2">
            {events.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
