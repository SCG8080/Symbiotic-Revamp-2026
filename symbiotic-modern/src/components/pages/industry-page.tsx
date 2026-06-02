import Image from "next/image";
import type { CSSProperties } from "react";
import { BriefcaseBusiness, HeartPulse, Scale, Truck } from "lucide-react";
import { industries, industryPage } from "@/core/content/pages";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const industryAccents = [
  { accent: "#26a8e0", deep: "#0c3345", icon: BriefcaseBusiness, label: "Capital agility" },
  { accent: "#47b549", deep: "#173a2a", icon: HeartPulse, label: "Care continuity" },
  { accent: "#d5b45f", deep: "#3b2d16", icon: Truck, label: "Flow visibility" },
  { accent: "#7b3454", deep: "#321827", icon: Scale, label: "Trusted access" },
];

export function IndustryPage() {
  return (
    <>
      <PageHero title={industryPage.title} eyebrow="Industry Solutions" summary={industryPage.intro} image={industryPage.image} accent="#d5b45f" secondaryAccent="#26a8e0">
        <div className="grid gap-3">
          {industryAccents.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3 rounded-md border border-white/12 bg-white/10 p-3">
                <span className="grid h-9 w-9 place-items-center rounded-md" style={{ backgroundColor: `${item.accent}24`, color: item.accent }}>
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold text-white/82">{industries[index].title}</span>
              </div>
            );
          })}
        </div>
      </PageHero>
      <section className="bg-[#f6f8f5] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading eyebrow="Vertical Depth" title="Distinct operating realities. One SCG delivery model." align="center" />
          </Reveal>
          <div className="mt-12 grid gap-6">
            {industries.map((industry, index) => {
              const meta = industryAccents[index];
              const Icon = meta.icon;
              return (
                <Reveal key={industry.title} delay={index * 90}>
                  <article
                    className="grid overflow-hidden rounded-lg border border-[#102c35]/10 bg-white shadow-[0_24px_80px_rgba(16,44,53,0.09)] lg:grid-cols-[0.8fr_1.2fr]"
                    style={{ "--industry-accent": meta.accent, "--industry-deep": meta.deep } as CSSProperties}
                  >
                    <div className={`relative min-h-[330px] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <Image src={industry.image} alt="" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(16,44,53,0.82))]" />
                      <div className="absolute bottom-5 left-5 right-5 text-white">
                        <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: meta.accent }}>{meta.label}</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight">{industry.title}</h2>
                      </div>
                    </div>
                    <div className="p-6 sm:p-8">
                      <span className="grid h-12 w-12 place-items-center rounded-lg text-white" style={{ backgroundColor: meta.deep }}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <p className="microcopy mt-6 text-base leading-8 text-[#5d6c70]">{industry.text}</p>
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
