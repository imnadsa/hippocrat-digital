"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Logo from "@/components/logo"
import Link from "next/link"

interface HeaderProps {
  scrolled: boolean
}

export default function Header({ scrolled }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)

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

  // Services menu items
  const servicesItems = [
    { name: "Таргетированная реклама", href: "/services/targeting" },
    { name: "SMM", href: "/services/smm" },
    { name: "Создание сайтов", href: "/services/websites" },
    { name: "ИИ-решения", href: "/services/ai-solutions" },
    { name: "Контекстная реклама", href: "/services/contextual" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/90 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Logo size="lg" />
        </Link>

        {/* Tagline - hidden on mobile */}
        <div className="hidden md:block text-center text-sm md:text-base truncate max-w-[200px] lg:max-w-none text-teal-300">
          «Digital решения в медицине»
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 items-center">
          <Button 
            variant="ghost" 
            className="text-slate-300 hover:text-teal-400 hover:bg-transparent"
            onClick={() => scrollToSection("about")}
          >
            О нас
          </Button>
          
          {/* Кнопка Блог */}
          <Link href="/blog">
            <Button 
              variant="ghost" 
              className="text-slate-300 hover:text-teal-400 hover:bg-transparent"
            >
              Блог
            </Button>
          </Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <Button 
              variant="ghost" 
              className="text-slate-300 hover:text-teal-400 hover:bg-transparent flex items-center gap-1"
            >
              Услуги
              <ChevronDown size={16} className={`transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
            </Button>
            
            {/* Dropdown Menu */}
            {isServicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-xl shadow-lg overflow-hidden animate-in slide-in-from-top duration-200">
                <div className="py-2">
                  <Link href="/services" className="block px-4 py-2 text-sm text-slate-300 hover:text-teal-400 hover:bg-slate-800/50 transition-colors">
                    Все услуги
                  </Link>
                  <div className="border-t border-slate-800 my-2"></div>
                  {servicesItems.map((item) => (
                    <Link 
                      key={item.href} 
                      href={item.href} 
                      className="block px-4 py-2 text-sm text-slate-300 hover:text-teal-400 hover:bg-slate-800/50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          
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
              «Digital решения в медицине»
            </div>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-slate-300 hover:text-teal-400 hover:bg-slate-800/50"
              onClick={() => scrollToSection("about")}
            >
              О нас
            </Button>
            
            {/* Кнопка Блог в мобильном меню */}
            <Link href="/blog">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-slate-300 hover:text-teal-400 hover:bg-slate-800/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Блог
              </Button>
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div>
              <Button 
                variant="ghost" 
                className="w-full justify-between text-slate-300 hover:text-teal-400 hover:bg-slate-800/50"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              >
                Услуги
                <ChevronDown size={16} className={`transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </Button>
              
              {isServicesDropdownOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  <Link href="/services" className="block">
                    <Button variant="ghost" className="w-full justify-start text-sm text-slate-400 hover:text-teal-400 hover:bg-slate-800/50">
                      Все услуги
                    </Button>
                  </Link>
                  {servicesItems.map((item) => (
                    <Link key={item.href} href={item.href} className="block">
                      <Button variant="ghost" className="w-full justify-start text-sm text-slate-400 hover:text-teal-400 hover:bg-slate-800/50">
                        {item.name}
                      </Button>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
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
