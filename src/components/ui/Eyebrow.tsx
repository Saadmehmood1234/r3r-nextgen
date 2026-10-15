export function Eyebrow({ children }: { children: string }) {
  return (
    <p className="mb-1 text-xs font-extrabold uppercase tracking-[0.2em] text-leaf-dark">
      {children}
    </p>
  );
}