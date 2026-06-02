import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { aboutPage, capabilities } from "@/core/content/pages";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutPage() {
  return (
    <>
      <PageHero title={aboutPage.title} eyebrow={aboutPage.eyebrow} summary={aboutPage.intro} image={aboutPage.image} />
      <section className="bg-[#f6f8f5] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-lg">
            <Image src={aboutPage.coreImage} alt="" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionHeading eyebrow="Commitment" title="Best in class partnerships, built on respect and trust." />
            <ul className="mt-6 grid gap-4">
              {aboutPage.commitment.map((item) => (
                <li key={item} className="flex gap-3 rounded-lg border border-[#102c35]/10 bg-white p-4 text-sm leading-6 text-[#29454d]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00a899]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Core Values" title="The operating standard behind every engagement." align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {aboutPage.values.map((value) => (
              <div key={value} className="rounded-lg border border-[#102c35]/10 p-5 text-sm leading-7 text-[#29454d]">
                {value}
              </div>
            ))}
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
        eyebrow="Capabilities"
        summary="A focused view of SCG's consulting, automation, enterprise platform, data, and custom solution strengths."
        image="/Images/webdev.jpg"
      />
      <section className="bg-[#f6f8f5] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((capability) => (
            <article key={capability.title} className="overflow-hidden rounded-lg border border-[#102c35]/10 bg-white shadow-sm">
              <div className="relative h-48">
                <Image src={capability.image} alt="" fill sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#102c35]">{capability.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#5d6c70]">{capability.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
