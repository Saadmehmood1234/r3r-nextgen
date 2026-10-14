export function SectionHeading({
  eyebrow,
  title,
  text,
  className = "",
  titleColor="text-ink",
  textColor="text-muted",
  eyebrowColor="text-ember"
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  className?: string;
  titleColor?:string,
  textColor?:string,
  eyebrowColor?:string
}) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className={`mb-1 text-sm font-extrabold uppercase tracking-wider ${eyebrowColor}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-extrabold ${titleColor} md:text-4xl`}>{title}</h2>
      {text && (
        <p className={`mt-3 max-w-xl text-sm ${textColor} md:text-base`}>{text}</p>
      )}
    </div>
  );
}
