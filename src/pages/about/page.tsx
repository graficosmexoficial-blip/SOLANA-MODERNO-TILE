import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";

const faqs = [
  {
    q: "¿Qué tipos de servicios de pisos y revestimientos ofrecen?",
    a: "Ofrecemos una gama completa de servicios de pisos y acabados incluyendo instalación para construcción nueva, remodelación de duchas, instalación de mármol y piedra, cerámico y porcelana, pisos de madera, vinilo de lujo y remodelación moderna para proyectos residenciales y comerciales. Soluciones integrales con artesanía experta.",
  },
  {
    q: "¿Cuánto tiempo toma una instalación típica?",
    a: "Los plazos del proyecto varían según el tamaño y la complejidad. Una remodelación de baño estándar normalmente toma de 3 a 5 días, mientras que proyectos más grandes como pisos de toda la casa pueden tomar de 1 a 2 semanas. Proporcionamos cronogramas detallados durante tu presupuesto gratuito.",
  },
  {
    q: "¿Ofrecen presupuestos gratuitos?",
    a: "¡Sí! Ofrecemos presupuestos gratuitos sin compromiso para todos los proyectos de pisos y remodelación. Nuestro equipo visitará tu ubicación, evaluará el espacio, discutirá opciones de materiales y proporcionará una cotización detallada sin costos ocultos. Trabajamos con transparencia total.",
  },
  {
    q: "¿Cómo programo una consulta?",
    a: "Puedes programar una consulta llamándonos al (469) 648-7618, llenando el formulario de contacto en nuestro sitio web, o contactándonos por Instagram. Respondemos a todas las consultas dentro de las 24 horas y ofrecemos horarios de cita flexibles.",
  },
  {
    q: "¿Atienden a clientes que hablan español?",
    a: "Por supuesto. Nuestro equipo bilingüe atiende con orgullo a clientes de habla inglesa y española en toda el área de Dallas-Fort Worth. Garantizamos una comunicación clara durante cada paso de tu proyecto.",
  },
  {
    q: "¿Qué hace diferente a Solana Moderno Tile?",
    a: "Lo que nos distingue son nuestros más de 16 años de experiencia práctica, compromiso con el uso de materiales de alta calidad, precios honestos y transparentes, y servicio personalizado. Somos un negocio familiar que trata cada proyecto — grande o pequeño — con la misma dedicación a la calidad.",
  },
];

const values = [
  { icon: "ri-price-tag-3-line", text: "Precios Competitivos y Honestos" },
  { icon: "ri-customer-service-2-line", text: "Servicio Profesional" },
  { icon: "ri-shield-check-line", text: "Calidad Garantizada" },
  { icon: "ri-user-heart-line", text: "Negocio Familiar de Confianza" },
  { icon: "ri-translate-2", text: "Equipo Bilingüe (Inglés / Español)" },
  { icon: "ri-building-line", text: "Proyectos Residenciales y Comerciales" },
];

export default function About() {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleFaq = (i: number) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <>
      <Navbar />
      <main className="pt-28">
        {/* Hero Banner */}
        <section className="relative h-[240px] md:h-[300px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              alt="Solana Moderno Tile LLC premium tile installation Dallas TX"
              className="w-full h-full object-cover object-center"
              src="https://readdy.ai/api/search-image?query=Luxury%20modern%20kitchen%20with%20large%20format%20porcelain%20tile%20flooring%20marble%20countertops%20contemporary%20design%20bright%20natural%20lighting%20wide%20angle%20professional%20interior%20photography%20high%20end%20residential%20space&width=1400&height=600&seq=6&orientation=landscape"
            />
            <div className="absolute inset-0 bg-[#111111]/75"></div>
          </div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="bg-[#0d0d0d] border border-[#11f292]/40 rounded-2xl px-16 py-7 text-center border-b-4 border-[#11f292]">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-widest uppercase">Sobre Nosotros</h1>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <span className="text-[#11f292] text-xs font-bold uppercase tracking-widest">NUESTRA HISTORIA</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 leading-tight">Especialistas en Pisos y Acabados de Confianza en Dallas</h2>
                <p className="text-gray-400 mt-5 text-sm leading-relaxed">
                  Solana Moderno Tile LLC es una empresa profesional de pisos y revestimientos con más de 16 años de experiencia ofreciendo instalaciones de alta calidad en todo Dallas, Texas. Nos especializamos en construcción nueva residencial y comercial, remodelación de duchas, mármol, piedra, cerámica, porcelana y todo tipo de pisos de madera. Nuestra firma: artesanía experta y atención meticulosa al detalle.
                </p>
                <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                  Nuestro equipo bilingüe (Inglés y Español) está comprometido a ofrecer resultados excepcionales con precios honestos y atención a cada detalle. Trabajamos con propietarios, constructores y contratistas para llevar diseños modernos y acabados de alta calidad a cada proyecto — desde un solo baño hasta construcciones a gran escala.
                </p>
                <div className="mt-8 flex items-center gap-6">
                  <div>
                    <p className="text-xl italic text-white font-semibold">Solana Moderno Tile LLC</p>
                    <p className="text-xs text-gray-500 mt-1 font-semibold uppercase tracking-widest">Pisos y Acabados Profesionales</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-10">
                  <div className="flex flex-col items-center justify-center gap-2 bg-[#111111] rounded-2xl px-4 py-6 text-center cursor-default hover:bg-[#9a44ff] transition-colors">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#9a44ff]/20 rounded-full mb-1">
                      <i className="ri-calendar-check-line text-[#11f292] text-xl"></i>
                    </div>
                    <p className="text-3xl font-extrabold text-white leading-none">16+</p>
                    <p className="text-[#11f292] text-xs font-semibold uppercase tracking-widest mt-1">Años de Experiencia</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 bg-[#111111] rounded-2xl px-4 py-6 text-center cursor-default hover:bg-[#9a44ff] transition-colors">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#9a44ff]/20 rounded-full mb-1">
                      <i className="ri-home-gear-line text-[#11f292] text-xl"></i>
                    </div>
                    <p className="text-3xl font-extrabold text-white leading-none">500+</p>
                    <p className="text-[#11f292] text-xs font-semibold uppercase tracking-widest mt-1">Proyectos Completados</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 bg-[#111111] rounded-2xl px-4 py-6 text-center cursor-default hover:bg-[#9a44ff] transition-colors">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#9a44ff]/20 rounded-full mb-1">
                      <i className="ri-medal-line text-[#11f292] text-xl"></i>
                    </div>
                    <p className="text-3xl font-extrabold text-white leading-none">100%</p>
                    <p className="text-[#11f292] text-xs font-semibold uppercase tracking-widest mt-1">Satisfacción Garantizada</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-full h-full bg-[#11f292]/10 rounded-2xl"></div>
                  <div className="relative w-full max-w-[380px] h-[480px] rounded-2xl overflow-hidden">
                    <img
                      alt="Solana Moderno Tile LLC professional installer Dallas TX"
                      className="w-full h-full object-cover object-center"
                      src="https://storage.readdy-site.link/project_files/7fb27f8c-acf1-4b3b-9576-47b32ca04978/2d4ab2a2-f14b-4966-93bf-6cdfd4c9eee7_magnific_dame-otro-angulo-de-foto-_iAb7EdG3uK.png?v=e7935fb68c8c99750ff4f0ba482f1752"
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-[#11f292] text-white rounded-xl px-5 py-3 text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/80">Est.</p>
                    <p className="text-2xl font-extrabold">2009</p>
                    <p className="text-xs text-white/80">Dallas, TX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              alt="Solana Moderno Tile LLC beautiful tile flooring Dallas TX"
              className="w-full h-full object-cover object-center"
              src="https://readdy.ai/api/search-image?query=Closeup%20of%20beautifully%20installed%20geometric%20tile%20floor%20pattern%20modern%20design%20high%20quality%20materials%20professional%20photography%20sharp%20focus%20artistic%20angle%20luxury%20interior%20detailed%20texture&width=1400&height=600&seq=7&orientation=landscape"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/60 to-black/65"></div>
          </div>
          <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">Solicita Tu Presupuesto de Pisos y Acabados Hoy</h2>
            <p className="text-gray-300 mt-4 text-base max-w-xl mx-auto">
              Recibe asesoría personalizada de nuestros especialistas en acabados y remodelación sin compromiso. Diseño a medida, presupuesto honesto y ejecución puntual. Hablemos hoy de tu proyecto.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link className="inline-flex items-center gap-2 whitespace-nowrap bg-[#11f292] hover:bg-[#0dd97e] text-[#111111] font-bold px-10 py-4 rounded-full transition-all cursor-pointer hover:scale-105" to="/contact">
                Habla Con Nuestro Equipo <i className="ri-arrow-right-line"></i>
              </Link>
              <a href="https://api.whatsapp.com/send/?phone=14696487618&text&type=phone_number&app_absent=0" className="inline-flex items-center gap-2 whitespace-nowrap bg-gradient-to-r from-[#9a44ff] to-[#11f292] hover:opacity-90 text-white font-bold px-10 py-4 rounded-full transition-all cursor-pointer hover:scale-105">
                <i className="ri-phone-line"></i>(469) 648-7618
              </a>
            </div>
          </div>
        </section>

        {/* Preguntas Frecuentes */}
        <section className="py-20 bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-12 items-stretch">
            <div className="flex-1">
              <span className="text-[#11f292] text-xs font-bold uppercase tracking-widest">Preguntas Frecuentes</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-3 leading-snug">Preguntas Comunes Sobre Solana Moderno Tile</h2>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                Sabemos que comenzar un proyecto de renovación de interiores viene con muchas preguntas. Estas son algunas de las más comunes que nuestros clientes hacen antes de comenzar.
              </p>
              <div className="mt-8 space-y-3">
                {faqs.map((faq, i) => {
                  const isOpen = openIndex === i;
                  return (
                    <div key={i} className="rounded-xl overflow-hidden border border-white/10 transition-all duration-300 cursor-pointer">
                      <button
                        onClick={() => toggleFaq(i)}
                        className={`w-full text-left flex items-center justify-between px-5 py-4 cursor-pointer transition-colors group ${isOpen ? "bg-[#11f292]" : "bg-[#1a1a1a] hover:bg-[#222]"}`}
                      >
                        <span className="font-semibold text-sm transition-colors duration-200 text-white">{faq.q}</span>
                        <span className="w-6 h-6 flex items-center justify-center ml-3 flex-shrink-0">
                          <i className={`text-lg transition-transform duration-300 ${isOpen ? "ri-subtract-line text-white" : "ri-add-line text-[#11f292]"}`}></i>
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-5 py-4 bg-[#1a1a1a] border-t border-white/5">
                          <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="lg:w-[420px] w-full flex-shrink-0">
              <div className="w-full h-full min-h-[480px] rounded-2xl overflow-hidden">
                <img
                  alt="Solana Moderno Tile LLC construction project Dallas TX"
                  className="w-full h-full object-cover object-top"
                  src="https://storage.readdy-site.link/project_files/7fb27f8c-acf1-4b3b-9576-47b32ca04978/ffe8ca74-7e8c-4075-bfec-1c531210151d_magnific_quiero-que-a-la-persona-d_5xMfzcxKxe.png?v=bc4335f25b06f5e132038f811e147f65"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-12 items-stretch">
            <div className="lg:w-[460px] w-full flex-shrink-0">
              <div className="w-full h-full min-h-[460px] rounded-2xl overflow-hidden relative">
                <img
                  alt="Solana Moderno Tile LLC bathroom remodel Dallas TX"
                  className="w-full h-full object-cover object-center"
                  src="https://storage.readdy-site.link/project_files/7fb27f8c-acf1-4b3b-9576-47b32ca04978/95828923-9171-4c7e-b29b-11bb896d1ba4_magnific_quiero-que-a-la-persona-d_vu2dPYRa47.png?v=d228a3591f58a1197a0e323acaf5f64a"
                />
                <div className="absolute bottom-5 left-5 bg-[#111111]/90 text-white rounded-xl px-5 py-3 backdrop-blur-sm">
                  <p className="text-xs text-[#11f292] font-bold uppercase tracking-widest">Proyecto Real</p>
                  <p className="text-sm font-bold mt-0.5">Dallas, Texas</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <span className="text-[#11f292] text-xs font-bold uppercase tracking-widest">NUESTROS VALORES</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-3 leading-snug">Lo Que Distingue a Solana Moderno Tile</h2>
              <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                Cada contratista puede prometer grandes resultados, pero lo que realmente nos define es cómo trabajamos. En Solana Moderno Tile, nuestra base se construye sobre un conjunto de valores fundamentales que guían cada decisión, cada interacción y cada proyecto que completamos.
              </p>
              <ul className="mt-7 space-y-2">
                {values.map((v) => (
                  <li key={v.text} className="cursor-default">
                    <div className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#9a44ff]/10 transition-colors">
                      <div className="w-9 h-9 flex items-center justify-center bg-[#9a44ff]/15 rounded-lg flex-shrink-0">
                        <i className={`${v.icon} text-[#11f292] text-base`}></i>
                      </div>
                      <span className="font-semibold text-sm text-gray-200">{v.text}</span>
                      <div className="ml-auto">
                        <i className="ri-arrow-right-line text-[#11f292]"></i>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex gap-4 flex-wrap">
                <Link className="inline-flex items-center gap-2 whitespace-nowrap bg-[#11f292] hover:bg-[#0dd97e] text-[#111111] font-bold px-7 py-3 rounded-full transition-all cursor-pointer hover:scale-105" to="/contact">
                  Obtén Tu Presupuesto Hoy <i className="ri-arrow-right-line"></i>
                </Link>
                <Link className="inline-flex items-center gap-2 whitespace-nowrap bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white font-bold px-7 py-3 rounded-full transition-all cursor-pointer hover:scale-105" to="/services">
                  Ver Nuestro Trabajo <i className="ri-eye-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}