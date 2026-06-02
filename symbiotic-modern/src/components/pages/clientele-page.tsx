import Image from "next/image";
import { CheckCircle2, Quote, Trophy } from "lucide-react";
import { clientelePage, testimonials } from "@/core/content/pages";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ClientelePage() {
  return (
    <>
      <PageHero title={clientelePage.title} eyebrow="Clientele" summary={clientelePage.intro} image={clientelePage.image} accent="#26a8e0" secondaryAccent="#d5b45f">
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/58">Proof profile</p>
            <Trophy className="h-8 w-8 text-[#d5b45f]" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-md border border-white/12 bg-white/10 p-4">
              <p className="text-2xl font-semibold text-white">15+</p>
              <p className="mt-1 text-xs leading-5 text-white/62">direct Florida clients</p>
            </div>
            <div className="rounded-md border border-white/12 bg-white/10 p-4">
              <p className="text-2xl font-semibold text-white">20+</p>
              <p className="mt-1 text-xs leading-5 text-white/62">major national clients</p>
            </div>
          </div>
        </div>
      </PageHero>
      <section className="bg-[#f6f8f5] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading eyebrow="Our Clients" title="Trust earned through consistent delivery." align="center" />
          </Reveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <div className="rounded-lg border border-[#102c35]/10 bg-white p-6 shadow-[0_24px_80px_rgba(16,44,53,0.09)]">
                <h2 className="text-2xl font-semibold tracking-tight text-[#102c35]">Portfolio includes</h2>
                <ul className="mt-6 grid gap-4">
                  {clientelePage.portfolio.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-[#29454d]">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#00a899]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-4 sm:grid-cols-3">
                {clientelePage.logos.map((logo, index) => (
                  <div key={logo.label} className="grid min-h-40 place-items-center rounded-lg border border-[#102c35]/10 bg-white p-6 shadow-[0_18px_60px_rgba(16,44,53,0.07)]">
                    <Image src={logo.image} alt={logo.label} width={150} height={80} className="max-h-20 w-auto object-contain" />
                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[#5d6c70]">{String(index + 1).padStart(2, "0")}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-20">
            <Reveal>
              <SectionHeading eyebrow="Our Testimonies" title="What clients say after the work is delivered." />
            </Reveal>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <Reveal key={testimonial.author} delay={index * 80}>
                  <figure className="signal-surface h-full rounded-lg border border-[#102c35]/10 bg-white p-6 shadow-[0_20px_70px_rgba(16,44,53,0.08)]">
                    <Quote className="h-8 w-8 text-[#00a899]" aria-hidden="true" />
                    <blockquote className="microcopy mt-5 text-sm leading-7 text-[#29454d]">
                      {testimonial.quote}
                    </blockquote>
                    <figcaption className="mt-6 border-t border-[#102c35]/10 pt-5 text-sm font-semibold text-[#102c35]">
                      {testimonial.author}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
