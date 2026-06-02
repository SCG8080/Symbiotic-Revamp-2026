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
    accent: "#00a899",
    secondary: "#26a8e0",
    deep: "#062d34",
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
    accent: "#26a8e0",
    secondary: "#47b549",
    deep: "#0a3244",
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
    accent: "#47b549",
    secondary: "#26a8e0",
    deep: "#173a2a",
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
    accent: "#79b0ff",
    secondary: "#00a899",
    deep: "#172d4d",
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
    accent: "#d5b45f",
    secondary: "#00a899",
    deep: "#3b2d16",
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
    accent: "#c67a4b",
    secondary: "#26a8e0",
    deep: "#3b2418",
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
    accent: "#7b3454",
    secondary: "#00a899",
    deep: "#321827",
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
    accent: "#47b549",
    secondary: "#d5b45f",
    deep: "#1f351d",
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
    accent: "#ff8a65",
    secondary: "#26a8e0",
    deep: "#3d211b",
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
        accent="#00a899"
        secondaryAccent="#47b549"
      >
        <ServiceIndexPanel />
      </PageHero>
      <section className="bg-[#f6f8f5] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Capability Stack"
              title="Nine focused practices. One integrated delivery engine."
              text="SCG aligns strategy, engineering, data, infrastructure, delivery leadership, and talent around practical business outcomes."
              align="center"
            />
          </Reveal>
          <Reveal delay={90}>
            <ServiceCommandMap items={practiceItems} />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
    <div className="grid gap-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/58">
            Delivery cockpit
          </p>
          <p className="mt-2 text-2xl font-semibold text-white">Integrated IT services</p>
        </div>
        <Blocks className="h-9 w-9 text-[#77e0d5]" aria-hidden="true" />
      </div>
      <div className="grid gap-2">
        {featured.map((service) => {
          const experience = experienceFor(service);
          const Icon = experience.icon;
          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="flex items-center gap-3 rounded-md border border-white/12 bg-white/10 p-3 text-white transition hover:bg-white/16"
            >
              <span
                className="grid h-9 w-9 shrink-0 place-items-center rounded-md"
                style={{ backgroundColor: `${experience.accent}24`, color: experience.accent }}
              >
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold">{service.title}</span>
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
      className="signal-surface group block overflow-hidden rounded-lg border border-[#102c35]/10 bg-white shadow-[0_18px_60px_rgba(16,44,53,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_32px_90px_rgba(16,44,53,0.15)]"
      style={{ "--card-accent": experience.accent } as CSSProperties}
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(150deg, ${experience.deep} 0%, transparent 62%), linear-gradient(0deg, rgba(6,26,32,0.58), rgba(6,26,32,0.04))`,
          }}
        />
        <div className="kinetic-grid absolute inset-0 opacity-25" />
        <div
          className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-lg border border-white/18 bg-white/12 text-white backdrop-blur-xl"
          style={{ color: experience.accent }}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="absolute bottom-5 left-5 right-5 rounded-md border border-white/14 bg-[#071d24]/62 p-3 backdrop-blur-xl">
          <svg className="h-16 w-full" viewBox="0 0 240 64" aria-hidden="true">
            <path className="service-card-line" d="M 8 42 C 45 12, 82 20, 112 36 S 178 58, 232 18" />
            <circle className="service-card-node" cx="8" cy="42" r="4.5" />
            <circle className="service-card-node" cx="112" cy="36" r="4.5" />
            <circle className="service-card-node" cx="232" cy="18" r="4.5" />
          </svg>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {experience.stages.slice(0, 3).map((stage) => (
              <span key={stage} className="truncate text-[10px] font-bold uppercase tracking-[0.14em] text-white/62">
                {stage}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: experience.accent }}>
          {experience.metrics[0][0]} / {experience.metrics[1][0]} / {experience.metrics[2][0]}
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#102c35]">{service.title}</h2>
        <p className="microcopy mt-3 text-sm leading-7 text-[#5d6c70]">{experience.cinematic}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#102c35]">
          Enter practice
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function ServiceDetailPage({ service }: { service: Service }) {
  const experience = experienceFor(service);
  const Icon = experience.icon;

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
        className="relative overflow-hidden px-5 py-14 sm:px-8 lg:px-10"
        style={
          {
            background:
              "linear-gradient(180deg, #f6f8f5 0%, #ffffff 48%, #f6f8f5 100%)",
            "--service-accent": experience.accent,
            "--service-deep": experience.deep,
          } as CSSProperties
        }
      >
        <div className="kinetic-grid absolute inset-0 opacity-35" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-lg border border-[#102c35]/10 bg-white/88 p-6 shadow-[0_24px_90px_rgba(16,44,53,0.09)] backdrop-blur sm:p-8">
            <div className="flex items-center gap-3">
              <span
                className="grid h-12 w-12 place-items-center rounded-lg text-white"
                style={{ backgroundColor: experience.deep }}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: experience.accent }}>
                  Overview
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-[#102c35]">{service.title}</h2>
              </div>
            </div>
            <div className="mt-7 space-y-5 text-base leading-8 text-[#5d6c70]">
              {service.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <div className="rounded-lg border border-[#102c35]/10 bg-[#102c35] p-6 text-white shadow-[0_24px_90px_rgba(16,44,53,0.18)] sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: experience.accent }}>
              Operating Signal
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">{experience.signal}</h2>
            <div className="mt-8 grid gap-3">
              {experience.stages.map((stage, index) => (
                <div key={stage} className="flex items-center gap-4">
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-md text-sm font-bold"
                    style={{ backgroundColor: `${experience.accent}24`, color: experience.accent }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-white/12" />
                  <p className="w-44 text-sm font-semibold text-white/82">{stage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-8 grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal delay={80}>
            <section className="rounded-lg border border-[#102c35]/10 bg-white p-6 shadow-[0_20px_70px_rgba(16,44,53,0.08)] sm:p-8">
              <SectionHeading eyebrow="Capability Matrix" title={service.bulletsTitle} />
              <BulletList items={service.bullets} accent={experience.accent} />
            </section>
          </Reveal>

          <Reveal delay={160}>
            <section className="rounded-lg border border-[#102c35]/10 bg-white p-6 shadow-[0_20px_70px_rgba(16,44,53,0.08)] sm:p-8">
              <SectionHeading eyebrow="Execution Profile" title="How this practice shows up in the field." />
              <div className="mt-6 grid gap-4">
                {experience.metrics.map(([value, label]) => (
                  <div key={`${value}-${label}`} className="flex items-end justify-between border-b border-[#102c35]/10 pb-4">
                    <p className="text-4xl font-semibold tracking-tight text-[#102c35]">{value}</p>
                    <p className="max-w-40 text-right text-sm leading-6 text-[#5d6c70]">{label}</p>
                  </div>
                ))}
              </div>
              {service.extraSections?.map((section) => (
                <div key={section.title} className="mt-8 border-t border-[#102c35]/10 pt-6">
                  <h3 className="text-xl font-semibold text-[#102c35]">{section.title}</h3>
                  {section.text ? <p className="mt-3 text-sm leading-7 text-[#5d6c70]">{section.text}</p> : null}
                  {section.bullets ? <BulletList items={section.bullets} accent={experience.accent} compact /> : null}
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
    <div className="grid gap-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/58">
            Practice profile
          </p>
          <p className="mt-2 text-2xl font-semibold text-white">{service.title}</p>
        </div>
        <span
          className="grid h-14 w-14 shrink-0 place-items-center rounded-lg"
          style={{ backgroundColor: `${experience.accent}24`, color: experience.accent }}
        >
          <Icon className="h-6 w-6" />
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {experience.metrics.map(([value, label]) => (
          <div key={`${value}-${label}`} className="rounded-md border border-white/12 bg-white/10 p-3">
            <p className="text-xl font-semibold text-white">{value}</p>
            <p className="mt-1 text-xs leading-5 text-white/60">{label}</p>
          </div>
        ))}
      </div>
      <div className="rounded-md border border-white/12 bg-white/10 p-4">
        <p className="text-sm leading-7 text-white/72">{experience.signal}</p>
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
    <ul className={`mt-6 grid ${compact ? "gap-2" : "gap-3"}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-[#29454d]">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: accent }} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
