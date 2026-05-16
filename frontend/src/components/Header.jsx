import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { CLINIC } from "../lib/constants";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Doctor", href: "#doctors" },
  { label: "Results", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-brand-light/85 border-b border-brand-navy/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between h-20">
        <a href="#home" data-testid="header-logo-link" className="flex items-center gap-3">
          <img src={CLINIC.logo} alt="Dazzle" className="h-12 w-12 rounded-full object-cover ring-1 ring-brand-navy/10" />
          <div className="leading-tight hidden sm:block">
            <div className="font-serif text-xl text-brand-navy tracking-tight">Dazzle</div>
            <div className="font-sans text-[10px] tracking-[0.25em] uppercase text-brand-teal">Dental · Cosmetic</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              data-testid={`nav-${item.label.toLowerCase()}-link`}
              className="font-sans text-[12px] tracking-[0.22em] uppercase text-brand-navy/80 hover:text-brand-teal transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${CLINIC.phoneRaw}`}
            data-testid="header-call-link"
            className="flex items-center gap-2 text-sm text-brand-navy/80 hover:text-brand-navy"
          >
            <Phone className="w-4 h-4" />
            {CLINIC.phone}
          </a>
          <a
            href="#booking"
            data-testid="header-book-button"
            className="ml-2 bg-brand-navy text-white px-6 py-3 rounded-full hover:bg-brand-teal transition-colors duration-300 font-sans tracking-[0.18em] uppercase text-xs"
          >
            Book Visit
          </a>
        </div>

        <button
          aria-label="Open menu"
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden p-2 text-brand-navy"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-brand-light border-t border-brand-navy/10" data-testid="mobile-menu">
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-${item.label.toLowerCase()}-link`}
                className="font-sans text-sm tracking-widest uppercase text-brand-navy"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              data-testid="mobile-book-button"
              className="mt-2 bg-brand-navy text-white px-6 py-3 rounded-full text-center font-sans tracking-widest uppercase text-xs"
            >
              Book Visit
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
};
