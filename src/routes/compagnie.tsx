import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Container, PageHeader } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/compagnie")({
  head: () => ({
    meta: [
      { title: "La compagnie — PLS" },
      {
        name: "description",
        content:
          "PLS — Plateforme de Liaisons Situationnelles. Association de production théâtrale. Mission, vision artistique et valeurs.",
      },
      { property: "og:title", content: "La compagnie — PLS" },
      { property: "og:description", content: "Mission, vision artistique et valeurs de PLS." },
      { property: "og:url", content: "/compagnie" },
    ],
    links: [{ rel: "canonical", href: "/compagnie" }],
  }),
  component: CompagniePage,
});

function CompagniePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Dossier · La compagnie"
        title="Une plateforme pour des liaisons situationnelles"
        intro="PLS construit des situations scéniques pour révéler le spectacle ordinaire de la vie contemporaine.
        La Compagnie travaille à partir des formes mêmes du quotidien afin d’en faire apparaître la dimension fictionnelle et coercitive.
        Ses créations placent le spectateur face aux rôles qu’il connaît déjà, ceux qu’il joue au travail, dans l’espace public ou devant les images.
        "
      />

      <Container>
        <SectionHeading number="01" label="Mission" title="Faire théâtre du présent.">
          <p>
            Génération de situations scéniques contemporaines à partir d'enquêtes du vécu
            contemporains, de recherches documentaires ethnographiques. Une attention particulière aux formes 
            de langage et d'organisation du travail structurant le vécu contemporain.
          </p>
        </SectionHeading>

        <SectionHeading
          number="02"
          label="Positionnement"
          title="À la croisée de plusieurs gestes."
        >
          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-3 text-base md:text-lg">
            <li>· Satire politique</li>
            <li>· Comédie sociale</li>
            <li>· Théâtre contemporain</li>
            <li>· Critique du solutionnisme technologique</li>
            <li>· Absurde administratif</li>
            <li>· Réflexion sur l'intelligence artificielle</li>
          </ul>
        </SectionHeading>

        <SectionHeading
          number="03"
          label="Vision artistique"
          title="L'institution comme scénographie."
        >
          <p>
            Le travail de PLS observe les espaces où l'humain délègue : aux outils, aux procédures,
            aux modèles. La scène devient un lieu d'enquête sur la manière dont les décisions se
            forment, se dissolvent et se rejouent. L'humour, lorsqu'il intervient, est compris comme
            un outil critique.
          </p>
        </SectionHeading>

        <SectionHeading number="04" label="Valeurs" title="Valeurs.">
          <ul className="rule-t">
            {[
              ["Précision", "Travailler le texte, le geste et la scénographie avec exigence."],
              ["Indépendance", "Refuser les codes attendus du théâtre événementiel."],
              [
                "Hospitalité",
                "Construire les œuvres en dialogue avec interprètes, lieux et partenaires.",
              ],
              ["Lisibilité", "Faire des spectacles qui s'adressent réellement aux publics."],
            ].map(([title, body]) => (
              <li key={title} className="rule-b py-6 grid md:grid-cols-12 gap-4">
                <span className="md:col-span-3 label-admin text-accent">{title}</span>
                <span className="md:col-span-9 text-foreground/85">{body}</span>
              </li>
            ))}
          </ul>
        </SectionHeading>

        <SectionHeading number="05" label="Statut" title="Statut & inscription.">
          <p className="text-muted-foreground">
            Association loi 1901. Siège — TODO. N° SIRET — TODO. Licence d'entrepreneur du spectacle
            — TODO.
          </p>
        </SectionHeading>
      </Container>
    </PageShell>
  );
}
