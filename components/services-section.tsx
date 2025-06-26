"use client"

import { Globe, MessageSquare, Search, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Компонент кастомной SVG иконки для таргетированной рекламы
const TargetingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 72 72">
    <path fill="currentColor" d="M32.604 24.36a1.35 1.35 0 0 0-1.351 1.351v.08a1.35 1.35 0 0 0 2.702 0v-.08a1.35 1.35 0 0 0-1.351-1.35ZM27.2 24.36a1.35 1.35 0 0 0-1.35 1.351v.08a1.35 1.35 0 0 0 2.701 0v-.08a1.35 1.35 0 0 0-1.35-1.35ZM21.797 24.36a1.35 1.35 0 0 0-1.35 1.351v.08a1.35 1.35 0 0 0 2.7 0v-.08a1.35 1.35 0 0 0-1.35-1.35Z"/>
    <path fill="currentColor" d="M50.356 29.178v-8.827A1.35 1.35 0 0 0 49.005 19H16.351A1.35 1.35 0 0 0 15 20.35v31.104c0 .746.605 1.351 1.35 1.351h28.788c1.215.409 2.516.63 3.867.63 6.709 0 12.166-5.457 12.166-12.166 0-6.252-4.74-11.416-10.815-12.09Zm-32.654-7.476h29.952v7.476c-.901.1-1.773.3-2.604.586H17.702v-8.062Zm0 28.401V32.465h22.915a12.143 12.143 0 0 0-3.703 7.453h-3.522l-2.314-4.095a1.35 1.35 0 0 0-1.176-.686h-8.105a1.35 1.35 0 0 0-1.176 2.015l2.327 4.117-2.327 4.117a1.351 1.351 0 0 0 1.177 2.016h8.104a1.35 1.35 0 0 0 1.176-.687l2.314-4.095h3.522a12.143 12.143 0 0 0 3.735 7.483H17.702Zm7.585-10.184-1.175-2.08h5.002l1.175 2.08h-5.002Zm5.002 2.701-1.175 2.08h-5.002l1.175-2.08h5.002Zm18.716 8.114c-4.76 0-8.71-3.533-9.368-8.114h2.74c.629 3.084 3.361 5.412 6.628 5.412a6.77 6.77 0 0 0 6.763-6.763 6.77 6.77 0 0 0-6.763-6.763c-3.267 0-6 2.328-6.627 5.412h-2.74c.657-4.58 4.607-8.113 9.367-8.113 5.219 0 9.464 4.245 9.464 9.464s-4.245 9.465-9.464 9.465Zm0-10.816h-3.83a4.067 4.067 0 0 1 3.83-2.71 4.066 4.066 0 0 1 4.061 4.061 4.066 4.066 0 0 1-4.061 4.062 4.068 4.068 0 0 1-3.83-2.71h3.83a1.35 1.35 0 0 0 0-2.703Z"/>
  </svg>
)

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
              <TargetingIcon />
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
