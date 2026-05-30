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
    bio: "Auteur de Gilberte. Notice à compléter — TODO.",
  },
  { name: "TODO", role: "Mise en scène", bio: "Notice à compléter — TODO." },
  { name: "TODO", role: "Direction artistique", bio: "Notice à compléter — TODO." },
  { name: "TODO", role: "Production / Diffusion", bio: "Notice à compléter — TODO." },
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
