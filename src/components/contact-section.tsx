import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, MessageCircle, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-gradient-to-b from-[#204983]/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Contacto</h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty">
            Estamos aquí para atenderte. Comunícate con nosotros por cualquiera de estos medios
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/60 backdrop-blur-sm border-[#204983]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#204983]">
                <MapPin className="w-5 h-5" />
                Ubicación
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-medium">Clínica Más Salud</p>
              <p className="text-muted-foreground text-sm">Av del Libertador 1595</p>
              <p className="text-muted-foreground text-sm">Leones, Córdoba</p>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-[#204983]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#204983]">
                <Clock className="w-5 h-5" />
                Horarios
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="font-medium text-sm">Extracción de muestras</p>
                <p className="text-muted-foreground text-sm">Lunes a Viernes: 7:30 - 10:30 hs</p>
              </div>
              <div className="pt-2">
                <p className="font-medium text-sm">Atención de secretaría</p>
                <p className="text-muted-foreground text-sm">Lunes a Viernes: 7:30 - 14:30 hs</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-[#204983]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#204983]">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 text-sm">+54 3472 582866</p>
              <Button asChild className="w-full bg-[#204983] hover:bg-[#1a3a6b] text-white">
                <a href="https://wa.me/543472582866" target="_blank" rel="noopener noreferrer">
                  Enviar Mensaje
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-[#204983]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#204983]">
                <Mail className="w-5 h-5" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 text-sm">labsalud.leones@gmail.com</p>
              <Button
                variant="outline"
                asChild
                className="w-full bg-transparent border-[#204983] text-[#204983] hover:bg-[#204983]/10"
              >
                <a href="mailto:labsalud.leones@gmail.com">Enviar Email</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 sm:mt-12 max-w-4xl mx-auto">
          <Card className="bg-white/60 backdrop-blur-sm border-[#204983]/20">
            <CardHeader>
              <CardTitle className="text-[#204983]">Cómo Llegar</CardTitle>
              <CardDescription>Av del Libertador 1595, Leones, Córdoba</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.5!2d-62.2969!3d-32.6789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cc4b0e0e0e0e0e%3A0x0!2sAv.+del+Libertador+1595%2C+Leones%2C+C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Lab Salud - Clínica Más Salud"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
