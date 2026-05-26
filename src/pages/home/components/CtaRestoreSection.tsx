import { Link } from "react-router-dom";

export default function CtaRestoreSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt="Solana Moderno Tile LLC premium geometric tile floor pattern Dallas TX"
          className="w-full h-full object-cover object-center"
          src="https://readdy.ai/api/search-image?query=Closeup%20of%20beautifully%20installed%20geometric%20tile%20floor%20pattern%20modern%20design%20high%20quality%20materials%20professional%20photography%20sharp%20focus%20artistic%20angle%20luxury%20interior%20detailed%20texture&width=1400&height=600&seq=7&orientation=landscape"
        />
        <div className="absolute inset-0 bg-[#0d0d0d]/85"></div>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
        <span className="text-[#11f292] text-sm font-semibold uppercase tracking-widest">
          ¿Listo para Transformar Tu Espacio?
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 leading-tight">
          Construyamos Algo Hermoso Juntos
        </h2>
        <p className="text-gray-300 mt-5 text-lg leading-relaxed">
          Desde una sola remodelación de ducha hasta la construcción completa de una casa — estamos aquí para hacerlo realidad, con puntualidad garantizada y un equipo que trata tu espacio como si fuera propio. Contáctanos hoy y obtén tu cotización gratis.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            to="/contact"
            className="whitespace-nowrap bg-gradient-to-r from-[#9a44ff] to-[#11f292] hover:opacity-90 text-white font-bold px-10 py-4 rounded-full text-base transition-all cursor-pointer"
          >
            Obtén Tu Cotización Gratis Hoy
          </Link>
          <a
            href="https://api.whatsapp.com/send/?phone=14696487618&text&type=phone_number&app_absent=0"
            className="whitespace-nowrap bg-gradient-to-r from-[#9a44ff] to-[#11f292] hover:opacity-90 text-white font-bold px-10 py-4 rounded-full text-base transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <i className="ri-phone-line text-[#11f292]"></i>(469) 648-7618
          </a>
        </div>
      </div>
    </section>
  );
}