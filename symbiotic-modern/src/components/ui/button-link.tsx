import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  icon?: LucideIcon;
  external?: boolean;
};

const variants = {
  primary:
    "group relative overflow-hidden bg-white text-obsidian shadow-[0_0_24px_rgba(255,255,255,0.1)] hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(38,168,224,0.3)]",
  secondary:
    "border border-white/10 bg-white/5 text-slate-300 hover:-translate-y-0.5 hover:border-scg-blue/50 hover:bg-scg-blue/10 hover:text-white hover:shadow-[0_0_20px_rgba(38,168,224,0.2)]",
  light:
    "border border-white/20 bg-transparent text-white backdrop-blur-md hover:-translate-y-0.5 hover:bg-white hover:text-obsidian hover:shadow-[0_0_30px_rgba(71,181,73,0.3)]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon: Icon = ArrowRight,
  external,
}: ButtonLinkProps) {
  const className = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold tracking-wide transition-all ${variants[variant]}`;

  const content = (
    <>
      {variant === "primary" && (
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-scg-green/30 via-scg-blue/30 to-scg-teal/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}
      <span className="relative z-10">{children}</span>
      <Icon className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </>
  );

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
