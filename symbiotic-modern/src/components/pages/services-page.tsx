import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  Blocks,
  CheckCircle2,
  Code2,
  DatabaseZap,
  GanttChart,
  Globe2,
  Rocket,
  ServerCog,
  Smartphone,
  UserRoundSearch,
  Users2,
  type LucideIcon,
} from "lucide-react";
import { services, servicesPage, type Service } from "@/core/content/services";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCommandMap, type PracticeMapItem } from "@/components/ui/service-command-map";

type ServiceExperience = {
  accent: string;
  secondary: string;
  deep: string;
  icon: LucideIcon;
  cinematic: string;
  signal: string;
  metrics: [string, string][];
  stages: string[];
};

const serviceExperiences: Record<string, ServiceExperience> = {
  "application-development": {
    accent: "#00e5d1", // teal
    secondary: "#3b82f6", // blue
    deep: "#0a1322",
    icon: Code2,
    cinematic: "Product-grade engineering systems for the business processes that cannot stall.",
    signal: "Architecture, delivery cadence, quality, and integration move as one operating system.",
    metrics: [
      ["Build", "new solutions"],
      ["Enhance", "existing apps"],
      ["Integrate", "business systems"],
    ],
    stages: ["Map process", "Architect platform", "Build product", "Test deeply", "Launch and tune"],
  },
  "business-intelligence": {
    accent: "#3b82f6", // blue
    secondary: "#00e5d1",
    deep: "#0a1322",
    icon: DatabaseZap,
    cinematic: "Decision intelligence that turns stored data into measurable business momentum.",
    signal: "Data models, warehouse strategy, guided analytics, and reports align around clear action.",
    metrics: [
      ["Insight", "at speed"],
      ["Model", "data flows"],
      ["Measure", "performance"],
    ],
    stages: ["Clarify KPIs", "Model data", "Integrate sources", "Design analytics", "Deploy decisions"],
  },
  "mobile-application": {
    accent: "#22c55e", // green
    secondary: "#3b82f6",
    deep: "#0a1322",
    icon: Smartphone,
    cinematic: "Secure mobile experiences for teams who need information anywhere, anytime.",
    signal: "Enterprise mobility strategy, user experience, cross-platform delivery, and production support.",
    metrics: [
      ["iOS", "Android"],
      ["Tablet", "workflows"],
      ["Secure", "integration"],
    ],
    stages: ["Define mobility", "Shape UX", "Build cross-platform", "Secure access", "Support adoption"],
  },
  "infrastructure-support": {
    accent: "#60a5fa",
    secondary: "#00e5d1",
    deep: "#0a1322",
    icon: ServerCog,
    cinematic: "Infrastructure support that keeps the technical foundation fast, resilient, and ready.",
    signal: "Network, virtualization, cloud, data center, storage, and support services tuned for operations.",
    metrics: [
      ["Run", "managed IT"],
      ["Protect", "systems"],
      ["Scale", "platforms"],
    ],
    stages: ["Assess estate", "Stabilize services", "Virtualize capacity", "Consolidate data", "Operate cleanly"],
  },
  "offshore-support": {
    accent: "#eab308", // yellow
    secondary: "#00e5d1",
    deep: "#0a1322",
    icon: Globe2,
    cinematic: "Global delivery coverage built around mission critical systems and cost discipline.",
    signal: "Offshore resources, overlap windows, application coverage, and SDLC contribution work together.",
    metrics: [
      ["24 X 5", "coverage"],
      ["~9 yrs", "avg experience"],
      [">20%", "cost goal"],
    ],
    stages: ["Select workload", "Align timezone", "Transfer context", "Run coverage", "Improve release flow"],
  },
  "project-management": {
    accent: "#f97316", // orange
    secondary: "#3b82f6",
    deep: "#0a1322",
    icon: GanttChart,
    cinematic: "Program control for complex delivery environments with budget, risk, and velocity pressure.",
    signal: "PMP, agile, delivery management, and technical leadership converge around execution clarity.",
    metrics: [
      ["PMP", "leaders"],
      ["Scrum", "delivery"],
      ["PMI", "sponsors"],
    ],
    stages: ["Frame scope", "Sequence work", "Manage risk", "Coordinate teams", "Deliver outcomes"],
  },
  collaboration: {
    accent: "#d946ef", // fuchsia
    secondary: "#00e5d1",
    deep: "#0a1322",
    icon: Users2,
    cinematic: "Collaboration ecosystems that turn portals, workflows, and knowledge into shared momentum.",
    signal: "Strategy, governance, migration, and expert sourcing create a practical collaboration model.",
    metrics: [
      ["Portal", "systems"],
      ["Govern", "SharePoint"],
      ["Migrate", "legacy"],
    ],
    stages: ["Map community", "Define governance", "Design portal", "Migrate knowledge", "Activate adoption"],
  },
  "strategic-staff": {
    accent: "#10b981", // emerald
    secondary: "#eab308",
    deep: "#0a1322",
    icon: UserRoundSearch,
    cinematic: "Technology people staffing for technology roles, filtered for skill, culture, and delivery fit.",
    signal: "Technical evaluation, discipline-specific screening, consultant connection, and client fit.",
    metrics: [
      ["Skill", "fit"],
      ["Culture", "fit"],
      ["Delivery", "fit"],
    ],
    stages: ["Understand need", "Screen technically", "Match culture", "Place talent", "Stay connected"],
  },
  "product-development": {
    accent: "#f43f5e", // rose
    secondary: "#3b82f6",
    deep: "#0a1322",
    icon: Rocket,
    cinematic: "Product development that compresses the distance between idea, market, and revenue.",
    signal: "Prioritization, innovation balance, agile delivery, and product launch discipline.",
    metrics: [
      ["Faster", "market"],
      ["Faster", "revenue"],
      ["Better", "R&D"],
    ],
    stages: ["Capture ideas", "Score value", "Prioritize build", "Launch product", "Learn and scale"],
  },
};

function experienceFor(service: Service) {
  return serviceExperiences[service.slug];
}

export function ServicesPage() {
  const practiceItems: PracticeMapItem[] = services.map((service) => {
    const experience = experienceFor(service);

    return {
      slug: service.slug,
      title: service.title,
      summary: experience.cinematic,
      accent: experience.accent,
      secondary: experience.secondary,
      metric: `${experience.metrics[0][0]} ${experience.metrics[0][1]}`,
      stage: experience.stages[0],
    };
  });

  return (
    <>
      <PageHero
        title={servicesPage.title}
        eyebrow="Consulting services"
        summary={servicesPage.intro}
        image={servicesPage.image}
        accent="#00e5d1"
        secondaryAccent="#22c55e"
      >
        <ServiceIndexPanel />
      </PageHero>
      <section className="bg-obsidian-light px-5 py-24 sm:px-8 lg:px-10 relative overflow-hidden border-b border-white/5">
        <div className="kinetic-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Capability Stack"
              title="Nine focused practices. One integrated delivery engine."
              text="SCG aligns strategy, engineering, data, infrastructure, delivery leadership, and talent around practical business outcomes."
              align="center"
              inverse
            />
          </Reveal>
          <Reveal delay={90}>
            <ServiceCommandMap items={practiceItems} />
          </Reveal>
          <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 70}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceIndexPanel() {
  const featured = services.slice(0, 4);

  return (
    <div className="grid gap-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal">
            Delivery cockpit
          </p>
          <p className="mt-2 font-display text-2xl font-bold text-white">Integrated IT services</p>
        </div>
        <Blocks className="h-10 w-10 text-teal" aria-hidden="true" />
      </div>
      <div className="grid gap-3">
        {featured.map((service) => {
          const experience = experienceFor(service);
          const Icon = experience.icon;
          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 text-white transition-all hover:bg-white/10 hover:border-teal/50"
            >
              <span
                className="grid h-10 w-10 shrink-0 place-items-center rounded-lg transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${experience.accent}20`, color: experience.accent }}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold tracking-wide transition-colors group-hover:text-teal">{service.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const experience = experienceFor(service);
  const Icon = experience.icon;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="glass-panel group block overflow-hidden rounded-2xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(34,211,238,0.15)] hover:border-teal/30"
      style={{ "--card-accent": experience.accent } as CSSProperties}
    >
      <div className="relative h-56 overflow-hidden bg-obsidian border-b border-white/5">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover opacity-60 mix-blend-luminosity transition duration-700 group-hover:scale-110 group-hover:opacity-80"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(150deg, ${experience.deep}E6 0%, transparent 80%), linear-gradient(0deg, rgba(5,11,20,0.9), rgba(5,11,20,0.1))`,
          }}
        />
        <div className="kinetic-grid absolute inset-0 opacity-20" />
        <div
          className="absolute left-6 top-6 grid h-14 w-14 place-items-center rounded-xl border border-white/10 bg-white/10 text-white backdrop-blur-xl shadow-lg transition-transform group-hover:scale-110"
          style={{ color: experience.accent }}
        >
          <Icon className="h-6 w-6" />
        </div>
        <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-obsidian/60 p-4 backdrop-blur-xl">
          <svg className="h-16 w-full" viewBox="0 0 240 64" aria-hidden="true">
            <path className="service-card-line stroke-white/20 group-hover:stroke-teal transition-colors duration-500" d="M 8 42 C 45 12, 82 20, 112 36 S 178 58, 232 18" fill="none" strokeWidth="2" />
            <circle className="service-card-node fill-white/50 group-hover:fill-teal transition-colors duration-500" cx="8" cy="42" r="4.5" />
            <circle className="service-card-node fill-white/50 group-hover:fill-teal transition-colors duration-500" cx="112" cy="36" r="4.5" />
            <circle className="service-card-node fill-white/50 group-hover:fill-teal transition-colors duration-500" cx="232" cy="18" r="4.5" />
          </svg>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {experience.stages.slice(0, 3).map((stage) => (
              <span key={stage} className="truncate text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-300">
                {stage}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-8">
        <p className="text-xs font-bold uppercase tracking-[0.24em]" style={{ color: experience.accent }}>
          {experience.metrics[0][0]} / {experience.metrics[1][0]} / {experience.metrics[2][0]}
        </p>
        <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-white group-hover:text-teal transition-colors">{service.title}</h2>
        <p className="microcopy mt-4 text-sm leading-relaxed text-slate-400">{experience.cinematic}</p>
        <div className="mt-8 flex items-center gap-3 text-sm font-semibold tracking-wide text-white group-hover:text-teal transition-colors">
          Enter practice
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition-transform group-hover:translate-x-2 group-hover:bg-teal/10">
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function ServiceDetailPage({ service }: { service: Service }) {
  const experience = experienceFor(service);
  const Icon = experience.icon;
  const serviceIndex = services.findIndex(s => s.slug === service.slug);
  const isEven = serviceIndex % 2 === 0;

  return (
    <>
      <PageHero
        title={service.title}
        eyebrow="SCG Practice"
        summary={experience.cinematic}
        image={service.image}
        accent={experience.accent}
        secondaryAccent={experience.secondary}
      >
        <ServiceHeroPanel service={service} experience={experience} />
      </PageHero>
      <section
        className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-10 bg-obsidian-light"
        style={
          {
            "--service-accent": experience.accent,
            "--service-deep": experience.deep,
          } as CSSProperties
        }
      >
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-light to-obsidian opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[var(--service-accent)] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
        <div className="kinetic-grid absolute inset-0 opacity-10" />
        
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start">
          <article className={`glass-panel-heavy group rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)] ${isEven ? "" : "lg:order-last"}`}>
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--service-accent)]/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-[var(--service-accent)] opacity-10 blur-[80px] rounded-full group-hover:opacity-30 group-hover:blur-[100px] transition-all duration-700" />
            <div className="relative z-10 flex items-center gap-5">
              <span
                className="grid h-16 w-16 place-items-center rounded-2xl text-white shadow-lg transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                style={{ backgroundColor: experience.deep, border: `1px solid ${experience.accent}50`, boxShadow: `0 10px 30px -10px ${experience.accent}40` }}
              >
                <Icon className="h-8 w-8" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em]" style={{ color: experience.accent }}>
                  Overview
                </p>
                <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-white">{service.title}</h2>
              </div>
            </div>
            <div className="relative z-10 mt-10 space-y-6 text-lg leading-relaxed text-slate-300">
              {service.body.map((paragraph, idx) => (
                <p 
                  key={paragraph} 
                  className={idx === 0 ? "first-letter:text-6xl first-letter:font-display first-letter:font-bold first-letter:text-[var(--service-accent)] first-letter:float-left first-letter:mr-4 first-letter:mt-1 first-line:uppercase first-line:tracking-widest text-white/90 text-xl font-medium" : ""}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          <div className="rounded-3xl border border-white/5 bg-obsidian p-8 sm:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-40 bg-[var(--service-accent)] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em]" style={{ color: experience.accent }}>
                Operating Signal
              </p>
              <h2 className="font-display mt-4 text-4xl font-bold tracking-tight text-white">{experience.signal}</h2>
              <div className="mt-12 grid gap-5">
                {experience.stages.map((stage, index) => (
                  <div key={stage} className="group flex items-center gap-5">
                    <span
                      className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-base font-bold shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                      style={{ backgroundColor: `${experience.accent}15`, color: experience.accent, border: `1px solid ${experience.accent}30` }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent transition-colors duration-500 group-hover:from-[var(--service-accent)] opacity-50" />
                    <p className="w-48 text-base font-semibold text-slate-300 group-hover:text-white transition-colors">{stage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-12 grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={80}>
            <section className={`glass-panel h-full rounded-3xl p-8 sm:p-12 relative overflow-hidden ${isEven ? "" : "lg:order-last"}`}>
              <div className="absolute bottom-0 right-0 p-32 bg-[var(--service-accent)] opacity-[0.03] blur-[80px] rounded-full pointer-events-none" />
              <div className="relative z-10">
                <SectionHeading eyebrow="Capability Matrix" title={service.bulletsTitle} inverse />
                <BulletList items={service.bullets} accent={experience.accent} />
              </div>
            </section>
          </Reveal>

          <Reveal delay={160}>
            <section className="glass-panel-heavy h-full rounded-3xl p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-[var(--service-accent)] to-transparent opacity-20" />
              <SectionHeading eyebrow="Execution Profile" title="How this practice shows up in the field." inverse />
              <div className="mt-12 grid gap-8">
                {experience.metrics.map(([value, label]) => (
                  <div key={`${value}-${label}`} className="flex items-end justify-between border-b border-white/5 pb-6 transition-colors hover:border-[var(--service-accent)]">
                    <p className="font-display text-5xl font-bold tracking-tight text-white">{value}</p>
                    <p className="max-w-48 text-right text-sm font-medium leading-relaxed text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
              {service.extraSections?.map((section) => (
                <div key={section.title} className="mt-12 border-t border-white/5 pt-10">
                  <h3 className="font-display text-2xl font-bold text-white">{section.title}</h3>
                  {section.text ? <p className="mt-5 text-base leading-relaxed text-slate-300">{section.text}</p> : null}
                  {section.bullets ? <div className="mt-3"><BulletList items={section.bullets} accent={experience.accent} compact /></div> : null}
                </div>
              ))}
            </section>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ServiceHeroPanel({
  service,
  experience,
}: {
  service: Service;
  experience: ServiceExperience;
}) {
  const Icon = experience.icon;

  return (
    <div className="grid gap-6">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal">
            Practice profile
          </p>
          <p className="mt-3 font-display text-3xl font-bold text-white">{service.title}</p>
        </div>
        <span
          className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl"
          style={{ backgroundColor: `${experience.accent}20`, color: experience.accent }}
        >
          <Icon className="h-8 w-8" />
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {experience.metrics.map(([value, label]) => (
          <div key={`${value}-${label}`} className="rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10">
            <p className="font-display text-2xl font-bold text-white">{value}</p>
            <p className="mt-2 text-xs font-medium leading-relaxed text-slate-400">{label}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-white/5 bg-white/5 p-5">
        <p className="text-sm font-medium leading-relaxed text-slate-300">{experience.signal}</p>
      </div>
    </div>
  );
}

function BulletList({
  items,
  accent,
  compact,
}: {
  items: string[];
  accent: string;
  compact?: boolean;
}) {
  return (
    <ul className={`mt-8 grid ${compact ? "gap-3" : "gap-4"}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-4 text-base font-medium leading-relaxed text-slate-300">
          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0" style={{ color: accent }} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
