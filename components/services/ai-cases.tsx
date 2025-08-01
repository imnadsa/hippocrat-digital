"use client"

import React, { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function AiCases() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.15 }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
      observer.disconnect()
    }
  }, [])

  const openCase = () => {
    router.push('/cases/hippocrat-ai?from=cases')
  }

  const openCaseDetailed = () => {
    router.push('/cases/hippocrat-ai?from=cases')
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={sectionRef} id="ai-cases" className="py-16 md:py-20 relative overflow-hidden">
      {/* Анимированные декоративные элементы */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-indigo-600/5 rounded-full blur-3xl animate-floatBackground opacity-50"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-600/5 rounded-full blur-3xl animate-floatBackground opacity-50" style={{ animationDelay: '-4s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 ${inView ? 'animate-fadeInUp' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Кейс внедрения
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-fixedsys">
            Наш флагманский{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              ИИ-проект
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto text-lg">
            Первый в России специализированный ИИ-ассистент для медицинского образования с более чем 2000 активных пользователей
          </p>
        </div>

        {/* Блок кейса Hippocrat AI */}
        <div className={`max-w-4xl mx-auto mb-16 ${inView ? 'animate-fadeInUp delay-200' : 'opacity-0 translate-y-4'}`}>
          <div
            onClick={openCase}
            className="group cursor-pointer bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl overflow-hidden border border-slate-700/30 hover:border-teal-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-900/25"
          >
            {/* Изображение кейса */}
            <div className="relative h-80 md:h-96 overflow-hidden">
              <Image
                src="/cases/Hippocrat-AI/image11.jpg"
                alt="Hippocrat AI"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Градиент поверх изображения */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              
              {/* Категория */}
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-teal-500/20 backdrop-blur-sm text-teal-400 text-sm rounded-full border border-teal-500/30 font-medium">
                  Искусственный интеллект
                </span>
              </div>
              
              {/* Год */}
              <div className="absolute top-6 right-6">
                <span className="px-4 py-2 bg-slate-900/60 backdrop-blur-sm text-slate-300 text-sm rounded-full">
                  2025
                </span>
              </div>
            </div>

            {/* Контент */}
            <div className="p-8 md:p-10">
              {/* Заголовок */}
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-fixedsys group-hover:text-teal-300 transition-colors duration-300">
                Hippocrat AI
              </h3>
              
              {/* Подзаголовок */}
              <p className="text-teal-400 text-lg md:text-xl mb-8 font-medium">
                ИИ-ассистент для медицинского образования
              </p>

              {/* Метрики */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2 font-fixedsys">
                    2000+
                  </div>
                  <div className="text-slate-400 text-sm md:text-base leading-tight">
                    Активных студентов
                  </div>
                  <div className="text-teal-300 text-sm font-medium mt-1">
                    +2000
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2 font-fixedsys">
                    100%
                  </div>
                  <div className="text-slate-400 text-sm md:text-base leading-tight">
                    Специализация
                  </div>
                  <div className="text-indigo-300 text-sm font-medium mt-1">
                    Медицинские источники
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2 font-fixedsys">
                    4.9/5
                  </div>
                  <div className="text-slate-400 text-sm md:text-base leading-tight">
                    Качество ответов
                  </div>
                  <div className="text-teal-300 text-sm font-medium mt-1">
                    С источниками
                  </div>
                </div>
              </div>

              {/* Описание проекта */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-3 text-lg">О проекте</h4>
                <p className="text-slate-400 text-base leading-relaxed">
                  Разработка первого в России специализированного ИИ-ассистента для студентов медицинских вузов с технологией RAG и обучением на медицинской литературе. Система помогает студентам быстро находить точную информацию с указанием источников.
                </p>
              </div>

              {/* Теги */}
              <div className="flex flex-wrap gap-3 mb-6">
                {['ИИ', 'Образование', 'RAG', 'Медицина', 'ML'].map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-2 bg-slate-800/60 text-slate-300 rounded-lg text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover эффект - стрелка */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`bg-gradient-to-r from-teal-900/30 to-indigo-900/30 rounded-xl border border-teal-500/30 p-8 text-center ${inView ? 'animate-fadeInUp delay-400' : 'opacity-0 translate-y-4'}`}>
          <h3 className="text-2xl md:text-3xl font-bold font-fixedsys text-white mb-4">
            Хотите создать ИИ-решение для вашей клиники?
          </h3>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto text-lg">
            На базе технологий Hippocrat AI мы создаем ИИ-ассистентов для врачей, системы автоматизации документооборота и обучения медперсонала.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="px-6 py-3 bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white rounded-lg font-fixedsys transition-all hover-lift shadow-md hover:shadow-lg"
              onClick={scrollToContact}
            >
              Обсудить ИИ-проект
            </Button>
            <Button
              variant="outline"
              className="px-6 py-3 border-teal-700 text-teal-400 hover:bg-teal-950/50 backdrop-blur-sm transition-all duration-300 hover:border-teal-500"
              onClick={openCaseDetailed}
            >
              Изучить кейс подробно
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
