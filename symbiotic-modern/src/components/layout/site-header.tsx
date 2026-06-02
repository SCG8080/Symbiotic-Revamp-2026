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

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#102c35]/10 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          aria-label="Symbiotic Consulting Group home"
        >
          <Image
            src="/scg.png"
            alt="Symbiotic Consulting Group"
            width={95}
            height={55}
            priority
            className="shrink-0"
          />
          <span className="hidden max-w-40 text-sm font-bold leading-5 text-[#102c35] 2xl:block">
            Symbiotic Consulting Group
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {mainNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`inline-flex h-10 items-center gap-1 rounded-lg px-3 text-sm font-semibold transition ${
                    active
                      ? "bg-[#e9f8f6] text-[#087d74]"
                      : "text-[#233e46] hover:bg-[#f3f7f5] hover:text-[#087d74]"
                  }`}
                >
                  {item.label}
                  {item.children ? <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" /> : null}
                </Link>
                {item.children ? (
                  <div className="pointer-events-none absolute left-0 top-full w-72 translate-y-2 rounded-lg border border-[#102c35]/10 bg-white p-2 opacity-0 shadow-[0_24px_60px_rgba(16,44,53,0.12)] transition group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) =>
                      isExternal(child.href) ? (
                        <a
                          key={child.label}
                          href={child.href}
                          target="_blank"
                          rel="noreferrer"
                          className="block rounded-md px-3 py-2.5 text-sm font-medium text-[#29454d] hover:bg-[#f1faf8] hover:text-[#087d74]"
                        >
                          {child.label}
                        </a>
                      ) : (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block rounded-md px-3 py-2.5 text-sm font-medium text-[#29454d] hover:bg-[#f1faf8] hover:text-[#087d74]"
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
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-[#102c35] px-4 text-sm font-semibold text-white transition hover:bg-[#00a899]"
          >
            Talk to SCG
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#102c35]/15 text-[#102c35] lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#102c35]/10 bg-white px-5 pb-5 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 pt-3" aria-label="Mobile navigation">
            {mainNav.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-11 items-center rounded-lg px-3 text-sm font-semibold ${
                    isActive(pathname, item.href)
                      ? "bg-[#e9f8f6] text-[#087d74]"
                      : "text-[#233e46]"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="ml-3 border-l border-[#102c35]/10 pl-3">
                    {item.children.map((child) =>
                      isExternal(child.href) ? (
                        <a
                          key={child.label}
                          href={child.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex min-h-10 items-center rounded-lg px-3 text-sm text-[#5d6c70]"
                        >
                          {child.label}
                        </a>
                      ) : (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="flex min-h-10 items-center rounded-lg px-3 text-sm text-[#5d6c70]"
                        >
                          {child.label}
                        </Link>
                      ),
                    )}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
