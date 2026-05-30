import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Tag({
  children,
  variant = "default",
  className,
}: {
  children: ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "label-admin inline-flex items-center gap-2 px-2.5 py-1",
        variant === "default" && "bg-foreground/5 text-foreground/80",
        variant === "accent" && "bg-accent text-accent-foreground",
        variant === "outline" && "border border-foreground/30 text-foreground/80",
        className,
      )}
    >
      {variant === "accent" ? (
        <span className="inline-block size-1.5 rounded-full bg-current opacity-90" />
      ) : null}
      {children}
    </span>
  );
}
