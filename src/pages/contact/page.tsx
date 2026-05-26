import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = new URLSearchParams();
    formData.forEach((value, key) => data.append(key, value as string));

    try {
      const res = await fetch("https://readdy.ai/api/form/d87ivtb38rn9r2l13lsg", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });
      if (res.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-28">
        {/* Hero Banner */}
        <section className="relative h-[240px] md:h-[300px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              alt="Solana Moderno Tile LLC - Premium Tile and Flooring"
              className="w-full h-full object-cover object-center"
              src="https://readdy.ai/api/search-image?query=Luxury%20modern%20kitchen%20with%20large%20format%20porcelain%20tile%20flooring%20marble%20countertops%20contemporary%20design%20bright%20natural%20lighting%20wide%20angle%20professional%20interior%20photography%20high%20end%20residential%20space&width=1400&height=600&seq=6&orientation=landscape"
            />
            <div className="absolute inset-0 bg-[#111111]/75"></div>
          </div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="bg-[#0d0d0d] border border-[#11f292]/40 px-16 py-6 rounded-lg text-center border-b-4 border-[#11f292]">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-widest uppercase">Contáctanos</h1>
            </div>
          </div>
        </section>

        {/* Info Bar */}
        <section className="w-full bg-[#1a1a1a] border-t-4 border-[#11f292]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
            <a href="https://api.whatsapp.com/send/?phone=14696487618&text&type=phone_number&app_absent=0" className="group flex items-center gap-5 px-8 py-7 cursor-pointer hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full shrink-0 group-hover:bg-[#11f292] transition-all duration-300">
                <i className="ri-phone-fill text-white group-hover:text-[#111111] text-xl transition-colors duration-300"></i>
              </div>
              <div>
                <p className="text-[#11f292] text-xs font-semibold uppercase tracking-widest">Llámanos Directamente</p>
                <p className="text-white font-bold text-base mt-0.5">(469) 648-7618</p>
                <p className="text-white/70 text-xs mt-0.5">Se habla Inglés y Español</p>
              </div>
            </a>

            <a href="mailto:LandaverdeLopezjose@gmail.com" className="group flex items-center gap-5 px-8 py-7 cursor-pointer hover:bg-white/10 transition-colors min-w-0">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full shrink-0 group-hover:bg-[#11f292] transition-all duration-300">
                <i className="ri-mail-line text-white group-hover:text-[#111111] text-xl transition-colors duration-300"></i>
              </div>
              <div className="min-w-0 overflow-hidden">
                <p className="text-[#11f292] text-xs font-semibold uppercase tracking-widest">Envíanos un Correo</p>
                <p className="text-white font-bold text-sm mt-0.5 break-all">LandaverdeLopezjose@gmail.com</p>
              </div>
            </a>

            <a href="https://www.instagram.com/solanamodernotile" target="_blank" rel="nofollow noopener noreferrer" className="group flex items-center gap-5 px-8 py-7 cursor-pointer hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full shrink-0 group-hover:bg-[#11f292] transition-all duration-300">
                <i className="ri-instagram-line text-white group-hover:text-[#111111] text-xl transition-colors duration-300"></i>
              </div>
              <div>
                <p className="text-[#11f292] text-xs font-semibold uppercase tracking-widest">Síguenos</p>
                <p className="text-white font-bold text-sm mt-0.5">@solanamodernotile</p>
              </div>
            </a>

            <div className="group flex items-center gap-5 px-8 py-7">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full shrink-0">
                <i className="ri-map-pin-fill text-white text-xl"></i>
              </div>
              <div>
                <p className="text-[#11f292] text-xs font-semibold uppercase tracking-widest">Nuestra Ubicación</p>
                <p className="text-white font-bold text-sm mt-0.5">Dallas, TX</p>
                <p className="text-white/70 text-xs">Sirviendo el área metropolitana de DFW</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-[#0d0d0d] py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-stretch gap-8">
              {/* Left Column */}
              <div className="w-full lg:w-[38%]">
                <div className="h-full rounded-2xl overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-[#111111] to-[#1a0a00] p-10 text-center min-h-[420px] border border-[#9a44ff]/30">
                  <img
                    alt="Solana Moderno Tile LLC"
                    className="w-36 h-auto object-contain mb-6 rounded-xl"
                    src="https://storage.readdy-site.link/project_files/7fb27f8c-acf1-4b3b-9576-47b32ca04978/f5a093f1-abb0-444c-acae-3e27e86d1049_magnific__a-bold-dynamic-professional-italic-wordmark-logo-f__29552-1-1-1.png?v=346519245589441116222c1fcdf8b98e"
                  />
                  <h2 className="text-white text-xl font-extrabold leading-snug">
                    Solana Moderno<br />
                    <span className="text-[#11f292]">Tile LLC</span>
                  </h2>
                  <p className="text-white/60 text-sm mt-3 leading-relaxed max-w-xs">
                    Instalación profesional de pisos y acabados en Dallas, Texas. Sirviendo el área de DFW por más de 16 años con artesanía experta y servicio personalizado.
                  </p>

                  {/* Horario de Atención */}
                  <div className="mt-6 w-full bg-white/5 rounded-xl px-5 py-4 text-left">
                    <p className="text-[#11f292] text-xs font-semibold uppercase tracking-widest mb-2">Horario de Atención</p>
                    <div className="flex justify-between text-white text-xs mb-1">
                      <span>Lunes – Sábado</span>
                      <span className="font-semibold">8:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-white/50 text-xs mb-1">
                      <span>Domingo</span>
                      <span>Cerrado</span>
                    </div>
                    <p className="text-[#11f292] text-xs mt-3 flex items-center gap-1.5">
                      <i className="ri-translate-2"></i>
                      Se habla Inglés y Español
                    </p>
                  </div>

                  {/* Áreas de Servicio */}
                  <div className="mt-5 w-full bg-white/5 rounded-xl px-5 py-4 text-left">
                    <p className="text-[#11f292] text-xs font-semibold uppercase tracking-widest mb-3">Áreas de Servicio</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-white/70 text-xs bg-white/10 px-2 py-1 rounded-full">Dallas</span>
                      <span className="text-white/70 text-xs bg-white/10 px-2 py-1 rounded-full">Fort Worth</span>
                      <span className="text-white/70 text-xs bg-white/10 px-2 py-1 rounded-full">Plano</span>
                      <span className="text-white/70 text-xs bg-white/10 px-2 py-1 rounded-full">Frisco</span>
                      <span className="text-white/70 text-xs bg-white/10 px-2 py-1 rounded-full">Irving</span>
                      <span className="text-white/70 text-xs bg-white/10 px-2 py-1 rounded-full">Arlington</span>
                      <span className="text-white/70 text-xs bg-white/10 px-2 py-1 rounded-full">Garland</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="w-full lg:w-[62%]">
                <div className="bg-white rounded-2xl p-8 md:p-10 h-full">
                  <span className="text-[#11f292] text-xs font-semibold uppercase tracking-widest">Envíanos un Mensaje</span>
                  <h2 className="text-2xl font-extrabold text-[#111111] mt-2 mb-1 leading-snug">Hablemos de Tu Proyecto</h2>
                  <div className="w-12 h-1 bg-[#11f292] rounded-full mb-7 mt-3"></div>

                  {formStatus === "success" ? (
                    <div className="text-center py-10">
                      <div className="w-16 h-16 flex items-center justify-center bg-[#11f292]/15 rounded-full mx-auto mb-4">
                        <i className="ri-checkbox-circle-line text-[#11f292] text-3xl"></i>
                      </div>
                      <h3 className="text-[#111111] font-bold text-xl mb-1">¡Solicitud Enviada!</h3>
                      <p className="text-gray-500 text-sm">Te contactaremos pronto.</p>
                    </div>
                  ) : (
                    <form
                      id="contact-page-form"
                      data-readdy-form="true"
                      className="flex flex-col gap-5"
                      onSubmit={handleSubmit}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-gray-700 text-sm font-semibold mb-1.5">Tu Nombre <span className="text-[#c0392b]">*</span></label>
                          <input
                            name="name"
                            placeholder="Ingresa Tu Nombre Completo"
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#9a44ff] transition-colors"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 text-sm font-semibold mb-1.5">Teléfono</label>
                          <input
                            name="phone"
                            type="tel"
                            placeholder="Ingresa Tu Número de Teléfono"
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#9a44ff] transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-gray-700 text-sm font-semibold mb-1.5">Correo Electrónico <span className="text-[#c0392b]">*</span></label>
                          <input
                            name="email"
                            type="email"
                            placeholder="Ingresa Tu Correo Electrónico"
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#9a44ff] transition-colors"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 text-sm font-semibold mb-1.5">Servicio Requerido</label>
                          <select
                            name="serviceNeeded"
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#9a44ff] transition-colors cursor-pointer"
                            defaultValue=""
                          >
                            <option value="" disabled>Selecciona un Servicio</option>
                            <option value="Construcción Nueva">Construcción Nueva</option>
                            <option value="Remodelación de Duchas">Remodelación de Duchas</option>
                            <option value="Instalación de Pisos">Instalación de Pisos</option>
                            <option value="Instalación de Mármol">Instalación de Mármol</option>
                            <option value="Instalación de Piedra">Instalación de Piedra</option>
                            <option value="Azulejo Cerámico">Azulejo Cerámico</option>
                            <option value="Azulejo de Porcelana">Azulejo de Porcelana</option>
                            <option value="Pisos de Madera">Pisos de Madera</option>
                            <option value="Remodelación Moderna">Remodelación Moderna</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-1.5">
                          Detalles del Proyecto <span className="text-[#c0392b]">*</span>
                          <span className="text-gray-400 font-normal ml-1 text-xs">(0/500)</span>
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          maxLength={500}
                          placeholder="Cuéntanos sobre tu proyecto — tamaño, materiales, plazo y cualquier requisito específico..."
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#9a44ff] transition-colors resize-none"
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className="whitespace-nowrap w-full bg-[#11f292] hover:bg-[#0dd97e] disabled:opacity-60 text-[#111111] font-bold py-4 rounded-lg text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <i className="ri-send-plane-line"></i>
                        {formStatus === "submitting" ? "Enviando..." : "Enviar Mensaje"}
                      </button>

                      {formStatus === "error" && (
                        <p className="text-red-500 text-xs text-center">Algo salió mal. Intenta de nuevo.</p>
                      )}
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="w-full h-[420px]">
          <iframe
            title="Solana Moderno Tile LLC - Dallas, TX"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214283.617!2d-96.8960!3d32.8206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974f%3A0x13c!2sDallas%2C+TX!5e0!3m2!1ses!2sus!4v1"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section>
      </main>
      <Footer />
    </>
  );
}