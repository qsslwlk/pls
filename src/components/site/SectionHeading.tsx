import type { ReactNode } from "react";

export function SectionHeading({
  number,
  label,
  title,
  children,
}: {
  number: string;
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="grid md:grid-cols-12 gap-6 md:gap-10 pt-12 rule-t">
      <div className="md:col-span-3 flex items-baseline gap-4">
        <span className="font-mono text-accent text-sm">{number}</span>
        <span className="label-admin text-muted-foreground">{label}</span>
      </div>
      <div className="md:col-span-9">
        <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl">
          {title}
        </h2>
        {children ? (
          <div className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-foreground/85">
            {children}
          </div>
        ) : null}
      </div>
    </header>
  );
}

export function SectionBody({ children }: { children: ReactNode }) {
  return (
    <div className="grid md:grid-cols-12 gap-6 md:gap-10 mt-10 pb-16">
      <div className="md:col-start-4 md:col-span-9">{children}</div>
    </div>
  );
}
