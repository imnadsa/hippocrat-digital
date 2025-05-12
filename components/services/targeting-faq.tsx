"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TargetingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Можно ли рекламировать медицинские услуги в социальных сетях?",
      answer: "Да, можно, но с ограничениями. Согласно ФЗ-38 «О рекламе», нельзя делать заявления о 100% эффективности, использовать «до» и «после», обещать чудесные исцеления. Мы знаем все нюансы и создаем объявления, которые соответствуют закону."
    },
    {
      question: "Какой бюджет нужен для старта таргетированной рекламы?",
      answer: "Минимальный эффективный бюджет — 30-50 тысяч рублей в месяц. Этого достаточно для тестирования 2-3 кампаний и получения первых результатов. Для масштабирования рекомендуем бюджет от 100 тысяч рублей."
    },
    {
      question: "Как быстро будут видны результаты?",
      answer: "Первые лиды обычно приходят в течение 2-3 дней после запуска. Объективную оценку эффективности можно дать через 2-3 недели, когда накопится достаточно данных для анализа и оптимизации."
    },
    {
      question: "Как контролировать расходы на рекламу?",
      answer: "Мы настраиваем ежедневные лимиты расходов для каждой кампании, отправляем ежедневные отчеты о тратах и результатах. Вы всегда знаете, сколько потратили и сколько получили лидов."
    },
    {
      question: "Нужна ли аналитика на сайте клиники?",
      answer: "Да, обязательно! Мы устанавливаем пиксели Facebook и VK, настраиваем Google Analytics и корректно настраиваем отслеживание конверсий. Без аналитики невозможно оптимизировать кампании."
    },
    {
      question: "Какие социальные сети лучше для рекламы медицинских услуг?",
      answer: "Facebook и Instagram показывают лучшие результаты благодаря точному таргетингу. ВКонтакте эффективен для регионов. Telegram хорош для экстренных услуг. Выбираем платформы под конкретную клинику и услуги."
    },
    {
      question: "Можете ли вы работать с нашей CRM?",
      answer: "Да, мы интегрируемся с большинством медицинских CRM: MedClient, МИС, Битрикс24, amoCRM и другими. Настраиваем передачу лидов напрямую в вашу систему для удобства обработки."
    },
    {
      question: "Что входит в ведение рекламных кампаний?",
      answer: "Ежедневная оптимизация кампаний, тестирование новых аудиторий и объявлений, корректировка ставок, анализ конкурентов, регулярная отчетность, обратная связь и рекомендации по улучшению конверсии."
    },
    {
      question: "Даете ли вы гарантии на результат?",
      answer: "Мы даем гарантию на качество работы: соблюдение установок, ведение кампаний согласно стратегии, предоставление отчетов. Результаты зависят от многих факторов (сезонность, бюджет, качество сайта), но мы всегда стремимся к лучшим показателям."
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="targeting-faq" className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            FAQ
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
            Частые{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              вопросы
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о таргетированной рекламе для медицинских клиник
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-800/20 border border-slate-700/30 rounded-xl overflow-hidden">
                <button
                  className="w-full p-6 text-left hover:bg-slate-800/30 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white font-fixedsys pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <ChevronUp size={24} className="text-teal-400" />
                      ) : (
                        <ChevronDown size={24} className="text-teal-400" />
                      )}
                    </div>
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-slate-700/50 pt-4">
                      <p className="text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-8">
            <h3 className="text-xl font-bold font-fixedsys text-white mb-4">
              Не нашли ответ на свой вопрос?
            </h3>
            <p className="text-slate-400 mb-6">
              Оставьте заявку, и мы лично ответим на все ваши вопросы о таргетированной рекламе
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-lg font-fixedsys"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Задать вопрос эксперту
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
