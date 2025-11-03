'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function FounderCard() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        
        {/* Контейнер среднего размера */}
        <div className="max-w-5xl mx-auto">
          
          {/* Flex контейнер - фото слева, текст справа */}
          <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/50">
            
            {/* ФОТО - левая часть */}
            <div className="w-full lg:w-1/2 relative min-h-96 lg:h-auto">
              <Image
                src="/blog/images/alexander-antoshkin.jpg"
                alt="Александр Антошкин - CEO Hippocrat Digital"
                fill
                className="object-cover w-full h-full"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Градиентный оверлей для глубины */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-950/20"></div>
            </div>

            {/* ТЕКСТ - правая часть */}
            <div className="w-full lg:w-1/2 bg-slate-950 p-8 md:p-12 flex flex-col justify-center">
              
              <div>
                
                {/* Имя */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Александр
                  <br />
                  Антошкин
                </h3>

                {/* Должность */}
                <p className="text-lg md:text-xl text-teal-400 font-semibold mb-6">
                  CEO Hippocrat Digital
                </p>

                {/* Описание */}
                <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">
                  Медицинский digital-маркетинг с <span className="text-teal-400 font-semibold">2022 года</span>. Помогаю клиникам привлекать пациентов через таргетированную рекламу, SEO и AI решения.
                </p>

                {/* Кнопки */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="https://t.me/imnadsa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-semibold rounded-full hover:from-teal-600 hover:to-indigo-600 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 text-center"
                  >
                    Написать в Telegram
                  </Link>
                  
                  <a
                    href="mailto:hello@hippocrat-digital.ru"
                    className="px-8 py-3 bg-slate-800 text-white font-semibold rounded-full border-2 border-slate-700 hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 text-center"
                  >
                    Email
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
