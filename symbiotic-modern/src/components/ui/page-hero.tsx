import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

type PageHeroProps = {
  title: string;
  eyebrow?: string;
  summary?: string;
  image: string;
  accent?: string;
  secondaryAccent?: string;
  children?: ReactNode;
};

export function PageHero({
  title,
  eyebrow,
  summary,
  image,
  accent = "#00e5d1",
  secondaryAccent = "#3b82f6",
  children,
}: PageHeroProps) {
  return (
    <section
      className="relative isolate overflow-hidden bg-obsidian border-b border-white/5"
      style={
        {
          "--hero-accent": accent,
          "--hero-secondary": secondaryAccent,
        } as CSSProperties
      }
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-mask object-cover opacity-60 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/40" />
        <div className="kinetic-grid absolute inset-0 opacity-20" />
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2 bg-[radial-gradient(circle_at_70%_38%,var(--tw-gradient-stops))] from-[var(--hero-secondary)]/10 via-transparent to-transparent" />
      </div>
      
      <div className="relative mx-auto grid min-h-[480px] max-w-7xl gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div className="flex flex-col justify-center text-white">
          <div className="max-w-3xl reveal is-visible">
            {eyebrow ? (
              <div className="mb-6 inline-flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--hero-accent)]" />
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--hero-accent)]">
                  {eyebrow}
                </p>
              </div>
            ) : null}
            <h1 className="font-display text-balance text-5xl font-bold tracking-tight sm:text-7xl">
              {title}
            </h1>
            {summary ? (
              <p className="microcopy mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">
                {summary}
              </p>
            ) : null}
          </div>
        </div>
        
        <div className="hidden items-center justify-end lg:flex reveal is-visible" style={{ animationDelay: "200ms" }}>
          <div className="glass-panel w-full max-w-md rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-[var(--hero-accent)] opacity-20 blur-3xl" />
            <div className="relative z-10">
              {children ?? (
                <div className="grid gap-5">
                  <div className="h-1.5 w-20 rounded-full bg-[var(--hero-accent)] shadow-[0_0_12px_var(--hero-accent)]" />
                  <div className="grid gap-3">
                    <div className="h-14 rounded-xl border border-white/5 bg-white/5" />
                    <div className="h-14 rounded-xl border border-white/5 bg-white/5" />
                    <div className="h-14 rounded-xl border border-white/5 bg-white/5 opacity-50" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
