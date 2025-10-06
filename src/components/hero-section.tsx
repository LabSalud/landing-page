import { Button } from "@/components/ui/button"
import { Clock, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#204983]/5 to-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              Análisis Bioquímicos <span className="text-[#204983]">Rápidos y Confiables</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground text-pretty">
              En Lab Salud contamos con tecnología de última generación para brindarte resultados precisos y seguros en
              el menor tiempo posible.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 text-foreground">
                <Clock className="w-5 h-5 text-[#204983] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Horarios de atención</p>
                  <p className="text-sm text-muted-foreground">Extracción: Lunes a Viernes 7:30 - 10:30 hs</p>
                  <p className="text-sm text-muted-foreground">Secretaría: Lunes a Viernes 7:30 - 14:30 hs</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-foreground">
                <MapPin className="w-5 h-5 text-[#204983] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Clínica Más Salud</p>
                  <p className="text-sm text-muted-foreground">Av del Libertador 1595, Leones, Córdoba</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
              <Button size="lg" asChild className="bg-[#204983] hover:bg-[#1a3a6b] text-white w-full sm:w-auto">
                <a href="https://wa.me/543472582866" target="_blank" rel="noopener noreferrer">
                  Consultar por WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto border-[#204983] text-[#204983] hover:bg-[#204983]/10 bg-transparent"
              >
                <a href="#servicios">Ver Servicios</a>
              </Button>
            </div>
          </div>

          <div className="relative order-first md:order-last">
            <div className="aspect-square rounded-2xl overflow-hidden bg-[#204983]/10 border-2 border-[#204983]/20">
              <img
                src="/clinica.png"
                alt="Clínica Más Salud - Vista exterior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
