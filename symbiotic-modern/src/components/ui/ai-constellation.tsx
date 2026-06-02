"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import { ArrowUpRight, CircuitBoard, Network } from "lucide-react";

type NodeId =
  | "strategy"
  | "applications"
  | "data"
  | "mobile"
  | "infrastructure"
  | "offshore"
  | "pmo"
  | "staffing"
  | "outcomes";

type GraphNode = {
  id: NodeId;
  label: string;
  short: string;
  eyebrow: string;
  text: string;
  href: string;
  x: number;
  y: number;
  accent: string;
};

const nodes: GraphNode[] = [
  {
    id: "strategy",
    label: "Strategy",
    short: "ST",
    eyebrow: "Advisory layer",
    text: "Business priorities, pain points, process context, and technology direction become one clear route.",
    href: "/about",
    x: 50,
    y: 12,
    accent: "#d5b45f",
  },
  {
    id: "applications",
    label: "Applications",
    short: "AD",
    eyebrow: "Application development",
    text: "Custom web, enterprise, CRM, ERP, and integration work moves from architecture into production.",
    href: "/services/application-development",
    x: 24,
    y: 29,
    accent: "#00a899",
  },
  {
    id: "data",
    label: "Intelligence",
    short: "BI",
    eyebrow: "Business intelligence",
    text: "Data warehousing, modeling, guided analytics, and performance reporting turn systems into decisions.",
    href: "/services/business-intelligence",
    x: 75,
    y: 30,
    accent: "#26a8e0",
  },
  {
    id: "mobile",
    label: "Mobility",
    short: "MO",
    eyebrow: "Mobile workforce",
    text: "Secure cross-platform experiences let teams access and share information anywhere, anytime.",
    href: "/services/mobile-application",
    x: 13,
    y: 55,
    accent: "#47b549",
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    short: "IN",
    eyebrow: "Infrastructure support",
    text: "Network, server, virtualization, cloud, storage, and support services stabilize the technical foundation.",
    href: "/services/infrastructure-support",
    x: 42,
    y: 58,
    accent: "#79b0ff",
  },
  {
    id: "offshore",
    label: "Coverage",
    short: "OF",
    eyebrow: "Offshore support",
    text: "Nearshore and offshore delivery add coverage, cost discipline, and SDLC capacity for critical systems.",
    href: "/services/offshore-support",
    x: 88,
    y: 57,
    accent: "#d5b45f",
  },
  {
    id: "pmo",
    label: "Delivery",
    short: "PM",
    eyebrow: "Project management",
    text: "PMP, agile, risk control, budgeting, and technical leadership keep complex initiatives moving.",
    href: "/services/project-management",
    x: 28,
    y: 84,
    accent: "#c67a4b",
  },
  {
    id: "staffing",
    label: "Talent",
    short: "TS",
    eyebrow: "Strategic staff",
    text: "Technology people staffing for technology roles, matched by skill, culture, urgency, and delivery fit.",
    href: "/services/strategic-staff",
    x: 68,
    y: 82,
    accent: "#47b549",
  },
  {
    id: "outcomes",
    label: "Outcomes",
    short: "OC",
    eyebrow: "Client impact",
    text: "Clients get practical business outcomes through a symbiotic model of experts, partners, and delivery teams.",
    href: "/clientele",
    x: 50,
    y: 43,
    accent: "#ffffff",
  },
];

const links: [NodeId, NodeId][] = [
  ["strategy", "applications"],
  ["strategy", "data"],
  ["strategy", "outcomes"],
  ["applications", "outcomes"],
  ["data", "outcomes"],
  ["mobile", "applications"],
  ["mobile", "infrastructure"],
  ["infrastructure", "outcomes"],
  ["infrastructure", "offshore"],
  ["offshore", "data"],
  ["pmo", "applications"],
  ["pmo", "staffing"],
  ["staffing", "outcomes"],
  ["staffing", "offshore"],
  ["pmo", "mobile"],
];

function pathFor(source: GraphNode, target: GraphNode) {
  const midpointX = (source.x + target.x) / 2;
  const midpointY = (source.y + target.y) / 2;
  const lift = Math.abs(source.x - target.x) > 36 ? -7 : 6;

  return `M ${source.x} ${source.y} Q ${midpointX} ${midpointY + lift} ${target.x} ${target.y}`;
}

function isLinked(activeId: NodeId, source: NodeId, target: NodeId) {
  return activeId === source || activeId === target;
}

export function AIConstellation() {
  const [activeId, setActiveId] = useState<NodeId>("outcomes");
  const activeNode = nodes.find((node) => node.id === activeId) ?? nodes[0];
  const nodeMap = useMemo(() => new Map(nodes.map((node) => [node.id, node])), []);

  return (
    <div className="ai-constellation signal-surface relative h-[480px] overflow-hidden rounded-lg border border-white/16 bg-[#071d24]/76 p-4 shadow-[0_34px_120px_rgba(0,0,0,0.36)] backdrop-blur-xl sm:p-5">
      <div className="absolute inset-0 kinetic-grid opacity-25" />
      <div className="absolute inset-0 ai-scanline opacity-55" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/56">
            AI 360 operating graph
          </p>
          <p className="mt-2 text-2xl font-semibold text-white">Technology routes to outcomes</p>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/14 bg-white/10 text-[#77e0d5]">
          <Network className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>

      <div className="relative mt-4 h-[250px] overflow-hidden rounded-md border border-white/10 bg-white/[0.035]">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="ai-link-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#77e0d5" stopOpacity="0.95" />
              <stop offset="52%" stopColor="#26a8e0" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#47b549" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          {links.map(([sourceId, targetId]) => {
            const source = nodeMap.get(sourceId);
            const target = nodeMap.get(targetId);
            if (!source || !target) {
              return null;
            }

            const active = isLinked(activeId, sourceId, targetId);
            const pathId = `ai-path-${sourceId}-${targetId}`;

            return (
              <g key={pathId}>
                <path
                  id={pathId}
                  d={pathFor(source, target)}
                  className={`ai-graph-link ${active ? "ai-graph-link-active" : ""}`}
                  vectorEffect="non-scaling-stroke"
                />
                {active ? (
                  <circle r="1.4" fill="url(#ai-link-gradient)" opacity="0.95">
                    <animateMotion dur="2.2s" repeatCount="indefinite" rotate="auto">
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                  </circle>
                ) : null}
              </g>
            );
          })}
        </svg>

        {nodes.map((node) => {
          const active = node.id === activeId;
          const connected = links.some(([source, target]) => isLinked(activeId, source, target) && (source === node.id || target === node.id));

          return (
            <button
              key={node.id}
              type="button"
              data-testid={`ai-node-${node.id}`}
              aria-pressed={active}
              aria-label={`${node.label}: ${node.eyebrow}`}
              onClick={() => setActiveId(node.id)}
              onFocus={() => setActiveId(node.id)}
              onMouseEnter={() => setActiveId(node.id)}
              className={`ai-node absolute grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border text-[11px] font-black tracking-[0.08em] transition duration-300 sm:h-14 sm:w-14 sm:text-xs ${
                active || connected
                  ? "scale-110 border-white/70 text-white shadow-[0_0_34px_rgba(119,224,213,0.42)]"
                  : "border-white/22 text-white/70 hover:scale-105"
              }`}
              style={
                {
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  "--node-accent": node.accent,
                } as CSSProperties
              }
            >
              <span className="ai-node-core" />
              <span className="relative z-10">{node.short}</span>
              <span className="pointer-events-none absolute top-[3.7rem] hidden whitespace-nowrap rounded-md border border-white/10 bg-[#071d24]/92 px-2 py-1 text-[10px] font-semibold normal-case tracking-normal text-white/75 shadow-xl sm:block">
                {node.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="relative mt-4 rounded-md border border-white/12 bg-white/10 p-3 sm:p-4">
        <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
          <div className="flex items-start gap-3">
            <span
              className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-md border border-white/12 bg-white/10"
              style={{ color: activeNode.accent }}
            >
              <CircuitBoard className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: activeNode.accent }}>
                {activeNode.eyebrow}
              </p>
              <h2 className="mt-1 text-lg font-semibold text-white sm:text-xl">{activeNode.label}</h2>
              <p className="microcopy mt-1 text-sm leading-6 text-white/68 sm:mt-2">{activeNode.text}</p>
            </div>
          </div>
          <Link
            href={activeNode.href}
            className="inline-flex h-10 w-fit shrink-0 items-center gap-2 rounded-md border border-white/14 bg-white/10 px-3 text-sm font-semibold text-white transition hover:border-[#77e0d5]/70 hover:bg-[#77e0d5]/14"
          >
            Open route
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
