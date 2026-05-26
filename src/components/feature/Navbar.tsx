import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) =>
    `text-lg font-bold tracking-wider whitespace-nowrap transition-colors duration-200 ${
      isActive(path) ? "text-[#11f292]" : "text-white hover:text-[#11f292]"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0d0d0d] shadow-lg" : "bg-[#0d0d0d]"
      }`}
    >
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-28">
          <a href="/" className="flex items-center cursor-pointer">
            <img
              alt="Solana Moderno Tile LLC"
              className="h-16 w-auto object-contain"
              src="https://storage.readdy-site.link/project_files/7fb27f8c-acf1-4b3b-9576-47b32ca04978/f5a093f1-abb0-444c-acae-3e27e86d1049_magnific__a-bold-dynamic-professional-italic-wordmark-logo-f__29552-1-1-1.png?v=346519245589441116222c1fcdf8b98e"
            />
          </a>

          <nav className="hidden md:flex items-center gap-10">
            <Link to="/" className={navLinkClass("/")}>
              INICIO
            </Link>
            <Link to="/about" className={navLinkClass("/about")}>
              NOSOTROS
            </Link>
            <Link to="/services" className={navLinkClass("/services")}>
              SERVICIOS
            </Link>
            <Link to="/contact" className={navLinkClass("/contact")}>
              CONTACTO
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://api.whatsapp.com/send/?phone=14696487618&text&type=phone_number&app_absent=0"
              className="flex items-center gap-2 whitespace-nowrap bg-[#11f292]/15 hover:bg-[#11f292]/25 border border-[#11f292]/40 text-white text-lg font-bold px-5 py-3.5 rounded-full transition-colors duration-200 cursor-pointer"
            >
              <i className="ri-phone-line text-[#11f292]"></i> (469) 648-7618
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 whitespace-nowrap bg-gradient-to-r from-[#9a44ff] to-[#11f292] hover:opacity-90 text-white text-lg font-bold px-7 py-3.5 rounded-full transition-opacity duration-200 cursor-pointer"
            >
              <i className="ri-mail-send-line"></i> Cotización Gratis
            </Link>
          </div>

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer text-white"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <i className={`text-2xl ${mobileOpen ? "ri-close-line" : "ri-menu-line"}`}></i>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0d0d0d] border-t border-white/10 px-4 pb-6">
          <nav className="flex flex-col gap-4 pt-4">
            <Link to="/" className={navLinkClass("/")}>
              INICIO
            </Link>
            <Link to="/about" className={navLinkClass("/about")}>
              NOSOTROS
            </Link>
            <Link to="/services" className={navLinkClass("/services")}>
              SERVICIOS
            </Link>
            <Link to="/contact" className={navLinkClass("/contact")}>
              CONTACTO
            </Link>
            <a
              href="https://api.whatsapp.com/send/?phone=14696487618&text&type=phone_number&app_absent=0"
              className="flex items-center justify-center gap-2 whitespace-nowrap bg-[#11f292]/15 hover:bg-[#11f292]/25 border border-[#11f292]/40 text-white font-bold px-6 py-3 rounded-full transition-colors duration-200 cursor-pointer mt-2"
            >
              <i className="ri-phone-line text-[#11f292]"></i> (469) 648-7618
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 whitespace-nowrap bg-gradient-to-r from-[#9a44ff] to-[#11f292] hover:opacity-90 text-white font-bold px-6 py-3 rounded-full transition-opacity duration-200 cursor-pointer mt-2"
            >
              <i className="ri-mail-send-line"></i> Cotización Gratis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}