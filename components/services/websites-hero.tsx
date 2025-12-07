"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "phosphor-react"
import { useEffect, useState } from "react"
import PrivacyPolicyModal from "@/components/privacy-policy-modal"

export default function WebsitesHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [phone, setPhone] = useState("")
  const [agreeToPrivacy, setAgreeToPrivacy] = useState(false)
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

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
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!phone || !agreeToPrivacy) {
      alert('Пожалуйста, заполните номер телефона и согласитесь с обработкой персональных данных')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('https://telegram-bot-proxy.vercel.app/api/send-telegram', {
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
        alert('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.')
        setPhone('')
        setAgreeToPrivacy(false)
      } else {
        alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте снова.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте снова.')
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
                  Оставьте заявку и получите стратегию для роста бизнеса
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="tel"
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="+7 (___) ___ - __ - __"
                      className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-full text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-all duration-300"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-slate-900 font-bold text-lg py-6 rounded-full transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Отправка...' : 'Получить стратегию для роста бизнеса за 0 ₽'}
                  </Button>

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

              {/* Right side - Text */}
              <div className="flex flex-col justify-center space-y-6">
                <p className="text-slate-300 text-lg leading-relaxed">
                  Современный медицинский сайт — это не просто визитная карточка вашей клиники в интернете. 
                  Это мощный инструмент привлечения новых пациентов, который работает 24/7.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Мы создаем сайты, которые вызывают доверие с первых секунд, понятно объясняют преимущества 
                  вашей клиники и делают запись на прием максимально простой и удобной.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Каждый элемент продуман с учетом особенностей медицинской сферы: от соответствия ФЗ-323 
                  и защиты персональных данных до оптимизации для записи через мобильные устройства.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Получите бесплатную консультацию и узнайте, как правильно построенный сайт может увеличить 
                  поток пациентов в вашу клинику на 40-60% уже в первые месяцы работы.
                </p>
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
