"use client"

import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowUpRight, BookOpen, TrendingUp, Shield } from "lucide-react"

export default function BlogSection() {
  // Функция для открытия внутренних ссылок
  const openInternalLink = (url: string) => {
    window.location.href = url
  }

  // Ссылки на статьи блога на вашем сайте
  const articleUrls = {
    article1: "/blog/gamification-guide", // Статья о геймификации
    article2: "/blog/digital-marketing-2024", // Статья о трендах 2025
    article3: "/blog/ai-inmed" // Статья об ИИ-ассистентах
  }

  return (
    <section id="blog" className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
      {/* Декоративные элементы с анимацией */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground delay-700"></div>
      <div className="absolute top-2/3 left-1/3 w-32 h-32 bg-teal-400/5 rounded-full blur-xl animate-pulse-slow delay-500"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12 animate-fadeInUp">
          <div className="px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6 hover:border-teal-500/50 transition-all duration-300">
            Блог
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent animate-gradient font-fixedsys text-shadow-lg">
            Экспертиза в медицинском маркетинге
          </h2>
          <p className="text-slate-400 text-center max-w-2xl text-shadow">
            Делимся знаниями, трендами и практическими советами по цифровому продвижению медицинских услуг
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Статья 1 - Геймификация */}
          <div className="bg-slate-800/20 border border-slate-700/30 rounded-xl overflow-hidden hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-900/25 transition-all duration-500 flex flex-col group hover-lift blur-backdrop animate-slideInStagger delay-100">
            <div className="h-56 bg-gradient-to-br from-teal-900/80 to-slate-900 relative overflow-hidden">
              {/* Изображение статьи */}
              <div className="absolute inset-0 bg-[url('/blog/images/gamification-guide.jpg')] bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 animate-fadeInUp delay-200">
                <div className="flex gap-3 text-xs text-slate-400 mb-3">
                  <div className="flex items-center animate-fadeInLeft delay-300">
                    <Calendar size={12} className="mr-1 animate-iconBounce delay-400" />
                    <span>25 мая 2025</span>
                  </div>
                  <div className="flex items-center animate-fadeInLeft delay-400">
                    <User size={12} className="mr-1 animate-iconBounce delay-500" />
                    <span>Александр Кухто</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white font-fixedsys text-shadow animate-fadeInUp delay-500 group-hover:text-teal-300 transition-colors duration-300">
                  Геймификация в здравоохранении: от чат-ботов до персонализации
                </h3>
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <p className="text-slate-400 text-sm mb-4 flex-grow animate-fadeInUp delay-600 leading-relaxed">
                Как мотивировать пациентов следить за здоровьем и приходить в вашу клинику еще раз
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-slate-500 bg-slate-800/50 px-2 py-1 rounded-full">5 мин чтения</span>
                <span className="text-xs text-teal-400 font-medium">ИИ и Автоматизация</span>
              </div>
              <Button
                variant="ghost"
                className="justify-between group hover:bg-slate-800/50 flex w-full hover-lift transition-all duration-300 animate-fadeInUp delay-700"
                onClick={() => openInternalLink(articleUrls.article1)}
              >
                <span className="text-teal-400 font-medium">Читать полностью</span>
                <ArrowUpRight size={16} className="text-teal-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          {/* Статья 2 - Тренды 2025 */}
          <div className="bg-slate-800/20 border border-slate-700/30 rounded-xl overflow-hidden hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-900/25 transition-all duration-500 flex flex-col group hover-lift blur-backdrop animate-slideInStagger delay-200">
            <div className="h-56 bg-gradient-to-br from-indigo-900/80 to-slate-900 relative overflow-hidden">
              {/* Изображение статьи */}
              <div className="absolute inset-0 bg-[url('/blog/images/digital-marketing-2024.jpg')] bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 animate-fadeInUp delay-300">
                <div className="flex gap-3 text-xs text-slate-400 mb-3">
                  <div className="flex items-center animate-fadeInLeft delay-400">
                    <Calendar size={12} className="mr-1 animate-iconBounce delay-500" />
                    <span>15 мая 2025</span>
                  </div>
                  <div className="flex items-center animate-fadeInLeft delay-500">
                    <User size={12} className="mr-1 animate-iconBounce delay-600" />
                    <span>Александр Антошкин</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white font-fixedsys text-shadow animate-fadeInUp delay-600 group-hover:text-indigo-300 transition-colors duration-300">
                  Цифровой маркетинг в медицине: тренды 2025 года
                </h3>
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <p className="text-slate-400 text-sm mb-4 flex-grow animate-fadeInUp delay-700 leading-relaxed">
                Разбираем основные тенденции цифрового маркетинга в healthcare 
                сфере и прогнозы на будущий год 
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-slate-500 bg-slate-800/50 px-2 py-1 rounded-full">7 мин чтения</span>
                <span className="text-xs text-indigo-400 font-medium">Тренды и Стратегии</span>
              </div>
              <Button
                variant="ghost"
                className="justify-between group hover:bg-slate-800/50 flex w-full hover-lift transition-all duration-300 animate-fadeInUp delay-800"
                onClick={() => openInternalLink(articleUrls.article2)}
              >
                <span className="text-indigo-400 font-medium">Читать полностью</span>
                <ArrowUpRight size={16} className="text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          {/* Статья 3 - ИИ-ассистенты */}
          <div className="bg-slate-800/20 border border-slate-700/30 rounded-xl overflow-hidden hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-900/25 transition-all duration-500 flex flex-col group hover-lift blur-backdrop animate-slideInStagger delay-300">
            <div className="h-56 bg-gradient-to-br from-teal-900/80 to-slate-900 relative overflow-hidden">
              {/* Изображение статьи */}
              <div className="absolute inset-0 bg-[url('/blog/images/ai-inmed.jpg')] bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 animate-fadeInUp delay-400">
                <div className="flex gap-3 text-xs text-slate-400 mb-3">
                  <div className="flex items-center animate-fadeInLeft delay-500">
                    <Calendar size={12} className="mr-1 animate-iconBounce delay-600" />
                    <span>26 мая 2025</span>
                  </div>
                  <div className="flex items-center animate-fadeInLeft delay-600">
                    <User size={12} className="mr-1 animate-iconBounce delay-700" />
                    <span>Александр Пермяков</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white font-fixedsys text-shadow animate-fadeInUp delay-700 group-hover:text-teal-300 transition-colors duration-300">
                  Чат-боты и ИИ-ассистенты: автоматизация коммуникации с пациентами
                </h3>
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <p className="text-slate-400 text-sm mb-4 flex-grow animate-fadeInUp delay-800 leading-relaxed">
                Анализируем, как чат-боты на базе ИИ помогают клиникам отвечать на вопросы пациентов, записывать на приём и 
                напоминать о приёме лекарств. Делимся примерами успешных чат-ботов и советами по их разработке для медицинских учреждений. 
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-slate-500 bg-slate-800/50 px-2 py-1 rounded-full">10 мин чтения</span>
                <span className="text-xs text-teal-400 font-medium">ИИ автоматизация</span>
              </div>
              <Button
                variant="ghost"
                className="justify-between group hover:bg-slate-800/50 flex w-full hover-lift transition-all duration-300 animate-fadeInUp delay-900"
                onClick={() => openInternalLink(articleUrls.article3)}
              >
                <span className="text-teal-400 font-medium">Читать полностью</span>
                <ArrowUpRight size={16} className="text-teal-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>

        {/* CTA для блога */}
        <div className="text-center mt-12 animate-fadeInUp delay-1000">
          <Button
            variant="outline"
            className="border-teal-700 text-teal-400 hover:bg-teal-950/50 hover:border-teal-500 px-8 py-3 hover-lift transition-all duration-300"
            onClick={() => openInternalLink("/blog")}
          >
            Все статьи блога
          </Button>
        </div>
      </div>
    </section>
  )
}
