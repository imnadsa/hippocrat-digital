"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import PrivacyPolicyModal from "@/components/privacy-policy-modal"
import { CheckCircle2, Quote, TrendingUp } from "lucide-react"

export default function SmmHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "")
    const limited = cleaned.substring(0, 11)
    
    if (limited.length === 0) return ""
    if (limited.length <= 1) return `+7 (${limited}`
    if (limited.length <= 4) return `+7 (${limited.slice(1)}`
    if (limited.length <= 7) return `+7 (${limited.slice(1, 4)}) ${limited.slice(4)}`
    if (limited.length <= 9) return `+7 (${limited.slice(1, 4)}) ${limited.slice(4, 7)} - ${limited.slice(7)}`
    return `+7 (${limited.slice(1, 4)}) ${limited.slice(4, 7)} - ${limited.slice(7, 9)} - ${limited.slice(9, 11)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhone(formatted)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const cleanPhone = phone.replace(/\D/g, "")
      
      const response = await fetch("https://telegram-bot-proxy.vercel.app/api/send-telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone: `+${cleanPhone}`,
          source: "Форма на странице SMM",
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setName("")
        setPhone("")
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="container mx-auto px-4 pt-32 pb-16 relative overflow-hidden">
        {/* Анимированные декоративные элементы */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '-3s' }}></div>
        
        <div className="relative z-10">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className={`space-y-6 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
              <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm">
                SMM для медицинских клиник
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-fixedsys">
                Превращаем <span className="bg-gradient-to-r from-teal-400 via-indigo-500 to-teal-400 bg-clip-text text-transparent animate-gradient">соцсети в источник пациентов</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                Комплексное ведение социальных сетей с соблюдением медицинской этики и законодательства
              </p>

              <div className="flex justify-center gap-4 pt-6">
                <div className="bg-slate-900/50 rounded-xl border border-slate-800 px-6 py-3">
                  <div className="text-2xl font-bold font-fixedsys text-teal-400">+35%</div>
                  <p className="text-slate-400 text-sm">Рост записей</p>
                </div>
                <div className="bg-slate-900/50 rounded-xl border border-slate-800 px-6 py-3">
                  <div className="text-2xl font-bold font-fixedsys text-indigo-400">8.3%</div>
                  <p className="text-slate-400 text-sm">Engagement</p>
                </div>
                <div className="bg-slate-900/50 rounded-xl border border-slate-800 px-6 py-3">
                  <div className="text-2xl font-bold font-fixedsys text-teal-400">12.5K</div>
                  <p className="text-slate-400 text-sm">Подписчиков</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lead Capture Form Section */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Form */}
              <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-800 p-6 sm:p-8 animate-fadeInLeft">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-fixedsys text-white">
                  Получите полный аудит социальных сетей клиники и стратегию по их улучшению
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      placeholder="+7 (___) ___ - __ - __"
                      value={phone}
                      onChange={handlePhoneChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy-consent"
                      required
                      className="mt-1 w-4 h-4 rounded border-slate-600 text-teal-500 focus:ring-teal-500 focus:ring-offset-slate-900"
                    />
                    <label htmlFor="privacy-consent" className="text-sm text-slate-400">
                      Я согласен(-на) на{" "}
                      <button
                        type="button"
                        onClick={() => setIsPrivacyModalOpen(true)}
                        className="text-teal-400 hover:text-teal-300 underline transition-colors"
                      >
                        обработку персональных данных
                      </button>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-fixedsys text-lg"
                  >
                    {isSubmitting ? "Отправка..." : "Получить аудит"}
                  </button>

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-lg text-green-400 text-sm">
                      ✓ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
                    </div>
                  )}
                  
                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-400 text-sm">
                      ✗ Произошла ошибка. Попробуйте позже или свяжитесь с нами напрямую.
                    </div>
                  )}
                </form>
              </div>

              {/* Description Section */}
              <div className="space-y-8 animate-fadeInRight">
                <div className="prose prose-invert max-w-none space-y-6">
                  
                  {/* Вступление с акцентами */}
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Социальные сети для клиники — это <span className="text-teal-400 font-bold">доверие пациентов</span> до первого визита. 
                    В эпоху цифровой медицины правильный SMM помогает не просто "постить картинки", а <span className="text-indigo-400 font-bold border-b border-indigo-500/30 pb-0.5">строить репутацию экспертов</span>.
                  </p>
                  
                  {/* Блок-цитата */}
                  <div className="relative bg-slate-900/40 border-l-4 border-teal-500 p-6 rounded-r-xl overflow-hidden group hover:bg-slate-900/60 transition-colors">
                    <Quote className="absolute top-4 right-4 w-12 h-12 text-teal-500/10 -rotate-12 group-hover:scale-110 transition-transform" />
                    <p className="text-slate-200 text-base leading-relaxed relative z-10">
                      Мы создаем контент, который <span className="text-white font-bold">снимает страхи пациентов</span> и отвечает на их вопросы еще до звонка в клинику. 
                      <br className="mb-3 block" />
                      <span className="text-sm text-teal-400/80 font-mono mt-2 block">
                        ✓ Полное соответствие ФЗ-323 и закону о рекламе
                      </span>
                    </p>
                  </div>

                  {/* Список преимуществ */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-white font-fixedsys text-lg mb-4">Что входит в наш подход:</h3>
                    <ul className="space-y-3">
                      {[
                        "Создание экспертного и образовательного контента",
                        "Работа с репутацией и соц. сетями (SERM)",
                        "Таргетированная реклама на целевую аудиторию",
                        "Аналитика отслеживания результата"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                          <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

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
