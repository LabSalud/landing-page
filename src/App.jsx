import Header from './components/Header'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import ObrasSociales from './components/ObrasSociales'
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-white antialiased">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-lab focus:text-white focus:px-3 focus:py-2 focus:rounded"
      >
        Saltar al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <Servicios />
        <ObrasSociales />
        <Nosotros />
        <Contacto />
      </main>
      <Footer />
      <a
        href="https://wa.me/543472582866"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:scale-105 transition-transform shadow-lg shadow-emerald-600/30"
      >
        <svg className="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.85 11.85 0 0 0 12.06 0C5.5 0 .2 5.3.2 11.84a11.7 11.7 0 0 0 1.66 6L0 24l6.32-1.65a11.86 11.86 0 0 0 5.74 1.46c6.55 0 11.86-5.3 11.86-11.84 0-3.16-1.23-6.13-3.41-8.49zm-8.46 18.34a9.93 9.93 0 0 1-5.05-1.38l-.36-.21-3.75.98 1-3.66-.24-.38a9.86 9.86 0 0 1-1.52-5.31C2.15 6.42 6.6 1.97 12.07 1.97c2.65 0 5.14 1.03 7.02 2.9a9.85 9.85 0 0 1 2.9 7.02c0 5.46-4.46 9.91-9.93 9.91zm5.43-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.18-.24-.58-.49-.5-.66-.5h-.56c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.11 3.22 5.11 4.51.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.34z" />
        </svg>
      </a>
    </div>
  )
}