"use client"

import { MousePointer, Globe, MessageSquare, Search, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesSection() {
  // Функция для открытия внешних ссылок
  const openExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  // Это можно заменить на реальные ссылки на сервисы с описанием услуг
  const serviceUrls = {
    targeting: "https://example.com/targeting",
    websites: "https://example.com/websites",
    smm: "https://example.com/smm",
    contextual: "https://example.com/context",
    ai: "https://example.com/ai-solutions"
  }

  return (
    <section id="services" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Услуги
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent animate-gradient font-fixedsys">
            Комплексные решения для роста вашей клиники
          </h2>
          <p className="text-slate-400 text-center max-w-2xl">
            Мы предлагаем полный спектр услуг по цифровому маркетингу, адаптированных специально для медицинских учреждений
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Услуга 1: Таргетированная реклама */}
          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-900/10 transition-all flex flex-col">
            <div className="w-14 h-14 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 mb-5">
              <MousePointer size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-fixedsys">Таргетированная реклама</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow">
              Точное попадание в вашу целевую аудиторию в социальных сетях. Привлекаем пациентов,
              которым действительно нужны ваши услуги.
            </p>
            <Button
              variant="outline"
              className="w-full border-teal-700 text-teal-400 hover:bg-teal-950/50 mt-auto"
              onClick={() => openExternalLink(serviceUrls.targeting)}
            >
              Подробнее
            </Button>
          </div>

          {/* Услуга 2: Создание сайтов */}
          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-900/10 transition-all flex flex-col">
            <div className="w-14 h-14 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 mb-5">
              <Globe size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-fixedsys">Создание сайтов</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow">
              Медицинские сайты, которые конвертируют посетителей в пациентов. 
              Современный дизайн, оптимизация для поисковых систем, адаптация для мобильных устройств.
            </p>
            <Button
              variant="outline"
              className="w-full border-indigo-700 text-indigo-400 hover:bg-indigo-950/50 mt-auto"
              onClick={() => openExternalLink(serviceUrls.websites)}
            >
              Подробнее
            </Button>
          </div>

          {/* Услуга 3: SMM */}
          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-900/10 transition-all flex flex-col">
            <div className="w-14 h-14 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 mb-5">
              <MessageSquare size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-fixedsys">SMM</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow">
              Стратегическое управление репутацией и продвижение в социальных медиа.
              Создаем и поддерживаем сообщество вокруг вашей клиники.
            </p>
            <Button
              variant="outline"
              className="w-full border-teal-700 text-teal-400 hover:bg-teal-950/50 mt-auto"
              onClick={() => openExternalLink(serviceUrls.smm)}
            >
              Подробнее
            </Button>
          </div>

          {/* Услуга 4: Контекстная реклама */}
          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-900/10 transition-all flex flex-col sm:col-span-1 lg:col-span-1.5">
            <div className="w-14 h-14 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 mb-5">
              <Search size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-fixedsys">Контекстная реклама</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow">
              Показ рекламы тем, кто уже ищет ваши услуги. 
              Быстрый способ привлечь целевых пациентов через поисковые системы, когда им нужна медицинская помощь.
            </p>
            <Button
              variant="outline"
              className="w-full border-indigo-700 text-indigo-400 hover:bg-indigo-950/50 mt-auto"
              onClick={() => openExternalLink(serviceUrls.contextual)}
            >
              Подробнее
            </Button>
          </div>

          {/* Услуга 5: ИИ-Решения */}
          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-900/10 transition-all flex flex-col sm:col-span-1 lg:col-span-1.5">
            <div className="w-14 h-14 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 mb-5">
              <Cpu size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-fixedsys">ИИ-Решения</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow">
              Инновационные технологии для оптимизации работы клиники. 
              Чат-боты для записи и консультаций, персонализированные коммуникации с пациентами и аналитика.
            </p>
            <Button
              variant="outline"
              className="w-full border-teal-700 text-teal-400 hover:bg-teal-950/50 mt-auto"
              onClick={() => openExternalLink(serviceUrls.ai)}
            >
              Подробнее
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
