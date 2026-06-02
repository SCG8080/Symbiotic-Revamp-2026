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
  accent = "#00a899",
  secondaryAccent = "#26a8e0",
  children,
}: PageHeroProps) {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#102c35]"
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
          className="hero-mask object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,26,32,0.96),rgba(6,26,32,0.76)_48%,rgba(6,26,32,0.48))]" />
        <div className="kinetic-grid absolute inset-0 opacity-35" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_38%,rgba(38,168,224,0.18),transparent_34%),linear-gradient(135deg,transparent,rgba(255,255,255,0.08))]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f6f8f5] to-transparent" />
      </div>
      <div className="relative mx-auto grid min-h-[420px] max-w-7xl gap-10 px-5 pb-12 pt-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div className="flex flex-col justify-end text-white">
          <div className="max-w-4xl">
            {eyebrow ? (
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[var(--hero-accent)]">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
              {title}
            </h1>
            {summary ? (
              <p className="microcopy mt-6 max-w-3xl text-lg leading-8 text-white/82">{summary}</p>
            ) : null}
          </div>
        </div>
        <div className="hidden items-end justify-end lg:flex">
          <div className="signal-surface w-full max-w-md rounded-lg border border-white/16 bg-white/10 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            {children ?? (
              <div className="grid gap-4">
                <div className="h-2 w-24 rounded-full bg-[var(--hero-accent)]" />
                <div className="grid gap-2">
                  <div className="h-12 rounded-md border border-white/14 bg-white/10" />
                  <div className="h-12 rounded-md border border-white/14 bg-white/10" />
                  <div className="h-12 rounded-md border border-white/14 bg-white/10" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
