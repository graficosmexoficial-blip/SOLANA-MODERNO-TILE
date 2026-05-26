import { Link } from "react-router-dom";

export default function CtaEstimateSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt="Solana Moderno Tile LLC premium flooring installation Dallas TX"
          className="w-full h-full object-cover object-center"
          src="https://storage.readdy-site.link/project_files/7fb27f8c-acf1-4b3b-9576-47b32ca04978/803a0077-a0bb-4f24-a1e4-ec25f904c17d_magnific_dame-otro-angulo-de-foto-_YVsiKzIWeC.png?v=1cd0f27fd8a4803306e70fe4ab97c34f"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
        <span className="inline-block text-[#11f292] text-xs font-semibold uppercase tracking-widest border border-[#11f292]/40 rounded-full px-4 py-1 mb-4">
          Obtén Tu Cotización Gratis Hoy 👇
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3 leading-tight">
          Solicita Tu Presupuesto de Pisos y Acabados Hoy
        </h2>
        <p className="text-white/60 mt-5 text-base leading-relaxed max-w-xl mx-auto">
          Recibe asesoría personalizada de nuestros especialistas en acabados y remodelación sin compromiso. Hablemos hoy de tu proyecto de construcción nueva, renovación o pisos. Diseño a medida, presupuesto honesto y ejecución impecable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="whitespace-nowrap bg-gradient-to-r from-[#9a44ff] to-[#11f292] hover:opacity-90 text-white font-bold px-10 py-4 rounded-full text-sm transition-all cursor-pointer flex items-center gap-2"
          >
            <i className="ri-message-3-line"></i>Habla Con Nuestro Equipo
          </Link>
          <a
            href="https://api.whatsapp.com/send/?phone=14696487618&text&type=phone_number&app_absent=0"
            className="whitespace-nowrap bg-gradient-to-r from-[#9a44ff] to-[#11f292] hover:opacity-90 text-white font-bold px-8 py-4 rounded-full text-sm transition-all cursor-pointer flex items-center gap-2"
          >
            <i className="ri-phone-line text-[#11f292]"></i>(469) 648-7618
          </a>
        </div>
      </div>
    </section>
  );
}