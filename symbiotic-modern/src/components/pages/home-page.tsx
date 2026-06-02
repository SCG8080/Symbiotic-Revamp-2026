import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Handshake, Network, ShieldCheck } from "lucide-react";
import { homeIntro, homeSlides, valueCards } from "@/core/content/pages";
import { services } from "@/core/content/services";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";

const stats = [
  ["15+", "direct Florida client relationships"],
  ["20+", "multi-billion-dollar clients nationwide"],
  ["24 X 5", "global coverage with 24 X 7 for select clients"],
];

const icons = [ShieldCheck, Handshake, Network];

export function HomePage() {
  const hero = homeSlides[0];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#102c35] text-white">
        <Image src={hero.image} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#061a20]/70" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,26,32,0.92)_0%,rgba(6,26,32,0.58)_52%,rgba(6,26,32,0.18)_100%)]" />
        <div className="relative mx-auto grid min-h-[58svh] max-w-7xl content-center px-5 py-16 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#77e0d5]">
              IT consulting. Strategy. Delivery. Talent.
            </p>
            <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
              Symbiotic Consulting Group
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-white/90">
              {hero.text}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/services" variant="primary">
                Explore Services
              </ButtonLink>
              <ButtonLink href="/contact" variant="light">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#102c35] px-5 py-6 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3">
          {stats.map(([value, label]) => (
            <div key={value} className="border-l border-[#77e0d5]/40 pl-4">
              <p className="text-2xl font-semibold text-white">{value}</p>
              <p className="mt-1 text-sm leading-6 text-white/70">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f6f8f5] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Welcome"
            title="Technology partners for mission critical work"
            text={homeIntro[0]}
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {valueCards.map((card, index) => {
              const Icon = icons[index];
              return (
                <article
                  key={card.title}
                  className="rounded-lg border border-[#102c35]/10 bg-white p-6 shadow-sm"
                >
                  <Icon className="h-7 w-7 text-[#00a899]" aria-hidden="true" />
                  <h2 className="mt-5 text-xl font-semibold text-[#102c35]">{card.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#5d6c70]">{card.text}</p>
                  <ul className="mt-5 grid gap-2">
                    {card.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm text-[#29454d]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#47b549]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-lg">
            <Image src="/Images/web-development.jpg" alt="" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionHeading eyebrow="Partnership Model" title="Built around clients, technology providers, employees, and delivery alliances." />
            <div className="mt-6 space-y-5 text-base leading-8 text-[#5d6c70]">
              {homeIntro.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#102c35] px-5 py-16 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Services"
              title="A sharper system for the same SCG expertise"
              text="Modern delivery across applications, data, infrastructure, project leadership, collaboration, staffing, and product development."
              inverse
            />
            <ButtonLink href="/services" variant="light">
              View All Services
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-lg border border-white/15 bg-white/10 p-5 transition hover:border-[#77e0d5]/60 hover:bg-white/15"
              >
                <p className="text-lg font-semibold text-white">{service.title}</p>
                <p className="mt-3 text-sm leading-7 text-white/72">{service.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#77e0d5]">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
