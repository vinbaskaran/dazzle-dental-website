import { MessageCircle } from "lucide-react";
import { CLINIC } from "../lib/constants";

export const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${CLINIC.whatsapp}?text=Hi%20Dazzle%2C%20I'd%20like%20to%20book%20a%20consultation.`}
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    data-testid="whatsapp-floating-button"
    className="fixed bottom-[72px] lg:bottom-6 right-6 z-40 bg-[#25D366] hover:scale-110 transition-transform text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);
