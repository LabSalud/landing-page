import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, Shield } from "lucide-react"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Sobre Lab Salud</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Ubicados en la Clínica Más Salud de Leones, Córdoba, somos un laboratorio bioquímico comprometido con la
              excelencia en el diagnóstico clínico.
            </p>
            <p className="text-lg text-muted-foreground text-pretty">
              Contamos con equipamiento de última generación que nos permite realizar análisis bioquímicos de manera
              rápida y con resultados seguros, garantizando la precisión que tu salud merece.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold">Resultados Rápidos</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold">Tecnología Avanzada</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold">Precisión Garantizada</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-primary/10">
              <img
                src="/modern-biochemical-laboratory-equipment.jpg"
                alt="Equipamiento de laboratorio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
