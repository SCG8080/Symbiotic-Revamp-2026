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
        <div className={`mb-4 inline-flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-px w-6 bg-teal" />
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal">
            {eyebrow}
          </p>
        </div>
      ) : null}
      <h2
        className={`font-display text-balance text-4xl font-bold tracking-tight sm:text-5xl ${
          inverse ? "text-white" : "text-white"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`mt-6 text-lg leading-relaxed ${inverse ? "text-slate-400" : "text-slate-400"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
