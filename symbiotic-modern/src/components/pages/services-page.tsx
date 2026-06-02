import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services, servicesPage, type Service } from "@/core/content/services";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesPage() {
  return (
    <>
      <PageHero
        title={servicesPage.title}
        eyebrow="Consulting services"
        summary={servicesPage.intro}
        image={servicesPage.image}
      />
      <section className="bg-[#f6f8f5] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group overflow-hidden rounded-lg border border-[#102c35]/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#102c35]/10"
    >
      <div className="relative h-48">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#061a20]/20" />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-[#102c35]">{service.title}</h2>
        <p className="mt-3 text-sm leading-7 text-[#5d6c70]">{service.summary}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#00a899]">
          Learn More
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function ServiceDetailPage({ service }: { service: Service }) {
  return (
    <>
      <PageHero
        title={service.title}
        eyebrow="Services"
        summary={service.summary}
        image={service.image}
      />
      <section className="bg-[#f6f8f5] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr]">
          <article className="rounded-lg bg-white p-6 shadow-sm sm:p-8">
            <SectionHeading title={service.title} eyebrow="Overview" />
            <div className="mt-6 space-y-5 text-base leading-8 text-[#5d6c70]">
              {service.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {service.extraSections?.map((section) => (
              <div key={section.title} className="mt-10 border-t border-[#102c35]/10 pt-8">
                <h2 className="text-2xl font-semibold text-[#102c35]">{section.title}</h2>
                {section.text ? <p className="mt-4 text-base leading-8 text-[#5d6c70]">{section.text}</p> : null}
                {section.bullets ? <BulletList items={section.bullets} /> : null}
              </div>
            ))}
          </article>

          <aside className="rounded-lg border border-[#102c35]/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#102c35]">{service.bulletsTitle}</h2>
            <BulletList items={service.bullets} />
          </aside>
        </div>
      </section>
    </>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-[#29454d]">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#47b549]" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
