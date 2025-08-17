"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight, Target, Brain, Eye, ChartBar, Users, TrendUp } from "phosphor-react"
import { allCases } from '@/lib/cases'
import { useRouter } from 'next/navigation'

export default function PortfolioSection() {
  const router = useRouter()
  // Функция для открытия кейса (переход на страницу)
  const openCase = (caseId: string) => {
    window.location.href = `/cases/${caseId}?from=home`
  }

  return (
    <section id="portfolio" className="py-16 md:py-20 relative overflow-hidden">
      {/* Декоративные элементы с улучшенной анимацией */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground delay-800"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-indigo-400/5 rounded-full blur-2xl animate-pulse-slow delay-400"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12 animate-fadeInUp">
          <div className="px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6 hover:border-teal-500/50 transition-all duration-300">
            Портфолио
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent animate-gradient font-fixedsys text-shadow-lg">
            Кейсы с реальными результатами
          </h2>
          <p className="text-slate-400 text-center max-w-2xl text-shadow">
            Конкретные примеры того, как мы улучшаем процессы медицинских учреждений. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Кейс 1 - Онлайн Око (реальный кейс) */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden flex flex-col hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-900/25 transition-all duration-500 group hover-lift blur-backdrop animate-slideInStagger delay-100">
              <div className="h-56 bg-gradient-to-br from-teal-900/50 to-slate-900 relative overflow-hidden">
                {/* Основное изображение кейса */}
                <img 
                  src="/cases/online-oko/oko.jpg" 
                  alt="Сайт детской офтальмологии Онлайн-Око" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Градиентный оверлей для читаемости */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                
                {/* Цветной оверлей при ховере */}
                <div className="absolute inset-0 bg-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Hover саммари как у Belberry */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="bg-slate-900/95 backdrop-blur-md rounded-2xl p-6 mx-4 border border-teal-500/30 shadow-2xl">
                    <div className="text-center mb-4">
                      <h4 className="text-white font-bold text-lg font-fixedsys mb-2">Результат</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-teal-400 font-fixedsys mb-1">40</div>
                        <div className="text-slate-300 text-sm">лидов получено</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-teal-400 font-fixedsys mb-1">-67%</div>
                        <div className="text-slate-300 text-sm">стоимость лида</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Бейдж категории */}
                <div className="absolute top-4 right-4 z-10 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="inline-block px-3 py-1 rounded-full bg-teal-900/80 backdrop-blur-sm text-teal-400 text-xs border border-teal-500/30 hover:bg-teal-900/90 transition-all duration-300 animate-fadeIn delay-300">
                    Таргетированная реклама
                  </div>
                </div>
                
                {/* Заголовок поверх изображения */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-xl font-bold text-white font-fixedsys text-shadow animate-fadeInUp delay-400 group-hover:text-teal-300 transition-colors duration-300">
                    Онлайн-Око
                  </h3>
                  <p className="text-slate-300 text-sm mt-1 animate-fadeInUp delay-500">Детская офтальмология</p>
                </div>
              </div>
              
              {/* Нижний контент карточки остается без изменений */}
              <div className="p-6 flex-grow flex flex-col">
                {/* Метрики */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-slate-800/30 rounded-lg animate-scaleUp delay-600">
                    <div className="flex items-center justify-center mb-2">
                      <TrendUp size={20} className="text-teal-400 mr-2" weight="duotone" />
                      <span className="text-teal-400 font-bold font-fixedsys text-lg animate-gradient-text">-67%</span>
                    </div>
                    <p className="text-slate-400 text-xs">Стоимость лида</p>
                  </div>
                  <div className="text-center p-3 bg-slate-800/30 rounded-lg animate-scaleUp delay-700">
                    <div className="flex items-center justify-center mb-2">
                      <Users size={20} className="text-teal-400 mr-2" weight="duotone" />
                      <span className="text-teal-400 font-bold font-fixedsys text-lg animate-gradient-text">+393%</span>
                    </div>
                    <p className="text-slate-400 text-xs">Количество лидов</p>
                  </div>
                </div>
                
                <p className="text-slate-400 text-sm mb-6 flex-grow animate-fadeInUp delay-800 leading-relaxed">
                  Снизили стоимость лида с 1200₽ до 400₽ в нише детской офтальмологии через оптимизацию таргетинга ВКонтакте.
                </p>
                
                <Button
                  onClick={() => openCase('online-oko')}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 justify-between group hover-lift transition-all duration-300 animate-fadeInUp delay-1000"
                >
                  <span>Изучить кейс</span>
                  <ArrowUpRight size={16} className="text-teal-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" weight="bold" />
                </Button>
              </div>
            </div>
          {/* Кейс 2 - AI (плейсхолдер) */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden flex flex-col hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-900/25 transition-all duration-500 group hover-lift blur-backdrop animate-slideInStagger delay-200">
              <div className="h-56 bg-gradient-to-br from-indigo-900/50 to-slate-900 relative overflow-hidden">
                {/* Основное изображение кейса */}
                <img 
                  src="/cases/Hippocrat-AI/cardHippocratAI.jpg" 
                  alt="Hippocrat AI - ИИ-ассистент для медицинского образования" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Градиентный оверлей для читаемости */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                
                {/* Цветной оверлей при ховере */}
                <div className="absolute inset-0 bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Hover саммари как у Belberry */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="bg-slate-900/95 backdrop-blur-md rounded-2xl p-6 mx-4 border border-indigo-500/30 shadow-2xl">
                    <div className="text-center mb-4">
                      <h4 className="text-white font-bold text-lg font-fixedsys mb-2">Результат</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-400 font-fixedsys mb-1">2000+</div>
                        <div className="text-slate-300 text-sm">активных студентов</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-400 font-fixedsys mb-1">4.9★</div>
                        <div className="text-slate-300 text-sm">средняя оценка</div>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <div className="text-xs text-slate-400">Успеваемость: <span className="text-indigo-400 font-semibold">+67%</span></div>
                    </div>
                  </div>
                </div>
                
                {/* Бейдж категории */}
                <div className="absolute top-4 right-4 z-10 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="inline-block px-3 py-1 rounded-full bg-indigo-900/80 backdrop-blur-sm text-indigo-400 text-xs border border-indigo-500/30 hover:bg-indigo-900/90 transition-all duration-300 animate-fadeIn delay-400">
                    ИИ-решения в медицине
                  </div>
                </div>
                
                {/* Заголовок поверх изображения */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-xl font-bold text-white font-fixedsys text-shadow animate-fadeInUp delay-500 group-hover:text-indigo-300 transition-colors duration-300">
                    Hippocrat AI для студентов
                  </h3>
                  <p className="text-slate-300 text-sm mt-1 animate-fadeInUp delay-600">ИИ-ассистент для медицинского образования</p>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-slate-800/30 rounded-lg animate-scaleUp delay-700">
                    <div className="flex items-center justify-center mb-2">
                      <Users size={20} className="text-indigo-400 mr-2" weight="duotone" />
                      <span className="text-indigo-400 font-bold font-fixedsys text-lg animate-gradient-text">2000+</span>
                    </div>
                    <p className="text-slate-400 text-xs">Активных пользователей</p>
                  </div>
                  <div className="text-center p-3 bg-slate-800/30 rounded-lg animate-scaleUp delay-800">
                    <div className="flex items-center justify-center mb-2">
                      <ChartBar size={20} className="text-indigo-400 mr-2" weight="duotone" />
                      <span className="text-indigo-400 font-bold font-fixedsys text-lg animate-gradient-text">4.9★</span>
                    </div>
                    <p className="text-slate-400 text-xs">Средняя оценка</p>
                  </div>
                </div>
                
                <p className="text-slate-400 text-sm mb-6 flex-grow animate-fadeInUp delay-900 leading-relaxed">
                  Разработали нейросетевой ассистент на базе медицинских учебников, который персонализированно обучает студентов.
                </p>
                
                <Button
                  onClick={() => openCase('hippocrat-ai')}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 justify-between group hover-lift transition-all duration-300 animate-fadeInUp delay-1100"
                >
                  <span>Изучить кейс</span>
                  <ArrowUpRight size={16} className="text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" weight="bold" />
                </Button>
              </div>
          </div>

          {/* Кейс 3 - Полный Порядок (реальный кейс) */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden flex flex-col hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-900/25 transition-all duration-500 group hover-lift blur-backdrop animate-slideInStagger delay-300">
            <div className="h-56 bg-gradient-to-br from-emerald-900/50 to-slate-900 relative overflow-hidden">
              {/* Основное изображение кейса */}
              <img 
                src="/cases/polniy-poryadok/cover.jpg" 
                alt="Стоматологическая клиника Полный Порядок" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Градиентный оверлей для читаемости */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
              
              {/* Цветной оверлей при ховере */}
              <div className="absolute inset-0 bg-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Hover саммари как у Belberry */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="bg-slate-900/95 backdrop-blur-md rounded-2xl p-6 mx-4 border border-emerald-500/30 shadow-2xl">
                  <div className="text-center mb-4">
                    <h4 className="text-white font-bold text-lg font-fixedsys mb-2">Результат</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-400 font-fixedsys mb-1">4000+</div>
                      <div className="text-slate-300 text-sm">кликов по рекламе</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-400 font-fixedsys mb-1">50+</div>
                      <div className="text-slate-300 text-sm">Целевых действийг</div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="text-xs text-slate-400">Бюджет: <span className="text-emerald-400 font-semibold">500,000₽</span></div>
                  </div>
                </div>
              </div>
              
              {/* Бейдж категории */}
              <div className="absolute top-4 right-4 z-10 group-hover:opacity-0 transition-opacity duration-300">
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-900/80 backdrop-blur-sm text-emerald-400 text-xs border border-emerald-500/30 hover:bg-emerald-900/90 transition-all duration-300 animate-fadeIn delay-500">
                  Долгосрочный таргетинг
                </div>
              </div>
              
              {/* Заголовок поверх изображения */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-white font-fixedsys text-shadow animate-fadeInUp delay-600 group-hover:text-emerald-300 transition-colors duration-300">
                  Стоматология "Полный Порядок"
                </h3>
                <p className="text-slate-300 text-sm mt-1 animate-fadeInUp delay-700">Премиальная стоматологическая клиника</p>
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-slate-800/30 rounded-lg animate-scaleUp delay-800">
                  <div className="flex items-center justify-center mb-2">
                    <TrendUp size={20} className="text-emerald-400 mr-2" weight="duotone" />
                    <span className="text-emerald-400 font-bold font-fixedsys text-lg animate-gradient-text">4000+</span>
                  </div>
                  <p className="text-slate-400 text-xs">Кликов по рекламе</p>
                </div>
                <div className="text-center p-3 bg-slate-800/30 rounded-lg animate-scaleUp delay-900">
                  <div className="flex items-center justify-center mb-2">
                    <Users size={20} className="text-emerald-400 mr-2" weight="duotone" />
                    <span className="text-emerald-400 font-bold font-fixedsys text-lg animate-gradient-text">500+</span>
                  </div>
                  <p className="text-slate-400 text-xs">Целевых действий</p>
                </div>
              </div>
              
              <p className="text-slate-400 text-sm mb-6 flex-grow animate-fadeInUp delay-1000 leading-relaxed">
                7 месяцев работы с премиальной стоматологической клиникой. Бюджет более 500,000₽, стратегия долгосрочной лояльности пациентов.
              </p>
              
              <Button
                onClick={() => openCase('polniy-poryadok')}
                className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 justify-between group hover-lift transition-all duration-300 animate-fadeInUp delay-1200"
              >
                <span>Изучить кейс</span>
                <ArrowUpRight size={16} className="text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" weight="bold" />
              </Button>
            </div>
          </div>
         </div> 

        {/* CTA для портфолио */}
        <div className="text-center mt-12 animate-fadeInUp delay-1300">
          <h3 className="text-xl font-semibold text-white mb-4 font-fixedsys text-shadow">
            Хотите посмотреть больше кейсов?
          </h3>
          <Button
            className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 px-8 py-3 hover-lift hover-glow transition-all duration-300"
            onClick={() => router.push('/cases')}
          >
            Все кейсы
          </Button>
        </div>
      </div>
    </section>
  )
}
