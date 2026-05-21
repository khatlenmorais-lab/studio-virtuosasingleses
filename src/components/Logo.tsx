import logo from "@/assets/logo-virtuosas.jpeg";

export function Logo({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const h = size === "lg" ? "h-20" : size === "sm" ? "h-10" : "h-14";
  return (
    <img
      src={logo}
      alt="Virtuosas Studio de Beleza"
      className={`${h} w-auto object-contain ${className}`}
    />
  );
}
