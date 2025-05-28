"use client"

import { MousePointer, Globe, MessageSquare, Search, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesSection() {
  // Ссылки на страницы услуг
  const serviceUrls = {
    targeting: "/services/targeting",
    websites: "/services/websites",
    smm: "/services/smm",
    contextual: "/services/contextual",
    ai: "/services/ai-solutions"
  }

  return (
    <section id="services" className="py-16 md:py-20 relative overflow-hidden">
      {/* Добавляем декоративные элементы */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-teal-500/8 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-10 left-20 w-40 h-40 bg-indigo-500/8 rounded-full blur-3xl animate-floatBackground delay-600"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12 animate-fadeInUp">
          <div className="px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6 hover:border-teal-500/50 transition-all duration-300">
            Услуги
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent animate-gradient font-fixedsys text-shadow-lg">
            Комплексные решения для роста вашей клиники
          </h2>
          <p className="text-slate-400 text-center max-w-2xl text-shadow">
            Мы предлагаем полный спектр услуг по цифровому маркетингу, адаптированных специально для медицинских учреждений
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Услуга 1: Таргетированная реклама */}
          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-900/20 transition-all duration-300 flex flex-col hover-lift blur-backdrop animate-slideInStagger delay-100">
            <div className="w-14 h-14 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 mb-5 animate-iconBounce delay-200">
              <MousePointer size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-fixedsys text-shadow">Таргетированная реклама</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow">
              Точное попадание в вашу целевую аудиторию в социальных сетях. Привлекаем пациентов,
              которым действительно нужны ваши услуги.
            </p>
            <Link href={serviceUrls.targeting}>
              <Button
                variant="outline"
                className="w-full border-teal-700 text-teal-400 hover:bg-teal-950/50 hover:border-teal-500 mt-auto hover-lift transition-all duration-300"
              >
                Подробнее
              </Button>
            </Link>
          </div>

          {/* Услуга 2: Создание сайтов */}
          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-900/20 transition-all duration-300 flex flex-col hover-lift blur-backdrop animate-slideInStagger delay-200">
            <div className="w-14 h-14 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 mb-5 animate-iconBounce delay-300">
              <Globe size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-fixedsys text-shadow">Создание сайтов</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow">
              Медицинские сайты, которые конвертируют посетителей в пациентов. 
              Современный дизайн, оптимизация для поисковых систем, адаптация для мобильных устройств.
            </p>
            <Link href={serviceUrls.websites}>
              <Button
                variant="outline"
                className="w-full border-indigo-700 text-indigo-400 hover:bg-indigo-950/50 hover:border-indigo-500 mt-auto hover-lift transition-all duration-300"
              >
                Подробнее
              </Button>
            </Link>
          </div>

          {/* Услуга 3: SMM */}
          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-900/20 transition-all duration-300 flex flex-col hover-lift blur-backdrop animate-slideInStagger delay-300">
            <div className="w-14 h-14 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 mb-5 animate-iconBounce delay-400">
              <MessageSquare size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-fixedsys text-shadow">SMM</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow">
              Стратегическое управление репутацией и продвижение в социальных медиа.
              Создаем и поддерживаем сообщество вокруг вашей клиники.
            </p>
            <Link href={serviceUrls.smm}>
              <Button
                variant="outline"
                className="w-full border-teal-700 text-teal-400 hover:bg-teal-950/50 hover:border-teal-500 mt-auto hover-lift transition-all duration-300"
              >
                Подробнее
              </Button>
            </Link>
          </div>

          {/* Услуга 4: Контекстная реклама */}
          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-900/20 transition-all duration-300 flex flex-col hover-lift blur-backdrop animate-slideInStagger delay-400 sm:col-span-1 lg:col-span-1.5">
            <div className="w-14 h-14 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 mb-5 animate-iconBounce delay-500">
              <Search size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-fixedsys text-shadow">Контекстная реклама</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow">
              Показ рекламы тем, кто уже ищет ваши услуги. 
              Быстрый способ привлечь целевых пациентов через поисковые системы, когда им нужна медицинская помощь.
            </p>
            <Link href={serviceUrls.contextual}>
              <Button
                variant="outline"
                className="w-full border-indigo-700 text-indigo-400 hover:bg-indigo-950/50 hover:border-indigo-500 mt-auto hover-lift transition-all duration-300"
              >
                Подробнее
              </Button>
            </Link>
          </div>

          {/* Услуга 5: ИИ-Решения */}
          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-900/20 transition-all duration-300 flex flex-col hover-lift blur-backdrop animate-slideInStagger delay-500 sm:col-span-1 lg:col-span-1.5">
            <div className="w-14 h-14 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 mb-5 animate-iconBounce delay-600">
              <Cpu size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-fixedsys text-shadow">ИИ-Решения</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow">
              Инновационные технологии для оптимизации работы клиники. 
              Чат-боты для записи и консультаций, персонализированные коммуникации с пациентами и аналитика.
            </p>
            <Link href={serviceUrls.ai}>
              <Button
                variant="outline"
                className="w-full border-teal-700 text-teal-400 hover:bg-teal-950/50 hover:border-teal-500 mt-auto hover-lift transition-all duration-300"
              >
                Подробнее
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
