export type NavItem = { type: "anchor"; hash: string } | { type: "route"; href: string };

// Order matches translations.ts `nav.links` by index.
// Anchor items always link to "/" with a hash — they only resolve to sections
// that exist on the homepage, so this keeps them working from any page.
export const navItems: NavItem[] = [
  { type: "anchor", hash: "who" },
  { type: "anchor", hash: "services" },
  { type: "anchor", hash: "work" },
  { type: "anchor", hash: "contact" },
  { type: "route", href: "/tickets" },
];
