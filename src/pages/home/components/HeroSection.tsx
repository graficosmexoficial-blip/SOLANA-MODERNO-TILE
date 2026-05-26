import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
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
    <section className="relative w-full min-h-[100vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          src="https://storage.readdy-site.link/project_files/7fb27f8c-acf1-4b3b-9576-47b32ca04978/388c654f-0f21-4873-ad17-56425090095f_Video-Banner-Solana-Tile.mp4?v=8e510b55cfe25ccb058f1f25e8b24123"
          autoPlay
          loop
          playsInline
          muted
          className="w-full h-full object-cover object-center"
        ></video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/95 via-[#0d0d0d]/75 to-[#0d0d0d]/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 w-full">
            <span className="inline-flex items-center gap-2 bg-[#11f292]/15 border border-[#11f292]/40 text-[#11f292] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <i className="ri-map-pin-line"></i> Dallas, Texas
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Expertos en Pisos y Acabados de Alta Calidad
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              16 años de experiencia transformando hogares y negocios en todo Dallas con instalaciones modernas de revestimientos, mármol, piedra, porcelana y pisos de madera. Artesanía experta y servicio personalizado en cada proyecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/contact"
                className="whitespace-nowrap bg-gradient-to-r from-[#9a44ff] to-[#11f292] hover:opacity-90 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 cursor-pointer text-center"
              >
                Obtén Tu Cotización Gratis Hoy
              </Link>
              <Link
                to="/services"
                className="whitespace-nowrap bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 cursor-pointer text-center"
              >
                Ver Nuestro Trabajo
              </Link>
            </div>
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-extrabold text-[#11f292]">16+</p>
                <p className="text-gray-400 text-sm mt-0.5">Años de Experiencia</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[#11f292]">500+</p>
                <p className="text-gray-400 text-sm mt-0.5">Proyectos Completados</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[#11f292]">100%</p>
                <p className="text-gray-400 text-sm mt-0.5">Satisfacción</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[#11f292]">5.0</p>
                <p className="text-gray-400 text-sm mt-0.5">Calificación</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[420px] shrink-0">
            <div className="bg-[#0d0d0d]/90 backdrop-blur-sm border border-[#11f292]/30 rounded-2xl p-8">
              <div className="mb-6 pb-5 border-b border-white/10">
                <h2 className="text-white text-2xl font-extrabold leading-snug">
                  Obtén Tu Cotización Gratis Hoy <span className="text-[#9a44ff]">👇</span>
                </h2>
                <p className="text-gray-400 text-sm mt-1">Sin compromiso — te contactamos rápido</p>
              </div>
              {formStatus === "success" ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-[#11f292]/15 rounded-full mx-auto mb-4">
                    <i className="ri-checkbox-circle-line text-[#11f292] text-2xl"></i>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">¡Solicitud Enviada!</h3>
                  <p className="text-gray-400 text-sm">Te contactaremos pronto.</p>
                </div>
              ) : (
                <form
                  data-readdy-form="true"
                  id="hero-estimate-form"
                  className="flex flex-col gap-4"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label className="block text-white text-sm font-semibold mb-1.5">Nombre Completo</label>
                    <input
                      placeholder="Ingresa Tu Nombre Completo"
                      className="w-full bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm rounded-lg px-4 py-3 outline-none focus:border-[#11f292] focus:bg-white/10 transition-all"
                      required
                      name="fullName"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-1.5">Número de Teléfono</label>
                    <input
                      placeholder="Ingresa Tu Número de Teléfono"
                      className="w-full bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm rounded-lg px-4 py-3 outline-none focus:border-[#11f292] focus:bg-white/10 transition-all"
                      required
                      type="tel"
                      name="phone"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-1.5">Correo Electrónico</label>
                    <input
                      placeholder="Ingresa Tu Correo Electrónico"
                      className="w-full bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm rounded-lg px-4 py-3 outline-none focus:border-[#11f292] focus:bg-white/10 transition-all"
                      required
                      type="email"
                      name="email"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-1.5">Servicio Requerido</label>
                    <select
                      name="serviceNeeded"
                      className="w-full bg-[#1a1a1a] border border-white/20 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#11f292] transition-all cursor-pointer"
                      required
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
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="whitespace-nowrap w-full bg-gradient-to-r from-[#9a44ff] to-[#11f292] hover:opacity-90 disabled:opacity-60 text-white font-bold py-4 rounded-lg text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer mt-1"
                  >
                    <i className="ri-send-plane-line text-base"></i>
                    {formStatus === "submitting" ? "Enviando..." : "Solicita Tu Cotización Gratis"}
                  </button>
                  {formStatus === "error" && (
                    <p className="text-red-400 text-xs text-center">Algo salió mal. Intenta de nuevo.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 opacity-50">
        <span className="text-white text-xs tracking-widest uppercase">Desliza</span>
        <i className="ri-arrow-down-line text-white text-lg animate-bounce"></i>
      </div>
    </section>
  );
}