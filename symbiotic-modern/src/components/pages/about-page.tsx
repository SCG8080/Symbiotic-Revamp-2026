import Image from "next/image";
import { CheckCircle2, Compass, Gem, Target, Zap } from "lucide-react";
import { aboutPage, capabilities } from "@/core/content/pages";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const valueIcons = [Target, Compass, Zap, Gem, CheckCircle2];

export function AboutPage() {
  return (
    <>
      <PageHero title={aboutPage.title} eyebrow={aboutPage.eyebrow} summary={aboutPage.intro} image={aboutPage.image} accent="#22c55e" secondaryAccent="#00e5d1">
        <div className="grid gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal">SCG standard</p>
          {aboutPage.commitment.map((item, index) => (
            <div key={item} className="rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10">
              <p className="font-display text-lg font-bold text-teal">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </PageHero>
      <section className="bg-obsidian-light px-5 py-24 sm:px-8 lg:px-10 border-b border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal/5 via-obsidian-light to-obsidian-light" />
        <div className="kinetic-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="relative min-h-[600px] overflow-hidden rounded-2xl border border-white/10 ring-1 ring-white/5">
              <Image src={aboutPage.coreImage} alt="" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover opacity-70 mix-blend-luminosity hover:opacity-90 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white backdrop-blur-sm border-t border-white/5 bg-obsidian/40">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal">Core values</p>
                <p className="mt-4 font-display text-3xl font-bold leading-snug">The behavior behind the promise.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading eyebrow="Commitment" title="Best in class partnerships with operational conviction." inverse />
            <div className="mt-12 grid gap-6">
              {aboutPage.commitment.map((item, index) => (
                <div key={item} className="glass-panel group rounded-2xl p-6 transition-all hover:bg-white/10 hover:border-teal/30">
                  <div className="flex gap-6 items-center">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-teal/10 text-xl font-bold text-teal ring-1 ring-teal/20 transition-transform group-hover:scale-110">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-lg leading-relaxed text-slate-300">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-obsidian px-5 py-32 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading eyebrow="Core Values" title="Five principles that make SCG genuinely symbiotic." align="center" inverse />
          </Reveal>
          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {aboutPage.values.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <Reveal key={value} delay={index * 80}>
                  <article className="glass-panel group h-full rounded-2xl p-8 transition-all hover:-translate-y-2 hover:border-teal/50 hover:shadow-[0_20px_40px_rgba(34,211,238,0.15)] relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-teal ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-teal/10 group-hover:ring-teal/20">
                      <Icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <p className="mt-8 font-display text-lg font-bold leading-relaxed text-white group-hover:text-teal transition-colors">{value}</p>
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

export function KeyCapabilitiesPage() {
  return (
    <>
      <PageHero
        title="Key Capabilities"
        eyebrow="Capability Map"
        summary="A focused view of SCG's consulting, automation, enterprise platform, data, and custom solution strengths."
        image="/Images/webdev.jpg"
        accent="#3b82f6"
        secondaryAccent="#22c55e"
      >
        <div className="grid grid-cols-2 gap-3">
          {capabilities.slice(0, 6).map((capability) => (
            <div key={capability.title} className="rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10">
              <p className="text-sm font-semibold tracking-wide text-slate-300">{capability.title}</p>
            </div>
          ))}
        </div>
      </PageHero>
      <section className="bg-obsidian-light px-5 py-32 sm:px-8 lg:px-10 relative overflow-hidden">
        <div className="kinetic-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Capability Map"
              title="From enterprise platforms to custom-built systems."
              text="A practical view of the platforms, data flows, automation programs, and custom systems SCG helps clients move forward."
              align="center"
              inverse
            />
          </Reveal>
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((capability, index) => (
              <Reveal key={capability.title} delay={index * 80}>
                <article className="glass-panel group overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-teal/50 hover:shadow-[0_24px_60px_rgba(34,211,238,0.15)]">
                  <div className="relative h-64 border-b border-white/5 bg-obsidian">
                    <Image src={capability.image} alt="" fill sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover opacity-60 mix-blend-luminosity transition duration-700 group-hover:scale-110 group-hover:opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
                    <h2 className="absolute bottom-6 left-6 right-6 font-display text-2xl font-bold text-white group-hover:text-teal transition-colors">{capability.title}</h2>
                  </div>
                  <div className="p-8">
                    <p className="text-base leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">{capability.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
