"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Lab Salud Logo" className="h-12 w-auto object-contain" />
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#inicio" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#nosotros" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Nosotros
            </a>
            <a href="#noticias" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Noticias
            </a>
            <a href="#contacto" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button size="sm" asChild>
              <a href="https://wa.me/543472582866" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a href="#inicio" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Servicios
              </a>
              <a href="#nosotros" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Nosotros
              </a>
              <a href="#noticias" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Noticias
              </a>
              <a href="#contacto" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Contacto
              </a>
              <Button size="sm" className="w-full" asChild>
                <a href="https://wa.me/543472582866" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
