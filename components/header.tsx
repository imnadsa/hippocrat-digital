"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { List, X, CaretDown, Phone, EnvelopeSimple, MapPin } from "phosphor-react"
import Logo from "@/components/logo"
import Link from "next/link"
import ContactModal from "@/components/contact-modal"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    setScrolled(window.scrollY > 20)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const openModal = () => {
    setIsModalOpen(true)
    setIsMenuOpen(false)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsServicesDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false)
    }, 300)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const servicesItems = [
    { name: "Таргетированная реклама", href: "/services/targeting" },
    { name: "SMM", href: "/services/smm" },
    { name: "Создание сайтов", href: "/services/websites" },
    { name: "ИИ-решения", href: "/services/ai-solutions" },
    { name: "Контекстная реклама", href: "/services/contextual" },
  ]

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}>
        {/* ВЕРХНИЙ ЭТАЖ - Логотип и Связаться */}
        <div className="hidden md:block border-b border-slate-800/30">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            {/* Левая часть - Логотип */}
            <Link href="/">
              <Logo size="lg" />
            </Link>

            {/* Правая часть - Кнопка Связаться */}
            <Button
              className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 transition-all duration-200 hover:scale-105 active:scale-95"
              onClick={openModal}
            >
              Связаться
            </Button>
          </div>
        </div>

        {/* НИЖНИЙ ЭТАЖ - От медиков для медиков + Навигация */}
        <div className={`hidden md:block transition-all duration-300 ${scrolled ? "py-3" : "py-4"}`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between gap-8">
              {/* Левая часть - "От медиков для медиков" */}
              <div className="text-teal-300 font-medium text-sm whitespace-nowrap">
                «От медиков для медиков»
              </div>

              {/* Центр - Основная навигация */}
              <div className="flex gap-6 items-center flex-1 justify-center">
                <Link href="/cases">
                  <Button 
                    variant="ghost" 
                    className="text-slate-300 hover:text-teal-400 hover:bg-transparent transition-colors duration-200"
                  >
                    Кейсы
                  </Button>
                </Link>
                
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
                    <CaretDown 
                      size={16} 
                      weight="bold"
                      className={`transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} 
                    />
                  </Button>
                  
                  <div className={`absolute top-full left-0 w-full h-2 ${isServicesDropdownOpen ? 'block' : 'hidden'}`}></div>
                  
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
                        {servicesItems.map((item) => (
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
                
                <Link href="/blog">
                  <Button 
                    variant="ghost" 
                    className="text-slate-300 hover:text-teal-400 hover:bg-transparent transition-colors duration-200"
                  >
                    Блог
                  </Button>
                </Link>
                
                <Link href="/about">
                  <Button 
                    variant="ghost" 
                    className="text-slate-300 hover:text-teal-400 hover:bg-transparent transition-colors duration-200"
                  >
                    О нас
                  </Button>
                </Link>

                <Link href="/requisites">
                  <Button 
                    variant="ghost" 
                    className="text-slate-300 hover:text-teal-400 hover:bg-transparent transition-colors duration-200"
                  >
                    Реквизиты
                  </Button>
                </Link>
              </div>

              {/* Правая часть - Контакты */}
              <div className="flex items-center gap-4 whitespace-nowrap">
                <a href="tel:+79771004419" className="flex items-center gap-2 text-slate-300 hover:text-teal-400 transition-colors text-sm">
                  <Phone size={16} weight="duotone" />
                  +7 (977) 100-44-19
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <div className="container mx-auto px-4 py-6 flex items-center justify-between">
            <Link href="/">
              <Logo size="lg" />
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-teal-400 hover:bg-slate-800/50 transition-all duration-200"
            >
              <div className="relative w-6 h-6">
                <List 
                  size={24} 
                  weight="bold"
                  className={`absolute inset-0 transition-all duration-200 ${
                    isMenuOpen ? 'opacity-0 rotate-45 scale-75' : 'opacity-100 rotate-0 scale-100'
                  }`} 
                />
                <X 
                  size={24} 
                  weight="bold"
                  className={`absolute inset-0 transition-all duration-200 ${
                    isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-75'
                  }`} 
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="container mx-auto px-4 py-4">
            <div className="text-center text-sm mb-4 text-teal-300 animate-fadeIn">
              «От медиков для медиков»
            </div>
            
            <div className="flex flex-col gap-2">
              <Link href="/cases">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-slate-300 hover:text-teal-400 hover:bg-slate-800/50 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Кейсы
                </Button>
              </Link>
              
              <div>
                <Button 
                  variant="ghost" 
                  className="w-full justify-between text-slate-300 hover:text-teal-400 hover:bg-slate-800/50 transition-all duration-200"
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                >
                  Услуги
                  <CaretDown 
                    size={16} 
                    weight="bold"
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
                    {servicesItems.map((item) => (
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

              <Link href="/blog">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-slate-300 hover:text-teal-400 hover:bg-slate-800/50 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Блог
                </Button>
              </Link>

              <Link href="/about">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-slate-300 hover:text-teal-400 hover:bg-slate-800/50 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  О нас
                </Button>
              </Link>

              <Link href="/requisites">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-slate-300 hover:text-teal-400 hover:bg-slate-800/50 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Реквизиты
                </Button>
              </Link>
              
              <Button
                className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 mt-4 transition-all duration-200 hover:scale-105 active:scale-95"
                onClick={openModal}
              >
                Связаться
              </Button>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
          }
        `}</style>
      </header>

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
