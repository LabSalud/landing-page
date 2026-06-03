export default function Hero() {
  return (
    <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24 lab-grad">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">

          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-lab bg-lab/10 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 bg-lab rounded-full" />
              Laboratorio Bioquímico · Leones, Córdoba
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-gray-900" style={{ textWrap: 'balance' }}>
              Análisis Bioquímicos <span className="text-lab underline-deco">Rápidos y Confiables</span>
            </h1>
            <p className="text-lg text-gray-600" style={{ textWrap: 'pretty' }}>
              En Labsalud contamos con tecnología de última generación para brindarte resultados precisos y seguros en el menor tiempo posible.
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-lab flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <p className="font-medium text-gray-900">Horarios de atención</p>
                  <p className="text-sm text-gray-600">Extracción: Lunes a Viernes 7:30 – 10:30 hs</p>
                  <p className="text-sm text-gray-600">Secretaría: Lunes a Viernes 7:30 – 14:30 hs</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-lab flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="font-medium text-gray-900">Clínica Más Salud</p>
                  <p className="text-sm text-gray-600">Av. del Libertador 1595, Leones, Córdoba</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-lab flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-900">Entrega de resultados</p>
                  <p className="text-sm text-gray-600">Por WhatsApp, Email o retiro en el laboratorio.</p>
                </div>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4">
              <a
                href="https://wa.me/543472582866"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-lab hover:bg-lab-700 text-white font-medium px-5 py-3 rounded-md transition-colors"
              >
                Consultar por WhatsApp
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 border border-lab text-lab hover:bg-lab/10 font-medium px-5 py-3 rounded-md transition-colors"
              >
                Ver Servicios
              </a>
            </div>
          </div>

          <div className="relative order-first md:order-last">
            <div className="aspect-square rounded-2xl overflow-hidden bg-lab/10 border-2 border-lab/20 ring-soft">
              <img
                src="/assets/clinica.png"
                alt="Clínica Más Salud — sede de Labsalud, vista exterior, Leones, Córdoba"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="hidden md:flex absolute -bottom-5 -left-5 bg-white border border-gray-200 rounded-xl px-4 py-3 ring-soft items-center gap-3">
              <div>
                <p className="text-xs text-gray-500">Resultados</p>
                <p className="text-sm font-semibold text-lab leading-tight">WhatsApp · Email · Retiro</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}