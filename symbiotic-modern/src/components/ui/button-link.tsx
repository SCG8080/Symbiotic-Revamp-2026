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
    "bg-[#00a899] text-white shadow-[0_18px_46px_rgba(0,168,153,0.28)] hover:-translate-y-0.5 hover:bg-[#078f86] hover:shadow-[0_24px_60px_rgba(0,168,153,0.34)]",
  secondary:
    "border border-[#0d2f3a]/15 bg-white text-[#102c35] hover:-translate-y-0.5 hover:border-[#00a899]/50 hover:bg-[#f4fbfa]",
  light:
    "border border-white/30 bg-white/12 text-white backdrop-blur-md hover:-translate-y-0.5 hover:bg-white hover:text-[#102c35]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon: Icon = ArrowRight,
  external,
}: ButtonLinkProps) {
  const className = `inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition ${variants[variant]}`;

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        <span>{children}</span>
        <Icon className="h-4 w-4" aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      <span>{children}</span>
      <Icon className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
