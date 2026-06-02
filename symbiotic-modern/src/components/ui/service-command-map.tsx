"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import { ArrowUpRight, Crosshair, RadioTower } from "lucide-react";

export type PracticeMapItem = {
  slug: string;
  title: string;
  summary: string;
  accent: string;
  secondary: string;
  metric: string;
  stage: string;
};

type PracticeNode = PracticeMapItem & {
  x: number;
  y: number;
  short: string;
};

const positions: Record<string, Pick<PracticeNode, "x" | "y" | "short">> = {
  "application-development": { x: 24, y: 24, short: "AD" },
  "business-intelligence": { x: 52, y: 18, short: "BI" },
  "mobile-application": { x: 78, y: 27, short: "MO" },
  "infrastructure-support": { x: 16, y: 58, short: "IN" },
  "offshore-support": { x: 43, y: 52, short: "OF" },
  "project-management": { x: 70, y: 57, short: "PM" },
  collaboration: { x: 26, y: 83, short: "CO" },
  "strategic-staff": { x: 56, y: 84, short: "SS" },
  "product-development": { x: 88, y: 78, short: "PD" },
};

const routePairs = [
  ["application-development", "business-intelligence"],
  ["business-intelligence", "mobile-application"],
  ["application-development", "infrastructure-support"],
  ["infrastructure-support", "offshore-support"],
  ["offshore-support", "project-management"],
  ["project-management", "product-development"],
  ["collaboration", "strategic-staff"],
  ["strategic-staff", "product-development"],
  ["collaboration", "infrastructure-support"],
  ["business-intelligence", "offshore-support"],
  ["mobile-application", "project-management"],
] as const;

function connectionPath(source: PracticeNode, target: PracticeNode) {
  const midX = (source.x + target.x) / 2;
  const midY = (source.y + target.y) / 2;
  const bend = source.y > target.y ? -5 : 5;

  return `M ${source.x} ${source.y} Q ${midX} ${midY + bend} ${target.x} ${target.y}`;
}

export function ServiceCommandMap({ items }: { items: PracticeMapItem[] }) {
  const nodes = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        ...(positions[item.slug] ?? { x: 50, y: 50, short: item.title.slice(0, 2).toUpperCase() }),
      })),
    [items],
  );
  const [activeSlug, setActiveSlug] = useState(nodes[0]?.slug ?? "");
  const activeNode = nodes.find((node) => node.slug === activeSlug) ?? nodes[0];
  const nodeMap = useMemo(() => new Map(nodes.map((node) => [node.slug, node])), [nodes]);

  if (!activeNode) {
    return null;
  }

  return (
    <div className="signal-surface mt-12 grid overflow-hidden rounded-lg border border-[#102c35]/10 bg-[#071d24] text-white shadow-[0_28px_110px_rgba(16,44,53,0.18)] lg:grid-cols-[1.28fr_0.72fr]">
      <div className="relative min-h-[520px] overflow-hidden border-b border-white/10 p-5 lg:border-b-0 lg:border-r">
        <div className="absolute inset-0 kinetic-grid opacity-[0.22]" />
        <div className="absolute inset-0 ai-scanline opacity-35" />
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/52">
              Service nervous system
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Practices connected by execution logic</h2>
          </div>
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-white/12 bg-white/10 text-[#77e0d5]">
            <RadioTower className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>

        <div className="relative mt-5 h-[420px] rounded-md border border-white/10 bg-white/[0.035]">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {routePairs.map(([sourceSlug, targetSlug]) => {
              const source = nodeMap.get(sourceSlug);
              const target = nodeMap.get(targetSlug);
              if (!source || !target) {
                return null;
              }

              const active = source.slug === activeSlug || target.slug === activeSlug;

              return (
                <path
                  key={`${sourceSlug}-${targetSlug}`}
                  d={connectionPath(source, target)}
                  className={`service-map-link ${active ? "service-map-link-active" : ""}`}
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
          </svg>

          {nodes.map((node) => {
            const active = node.slug === activeSlug;
            const connected = routePairs.some(
              ([source, target]) =>
                (source === activeSlug || target === activeSlug) &&
                (source === node.slug || target === node.slug),
            );

            return (
              <button
                key={node.slug}
                type="button"
                data-testid={`practice-node-${node.slug}`}
                aria-pressed={active}
                onClick={() => setActiveSlug(node.slug)}
                onFocus={() => setActiveSlug(node.slug)}
                onMouseEnter={() => setActiveSlug(node.slug)}
                className={`absolute flex min-h-12 min-w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border px-3 text-xs font-black tracking-[0.08em] transition duration-300 ${
                  active || connected
                    ? "scale-105 border-white/60 bg-white/18 text-white shadow-[0_0_34px_rgba(119,224,213,0.34)]"
                    : "border-white/14 bg-white/[0.08] text-white/60 hover:border-white/36 hover:text-white"
                }`}
                style={
                  {
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    "--practice-accent": node.accent,
                  } as CSSProperties
                }
              >
                <span className="absolute inset-x-2 top-1 h-px rounded-full bg-[var(--practice-accent)] opacity-80" />
                {node.short}
              </button>
            );
          })}
        </div>
      </div>

      <aside className="relative flex flex-col justify-between gap-8 p-6 sm:p-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: activeNode.accent }}>
            Active practice
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight">{activeNode.title}</h2>
          <p className="microcopy mt-4 text-sm leading-7 text-white/70">{activeNode.summary}</p>

          <div className="mt-8 grid gap-3">
            <div className="rounded-md border border-white/12 bg-white/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/44">Signal</p>
              <p className="mt-2 text-2xl font-semibold" style={{ color: activeNode.accent }}>
                {activeNode.metric}
              </p>
            </div>
            <div className="rounded-md border border-white/12 bg-white/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/44">First motion</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-white/78">{activeNode.stage}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="flex items-center gap-3 text-sm font-semibold text-white/66">
            <Crosshair className="h-4 w-4" style={{ color: activeNode.accent }} aria-hidden="true" />
            <span>Strategy, people, platforms, and delivery tuned together.</span>
          </div>
          <Link
            href={`/services/${activeNode.slug}`}
            className="inline-flex h-11 w-fit items-center gap-2 rounded-md border border-white/14 bg-white/10 px-4 text-sm font-semibold text-white transition hover:border-[#77e0d5]/70 hover:bg-[#77e0d5]/14"
          >
            Enter practice
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </aside>
    </div>
  );
}
