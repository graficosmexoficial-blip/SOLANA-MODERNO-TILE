const steps = [
  {
    num: "1",
    title: "Consulta y Presupuesto Gratis",
    description:
      "Trae tus planos o llámanos. Visitamos tu sitio, escuchamos tu visión y te damos un presupuesto detallado sin compromiso para tu proyecto de pisos o revestimientos. Comunicación clara desde el primer contacto.",
    icon: "ri-customer-service-2-line",
  },
  {
    num: "2",
    title: "Selección de Materiales",
    description:
      "Elige entre nuestra amplia gama de materiales de alta calidad — mármol, piedra, cerámica, porcelana o madera personalizada. Te guiamos para encontrar la combinación perfecta para tu estilo y presupuesto.",
    icon: "ri-palette-line",
  },
  {
    num: "3",
    title: "Instalación Experta",
    description:
      "Nuestros instaladores expertos colocan tu piso con precisión — preparación adecuada del contrapiso, cortes exactos, nivelación y acabado impecable en cada detalle. Trabajo limpio y ordenado siempre.",
    icon: "ri-tools-line",
  },
  {
    num: "4",
    title: "Inspección Final",
    description:
      "Antes de terminar, hacemos una inspección de calidad exhaustiva para asegurar que cada detalle esté perfecto. Tu espacio queda con un aspecto moderno, limpio y profesionalmente terminado.",
    icon: "ri-checkbox-circle-line",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#11f292] border border-[#11f292]/40 rounded-full px-4 py-1 mb-4">
          Cómo Funciona
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-14">
          Tu Proyecto de Pisos y Revestimientos en Cuatro Pasos Simples
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="group relative bg-[#1a1a1a] border border-white/5 hover:border-[#11f292]/30 rounded-2xl px-6 py-8 text-center flex flex-col items-center cursor-pointer transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full mb-4 mt-2 bg-[#11f292]/15 group-hover:bg-[#11f292]/25 transition-colors">
                <i className={`${s.icon} text-[#11f292] text-2xl`}></i>
              </div>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#9a44ff] to-[#11f292] text-white text-xs font-extrabold w-6 h-6 rounded-full flex items-center justify-center">
                {s.num}
              </div>
              <h3 className="font-bold text-base mb-2 text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}