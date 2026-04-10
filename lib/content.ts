const diceBaseUrl = "https://dice.fm";

const toDiceUrl = (path: string) => new URL(path, diceBaseUrl).toString();

export type NavLink = {
  label: string;
  href: string;
};

export type NavDropdown = NavLink & {
  items: NavLink[];
};

export type HeroContent = {
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  videoSrc: string;
  searchLabel: string;
};

export type PopularEvent = {
  title: string;
  date: string;
  venue: string;
  price: string;
  image: string;
  href: string;
};

export type TicketingColumn = {
  image: string;
  caption: string;
};

export type Benefit = {
  icon: string;
  title: string;
  image: string;
};

export type FeatureBlock = {
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  mediaAlt: string;
  align: "left" | "right";
};

export type FooterGroup = {
  title: string;
  links: NavLink[];
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "instagram" | "tiktok" | "linkedin" | "youtube";
};

export const siteMeta = {
  title: "circkle | Tickets for your kind of shows",
  description:
    "We’ll get you out more. We bring the best live events to people around the world. See what concerts, tours, and festivals are happening in your area."
};

export const hero: HeroContent = {
  title: "Welcome to the alternative",
  body:
    "Incredible live shows. Upfront pricing. Relevant recommendations. circkle makes going out easy.",
  ctaLabel: "Get the app",
  ctaHref: toDiceUrl("/download_the_app"),
  videoSrc: "/assets/dice/videos/hero.mp4",
  searchLabel: "Search by event, venue or city"
};

export const headerLinks: NavLink[] = [
  { label: "Browse events", href: toDiceUrl("/browse") },
  { label: "Get help", href: toDiceUrl("/help") },
  { label: "Log in / Sign up", href: toDiceUrl("/login") }
];

export const workWithUs: NavDropdown = {
  label: "Work with us",
  href: "#",
  items: [
    { label: "Artists", href: toDiceUrl("/partners/work-with-us/artists") },
    { label: "Venues", href: toDiceUrl("/partners/work-with-us/venues") },
    { label: "Promoters", href: toDiceUrl("/partners/work-with-us/promoters") }
  ]
};

export const popularEventsIntro = {
  title: "Trending in Berlin",
  body:
    "Check out some of the most popular events coming up in your city, from club nights and gigs to artist signings and comedy shows.",
  ctaLabel: "Browse events",
  ctaHref: toDiceUrl("/browse")
};

export const popularEvents: PopularEvent[] = [
  {
    title: "The Notwist: 'News from Planet Zombie' In-store Gig + Signing",
    date: "Fri, Mar 13",
    venue: "Rough Trade Berlin",
    price: "From €35.03",
    image: "/assets/dice/events/the-notwist.jpg",
    href: toDiceUrl(
      "/event/nvkx69-the-notwist-news-from-planet-zombie-in-store-gig-signing-13th-mar-rough-trade-berlin-berlin-tickets"
    )
  },
  {
    title: "Melanie C: 'Sweat' Album Launch Show",
    date: "Fri, May 15",
    venue: "Paradox Music Hall",
    price: "From €50",
    image: "/assets/dice/events/melanie-c.jpg",
    href: toDiceUrl(
      "/event/l8bkxb-melanie-c-sweat-album-launch-show-15th-may-paradox-music-hall-berlin-tickets"
    )
  },
  {
    title: "Geordie Greep + Corte! en Berlín | SON Estrella Galicia",
    date: "Fri, Feb 20",
    venue: "Gretchen",
    price: "€21.63",
    image: "/assets/dice/events/geordie-greep.jpg",
    href: toDiceUrl(
      "/event/l8bk6w-geordie-greep-corte-en-berln-son-estrella-galicia-20th-feb-gretchen-berlin-tickets"
    )
  },
  {
    title: "Magdalena Bay",
    date: "Sun, Feb 22",
    venue: "Columbiahalle",
    price: "From €35.33",
    image: "/assets/dice/events/magdalena-bay.jpg",
    href: toDiceUrl("/event/avmdrx-magdalena-bay-22nd-feb-columbiahalle-berlin-tickets")
  },
  {
    title: "Nooriyah",
    date: "Fri, Mar 27",
    venue: "Metropol",
    price: "From €25.04",
    image: "/assets/dice/events/nooriyah.jpg",
    href: toDiceUrl("/event/7dqqy7-nooriyah-27th-mar-metropol-berlin-tickets")
  },
  {
    title: "Nova✧Riot Vol. 3",
    date: "Sat, Feb 14",
    venue: "Kesselhaus",
    price: "€32.76",
    image: "/assets/dice/events/nova-riot.jpg",
    href: toDiceUrl("/event/eo3e3w-novariot-vol-3-14th-feb-kesselhaus-berlin-tickets")
  }
];

export const ticketingColumns: TicketingColumn[] = [
  {
    image: "/assets/dice/images/ticketing-1.png",
    caption: "Get tickets in less time than it took to read this"
  },
  {
    image: "/assets/dice/images/ticketing-2.png",
    caption: "See the full price upfront, with no surprises at checkout"
  },
  {
    image: "/assets/dice/images/ticketing-3.png",
    caption: "Personalised recommendations on your unique Home feed"
  }
];

export const benefits: Benefit[] = [
  {
    icon: "/assets/dice/icons/what-else-ticket.svg",
    title: "Get tickets to sold out shows",
    image: "/assets/dice/images/what-else-waitlist.png"
  },
  {
    icon: "/assets/dice/icons/what-else-friends.svg",
    title: "Invite friends in a few taps",
    image: "/assets/dice/images/what-else-invite.png"
  },
  {
    icon: "/assets/dice/icons/what-else-merch.svg",
    title: "Access exclusive merch",
    image: "/assets/dice/images/what-else-merch.png"
  }
];

export const featureBlocks: FeatureBlock[] = [
  {
    title: "A network of world-class venues and promoters",
    body:
      "We partner with the people and places that keep live music culture thriving around the world",
    ctaLabel: "Become a Partner",
    ctaHref: toDiceUrl("/partners"),
    mediaType: "image",
    mediaSrc: "/assets/dice/images/partners.png",
    mediaAlt: "Collage of circkle venue and promoter partners",
    align: "right"
  },
  {
    title: "Familiar favs, new crushes",
    body:
      "Easily find and follow your favourite artists, and we’ll recommend more based on your impeccable taste",
    mediaType: "video",
    mediaSrc: "/assets/dice/videos/artists.mp4",
    mediaAlt: "Looping artist discovery reel",
    align: "left"
  },
  {
    title: "Loved by millions",
    body:
      "You said, “ticket purchasing revolution, the best gig ticket app, refreshing, reassuring, stress-free, 10/10, kind, caring, outstanding, easy, best support, can’t praise this app enough”. We blush.",
    ctaLabel: "Get the app",
    ctaHref: toDiceUrl("/download_the_app"),
    mediaType: "video",
    mediaSrc: "/assets/dice/videos/fans.mp4",
    mediaAlt: "Looping fan testimonials reel",
    align: "right"
  }
];

export const footerGroups: FooterGroup[] = [
  {
    title: "Our company",
    links: [
      { label: "About circkle", href: toDiceUrl("/about") },
      { label: "Careers", href: toDiceUrl("/jobs") },
      {
        label: "Diversity, equity & inclusion",
        href: toDiceUrl("/diversity-equity-inclusion")
      }
    ]
  },
  {
    title: "Fan support",
    links: [
      { label: "Get help", href: toDiceUrl("/help") },
      { label: "FAQs", href: "https://dicefm.zendesk.com/hc/" },
      { label: "Request a refund", href: toDiceUrl("/help/event_refund") }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: toDiceUrl("/blog") },
      { label: "Press", href: toDiceUrl("/press") },
      { label: "Partners", href: toDiceUrl("/partners") }
    ]
  }
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://www.linkedin.com/in/shubham-shashwat-86514520b/", icon: "instagram" },
  { label: "TikTok", href: "https://www.linkedin.com/in/shubham-shashwat-86514520b/", icon: "tiktok" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shubham-shashwat-86514520b/",
    icon: "linkedin"
  },
  { label: "YouTube", href: "https://www.linkedin.com/in/shubham-shashwat-86514520b/", icon: "youtube" }
];

export const downloadLinks: NavLink[] = [
  { label: "iOS", href: "https://itunes.apple.com/app/id898358948" },
  { label: "Android", href: "https://play.google.com/store/apps/details?id=fm.dice" }
];

export const footerLegalLinks: NavLink[] = [
  { label: "Privacy Policy", href: toDiceUrl("/privacy_policy.html") },
  { label: "Terms of Use", href: toDiceUrl("/terms_and_conditions.html") },
  { label: "Purchase Terms", href: toDiceUrl("/ticket_purchase_terms.html") }
];

export const footerCopy = {
  languageLabel: "English (United States)",
  copyright: "© circkle FM Holdings Ltd",
  trademark:
    "circkle and The Fan logo are registered trademarks of circkle FM Holdings Ltd."
};
