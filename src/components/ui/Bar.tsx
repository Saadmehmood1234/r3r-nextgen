export function Bar({ center = false }: { center?: boolean }) {
  return (
    <span
      aria-hidden
      className={`block h-0.5 w-8 bg-ember ${center ? "mx-auto" : ""}`}
    />
  );
}
