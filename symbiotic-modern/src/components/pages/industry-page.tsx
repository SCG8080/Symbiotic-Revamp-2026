import Image from "next/image";
import type { CSSProperties } from "react";
import { BriefcaseBusiness, HeartPulse, Scale, Truck } from "lucide-react";
import { industries, industryPage } from "@/core/content/pages";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const industryAccents = [
  { accent: "#3b82f6", deep: "#0a1322", icon: BriefcaseBusiness, label: "Capital agility" }, // blue
  { accent: "#22c55e", deep: "#0a1322", icon: HeartPulse, label: "Care continuity" }, // green
  { accent: "#eab308", deep: "#0a1322", icon: Truck, label: "Flow visibility" }, // yellow
  { accent: "#f43f5e", deep: "#0a1322", icon: Scale, label: "Trusted access" }, // rose
];

export function IndustryPage() {
  return (
    <>
      <PageHero title={industryPage.title} eyebrow="Industry Solutions" summary={industryPage.intro} image={industryPage.image} accent="#eab308" secondaryAccent="#3b82f6">
        <div className="grid gap-3">
          {industryAccents.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10 hover:border-teal/30">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg transition-transform group-hover:scale-110" style={{ backgroundColor: `${item.accent}20`, color: item.accent }}>
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold tracking-wide text-slate-300 group-hover:text-white transition-colors">{industries[index].title}</span>
              </div>
            );
          })}
        </div>
      </PageHero>
      <section className="bg-obsidian-light px-5 py-32 sm:px-8 lg:px-10 relative overflow-hidden">
        <div className="kinetic-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading eyebrow="Vertical Depth" title="Distinct operating realities. One SCG delivery model." align="center" inverse />
          </Reveal>
          <div className="mt-20 grid gap-12">
            {industries.map((industry, index) => {
              const meta = industryAccents[index];
              const Icon = meta.icon;
              return (
                <Reveal key={industry.title} delay={index * 90}>
                  <article
                    className="glass-panel group overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 lg:grid-cols-[0.8fr_1.2fr] grid items-center"
                    style={{ "--industry-accent": meta.accent, "--industry-deep": meta.deep } as CSSProperties}
                  >
                    <div className={`relative min-h-[400px] h-full ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <Image src={industry.image} alt="" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover opacity-60 mix-blend-luminosity transition duration-700 group-hover:scale-110 group-hover:opacity-90" />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
                      <div className="absolute bottom-8 left-8 right-8 text-white">
                        <p className="text-xs font-bold uppercase tracking-[0.24em]" style={{ color: meta.accent }}>{meta.label}</p>
                        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight">{industry.title}</h2>
                      </div>
                    </div>
                    <div className="p-10 sm:p-12 relative overflow-hidden">
                      <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full opacity-5 blur-3xl transition-opacity duration-500 group-hover:opacity-10" style={{ backgroundColor: meta.accent }} />
                      <span className="grid h-16 w-16 place-items-center rounded-2xl text-white shadow-lg relative z-10" style={{ backgroundColor: meta.deep, border: `1px solid ${meta.accent}40` }}>
                        <Icon className="h-8 w-8" style={{ color: meta.accent }} />
                      </span>
                      <p className="microcopy mt-8 text-lg leading-relaxed text-slate-300 relative z-10">{industry.text}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
