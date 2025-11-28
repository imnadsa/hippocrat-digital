"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, PaperPlaneTilt } from "phosphor-react"

export default function CtaSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clinic: "",
    message: ""
  })
  
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [error, setError] = useState("")
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")
    setError("")

    try {
      const response = await fetch(
        `https://telegram-bot-proxy-ashy.vercel.app/api/send-telegram`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
          }),
        }
      )

      if (!response.ok) {
        throw new Error('Ошибка отправки')
      }

      setFormStatus("success")
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        clinic: "",
        message: ""
      })

    } catch (error) {
      console.error('Error submitting form:', error)
      setError('Произошла ошибка при отправке. Попробуйте позже или свяжитесь с нами напрямую.')
      setFormStatus("error")
      
      setTimeout(() => {
        setFormStatus("idle")
        setError("")
      }, 5000)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Улучшенные декоративные элементы */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground delay-600"></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-teal-400/5 rounded-full blur-2xl animate-pulse-slow delay-400"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-slate-900/50 rounded-xl border border-slate-800/80 p-8 md:p-10 backdrop-blur-sm hover:border-slate-700/50 transition-all duration-300 animate-scaleUp blur-backdrop">
          <div className="flex flex-col items-center mb-10 text-center animate-fadeInUp">
            <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6 hover:border-teal-500/50 transition-all duration-300">
              Связаться с нами
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-fixedsys animate-fadeInUp delay-100">
              <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent animate-gradient-text text-shadow-lg">
                Готовы увеличить поток пациентов?
              </span>
            </h2>
            <p className="text-slate-300 max-w-2xl animate-fadeInUp delay-200 text-shadow">
              Оставьте заявку, и мы свяжемся с вами для обсуждения возможностей продвижения вашей клиники
            </p>
          </div>

          {formStatus === "success" ? (
            <div className="text-center py-10 animate-scaleUp">
              <div className="w-16 h-16 rounded-full bg-teal-900/30 flex items-center justify-center mx-auto mb-6 animate-iconBounce">
                <CheckCircle size={32} className="text-teal-400" weight="duotone" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-fixedsys text-shadow animate-fadeInUp delay-100">Спасибо за заявку!</h3>
              <p className="text-slate-300 mb-6 animate-fadeInUp delay-200">
                Мы получили ваше сообщение и свяжемся с вами в ближайшее время.
              </p>
              <Button 
                onClick={() => setFormStatus("idle")}
                className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 hover-lift transition-all duration-300 animate-fadeInUp delay-300"
              >
                Отправить еще одну заявку
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Отображение ошибки */}
              {error && (
                <div className="md:col-span-2 p-4 bg-red-900/20 border border-red-700/30 rounded-xl animate-slideInStagger">
                  <p className="text-red-400 text-sm text-center">{error}</p>
                </div>
              )}
              
              {/* Имя */}
              <div className="animate-slideInStagger delay-100">
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2 font-fixedsys">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/70 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white transition-all duration-300 hover:border-slate-600"
                  placeholder="Введите ваше имя"
                />
              </div>

              {/* Email */}
              <div className="animate-slideInStagger delay-200">
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2 font-fixedsys">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/70 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white transition-all duration-300 hover:border-slate-600"
                  placeholder="your@email.com"
                />
              </div>

              {/* Телефон */}
              <div className="animate-slideInStagger delay-300">
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2 font-fixedsys">
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/70 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white transition-all duration-300 hover:border-slate-600"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              {/* Название клиники */}
              <div className="animate-slideInStagger delay-400">
                <label htmlFor="clinic" className="block text-sm font-medium text-slate-300 mb-2 font-fixedsys">
                  Название клиники
                </label>
                <input
                  type="text"
                  id="clinic"
                  name="clinic"
                  value={formData.clinic}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/70 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white transition-all duration-300 hover:border-slate-600"
                  placeholder="Название вашей клиники"
                />
              </div>

              {/* Сообщение */}
              <div className="md:col-span-2 animate-slideInStagger delay-500">
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2 font-fixedsys">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800/70 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white resize-none transition-all duration-300 hover:border-slate-600"
                  placeholder="Расскажите нам о вашей клинике и задачах"
                ></textarea>
              </div>

              {/* Кнопка отправки */}
              <div className="md:col-span-2 mt-4 animate-slideInStagger delay-600">
                <Button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-lg py-3 px-8 font-fixedsys flex items-center justify-center gap-2 hover-lift hover-glow transition-all duration-300">
                  {formStatus === "submitting" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Отправка...</span>
                    </>
                  ) : (
                    <>
                      <span>Отправить заявку</span>
                      <PaperPlaneTilt size={18} className="animate-iconBounce delay-700" weight="duotone" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center animate-slideInStagger delay-700 hover-lift transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-teal-900/30 flex items-center justify-center mx-auto mb-4 animate-iconBounce delay-800 hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white font-fixedsys text-shadow">Email</h3>
            <a href="mailto:info@hippocrat.digital" className="text-teal-400 hover:underline hover:text-teal-300 transition-colors duration-300">
              info@hippocrat.digital
            </a>
          </div>

          <div className="text-center animate-slideInStagger delay-800 hover-lift transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-indigo-900/30 flex items-center justify-center mx-auto mb-4 animate-iconBounce delay-900 hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white font-fixedsys text-shadow">Телефон</h3>
            <a href="tel:+79771004419" className="text-indigo-400 hover:underline hover:text-indigo-300 transition-colors duration-300">
              +7 (977) 100-44-19
            </a>
          </div>

          <div className="text-center animate-slideInStagger delay-900 hover-lift transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-teal-900/30 flex items-center justify-center mx-auto mb-4 animate-iconBounce delay-1000 hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white font-fixedsys text-shadow">Телеграм</h3>
            <a href="https://t.me/imnadsa" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline hover:text-teal-300 transition-colors duration-300">
              @imnadsa
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
