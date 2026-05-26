import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white border-t border-[#11f292]/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <img
              alt="Solana Moderno Tile LLC"
              className="h-16 w-auto object-contain mb-4"
              src="https://storage.readdy-site.link/project_files/7fb27f8c-acf1-4b3b-9576-47b32ca04978/f5a093f1-abb0-444c-acae-3e27e86d1049_magnific__a-bold-dynamic-professional-italic-wordmark-logo-f__29552-1-1-1.png?v=346519245589441116222c1fcdf8b98e"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Instalación profesional de pisos y revestimientos en Dallas, Texas. 16 años de experiencia ofreciendo acabados de alta calidad, artesanía experta y soluciones de remodelación moderna.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/solanamodernotile"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#11f292] transition-colors cursor-pointer"
              >
                <i className="ri-instagram-line text-base"></i>
              </a>
              <a
                href="https://www.facebook.com/solanamodernotile"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#11f292] transition-colors cursor-pointer"
              >
                <i className="ri-facebook-fill text-base"></i>
              </a>
              <a
                href="mailto:LandaverdeLopezjose@gmail.com"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#11f292] transition-colors cursor-pointer"
              >
                <i className="ri-mail-line text-base"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=14696487618&text&type=phone_number&app_absent=0"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#11f292] transition-colors cursor-pointer"
              >
                <i className="ri-phone-line text-base"></i>
              </a>
            </div>
            <div className="mt-6 rounded-xl overflow-hidden border border-white/10">
              <iframe
                title="Solana Moderno Tile LLC - Dallas, TX"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214283.617!2d-96.8960!3d32.8206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974f%3A0x13c!2sDallas%2C+TX!5e0!3m2!1ses!2sus!4v1"
                width="100%"
                height={160}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div>
            <h4 className="text-[#11f292] font-semibold uppercase text-xs tracking-widest mb-5">Navegación</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-gray-400 text-sm hover:text-[#11f292] transition-colors cursor-pointer">Inicio</Link></li>
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-[#11f292] transition-colors cursor-pointer">Servicios</Link></li>
              <li><Link to="/about" className="text-gray-400 text-sm hover:text-[#11f292] transition-colors cursor-pointer">Sobre Nosotros</Link></li>
              <li><Link to="/contact" className="text-gray-400 text-sm hover:text-[#11f292] transition-colors cursor-pointer">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#11f292] font-semibold uppercase text-xs tracking-widest mb-5">Servicios</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-[#11f292] transition-colors cursor-pointer">Construcción Nueva</Link></li>
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-[#11f292] transition-colors cursor-pointer">Remodelación de Duchas</Link></li>
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-[#11f292] transition-colors cursor-pointer">Instalación de Pisos</Link></li>
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-[#11f292] transition-colors cursor-pointer">Mármol y Piedra</Link></li>
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-[#11f292] transition-colors cursor-pointer">Cerámica y Porcelana</Link></li>
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-[#11f292] transition-colors cursor-pointer">Pisos de Madera</Link></li>
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-[#11f292] transition-colors cursor-pointer">Acabados Premium</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#11f292] font-semibold uppercase text-xs tracking-widest mb-5">Contacto</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                  <i className="ri-map-pin-line text-[#11f292]"></i>
                </div>
                <span className="text-gray-400 text-sm">Dallas, TX</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                  <i className="ri-phone-line text-[#11f292]"></i>
                </div>
                <a href="https://api.whatsapp.com/send/?phone=14696487618&text&type=phone_number&app_absent=0" className="text-gray-400 text-sm hover:text-[#11f292] transition-colors cursor-pointer block">(469) 648-7618</a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                  <i className="ri-mail-line text-[#11f292]"></i>
                </div>
                <a href="mailto:LandaverdeLopezjose@gmail.com" className="text-gray-400 text-sm hover:text-[#11f292] transition-colors cursor-pointer block">LandaverdeLopezjose@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                  <i className="ri-instagram-line text-[#11f292]"></i>
                </div>
                <a
                  href="https://www.instagram.com/solanamodernotile"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-gray-400 text-sm hover:text-[#11f292] transition-colors cursor-pointer"
                >
                  @solanamodernotile
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                  <i className="ri-time-line text-[#11f292]"></i>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Lun – Sáb: 8:00 AM – 6:00 PM</p>
                  <p className="text-gray-400 text-sm">Domingo: Cerrado</p>
                  <p className="text-[#11f292] text-xs mt-1">Se habla Inglés y Español</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs font-medium">&copy; 2026 Solana Moderno Tile LLC. All rights reserved.</p>
          <p className="text-white/50 text-xs font-medium">Dallas, Texas — Más de 16 años de experiencia en pisos y acabados de alta calidad</p>
        </div>
      </div>
    </footer>
  );
}