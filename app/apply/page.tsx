import { EarlyAccessForm } from "@/components/early-access-form";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Apply"
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Early Access"
        title="Tell Circle about yourself"
        description="This standalone route mirrors the homepage application block and persists your latest response locally so the clone behaves like a fuller product."
        secondaryHref="/sign-in"
        secondaryLabel="Sign In First"
      />

      <section className="relative overflow-hidden bg-form py-16 md:py-20">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-brand-purple/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-dark/50 blur-2xl" />
        <div className="relative mx-auto max-w-content px-5">
          <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-form backdrop-blur-glass sm:p-8">
            <EarlyAccessForm />
          </div>
        </div>
      </section>
    </>
  );
}
