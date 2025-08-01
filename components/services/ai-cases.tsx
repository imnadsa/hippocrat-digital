"use client"

import React, { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button" // Используем Button из shadcn/ui? Если да, лучше использовать его компоненты. Если нет, можно оставить <button>
import {
  ArrowUpRight,
  Brain,
  Eye,
  MessageSquare,
  Stethoscope,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  CheckCircle,
  BarChart3,
  Activity,
  Heart,
  LucideIcon // Добавим тип для иконок
} from "lucide-react"

// Типизируем данные для большей надежности
interface ResultItem {
  metric: string;
  description: string;
  icon: LucideIcon;
}

interface Testimonial {
  author: string;
  position: string;
  text: string;
}

interface CaseItem {
  title: string;
  category: string;
  icon: LucideIcon;
  aiType: string;
  challenge: string;
  solution: string;
  implementation: string[];
  results: ResultItem[];
  testimonial: Testimonial;
  timeline: string;
  investment: string;
  roi: string;
}


export default function AiCases() {
  const [inView, setInView] = useState(false)
  const [activeCase, setActiveCase] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null) // Добавляем тип для ref

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
           // observer.unobserve(entry.target); // Раскомментируйте, если анимация нужна только один раз
        }
      },
      { threshold: 0.15 } // Немного уменьшил порог для более раннего срабатывания
    )

    const currentRef = sectionRef.current; // Сохраняем ref в переменную
    if (currentRef) {
      observer.observe(currentRef)
    }

    // Очистка при размонтировании
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
      observer.disconnect()
    }
  }, []) // Пустой массив зависимостей - эффект выполнится один раз после монтирования

  const openExternalLink = (url: string) => {
    // Добавим проверку, чтобы не открывать "#"
    if (url && url !== "#") {
        window.open(url, "_blank", "noopener,noreferrer")
    } else {
        console.warn("No valid URL provided for detailed case study.");
        // Можно показать уведомление пользователю, что ссылка неактивна
    }
  }

  // Функция для плавной прокрутки
  const smoothScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  // Определяем стили для градиента иконки активного кейса заранее
  const activeCaseIconGradient = activeCase % 2 === 0
    ? 'from-teal-500 to-indigo-600'
    : 'from-indigo-500 to-purple-600'; // Убедитесь, что цвет purple определен в Tailwind

  return (
    <section ref={sectionRef} id="ai-cases" className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-gray-950">
      {/* Анимированные декоративные элементы */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-indigo-600/5 rounded-full blur-3xl animate-floatBackground opacity-50"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-600/5 rounded-full blur-3xl animate-floatBackground opacity-50" style={{ animationDelay: '-4s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 ${inView ? 'animate-fadeInUp' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Кейсы внедрения
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-fixedsys">
            Реальные кейсы{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              внедрения ИИ
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto text-lg">
            Истории успеха медицинских учреждений, которые уже используют ИИ-технологии для повышения эффективности и качества ухода.
          </p>
        </div>

        {/* CTA Section */}
        <div className={`mt-16 bg-gradient-to-r from-teal-900/30 to-indigo-900/30 rounded-xl border border-teal-500/30 p-8 text-center ${inView ? 'animate-fadeInUp delay-800' : 'opacity-0 translate-y-4'}`}>
          <h3 className="text-2xl md:text-3xl font-bold font-fixedsys text-white mb-4">
            Хотите такие же результаты?
          </h3>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto text-lg">
            Начнем с бесплатного аудита ваших процессов и предложим оптимальное ИИ-решение для вашей клиники.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Основная кнопка CTA */}
            <button
              className="px-6 py-3 bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white rounded-lg font-fixedsys transition-all hover-lift active:animate-buttonClick shadow-md hover:shadow-lg"
              onClick={() => smoothScrollTo("contact")} // Используем функцию прокрутки
            >
              Получить консультацию
            </button>
          </div>
        </div>
      </div> {/* Закрываем container */}

      {/* Добавляем определения анимаций и стилей */}
      <style jsx>{`
        /* Анимации появления */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }

         @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }

        @keyframes fadeInShort { /* Для плавной смены контента кейса */
            from { opacity: 0.5; }
            to { opacity: 1; }
        }
        .animate-fadeInShort { animation: fadeInShort 0.3s ease-out forwards; }

        /* Задержки анимаций */
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }

        /* Анимация фона */
        @keyframes floatBackground {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          25% { transform: translateY(-15px) translateX(10px) rotate(5deg); }
          50% { transform: translateY(0px) translateX(-10px) rotate(0deg); }
          75% { transform: translateY(15px) translateX(5px) rotate(-5deg); }
        }
        .animate-floatBackground {
          animation: floatBackground 12s ease-in-out infinite;
        }

        /* Эффекты при наведении */
        .hover-lift {
          transition: transform 0.25s ease-out, box-shadow 0.25s ease-out;
        }
        .hover-lift:hover {
          transform: translateY(-4px);
          /* Добавим небольшую тень для объема */
           box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
         .hover-glow-teal:hover {
            box-shadow: 0 0 20px rgba(45, 212, 191, 0.3); /* Teal glow */
         }
         .hover-glow-indigo:hover {
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); /* Indigo glow */
         }

        /* Анимация клика */
        @keyframes buttonClick {
           0% { transform: scale(1); }
           50% { transform: scale(0.97); }
           100% { transform: scale(1); }
        }
        .active\:animate-buttonClick:active {
           animation: buttonClick 0.15s ease-out;
        }

        /* Стили для Firefox для плавной прокрутки (если нужен полифилл) */
        html { scroll-behavior: smooth; }
      `}</style>

    </section> // Закрываем section
  )
}
