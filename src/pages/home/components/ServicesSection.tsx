import { Link } from "react-router-dom";

const services = [
  {
    title: "Construcción Nueva",
    description:
      "Instalación completa de azulejo y piso para nuevas construcciones residenciales y comerciales. De la losa al acabado, entregamos precisión y calidad en cada pie cuadrado.",
    image:
      "https://readdy.ai/api/search-image?query=New%20residential%20construction%20site%20with%20workers%20installing%20large%20format%20ceramic%20floor%20tiles%20modern%20home%20interior%20unfinished%20walls%20professional%20construction%20photography%20bright%20natural%20light%20high%20quality%20wide%20angle&width=600&height=400&seq=3&orientation=landscape",
    icon: "ri-building-line",
  },
  {
    title: "Remodelación de Duchas",
    description:
      "Transforma tu baño con modernas instalaciones de azulejo para ducha. Impermeabilización, diseños personalizados, acentos de mosaico y acabados premium que duran.",
    image:
      "https://readdy.ai/api/search-image?query=Modern%20bathroom%20shower%20remodel%20with%20beautiful%20mosaic%20tile%20walls%20glass%20door%20contemporary%20design%20bright%20lighting%20luxury%20finish%20professional%20interior%20photography%20wide%20angle%20clean%20aesthetic&width=600&height=400&seq=4&orientation=landscape",
    icon: "ri-showers-line",
  },
  {
    title: "Instalación de Pisos",
    description:
      "Instalación experta de todo tipo de pisos — mármol, piedra, cerámica, porcelana y madera personalizada. Hacemos que cada material se adapte a tu visión y estilo de vida.",
    image:
      "https://readdy.ai/api/search-image?query=Professional%20installation%20of%20luxury%20hardwood%20flooring%20in%20spacious%20modern%20living%20room%20natural%20oak%20wood%20planks%20bright%20natural%20lighting%20high%20quality%20interior%20photography%20wide%20angle%20professional%20finish&width=600&height=400&seq=5&orientation=landscape",
    icon: "ri-home-gear-line",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-center mb-14">
          <div className="flex-1">
            <span className="text-[#11f292] text-xs font-semibold uppercase tracking-widest">Nuestros Servicios</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 leading-tight max-w-md">
              Servicios Profesionales de Pisos y Acabados en los Que Puedes Confiar
            </h2>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed max-w-sm">
              Desde construcción nueva hasta remodelación de baños, manejamos cada proyecto con precisión y cuidado. Soluciones integrales llave en mano, con comunicación clara de principio a fin.
            </p>
            <div className="inline-flex items-center gap-3 bg-[#1a1a1a] border border-[#11f292]/30 text-white px-6 py-3.5 rounded-xl mt-7">
              <i className="ri-emotion-happy-line text-[#11f292] text-xl"></i>
              <div>
                <span className="text-2xl font-extrabold text-[#11f292]">500+</span>
                <span className="text-white font-semibold text-sm ml-2">Clientes Felices</span>
                <p className="text-white/50 text-xs mt-0.5">Hogares y negocios transformados en Dallas</p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
              <img
                alt="Solana Moderno Tile LLC professional tile and flooring installation"
                className="w-full h-full object-cover object-center"
                src="https://storage.readdy-site.link/project_files/7fb27f8c-acf1-4b3b-9576-47b32ca04978/95828923-9171-4c7e-b29b-11bb896d1ba4_magnific_quiero-que-a-la-persona-d_vu2dPYRa47.png?v=d228a3591f58a1197a0e323acaf5f64a"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-5 right-5 flex flex-col gap-3 w-64">
              <div className="bg-[#111111]/95 backdrop-blur-sm rounded-xl px-4 py-3 flex items-start gap-3 border border-[#11f292]/20">
                <div className="w-9 h-9 flex items-center justify-center bg-[#11f292]/15 rounded-lg shrink-0 mt-0.5">
                  <i className="ri-shield-check-line text-[#11f292] text-base"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs leading-tight">Con Licencia y Asegurados</h4>
                  <p className="text-gray-400 text-[11px] mt-0.5 leading-relaxed">
                    Cobertura total y estándares profesionales en cada proyecto que emprendemos en Dallas.
                  </p>
                </div>
              </div>
              <div className="bg-[#111111]/95 backdrop-blur-sm rounded-xl px-4 py-3 flex items-start gap-3 border border-[#11f292]/20">
                <div className="w-9 h-9 flex items-center justify-center bg-[#11f292]/15 rounded-lg shrink-0 mt-0.5">
                  <i className="ri-file-list-3-line text-[#11f292] text-base"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs leading-tight">Obtén Tu Cotización Gratis</h4>
                  <p className="text-gray-400 text-[11px] mt-0.5 leading-relaxed">
                    Recibe una cotización detallada y sin compromiso para tu proyecto para que puedas planear con confianza.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h3 className="text-xl font-bold text-white">Pisos Premium Construidos para Durar</h3>
          <p className="text-gray-400 text-sm max-w-md">
            Desde remodelación de duchas hasta pisos completos del hogar, nuestros servicios cubren cada necesidad de revestimiento y piso con materiales de calidad y mano de obra experta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-[#11f292]/40 transition-all duration-700 hover:-translate-y-1"
            >
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  alt={s.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  src={s.image}
                />
                {/* Overlay con botón Cotizar al hacer hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 whitespace-nowrap bg-white hover:bg-gray-100 text-gray-900 font-semibold px-6 py-3 rounded-full text-sm transition-all duration-200 cursor-pointer scale-95 group-hover:scale-100"
                  >
                    <i className="ri-file-list-3-line text-gray-600"></i>
                    Cotizar
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="w-10 h-10 flex items-center justify-center bg-[#11f292]/15 rounded-xl mb-4">
                  <i className={`${s.icon} text-[#11f292] text-lg`}></i>
                </div>
                <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="whitespace-nowrap inline-flex items-center gap-2 bg-gradient-to-r from-[#9a44ff] to-[#11f292] hover:opacity-90 text-white font-semibold px-10 py-4 rounded-full text-sm transition-all cursor-pointer"
          >
            Ver Todos los Servicios <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}