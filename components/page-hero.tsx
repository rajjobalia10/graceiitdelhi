import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: PageHeroProps) {
  return (
    <section className="route-page bg-hero">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-5 py-20 md:py-24">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-white/80">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          {eyebrow}
        </div>
        <div className="max-w-3xl">
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            {description}
          </p>
        </div>
        {(primaryHref || secondaryHref) && (
          <div className="flex flex-col gap-4 sm:flex-row">
            {primaryHref && primaryLabel ? (
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-purple shadow-btn transition-all duration-200 hover:bg-white/90"
              >
                {primaryLabel}
                <ArrowRightIcon size={15} strokeWidth={2.3} />
              </Link>
            ) : null}
            {secondaryHref && secondaryLabel ? (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/85 transition-colors duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
