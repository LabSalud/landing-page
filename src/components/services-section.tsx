import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Droplet, Heart, Microscope, Pill, Stethoscope } from "lucide-react"

const services = [
  {
    icon: Droplet,
    title: "Hematología",
    description: "Análisis completos de sangre y componentes sanguíneos",
  },
  {
    icon: Microscope,
    title: "Bioquímica Clínica",
    description: "Estudios metabólicos y funcionales del organismo",
  },
  {
    icon: Heart,
    title: "Perfil Lipídico",
    description: "Control de colesterol y triglicéridos",
  },
  {
    icon: Activity,
    title: "Hormonas",
    description: "Dosajes hormonales completos",
  },
  {
    icon: Pill,
    title: "Toxicología",
    description: "Detección de sustancias y medicamentos",
  },
  {
    icon: Stethoscope,
    title: "Análisis Generales",
    description: "Chequeos preventivos y de rutina",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Ofrecemos una amplia gama de análisis bioquímicos con tecnología de vanguardia
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
