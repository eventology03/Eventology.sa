export type NavItem = { type: "anchor"; href: string } | { type: "route"; href: string };

// Order matches translations.ts `nav.links` by index.
export const navItems: NavItem[] = [
  { type: "anchor", href: "#who" },
  { type: "anchor", href: "#services" },
  { type: "anchor", href: "#work" },
  { type: "anchor", href: "#contact" },
  { type: "route", href: "/tickets" },
];
