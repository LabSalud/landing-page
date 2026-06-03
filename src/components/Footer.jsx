export default function Footer() {
  return (
    <footer className="bg-lab text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">

          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-3">Labsalud</h3>
            <p className="text-white/80 text-sm">Laboratorio bioquímico en Leones, Córdoba. Análisis clínicos con tecnología de vanguardia y atención personalizada.</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.52 3.48A11.85 11.85 0 0 0 12.06 0C5.5 0 .2 5.3.2 11.84a11.7 11.7 0 0 0 1.66 6L0 24l6.32-1.65a11.86 11.86 0 0 0 5.74 1.46c6.55 0 11.86-5.3 11.86-11.84 0-3.16-1.23-6.13-3.41-8.49z" />
                </svg>
                <a href="https://wa.me/543472582866" className="hover:underline">+54 3472 582866</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:labsalud.leones@gmail.com" className="hover:underline">labsalud.leones@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span>Av. del Libertador 1595, Leones, Córdoba</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Horarios</h3>
            <div className="text-sm space-y-1.5">
              <p className="text-white/80">Lunes a Viernes</p>
              <p className="font-medium">Extracción: 7:30 – 10:30 hs</p>
              <p className="font-medium">Secretaría: 7:30 – 14:30 hs</p>
              <p className="text-white/70 text-xs mt-2">Atención por orden de llegada</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Enlaces</h3>
            <ul className="text-sm space-y-1.5">
              <li><a href="#servicios" className="text-white/85 hover:text-white">Servicios</a></li>
              <li><a href="#obras-sociales" className="text-white/85 hover:text-white">Coberturas</a></li>
              <li><a href="#nosotros" className="text-white/85 hover:text-white">Nosotros</a></li>
              <li><a href="#contacto" className="text-white/85 hover:text-white">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-sm text-white/80">
          <p>&copy; {new Date().getFullYear()} Labsalud. Todos los derechos reservados.</p>
          <p>Av. del Libertador 1595, Leones · Córdoba · Argentina</p>
        </div>
      </div>
    </footer>
  )
}