"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 items-center h-16 lg:h-20">
          {/* Left section - Navigation links */}
          <nav className="hidden lg:flex items-center gap-6 justify-start">
            <a href="#inicio" className="text-sm font-medium text-gray-700 hover:text-[#204983] transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-sm font-medium text-gray-700 hover:text-[#204983] transition-colors">
              Servicios
            </a>
            <a href="#nosotros" className="text-sm font-medium text-gray-700 hover:text-[#204983] transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="text-sm font-medium text-gray-700 hover:text-[#204983] transition-colors">
              Contacto
            </a>
          </nav>

          {/* Mobile menu button - left side on mobile */}
          <div className="lg:hidden flex justify-start">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Center section - Logo (always centered) */}
          <div className="flex justify-center">
            <a href="#inicio" className="flex items-center">
              <img src="/logo_icono.svg" alt="Lab Salud Logo" className="h-12 lg:h-10 w-auto object-contain" />
            </a>
          </div>

          {/* Right section - WhatsApp button */}
          <div className="flex justify-end">
            <Button size="sm" asChild className="bg-[#204983] hover:bg-[#1a3a6b] text-white">
              <a href="https://wa.me/543472582866" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200/50 bg-white/90 backdrop-blur-sm">
            <nav className="flex flex-col gap-4">
              <a
                href="#inicio"
                className="text-sm font-medium text-gray-700 hover:text-[#204983] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#servicios"
                className="text-sm font-medium text-gray-700 hover:text-[#204983] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#nosotros"
                className="text-sm font-medium text-gray-700 hover:text-[#204983] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </a>
              <a
                href="#contacto"
                className="text-sm font-medium text-gray-700 hover:text-[#204983] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
