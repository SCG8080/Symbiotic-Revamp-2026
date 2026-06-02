import Image from "next/image";
import { industries, industryPage } from "@/core/content/pages";
import { PageHero } from "@/components/ui/page-hero";

export function IndustryPage() {
  return (
    <>
      <PageHero title={industryPage.title} eyebrow="Industry Solutions" summary={industryPage.intro} image={industryPage.image} />
      <section className="bg-[#f6f8f5] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6">
          {industries.map((industry, index) => (
            <article
              key={industry.title}
              className="grid overflow-hidden rounded-lg border border-[#102c35]/10 bg-white shadow-sm lg:grid-cols-[0.8fr_1.2fr]"
            >
              <div className={`relative min-h-[260px] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image src={industry.image} alt="" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-[#102c35]">{industry.title}</h2>
                <p className="mt-4 text-base leading-8 text-[#5d6c70]">{industry.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
