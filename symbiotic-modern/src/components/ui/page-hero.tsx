import Image from "next/image";

type PageHeroProps = {
  title: string;
  eyebrow?: string;
  summary?: string;
  image: string;
};

export function PageHero({ title, eyebrow, summary, image }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#102c35]">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#07191f]/72" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f6f8f5] to-transparent" />
      </div>
      <div className="relative mx-auto flex min-h-[360px] max-w-7xl flex-col justify-end px-5 pb-14 pt-28 sm:px-8 lg:px-10">
        <div className="max-w-4xl text-white">
          {eyebrow ? (
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#77e0d5]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            {title}
          </h1>
          {summary ? (
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">{summary}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
