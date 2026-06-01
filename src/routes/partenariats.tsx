import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Container, PageHeader } from "@/components/site/PageShell";
import { site } from "@/content/site";

export const Route = createFileRoute("/partenariats")({
  head: () => ({
    meta: [
      { title: "Partenariats & mécénat — PLS" },
      {
        name: "description",
        content:
          "Coproduction, mécénat, accueil en résidence : modalités pour s'associer à PLS et au projet Gilberte.",
      },
      { property: "og:title", content: "Partenariats & mécénat — PLS" },
      {
        property: "og:description",
        content: "Coproduction, mécénat, accueil en résidence : s'associer à Gilberte.",
      },
      { property: "og:url", content: "/partenariats" },
    ],
    links: [{ rel: "canonical", href: "/partenariats" }],
  }),
  component: PartenariatsPage,
});

const blocks = [
  {
    n: "01",
    label: "Coproduction",
    title: "S'associer à la création",
    body: "PLS recherche des lieux de production, théâtres, scènes conventionnées, scènes nationales ou structures culturelles souhaitant accompagner la création de Gilberte. La coproduction peut prendre plusieurs formes : apport financier, accueil en résidence, préachat, programmation à la création, accompagnement technique ou mise en relation avec un territoire.",
  },
  {
    n: "02",
    label: "Mécénat",
    title: "Soutenir une fiction déjà réelle",
    body: "Entreprises, fondations et donateurs privés peuvent accompagner le développement du projet. Conventions de mécénat à élaborer au cas par cas. Reçu fiscal — TODO (sous réserve d'éligibilité).",
  },
  {
    n: "03",
    label: "Accueil en résidence",
    title: "Mettre un plateau à disposition.",
    body: "PLS recherche des temps de résidence pour finaliser le texte, travailler la scénographie, éprouver la présence d’une intelligence artificielle en scène et construire les interactions avec les comédiens et le public. Un temps de plateau permettrait de tester concrètement ce qui fait la singularité du projet : le passage d’un monde de bureaux, de procédures et d’écrans vers un espace théâtral où ces formes deviennent visibles, jouables, transformables.",
  },
];

function PartenariatsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Dossier · Partenariats"
        title="Entrer dans la situation"
        intro="Gilberte est en pré-production.
        PLS ouvre dès maintenant la conversation avec les lieux, institutions, entreprises, fondations et partenaires susceptibles d’accompagner sa première création.
        Soutenir Gilberte, ce n’est pas seulement contribuer à la production d’un spectacle.
        C’est participer à la construction d’une situation scénique contemporaine : un dispositif où se rejouent le langage managérial, la délégation aux machines, la communication politique, les procédures et les formes ordinaires d’obéissance."
      />

      <Container className="pb-8">
        <ul className="rule-t">
          {blocks.map((b) => (
            <li key={b.n} className="rule-b py-12 grid md:grid-cols-12 gap-6 md:gap-10">
              <div className="md:col-span-3 flex items-baseline gap-4">
                <span className="font-mono text-accent text-sm">{b.n}</span>
                <span className="label-admin text-muted-foreground">{b.label}</span>
              </div>
              <div className="md:col-span-9">
                <h2 className="font-display text-3xl md:text-5xl leading-tight tracking-tight">
                  {b.title}
                </h2>
                <p className="mt-6 max-w-2xl text-foreground/85 leading-relaxed text-base md:text-lg">
                  {b.body}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-8">
            <p className="label-admin text-muted-foreground">Contact dédié</p>
            <p className="mt-3 font-display text-3xl md:text-4xl leading-tight">
              Engager une discussion.
            </p>
            <p>
              Vous représentez un lieu, une institution, une entreprise, une fondation ou une structure intéressée par le projet ?
            </p>
            <p>
              Écrivez-nous pour recevoir le dossier de production, organiser une rencontre ou imaginer une forme de partenariat adaptée.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <a
              href={`mailto:${site.email}?subject=Partenariat%20Gilberte`}
              className="label-admin inline-block px-5 py-3 bg-foreground text-background hover:bg-accent transition-colors"
            >
              {site.email} →
            </a>
          </div>
        </div>
      </Container>
    </PageShell>
  );
}
