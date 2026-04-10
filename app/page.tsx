import Link from "next/link";

import { BenefitStrip } from "@/components/benefit-strip";
import { CtaSection } from "@/components/cta-section";
import { EarlyAccessForm } from "@/components/early-access-form";
import { EventsRail } from "@/components/events-rail";
import { GroupsRail } from "@/components/groups-rail";
import { HeroOrbits } from "@/components/hero-orbits";
import { HowItWorks } from "@/components/how-it-works";
import { ArrowRightIcon, UsersIcon } from "@/components/icons";
import { siteMeta } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="flex min-h-screen items-center bg-hero pt-[60px]">
        <div className="mx-auto w-full max-w-content px-5 py-16 md:py-20 lg:py-24">
          <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:gap-8">
            <div className="flex max-w-lg flex-1 flex-col items-center text-center md:items-start md:text-left">
              <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                {siteMeta.announcement}
              </div>
              <h1 className="animate-fade-up mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Meet.{" "}
                <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Connect.
                </span>{" "}
                Go Out.
              </h1>
              <p className="animate-fade-up-delay mt-5 max-w-md text-base leading-relaxed text-white/60 sm:max-w-none sm:text-lg">
                Discover events, join tribes, meet new people — all in one
                place built for real-world connections.
              </p>
              <div className="animate-fade-up-late mt-8 flex flex-col items-center gap-4 sm:flex-row">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-purple shadow-btn transition-all duration-200 hover:bg-white/90"
                >
                  Join Circle Standouts
                  <ArrowRightIcon size={16} strokeWidth={2.5} />
                </Link>
              </div>
              <div className="animate-fade-up-late mt-6 flex items-center gap-2.5">
                <div className="flex -space-x-2" aria-hidden="true">
                  {["bg-purple-400", "bg-pink-400", "bg-indigo-400", "bg-violet-400"].map(
                    (className, index) => (
                      <div
                        key={index}
                        className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#1a0533] ${className}`}
                      >
                        <UsersIcon size={10} strokeWidth={2.1} className="text-white" />
                      </div>
                    )
                  )}
                </div>
                <p className="text-sm text-white/50">
                  <span className="font-semibold text-white">
                    {siteMeta.stat.split(" ")[0]}
                  </span>{" "}
                  people connecting
                </p>
              </div>
            </div>

            <div className="hidden flex-1 items-center justify-center md:flex">
              <HeroOrbits />
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <EventsRail />
      <GroupsRail />
      <BenefitStrip />
      <CtaSection />

      <section className="relative overflow-hidden bg-form py-24 md:py-32">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-brand-purple/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-dark/50 blur-2xl" />
        <div className="relative mx-auto flex max-w-content flex-col items-center px-5">
          <div className="mb-10 text-center">
            <span className="mb-4 inline-block rounded-full border border-brand-purple/30 bg-brand-purple/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-purple">
              Early Access
            </span>
            <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Tell us about{" "}
              <span className="bg-cta bg-clip-text text-transparent">
                yourself
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-white/45">
              Every field is required. We use this to build the right circle for
              you.
            </p>
          </div>

          <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-form backdrop-blur-glass sm:p-8">
            <EarlyAccessForm />
          </div>
        </div>
      </section>
    </>
  );
}
