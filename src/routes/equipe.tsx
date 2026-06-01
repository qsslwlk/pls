import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Container, PageHeader } from "@/components/site/PageShell";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Équipe — PLS" },
      {
        name: "description",
        content: "L'équipe artistique de PLS — Plateforme de Liaisons Situationnelles.",
      },
      { property: "og:title", content: "Équipe — PLS" },
      { property: "og:description", content: "L'équipe artistique de PLS." },
      { property: "og:url", content: "/equipe" },
    ],
    links: [{ rel: "canonical", href: "/equipe" }],
  }),
  component: EquipePage,
});

const members = [
  {
    name: "Évariste Lorrain",
    role: "Auteur",
    bio: "Évariste Lorrain est l'auteur de Gilberte, sa première pièce. Il écrit à partir de ce qu'il connaît de l'intérieur : il travaille dans la science des données et la publicité numérique, au contact quotidien des modèles, des tableaux de bord et de la langue d'entreprise que la pièce met en scène. Gilberte naît de cette position — non pas une dénonciation venue du dehors, mais le regard d'un témoin qui fabrique lui-même une part de ce qu'il observe.",
  },
  { name: "Évariste Lorrain & Mely Bourjac", role: "Mise en scène", bio: "La mise en scène de Gilberte est portée par Évariste Lorrain, auteur de la pièce, et Mely Bourjac, cinéaste et productrice. Ce binôme croise l'écriture et l'image : un plateau saturé d'écrans, de caméras et d'une intelligence artificielle qui joue en direct, où la frontière entre la scène et sa captation fait partie du sujet. Mely Bourjac a réuni la distribution et accompagne la création depuis ses premières lectures." },
  { name: "Production / Diffusion — PLS", role: "Production / Diffusion", bio: "La production de Gilberte est assurée par PLS (Plateforme de Liaisons Situationnelles, association loi 1901). La diffusion est gérée en interne pendant la pré-production." },
];

function EquipePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Dossier · Équipe"
        title="Une équipe en formation."
        intro="L'équipe artistique de Gilberte se constitue au fil de la pré-production. Les notices ci-dessous seront complétées progressivement."
      />

      <Container className="pb-12">
        <ul className="rule-t">
          {members.map((m, i) => (
            <li
              key={`${m.name}-${i}`}
              className="rule-b py-10 grid md:grid-cols-12 gap-6 items-baseline"
            >
              <div className="md:col-span-2 label-admin text-accent">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="md:col-span-3">
                <p className="label-admin text-muted-foreground">{m.role}</p>
                <p className="mt-2 font-display text-3xl leading-tight">{m.name}</p>
              </div>
              <p className="md:col-span-7 text-foreground/80 leading-relaxed">{m.bio}</p>
            </li>
          ))}
        </ul>
      </Container>
    </PageShell>
  );
}
