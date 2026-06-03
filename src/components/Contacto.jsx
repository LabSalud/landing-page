export default function Contacto() {
  return (
    <section id="contacto" className="py-16 md:py-24 lab-grad">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold tracking-wider uppercase text-lab mb-3">Contacto</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900" style={{ textWrap: 'balance' }}>Estamos para atenderte</h2>
          <p className="text-lg text-gray-600" style={{ textWrap: 'pretty' }}>Comunícate con nosotros por cualquiera de estos medios.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">

          <article className="bg-white/80 backdrop-blur-sm border border-lab/20 rounded-xl p-6 ring-soft">
            <h3 className="flex items-center gap-2 text-lab font-semibold mb-3">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              Ubicación
            </h3>
            <p className="font-medium text-gray-900">Clínica Más Salud</p>
            <address className="not-italic text-gray-600 text-sm">
              Av. del Libertador 1595<br />
              Leones, Córdoba, Argentina
            </address>
          </article>

          <article className="bg-white/80 backdrop-blur-sm border border-lab/20 rounded-xl p-6 ring-soft">
            <h3 className="flex items-center gap-2 text-lab font-semibold mb-3">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              Horarios
            </h3>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-medium text-gray-900">Extracción de muestras</p>
                <p className="text-gray-600">Lunes a Viernes: 7:30 – 10:30 hs</p>
              </div>
              <div className="pt-1">
                <p className="font-medium text-gray-900">Atención de secretaría</p>
                <p className="text-gray-600">Lunes a Viernes: 7:30 – 14:30 hs</p>
              </div>
            </div>
          </article>

          <article className="bg-white/80 backdrop-blur-sm border border-lab/20 rounded-xl p-6 ring-soft">
            <h3 className="flex items-center gap-2 text-lab font-semibold mb-3">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.85 11.85 0 0 0 12.06 0C5.5 0 .2 5.3.2 11.84a11.7 11.7 0 0 0 1.66 6L0 24l6.32-1.65a11.86 11.86 0 0 0 5.74 1.46c6.55 0 11.86-5.3 11.86-11.84 0-3.16-1.23-6.13-3.41-8.49z" />
              </svg>
              WhatsApp
            </h3>
            <p className="text-gray-600 text-sm mb-4">+54 3472 582866</p>
            <a
              href="https://wa.me/543472582866"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full justify-center items-center gap-2 bg-lab hover:bg-lab-700 text-white font-medium px-4 py-2.5 rounded-md transition-colors"
            >
              Enviar Mensaje
            </a>
          </article>

          <article className="bg-white/80 backdrop-blur-sm border border-lab/20 rounded-xl p-6 ring-soft">
            <h3 className="flex items-center gap-2 text-lab font-semibold mb-3">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email
            </h3>
            <p className="text-gray-600 text-sm mb-4 break-all">labsalud.leones@gmail.com</p>
            <a
              href="mailto:labsalud.leones@gmail.com"
              className="inline-flex w-full justify-center items-center gap-2 border border-lab text-lab hover:bg-lab/10 font-medium px-4 py-2.5 rounded-md transition-colors"
            >
              Enviar Email
            </a>
          </article>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <article className="bg-white/80 backdrop-blur-sm border border-lab/20 rounded-xl overflow-hidden ring-soft">
            <header className="p-6 pb-4">
              <h3 className="text-lab font-semibold">Cómo Llegar</h3>
              <p className="text-sm text-gray-600">Av. del Libertador 1595, Leones, Córdoba</p>
            </header>
            <div className="aspect-video bg-gray-100">
              <iframe
                src="https://www.google.com/maps?q=Av.+del+Libertador+1595,+Leones,+C%C3%B3rdoba,+Argentina&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Labsalud — Clínica Más Salud, Leones, Córdoba"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}