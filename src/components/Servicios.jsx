const services = [
  {
    icon: (
      <svg className="w-6 h-6 text-lab" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    title: 'Hematología',
    desc: 'Análisis completos de sangre y componentes sanguíneos: hemograma, coagulación, eritrosedimentación.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-lab" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 18h8" /><path d="M3 22h18" /><path d="M14 22a7 7 0 1 0 0-14h-1" />
        <path d="M9 14h2" /><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2h-2z" />
        <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
      </svg>
    ),
    title: 'Bioquímica Clínica',
    desc: 'Estudios metabólicos y funcionales: glucemia, función renal y hepática, ionograma.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-lab" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Perfil Lipídico',
    desc: 'Control de colesterol total, HDL, LDL y triglicéridos para evaluación cardiovascular.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-lab" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Hormonas',
    desc: 'Dosajes hormonales completos: tiroides, suprarrenales, hormonas sexuales y reproductivas.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-lab" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10.5 20.5L3.5 13.5a4.95 4.95 0 1 1 7-7l7 7a4.95 4.95 0 1 1-7 7z" />
        <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
      </svg>
    ),
    title: 'Toxicología',
    desc: 'Detección de sustancias y medicamentos. Estudios para certificaciones laborales.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-lab" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
        <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" /><circle cx="20" cy="10" r="2" />
      </svg>
    ),
    title: 'Análisis Generales',
    desc: 'Chequeos preventivos, controles de rutina, análisis prequirúrgicos y prenupciales.',
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold tracking-wider uppercase text-lab mb-3">Servicios</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900" style={{ textWrap: 'balance' }}>Nuestros Análisis</h2>
          <p className="text-lg text-gray-600" style={{ textWrap: 'pretty' }}>Ofrecemos una amplia gama de análisis bioquímicos con tecnología de vanguardia.</p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon, title, desc }) => (
            <article key={title} className="hover-card border-2 border-gray-200 rounded-xl p-6 bg-white">
              <div className="w-12 h-12 rounded-lg bg-lab/10 flex items-center justify-center mb-4">
                {icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}