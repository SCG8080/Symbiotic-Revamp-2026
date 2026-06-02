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
      <PageHero title={aboutPage.title} eyebrow={aboutPage.eyebrow} summary={aboutPage.intro} image={aboutPage.image} accent="#47b549" secondaryAccent="#00a899">
        <div className="grid gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/58">SCG standard</p>
          {aboutPage.commitment.map((item, index) => (
            <div key={item} className="rounded-md border border-white/12 bg-white/10 p-4">
              <p className="text-xs font-bold text-[#77e0d5]">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-2 text-sm leading-6 text-white/74">{item}</p>
            </div>
          ))}
        </div>
      </PageHero>
      <section className="bg-[#f6f8f5] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="relative min-h-[520px] overflow-hidden rounded-lg shadow-[0_28px_90px_rgba(16,44,53,0.14)]">
              <Image src={aboutPage.coreImage} alt="" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(16,44,53,0.78))]" />
              <div className="absolute bottom-0 p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#77e0d5]">Core values</p>
                <p className="mt-3 text-2xl font-semibold">The behavior behind the promise.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading eyebrow="Commitment" title="Best in class partnerships with operational conviction." />
            <div className="mt-8 grid gap-4">
              {aboutPage.commitment.map((item, index) => (
                <div key={item} className="signal-surface rounded-lg border border-[#102c35]/10 bg-white p-5 shadow-[0_14px_50px_rgba(16,44,53,0.07)]">
                  <div className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-[#e7f8f5] text-sm font-bold text-[#00a899]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-7 text-[#29454d]">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading eyebrow="Core Values" title="Five principles that make SCG genuinely symbiotic." align="center" />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {aboutPage.values.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <Reveal key={value} delay={index * 70}>
                  <article className="h-full rounded-lg border border-[#102c35]/10 bg-[#f6f8f5] p-5">
                    <Icon className="h-6 w-6 text-[#00a899]" aria-hidden="true" />
                    <p className="mt-5 text-sm leading-7 text-[#29454d]">{value}</p>
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
        accent="#26a8e0"
        secondaryAccent="#47b549"
      >
        <div className="grid grid-cols-3 gap-2">
          {capabilities.slice(0, 6).map((capability) => (
            <div key={capability.title} className="rounded-md border border-white/12 bg-white/10 p-3">
              <p className="text-xs font-semibold leading-5 text-white/76">{capability.title}</p>
            </div>
          ))}
        </div>
      </PageHero>
      <section className="bg-[#f6f8f5] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Capability Map"
              title="From enterprise platforms to custom-built systems."
              text="A practical view of the platforms, data flows, automation programs, and custom systems SCG helps clients move forward."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((capability, index) => (
              <Reveal key={capability.title} delay={index * 60}>
                <article className="group overflow-hidden rounded-lg border border-[#102c35]/10 bg-white shadow-[0_18px_60px_rgba(16,44,53,0.08)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(16,44,53,0.14)]">
                  <div className="relative h-56">
                    <Image src={capability.image} alt="" fill sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(16,44,53,0.78))]" />
                    <h2 className="absolute bottom-5 left-5 right-5 text-2xl font-semibold text-white">{capability.title}</h2>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-7 text-[#5d6c70]">{capability.text}</p>
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
