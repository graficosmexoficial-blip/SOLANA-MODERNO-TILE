export default function StatsBar() {
  return (
    <div className="w-full bg-[#1a1a1a] border-t-4 border-[#11f292]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8">
          <div className="flex items-end gap-0.5">
            <span className="text-4xl md:text-5xl font-extrabold text-white">16</span>
            <span className="text-2xl font-extrabold text-[#11f292] mb-1">+</span>
          </div>
          <p className="text-[#11f292] font-semibold text-sm mt-1">Años de Experiencia</p>
          <p className="text-white/50 text-xs mt-1 leading-snug max-w-[160px]">
            Más de 16 años de experiencia confiable en acabados de interiores en Dallas, Texas
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8">
          <div className="flex items-end gap-0.5">
            <span className="text-4xl md:text-5xl font-extrabold text-white">500</span>
            <span className="text-2xl font-extrabold text-[#11f292] mb-1">+</span>
          </div>
          <p className="text-[#11f292] font-semibold text-sm mt-1">Proyectos Completados</p>
          <p className="text-white/50 text-xs mt-1 leading-snug max-w-[160px]">
            Espacios residenciales y comerciales transformados con acabados modernos
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8">
          <div className="flex items-end gap-0.5">
            <span className="text-4xl md:text-5xl font-extrabold text-white">100</span>
            <span className="text-2xl font-extrabold text-[#11f292] mb-1">%</span>
          </div>
          <p className="text-[#11f292] font-semibold text-sm mt-1">Satisfacción Garantizada</p>
          <p className="text-white/50 text-xs mt-1 leading-snug max-w-[160px]">
            No paramos hasta que cada detalle cumpla con nuestros estándares de calidad
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8">
          <div className="flex items-end gap-0.5">
            <span className="text-4xl md:text-5xl font-extrabold text-white">5.0</span>
          </div>
          <p className="text-[#11f292] font-semibold text-sm mt-1">Calificación</p>
          <p className="text-white/50 text-xs mt-1 leading-snug max-w-[160px]">
            Basado en reseñas verificadas de clientes en todas las plataformas
          </p>
        </div>
      </div>
    </div>
  );
}