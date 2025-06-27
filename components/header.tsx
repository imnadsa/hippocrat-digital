"use client"

import { useState, useEffect, useRef } from "react"
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
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

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

  // Improved dropdown handlers with delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsServicesDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false)
    }, 300) // 300ms delay before closing
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

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
          <Link href="/about">
            <Button 
              variant="ghost" 
              className="text-slate-300 hover:text-teal-400 hover:bg-transparent transition-colors duration-200"
            >
              О нас
            </Button>
          </Link>
          
          {/* Кнопка Блог */}
          <Link href="/blog">
            <Button 
              variant="ghost" 
              className="text-slate-300 hover:text-teal-400 hover:bg-transparent transition-colors duration-200"
            >
              Блог
            </Button>
          </Link>
          
          {/* Services Dropdown with improved UX */}
          <div 
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Button 
              variant="ghost" 
              className="text-slate-300 hover:text-teal-400 hover:bg-transparent flex items-center gap-1 transition-colors duration-200"
            >
              Услуги
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} 
              />
            </Button>
            
            {/* Invisible bridge area to prevent dropdown from closing */}
            <div className={`absolute top-full left-0 w-full h-2 ${isServicesDropdownOpen ? 'block' : 'hidden'}`}></div>
            
            {/* Dropdown Menu with improved animations */}
            <div className={`absolute top-full left-0 mt-2 w-64 transition-all duration-200 ease-out ${
              isServicesDropdownOpen 
                ? 'opacity-100 translate-y-0 pointer-events-auto' 
                : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}>
              <div className="bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-xl shadow-xl overflow-hidden">
                <div className="py-2">
                  <Link 
                    href="/services" 
                    className="block px-4 py-3 text-sm text-slate-300 hover:text-teal-400 hover:bg-slate-800/50 transition-all duration-150 border-b border-slate-800/50"
                  >
                    <div className="font-medium">Все услуги</div>
                    <div className="text-xs text-slate-500 mt-1">Полный обзор направлений</div>
                  </Link>
                  {servicesItems.map((item, index) => (
                    <Link 
                      key={item.href} 
                      href={item.href} 
                      className="block px-4 py-3 text-sm text-slate-300 hover:text-teal-400 hover:bg-slate-800/50 transition-all duration-150 group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="group-hover:translate-x-1 transition-transform duration-150">
                          {item.name}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            className="text-slate-300 hover:text-teal-400 hover:bg-transparent transition-colors duration-200"
            onClick={() => scrollToSection("portfolio")}
          >
            Кейсы
          </Button>
          <Button
            className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={() => scrollToSection("contact")}
          >
            Связаться
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-teal-400 hover:bg-slate-800/50 transition-all duration-200"
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute inset-0 transition-all duration-200 ${
                  isMenuOpen ? 'opacity-0 rotate-45 scale-75' : 'opacity-100 rotate-0 scale-100'
                }`} 
              />
              <X 
                size={24} 
                className={`absolute inset-0 transition-all duration-200 ${
                  isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-75'
                }`} 
              />
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Menu with improved animations */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-out ${
        isMenuOpen 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="text-center text-sm mb-4 text-teal-300 animate-fadeIn">
            «Digital решения в медицине»
          </div>
          
          <div className="flex flex-col gap-2">
            {[
              { label: "О нас", href: "/about" },
              { label: "Блог", href: "/blog" }
            ].map((item, index) => (
              <Link key={item.href} href={item.href}>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start text-slate-300 hover:text-teal-400 hover:bg-slate-800/50 transition-all duration-200 animate-slideInStagger`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            
            {/* Mobile Services Dropdown with improved UX */}
            <div className="animate-slideInStagger" style={{ animationDelay: '100ms' }}>
              <Button 
                variant="ghost" 
                className="w-full justify-between text-slate-300 hover:text-teal-400 hover:bg-slate-800/50 transition-all duration-200"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              >
                Услуги
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} 
                />
              </Button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-out ${
                isServicesDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="ml-4 mt-2 space-y-1">
                  <Link href="/services" className="block">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-sm text-slate-400 hover:text-teal-400 hover:bg-slate-800/50 transition-all duration-150"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Все услуги
                    </Button>
                  </Link>
                  {servicesItems.map((item, index) => (
                    <Link key={item.href} href={item.href} className="block">
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start text-sm text-slate-400 hover:text-teal-400 hover:bg-slate-800/50 transition-all duration-150"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {[
              { label: "Кейсы", action: () => scrollToSection("portfolio") },
              { label: "Команда", action: () => scrollToSection("team") }
            ].map((item, index) => (
              <Button 
                key={item.label}
                variant="ghost" 
                className={`w-full justify-start text-slate-300 hover:text-teal-400 hover:bg-slate-800/50 transition-all duration-200 animate-slideInStagger`}
                style={{ animationDelay: `${(index + 3) * 50}ms` }}
                onClick={item.action}
              >
                {item.label}
              </Button>
            ))}
            
            <Button
              className={`w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 mt-4 transition-all duration-200 hover:scale-105 active:scale-95 animate-slideInStagger`}
              style={{ animationDelay: '250ms' }}
              onClick={() => scrollToSection("contact")}
            >
              Связаться
            </Button>
          </div>
        </div>
      </div>

      {/* Custom CSS for smooth animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInStagger {
          from { 
            opacity: 0; 
            transform: translateX(-20px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .animate-slideInStagger {
          animation: slideInStagger 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </header>
  )
}
