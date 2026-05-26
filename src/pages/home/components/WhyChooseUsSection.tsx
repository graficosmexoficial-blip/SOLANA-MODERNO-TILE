const stats = [
  { label: "Tasa de Satisfacción del Cliente", value: 99 },
  { label: "Calidad de Acabado Premium", value: 100 },
  { label: "Tasa de Entrega a Tiempo", value: 97 },
  { label: "Tasa de Referidos", value: 96 },
];

export default function WhyChooseUsSection() {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[520px]">
        <div className="relative w-full lg:w-1/2 min-h-[340px] lg:min-h-[520px] bg-black flex items-center justify-center">
          <img
            src="https://static.readdy.ai/image/3ce9d24c92e6c33dbaca65a0380531ab/abe361435ccc582d6521837dde46896d.png"
            alt="Solana Moderno Tile LLC trabajo profesional de pisos y acabados en Dallas"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
            <span className="bg-black/60 text-white text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">Trabajo Real — Solana Moderno Tile LLC</span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-[#0d0d0d] flex flex-col justify-center px-8 md:px-16 py-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#11f292] border border-[#11f292]/40 rounded-full px-4 py-1 mb-5 w-fit">
            Por Qué Elegirnos
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-snug mb-4">
            Excelencia en Pisos y Acabados<br />Respaldada por Resultados Reales
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
            Nuestros resultados hablan por sí mismos. En Solana Moderno Tile LLC, nos exigimos los más altos estándares en cada proyecto — desde los materiales que seleccionamos hasta la inspección final antes de la entrega.
          </p>
          <div className="space-y-5">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-300">{s.label}</span>
                  <span className="text-sm font-extrabold text-[#11f292]">{s.value}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-[#9a44ff] to-[#11f292] transition-all duration-1000 ease-out"
                    style={{ width: `${s.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}