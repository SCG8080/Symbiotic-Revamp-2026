"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { mainNav } from "@/core/content/company";

function isExternal(href: string) {
  return href.startsWith("http");
}

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

import {
  Code2,
  DatabaseZap,
  Smartphone,
  ServerCog,
  Globe2,
  GanttChart,
  Users2,
  UserRoundSearch,
  Rocket
} from "lucide-react";

const serviceIcons: Record<string, any> = {
  "/services/application-development": { icon: Code2, color: "#00e5d1", desc: "Build & enhance apps" },
  "/services/business-intelligence": { icon: DatabaseZap, color: "#3b82f6", desc: "Data insights" },
  "/services/mobile-application": { icon: Smartphone, color: "#22c55e", desc: "iOS & Android" },
  "/services/infrastructure-support": { icon: ServerCog, color: "#60a5fa", desc: "Managed IT" },
  "/services/offshore-support": { icon: Globe2, color: "#eab308", desc: "Global delivery" },
  "/services/project-management": { icon: GanttChart, color: "#f97316", desc: "PMP & Agile" },
  "/services/collaboration": { icon: Users2, color: "#d946ef", desc: "Portals & workflow" },
  "/services/strategic-staff": { icon: UserRoundSearch, color: "#10b981", desc: "Technology talent" },
  "/services/product-development": { icon: Rocket, color: "#f43f5e", desc: "Faster time to market" },
};

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-obsidian/70 backdrop-blur-2xl supports-[backdrop-filter]:bg-obsidian/60">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Left Side: Logo */}
        <div className="flex shrink-0 items-center justify-start mr-4 lg:mr-8">
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-2 xl:gap-3 transition-opacity hover:opacity-80"
            aria-label="Symbiotic Consulting Group home"
          >
            <div className="relative flex h-10 items-center justify-center">
              <Image
                src="/scg.png"
                alt="Symbiotic Consulting Group"
                width={95}
                height={55}
                className="shrink-0 drop-shadow-md transition-transform group-hover:scale-105"
              />
            </div>
            <div className="hidden flex-col items-start justify-center font-display text-[9px] xl:text-xs font-bold uppercase leading-tight tracking-widest text-white lg:flex">
              <span>Symbiotic</span>
              <span className="text-scg-teal">Consulting Group</span>
            </div>
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden items-center justify-center lg:flex" aria-label="Primary navigation">
          {mainNav.map((item, index) => {
            const active = isActive(pathname, item.href);
            return (
              <div key={item.label} className="flex items-center">
                {index > 0 && <span className="mx-2 h-1 w-1 rounded-full bg-white/20" aria-hidden="true" />}
                <div className="group/nav relative">
                  <Link
                    href={item.href}
                    className={`inline-flex h-auto min-h-[40px] py-1 text-center items-center justify-center gap-1.5 rounded-lg px-2 xl:px-3 text-sm xl:text-base font-semibold tracking-wide transition-all ${
                      active
                        ? "text-white"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {item.children ? <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover/nav:rotate-180" aria-hidden="true" /> : null}
                    {active && (
                      <span className="absolute inset-x-4 -bottom-[21px] h-0.5 bg-gradient-to-r from-scg-teal to-scg-blue shadow-[0_0_8px_rgba(0,168,153,0.8)]" />
                    )}
                  </Link>
                  {item.children ? (
                  <div className={`pointer-events-none absolute top-full translate-y-4 rounded-xl border border-white/10 bg-obsidian-light/95 p-2.5 opacity-0 shadow-2xl backdrop-blur-xl transition-all group-hover/nav:pointer-events-auto group-hover/nav:translate-y-0 group-hover/nav:opacity-100 ${item.label === "Services" ? "w-[600px] left-1/2 -translate-x-1/2 p-4" : "w-64 left-0"}`}>
                    {item.label === "Services" ? (
                      <div className="grid grid-cols-2 gap-2">
                        {item.children.map((child) => {
                           const sData = serviceIcons[child.href];
                           const Icon = sData?.icon || Code2;
                           return (
                             <Link key={child.label} href={child.href} className="group/mega flex items-start gap-4 rounded-lg p-3 transition-colors hover:bg-white/5">
                               <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover/mega:bg-white/10 shadow-inner" style={{ color: sData?.color, border: `1px solid ${sData?.color}40` }}>
                                 <Icon className="h-5 w-5" />
                               </div>
                               <div>
                                 <p className="text-sm font-semibold text-slate-200 group-hover/mega:text-white transition-colors">{child.label}</p>
                                 <p className="mt-1 text-xs text-slate-400 group-hover/mega:text-slate-300 transition-colors">{sData?.desc}</p>
                               </div>
                             </Link>
                           );
                        })}
                      </div>
                    ) : (
                      item.children.map((child) =>
                        isExternal(child.href) ? (
                          <a
                            key={child.label}
                            href={child.href}
                            target="_blank"
                            rel="noreferrer"
                            className="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                          >
                            {child.label}
                          </a>
                        ) : (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        )
                      )
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </nav>

        {/* Right Side: CTA & Mobile Menu */}
        <div className="flex shrink-0 items-center justify-end gap-4 ml-8">
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="group relative inline-flex h-10 items-center justify-center whitespace-nowrap overflow-hidden rounded-full bg-white px-6 font-medium text-obsidian transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 text-sm font-semibold tracking-wide">Talk to SCG</span>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-teal/20 to-blue/20 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/5 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="absolute inset-x-0 top-full border-b border-white/10 bg-obsidian-light/95 px-5 pb-6 backdrop-blur-2xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 pt-4" aria-label="Mobile navigation">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex min-h-12 items-center rounded-xl px-4 text-sm font-medium tracking-wide ${
                      active
                        ? "bg-white/10 text-white"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <div className="ml-4 mt-2 flex flex-col gap-1 border-l border-white/10 pl-4">
                      {item.children.map((child) =>
                        isExternal(child.href) ? (
                          <a
                            key={child.label}
                            href={child.href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex min-h-10 items-center rounded-lg px-3 text-sm text-slate-500 hover:text-slate-300"
                          >
                            {child.label}
                          </a>
                        ) : (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="flex min-h-10 items-center rounded-lg px-3 text-sm text-slate-500 hover:text-slate-300"
                          >
                            {child.label}
                          </Link>
                        ),
                      )}
                    </div>
                  ) : null}
                </div>
              );
            })}
            <div className="mt-4 pt-4 border-t border-white/10">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex h-12 items-center justify-center rounded-xl bg-white text-sm font-semibold tracking-wide text-obsidian"
              >
                Talk to SCG
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
