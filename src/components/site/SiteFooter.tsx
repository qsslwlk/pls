import { Link } from "@tanstack/react-router";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="rule-t mt-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-10 grid md:grid-cols-12 gap-6">
        <div className="md:col-span-7">
          <p className="font-display text-3xl leading-tight">{site.name}</p>
          <p className="mt-3 text-foreground/70 max-w-2xl">{site.shortDescription}</p>
        </div>
        <div className="md:col-span-5 md:text-right">
          <p className="label-admin text-muted-foreground">Contact</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 inline-block hover:text-accent transition-colors"
          >
            {site.email}
          </a>
          <div className="mt-4">
            <Link to="/contact" className="label-admin text-foreground/70 hover:text-accent">
              Nous ecrire →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
