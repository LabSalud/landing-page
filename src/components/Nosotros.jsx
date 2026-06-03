export default function Nosotros() {
  return (
    <section id="nosotros" className="py-16 md:py-24 lab-grad-rev">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">

          <div className="space-y-6">
            <p className="text-sm font-semibold tracking-wider uppercase text-lab">Sobre nosotros</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ textWrap: 'balance' }}>Sobre Labsalud</h2>
            <p className="text-lg text-gray-600" style={{ textWrap: 'pretty' }}>
              Ubicados en la Clínica Más Salud de Leones, Córdoba, somos un laboratorio bioquímico comprometido con la excelencia en el diagnóstico clínico.
            </p>
            <p className="text-lg text-gray-600" style={{ textWrap: 'pretty' }}>
              Contamos con equipamiento de última generación que nos permite realizar análisis bioquímicos de manera rápida y con resultados seguros, garantizando la precisión que tu salud merece.
            </p>

            <div className="bg-lab/10 border border-lab/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-lab flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <div>
                  <p className="font-semibold text-lab mb-1">Calidad Certificada</p>
                  <p className="text-sm text-gray-700">
                    Nuestro laboratorio se rige por las normas y protocolos establecidos por <strong>COBICO</strong> (Colegio de Bioquímicos de Córdoba), <strong>FEBICO</strong> (Federación Bioquímica de la Provincia de Córdoba) y <strong>CUBRA</strong> (Confederación Unificada Bioquímica de la República Argentina).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 border border-lab/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-lab flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 22V12h6v10" />
                </svg>
                <div>
                  <p className="font-semibold text-lab mb-1">Red de Laboratorios</p>
                  <p className="text-sm text-gray-700">Trabajamos en conjunto con los mejores laboratorios de la zona, derivando estudios especializados para garantizar la máxima calidad y precisión en cada análisis.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
              {[
                {
                  icon: <svg className="w-8 h-8 text-lab mx-auto mb-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
                  label: 'Resultados Rápidos',
                },
                {
                  icon: <svg className="w-8 h-8 text-lab mx-auto mb-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
                  label: 'Tecnología Avanzada',
                },
                {
                  icon: <svg className="w-8 h-8 text-lab mx-auto mb-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>,
                  label: 'Precisión Garantizada',
                },
              ].map(({ icon, label }) => (
                <div key={label} className="bg-white/70 border border-lab/20 rounded-lg p-5 text-center ring-soft">
                  {icon}
                  <p className="font-semibold text-sm text-gray-900">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-first md:order-last">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-lab/10 border-2 border-lab/20 ring-soft">
              <img
                src="/assets/equipamiento.jpeg"
                alt="Equipamiento de Labsalud — analizadores bioquímicos de última generación"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}