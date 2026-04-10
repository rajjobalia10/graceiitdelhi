import { PageHero } from "@/components/page-hero";
import { SignInCard } from "@/components/sign-in-card";

export const metadata = {
  title: "Sign In"
};

export default function SignInPage() {
  return (
    <>
      <PageHero
        eyebrow="Sign In"
        title="A local-only auth shell for the Circle clone"
        description="The original site linked to a dead Sign In anchor. This route replaces it with a device-local session flow so the expanded site can personalize My Groups and the application form."
        primaryHref="/groups"
        primaryLabel="Browse Groups"
      />

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-content px-5">
          <SignInCard />
        </div>
      </section>
    </>
  );
}
