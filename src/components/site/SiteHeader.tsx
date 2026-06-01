import { Link } from "@tanstack/react-router";

const navItems = [
  {
    to: "/",
    label: "Accueil",
    title: "Accueil de PLS — Plateforme de Liaisons Situationnelles",
  },
  {
    to: "/compagnie",
    label: "Compagnie",
    title:
      "La Compagnie PLS — théâtre de situations, enquêtes du quotidien contemporain et recherches scéniques",
  },
  {
    to: "/gilberte",
    label: "Gilberte",
    title:
      "Gilberte — pièce de théâtre satirique d’Évariste Lorrain sur l’intelligence artificielle, le pouvoir et la servitude volontaire",
  },
  {
    to: "/equipe",
    label: "Équipe",
    title:
      "Équipe artistique et collaborateurs de PLS — Plateforme de Liaisons Situationnelles",
  },
  {
    to: "/actualites",
    label: "Actualités",
    title:
      "Actualités de PLS, lectures, étapes de création et pré-production de Gilberte",
  },
  {
    to: "/partenariats",
    label: "Partenariats",
    title:
      "Partenariats, mécénat et collaborations autour de PLS et de la pièce Gilberte",
  },
  {
    to: "/contact",
    label: "Contact",
    title:
      "Contacter PLS — compagnie théâtrale et plateforme de création situationnelle",
  },
] as const;

export function SiteHeader() {
  return (
    <header className="rule-b">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-20 flex items-center justify-between gap-6">
        <Link
          to="/"
          className="font-display text-2xl tracking-tight"
          title="PLS — Plateforme de Liaisons Situationnelles"
          aria-label="Accueil — PLS, Plateforme de Liaisons Situationnelles"
        >
          PLS
        </Link>

        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Navigation principale"
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              title={item.title}
              className="label-admin text-foreground/80 hover:text-accent transition-colors"
              activeProps={{
                className: "label-admin text-accent",
                "aria-current": "page",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
