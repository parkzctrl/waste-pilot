import Reveal from "@/components/ui/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className="eyebrow">
        <span className="h-px w-6 bg-accent-600" aria-hidden />
        {eyebrow}
        {align === "center" && (
          <span className="h-px w-6 bg-accent-600" aria-hidden />
        )}
      </p>
      <h2
        className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-charcoal-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            dark ? "text-charcoal-300" : "text-charcoal-500"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
