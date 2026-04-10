import { MapPinIcon, SparklesIcon, UsersIcon } from "@/components/icons";
import { benefits } from "@/lib/content";

const iconMap = {
  users: UsersIcon,
  map: MapPinIcon,
  sparkles: SparklesIcon
};

export function BenefitStrip() {
  return (
    <section className="bg-slate-50 py-10 md:py-14">
      <div className="mx-auto max-w-content px-5">
        <div className="rounded-[20px] bg-social px-8 py-10 shadow-social md:py-12">
          <ul className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-0">
            {benefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon];

              return (
                <li
                  key={benefit.id}
                  className="flex w-full items-center justify-center"
                >
                  <div className="flex flex-1 flex-col items-center gap-3 text-center">
                    <Icon className="text-white/75" size={36} strokeWidth={1.5} />
                    <p className="text-base font-medium leading-snug text-white">
                      {benefit.text}
                    </p>
                  </div>
                  {index < benefits.length - 1 ? (
                    <div className="mx-4 hidden h-full w-px self-stretch bg-white/20 md:block" />
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
