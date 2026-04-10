import Image from "next/image";

import {
  ChevronIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  YouTubeIcon
} from "@/components/icons";
import {
  downloadLinks,
  footerCopy,
  footerGroups,
  footerLegalLinks,
  socialLinks
} from "@/lib/content";

function SocialIcon({ icon }: Readonly<{ icon: (typeof socialLinks)[number]["icon"] }>) {
  switch (icon) {
    case "instagram":
      return <InstagramIcon className="h-7 w-7" />;
    case "tiktok":
      return <TikTokIcon className="h-7 w-7" />;
    case "linkedin":
      return <LinkedInIcon className="h-7 w-7" />;
    case "youtube":
      return <YouTubeIcon className="h-7 w-7" />;
    default:
      return null;
  }
}

function DownloadButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <a href={downloadLinks[0].href} target="_blank" rel="noreferrer" className="no-line">
        <Image
          src="/assets/dice/icons/app-store.svg"
          alt="Download on the App Store"
          width={132}
          height={40}
        />
      </a>
      <a href={downloadLinks[1].href} target="_blank" rel="noreferrer" className="no-line">
        <Image
          src="/assets/dice/icons/google-play.svg"
          alt="Get it on Google Play"
          width={135}
          height={40}
        />
      </a>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-white px-4 pb-8 pt-[60px] text-black lg:px-6 lg:pb-12 lg:pt-[50px]">
      <div className="mx-auto max-w-footer">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-8">
          <div className="mb-2 lg:mb-0 lg:w-[124px]">
            <a href="/" className="no-line inline-block w-[60px] lg:w-[90px]">
              <Image
                src="/assets/dice/images/dice-fan.gif"
                alt="DICE"
                width={90}
                height={110}
                unoptimized
              />
            </a>
          </div>

          <div className="flex-1 lg:flex lg:justify-between lg:gap-6">
            {footerGroups.map((group) => (
              <details key={group.title} open className="dice-footer-group border-b border-black/10 lg:border-0">
                <summary className="dice-small-copy flex cursor-pointer list-none items-center justify-between py-6 font-bold lg:pointer-events-none lg:py-0 lg:pb-5">
                  <span>{group.title}</span>
                  <ChevronIcon className="h-6 w-6 transition-transform duration-200 lg:hidden" />
                </summary>
                <nav className="pb-2 lg:pb-0">
                  {group.links.map((link) => (
                    <div key={link.label} className="py-3 lg:py-2">
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="dice-footer-link dice-small-copy no-line"
                      >
                        {link.label}
                      </a>
                    </div>
                  ))}
                </nav>
              </details>
            ))}
          </div>
        </div>

        <div className="my-8 lg:hidden">
          <DownloadButtons />
        </div>

        <div className="flex flex-col gap-6 border-t border-black/10 pt-8 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between lg:gap-4 lg:pt-6">
          <div className="flex flex-col gap-5 lg:order-2 lg:flex-row lg:items-center lg:gap-6">
            <button type="button" className="dice-small-copy inline-flex items-center gap-2 text-left">
              <span>{footerCopy.languageLabel}</span>
              <ChevronIcon className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  title={`Follow DICE on ${link.label}`}
                  className="inline-flex h-8 w-8 items-center justify-center no-line"
                >
                  <SocialIcon icon={link.icon} />
                </a>
              ))}
            </div>

            <div className="hidden lg:block">
              <DownloadButtons />
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row lg:flex-wrap lg:items-center lg:gap-6">
            {footerLegalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="dice-small-copy no-line"
              >
                {link.label}
              </a>
            ))}
            <button type="button" className="dice-small-copy text-left">
              Cookie Settings
            </button>
          </div>

          <div className="dice-small-copy text-black/50 lg:order-3 lg:w-full lg:pt-4">
            <div className="mb-3 block lg:mb-0 lg:inline">{footerCopy.copyright}</div>
            <div className="block lg:mt-4">{footerCopy.trademark}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
