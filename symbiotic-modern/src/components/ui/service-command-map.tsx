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
};

function connectionPath(source: PracticeNode, target: PracticeNode) {
  // Add a slight curve to make it look organic (like a nervous system)
  const midX = (source.x + target.x) / 2;
  const midY = (source.y + target.y) / 2;
  const dist = Math.sqrt(Math.pow(source.x - target.x, 2) + Math.pow(source.y - target.y, 2));
  const bend = dist * 0.15 * (source.x > target.x ? 1 : -1);

  return `M ${source.x} ${source.y} Q ${midX + bend} ${midY + bend} ${target.x} ${target.y}`;
}

export function ServiceCommandMap({ items }: { items: PracticeMapItem[] }) {
  const nodes = useMemo(() => {
    // Distribute nodes in an organic circular layout
    return items.map((item, index) => {
      const angle = (index / items.length) * Math.PI * 2 - Math.PI / 2; // Start from top
      const radiusX = 35; // Oval shape to fit text better
      const radiusY = 38;
      return {
        ...item,
        x: 50 + radiusX * Math.cos(angle),
        y: 50 + radiusY * Math.sin(angle),
      };
    });
  }, [items]);

  const [activeSlug, setActiveSlug] = useState(nodes[0]?.slug ?? "");
  const activeNode = nodes.find((node) => node.slug === activeSlug) ?? nodes[0];

  // Generate ALL possible connections between nodes to form a fully connected nervous system
  const routePairs = useMemo(() => {
    const pairs: [PracticeNode, PracticeNode][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        pairs.push([nodes[i], nodes[j]]);
      }
    }
    return pairs;
  }, [nodes]);

  if (!activeNode) {
    return null;
  }

  return (
    <div className="signal-surface mt-12 grid overflow-hidden rounded-lg border border-[#102c35]/10 bg-[#071d24] text-white shadow-[0_28px_110px_rgba(16,44,53,0.18)] lg:grid-cols-[1.28fr_0.72fr]">
      <div className="relative min-h-[600px] overflow-hidden border-b border-white/10 p-5 lg:border-b-0 lg:border-r">
        <div className="absolute inset-0 kinetic-grid opacity-[0.22]" />
        <div className="absolute inset-0 ai-scanline opacity-35" />
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/52">
              Service nervous system
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Fully integrated capabilities</h2>
          </div>
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-white/12 bg-white/10 text-[#77e0d5] shadow-[0_0_15px_rgba(119,224,213,0.4)]">
            <RadioTower className="h-5 w-5 animate-pulse" aria-hidden="true" />
          </span>
        </div>

        <div className="relative mt-8 h-[500px] rounded-md border border-white/10 bg-white/[0.035]">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {routePairs.map(([source, target], i) => {
              const isActive = source.slug === activeSlug || target.slug === activeSlug;
              return (
                <path
                  key={i}
                  d={connectionPath(source, target)}
                  className={`transition-all duration-700 ${isActive ? "stroke-white/60 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] z-10" : "stroke-white/5 opacity-30"}`}
                  fill="none"
                  strokeWidth={isActive ? "0.4" : "0.15"}
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
          </svg>

          {nodes.map((node) => {
            const active = node.slug === activeSlug;

            return (
              <button
                key={node.slug}
                type="button"
                data-testid={`practice-node-${node.slug}`}
                aria-pressed={active}
                onClick={() => setActiveSlug(node.slug)}
                onFocus={() => setActiveSlug(node.slug)}
                onMouseEnter={() => setActiveSlug(node.slug)}
                className={`absolute flex min-h-10 whitespace-nowrap -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border px-4 py-2 text-[10px] sm:text-xs font-bold tracking-[0.05em] transition-all duration-500 z-20 ${
                  active
                    ? "scale-110 border-white/80 bg-white/20 text-white shadow-[0_0_40px_rgba(255,255,255,0.4)] backdrop-blur-md"
                    : "border-white/20 bg-obsidian/80 text-white/70 hover:border-white/50 hover:text-white hover:scale-105 backdrop-blur-sm shadow-lg"
                }`}
                style={
                  {
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    "--practice-accent": node.accent,
                  } as CSSProperties
                }
              >
                <span className={`absolute inset-x-2 top-0 h-px rounded-full bg-[var(--practice-accent)] transition-opacity duration-500 ${active ? 'opacity-100' : 'opacity-40'}`} />
                <span className={`absolute inset-x-2 bottom-0 h-px rounded-full bg-[var(--practice-accent)] transition-opacity duration-500 ${active ? 'opacity-100' : 'opacity-0'}`} />
                {node.title}
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
          <h2 className="mt-3 text-4xl font-semibold tracking-tight transition-colors duration-500">{activeNode.title}</h2>
          <p className="microcopy mt-4 text-sm leading-7 text-white/70">{activeNode.summary}</p>

          <div className="mt-8 grid gap-3">
            <div className="rounded-md border border-white/12 bg-white/10 p-4 transition-colors duration-500 hover:bg-white/15">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/44">Signal</p>
              <p className="mt-2 text-2xl font-semibold transition-colors duration-500" style={{ color: activeNode.accent }}>
                {activeNode.metric}
              </p>
            </div>
            <div className="rounded-md border border-white/12 bg-white/10 p-4 transition-colors duration-500 hover:bg-white/15">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/44">First motion</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-white/78">{activeNode.stage}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="flex items-center gap-3 text-sm font-semibold text-white/66">
            <Crosshair className="h-4 w-4 transition-colors duration-500" style={{ color: activeNode.accent }} aria-hidden="true" />
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
