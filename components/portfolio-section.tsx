"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function PortfolioSection() {
  // Функция для открытия внешних ссылок (кейсов)
  const openExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  // Это можно заменить на реальные ссылки на кейсы
  const caseUrls = {
    case1: "https://example.com/case-dental",
    case2: "https://example.com/case-rebranding",
    case3: "https://example.com/case-aesthetic"
  }

  return (
    <section id="portfolio" className="py-16 md:py-20 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Портфолио
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent animate-gradient font-fixedsys">
            Наши успешные кейсы
          </h2>
          <p className="text-slate-400 text-center max-w-2xl">
            Реальные примеры того, как мы помогаем медицинским учреждениям привлекать пациентов и увеличивать прибыль
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Кейс 1 */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden flex flex-col hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-900/10 transition-all">
            <div className="h-48 bg-gradient-to-br from-teal-900/50 to-slate-900 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-10 bg-[url('/images/portfolio/dental-clinic.jpg')] bg-cover bg-center"></div>
              <div className="z-10 px-6 py-4 text-center">
                <div className="inline-block mb-3 px-3 py-1 rounded-full bg-teal-900/70 text-teal-400 text-xs">
                  Таргетированная реклама
                </div>
                <h3 className="text-xl font-bold text-white font-fixedsys">Стоматология Полный Порядок</h3>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-4">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-slate-400 text-sm">Рост первичных пациентов</span>
                  <span className="text-teal-400 font-bold font-fixedsys">+43%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full" style={{ width: "43%" }}></div>
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-6 flex-grow">
                Разработали стратегию таргетированной рекламы для привлечения пациентов, нуждающихся в 
                имплантации и эстетической стоматологии. Увеличили количество первичных обращений за 3 месяца.
              </p>
              <Button
                onClick={() => openExternalLink(caseUrls.case1)}
                className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 justify-between group"
              >
                <span>Подробнее</span>
                <ArrowUpRight size={16} className="text-teal-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Кейс 2 */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden flex flex-col hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-900/10 transition-all">
            <div className="h-48 bg-gradient-to-br from-indigo-900/50 to-slate-900 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-10 bg-[url('/images/portfolio/rebrand.jpg')] bg-cover bg-center"></div>
              <div className="z-10 px-6 py-4 text-center">
                <div className="inline-block mb-3 px-3 py-1 rounded-full bg-indigo-900/70 text-indigo-400 text-xs">
                  ИИ-решения в медицине
                </div>
                <h3 className="text-xl font-bold text-white font-fixedsys">Нейросеть для студентов-медиков</h3>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-4">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-slate-400 text-sm">Пользователей за месяц</span>
                  <span className="text-indigo-400 font-bold font-fixedsys">1000+</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full" style={{ width: "27%" }}></div>
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-6 flex-grow">
                Разработали нейросеть на базе студенческих учебников, чем кратно увеличили 
                в медицинских университетах
              </p>
              <Button
                onClick={() => openExternalLink(caseUrls.case2)}
                className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 justify-between group"
              >
                <span>Подробнее</span>
                <ArrowUpRight size={16} className="text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Кейс 3 */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden flex flex-col hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-900/10 transition-all">
            <div className="h-48 bg-gradient-to-br from-teal-900/50 to-slate-900 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-10 bg-[url('/images/portfolio/social-media.jpg')] bg-cover bg-center"></div>
              <div className="z-10 px-6 py-4 text-center">
                <div className="inline-block mb-3 px-3 py-1 rounded-full bg-teal-900/70 text-teal-400 text-xs">
                  Реклама
                </div>
                <h3 className="text-xl font-bold text-white font-fixedsys">Офтальмологическая клиника "Онлайн Око" </h3>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-4">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-slate-400 text-sm">Рост охватов</span>
                  <span className="text-teal-400 font-bold font-fixedsys">в 3 раза</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-6 flex-grow">
                Разработали стратегию контента для социальных сетей клиники эстетической медицины,
                что привело к трехкратному увеличению охватов и росту обращений от новых пациентов.
              </p>
              <Button
                onClick={() => openExternalLink(caseUrls.case3)}
                className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 justify-between group"
              >
                <span>Подробнее</span>
                <ArrowUpRight size={16} className="text-teal-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
