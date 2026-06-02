import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Handshake,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { homeIntro, homeSlides, valueCards } from "@/core/content/pages";
import { services } from "@/core/content/services";
import { ButtonLink } from "@/components/ui/button-link";
import { AIBackground } from "@/components/ui/ai-background";
import { TypewriterText } from "@/components/ui/typewriter-text";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const stats = [
  ["15+", "direct Florida client relationships"],
  ["20+", "multi-billion-dollar clients nationwide"],
  ["24 X 5", "global coverage with 24 X 7 for select clients"],
];

const icons = [ShieldCheck, Handshake, Network];
const marqueeItems = [
  "Application Development",
  "Business Intelligence",
  "Mobile Workforce",
  "Infrastructure Support",
  "Offshore Coverage",
  "Project Management",
  "Collaboration",
  "Strategic Staffing",
  "Product Development",
];

export function HomePage() {
  const hero = homeSlides[0];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-obsidian text-white border-b border-white/5">
        <Image src={hero.image} alt="" fill priority sizes="100vw" className="hero-mask object-cover opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/80 to-obsidian" />
        <AIBackground />
        
        <div className="relative mx-auto grid h-[calc(100svh-80px)] max-w-7xl lg:grid-cols-2 items-center gap-6 px-5 py-8 lg:py-10 xl:py-20 sm:px-8 lg:px-10">
          <Reveal>
            <div className="text-left">
              <div className="mb-4 xl:mb-6 inline-flex items-center gap-2 xl:gap-3 rounded-full border border-scg-blue/30 bg-scg-blue/10 px-4 xl:px-5 py-1.5 xl:py-2 backdrop-blur-md">
                <span className="h-1.5 xl:h-2 w-1.5 xl:w-2 rounded-full bg-scg-green animate-pulse" />
                <p className="text-[10px] xl:text-xs font-bold uppercase tracking-[0.2em] text-scg-teal">
                  Fully AI-Enabled Technology Consulting
                </p>
              </div>
              <h1 className="font-display max-w-5xl text-balance text-4xl lg:text-4xl xl:text-6xl font-bold tracking-tight leading-tight xl:leading-[1.1]">
                Architecting <br/>
                <span className="text-gradient-brand block mt-1 xl:mt-3">
                  <TypewriterText phrases={["Intelligent Delivery", "AI-Driven Development", "Next-Gen Automation"]} />
                </span>
              </h1>
              <p className="microcopy mt-4 xl:mt-6 max-w-2xl text-sm lg:text-base xl:text-xl leading-relaxed text-slate-300">
                Accelerate your development, optimize your infrastructure, and scale your workforce with SCG's AI-driven delivery models.
              </p>
              <div className="mt-6 xl:mt-10 flex flex-wrap gap-3 xl:gap-4">
                <ButtonLink href="/services" variant="primary">
                  Explore Services
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Partner with us
                </ButtonLink>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="relative group perspective-1000 w-full max-w-sm mx-auto lg:max-w-xs xl:max-w-md hidden lg:block lg:ml-auto">
              {/* Massive ambient glow that changes color and expands on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-scg-teal via-scg-blue to-scg-green opacity-20 blur-[80px] transition-all duration-700 group-hover:opacity-70 group-hover:blur-[120px] group-hover:scale-110 pointer-events-none" />
              
              {/* Image container with 3D tilt effect on hover */}
              <div className="relative z-10 overflow-hidden rounded-3xl border border-white/10 bg-obsidian-light/50 p-2 backdrop-blur-sm shadow-2xl transition-all duration-700 group-hover:-translate-y-4 group-hover:border-scg-teal/50 group-hover:shadow-[0_40px_80px_rgba(0,168,153,0.3)]">
                <Image 
                  src="/Images/SCG-Banner.jpeg" 
                  alt="SCG Technology Framework" 
                  width={800} 
                  height={600} 
                  className="rounded-2xl object-cover opacity-90 mix-blend-screen transition-all duration-700 group-hover:opacity-100 group-hover:scale-105 group-hover:mix-blend-normal" 
                  priority
                />
                
                {/* Overlay particle/light effects on the image itself */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),_rgba(255,255,255,0.2)_0%,_transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Scroll down indicator for next section */}
        <Link href="#stats" className="absolute right-6 lg:right-10 bottom-24 xl:bottom-28 z-20 hidden lg:flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
          <div className="animate-bounce flex flex-col items-center">
            <span className="text-[10px] font-bold tracking-[0.2em] text-scg-teal mb-2 rotate-180" style={{ writingMode: 'vertical-rl' }}>SCROLL</span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-scg-teal/30 bg-scg-teal/10 backdrop-blur-sm hover:bg-scg-teal/20 transition-colors">
              <ArrowDown className="h-5 w-5 text-scg-teal" />
            </div>
          </div>
        </Link>

        {/* Integrated Marquee at bottom of Hero */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-white/10 bg-obsidian/40 backdrop-blur-md py-4">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-obsidian to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-obsidian to-transparent z-10" />
          <div className="marquee-track flex w-max gap-6">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="glass-panel-premium inline-flex h-12 items-center rounded-xl px-6 font-display text-sm font-bold tracking-wider text-white shadow-lg transition-transform hover:scale-105"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="bg-obsidian px-5 py-24 sm:px-8 lg:px-10 relative border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-scg-blue/10 via-obsidian to-obsidian opacity-60" />
        <div className="relative mx-auto grid max-w-7xl gap-6 sm:grid-cols-3">
          {stats.map(([value, label], index) => (
            <Reveal key={value} delay={index * 100}>
              <div className="glass-panel-premium group relative overflow-hidden rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(38,168,224,0.15)] hover:border-scg-blue/40">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-scg-teal opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
                <p className="font-display text-5xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-scg-teal group-hover:to-scg-blue transition-all">{value}</p>
                <p className="mt-4 text-sm font-medium leading-relaxed tracking-wide text-slate-400 group-hover:text-slate-300 transition-colors">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-obsidian-light px-5 py-32 sm:px-8 lg:px-10 relative border-y border-white/5">
        <div className="kinetic-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Welcome"
              title="A technology consulting partner built for visible outcomes."
              text={homeIntro[0]}
              align="center"
              inverse
            />
          </Reveal>
          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {valueCards.map((card, index) => {
              const Icon = icons[index];
              return (
                <Reveal key={card.title} delay={index * 120}>
                  <article className="glass-panel-premium group relative h-full overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-scg-teal/40 hover:shadow-[0_20px_40px_rgba(0,168,153,0.2)]">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-scg-teal/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-scg-teal/10 text-scg-teal ring-1 ring-scg-teal/20 transition-transform duration-500 group-hover:scale-110 group-hover:bg-scg-teal/20 group-hover:ring-scg-teal/40">
                        <Icon className="h-7 w-7" aria-hidden="true" />
                      </div>
                      <Sparkles className="h-6 w-6 text-scg-green opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    </div>
                    <h2 className="mt-8 font-display text-2xl font-bold tracking-tight text-white">{card.title}</h2>
                    <p className="microcopy mt-4 text-sm leading-relaxed text-slate-400">{card.text}</p>
                    <div className="mt-8 h-px w-full bg-gradient-to-r from-white/5 via-white/10 to-transparent" />
                    <ul className="mt-8 grid gap-4">
                      {card.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm font-medium text-slate-300">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-scg-green" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Model */}
      <section className="bg-obsidian px-5 py-32 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="relative min-h-[600px] overflow-hidden rounded-2xl border border-white/10 ring-1 ring-white/5">
              <Image src="/Images/web-development.jpg" alt="" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover opacity-60 mix-blend-luminosity hover:opacity-80 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1),transparent_70%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-10 text-white backdrop-blur-sm border-t border-white/5 bg-obsidian/40">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal">
                  Partnership model
                </p>
                <p className="mt-4 font-display text-3xl font-bold leading-snug">Experts locally. Alliance resources when needed.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <SectionHeading
              eyebrow="Partnership Model"
              title="Clients, technology providers, employees, and delivery partners operating as one system."
              inverse
            />
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-slate-400">
              {homeIntro.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-12">
              <ButtonLink href="/about" variant="secondary">
                Learn about SCG
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Section Complete Revamp */}
      <section className="relative overflow-hidden bg-obsidian-light px-5 py-32 text-white sm:px-8 lg:px-10 border-t border-white/5">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-scg-teal/30 to-transparent" />
        <div className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-scg-blue/10 blur-[120px]" />
        <div className="absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-scg-green/10 blur-[120px]" />
        
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Services built for <br/>
                <span className="text-gradient-brand">modern operations.</span>
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-slate-400">
                AI-driven delivery across applications, data, infrastructure, project leadership, and workforce optimization.
              </p>
            </div>
          </Reveal>
          
          <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 60}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/[0.08] hover:border-scg-blue/30 lg:flex-row lg:items-center"
                >
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-scg-teal via-scg-blue to-scg-green opacity-0 transition-opacity group-hover:opacity-100" />
                  
                  <div className="flex max-w-2xl items-start gap-8">
                    <span className="hidden font-display text-5xl font-bold text-white/10 transition-colors group-hover:text-scg-teal/20 lg:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white group-hover:text-scg-blue transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-400">
                        {service.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center justify-between lg:w-48 lg:flex-col lg:items-end lg:gap-4">
                    <span className="font-display text-4xl font-bold text-white/10 lg:hidden">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all group-hover:border-scg-teal/30 group-hover:bg-scg-teal/10 group-hover:text-scg-teal">
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <ButtonLink href="/services" variant="primary">
              View comprehensive catalog
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
