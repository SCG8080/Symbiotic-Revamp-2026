import { RadioTower, Share2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";

export function SocialPage() {
  return (
    <>
      <PageHero
        title="Our Social Media Feed"
        eyebrow="Social Media"
        summary="Follow the latest public updates from Symbiotic Consulting Group."
        image="/SCG Banner.jpeg"
        accent="#26a8e0"
        secondaryAccent="#00a899"
      >
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/58">Live signal</p>
            <RadioTower className="h-8 w-8 text-[#77e0d5]" />
          </div>
          <div className="rounded-md border border-white/12 bg-white/10 p-4">
            <Share2 className="h-5 w-5 text-[#77e0d5]" />
            <p className="mt-3 text-sm leading-7 text-white/74">
              SCG social updates in one live public feed.
            </p>
          </div>
        </div>
      </PageHero>
      <section className="bg-[#f6f8f5] px-5 py-20 sm:px-8 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-[#102c35]/10 bg-white p-3 shadow-[0_28px_90px_rgba(16,44,53,0.12)]">
            <iframe
              allowFullScreen
              id="wallsio-iframe"
              src="https://walls.io/x58k5?nobackground=1&show_header=0"
              className="h-[820px] w-full rounded-md"
              title="Symbiotic Consulting Group social feed"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
