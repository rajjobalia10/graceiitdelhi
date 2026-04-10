"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { ChevronIcon, CloseIcon, MenuIcon, SearchIcon } from "@/components/icons";
import { headerLinks, hero, workWithUs } from "@/lib/content";

function WorkWithUsMenu({
  mobile = false
}: Readonly<{
  mobile?: boolean;
}>) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`dice-dropdown ${mobile ? "dice-dropdown-mobile" : ""}`}
      onMouseEnter={() => !mobile && setOpen(true)}
      onMouseLeave={() => !mobile && setOpen(false)}
    >
      <button
        type="button"
        className={`dice-nav-link ${mobile ? "dice-mobile-nav-link" : ""}`}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{workWithUs.label}</span>
        <ChevronIcon
          className={`h-6 w-6 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open ? (
        <div className={`dice-dropdown-panel ${mobile ? "dice-dropdown-panel-mobile" : ""}`}>
          {workWithUs.items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="dice-dropdown-item no-line"
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`border-b border-black/5 transition-[background,box-shadow] duration-200 ${
          scrolled ? "bg-white/85 shadow-[0_8px_32px_rgba(0,0,0,0.04)]" : "bg-white/80"
        } backdrop-blur-[6px]`}
      >
        <div className="mx-auto flex max-w-header items-center gap-4 px-4 py-4 md:hidden">
          <a href="/" className="no-line">
            <Image
              src="/assets/dice/icons/dice-lockup.svg"
              alt="DICE"
              width={90}
              height={32}
              priority
            />
          </a>
          <div className="ml-auto flex items-center gap-2">
            <a
              href={hero.ctaHref.replace("/download_the_app", "/browse")}
              target="_blank"
              rel="noreferrer"
              aria-label="Search"
              className="dice-icon-button no-line"
            >
              <SearchIcon className="h-6 w-6" />
            </a>
            <a
              href={hero.ctaHref}
              target="_blank"
              rel="noreferrer"
              className="dice-button dice-button-black no-line"
            >
              {hero.ctaLabel}
            </a>
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
              className="dice-icon-button"
              onClick={() => setMobileMenuOpen((value) => !value)}
            >
              {mobileMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div className="mx-auto hidden max-w-header items-center px-4 py-4 md:flex lg:px-12 lg:py-6">
          <a href="/" className="no-line">
            <Image
              src="/assets/dice/icons/dice-lockup.svg"
              alt="DICE"
              width={106}
              height={38}
              priority
            />
          </a>

          <a
            href={hero.ctaHref.replace("/download_the_app", "/browse")}
            target="_blank"
            rel="noreferrer"
            className="dice-search-pill no-line ml-6 hidden xl:inline-flex"
          >
            <SearchIcon className="h-6 w-6" />
            <span>{hero.searchLabel}</span>
          </a>

          <nav className="ml-auto">
            <ul className="flex items-center gap-5 lg:gap-6 xl:gap-10">
              {headerLinks.slice(0, 2).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="dice-nav-link no-line"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <WorkWithUsMenu />
              </li>
              <li>
                <a
                  href={headerLinks[2].href}
                  target="_blank"
                  rel="noreferrer"
                  className="dice-nav-link no-line"
                >
                  {headerLinks[2].label}
                </a>
              </li>
            </ul>
          </nav>

          <a href={hero.ctaHref} target="_blank" rel="noreferrer" className="dice-button dice-button-black no-line ml-4">
            {hero.ctaLabel}
          </a>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div className="border-b border-black/10 bg-white/95 px-4 pb-6 pt-2 backdrop-blur-[8px] md:hidden">
          <nav className="flex flex-col gap-1">
            {headerLinks.slice(0, 2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="dice-mobile-nav-link no-line"
              >
                {link.label}
              </a>
            ))}
            <WorkWithUsMenu mobile />
            <a
              href={headerLinks[2].href}
              target="_blank"
              rel="noreferrer"
              className="dice-mobile-nav-link no-line"
            >
              {headerLinks[2].label}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
