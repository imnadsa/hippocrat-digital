"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "phosphor-react"
import { CheckCircle2, Quote } from "lucide-react"
import { useEffect, useState } from "react"
import PrivacyPolicyModal from "@/components/privacy-policy-modal"

export default function WebsitesHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [phone, setPhone] = useState("")
  const [agreeToPrivacy, setAgreeToPrivacy] = useState(false)
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '')
    
    if (cleaned.length === 0) return ''
    
    let formatted = '+7'
    if (cleaned.length > 1) {
      formatted += ' (' + cleaned.substring(1, 4)
    }
    if (cleaned.length >= 4) {
      formatted += ') ' + cleaned.substring(4, 7)
    }
    if (cleaned.length >= 7) {
      formatted += ' - ' + cleaned.substring(7, 9)
    }
    if (cleaned.length >= 9) {
      formatted += ' - ' + cleaned.substring(9, 11)
    }
    
    return formatted
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const cleaned = value.replace(/\D/g, '')
    
    if (cleaned.length <= 11) {
      setPhone(formatPhoneNumber(cleaned))
    }
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    
    if (!phone) {
      setError('Пожалуйста, заполните номер телефона')
      return
    }

    if (!agreeToPrivacy) {
      setError('Необходимо согласие на обработку персональных данных')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('https://telegram-bot-proxy-ashy.vercel.app/api/send-telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Заявка с сайта (Создание сайтов)',
          phone: phone,
          source: 'Форма на странице создания сайтов'
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setPhone('')
        setAgreeToPrivacy(false)
        
        // Скрываем сообщение об успехе через 5 секунд
        setTimeout(() => {
          setIsSuccess(false)
        }, 5000)
      } else {
        setError('Произошла ошибка при отправке. Попробуйте снова.')
      }
    } catch (error) {
      console.error('Error:', error)
      setError('Произошла ошибка при отправке. Попробуйте снова.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b101b]">
        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-teal-500/8 rounded-full blur-3xl animate-floatBackground"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-indigo-500/8 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-teal-400/5 rounded-full blur-2xl animate-pulse-slow"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className={`inline-block px-4 py-2 rounded-full bg-teal-900/20 border border-teal-700/20 text-teal-400 text-sm font-medium mb-6 backdrop-blur-sm shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
              Создание медицинских сайтов
            </div>

            {/* Main Heading */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold font-fixedsys mb-6 leading-tight transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
              Сайты, которые{" "}
              <span className="bg-gradient-to-r from-teal-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent animate-gradient-text">
                превращают посетителей в пациентов
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-xl sm:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
              Разрабатываем современные сайты для медицинских клиник с акцентом на конверсию. Каждый сайт — это инструмент привлечения пациентов
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-lg font-fixedsys shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 group px-8 py-4"
              >
                Заказать сайт
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("websites-advantages")?.scrollIntoView({ behavior: "smooth" })}
                className="border-slate-700 text-slate-300 hover:bg-slate-800/50 hover:border-teal-500/50 backdrop-blur-sm text-lg px-8 py-4"
              >
                Узнать подробнее
              </Button>
            </div>

            {/* Статистика */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
              <div className="text-center">
                <div className="text-3xl font-bold font-fixedsys text-teal-400 mb-2">85%</div>
                <div className="text-slate-400 text-sm">Конверсия в запись</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-fixedsys text-indigo-400 mb-2">3.2s</div>
                <div className="text-slate-400 text-sm">Время загрузки</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-fixedsys text-teal-400 mb-2">100%</div>
                <div className="text-slate-400 text-sm">Соответствие 152-ФЗ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-[#0b101b]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left side - Form */}
              <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-800/60 p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold font-fixedsys text-white mb-6">
                  Оставьте заявку и получите стратегию по улучшению SEO с минимальным бюджетом
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="+7 (___) ___ - __ - __"
                      className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-full text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-all duration-300"
                    />
                  </div>

                 <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-fixedsys text-lg"
                  >
                    {isSubmitting ? "Отправка..." : "Получить стратегию"}
                  </Button>

                  {/* Success Message */}
                  {isSuccess && (
                    <div className="bg-teal-900/30 border border-teal-500/50 rounded-xl p-4 text-teal-400 text-sm text-center">
                      ✓ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
                    </div>
                  )}

                  {/* Error Message */}
                  {error && (
                    <div className="bg-red-900/30 border border-red-500/50 rounded-xl p-4 text-red-400 text-sm text-center">
                      {error}
                    </div>
                  )}

                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={agreeToPrivacy}
                      onChange={(e) => setAgreeToPrivacy(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-slate-600 text-teal-500 focus:ring-teal-500 focus:ring-offset-slate-900"
                    />
                    <span className="text-sm text-slate-400 leading-relaxed">
                      Я согласен(-на) на{" "}
                      <button
                        type="button"
                        onClick={() => setIsPrivacyModalOpen(true)}
                        className="text-teal-400 hover:text-teal-300 underline transition-colors"
                      >
                        обработку персональных данных
                      </button>
                    </span>
                  </label>
                </form>
              </div>

              {/* Right side - Text Refactored */}
              <div className="space-y-8 animate-fadeInRight">
                <div className="prose prose-invert max-w-none space-y-6">
                  
                  {/* Вступление */}
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Сайт клиники — это <span className="text-teal-400 font-bold">первый контакт</span> с пациентом. 
                    В конкурентной среде важно не просто "быть в сети", а <span className="text-indigo-400 font-bold border-b border-indigo-500/30 pb-0.5">конвертировать визиты в записи</span>.
                  </p>
                  
                  {/* Блок-цитата */}
                  <div className="relative bg-slate-900/40 border-l-4 border-teal-500 p-6 rounded-r-xl overflow-hidden group hover:bg-slate-900/60 transition-colors">
                    <Quote className="absolute top-4 right-4 w-12 h-12 text-teal-500/10 -rotate-12 group-hover:scale-110 transition-transform" />
                    <p className="text-slate-200 text-base leading-relaxed relative z-10">
                      Мы проектируем интерфейсы, которые <span className="text-white font-bold">интуитивно понятны</span> любому пациенту — от записи к врачу до поиска цен. 
                      <br className="mb-3 block" />
                      <span className="text-sm text-teal-400/80 font-mono mt-2 block">
                        ✓ Адаптация под все устройства, поставим на CSM и настроим SEO
                      </span>
                    </p>
                  </div>

                  {/* Список преимуществ */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-white font-fixedsys text-lg mb-4">Ключевые особенности наших сайтов:</h3>
                    <ul className="space-y-3">
                      {[
                        "Продуманная структура и UX для высокой конверсии",
                        "Интеграция с МИС и онлайн-записью",
                        "Полное соответствие 152-ФЗ и требованиям Минздрава",
                        "Высокая скорость загрузки"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                          <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Заключение (вместо блока результата) */}
                  <p className="text-slate-300 text-lg leading-relaxed pt-2">
                    Получите бесплатную консультацию и узнайте, как правильно построенный сайт может увеличить поток пациентов в вашу клинику на <span className="text-white font-bold">40-60%</span> уже в первые месяцы работы.
                  </p>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
    </>
  )
}
