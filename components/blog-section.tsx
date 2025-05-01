"use client"

import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowUpRight } from "lucide-react"

export default function BlogSection() {
  // Функция для открытия внешних ссылок
  const openExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  // Это можно заменить на реальные ссылки на статьи
  const articleUrls = {
    article1: "https://example.com/article-ai",
    article2: "https://example.com/article-trends",
    article3: "https://example.com/article-ethical-marketing"
  }

  return (
    <section id="blog" className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Блог
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent animate-gradient font-fixedsys">
            Полезные материалы о медицинском маркетинге
          </h2>
          <p className="text-slate-400 text-center max-w-2xl">
            Делимся экспертизой, трендами и советами по продвижению медицинских услуг
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Статья 1 */}
          <div className="bg-slate-800/20 border border-slate-700/30 rounded-xl overflow-hidden hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-900/10 transition-all flex flex-col">
            <div className="h-48 bg-gradient-to-br from-teal-900/80 to-slate-900 relative">
              <div className="absolute inset-0 opacity-20 bg-[url('/images/blog/ai-healthcare.jpg')] bg-cover bg-center"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 to-transparent">
                <div className="flex gap-3 text-xs text-slate-400 mb-2">
                  <div className="flex items-center">
                    <Calendar size={12} className="mr-1" />
                    <span>01.05.2025</span>
                  </div>
                  <div className="flex items-center">
                    <User size={12} className="mr-1" />
                    <span>Александр Кухто</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white font-fixedsys">
                  Как использовать ИИ для привлечения пациентов в 2025 году
                </h3>
              </div>
            </div>
            
            <div className="p-4 flex-grow flex flex-col">
              <p className="text-slate-400 text-sm mb-4 flex-grow">
                Обзор современных инструментов искусственного интеллекта для медицинского маркетинга: 
                от чат-ботов для записи на приём до персонализированных рекламных кампаний.
              </p>
              <Button
                variant="ghost"
                className="justify-between group hover:bg-slate-800/50 flex w-full"
                onClick={() => openExternalLink(articleUrls.article1)}
              >
                <span className="text-teal-400">Читать статью</span>
                <ArrowUpRight size={16} className="text-teal-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Статья 2 */}
          <div className="bg-slate-800/20 border border-slate-700/30 rounded-xl overflow-hidden hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-900/10 transition-all flex flex-col">
            <div className="h-48 bg-gradient-to-br from-indigo-900/80 to-slate-900 relative">
              <div className="absolute inset-0 opacity-20 bg-[url('/images/blog/trends.jpg')] bg-cover bg-center"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 to-transparent">
                <div className="flex gap-3 text-xs text-slate-400 mb-2">
                  <div className="flex items-center">
                    <Calendar size={12} className="mr-1" />
                    <span>28.04.2025</span>
                  </div>
                  <div className="flex items-center">
                    <User size={12} className="mr-1" />
                    <span>Александр Антошкин</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white font-fixedsys">
                  5 трендов в продвижении медицинских услуг
                </h3>
              </div>
            </div>
            
            <div className="p-4 flex-grow flex flex-col">
              <p className="text-slate-400 text-sm mb-4 flex-grow">
                Анализ ключевых тенденций в digital-маркетинге для клиник: 
                видеоконтент, отзывы пациентов, мобильные приложения, телемедицина и персонализация.
              </p>
              <Button
                variant="ghost"
                className="justify-between group hover:bg-slate-800/50 flex w-full"
                onClick={() => openExternalLink(articleUrls.article2)}
              >
                <span className="text-indigo-400">Читать статью</span>
                <ArrowUpRight size={16} className="text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Статья 3 */}
          <div className="bg-slate-800/20 border border-slate-700/30 rounded-xl overflow-hidden hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-900/10 transition-all flex flex-col">
            <div className="h-48 bg-gradient-to-br from-teal-900/80 to-slate-900 relative">
              <div className="absolute inset-0 opacity-20 bg-[url('/images/blog/ethical.jpg')] bg-cover bg-center"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 to-transparent">
                <div className="flex gap-3 text-xs text-slate-400 mb-2">
                  <div className="flex items-center">
                    <Calendar size={12} className="mr-1" />
                    <span>20.04.2025</span>
                  </div>
                  <div className="flex items-center">
                    <User size={12} className="mr-1" />
                    <span>Александр Антошкин</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white font-fixedsys">
                  Этичный маркетинг в медицине: как рекламировать, не нарушая законов
                </h3>
              </div>
            </div>
            
            <div className="p-4 flex-grow flex flex-col">
              <p className="text-slate-400 text-sm mb-4 flex-grow">
                Руководство по соблюдению законодательства при рекламе медицинских услуг: 
                как эффективно продвигать клинику и не получить штраф от регуляторов.
              </p>
              <Button
                variant="ghost"
                className="justify-between group hover:bg-slate-800/50 flex w-full"
                onClick={() => openExternalLink(articleUrls.article3)}
              >
                <span className="text-teal-400">Читать статью</span>
                <ArrowUpRight size={16} className="text-teal-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
