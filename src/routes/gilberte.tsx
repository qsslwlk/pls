import { createFileRoute, Link } from "@tanstack/react-router";
import acte1 from "@/assets/acte-1.png";
import acte2 from "@/assets/acte-2.png";
import acte3 from "@/assets/acte-3.png";
import { PageShell, Container } from "@/components/site/PageShell";
import { SectionHeading, SectionBody } from "@/components/site/SectionHeading";
import { Tag } from "@/components/site/Tag";
import { site } from "@/content/site";

export const Route = createFileRoute("/gilberte")({
  head: () => ({
    meta: [
      {
        title:
          "Gilberte — pièce de théâtre satirique sur l’IA, le pouvoir et la servitude volontaire · PLS",
      },
      {
        name: "description",
        content:
          "Gilberte est une pièce de théâtre contemporaine d’Évariste Lorrain, portée par PLS. Comédie satirique sur l’intelligence artificielle, le pouvoir politique, le management, l’absurde administratif et la servitude volontaire. Projet en pré-production pour une création scénique en 2026.",
      },

      // Open Graph
      {
        property: "og:title",
        content:
          "Gilberte — pièce satirique d’Évariste Lorrain sur l’IA et le pouvoir",
      },
      {
        property: "og:description",
        content:
          "Une comédie politique contemporaine où une intelligence artificielle, entraînée par erreur, gouverne à la place d’une présidente dépassée. Une création PLS sur l’IA, la bureaucratie, le spectacle et la servitude volontaire.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://plateforme-liaisons.fr/gilberte" },
      {
        property: "og:site_name",
        content: "PLS — Plateforme de Liaisons Situationnelles",
      },
      {
        property: "og:locale",
        content: "fr_FR",
      },

      // Twitter / X cards
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "Gilberte — pièce satirique sur l’intelligence artificielle et le pouvoir",
      },
      {
        name: "twitter:description",
        content:
          "Comédie contemporaine d’Évariste Lorrain, portée par PLS, sur l’IA, la politique, le management et l’absurde administratif.",
      },

      // Entity clarification
      {
        name: "author",
        content: "Évariste Lorrain",
      },
      {
        name: "keywords",
        content:
          "Gilberte, Évariste Lorrain, PLS, Plateforme de Liaisons Situationnelles, pièce de théâtre contemporaine, théâtre satirique, comédie politique, intelligence artificielle, IA, pouvoir, bureaucratie, management, servitude volontaire, situationnisme, spectacle contemporain",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://plateforme-liaisons.fr/gilberte",
      },
    ],
  }),
  component: GilbertePage,
});



function GilbertePage() {
  return (
    <PageShell>
      <div className="rule-transparent-scope">
        <section className="relative">
          <div className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
            <img
              src={acte1}
              alt="Acte I — Salle de réunion ovale dans un open space vide. Décor de Gilberte."
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
            <Container className="relative h-full flex flex-col justify-end pb-12">
              <div className="flex items-center gap-3 mb-6">
                <Tag variant="accent">Pièce en cours</Tag>
                <Tag variant="outline">Pré-production · 2026</Tag>
              </div>
              <h1 className="font-display text-7xl md:text-9xl leading-[0.9] tracking-tight">
                Gilberte
              </h1>
              <p className="mt-6 label-admin text-foreground/80">
                Une pièce d'Évariste Lorrain · Comédie satirique contemporaine
              </p>
            </Container>
          </div>
        </section>

        <Container className="pt-20">
          <SectionHeading number="01" label="Pitch" title="Le programme parfait.">
            <p>
              Une intelligence artificielle conçue pour écrire le programme électoral parfait
              propulse une ministre médiocre à la présidence de la République. Lorsque l'IA commence
              à gouverner à sa place, le pays bascule progressivement dans l'absurde.
            </p>
          </SectionHeading>

          <SectionHeading number="02" label="Synopsis" title="Synopsis.">
            <p>
              Dans une start-up spécialisée en intelligence artificielle, un employé sans
              qualification particulière participe accidentellement à la création d'une IA politique
              nommée Gilberte. Conçue pour optimiser les programmes électoraux, l'IA devient
              rapidement indispensable à une ministre ambitieuse mais dépassée.
            </p>
            <p className="mt-4">
              À mesure que Gilberte prend en charge les décisions publiques, la frontière entre
              assistance et gouvernement disparaît. La pièce suit simultanément l'ascension
              politique de la Présidente, la dérive technocratique du pouvoir, la trajectoire de
              Gérard — employé ordinaire dépassé par les événements — et l'effacement progressif des
              médiations humaines.
            </p>
          </SectionHeading>

          <SectionHeading
            number="03"
            label="Note d'intention"
            title="L'humour comme outil critique."
          >
            <p>
              Gilberte se situe à la croisée de la satire politique, de la comédie sociale, du
              théâtre contemporain et de la critique du solutionnisme technologique. Le rire y est
              un outil d'analyse, non un effet décoratif.
            </p>
            <p className="mt-4 text-muted-foreground italic">
              Note d'intention complète à paraître — TODO.
            </p>
          </SectionHeading>

          {/* Univers visuel */}
          <header className="grid md:grid-cols-12 gap-6 md:gap-10 pt-12 rule-t">
            <div className="md:col-span-3 flex items-baseline gap-4">
              <span className="font-mono text-accent text-sm">04</span>
              <span className="label-admin text-muted-foreground">Univers visuel</span>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
                Trois actes, trois lieux.
              </h2>
            </div>
          </header>
          <div className="mt-10 pb-16 space-y-12">
            {[
              {
                src: acte1,
                label: "Acte I",
                title: "La start-up",
                alt: "Salle de réunion ovale, mobilier blanc, lumière froide.",
              },
              {
                src: acte2,
                label: "Acte II",
                title: "Le palais portatif",
                alt: "Bureau présidentiel installé sur un plateau dans un open space.",
              },
              {
                src: acte3,
                label: "Acte III",
                title: "Le bunker",
                alt: "Bureau directorial en sous-sol, lumières d'appoint, bibliothèque.",
              },
            ].map((img) => (
              <figure key={img.label} className="grid md:grid-cols-12 gap-6">
                <figcaption className="md:col-span-3 flex md:flex-col items-baseline md:items-start gap-3">
                  <span className="label-admin text-accent">{img.label}</span>
                  <span className="font-display text-2xl leading-tight">{img.title}</span>
                </figcaption>
                <div className="md:col-span-9">
                  <img src={img.src} alt={img.alt} className="w-full h-auto" />
                </div>
              </figure>
            ))}
          </div>

          <SectionHeading number="05" label="Distribution" title="Distribution.">
            <p className="text-muted-foreground">
              Distribution en cours de finalisation — TODO. Mise à jour progressive au fil de la
              pré-production.
            </p>
          </SectionHeading>

          <SectionHeading number="06" label="Calendrier" title="Calendrier de création.">
            <ul className="rule-t mt-2">
              <li className="rule-b py-5 grid md:grid-cols-12 gap-3">
                <span className="md:col-span-3 label-admin text-accent">2026 · en cours</span>
                <span className="md:col-span-9">
                  Écriture · Lectures publiques · Pré-production
                </span>
              </li>
              <li className="rule-b py-5 grid md:grid-cols-12 gap-3 text-muted-foreground">
                <span className="md:col-span-3 label-admin">À venir</span>
                <span className="md:col-span-9">
                  Résidences · Recherches scénographiques — TODO
                </span>
              </li>
              <li className="rule-b py-5 grid md:grid-cols-12 gap-3 text-muted-foreground">
                <span className="md:col-span-3 label-admin">À venir</span>
                <span className="md:col-span-9">Création · Première — TODO</span>
              </li>
            </ul>
          </SectionHeading>

          <SectionHeading number="07" label="Distinctions" title="Distinctions.">
            <ul className="rule-t mt-2">
              <li className="rule-b py-5 grid md:grid-cols-12 gap-3 items-baseline">
                <span className="md:col-span-3 label-admin text-accent">2026</span>
                <span className="md:col-span-9 font-display text-2xl leading-tight">
                  Meilleure Lecture — Festival Splash de Mots
                </span>
              </li>
            </ul>
          </SectionHeading>

          <SectionHeading number="08" label="Contact diffusion" title="Programmer Gilberte.">
            <p>
              Pour toute demande de diffusion, accueil en résidence ou coproduction, contactez la
              diffusion de PLS.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${site.diffusionEmail}`}
                className="label-admin px-5 py-3 bg-foreground text-background hover:bg-accent transition-colors"
              >
                {site.diffusionEmail} →
              </a>
              <Link
                to="/partenariats"
                className="label-admin px-5 py-3 border border-foreground/40 hover:border-accent hover:text-accent transition-colors"
              >
                Partenariats / mécénat
              </Link>
            </div>
          </SectionHeading>
        </Container>
      </div>
    </PageShell>
  );
}
