// All site copy and data lives here, so it can be edited without touching components.

export const site = {
  name: "Royston G King",
  url: "https://royston-g-king.vercel.app",
  description:
    "Royston G King makes positive wisdom go viral, and helps people and brands grow wealth and fame.",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: "15M+", label: "followers" },
  { value: "1B+", label: "views" },
  { value: "1M+", label: "community members" },
  { value: "100+", label: "companies and nonprofits helped" },
];

// Logos load from /public/logos/<slug>.svg when present, otherwise a styled wordmark shows.
export const featured = [
  { name: "Forbes", slug: "forbes" },
  { name: "Business Insider", slug: "business-insider" },
  { name: "Bloomberg", slug: "bloomberg" },
  { name: "Rolling Stone", slug: "rolling-stone" },
  { name: "Fast Company", slug: "fast-company" },
  { name: "Entrepreneur", slug: "entrepreneur" },
  { name: "GQ", slug: "gq" },
  { name: "USA Today", slug: "usa-today" },
];

export const roles = [
  { title: "Serial entrepreneur", body: "Founder behind brands and a community of over a million members." },
  { title: "2x Amazon best-selling author", body: "Two books that turn short lessons into long-term habits." },
  { title: "TEDx and keynote speaker", body: "Talks on mindset, growth and going viral." },
  { title: "Investor and advisor", body: "Backs and advises founders building what comes next." },
];

// CONFIRM with Royston: his current site lists roles, not services.
export const offers = [
  {
    title: "Partnerships",
    body: "Brand campaigns and content made for an audience of 15M+.",
    cta: "Start a partnership",
    topic: "partnership",
  },
  {
    title: "Keynotes",
    body: "Talks for events and teams on mindset, growth and attention.",
    cta: "Book a talk",
    topic: "speaking",
  },
  {
    title: "Advisory",
    body: "Strategy for founders and brands that want to scale attention.",
    cta: "Ask about advisory",
    topic: "advisory",
  },
];

// Photo slots stay empty until Royston sends his own photos.
export const moments = [
  "Gordon Ramsay",
  "Will Smith",
  "Mark Cuban",
  "Gary Vee",
  "Michelle Yeoh",
  "Steve Chen",
  "Paris Hilton",
  "Tim Cook",
];

export const socials = [
  { platform: "YouTube", handle: "@RoystonGKingSuccess", note: "Long-form lessons", href: "https://www.youtube.com/@RoystonGKingSuccess" },
  { platform: "YouTube Clips", handle: "@RoystonGKing", note: "Short clips", href: "https://www.youtube.com/@RoystonGKing" },
  { platform: "Instagram", handle: "@roystongking", note: "Daily posts", href: "https://www.instagram.com/roystongking" },
  { platform: "TikTok", handle: "@roystongking", note: "Quick wisdom", href: "https://www.tiktok.com/@roystongking" },
  { platform: "Facebook", handle: "Royston G King Club", note: "1M+ members", href: "https://www.facebook.com/groups/roystongkingclub" },
  { platform: "LinkedIn", handle: "royston-g-king", note: "Business updates", href: "https://www.linkedin.com/in/royston-g-king" },
];

export const highlights = [
  { label: "Monaco, 2022", title: "Forbes 30 Under 30" },
  { label: "New York", title: "Times Square billboard" },
  { label: "Author", title: "2x Amazon best seller" },
  { label: "Speaker", title: "TEDx and keynotes" },
];

// Source: roystongking.com/about-us-page (Nov 2026). Article URLs still to be added (replace Drive links).
export type PressItem = { outlet: string; title?: string; href?: string };
export const pressByYear: { year: string; items: PressItem[] }[] = [
  {
    year: "2023–24",
    items: [
      { outlet: "USA Today", title: "2024 Top Entrepreneurs" },
      { outlet: "LA Weekly", title: "Top 10 Entrepreneurs" },
      { outlet: "Men's Journal", title: "Top 20 Entrepreneurs" },
      { outlet: "OK Magazine", title: "Top 20 Dynamic Entrepreneurs of 2024" },
      { outlet: "MSN", title: "Top 20 Entrepreneurs to Watch 2024" },
      { outlet: "Forbes Brunei" },
      { outlet: "Fox Interviewer", title: "30 Under 30" },
      { outlet: "High Flyers 50", title: "Global Icons Award 2024" },
      { outlet: "WSFL TV" },
      { outlet: "Britishpedia" },
      { outlet: "BoldJourney" },
      { outlet: "CanvasRebel" },
    ],
  },
  {
    year: "2022",
    items: [
      { outlet: "Forbes Monaco", title: "How he mastered social media" },
      { outlet: "VentureBeat", title: "Top investor" },
      { outlet: "Rolling Stone", title: "12 Business leaders" },
      { outlet: "Fast Company", title: "16 Business experts and leaders" },
      { outlet: "The Star", title: "Prodigy" },
      { outlet: "BFM Radio", title: "Scaling a business empire" },
      { outlet: "The Street", title: "Boldest and most original thinkers" },
      { outlet: "GQ South Africa", title: "Most influential" },
      { outlet: "Business Insider Africa", title: "Most influential" },
      { outlet: "Entrepreneur", title: "Top 10 Entrepreneurs" },
      { outlet: "Businessmint", title: "40 Under 40" },
      { outlet: "Forbes Monaco", title: "30 Under 30" },
    ],
  },
  {
    year: "2021",
    items: [
      { outlet: "The Jerusalem Post", title: "Already achieved the impossible at 21" },
      { outlet: "Maxim", title: "Top young entrepreneur" },
      { outlet: "Haute Living", title: "Among the youngest and most successful" },
      { outlet: "Fortune India", title: "Self-made at just 21" },
      { outlet: "Flaunt", title: "Brands are lining up" },
      { outlet: "LA Weekly", title: "Unstoppable force" },
      { outlet: "Yahoo", title: "Revolutionizing the world" },
      { outlet: "New York Weekly", title: "Microcosm of humanity's genius" },
      { outlet: "The Good Men Project", title: "Ultimate icon of success" },
      { outlet: "Ocean Drive", title: "Fastest-growing millionaire" },
      { outlet: "SF Weekly", title: "Most accomplished 21-year-old" },
      { outlet: "Latin Post", title: "Self-made millionaire at 21" },
    ],
  },
  {
    year: "2020",
    items: [
      { outlet: "Forbes", title: "Luxury by being affordable" },
      { outlet: "Thrive Global" },
      { outlet: "Bloomberg" },
      { outlet: "Business Insider" },
      { outlet: "Yahoo Finance" },
      { outlet: "AP News" },
      { outlet: "BuzzFeed" },
      { outlet: "Forbes Poland" },
      { outlet: "Kivo Daily" },
      { outlet: "Disrupt Magazine" },
      { outlet: "NY Weekly" },
      { outlet: "Fox" },
    ],
  },
];

export const contactTopics = ["Partnership", "Speaking", "Advisory", "Media / Press", "Other"];

// Images from his own site (roystongking.com), saved in /public/site.
export const headshot = "/site/img16.jpg"; // his site's share image (300x300 original)
export const logoWalls = ["/site/img01.png", "/site/img02.png"];
export const plaques = "/site/img32.jpg";
export const forbesArticle = "/site/img14.jpg";

// Caption only the faces we are sure of; the rest show without names.
const captions: Record<string, string> = {
  "19": "Gordon Ramsay",
  "41": "Will Smith",
  "35": "Tim Cook",
  "36": "Paris Hilton",
};
const photoIds = [
  "41", "19", "35", "36", "05", "21", "22", "15", "24", "27", "33", "34", "37", "38", "39",
  "42", "29", "30", "31", "40", "43", "44", "45", "46", "47", "48", "49", "50", "51",
  "17", "18", "20", "23", "25", "26", "03", "04", "07", "08",
];
export const photos = photoIds.map((id) => ({
  id,
  img: `/site/img${id}.jpg`,
  title: captions[id],
  alt: captions[id] ? `Royston G King with ${captions[id]}` : "Royston G King at an event",
}));
