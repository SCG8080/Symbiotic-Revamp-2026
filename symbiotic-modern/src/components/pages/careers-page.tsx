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
        accent="#22c55e"
        secondaryAccent="#eab308"
      >
        <div className="grid gap-4">
          {talentSignals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div key={signal.title} className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10 hover:border-teal/30">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-teal/10 text-teal ring-1 ring-teal/20 transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold tracking-wide text-slate-300 group-hover:text-white transition-colors">{signal.title}</p>
              </div>
            );
          })}
        </div>
      </PageHero>
      <section className="bg-obsidian-light px-5 py-32 sm:px-8 lg:px-10 relative overflow-hidden">
        <div className="kinetic-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <div>
              <SectionHeading eyebrow="Join SCG" title="A stronger career path for technology professionals." inverse />
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-slate-400">
                {careersPage.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-12">
                <ButtonLink href={careersPage.positionsHref} external icon={ExternalLink} variant="primary">
                  Immediate Open Requirements
                </ButtonLink>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative min-h-[600px] overflow-hidden rounded-2xl border border-white/10 ring-1 ring-white/5">
              <Image src="/Images/about-us.jpg" alt="" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover opacity-70 mix-blend-luminosity hover:opacity-90 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1),transparent_70%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-10 text-white backdrop-blur-sm border-t border-white/5 bg-obsidian/40">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal">Talent destination</p>
                <p className="mt-4 font-display text-3xl font-bold leading-snug">Strong earning power, corporate-grade benefits, and mission critical work.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
