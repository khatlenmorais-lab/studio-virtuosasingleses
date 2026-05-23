import logoImg from "@/assets/virtuosas-logo.jpeg";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoImg}
        alt="Virtuosas Studio de Beleza"
        width={1188}
        height={1599}
        className="h-14 w-auto object-contain md:h-16"
      />
    </div>
  );
}
