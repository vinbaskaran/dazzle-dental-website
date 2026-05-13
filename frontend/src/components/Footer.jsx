import { Instagram, MapPin } from "lucide-react";
import { CLINIC } from "../lib/constants";

export const Footer = () => {
  return (
    <footer data-testid="site-footer" className="bg-brand-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img src={CLINIC.logo} alt="Dazzle" className="w-12 h-12 rounded-full ring-1 ring-white/20" />
              <div>
                <div className="font-serif text-2xl">Dazzle</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-brand-teal-soft">Dental · Cosmetic Studio</div>
              </div>
            </div>
            <p className="mt-5 text-white/70 max-w-md leading-relaxed text-sm">
              A premium teeth, skin & hair studio in Chennai — where specialist care meets spa-grade comfort.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] tracking-[0.3em] uppercase text-brand-teal-soft">Quick Links</div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href="#services" className="hover:text-brand-teal-soft">Services</a></li>
              <li><a href="#about" className="hover:text-brand-teal-soft">About</a></li>
              <li><a href="#doctors" className="hover:text-brand-teal-soft">Doctors</a></li>
              <li><a href="#booking" className="hover:text-brand-teal-soft">Book Appointment</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[11px] tracking-[0.3em] uppercase text-brand-teal-soft">Visit</div>
            <p className="mt-4 text-sm text-white/80 leading-relaxed">{CLINIC.address}</p>
            <div className="mt-5 flex gap-3">
              <a aria-label="Instagram" href={CLINIC.social.instagram} target="_blank" rel="noreferrer" data-testid="footer-instagram-link" className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-teal flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a aria-label="Google Maps" href={CLINIC.social.google} target="_blank" rel="noreferrer" data-testid="footer-google-link" className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-teal flex items-center justify-center transition-colors">
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-between text-xs text-white/50">
          <div>© {new Date().getFullYear()} Dazzle Dental & Cosmetic Studio. All rights reserved.</div>
          <div>Crafted with care for healthy smiles.</div>
        </div>
      </div>
    </footer>
  );
};
