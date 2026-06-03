const ExternalIcon = () => (
  <svg className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const chipBase = 'oss-chip flex items-center justify-center text-center text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-lg px-3 py-4 h-full'
const chipLink = 'oss-chip group flex items-center justify-center gap-1.5 text-center text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-lg px-3 py-4 h-full'

const coverages = [
  { name: 'Caja Notarial' },
  { name: 'Ampara Salud', href: 'https://amparasalud.com.ar' },
  { name: 'Avalian', href: 'https://www.avalian.com' },
  { name: 'Caja de Abogados', href: 'https://www.caja-abogados.org.ar' },
  { name: 'CPCE' },
  { name: 'Federada Salud', href: 'https://www.federada.com' },
  { name: 'Jerárquicos Salud', href: 'https://www.jerarquicos.com' },
  { name: 'OSPEDyC', href: 'https://www.ospedyc.org' },
  { name: 'OSPIL' },
  { name: 'OSSEG' },
  { name: 'OSSOELSAC' },
  { name: 'Prevención Salud', href: 'https://www.prevencionsalud.com.ar' },
  { name: 'SanCor Salud', href: 'https://www.sancorsalud.com.ar' },
  { name: 'Swiss Medical', href: 'https://www.swissmedical.com.ar' },
  { name: 'OSFATLyF', href: 'https://osfatlyf.org' },
  { name: 'Choferes OSCCPATAC' },
  { name: 'Gráficos' },
  { name: 'Nobis Salud', href: 'https://www.nobis.com.ar' },
  { name: 'Servired' },
  { name: 'LyFCBA' },
  { name: 'OSDE', href: 'https://www.osde.com.ar' },
  { name: 'Andina ART', href: 'https://www.andinaart.com.ar' },
  { name: 'Apross', href: 'https://www.apross.gov.ar' },
  { name: 'Asociart', href: 'https://www.asociart.com.ar' },
  { name: 'El Norte' },
  { name: 'La Segunda ART / L2 Personas', href: 'https://www.lasegunda.com.ar' },
  { name: 'Medicar' },
  { name: 'Serena ART' },
  { name: 'OSPLYF', href: 'https://osplyfc.com.ar' },
  { name: 'OSPTV' },
  { name: 'PAMI', href: 'https://www.pami.org.ar' },
  { name: 'SANOS SALUD' },
  { name: 'SCIS' },
  { name: 'PREVENCIÓN ART', href: 'https://www.prevencionart.com.ar' },
]

export default function ObrasSociales() {
  return (
    <section id="obras-sociales" className="py-16 md:py-24 bg-gray-50 border-y border-gray-200/70">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold tracking-wider uppercase text-lab mb-3">Cobertura</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900" style={{ textWrap: 'balance' }}>Obras Sociales y Prepagas</h2>
          <p className="text-lg text-gray-600" style={{ textWrap: 'pretty' }}>
            Atendemos las principales obras sociales y prepagas del país. Si la tuya no figura, consultanos — la sumamos o te orientamos.
          </p>
        </header>

        <ul className="flex flex-wrap justify-center gap-3">
          {coverages.map(({ name, href }) =>
            href ? (
              <li key={name}>
                <a href={href} target="_blank" rel="noopener noreferrer" className={chipLink}>
                  <span>{name}</span>
                  <ExternalIcon />
                </a>
              </li>
            ) : (
              <li key={name}>
                <span className={chipBase}>{name}</span>
              </li>
            )
          )}
        </ul>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <p className="text-sm text-gray-600">¿No ves tu obra social en la lista?</p>
          <a
            href="https://wa.me/543472582866?text=Hola%2C%20quiero%20consultar%20si%20atienden%20mi%20obra%20social"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-lab hover:text-lab-700"
          >
            Consultar disponibilidad
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}