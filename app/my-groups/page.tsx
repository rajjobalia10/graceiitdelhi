import { MyGroupsView } from "@/components/my-groups-view";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "My Groups"
};

export default function MyGroupsPage() {
  return (
    <>
      <PageHero
        eyebrow="My Groups"
        title="Your locally joined Circle tribes"
        description="The original site linked to a dead MyGroups anchor. This expanded route turns it into a working personal view powered by localStorage."
        primaryHref="/groups"
        primaryLabel="Explore Groups"
        secondaryHref="/sign-in"
        secondaryLabel="Update Session"
      />

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-content px-5">
          <MyGroupsView />
        </div>
      </section>
    </>
  );
}
