import { useState } from "react";

const reviews = [
  [
    {
      stars: 5,
      text: "Solana Moderno Tile transformó todos los pisos de nuestra casa. La instalación de mármol en el vestíbulo es absolutamente impresionante. Su atención al detalle y cortes precisos son incomparables. ¡Altamente recomendado en Dallas!",
      initials: "MG",
      name: "Maria G.",
      date: "March 15, 2025",
    },
    {
      stars: 5,
      text: "Remodelaron ambos baños, incluyendo las duchas. El trabajo de mosaico es hermoso y la impermeabilización nos da tranquilidad. Excelente servicio bilingüe — mi familia siempre los recomienda.",
      initials: "JR",
      name: "Jose R.",
      date: "January 8, 2025",
    },
    {
      stars: 5,
      text: "Contratamos a Solana para nuestra casa de construcción nueva en Dallas. Instalaron porcelana en toda la casa y madera en las habitaciones. El acabado es impecable y terminaron antes de lo previsto. ¡Verdaderos profesionales!",
      initials: "JM",
      name: "Jennifer M.",
      date: "November 22, 2024",
    },
  ],
  [
    {
      stars: 5,
      text: "Profesional, rápido y precios justos. Instalaron azulejo de piedra en nuestra cocina y se ve mejor de lo que imaginamos. Solana Moderno Tile es la única empresa de pisos en la que confío en Dallas.",
      initials: "DC",
      name: "David C.",
      date: "February 3, 2025",
    },
    {
      stars: 5,
      text: "Nuestra remodelación de ducha quedó increíble. Nos ayudaron a elegir el azulejo cerámico perfecto y la instalación de la puerta de vidrio fue impecable. El equipo fue limpio, respetuoso y entregó exactamente lo que prometieron.",
      initials: "LP",
      name: "Lisa P.",
      date: "April 12, 2024",
    },
    {
      stars: 5,
      text: "Después de buscar por meses, finalmente encontramos un equipo que entendió nuestra visión de diseño moderno. Los pisos de porcelana de gran formato que instalaron cambiaron todo nuestro espacio. ¡Cinco estrellas sin duda!",
      initials: "RT",
      name: "Robert T.",
      date: "July 18, 2024",
    },
  ],
  [
    {
      stars: 5,
      text: "Excelente experiencia de principio a fin. Llamé para un presupuesto, llegaron a tiempo y la instalación de piso de madera fue perfecta. ¡Gracias Solana Moderno Tile LLC!",
      initials: "SA",
      name: "Sandra A.",
      date: "October 5, 2024",
    },
    {
      stars: 5,
      text: "Muy contento con la instalación de azulejo en nuestro proyecto comercial. Manejaron más de 3000 pies cuadrados de porcelana sin ningún problema. Definitivamente los contrataré de nuevo para nuestra próxima construcción.",
      initials: "MK",
      name: "Michael K.",
      date: "December 10, 2024",
    },
    {
      stars: 5,
      text: "Queríamos un look moderno para el protector de salpicaduras de la cocina y superaron nuestras expectativas. El patrón cerámico colorido es exactamente lo que imaginamos. Servicio rápido, buen precio, equipo amable.",
      initials: "EW",
      name: "Emily W.",
      date: "June 2, 2024",
    },
  ],
  [
    {
      stars: 5,
      text: "Les encargué una remodelación completa de nuestra propiedad de inversión. Pisos nuevos en cada habitación, dos remodelaciones de ducha y zócalos de azulejo. La atención al detalle fue increíble. Estos muchachos son verdaderos artesanos.",
      initials: "JB",
      name: "James B.",
      date: "August 14, 2024",
    },
    {
      stars: 5,
      text: "Hablé con ellos en español lo que hizo todo mucho más fácil. Me explicaron cada paso, me dieron un presupuesto justo y entregaron antes de lo programado. ¡Gracias Solana Moderno Tile!",
      initials: "CV",
      name: "Carmen V.",
      date: "September 30, 2024",
    },
    {
      stars: 5,
      text: "Contraté a Solana para la construcción de nuestro nuevo restaurante. Instalaron azulejo de grado comercial en toda la cocina y el comedor. Duradero, hermoso y exactamente dentro del presupuesto. Cero estrés para nosotros.",
      initials: "TH",
      name: "Tom H.",
      date: "May 7, 2025",
    },
  ],
];

export default function ReseñasSection() {
  const [page, setPage] = useState(0);

  return (
    <section className="bg-[#0d0d0d] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Reseñas de Google Header */}
        <div className="text-center mb-12">
          {/* Google Logo profesional */}
          <div className="flex items-center justify-center gap-1 mb-4 select-none">
            <span className="text-[#4285F4] text-3xl md:text-4xl font-bold tracking-tight">G</span>
            <span className="text-[#EA4335] text-3xl md:text-4xl font-bold tracking-tight">o</span>
            <span className="text-[#FBBC05] text-3xl md:text-4xl font-bold tracking-tight">o</span>
            <span className="text-[#4285F4] text-3xl md:text-4xl font-bold tracking-tight">g</span>
            <span className="text-[#34A853] text-3xl md:text-4xl font-bold tracking-tight">l</span>
            <span className="text-[#EA4335] text-3xl md:text-4xl font-bold tracking-tight">e</span>
            <span className="text-white/30 text-2xl md:text-3xl font-light mx-3">|</span>
            <span className="text-white/70 text-xl md:text-2xl font-medium tracking-wide">Reseñas</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-10">
            Reseñas reales de clientes reales en Dallas y áreas cercanas. Estamos orgullosos de nuestra reputación.
          </p>

          {/* Calificación de Google Badge — diseño limpio profesional */}
          <div className="inline-flex items-center gap-6 bg-[#111111] border border-white/10 rounded-2xl px-8 py-5">
            <div className="flex items-center gap-2">
              <i className="ri-google-fill text-[#4285F4] text-2xl"></i>
              <span className="text-white/50 text-xs uppercase tracking-wider font-medium hidden sm:block">Calificación</span>
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-white font-extrabold text-3xl leading-none">5.0</span>
                <div className="flex items-center gap-0.5">
                  <i className="text-sm ri-star-fill text-yellow-400"></i>
                  <i className="text-sm ri-star-fill text-yellow-400"></i>
                  <i className="text-sm ri-star-fill text-yellow-400"></i>
                  <i className="text-sm ri-star-fill text-yellow-400"></i>
                  <i className="text-sm ri-star-fill text-yellow-400"></i>
                </div>
              </div>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="text-center">
              <p className="text-white font-bold text-xl leading-none">80+</p>
              <p className="text-gray-500 text-[11px] mt-1">Reseñas Verificadas</p>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {reviews[page].map((r, idx) => (
            <div key={idx} className="bg-[#111111] border border-white/10 rounded-2xl p-6 flex flex-col relative overflow-hidden group hover:border-white/20 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i
                      key={i}
                      className={`text-sm ri-star-fill ${i < r.stars ? "text-yellow-400" : "text-gray-600"}`}
                    ></i>
                  ))}
                </div>
                {/* Badge sutil Google */}
                <div className="flex items-center gap-1.5 bg-white/5 rounded-full px-2.5 py-1">
                  <i className="ri-google-fill text-[#4285F4] text-xs"></i>
                  <span className="text-gray-400 text-[10px] font-medium">Google</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-5">"{r.text}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 flex items-center justify-center bg-[#11f292]/15 rounded-full shrink-0">
                  <span className="text-[#11f292] text-sm font-bold">{r.initials}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-white text-sm font-semibold">{r.name}</p>
                  <p className="text-gray-500 text-[11px]">{r.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Google CTA */}
        <div className="text-center mb-10">
          <a
            href="https://www.google.com/search?q=Solana+Moderno+Tile+LLC+Dallas+TX"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-3 whitespace-nowrap bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-4 rounded-full text-base transition-all duration-200 cursor-pointer shadow-[0_0_30px_rgba(66,133,244,0.15)]"
          >
            <i className="ri-google-fill text-[#4285F4] text-lg"></i>
            <span>Déjanos Una Reseña de 5 Estrellas en Google</span>
            <i className="ri-external-link-line text-sm"></i>
          </a>
          <p className="text-gray-500 text-xs mt-3">Tus comentarios nos ayudan a crecer y servirte mejor.</p>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
          <button
            disabled={page === 0}
            onClick={() => setPage((p) => p - 1)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-colors cursor-pointer"
          >
            <i className="ri-arrow-left-s-line"></i>
          </button>
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                page === i ? "bg-gradient-to-r from-[#9a44ff] to-[#11f292] text-white" : "bg-white/5 hover:bg-white/10 text-gray-400"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={page === reviews.length - 1}
            onClick={() => setPage((p) => p + 1)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-colors cursor-pointer"
          >
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </div>
    </section>
  );
}