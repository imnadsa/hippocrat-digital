"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Logo from "@/components/logo"

interface HeaderProps {
  scrolled: boolean
}

export default function Header({ scrolled }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Function to handle external links
  const openExternalLink = (url: string) => {
    window.open(url, "_blank")
  }

  // Scroll to section function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/90 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Logo size="lg" />

        {/* Tagline - hidden on mobile */}
        <div className="hidden md:block text-center text-sm md:text-base truncate max-w-[200px] lg:max-w-none text-teal-300">
          «Digital решения в медицине»
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          <Button 
            variant="ghost" 
            className="text-slate-300 hover:text-teal-400 hover:bg-transparent"
            onClick={() => scrollToSection("about")}
          >
            О нас
          </Button>
          <Button 
            variant="ghost" 
            className="text-slate-300 hover:text-teal-400 hover:bg-transparent"
            onClick={() => scrollToSection("services")}
          >
            Услуги
          </Button>
          <Button 
            variant="ghost" 
            className="text-slate-300 hover:text-teal-400 hover:bg-transparent"
            onClick={() => scrollToSection("portfolio")}
          >
            Кейсы
          </Button>
          <Button
            className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700"
            onClick={() => scrollToSection("contact")}
          >
            Связаться
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-teal-400">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md shadow-lg py-4 animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            <div className="text-center text-sm mb-2 text-teal-300">
              «Digital-решения в медицине»
            </div>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-slate-300 hover:text-teal-400 hover:bg-slate-800/50"
              onClick={() => scrollToSection("about")}
            >
              О нас
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-slate-300 hover:text-teal-400 hover:bg-slate-800/50"
              onClick={() => scrollToSection("services")}
            >
              Услуги
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-slate-300 hover:text-teal-400 hover:bg-slate-800/50"
              onClick={() => scrollToSection("portfolio")}
            >
              Кейсы
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-slate-300 hover:text-teal-400 hover:bg-slate-800/50"
              onClick={() => scrollToSection("team")}
            >
              Команда
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-slate-300 hover:text-teal-400 hover:bg-slate-800/50"
              onClick={() => scrollToSection("blog")}
            >
              Блог
            </Button>
            <Button
              className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 mt-2"
              onClick={() => scrollToSection("contact")}
            >
              Связаться
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
