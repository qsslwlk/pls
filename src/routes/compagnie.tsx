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
      <div className="rule-transparent-scope">
        <PageHeader
          eyebrow="Dossier · La compagnie"
          title="Une plateforme pour des liaisons situationnelles"
          intro="
        La Compagnie s'engage à travailler à partir des formes mêmes du quotidien (réunions, formations, écrans, procédures) afin d’en faire apparaître la dimension fictionnelle, ritualisée et coercitive.
        
        Ses créations placent le sujet face aux situations qu’il connaît déjà : celles qu’il traverse, celles qu’il rejoue, celles auxquelles il consent au travail, dans l’espace public, devant les images ou au sein des dispositifs qui organisent sa vie.
        "
        />

        <Container>
          <SectionHeading number="01" label="Mission" title="Faire théâtre du présent">
            <p>
              Génération de situations scéniques contemporaines à partir d'enquêtes du vécu
              contemporain et de recherches documentaires ethnographiques.
            </p>
          </SectionHeading>

          <SectionHeading number="02" label="Vision" title="L'institution comme scénographie">
            <p>
              PLS observe les lieux où le pouvoir ne se donne presque jamais comme pouvoir : une
              réunion, une formation, une procédure, un écran, un tableau de bord. Ces formes
              organisent les gestes, distribuent la parole, prescrivent les rôles. Elles font décor,
              mais un décor qui agit : il cadre les décisions, autorise les renoncements, transforme
              l’obéissance en participation.
              <br />
            </p>
          </SectionHeading>

          <SectionHeading number="04" label="Protocole" title="Protocole">
            <ul className="rule-t">
              {[
                ["Situation", "Construire des situations de réappropriation active du quotidien contemporain."],
                ["Enquête", "Observer les règles du jeu du spectacle contemporain."],
                [
                  "Rejeu",
                  "Rejouer le quotidien pour en faire apparaître la trame.",
                ],
                ["Adresse", "La situation construite s’adresse au quotidien commun. Elle en révèle les règles et ouvre la possibilité d’un autre jeu."],
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
              Association loi 1901. Siège — Paris. N° SIRET — 992 816 231 00011.
            </p>
          </SectionHeading>
        </Container>
      </div>
    </PageShell>
  );
}
