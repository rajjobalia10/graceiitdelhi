import { aboutSections } from "@/lib/content";
import { BenefitStrip } from "@/components/benefit-strip";
import { CtaSection } from "@/components/cta-section";
import { HowItWorks } from "@/components/how-it-works";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Circle"
        title="From a single launch page to a fuller social discovery website"
        description="The live source framed Cirkle as a place to meet, connect, and go out. This expanded route keeps that mission intact while turning a dead About link into a real destination."
        primaryHref="/apply"
        primaryLabel="Join Circle Standouts"
        secondaryHref="/events"
        secondaryLabel="Explore Events"
      />

      <section className="bg-slate-50 py-16 text-slate-900 md:py-20">
        <div className="mx-auto grid max-w-content gap-6 px-5 md:grid-cols-3">
          {aboutSections.map((section) => (
            <article
              key={section.title}
              className="rounded-[28px] border border-brand-purple/10 bg-white p-6 shadow-purple-md"
            >
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                {section.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <HowItWorks />
      <BenefitStrip />
      <CtaSection />
    </>
  );
}
