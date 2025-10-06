import { Mail, MapPin, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#204983] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Lab Salud</h3>
            <p className="text-white/80 text-sm">
              Laboratorio bioquímico en Leones, Córdoba. Análisis clínicos con tecnología de vanguardia y atención
              personalizada.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>3472582866</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>labsalud.leones@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Av del Libertador 1595, Leones, Córdoba</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Horarios</h3>
            <div className="text-sm space-y-2">
              <p className="text-white/80">Lunes a Viernes</p>
              <p className="font-medium">Extracción: 7:30 - 10:30 hs</p>
              <p className="font-medium">Secretaría: 7:30 - 14:30 hs</p>
              <p className="text-white/80 text-xs mt-3">Atención por orden de llegada</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80">
          <p>&copy; {new Date().getFullYear()} Lab Salud. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
