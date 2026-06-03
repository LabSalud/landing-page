import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(o => !o)
  const close = () => setIsOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/75 backdrop-blur-md border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 items-center h-16 lg:h-20">

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7 justify-start" aria-label="Navegación principal">
            <a href="#inicio" className="text-sm font-medium text-gray-700 hover:text-lab transition-colors">Inicio</a>
            <a href="#servicios" className="text-sm font-medium text-gray-700 hover:text-lab transition-colors">Servicios</a>
            <a href="#obras-sociales" className="text-sm font-medium text-gray-700 hover:text-lab transition-colors">Coberturas</a>
            <a href="#nosotros" className="text-sm font-medium text-gray-700 hover:text-lab transition-colors">Nosotros</a>
            <a href="#contacto" className="text-sm font-medium text-gray-700 hover:text-lab transition-colors">Contacto</a>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex justify-start">
            <button
              aria-label="Abrir menú"
              aria-expanded={isOpen.toString()}
              aria-controls="mobileMenu"
              className="text-gray-700 p-2 rounded hover:bg-gray-100"
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

          {/* WhatsApp CTA */}
          <div className="flex justify-end">
            <a
              href="https://wa.me/543472582866"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-lab hover:bg-lab-700 text-white text-sm font-medium px-3.5 py-2 rounded-md transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.85 11.85 0 0 0 12.06 0C5.5 0 .2 5.3.2 11.84a11.7 11.7 0 0 0 1.66 6L0 24l6.32-1.65a11.86 11.86 0 0 0 5.74 1.46h.01c6.55 0 11.86-5.3 11.86-11.84 0-3.16-1.23-6.13-3.41-8.49zM12.07 21.8a9.93 9.93 0 0 1-5.05-1.38l-.36-.21-3.75.98 1-3.66-.24-.38a9.86 9.86 0 0 1-1.52-5.31C2.15 6.42 6.6 1.97 12.07 1.97c2.65 0 5.14 1.03 7.02 2.9a9.85 9.85 0 0 1 2.9 7.02c0 5.46-4.46 9.91-9.92 9.91zm5.43-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.18-.24-.58-.49-.5-.66-.5h-.56c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.11 3.22 5.11 4.51.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.34z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobileMenu"
          className={`lg:hidden ${isOpen ? '' : 'hidden'} py-4 border-t border-gray-200/60 bg-white/95 backdrop-blur-sm`}
        >
          <nav className="flex flex-col gap-3" aria-label="Navegación móvil">
            <a href="#inicio" onClick={close} className="text-sm font-medium text-gray-700 hover:text-lab">Inicio</a>
            <a href="#servicios" onClick={close} className="text-sm font-medium text-gray-700 hover:text-lab">Servicios</a>
            <a href="#obras-sociales" onClick={close} className="text-sm font-medium text-gray-700 hover:text-lab">Coberturas</a>
            <a href="#nosotros" onClick={close} className="text-sm font-medium text-gray-700 hover:text-lab">Nosotros</a>
            <a href="#contacto" onClick={close} className="text-sm font-medium text-gray-700 hover:text-lab">Contacto</a>
          </nav>
        </div>
      </div>
    </header>
  )
}