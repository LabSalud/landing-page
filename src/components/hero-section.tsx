import { Button } from "@/components/ui/button"
import { Clock, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              Análisis Bioquímicos <span className="text-primary">Rápidos y Confiables</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              En Lab Salud contamos con tecnología de última generación para brindarte resultados precisos y seguros en
              el menor tiempo posible.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-foreground">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Horario de atención</p>
                  <p className="text-sm text-muted-foreground">Lunes a Viernes: 8:00 - 16:00 hs</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Clínica Más Salud</p>
                  <p className="text-sm text-muted-foreground">Av del Libertador 1595, Leones, Córdoba</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" asChild>
                <a href="https://wa.me/543472582866" target="_blank" rel="noopener noreferrer">
                  Consultar por WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#servicios">Ver Servicios</a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-primary/10">
              <img src="/modern-medical-lab.png" alt="Personal" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
