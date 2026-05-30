import { Link } from "@tanstack/react-router";

const navItems = [
  { to: "/", label: "Accueil" },
  { to: "/compagnie", label: "Compagnie" },
  { to: "/gilberte", label: "Gilberte" },
  { to: "/equipe", label: "Equipe" },
  { to: "/actualites", label: "Actualites" },
  { to: "/partenariats", label: "Partenariats" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="rule-b">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-20 flex items-center justify-between gap-6">
        <Link to="/" className="font-display text-2xl tracking-tight">
          PLS
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="label-admin text-foreground/80 hover:text-accent transition-colors"
              activeProps={{ className: "label-admin text-accent" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
