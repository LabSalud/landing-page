import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(o => !o)
  const close = () => setIsOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/75 backdrop-blur-md border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 items-center h-16 lg:h-20">

          {/* Desktop nav — izquierda */}
          <nav className="hidden lg:flex items-center gap-7 justify-center" aria-label="Navegación principal izquierda">
            <a href="#servicios" className="text-sm font-medium text-gray-700 hover:text-lab transition-colors">Servicios</a>
            <a href="#obras-sociales" className="text-sm font-medium text-gray-700 hover:text-lab transition-colors">Coberturas</a>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex justify-start">
            <button
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen.toString()}
              aria-controls="mobileMenu"
              className="inline-flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={toggle}
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex justify-center">
            <a href="#inicio" className="flex items-center" aria-label="Labsalud — Inicio">
              <img src="/assets/logo_icono.svg" alt="Labsalud — Laboratorio Bioquímico" className="h-9 lg:h-10 w-auto object-contain" />
            </a>
          </div>

          {/* Desktop nav — derecha (div siempre en el grid para mantener logo centrado) */}
          <div className="flex justify-center">
            <nav className="hidden lg:flex items-center gap-7" aria-label="Navegación principal derecha">
              <a href="#nosotros" className="text-sm font-medium text-gray-700 hover:text-lab transition-colors">Nosotros</a>
              <a href="#contacto" className="text-sm font-medium text-gray-700 hover:text-lab transition-colors">Contacto</a>
            </nav>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobileMenu"
          className={`lg:hidden mobile-menu ${isOpen ? 'is-open' : ''}`}
        >
          <div>
            <nav className="flex flex-col py-3 border-t border-gray-200/60" aria-label="Navegación móvil">
              <a href="#inicio" onClick={close} className="px-3 py-3 text-base font-medium text-gray-700 rounded-lg hover:bg-lab/5 hover:text-lab transition-colors">Inicio</a>
              <a href="#servicios" onClick={close} className="px-3 py-3 text-base font-medium text-gray-700 rounded-lg hover:bg-lab/5 hover:text-lab transition-colors">Servicios</a>
              <a href="#obras-sociales" onClick={close} className="px-3 py-3 text-base font-medium text-gray-700 rounded-lg hover:bg-lab/5 hover:text-lab transition-colors">Coberturas</a>
              <a href="#nosotros" onClick={close} className="px-3 py-3 text-base font-medium text-gray-700 rounded-lg hover:bg-lab/5 hover:text-lab transition-colors">Nosotros</a>
              <a href="#contacto" onClick={close} className="px-3 py-3 text-base font-medium text-gray-700 rounded-lg hover:bg-lab/5 hover:text-lab transition-colors">Contacto</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}