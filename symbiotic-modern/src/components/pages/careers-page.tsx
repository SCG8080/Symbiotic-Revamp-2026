import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { careersPage } from "@/core/content/pages";
import { PageHero } from "@/components/ui/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";

export function CareersPage() {
  return (
    <>
      <PageHero
        title={careersPage.title}
        eyebrow="Careers"
        summary="Strong earning power, long-term career planning, and a performance-driven culture."
        image={careersPage.image}
      />
      <section className="bg-[#f6f8f5] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Join SCG" title="A better path for today's technology professional." />
            <div className="mt-6 space-y-5 text-base leading-8 text-[#5d6c70]">
              {careersPage.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href={careersPage.positionsHref} external icon={ExternalLink}>
                Immediate Open Requirements
              </ButtonLink>
            </div>
          </div>
          <div className="relative min-h-[440px] overflow-hidden rounded-lg">
            <Image src="/Images/about-us.jpg" alt="" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
