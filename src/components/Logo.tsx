import logoImg from "@/assets/virtuosas-logo-transparent.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoImg}
        alt="Virtuosas Studio de Beleza"
        width={928}
        height={625}
        className="h-16 w-auto object-contain md:h-20"
      />
    </div>
  );
}
