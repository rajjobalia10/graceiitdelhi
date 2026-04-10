export const shubhamLinkedIn =
  "https://www.linkedin.com/in/shubham-shashwat-86514520b/";

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Step = {
  id: number;
  icon: "search" | "users" | "message" | "map";
  title: string;
  description: string;
};

export type Benefit = {
  id: number;
  icon: "sparkles" | "map" | "users";
  text: string;
};

export type EventItem = {
  slug: string;
  title: string;
  city: string;
  location: string;
  time: string;
  date: string;
  tag: string;
  image: string;
  description: string;
  longDescription: string;
  highlights: string[];
};

export type GroupItem = {
  slug: string;
  name: string;
  leader: string;
  age: number;
  members: number;
  city: string;
  avatarColor: string;
  tags: string[];
  description: string;
  mission: string;
};

export type AboutSection = {
  title: string;
  body: string;
};

export const siteMeta = {
  title: "Circle",
  description:
    "Meet. Connect. Go Out. Circle is a local-first social discovery site inspired by the current cirkle.live launch experience.",
  announcement: "Now live — join the waitlist",
  stat: "2,400+ people connecting"
};

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: shubhamLinkedIn
  },
  {
    label: "Instagram",
    href: shubhamLinkedIn
  },
  {
    label: "X",
    href: shubhamLinkedIn
  }
];

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Groups", href: "/groups" },
  { label: "My Groups", href: "/my-groups" },
  { label: "About", href: "/about" }
];

export const howItWorksSteps: Step[] = [
  {
    id: 1,
    icon: "search",
    title: "Discover",
    description: "Browse events and groups happening around you right now."
  },
  {
    id: 2,
    icon: "users",
    title: "Join a Tribe",
    description: "Find your people — communities built around shared interests."
  },
  {
    id: 3,
    icon: "message",
    title: "Connect & Chat",
    description: "Break the ice, make plans, and start real conversations."
  },
  {
    id: 4,
    icon: "map",
    title: "Meet IRL",
    description: "Take it offline — show up, meet up, and build real bonds."
  }
];

export const benefits: Benefit[] = [
  {
    id: 1,
    icon: "users",
    text: "Meet like-minded people"
  },
  {
    id: 2,
    icon: "map",
    text: "Explore your city"
  },
  {
    id: 3,
    icon: "sparkles",
    text: "Never go alone"
  }
];

export const events: EventItem[] = [
  {
    slug: "sunset-rooftop-mixer",
    title: "Sunset Rooftop Mixer",
    city: "Kolkata",
    location: "Park Street",
    time: "Sat, Apr 12 · 6:00 PM",
    date: "Saturday evening",
    tag: "Social",
    image: "/assets/circle/events/sunset-rooftop-mixer.jpg",
    description:
      "A golden-hour social mixer with city views, small bites, and easy conversations.",
    longDescription:
      "Circle's frozen Kolkata social card becomes a full detail page here: a rooftop meetup designed for warm intros, casual conversations, and low-pressure plans for the rest of the night.",
    highlights: [
      "Golden-hour rooftop setting",
      "Small-group intros to keep things low-pressure",
      "Perfect first Circle meetup for new members"
    ]
  },
  {
    slug: "indie-music-jam-night",
    title: "Indie Music Jam Night",
    city: "Mumbai",
    location: "Bandra West",
    time: "Sun, Apr 13 · 7:30 PM",
    date: "Sunday night",
    tag: "Music",
    image: "/assets/circle/events/indie-music-jam-night.jpg",
    description:
      "A live indie session for people who want new music, new friends, and a shared night out.",
    longDescription:
      "Built from the live landing page card, this route expands the jam-night experience into a destination page with richer copy, a sharper call to action, and Circle's local-first styling.",
    highlights: [
      "Live indie atmosphere",
      "Music-first crowd with conversation prompts",
      "Ideal for meeting fellow night-out planners"
    ]
  },
  {
    slug: "tech-founders-meetup",
    title: "Tech Founders Meetup",
    city: "Bangalore",
    location: "Indiranagar",
    time: "Fri, Apr 18 · 5:00 PM",
    date: "Friday evening",
    tag: "Tech",
    image: "/assets/circle/events/tech-founders-meetup.jpg",
    description:
      "A focused founder and builder meetup for high-signal conversations and future collaborations.",
    longDescription:
      "This expanded event route turns the single landing-page card into a fuller Circle moment for operators, builders, and people who want sharper social energy than a generic mixer.",
    highlights: [
      "Founder-to-founder networking",
      "Structured intros without a stiff format",
      "Strong fit for startup and AI communities"
    ]
  },
  {
    slug: "dawn-yoga-in-the-park",
    title: "Dawn Yoga in the Park",
    city: "Delhi",
    location: "Lodhi Garden",
    time: "Sat, Apr 19 · 6:30 AM",
    date: "Saturday morning",
    tag: "Wellness",
    image: "/assets/circle/events/dawn-yoga-in-the-park.jpg",
    description:
      "An early-morning wellness meetup for movement, calm, and a lighter way to meet people.",
    longDescription:
      "The live Cirkle card is localized here as a fully navigable Circle detail page for people who prefer morning energy, wellness rituals, and calmer group dynamics.",
    highlights: [
      "Outdoor sunrise session",
      "Conversation-friendly post-class hangout",
      "A softer entry point into Circle communities"
    ]
  }
];

export const groups: GroupItem[] = [
  {
    slug: "night-owls",
    name: "Night Owls",
    leader: "Aryan Mehta",
    age: 24,
    members: 128,
    city: "Kolkata",
    avatarColor: "bg-violet-500",
    tags: ["Music", "Late Nights", "Jazz"],
    description:
      "For people who like music-led evenings, spontaneous plans, and a city that wakes up after dark.",
    mission:
      "Night Owls brings together music-first people who want easy late-night plans without the awkward first step."
  },
  {
    slug: "tech-founders",
    name: "Tech Founders",
    leader: "Rohan Das",
    age: 26,
    members: 97,
    city: "Bangalore",
    avatarColor: "bg-indigo-500",
    tags: ["Startups", "AI", "Networking"],
    description:
      "A high-signal builder circle for founders, operators, and people growing ambitious things.",
    mission:
      "Tech Founders is built for members who want real-world connection around startups, AI, and operator energy."
  },
  {
    slug: "foodies-united",
    name: "Foodies United",
    leader: "Sneha Kapoor",
    age: 23,
    members: 305,
    city: "Mumbai",
    avatarColor: "bg-orange-400",
    tags: ["Food", "Cafes", "Street Eats"],
    description:
      "For cafe-hopping, tasting menus, local gems, and finding people who always know where to eat next.",
    mission:
      "Foodies United turns food plans into an easy social ritual for members who connect best over shared tables."
  },
  {
    slug: "fitness-tribe",
    name: "Fitness Tribe",
    leader: "Dev Nair",
    age: 25,
    members: 176,
    city: "Delhi",
    avatarColor: "bg-green-500",
    tags: ["Gym", "Running", "Wellness"],
    description:
      "Workout partners, recovery routines, and morning accountability without the pressure.",
    mission:
      "Fitness Tribe is for people who want their social life and health routines to reinforce each other."
  },
  {
    slug: "bookworm-club",
    name: "Bookworm Club",
    leader: "Meera Iyer",
    age: 21,
    members: 89,
    city: "Bangalore",
    avatarColor: "bg-rose-500",
    tags: ["Books", "Poetry", "Art"],
    description:
      "A quieter culture circle for readers, artists, and people who prefer thoughtful conversation.",
    mission:
      "Bookworm Club creates slower, more intentional meetups around books, art, poetry, and conversation."
  }
];

export const aboutSections: AboutSection[] = [
  {
    title: "Built for real-world connection",
    body:
      "Circle keeps the live source's core promise intact: discover people, events, and groups built around shared energy, then move from browsing to showing up."
  },
  {
    title: "Low-pressure social discovery",
    body:
      "The product language stays simple and human. It favors local plans, small-group momentum, and easy first steps over heavy onboarding or artificial gamification."
  },
  {
    title: "A local-first social layer",
    body:
      "This expanded clone turns the launch-page concept into a fuller website with working events, groups, sign-in, and joined-group views while staying faithful to the original style."
  }
];

export const maritalStatusOptions = [
  { value: "", label: "Select status" },
  { value: "unmarried", label: "Unmarried" },
  { value: "married", label: "Married" },
  { value: "complicated", label: "It's Complicated" }
];

export function getEvent(slug: string) {
  return events.find((event) => event.slug === slug);
}

export function getGroup(slug: string) {
  return groups.find((group) => group.slug === slug);
}
