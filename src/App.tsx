import { Header } from "./components/header"
import { HeroSection } from "./components/hero-section"
import { ServicesSection } from "./components/services-section"
import { AboutSection } from "./components/about-section"
import { ContactSection } from "./components/contact-section"
import { Footer } from "./components/footer"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
