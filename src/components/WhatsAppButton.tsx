import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_8px_30px_rgba(37,211,102,0.55)] transition-transform hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle className="h-7 w-7 fill-white" strokeWidth={1.5} />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full opacity-30" style={{ backgroundColor: "#25D366" }} />
    </a>
  );
}
