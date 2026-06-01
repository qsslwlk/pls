import { createFileRoute, Link } from "@tanstack/react-router";
import acte2 from "@/assets/acte-2.png";
import acte1 from "@/assets/acte-1.png";
import { PageShell, Container } from "@/components/site/PageShell";
import { Tag } from "@/components/site/Tag";
import { news } from "@/content/news";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PLS — Plateforme de Liaisons Situationnelles" },
      {
        name: "description",
        content:
          "Compagnie de création théâtrale contemporaine. Première création : Gilberte, comédie satirique d'Évariste Lorrain — Meilleure Lecture, Festival Splash de Mots 2026.",
      },
      { property: "og:title", content: "PLS — Plateforme de Liaisons Situationnelles" },
      {
        property: "og:description",
        content: "Compagnie de création théâtrale contemporaine. Première création : Gilberte.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const latest = news.slice(0, 3);
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
          <img
            src={acte2}
            alt="Acte II — Bureau présidentiel installé dans un open space contemporain. Décor de Gilberte."
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
          <div className="absolute inset-x-0 top-0 rule-b" />
          <Container className="relative h-full flex flex-col justify-end pb-12 md:pb-20">
            <div className="flex items-center gap-3 mb-6">
              <Tag variant="accent">Saison 2026 — Pré-production</Tag>
              <span className="label-admin text-foreground/70 hidden md:inline">
                Réf. PLS / 001
              </span>
            </div>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.92] tracking-tight max-w-[14ch] text-foreground text-shadow-hero">
              Plateforme de Liaisons Situationnelles
            </h1>
            <p className="mt-8 max-w-xl text-base md:text-lg text-foreground/80 leading-relaxed">
              Construction de situations scéniques révélant la part fictionnelle du quotidien contemporain.
            </p>
          </Container>
        </div>
      </section>

      {/* Gilberte feature */}
      <section className="rule-t rule-transparent mt-0">
        <Container className="grid md:grid-cols-12 gap-8 md:gap-12 py-20 md:py-28">
          <div className="md:col-span-5 flex flex-col">
            <p className="label-admin text-accent">Création en cours · 01</p>
            <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Gilberte
            </h2>
            <p className="mt-2 label-admin text-muted-foreground">Une pièce d'Évariste Lorrain</p>
            <div className="mt-8 flex items-center gap-2 flex-wrap">
              <Tag variant="outline">Comédie satirique</Tag>
              <Tag>2026 →</Tag>
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="font-display text-2xl md:text-3xl leading-[1.25] tracking-tight">
            Dans une start-up spécialisée en intelligence artificielle, un employé qui n’aurait jamais dû être embauché entraîne par erreur un modèle destiné à écrire le programme électoral d’une ministre en campagne.<br /><br />
            La ministre est élue. L’IA, Gilberte, entre à l’Élysée. Elle rédige des lois, prépare des discours, conseille le pouvoir, produit des récits et finit par gouverner à la place de ceux qui préfèrent ne plus avoir à penser.<br /><br />            
            Farce politique sur l’intelligence artificielle, la technocratie et la lâcheté ordinaire, Gilberte raconte l’effondrement d’une République moins vaincue par la machine que par son propre désir de ne plus décider de rien.<br />
            </p>

            <div className="mt-10 rule-t pt-6 flex items-start justify-between gap-6 flex-wrap">
              <div className="max-w-md">
                <p className="label-admin text-muted-foreground">Distinction</p>
                <p className="mt-2 text-base">
                  <span className="text-accent">●</span>{" "}
                  <span className="font-medium">Meilleure Lecture</span> — Festival Splash de Mots
                  2026
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  to="/gilberte"
                  className="label-admin px-5 py-3 bg-foreground text-background hover:bg-accent transition-colors"
                >
                  Découvrir la pièce →
                </Link>
                <Link
                  to="/compagnie"
                  className="label-admin px-5 py-3 border border-foreground/40 hover:border-accent hover:text-accent transition-colors"
                >
                  La compagnie
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Second image — atmosphere */}
      <section className="rule-t rule-transparent">
        <Container className="py-20 md:py-28 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="label-admin text-muted-foreground">Univers de la pièce · 02</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
            Un monde trop proche du nôtre pour être inventé
            </h2>
            <p className="mt-8 text-base md:text-lg text-foreground/80 leading-relaxed max-w-md">
            Team building new age, mobilier administratif, lumière froide, pouvoir hors-sol 
            et technologies omniprésentes. Gilberte se situe dans cette zone trouble 
            où l’on ne sait plus si l’on regarde une farce politique, 
            une dystopie de bureau ou une journée ordinaire au pays des start-ups.
            </p>
          </div>
          <div className="md:col-span-7">
            <figure>
              <img
                src={acte1}
                alt="Acte I — Table de réunion ovale dans un open space vide. Décor de Gilberte."
                className="w-full h-auto object-cover"
              />
              <figcaption className="mt-3 label-admin text-muted-foreground">
                Acte I · Salle de conférence · Recherche scénographique
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* News */}
      <section className="rule-t rule-transparent">
        <Container className="py-20 md:py-24">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <p className="label-admin text-muted-foreground">Bulletin · 03</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">Actualités</h2>
            </div>
            <Link to="/actualites" className="label-admin text-foreground/70 hover:text-accent">
              Toutes les actualités →
            </Link>
          </div>

          {latest.length === 0 ? (
            <p className="text-muted-foreground">Première actualité à venir.</p>
          ) : (
            <ul className="rule-t">
              {latest.map((n) => (
                <li key={n.slug} className="rule-b py-6 grid md:grid-cols-12 gap-4 items-baseline">
                  <div className="md:col-span-2 label-admin text-muted-foreground">
                    {new Date(n.date).toLocaleDateString("fr-FR", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                  <div className="md:col-span-2 label-admin text-accent">{n.type}</div>
                  <div className="md:col-span-8">
                    <p className="font-display text-2xl leading-tight">{n.title}</p>
                    <p className="mt-2 text-sm text-foreground/75 max-w-2xl">{n.excerpt}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>
    </PageShell>
  );
}
