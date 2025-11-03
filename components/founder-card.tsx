'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function FounderCard() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Контейнер с максимальной шириной */}
        <div className="max-w-2xl mx-auto">
          {/* Карточка */}
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
            
            {/* Внутренний контент с padding */}
            <div className="p-8 md:p-12">
              
              {/* Flex контейнер для мобайла и десктопа */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                
                {/* ФОТО - левая часть */}
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-2 border-gradient-to-br from-teal-500/30 to-indigo-500/30 shadow-lg">
                    {/* Градиентный бордер в фоне */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-indigo-500/20 rounded-xl"></div>
                    
                    <Image
                      src="/blog/images/alexander-antoshkin.jpg"
                      alt="Александр Антошкин - CEO Hippocrat Digital"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover rounded-lg"
                      priority
                    />
                  </div>
                </div>

                {/* ТЕКСТ - правая часть */}
                <div className="flex-1 text-center md:text-left">
                  
                  {/* Имя и должность */}
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                      Александр Антошкин
                    </h3>
                    <p className="text-lg text-teal-400 font-semibold">
                      CEO Hippocrat Digital
                    </p>
                  </div>

                  {/* Описание */}
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6">
                    Медицинский digital-маркетинг с <span className="text-teal-400 font-semibold">2022 года</span>. Помогаю клиникам привлекать пациентов через таргетированную рекламу, SEO и AI решения.
                  </p>

                  {/* Статистика (опционально) */}
                  <div className="flex flex-col sm:flex-row gap-6 mb-8 justify-center md:justify-start">
                    <div>
                      <div className="text-2xl font-bold text-teal-400">100+</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider">Клиентов помощь</div>
                    </div>
                    <div className="hidden sm:block w-px bg-slate-700"></div>
                    <div>
                      <div className="text-2xl font-bold text-indigo-400">3 года</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider">Опыта в healthcare</div>
                    </div>
                  </div>

                  {/* Кнопка Написать */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <Link
                      href="https://t.me/imnadsa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-medium rounded-xl hover:from-teal-600 hover:to-indigo-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5.41 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Написать в Telegram
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    </Link>
                    
                    <a
                      href="mailto:antoshkin.info@bk.ru"
                      className="inline-flex items-center justify-center px-8 py-3 bg-slate-800/50 text-white font-medium rounded-xl border border-slate-700 hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      Email
                    </a>
                  </div>

                  {/* Соц сети */}
                  <div className="mt-6 flex gap-4 justify-center md:justify-start">
                    <a
                      href="https://t.me/imnadsa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/50 transition-all duration-300"
                      title="Telegram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.161.161-.295.295-.605.295-.041 0-.082 0-.122 0l.214-3.04 5.514-4.98c.24-.216-.053-.336-.373-.121l-6.814 4.289-2.948-.921c-.64-.203-.658-.64.135-.954l11.51-4.441c.54-.203 1.009.131.84.939z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
