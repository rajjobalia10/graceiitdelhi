"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import { benefits } from "@/lib/content";

export function BenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    railRef.current?.scrollBy({
      left: railRef.current.clientWidth * 0.9 * direction,
      behavior: "smooth"
    });
  };

  return (
    <section className="bg-white px-4 py-20 md:px-6 lg:py-[120px]">
      <div className="mx-auto max-w-content">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="dice-heading">What else?</h2>
          <div className="hidden items-center gap-2 md:flex lg:hidden">
            <button type="button" className="dice-icon-button" onClick={() => scroll(-1)} aria-label="Previous benefits">
              <ArrowLeftIcon className="h-6 w-6" />
            </button>
            <button type="button" className="dice-icon-button" onClick={() => scroll(1)} aria-label="Next benefits">
              <ArrowRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="hidden gap-12 lg:grid lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <button
                key={benefit.title}
                type="button"
                className="flex w-full items-start gap-4 text-left no-underline"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
              >
                <Image src={benefit.icon} alt="" width={33} height={33} />
                <span
                  className="font-favorit text-[30px] leading-[32px] tracking-[-0.02em] transition-opacity duration-200"
                  style={{ opacity: index === activeIndex ? 1 : 0.3 }}
                >
                  {benefit.title}
                </span>
              </button>
            ))}
          </div>

          <div className="relative aspect-[1080/1350] overflow-hidden rounded-[4px] bg-[#f4f4f4]">
            {benefits.map((benefit, index) => (
              <Image
                key={benefit.title}
                src={benefit.image}
                alt={benefit.title}
                fill
                sizes="640px"
                className={`object-cover transition-opacity duration-300 ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>

        <div ref={railRef} className="dice-scroll-rail flex gap-4 overflow-x-auto pb-2 lg:hidden">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="min-w-[280px] snap-start md:min-w-[340px]">
              <div className="mb-4 flex items-center gap-3">
                <Image src={benefit.icon} alt="" width={33} height={33} />
                <h3 className="font-favorit text-[24px] leading-[26px] tracking-[-0.02em]">
                  {benefit.title}
                </h3>
              </div>
              <div className="relative aspect-[1080/1350] overflow-hidden rounded-[4px] bg-[#f4f4f4]">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  sizes="(max-width: 767px) 280px, 340px"
                  className="object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
