import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageShell, Container, PageHeader } from "@/components/site/PageShell";
import { site } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — PLS" },
      {
        name: "description",
        content:
          "Contacter PLS — Plateforme de Liaisons Situationnelles : programmation, diffusion, presse, partenariats.",
      },
      { property: "og:title", content: "Contact — PLS" },
      { property: "og:description", content: "Programmation, diffusion, presse, partenariats." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || "Contact site PLS");
    const body = encodeURIComponent(`De : ${form.name} <${form.email}>\n\n${form.message}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <PageShell>
      <PageHeader
        eyebrow="Dossier · Contact"
        title="Écrire à PLS."
        intro="Pour toute demande de programmation, de diffusion, de presse ou de partenariat."
      />

      <Container className="pb-12 grid md:grid-cols-12 gap-10">
        <aside className="md:col-span-4 space-y-8">
          <div>
            <p className="label-admin text-muted-foreground">Général</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block font-display text-2xl hover:text-accent transition-colors"
            >
              {site.email}
            </a>
          </div>
          <div>
            <p className="label-admin text-muted-foreground">Diffusion</p>
            <a
              href={`mailto:${site.diffusionEmail}`}
              className="mt-2 block font-display text-2xl hover:text-accent transition-colors"
            >
              {site.diffusionEmail}
            </a>
          </div>
          <div>
            <p className="label-admin text-muted-foreground">Réseaux</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Instagram — TODO
              <br />
              LinkedIn — TODO
            </p>
          </div>
          <div className="rule-t pt-6">
            <p className="label-admin text-muted-foreground">Siège</p>
            <p className="mt-2 text-sm text-muted-foreground">Adresse — TODO</p>
          </div>
        </aside>

        <form onSubmit={onSubmit} className="md:col-span-8 space-y-8">
          <Field label="Nom" required>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="input-bare"
              placeholder="Votre nom"
            />
          </Field>
          <Field label="Email" required>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="input-bare"
              placeholder="vous@exemple.fr"
            />
          </Field>
          <Field label="Objet">
            <input
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="input-bare"
              placeholder="Programmation, partenariat, presse…"
            />
          </Field>
          <Field label="Message" required>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="input-bare resize-none"
              placeholder="Votre message"
            />
          </Field>

          <div className="flex items-center justify-between gap-4 pt-2">
            <p className="label-admin text-muted-foreground max-w-md">
              Ce formulaire ouvre votre client mail. Aucune donnée n'est transmise à un serveur
              tiers.
            </p>
            <button
              type="submit"
              className="label-admin px-6 py-3 bg-foreground text-background hover:bg-accent transition-colors"
            >
              Envoyer →
            </button>
          </div>
        </form>
      </Container>

      <style>{`
        .input-bare {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--color-rule);
          padding: 0.75rem 0;
          font-size: 1.125rem;
          font-family: var(--font-display);
          color: var(--color-foreground);
          outline: none;
          transition: border-color .15s ease;
        }
        .input-bare:focus { border-bottom-color: var(--color-accent); }
        .input-bare::placeholder { color: color-mix(in oklab, var(--color-foreground) 35%, transparent); }
      `}</style>
    </PageShell>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="label-admin text-muted-foreground">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
