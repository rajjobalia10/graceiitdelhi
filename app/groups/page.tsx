import { GroupCard } from "@/components/group-card";
import { PageHero } from "@/components/page-hero";
import { groups } from "@/lib/content";

export const metadata = {
  title: "Groups"
};

export default function GroupsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tribes"
        title="Browse the groups behind the Circle landing experience"
        description="The live source exposed five hardcoded tribe cards. This full route turns them into a proper groups index with local join state and detail pages."
        primaryHref="/sign-in"
        primaryLabel="Sign In"
        secondaryHref="/my-groups"
        secondaryLabel="View My Groups"
      />

      <section className="bg-slate-50 py-16 text-slate-900 md:py-20">
        <div className="mx-auto grid max-w-content gap-6 px-5 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((group) => (
            <GroupCard key={group.slug} group={group} />
          ))}
        </div>
      </section>
    </>
  );
}
