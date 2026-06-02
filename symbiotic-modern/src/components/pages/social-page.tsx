import { PageHero } from "@/components/ui/page-hero";

export function SocialPage() {
  return (
    <>
      <PageHero
        title="Our Social Media Feed"
        eyebrow="Social Media"
        summary="Follow the latest public updates from Symbiotic Consulting Group."
        image="/SCG Banner.jpeg"
      />
      <section className="bg-[#f6f8f5] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-[#102c35]/10 bg-white shadow-sm">
          <iframe
            allowFullScreen
            id="wallsio-iframe"
            src="https://walls.io/x58k5?nobackground=1&show_header=0"
            className="h-[800px] w-full"
            title="Symbiotic Consulting Group social feed"
          />
        </div>
      </section>
    </>
  );
}
