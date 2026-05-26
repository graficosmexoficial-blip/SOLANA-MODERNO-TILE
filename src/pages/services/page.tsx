import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import { Link } from "react-router-dom";

const allServices = [
  {
    title: "Construcción Nueva Residencial y Comercial",
    description:
      "Instalación completa de pisos y revestimientos para nuevas viviendas residenciales y edificios comerciales. Desde cimientos hasta el acabado, ofrecemos instalación precisa en cada metro cuadrado con diseños modernos, materiales duraderos y artesanía experta.",
    image:
      "https://readdy.ai/api/search-image?query=New%20residential%20construction%20site%20with%20workers%20installing%20large%20format%20ceramic%20floor%20tiles%20modern%20home%20interior%20unfinished%20walls%20professional%20construction%20photography%20bright%20natural%20light%20high%20quality%20wide%20angle&width=600&height=400&seq=3&orientation=landscape",
    icon: "ri-building-line",
  },
  {
    title: "Shower Remodels",
    description:
      "Transforma tu baño con instalaciones modernas de azulejos para ducha. Manejamos impermeabilización, diseños personalizados de azulejos, acentos de mosaico, construcción de nichos y acabados de alta calidad que resisten el paso del tiempo.",
    image:
      "https://readdy.ai/api/search-image?query=Modern%20bathroom%20shower%20remodel%20with%20beautiful%20mosaic%20tile%20walls%20glass%20door%20contemporary%20design%20bright%20lighting%20luxury%20finish%20professional%20interior%20photography%20wide%20angle%20clean%20aesthetic&width=600&height=400&seq=4&orientation=landscape",
    icon: "ri-showers-line",
  },
  {
    title: "Instalación de Pisos — Todo Tipo",
    description:
      "Instalación experta de todo tipo de pisos incluyendo mármol, piedra, cerámica, porcelana, vinilo y laminado. Combinamos cada material con tu visión, estilo de vida y presupuesto con una ejecución impecable.",
    image:
      "https://readdy.ai/api/search-image?query=Professional%20installation%20of%20luxury%20hardwood%20flooring%20in%20spacious%20modern%20living%20room%20natural%20oak%20wood%20planks%20bright%20natural%20lighting%20high%20quality%20interior%20photography%20wide%20angle%20professional%20finish&width=600&height=400&seq=5&orientation=landscape",
    icon: "ri-home-gear-line",
  },
  {
    title: "Marble Installation",
    description:
      "Instalación elegante de azulejos y losas de mármol para pisos, paredes, encimeras y elementos decorativos. Llevamos lujo y sofisticación a cualquier espacio residencial o comercial con artesanía de precisión.",
    image:
      "https://readdy.ai/api/search-image?query=Elegant%20white%20marble%20tile%20floor%20installation%20in%20luxury%20foyer%20entrance%20hall%20bright%20natural%20lighting%20high%20end%20residential%20interior%20professional%20photography%20wide%20angle%20polished%20finish&width=600&height=400&seq=8&orientation=landscape",
    icon: "ri-vip-diamond-line",
  },
  {
    title: "Stone Installation",
    description:
      "Instalación de azulejos de piedra natural incluyendo pizarra, travertino, granito y cuarcita. Perfecto para diseños rústicos, modernos o de lujo en interiores y exteriores con sellado y acabado experto.",
    image:
      "https://readdy.ai/api/search-image?query=Natural%20stone%20tile%20flooring%20in%20rustic%20modern%20kitchen%20slate%20texture%20professional%20installation%20bright%20lighting%20high%20quality%20interior%20photography%20wide%20angle%20warm%20tones&width=600&height=400&seq=9&orientation=landscape",
    icon: "ri-stack-line",
  },
  {
    title: "Ceramic Tile",
    description:
      "Instalación clásica y moderna de azulejos cerámicos para pisos, protectores de salpicaduras, paredes de ducha y acentos decorativos. Infinidad de opciones de colores y patrones para combinar con cualquier estilo de diseño.",
    image:
      "https://readdy.ai/api/search-image?query=Colorful%20ceramic%20tile%20backsplash%20in%20modern%20kitchen%20vibrant%20geometric%20patterns%20professional%20installation%20bright%20lighting%20interior%20design%20photography%20wide%20angle%20contemporary%20style&width=600&height=400&seq=10&orientation=landscape",
    icon: "ri-grid-line",
  },
  {
    title: "Porcelain Tile",
    description:
      "Instalación de azulejos de porcelana de alta gama con durabilidad y resistencia al agua superiores. Ideal para áreas de alto tráfico, baños, cocinas y espacios comerciales con una estética moderna y limpia.",
    image:
      "https://readdy.ai/api/search-image?query=Large%20format%20porcelain%20tile%20flooring%20in%20minimalist%20modern%20bathroom%20white%20grey%20tones%20professional%20installation%20bright%20natural%20lighting%20high%20quality%20interior%20photography%20clean%20aesthetic&width=600&height=400&seq=11&orientation=landscape",
    icon: "ri-layout-masonry-line",
  },
  {
    title: "Pisos de Madera — Todo Tipo",
    description:
      "Instalación personalizada de pisos de madera incluyendo madera maciza, madera ingeniería, laminado y tablón de vinilo de lujo. Adaptamos el material, tinte y acabado a tu gusto exacto y necesidades de estilo de vida.",
    image:
      "https://readdy.ai/api/search-image?query=Beautiful%20natural%20wood%20floor%20installation%20in%20modern%20home%20living%20room%20wide%20planks%20oak%20finish%20professional%20craftsmanship%20bright%20lighting%20high%20quality%20interior%20photography%20wide%20angle&width=600&height=400&seq=12&orientation=landscape",
    icon: "ri-tree-line",
  },
  {
    title: "Remodelación Moderna y Acabados Premium",
    description:
      "Servicio completo de remodelación moderna con acabados de alta calidad. Transformamos espacios anticuados en interiores contemporáneos de alta gama con trabajos de azulejos personalizados, accesorios modernos y atención impecable al detalle.",
    image:
      "https://readdy.ai/api/search-image?query=Modern%20home%20remodeling%20with%20premium%20finishes%20open%20concept%20living%20space%20new%20tile%20flooring%20contemporary%20design%20bright%20natural%20lighting%20professional%20interior%20photography%20wide%20angle%20luxury&width=600&height=400&seq=13&orientation=landscape",
    icon: "ri-sparkling-line",
  },
];

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        {/* Hero Banner */}
        <section className="relative h-[240px] md:h-[300px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              alt="Solana Moderno Tile LLC professional flooring and tile services Dallas TX"
              className="w-full h-full object-cover object-center"
              src="https://readdy.ai/api/search-image?query=Professional%20tile%20installation%20workspace%20with%20ceramic%20tiles%20marble%20samples%20trowels%20and%20tools%20on%20dark%20surface%20modern%20flooring%20materials%20premium%20quality%20close%20up%20wide%20angle%20professional%20photography&width=1400&height=600&seq=30&orientation=landscape"
            />
            <div className="absolute inset-0 bg-[#111111]/75"></div>
          </div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="bg-[#0d0d0d] border border-[#11f292]/40 rounded-2xl px-16 py-7 text-center border-b-4 border-[#11f292]">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-widest uppercase">Nuestros Servicios</h1>
            </div>
          </div>
        </section>

        <section className="relative py-24 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-[#11f292] text-xs font-semibold uppercase tracking-widest border border-[#11f292]/40 rounded-full px-4 py-1 mb-4">
                Nuestros Servicios
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                Servicios Profesionales de Pisos y Acabados
              </h2>
              <p className="text-gray-400 text-base max-w-2xl mx-auto">
                Desde construcción nueva hasta remodelaciones de baño, manejamos cada proyecto con precisión y cuidado. Cada trabajo comienza con una consulta detallada y termina con un acabado de alta calidad que transforma tu espacio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allServices.map((s) => (
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

            <div className="mt-16 bg-[#1a1a1a] border border-[#11f292]/20 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                ¿No Estás Seguro de Lo Que Necesitas?
              </h3>
              <p className="text-gray-400 text-base max-w-xl mx-auto mb-6">
                Contáctanos para una consulta gratuita sin compromiso. Nuestro equipo evaluará tu proyecto y recomendará los materiales y servicios adecuados para tu espacio y presupuesto.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="whitespace-nowrap bg-gradient-to-r from-[#9a44ff] to-[#11f292] hover:opacity-90 text-white font-bold px-8 py-4 rounded-full text-sm transition-all cursor-pointer"
                >
                  Obtén Tu Cotización Gratis
                </Link>
                <a
                  href="https://api.whatsapp.com/send/?phone=14696487618&text&type=phone_number&app_absent=0"
                  className="whitespace-nowrap bg-gradient-to-r from-[#9a44ff] to-[#11f292] hover:opacity-90 text-white font-semibold px-8 py-4 rounded-full text-sm transition-all cursor-pointer flex items-center gap-2"
                >
                  <i className="ri-phone-line text-[#11f292]"></i>(469) 648-7618
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}