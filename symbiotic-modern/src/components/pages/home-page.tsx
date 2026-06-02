import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CircuitBoard,
  Handshake,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { homeIntro, homeSlides, valueCards } from "@/core/content/pages";
import { services } from "@/core/content/services";
import { ButtonLink } from "@/components/ui/button-link";
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
      <section className="relative isolate overflow-hidden bg-[#102c35] text-white">
        <Image src={hero.image} alt="" fill priority sizes="100vw" className="hero-mask object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,26,32,0.96),rgba(6,26,32,0.74)_54%,rgba(6,26,32,0.42))]" />
        <div className="kinetic-grid absolute inset-0 opacity-35" />
        <div className="relative mx-auto grid min-h-[calc(100svh-145px)] max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div className="flex flex-col justify-center">
            <Reveal>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#77e0d5]">
                IT consulting. Strategy. Delivery. Talent.
              </p>
              <h1 className="max-w-5xl text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
                Symbiotic Consulting Group
              </h1>
              <p className="microcopy mt-7 max-w-3xl text-xl leading-9 text-white/88">
                {hero.text}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/services" variant="primary">
                  Explore Services
                </ButtonLink>
                <ButtonLink href="/contact" variant="light">
                  Contact Us
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140} className="hidden items-center lg:flex">
            <div className="signal-surface w-full rounded-lg border border-white/16 bg-white/10 p-5 shadow-[0_30px_110px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/58">
                    SCG mission control
                  </p>
                  <p className="mt-2 text-2xl font-semibold">Technology + process</p>
                </div>
                <CircuitBoard className="h-10 w-10 text-[#77e0d5]" aria-hidden="true" />
              </div>
              <div className="mt-7 grid gap-3">
                {homeSlides.slice(1).map((slide, index) => (
                  <div key={slide.title} className="rounded-md border border-white/12 bg-white/10 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-semibold">{slide.title}</p>
                      <span className="text-xs font-bold text-[#77e0d5]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-white/62">{slide.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden bg-[#102c35] py-5 text-white">
        <div className="marquee-track flex w-max gap-3">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="inline-flex h-11 items-center rounded-lg border border-white/12 bg-white/10 px-5 text-sm font-semibold text-white/72"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3">
          {stats.map(([value, label], index) => (
            <Reveal key={value} delay={index * 80}>
              <div className="rounded-lg border border-[#102c35]/10 bg-[#f6f8f5] p-6">
                <p className="text-4xl font-semibold tracking-tight text-[#102c35]">{value}</p>
                <p className="mt-2 text-sm leading-6 text-[#5d6c70]">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#f6f8f5] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Welcome"
              title="A technology consulting partner built for visible outcomes."
              text={homeIntro[0]}
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {valueCards.map((card, index) => {
              const Icon = icons[index];
              return (
                <Reveal key={card.title} delay={index * 90}>
                  <article className="signal-surface h-full rounded-lg border border-[#102c35]/10 bg-white p-6 shadow-[0_18px_60px_rgba(16,44,53,0.08)]">
                    <div className="flex items-center justify-between gap-4">
                      <Icon className="h-8 w-8 text-[#00a899]" aria-hidden="true" />
                      <Sparkles className="h-5 w-5 text-[#d5b45f]" aria-hidden="true" />
                    </div>
                    <h2 className="mt-6 text-2xl font-semibold tracking-tight text-[#102c35]">{card.title}</h2>
                    <p className="microcopy mt-3 text-sm leading-7 text-[#5d6c70]">{card.text}</p>
                    <ul className="mt-6 grid gap-2">
                      {card.points.map((point) => (
                        <li key={point} className="flex gap-2 text-sm text-[#29454d]">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#47b549]" />
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

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="relative min-h-[520px] overflow-hidden rounded-lg">
              <Image src="/Images/web-development.jpg" alt="" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(16,44,53,0.78))]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#77e0d5]">
                  Partnership model
                </p>
                <p className="mt-3 text-2xl font-semibold">Experts locally. Alliance resources when needed.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Partnership Model"
              title="Clients, technology providers, employees, and delivery partners operating as one system."
            />
            <div className="mt-7 space-y-5 text-base leading-8 text-[#5d6c70]">
              {homeIntro.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#102c35] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="kinetic-grid absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Services"
                title="The SCG practice constellation"
                text="Modern delivery across applications, data, infrastructure, project leadership, collaboration, staffing, and product development."
                inverse
              />
            </Reveal>
            <Reveal delay={100}>
              <ButtonLink href="/services" variant="light">
                View All Services
              </ButtonLink>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 55}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block rounded-lg border border-white/14 bg-white/10 p-5 transition hover:-translate-y-1 hover:border-[#77e0d5]/60 hover:bg-white/14"
                >
                  <p className="text-lg font-semibold text-white">{service.title}</p>
                  <p className="microcopy mt-3 text-sm leading-7 text-white/72">{service.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#77e0d5]">
                    Enter practice
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
