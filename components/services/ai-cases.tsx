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

  const cases: CaseItem[] = [ // Используем тип CaseItem[]
    {
      title: "ИИ-диагностика в офтальмологической клинике «Ясный Взгляд»",
      category: "Диагностическое ИИ",
      icon: Eye,
      aiType: "Компьютерное зрение для анализа ретинальных снимков",
      challenge: "Большая нагрузка на врачей при скрининге диабетической ретинопатии, человеческий фактор в диагностике",
      solution: "Внедрение ИИ-системы для автоматического анализа снимков глазного дна с выделением патологических изменений",
      implementation: [
        "Обучение модели на 50,000 снимков",
        "Интеграция с PACS системой клиники",
        "Создание интерфейса для врачей",
        "Настройка уведомлений о критических случаях"
      ],
      results: [
        { metric: "92%", description: "Точность выявления патологий", icon: Eye },
        { metric: "-65%", description: "Время на анализ снимка", icon: Clock },
        { metric: "+40%", description: "Пропускная способность", icon: TrendingUp },
        { metric: "0", description: "Пропущенных критических случаев", icon: CheckCircle }
      ],
      testimonial: {
        author: "Д-р Иванова А.С.",
        position: "Главный врач офтальмолог",
        text: "ИИ стал незаменимым помощником в нашей практике. Раннее выявление диабетической ретинопатии увеличилось на 35%."
      },
      timeline: "4 месяца внедрения",
      investment: "800,000 ₽",
      roi: "180% за первый год"
    },
    {
      title: "Чат-бот для записи в медицинском центре «Здоровье Плюс»",
      category: "Автоматизация",
      icon: MessageSquare,
      aiType: "NLP-бот для обработки запросов пациентов",
      challenge: "Перегруженность регистратуры, длительное время ожидания, человеческие ошибки при записи",
      solution: "Разработка умного чат-бота для автоматической записи пациентов с учетом специализации врачей и доступности",
      implementation: [
        "Анализ 10,000 диалогов с пациентами",
        "Создание модели NLP на базе GPT",
        "Интеграция с CRM и календарем врачей",
        "Обучение бота специфическим медицинским терминам"
      ],
      results: [
        { metric: "85%", description: "Записей через бота", icon: MessageSquare },
        { metric: "-50%", description: "Нагрузка на регистратуру", icon: Users },
        { metric: "24/7", description: "Доступность записи", icon: Clock },
        { metric: "95%", description: "Удовлетворенность пациентов", icon: CheckCircle }
      ],
      testimonial: {
        author: "Петрова М.В.",
        position: "Администратор клиники",
        text: "Бот освободил наших сотрудников от рутинных задач. Теперь они могут заниматься более важными вопросами пациентов."
      },
      timeline: "2 месяца внедрения",
      investment: "450,000 ₽",
      roi: "250% за первый год"
    },
    {
      title: "Система поддержки принятия решений в кардиологии «КардиоЦентр»",
      category: "Поддержка решений",
      icon: Activity, // Заменено с Stethoscope на Activity для соответствия импорту
      aiType: "Predictive AI для анализа кардиологических данных",
      challenge: "Сложность интерпретации ЭКГ, необходимость быстрого принятия решений в критических ситуациях",
      solution: "ИИ-система для анализа ЭКГ и предсказания сердечно-сосудистых событий с рекомендациями по лечению",
      implementation: [
        "Обработка 1,000,000 ЭКГ записей",
        "Создание модели прогнозирования рисков",
        "Интеграция с кардиомониторами",
        "Разработка интерфейса для врачей"
      ],
      results: [
        { metric: "94%", description: "Точность прогноза событий", icon: BarChart3 },
        { metric: "-40%", description: "Время постановки диагноза", icon: Clock },
        { metric: "+25%", description: "Ранняя диагностика ИБС", icon: Heart },
        { metric: "98%", description: "Согласованность с врачами", icon: CheckCircle }
      ],
      testimonial: {
        author: "Проф. Максимов В.П.",
        position: "Главный кардиолог",
        text: "ИИ помогает нам выявлять скрытые паттерны в ЭКГ, которые человеческий глаз может пропустить. Это спасает жизни."
      },
      timeline: "6 месяцев внедрения",
      investment: "1,200,000 ₽",
      roi: "150% за первый год"
    },
    {
      title: "Автоматизация рентгенодиагностики в больнице «Медицина XXI века»",
      category: "Диагностическое ИИ",
      icon: Brain, // Заменено с Stethoscope на Brain для соответствия импорту
      aiType: "Deep Learning для анализа рентгеновских снимков",
      challenge: "Большой объем рентгенологических исследований, дефицит специалистов, усталость врачей",
      solution: "ИИ для автоматического анализа рентгеновских снимков грудной клетки с выявлением патологических изменений",
      implementation: [
        "Обучение модели на 200,000 рентгенограмм",
        "Интеграция с RIS/PACS системой",
        "Создание системы триажа",
        "Обучение персонала работе с ИИ"
      ],
      results: [
        { metric: "89%", description: "Точность выявления пневмонии", icon: Eye },
        { metric: "-70%", description: "Время первичного анализа", icon: Clock },
        { metric: "+60%", description: "Производительность отделения", icon: TrendingUp },
        { metric: "100%", description: "Покрытие срочных случаев", icon: CheckCircle }
      ],
      testimonial: {
        author: "Смирнов А.Л.",
        position: "Заведующий рентгенологическим отделением",
        text: "ИИ стал нашим вторым мнением. Особенно ценно в ночные смены, когда нужна быстрая оценка критических случаев."
      },
      timeline: "5 месяцев внедрения",
      investment: "950,000 ₽",
      roi: "200% за первый год"
    }
  ]

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

        {/* Навигация по кейсам */}
        <div className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 ${inView ? 'animate-fadeInUp delay-200' : 'opacity-0 translate-y-4'}`}>
          {cases.map((caseItem, index) => {
            const IconComponent = caseItem.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveCase(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-fixedsys transition-all duration-300 hover-lift ${
                  activeCase === index
                    ? 'bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-lg shadow-teal-500/20'
                    : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-700/80'
                }`}
              >
                <IconComponent size={18} /> {/* Уменьшил иконку */}
                <span className="hidden sm:inline text-sm">{caseItem.category}</span>
                <span className="sm:hidden text-sm">{caseItem.category.split(' ')[0]}</span> {/* Сокращенное название для мобильных */}
              </button>
            )
          })}
        </div>

        {/* Активный кейс */}
        <div className={`bg-slate-900/70 rounded-xl border border-slate-800 overflow-hidden shadow-xl shadow-black/20 ${inView ? 'animate-fadeIn delay-400' : 'opacity-0'}`}>
          {/* Используем key для плавной анимации смены контента */}
          <div key={activeCase} className="p-6 md:p-8 animate-fadeInShort">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Основная информация */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-start gap-4">
                   {/* Иконка кейса */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${activeCaseIconGradient} flex items-center justify-center shadow-lg shadow-black/30`}>
                    {React.createElement(cases[activeCase].icon, { size: 32, className: "text-white" })}
                  </div>
                  <div className="flex-1">
                     {/* Категория и Заголовок */}
                    <div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs mb-2">
                      {cases[activeCase].category}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold font-fixedsys text-white mb-1">
                      {cases[activeCase].title}
                    </h3>
                    <p className="text-teal-400 text-sm font-medium">{cases[activeCase].aiType}</p>
                  </div>
                </div>

                {/* Вызов, Решение, Отзыв */}
                <div className="space-y-5">
                  <div>
                    <h4 className="font-bold font-fixedsys text-white mb-2 text-lg">Вызов</h4>
                    <p className="text-slate-400">{cases[activeCase].challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-bold font-fixedsys text-white mb-2 text-lg">Решение</h4>
                    <p className="text-slate-300 mb-3">{cases[activeCase].solution}</p>
                    <ul className="space-y-2">
                      {cases[activeCase].implementation.map((item, index) => (
                        <li key={index} className="text-slate-400 flex items-start text-sm">
                          <span className="flex-shrink-0 w-1.5 h-1.5 bg-teal-400 rounded-full mr-3 mt-[7px]"></span> {/* Поправил выравнивание точки */}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Отзыв */}
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                    <h4 className="font-bold font-fixedsys text-white mb-3">Отзыв клиента</h4>
                    <blockquote className="text-slate-300 italic mb-3 border-l-2 border-teal-500 pl-4">
                      "{cases[activeCase].testimonial.text}"
                    </blockquote>
                    <div className="text-sm text-right">
                      <div className="text-white font-semibold">{cases[activeCase].testimonial.author}</div>
                      <div className="text-slate-400">{cases[activeCase].testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Результаты и Финансы */}
              <div className="space-y-6">
                {/* Блок результатов */}
                <div>
                  <h4 className="font-bold font-fixedsys text-white mb-4 text-lg">Результаты</h4>
                  <div className="space-y-3">
                    {cases[activeCase].results.map((result, index) => {
                      const IconComponent = result.icon;
                      return (
                        <div key={index} className="bg-slate-800/50 rounded-lg p-4 hover-lift transition-all border border-slate-700/30 flex items-center gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-900/70 flex items-center justify-center">
                            <IconComponent size={18} className="text-teal-400" />
                          </div>
                          <div>
                             <div className="text-xl md:text-2xl font-bold font-fixedsys text-white">
                              {result.metric}
                            </div>
                            <span className="text-slate-400 text-sm">{result.description}</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Финансовые показатели */}
                <div className="bg-gradient-to-r from-teal-900/30 to-indigo-900/30 rounded-lg border border-teal-500/30 p-4 shadow-inner shadow-black/20">
                  <h4 className="font-bold font-fixedsys text-white mb-3 text-lg">Финансовые показатели</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Временные рамки:</span>
                      <span className="text-white font-medium">{cases[activeCase].timeline}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Инвестиции:</span>
                      <span className="text-white font-medium">{cases[activeCase].investment}</span>
                    </div>
                     <div className="border-t border-slate-700/50 my-2"></div> {/* Разделитель */}
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">ROI (1-й год):</span>
                      <span className="text-teal-400 font-bold text-lg">{cases[activeCase].roi}</span>
                    </div>
                  </div>
                </div>

                {/* Кнопка подробного кейса */}
                <Button
                  variant="outline" // Используем вариант из shadcn/ui, если он есть
                  className="w-full border-slate-700 text-slate-300 hover:bg-slate-800/50 hover:text-white group"
                   onClick={() => openExternalLink("#")} // Используем обертку для передачи URL
                   disabled={true} // Пока ссылка "#", делаем кнопку неактивной
                >
                  <span>Подробный кейс</span>
                  <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Сводная статистика по всем кейсам */}
        <div className={`mt-16 ${inView ? 'animate-fadeInUp delay-600' : 'opacity-0 translate-y-4'}`}>
          <h3 className="text-2xl md:text-3xl font-bold font-fixedsys text-white text-center mb-8">
            Общие результаты внедрения ИИ
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
             {/* Карточка статистики */}
            {[
              { icon: BarChart3, value: "25+", label: "Успешных внедрений", color: "teal" },
              { icon: TrendingUp, value: "190%", label: "Средний ROI", color: "indigo" },
              { icon: Clock, value: "-55%", label: "Экономия времени", color: "teal" },
              { icon: CheckCircle, value: "98%", label: "Удовлетворенность", color: "indigo" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              const bgColor = stat.color === 'teal' ? 'bg-teal-900/50' : 'bg-indigo-900/50';
              const textColor = stat.color === 'teal' ? 'text-teal-400' : 'text-indigo-400';
              const borderColor = stat.color === 'teal' ? 'border-teal-700/30' : 'border-indigo-700/30';

              return (
                <div key={index} className={`bg-slate-800/40 rounded-xl border ${borderColor} p-5 md:p-6 text-center hover-lift hover-glow-${stat.color} transition-all duration-300`}>
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${bgColor} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <Icon size={28} className={textColor} />
                  </div>
                  <div className="text-3xl font-bold font-fixedsys text-white mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              )
            })}
          </div>
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
            {/* Второстепенная кнопка CTA - ЗАВЕРШЕНО */}
            <button
              className="px-6 py-3 border border-teal-700 text-teal-400 hover:bg-teal-950/50 rounded-lg font-fixedsys transition-all hover-lift"
              onClick={() => smoothScrollTo("ai-solutions")} // Добавляем действие - прокрутка к секции решений
            >
              Подробнее о решениях
            </button>
            {/* --- Конец завершенного кода --- */}
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
