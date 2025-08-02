"use client"

import { useState, useEffect } from "react"
import { Plus, Minus } from "phosphor-react"

export default function ContextualFaq() {
  const [isVisible, setIsVisible] = useState(false)
  const [openItems, setOpenItems] = useState<number[]>([0])

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const faqItems = [
    {
      question: "Сколько времени нужно для настройки контекстной рекламы?",
      answer: "Полная настройка кампаний занимает 3-5 рабочих дней. За это время мы проводим анализ ключевых слов, создаем структуру кампаний, пишем объявления и настраиваем все параметры таргетинга. Первые результаты вы увидите уже через 24 часа после запуска."
    },
    {
      question: "Какой рекламный бюджет рекомендуется для медицинской клиники?",
      answer: "Рекомендуемый бюджет зависит от конкуренции в вашем регионе и количества услуг. Для небольших клиник - от 30 000 ₽/месяц, для средних - от 50 000 ₽/месяц, для крупных центров - от 100 000 ₽/месяц. Мы поможем определить оптимальный бюджет на основе анализа вашей ниши."
    },
    {
      question: "Как обеспечивается соблюдение ФЗ-38 в рекламе?",
      answer: "Мы специализируемся на медицинском маркетинге и знаем все требования ФЗ-38. Все объявления проходят проверку на соответствие закону: исключаем запрещенные формулировки, указываем лицензии, добавляем обязательные предупреждения и следим за обновлениями законодательства."
    },
    {
      question: "Можно ли отследить, какие пациенты пришли с рекламы?",
      answer: "Да, мы настраиваем полную систему аналитики с отслеживанием звонков, заявок с сайта и записей на прием. Вы будете видеть точное количество обращений, их стоимость и конверсию в записи. Также настраиваем интеграцию с CRM для полного контроля воронки."
    },
    {
      question: "Какие результаты можно ожидать от контекстной рекламы?",
      answer: "Результаты зависят от многих факторов: конкуренции, бюджета, качества сайта. В среднем наши клиники получают: CTR 8-15%, конверсию сайта 3-7%, стоимость лида 500-2000 ₽. Первые звонки появляются в первый день запуска, стабильные результаты - через 2-4 недели оптимизации."
    },
    {
      question: "Что входит в ведение рекламных кампаний?",
      answer: "В ведение входит: еженедельный мониторинг и оптимизация ставок, добавление новых ключевых слов, корректировка минус-слов, A/B тестирование объявлений, анализ конкурентов, подготовка отчетов, техническая поддержка и консультации по улучшению эффективности."
    }
  ]

  return (
    <section id="contextual-faq" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-40 h-40 bg-teal-500/8 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 bg-indigo-500/8 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-2 rounded-full bg-teal-900/20 border border-teal-700/20 text-teal-400 text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm shadow-lg">
            Частые вопросы
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-fixedsys leading-tight">
            Ответы на{" "}
            <span className="bg-gradient-to-r from-teal-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent animate-gradient-text">
              частые вопросы
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Всё, что нужно знать о контекстной рекламе для медицинских клиник
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => {
            const isOpen = openItems.includes(index)
            
            return (
              <div 
                key={index}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-800/60 mb-4 overflow-hidden hover:border-teal-500/30 transition-all duration-300 group">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full text-left p-6 sm:p-8 flex items-center justify-between focus:outline-none group-hover:bg-slate-800/20 transition-colors duration-300"
                  >
                    <h3 className="text-base sm:text-lg font-semibold font-fixedsys text-white pr-4 leading-snug">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <Minus size={20} className="text-teal-400 transition-transform duration-300" />
                      ) : (
                        <Plus size={20} className="text-slate-400 group-hover:text-teal-400 transition-colors duration-300" />
                      )}
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-300 ease-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                      <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
