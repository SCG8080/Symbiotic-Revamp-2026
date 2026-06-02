import Image from "next/image";
import { CheckCircle2, Quote } from "lucide-react";
import { clientelePage, testimonials } from "@/core/content/pages";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";

export function ClientelePage() {
  return (
    <>
      <PageHero title={clientelePage.title} eyebrow="Clientele" summary={clientelePage.intro} image={clientelePage.image} />
      <section className="bg-[#f6f8f5] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Our Clients" title="Trusted for high-stakes technology work." align="center" />
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-lg border border-[#102c35]/10 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#102c35]">Our portfolio includes</h2>
              <ul className="mt-5 grid gap-3">
                {clientelePage.portfolio.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-[#29454d]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00a899]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {clientelePage.logos.map((logo) => (
                <div key={logo.label} className="grid min-h-32 place-items-center rounded-lg border border-[#102c35]/10 bg-white p-6 shadow-sm">
                  <Image src={logo.image} alt={logo.label} width={140} height={70} className="max-h-20 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <SectionHeading eyebrow="Our Testimonies" title="What clients say after the work is delivered." />
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.author} className="rounded-lg border border-[#102c35]/10 bg-white p-6 shadow-sm">
                  <Quote className="h-7 w-7 text-[#00a899]" aria-hidden="true" />
                  <blockquote className="mt-4 text-sm leading-7 text-[#29454d]">
                    {testimonial.quote}
                  </blockquote>
                  <figcaption className="mt-5 text-sm font-semibold text-[#102c35]">
                    {testimonial.author}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
