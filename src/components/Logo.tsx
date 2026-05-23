import logoImg from "@/assets/virtuosas-logo.jpeg";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-16 w-44 overflow-hidden md:h-20 md:w-56 ${className}`}>
      <img
        src={logoImg}
        alt="Virtuosas Studio de Beleza"
        width={1188}
        height={1599}
        className="absolute left-1/2 top-1/2 w-full max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
      />
    </div>
  );
}
