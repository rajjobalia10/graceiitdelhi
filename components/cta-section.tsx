import Link from "next/link";

import { SparklesIcon } from "@/components/icons";

export function CtaSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto flex max-w-content flex-col items-center px-5 text-center">
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple">
          Your people are waiting
        </span>
        <h2 className="text-balance mb-6 max-w-2xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Ready to find your{" "}
          <span className="bg-cta bg-clip-text text-transparent">tribe?</span>
        </h2>
        <p className="mb-10 max-w-md text-base leading-relaxed text-slate-500 sm:text-lg">
          Join thousands of people already meeting, connecting, and going out
          together on Circle.
        </p>
        <Link
          href="/apply"
          className="inline-flex items-center gap-2.5 rounded-full bg-cta px-10 py-4 text-base font-bold text-white shadow-glow transition-all duration-200 hover:scale-[1.03] hover:opacity-90"
        >
          <SparklesIcon size={18} strokeWidth={2} />
          Join Circle Standouts
        </Link>
        <p className="mt-5 text-xs text-slate-400">
          Free to join · No credit card required
        </p>
      </div>
    </section>
  );
}
