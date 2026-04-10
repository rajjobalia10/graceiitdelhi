import { MapPinIcon, MessageCircleIcon, SearchIcon, UsersIcon } from "@/components/icons";
import { howItWorksSteps } from "@/lib/content";

const iconMap = {
  search: SearchIcon,
  users: UsersIcon,
  message: MessageCircleIcon,
  map: MapPinIcon
};

export function HowItWorks() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-content px-5">
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple">
            How It Works
          </span>
          <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Four steps to your people
          </h2>
          <p className="mt-3 max-w-md text-base text-slate-500">
            From discovery to real-world meetups — Circle makes it effortless.
          </p>
        </div>

        <ol className="flex flex-col items-center justify-between gap-10 sm:flex-row sm:items-start sm:gap-4">
          {howItWorksSteps.map((step, index) => {
            const Icon = iconMap[step.icon];

            return (
              <li
                key={step.id}
                className="relative flex flex-1 flex-col items-center"
              >
                {index < howItWorksSteps.length - 1 ? (
                  <div className="absolute left-[calc(50%+33px)] right-[calc(-50%+33px)] top-[33px] z-0 hidden h-px bg-brand-purple/20 sm:block" />
                ) : null}
                <div className="relative z-10 mb-5 flex items-center justify-center">
                  <div className="flex h-[66px] w-[66px] items-center justify-center rounded-full border-2 border-brand-purple/25">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-purple text-white">
                      <Icon size={24} strokeWidth={1.75} />
                    </div>
                  </div>
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border border-brand-purple/30 bg-white text-[10px] font-bold text-brand-purple shadow-sm">
                    {step.id}
                  </span>
                </div>
                <h3 className="mb-1.5 text-center text-base font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="max-w-[160px] text-center text-sm leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
