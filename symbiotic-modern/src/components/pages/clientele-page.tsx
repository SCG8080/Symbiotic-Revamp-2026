import Image from "next/image";
import { CheckCircle2, Quote, Trophy } from "lucide-react";
import { clientelePage, testimonials } from "@/core/content/pages";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ClientelePage() {
  return (
    <>
      <PageHero title={clientelePage.title} eyebrow="Clientele" summary={clientelePage.intro} image={clientelePage.image} accent="#3b82f6" secondaryAccent="#f59e0b">
        <div className="grid gap-5">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-400">Proof profile</p>
            <Trophy className="h-10 w-10 text-amber-500 opacity-80" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10">
              <p className="font-display text-3xl font-bold text-white">15+</p>
              <p className="mt-2 text-xs font-medium leading-relaxed text-slate-400">direct Florida clients</p>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10">
              <p className="font-display text-3xl font-bold text-white">20+</p>
              <p className="mt-2 text-xs font-medium leading-relaxed text-slate-400">major national clients</p>
            </div>
          </div>
        </div>
      </PageHero>
      <section className="bg-obsidian-light px-5 py-32 sm:px-8 lg:px-10 relative overflow-hidden">
        <div className="kinetic-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading eyebrow="Our Clients" title="Trust earned through consistent delivery." align="center" inverse />
          </Reveal>
          <div className="mt-20 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="glass-panel h-full rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-blue-500 opacity-5 blur-[100px] rounded-full" />
                <div className="relative z-10">
                  <h2 className="font-display text-3xl font-bold tracking-tight text-white">Portfolio includes</h2>
                  <div className="mt-8 h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
                  <ul className="mt-8 grid gap-5">
                    {clientelePage.portfolio.map((item) => (
                      <li key={item} className="flex gap-4 text-base font-medium leading-relaxed text-slate-300">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-6 sm:grid-cols-2">
                {clientelePage.logos.map((logo, index) => (
                  <div key={logo.label} className="glass-panel group grid min-h-[160px] place-items-center rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_30px_60px_rgba(59,130,246,0.15)] hover:bg-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 bg-blue-500/20 blur-[50px] opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none" />
                    <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
                      <Image src={logo.image} alt={logo.label} width={150} height={80} className="max-h-20 w-auto object-contain brightness-0 invert opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110 drop-shadow-lg" />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-32 border-t border-white/5 pt-32">
            <Reveal>
              <SectionHeading eyebrow="Our Testimonies" title="What clients say after the work is delivered." inverse />
            </Reveal>
            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <Reveal key={testimonial.author} delay={index * 80}>
                  <figure className="glass-panel-heavy group relative h-full rounded-3xl p-10 sm:p-12 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 overflow-hidden">
                    <div className="absolute -top-20 -right-20 p-32 bg-blue-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <Quote className="h-12 w-12 text-blue-500 opacity-80 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110" aria-hidden="true" />
                    <blockquote className="microcopy mt-10 text-xl leading-relaxed text-slate-300 group-hover:text-white transition-colors duration-500">
                      "{testimonial.quote}"
                    </blockquote>
                    <figcaption className="mt-12 flex items-center gap-4 border-t border-white/5 pt-8">
                      <div className="h-12 w-12 rounded-full bg-blue-500/20 grid place-items-center text-blue-400 font-bold text-lg border border-blue-500/30">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-display text-lg font-bold tracking-wide text-white">{testimonial.author}</div>
                        <div className="text-sm font-medium text-slate-400">Client Partner</div>
                      </div>
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
