type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  inverse,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#00a899]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-balance text-3xl font-semibold tracking-tight sm:text-4xl ${
          inverse ? "text-white" : "text-[#102c35]"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`mt-4 text-base leading-8 ${inverse ? "text-white/75" : "text-[#5d6c70]"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
