"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { CloseIcon, MenuIcon } from "@/components/icons";
import { navItems } from "@/lib/content";
import { clearSession, getSession, SESSION_EVENT } from "@/lib/storage";

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sessionName, setSessionName] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const syncSession = () => {
      setSessionName(getSession()?.name ?? null);
    };

    syncSession();
    window.addEventListener(SESSION_EVENT, syncSession);
    window.addEventListener("storage", syncSession);

    return () => {
      window.removeEventListener(SESSION_EVENT, syncSession);
      window.removeEventListener("storage", syncSession);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 transition-all duration-200 ${
          isScrolled ? "navbar-glass-scrolled" : "navbar-glass"
        }`}
      >
        <div className="mx-auto flex h-[60px] max-w-content items-center justify-between px-5">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight text-white"
          >
            Circle
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-active={isActive}
                  className="link-underline text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            {sessionName ? (
              <>
                <Link
                  href="/my-groups"
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/15"
                >
                  {sessionName.split(" ")[0]}
                </Link>
                <button
                  type="button"
                  onClick={clearSession}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/75 transition-colors hover:border-white/20 hover:text-white"
                >
                  Log out
                </button>
              </>
            ) : (
              <Link
                href="/sign-in"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-purple shadow-btn transition-all duration-200 hover:bg-white/90"
              >
                Sign In
              </Link>
            )}
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white md:hidden"
          >
            {isMenuOpen ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </header>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-40 bg-black/60 md:hidden">
          <div className="ml-auto flex h-full w-[86vw] max-w-sm flex-col border-l border-white/10 bg-[#14052b] px-6 pb-8 pt-24 shadow-2xl">
            <div className="space-y-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-base font-semibold text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              {sessionName ? (
                <div className="space-y-3">
                  <Link
                    href="/my-groups"
                    className="block rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-brand-purple"
                  >
                    View My Groups
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      clearSession();
                      setIsMenuOpen(false);
                    }}
                    className="w-full rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/80"
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <Link
                  href="/sign-in"
                  className="block rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-brand-purple"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
