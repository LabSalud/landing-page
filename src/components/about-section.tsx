import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, Shield, Building2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-gradient-to-b from-background to-[#204983]/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Sobre Labsalud</h2>
            <p className="text-base sm:text-lg text-muted-foreground text-pretty">
              Ubicados en la Clínica Más Salud de Leones, Córdoba, somos un laboratorio bioquímico comprometido con la
              excelencia en el diagnóstico clínico.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground text-pretty">
              Contamos con equipamiento de última generación que nos permite realizar análisis bioquímicos de manera
              rápida y con resultados seguros, garantizando la precisión que tu salud merece.
            </p>
            <div className="bg-[#204983]/10 border border-[#204983]/30 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#204983] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#204983] mb-1">Calidad Certificada</p>
                  <p className="text-sm text-gray-700">
                    Nuestro laboratorio se rige por las normas y protocolos establecidos por <strong>COBICO</strong>{" "}
                    (Colegio de Bioquímicos de Córdoba), <strong>FEBICO</strong> (Federación Bioquímica de la Provincia
                    de Córdoba) y <strong>CUBRA</strong> (Confederación Unificada Bioquímica de la República Argentina).
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/60 border border-[#204983]/30 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-[#204983] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#204983] mb-1">Red de Laboratorios</p>
                  <p className="text-sm text-gray-700">
                    Trabajamos en conjunto con los mejores laboratorios de la zona, derivando estudios especializados
                    para garantizar la máxima calidad y precisión en cada análisis.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6">
              <Card className="bg-white/60 backdrop-blur-sm border-[#204983]/20">
                <CardContent className="pt-6 text-center">
                  <Clock className="w-8 h-8 text-[#204983] mx-auto mb-3" />
                  <p className="font-semibold text-sm">Resultados Rápidos</p>
                </CardContent>
              </Card>
              <Card className="bg-white/60 backdrop-blur-sm border-[#204983]/20">
                <CardContent className="pt-6 text-center">
                  <Shield className="w-8 h-8 text-[#204983] mx-auto mb-3" />
                  <p className="font-semibold text-sm">Tecnología Avanzada</p>
                </CardContent>
              </Card>
              <Card className="bg-white/60 backdrop-blur-sm border-[#204983]/20">
                <CardContent className="pt-6 text-center">
                  <Award className="w-8 h-8 text-[#204983] mx-auto mb-3" />
                  <p className="font-semibold text-sm">Precisión Garantizada</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative order-first md:order-last">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#204983]/10 border-2 border-[#204983]/20">
              <img
                src="/equipamiento.jpeg"
                alt="Equipamiento del laboratorio Lab Salud"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
