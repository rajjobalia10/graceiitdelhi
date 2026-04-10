import Link from "next/link";

import { InstagramIcon, LinkedinIcon, XIcon } from "@/components/icons";
import { navItems, socialLinks } from "@/lib/content";

const iconMap = {
  LinkedIn: LinkedinIcon,
  Instagram: InstagramIcon,
  X: XIcon
};

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0718]">
      <div className="mx-auto flex max-w-content flex-col gap-10 px-5 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <div className="mb-3 text-2xl font-extrabold tracking-tight text-white">
            Circle
          </div>
          <p className="text-sm leading-relaxed text-white/55">
            A local-first social discovery experience inspired by the current
            cirkle.live launch page and expanded into a full website with
            working routes, joined groups, and a persistent application flow.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Navigate
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link className="transition-colors hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Social
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.label as keyof typeof iconMap];

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${link.label} profile`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition-all duration-200 hover:border-brand-purple/60 hover:bg-white/10 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-white/40">
              Every social destination routes to Shubham’s LinkedIn until more
              owner profiles are provided.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
