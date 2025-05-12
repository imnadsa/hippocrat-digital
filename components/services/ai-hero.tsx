"use client"

import React from 'react'; // <--- ДОБАВЛЕНО: Явный импорт React
import { Button } from "@/components/ui/button"
import { Brain, Cpu, Zap, MessageSquare, LucideIcon } from "lucide-react" // Добавлен тип LucideIcon
import { useState, useEffect } from "react"

// Типизируем объект статистики для большей надежности
interface StatItem {
  icon: LucideIcon; // Используем импортированный тип
  value: string;
  label: string;
  color: 'teal' | 'indigo'; // Ограничиваем возможные цвета
}

// Стили для цветов, чтобы Tailwind мог их найти при сборке
const colorStyles = {
  teal: {
    gradientOrb: 'from-teal-500 to-teal-600',
    borderActive: 'border-teal-500/30',
    shadowActive: 'shadow-teal-900/20',
    bgIcon: 'bg-teal-900/50',
    textIcon: 'text-teal-400',
    textActive: 'text-teal-400',
  },
  indigo: {
    gradientOrb: 'from-indigo-500 to-indigo-600',
    borderActive: 'border-indigo-500/30',
    shadowActive: 'shadow-indigo-900/20',
    bgIcon: 'bg-indigo-900/50',
    textIcon: 'text-indigo-400',
    textActive: 'text-indigo-400',
  }
};

export default function AiHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentStat, setCurrentStat] = useState(0)

  // Данные статистики с типизацией
  const stats: StatItem[] = [
    {
      icon: Brain,
      value: "85%",
      label: "Снижение времени диагностики",
      color: "teal"
    },
    {
      icon: MessageSquare,
      value: "24/7",
      label: "Доступность чат-ботов",
      color: "indigo"
    },
    {
      icon: Zap,
      value: "60%",
      label: "Автоматизация процессов",
      color: "teal"
    },
    {
      icon: Cpu,
      value: "300%",
      label: "ROI в первый год",
      color: "indigo"
    }
  ]

  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      // Обновляем текущую статистику, циклически перебирая массив stats
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [stats.length]) // Добавляем stats.length в зависимости useEffect

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="container mx-auto px-4 pt-32 pb-16 relative overflow-hidden">
      {/* Анимированные декоративные элементы */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '-3s' }}></div>

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Левая колонка: Текст и кнопки */}
          <div className={`lg:w-1/2 space-y-6 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm animate-fadeIn">
              ИИ-решения для медицины
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight font-fixedsys">
              <span className="bg-gradient-to-r from-teal-400 via-indigo-500 to-teal-400 bg-clip-text text-transparent animate-gradient">
                Искусственный интеллект в медицине будущего
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 animate-fadeInUp delay-100">
              Внедряем передовые ИИ-технологии для автоматизации клинических процессов,
              улучшения диагностики и повышения качества обслуживания пациентов
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-lg font-fixedsys animate-fadeInUp delay-200 active:animate-buttonClick hover-lift"
                onClick={() => scrollToSection("contact")}
              >
                Внедрить ИИ
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-700 text-teal-400 hover:bg-teal-950/50 animate-fadeInUp delay-300 hover-lift"
                onClick={() => scrollToSection("ai-solutions")}
              >
                Узнать больше
              </Button>
            </div>
          </div>

          {/* Правая колонка: Анимация ИИ и статистика */}
          <div className={`lg:w-1/2 ${isVisible ? 'animate-fadeInRight delay-500' : 'opacity-0'}`}>
            <div className="relative">
              {/* Фон под мозгом */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse-slow"></div>

              {/* Центральная иконка мозга */}
              <div className="relative bg-slate-900/50 rounded-full p-8 border border-slate-800 mx-auto w-64 h-64 flex items-center justify-center">
                <Brain size={120} className="text-teal-400 animate-pulse" />

                {/* Орбитальные элементы */}
                <div className="absolute inset-0">
                  {stats.map((stat, index) => {
                    // Получаем компонент иконки
                    const IconComponent = stat.icon;
                    // Получаем стили для цвета текущего элемента
                    const styles = colorStyles[stat.color];
                    return (
                      <div
                        key={index}
                        className="absolute w-full h-full"
                        style={{
                          // transform: `rotate(${index * (360 / stats.length)}deg)`, // Равномерное распределение
                          transform: `rotate(${index * 90}deg)`, // Если всегда 4 элемента
                          animation: `rotate 30s linear infinite ${index * -7.5}s` // Подстройте задержку, если кол-во элементов изменится
                        }}
                      >
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                           {/* ИЗМЕНЕНО: Используем JSX вместо React.createElement */}
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${styles.gradientOrb} flex items-center justify-center animate-pulse`}>
                             <IconComponent size={16} className="text-white" />
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Статистические карточки */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  const isActive = currentStat === index;
                  // Получаем нужные стили для текущего цвета
                  const styles = colorStyles[stat.color];

                  return (
                    <div
                      key={index}
                      className={`bg-slate-900/50 rounded-xl border p-4 transition-all duration-500 hover-lift ${
                        // Используем заранее подготовленные классы
                        isActive ? `${styles.borderActive} shadow-lg ${styles.shadowActive}` : 'border-slate-800'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full ${styles.bgIcon} flex items-center justify-center ${styles.textIcon} mb-3 ${
                        isActive ? 'animate-iconBounce' : ''
                      }`}>
                        <IconComponent size={20} />
                      </div>
                      <div className={`text-xl font-bold font-fixedsys mb-1 ${
                        // Используем заранее подготовленные классы
                        isActive ? styles.textActive : 'text-white'
                      }`}>
                        {stat.value}
                      </div>
                      <div className="text-slate-400 text-sm">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Встроенные стили для анимации вращения */}
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Небольшие улучшения Tailwind-анимаций (можно вынести в global.css) */
        .hover-lift {
          transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
        }
        .hover-lift:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Пример тени, настройте под дизайн */
        }
        .active\:animate-buttonClick:active {
           transform: scale(0.97); /* Чуть уменьшаем кнопку при клике */
        }

         /* Анимации появления (можно определить в tailwind.config.js) */
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeInLeft { animation: fadeInLeft 0.6s ease-out forwards; }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeInRight { animation: fadeInRight 0.6s ease-out forwards; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.5s ease-out forwards; }
         .delay-100 { animation-delay: 0.1s; }
         .delay-200 { animation-delay: 0.2s; }
         .delay-300 { animation-delay: 0.3s; }
         .delay-500 { animation-delay: 0.5s; }


        @keyframes floatBackground {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-floatBackground {
          animation: floatBackground 6s ease-in-out infinite;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%; /* Нужно для анимации градиента */
          animation: gradient 5s ease infinite;
        }

        @keyframes iconBounce { /* Пример анимации для иконки */
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-iconBounce {
          animation: iconBounce 0.8s ease-in-out;
        }

        @keyframes pulse-slow { /* Более медленное пульсирование */
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow {
            animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  )
}
