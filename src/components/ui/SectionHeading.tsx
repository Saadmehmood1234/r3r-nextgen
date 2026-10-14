export function SectionHeading({
  eyebrow,
  title,
  text,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="mb-1 text-sm font-extrabold uppercase tracking-wider text-ember">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-extrabold text-ink md:text-4xl">{title}</h2>
      {text && (
        <p className="mt-3 max-w-xl text-sm text-muted md:text-base">{text}</p>
      )}
    </div>
  );
}
