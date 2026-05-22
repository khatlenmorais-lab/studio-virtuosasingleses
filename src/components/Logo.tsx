export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center leading-none ${className}`}>
      <span className="shimmer-gold font-display text-2xl font-bold uppercase tracking-[0.18em] md:text-3xl">
        Virtuosas
      </span>
      <span className="mt-1 text-[0.6rem] font-light uppercase tracking-[0.42em] text-muted-foreground md:text-xs">
        Studio de Beleza
      </span>
    </div>
  );
}
