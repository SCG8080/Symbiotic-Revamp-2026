import Image from "next/image";
import { ExternalLink, GraduationCap, HeartHandshake, TrendingUp } from "lucide-react";
import { careersPage } from "@/core/content/pages";
import { PageHero } from "@/components/ui/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const talentSignals = [
  { title: "Long-term career path", icon: TrendingUp },
  { title: "Performance driven culture", icon: GraduationCap },
  { title: "Community contributor", icon: HeartHandshake },
];

export function CareersPage() {
  return (
    <>
      <PageHero
        title={careersPage.title}
        eyebrow="Careers"
        summary="Strong earning power, long-term career planning, and a performance-driven culture."
        image={careersPage.image}
        accent="#47b549"
        secondaryAccent="#d5b45f"
      >
        <div className="grid gap-3">
          {talentSignals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div key={signal.title} className="flex items-center gap-3 rounded-md border border-white/12 bg-white/10 p-3">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-[#47b549]/20 text-[#9ce58f]">
                  <Icon className="h-4 w-4" />
                </span>
                <p className="text-sm font-semibold text-white/82">{signal.title}</p>
              </div>
            );
          })}
        </div>
      </PageHero>
      <section className="bg-[#f6f8f5] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <div>
              <SectionHeading eyebrow="Join SCG" title="A stronger career path for technology professionals." />
              <div className="mt-7 space-y-5 text-base leading-8 text-[#5d6c70]">
                {careersPage.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8">
                <ButtonLink href={careersPage.positionsHref} external icon={ExternalLink}>
                  Immediate Open Requirements
                </ButtonLink>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative min-h-[520px] overflow-hidden rounded-lg shadow-[0_28px_90px_rgba(16,44,53,0.14)]">
              <Image src="/Images/about-us.jpg" alt="" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(16,44,53,0.82))]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9ce58f]">Talent destination</p>
                <p className="mt-3 text-2xl font-semibold">Strong earning power, corporate-grade benefits, and mission critical work.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
