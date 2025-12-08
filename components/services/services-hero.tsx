"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import PrivacyPolicyModal from "@/components/privacy-policy-modal"

export default function ServicesHero() {
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
      
      const response = await fetch("https://telegram-bot-proxy-ashy.vercel.app/api/send-telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone: `+${cleanPhone}`,
          source: "Форма на странице услуг",
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
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
                Наши услуги
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-fixedsys">
                <span className="bg-gradient-to-r from-teal-400 via-indigo-500 to-teal-400 bg-clip-text text-transparent animate-gradient">
                  Комплексные решения
                </span> для медицинского маркетинга
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                Полный спектр digital-услуг для медицинских клиник: от создания сайтов до внедрения ИИ-технологий
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-800 p-8 sm:p-12 text-center animate-fadeInUp">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-fixedsys">
                Получите <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">полный бесплатный</span> аудит клиники
              </h2>
              
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Узнайте, как увеличить поток пациентов и оптимизировать маркетинговые расходы
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
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

                <div className="flex items-start gap-3 text-left">
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
