import { Phone } from "lucide-react";
import { CLINIC } from "../lib/constants";

export const MobileStickyCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex">
    <a
      href={`tel:${CLINIC.phoneRaw}`}
      aria-label="Call us"
      className="flex-1 flex items-center justify-center gap-2 py-4 text-brand-navy font-medium text-sm border-r border-gray-200 active:bg-gray-50"
    >
      <Phone className="w-4 h-4" />
      Call Us
    </a>
    <a
      href="#booking"
      className="flex-1 flex items-center justify-center gap-2 py-4 bg-brand-navy text-white font-medium text-sm active:opacity-90"
    >
      Book Now
    </a>
  </div>
);
