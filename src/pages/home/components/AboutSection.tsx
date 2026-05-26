import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="py-20 bg-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-14">
          <div className="w-full lg:w-[48%] flex justify-center">
            <div className="relative w-full max-w-[540px]">
              <img
                alt="Jose - Solana Moderno Tile LLC professional tile installer Dallas TX"
                className="w-full h-auto max-h-[640px] object-contain object-top rounded-2xl"
                src="https://storage.readdy-site.link/project_files/7fb27f8c-acf1-4b3b-9576-47b32ca04978/22cb6e74-b1d9-4ba6-8c1d-012c11d020f1_magnific_esta-foto-me-encanta-pero_l7I5KcWgv9-1.png?v=1df685f94af895e68044f73ce163fd14"
              />
              <div className="absolute bottom-6 left-6 bg-[#0d0d0d] border border-[#11f292]/40 text-white px-5 py-4 rounded-xl">
                <p className="text-3xl font-extrabold text-[#11f292]">16+</p>
                <p className="text-xs text-white/70 mt-0.5">Años de Excelencia</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[52%]">
            <span className="text-[#11f292] text-xs font-semibold uppercase tracking-widest">Sobre Nosotros</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 leading-tight">
              Especialistas en Pisos y Acabados de Confianza en Dallas
            </h2>
            <p className="text-gray-400 mt-5 text-base leading-relaxed">
              Solana Moderno Tile LLC es una empresa profesional de pisos y revestimientos con más de 16 años de experiencia ofreciendo instalaciones de alta calidad en todo Dallas, Texas. Nos especializamos en construcción nueva residencial y comercial, remodelación de duchas, mármol, piedra, cerámica, porcelana y todo tipo de pisos de madera. Cada trabajo lleva nuestra firma de artesanía experta y atención meticulosa al detalle.
            </p>
            <p className="text-gray-400 mt-3 text-base leading-relaxed">
              Nuestro equipo bilingüe (Inglés y Español) está comprometido a ofrecer resultados excepcionales con precios honestos y atención a cada detalle. Trabajamos con propietarios, constructores y contratistas para llevar diseños modernos y acabados de alta calidad a cada proyecto — desde un solo baño hasta construcciones a gran escala.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-[#11f292]/15 rounded-lg shrink-0">
                  <i className="ri-shield-check-line text-[#11f292] text-base"></i>
                </div>
                <span className="text-gray-300 text-sm font-medium">Con Licencia y Asegurados</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-[#11f292]/15 rounded-lg shrink-0">
                  <i className="ri-translate-2 text-[#11f292] text-base"></i>
                </div>
                <span className="text-gray-300 text-sm font-medium">Equipo Bilingüe (Inglés / Español)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-[#11f292]/15 rounded-lg shrink-0">
                  <i className="ri-price-tag-3-line text-[#11f292] text-base"></i>
                </div>
                <span className="text-gray-300 text-sm font-medium">Presupuestos Honestos</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-[#11f292]/15 rounded-lg shrink-0">
                  <i className="ri-home-gear-line text-[#11f292] text-base"></i>
                </div>
                <span className="text-gray-300 text-sm font-medium">Todo Tipo de Pisos y Materiales</span>
              </div>
            </div>
            <Link
              to="/about"
              className="whitespace-nowrap inline-flex items-center gap-2 bg-gradient-to-r from-[#9a44ff] to-[#11f292] hover:opacity-90 text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all cursor-pointer mt-8"
            >
              Conoce Más Sobre Nosotros <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}