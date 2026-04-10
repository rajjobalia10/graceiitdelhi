import Image from "next/image";

import { BenefitsSection } from "@/components/benefits-section";
import { PopularEventsRail } from "@/components/popular-events-rail";
import { TicketingSection } from "@/components/ticketing-section";
import { featureBlocks, hero } from "@/lib/content";

function HeroWords() {
  return hero.title.split(" ").map((word, index) => (
    <span
      key={`${word}-${index}`}
      className="dice-word"
      style={{ animationDelay: `${250 + index * 30}ms` }}
    >
      {word}&nbsp;
    </span>
  ));
}

export default function HomePage() {
  return (
    <>
      <section className="bg-white px-4 pb-[80px] pt-[96px] md:px-6 md:pt-[108px] lg:pb-[120px] lg:pt-[132px]">
        <div className="mx-auto grid max-w-header items-center gap-8 lg:grid-cols-[minmax(0,480px)_minmax(0,1fr)] lg:gap-12">
          <div className="order-2 lg:order-1">
            <h1 className="dice-hero-heading max-w-[10ch]">
              <HeroWords />
            </h1>
            <p className="dice-body-copy mt-6 max-w-[28rem] text-black/90">{hero.body}</p>
            <div className="mt-8">
              <a
                href={hero.ctaHref}
                target="_blank"
                rel="noreferrer"
                className="dice-button dice-button-black no-line inline-flex"
              >
                {hero.ctaLabel}
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-[1800/2250] max-w-[520px] overflow-hidden rounded-[4px] bg-[#f3f3f3]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
                src={hero.videoSrc}
              />
            </div>
          </div>
        </div>
      </section>

      <PopularEventsRail />
      <TicketingSection />
      <BenefitsSection />

      <section className="bg-white px-4 pb-20 md:px-6 lg:pb-[120px]">
        <div className="mx-auto flex max-w-content flex-col gap-20 lg:gap-[120px]">
          {featureBlocks.map((block) => {
            const media = (
              <div className="relative aspect-[1080/1350] overflow-hidden rounded-[4px] bg-[#f3f3f3]">
                {block.mediaType === "image" ? (
                  <Image
                    src={block.mediaSrc}
                    alt={block.mediaAlt}
                    fill
                    sizes="(max-width: 991px) 100vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                    src={block.mediaSrc}
                  />
                )}
              </div>
            );

            const copy = (
              <div className="flex items-center">
                <div className="max-w-[400px]">
                  <h2 className="dice-heading">{block.title}</h2>
                  <p className="dice-body-copy mt-5 text-black/90">{block.body}</p>
                  {block.ctaLabel && block.ctaHref ? (
                    <div className="mt-8">
                      <a
                        href={block.ctaHref}
                        target="_blank"
                        rel="noreferrer"
                        className="dice-button dice-button-black no-line inline-flex"
                      >
                        {block.ctaLabel}
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            );

            return (
              <section
                key={block.title}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                  block.align === "left" ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {media}
                {copy}
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
}
