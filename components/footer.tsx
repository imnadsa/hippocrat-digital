"use client"

import { Button } from "@/components/ui/button"
import Logo from "@/components/logo"
import Link from "next/link"

export default function Footer() {
  // Функция для открытия внешних ссылок
  const openExternalLink = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-1/4 w-24 h-24 bg-teal-500/5 rounded-full blur-2xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl animate-pulse-slow delay-400"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 mb-6 md:mb-0 animate-fadeInLeft hover-lift transition-all duration-300">
            <Logo size="sm" />
          </div>

          <div className="flex flex-wrap justify-center md:flex-row gap-8 md:gap-16 mb-6 md:mb-0">
            <div className="w-full sm:w-auto animate-fadeInUp delay-100">
              <h3 className="font-semibold mb-3 text-center sm:text-left text-white font-fixedsys text-shadow">Контакты</h3>
              <p className="text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors duration-300 cursor-pointer hover-lift">
                info@hippocrat.digital
              </p>
              <p className="text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors duration-300 cursor-pointer hover-lift">
                +7 (977) 100-44-19
              </p>
            </div>

            <div className="w-full sm:w-auto animate-fadeInUp delay-200">
              <h3 className="font-semibold mb-3 text-center sm:text-left text-white font-fixedsys text-shadow">Навигация</h3>
              <Link 
                href="/about"
                className="block text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors duration-300 cursor-pointer hover-lift mb-1"
              >
                О нас
              </Link>
              <Link 
                href="/services"
                className="block text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors duration-300 cursor-pointer hover-lift mb-1"
              >
                Услуги
              </Link>
              <Link 
                href="/cases"
                className="block text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors duration-300 cursor-pointer hover-lift mb-1"
              >
                Кейсы
              </Link>
              <Link 
                href="/blog"
                className="block text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors duration-300 cursor-pointer hover-lift"
              >
                Блог
              </Link>
            </div>

            <div className="w-full sm:w-auto animate-fadeInUp delay-300">
              <h3 className="font-semibold mb-3 text-center sm:text-left text-white font-fixedsys text-shadow">
                ИП Антошкин А.Г.
              </h3>
              <p className="text-slate-400 text-sm text-center sm:text-left mb-1">
                ИНН 772799039046
              </p>
              <p className="text-slate-400 text-sm text-center sm:text-left mb-3">
                ОГРНИП 325774600768729
              </p>
              <Link 
                href="/requisites"
                className="inline-flex items-center gap-2 text-teal-400 text-sm font-medium hover:text-teal-300 transition-colors duration-300 group"
              >
                <span>Реквизиты</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex gap-4 animate-fadeInRight delay-400">
            {/* Telegram кнопка */}
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-slate-700 text-slate-400 hover:text-teal-400 hover:border-teal-500 hover:bg-teal-950/20 hover-lift hover:scale-110 transition-all duration-300 animate-scaleUp delay-500"
              onClick={() => openExternalLink("https://t.me/imnadsa")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.16-.04-.23-.02-.1.02-1.62 1.03-4.58 3.03-.43.3-.82.44-1.17.43-.39-.01-1.13-.22-1.67-.4-.68-.23-1.22-.35-1.17-.74.02-.2.3-.4.81-.6 3.15-1.37 5.26-2.27 6.33-2.71 3.02-1.24 3.65-1.46 4.06-1.46.09 0 .29.02.42.12.11.07.18.21.21.33.03.14.05.27.03.43z"
                />
              </svg>
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm animate-fadeInUp delay-700">
          © {new Date().getFullYear()} Hippocrat Digital. Все права защищены.
        </div>
      </div>
    </footer>
  )
}
