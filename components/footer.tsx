"use client"

import { Button } from "@/components/ui/button"
import Logo from "@/components/logo"

export default function Footer() {
  // Функция для прокрутки к секции
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Функция для открытия внешних ссылок
  const openExternalLink = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <Logo size="sm" />
          </div>

          <div className="flex flex-wrap justify-center md:flex-row gap-8 md:gap-16 mb-6 md:mb-0">
            <div className="w-full sm:w-auto">
              <h3 className="font-semibold mb-3 text-center sm:text-left text-white font-fixedsys">Контакты</h3>
              <p className="text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors cursor-pointer">
                info@hippocrat.digital
              </p>
              <p className="text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors cursor-pointer">
                +7 (977) 100-44-19
              </p>
            </div>

            <div className="w-full sm:w-auto">
              <h3 className="font-semibold mb-3 text-center sm:text-left text-white font-fixedsys">Навигация</h3>
              <p 
                className="text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors cursor-pointer"
                onClick={() => scrollToSection("about")}
              >
                О нас
              </p>
              <p 
                className="text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors cursor-pointer"
                onClick={() => scrollToSection("services")}
              >
                Услуги
              </p>
              <p 
                className="text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors cursor-pointer"
                onClick={() => scrollToSection("portfolio")}
              >
                Кейсы
              </p>
              <p 
                className="text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors cursor-pointer"
                onClick={() => scrollToSection("blog")}
              >
                Блог
              </p>
            </div>

            <div className="w-full sm:w-auto">
              <h3 className="font-semibold mb-3 text-center sm:text-left text-white font-fixedsys">
                Правовая информация
              </h3>
              <p className="text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors cursor-pointer">
                Условия использования
              </p>
              <p className="text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors cursor-pointer">
                Политика конфиденциальности
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            {/* Telegram кнопка */}
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-slate-700 text-slate-400 hover:text-teal-400 hover:border-teal-500"
              onClick={() => openExternalLink("https://t.me/imnadsa")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.16-.04-.23-.02-.1.02-1.62 1.03-4.58 3.03-.43.3-.82.44-1.17.43-.39-.01-1.13-.22-1.67-.4-.68-.23-1.22-.35-1.17-.74.02-.2.3-.4.81-.6 3.15-1.37 5.26-2.27 6.33-2.71 3.02-1.24 3.65-1.46 4.06-1.46.09 0 .29.02.42.12.11.07.18.21.21.33.03.14.05.27.03.43z"
                />
              </svg>
            </Button>

            {/* VK кнопка */}
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-slate-700 text-slate-400 hover:text-teal-400 hover:border-teal-500"
              onClick={() => openExternalLink("https://vk.com")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  fill="currentColor"
                  d="M20.44 7.8c.14-.48 0-.84-.66-.84h-2.2c-.56 0-.81.3-.95.62 0 0-1.11 2.69-2.68 4.43-.51.51-.74.67-1.02.67-.14 0-.34-.16-.34-.64V7.8c0-.56-.16-.84-.63-.84H9.03c-.35 0-.56.26-.56.5 0 .53.79.65.87 2.14v3.23c0 .7-.13.83-.41.83-.74 0-2.54-2.7-3.6-5.8-.21-.6-.42-.84-.98-.84h-2.2c-.63 0-.75.3-.75.62 0 .58.74 3.47 3.47 7.3C6.85 17.3 9.4 18.5 11.7 18.5c1.38 0 1.55-.31 1.55-.84v-1.95c0-.62.13-.74.57-.74.32 0 .88.16 2.17 1.4 1.48 1.48 1.72 2.13 2.55 2.13h2.2c.63 0 .94-.31.76-.92-.2-.61-.9-1.5-1.83-2.55-.51-.6-1.27-1.24-1.5-1.56-.32-.42-.23-.6 0-.97 0 0 2.65-3.73 2.93-5z"
                />
              </svg>
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Hippocrat Digital. Все права защищены.
        </div>
      </div>
    </footer>
  )
}
