import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, MessageCircle, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Contacto</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Estamos aquí para atenderte. Comunícate con nosotros por cualquiera de estos medios
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Ubicación
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-medium">Clínica Más Salud</p>
              <p className="text-muted-foreground">Av del Libertador 1595</p>
              <p className="text-muted-foreground">Leones, Córdoba</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Horarios
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-medium">Lunes a Viernes</p>
              <p className="text-muted-foreground">8:00 - 16:00 hs</p>
              <p className="text-sm text-muted-foreground mt-2">Atención por orden de llegada</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                WhatsApp
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">+54 3472582866</p>
              <Button asChild className="w-full">
                <a href="https://wa.me/543472582866" target="_blank" rel="noopener noreferrer">
                  Enviar Mensaje
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">labsalud.leones@gmail.com</p>
              <Button variant="outline" asChild className="w-full bg-transparent">
                <a href="mailto:labsalud.leones@gmail.com">Enviar Email</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Cómo Llegar</CardTitle>
              <CardDescription>Av del Libertador 1595, Leones, Córdoba</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.5!2d-62.2969!3d-32.6789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQwJzQ0LjAiUyA2MsKwMTcnNDguOCJX!5e0!3m2!1ses!2sar!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Lab Salud"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
