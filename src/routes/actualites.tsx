import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Container, PageHeader } from "@/components/site/PageShell";
import { news } from "@/content/news";

export const Route = createFileRoute("/actualites")({
  head: () => ({
    meta: [
      { title: "Actualités — PLS" },
      {
        name: "description",
        content:
          "Actualités de PLS et de Gilberte : résidences, lectures, festivals, partenariats.",
      },
      { property: "og:title", content: "Actualités — PLS" },
      { property: "og:description", content: "Résidences, lectures, festivals, partenariats." },
      { property: "og:url", content: "/actualites" },
    ],
    links: [{ rel: "canonical", href: "/actualites" }],
  }),
  component: ActualitesPage,
});

function ActualitesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Bulletin"
        title="Actualités."
        intro="Résidences, lectures, festivals, distinctions et partenariats. Mis à jour au fil du projet."
      />

      <Container className="pb-12">
        {news.length === 0 ? (
          <p className="text-muted-foreground">Première actualité à venir.</p>
        ) : (
          <ul className="rule-t">
            {news.map((n) => (
              <li key={n.slug} className="rule-b py-8 grid md:grid-cols-12 gap-4 items-baseline">
                <div className="md:col-span-2 label-admin text-muted-foreground">
                  {new Date(n.date).toLocaleDateString("fr-FR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
                <div className="md:col-span-2 label-admin text-accent">{n.type}</div>
                <div className="md:col-span-8">
                  <h2 className="font-display text-3xl leading-tight">{n.title}</h2>
                  <p className="mt-3 text-foreground/80 max-w-2xl leading-relaxed">{n.excerpt}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </PageShell>
  );
}
