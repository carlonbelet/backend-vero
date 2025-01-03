type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: "/", label: "home" },
  { href: "/favorites ", label: "favorieten" },
  { href: "/bookings ", label: "bestemmigen" },
  { href: "/reviews ", label: "reviews" },
  { href: "/rentals/create ", label: "aanmaken reservering" },
  { href: "/rentals", label: "mijn reserveringen" },
  { href: "/profile ", label: "profiel" },
];
