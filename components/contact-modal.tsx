"use client"
import { useState } from "react"
import { X } from "phosphor-react"
import { Button } from "@/components/ui/button"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    agreement: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Формируем сообщение для Telegram
      const telegramMessage = `
🔔 <b>Новая заявка из попапа "Обсудить проект"</b>

👤 <b>Имя:</b> ${formData.name}
📞 <b>Телефон:</b> ${formData.phone}

📅 <b>Дата:</b> ${new Date().toLocaleString('ru-RU', {
        timeZone: 'Europe/Moscow',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      })} (МСК)
      `.trim()

      // Отправка в Telegram
      const response = await fetch(
        `https://api.telegram.org/bot8421391298:AAH8mgMZo5FfN1X8KMspISZYuVadBdtoHJM/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: '1053481829',
            text: telegramMessage,
            parse_mode: 'HTML',
          }),
        }
      )

      if (!response.ok) {
        throw new Error('Ошибка отправки')
      }

      setSubmitStatus('success')
      
      // Очищаем форму
      setFormData({
        name: "",
        phone: "",
        agreement: false,
      })
      
      // Закрываем модалку через 2 секунды после успешной отправки
      setTimeout(() => {
        onClose()
        setSubmitStatus('idle')
      }, 2000)

    } catch (error) {
      setSubmitStatus('error')
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-md bg-slate-900/95 border border-teal-700/30 rounded-2xl shadow-2xl shadow-teal-500/10 overflow-hidden animate-scaleUp">
        {/* Декоративные элементы */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-slate-800/50 transition-colors duration-200"
          aria-label="Закрыть"
        >
          <X size={24} className="text-slate-400 hover:text-white" />
        </button>

        {/* Content */}
        <div className="relative z-10 p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 font-fixedsys bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
            Обсудим ваш проект?
          </h2>

          {submitStatus === 'success' && (
            <div className="mb-4 p-3 bg-teal-900/30 border border-teal-700/50 rounded-lg text-teal-400 text-sm">
              ✅ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-4 p-3 bg-red-900/30 border border-red-700/50 rounded-lg text-red-400 text-sm">
              ❌ Произошла ошибка. Попробуйте еще раз или свяжитесь с нами напрямую.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            {/* Имя */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Имя"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200 disabled:opacity-50"
              />
            </div>

            {/* Телефон */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="+7 (___) __-__-__"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200 disabled:opacity-50"
              />
            </div>

            {/* Кнопка отправки */}
            <Button
              type="submit"
              disabled={isSubmitting || submitStatus === 'success'}
              className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white font-medium py-3 rounded-lg transition-all duration-300 hover-lift hover-glow flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                  <span>Отправка...</span>
                </>
              ) : submitStatus === 'success' ? (
                <>
                  <span>✓ Отправлено</span>
                </>
              ) : (
                <>
                  <span>Оставить заявку</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M4.16669 10H15.8334M15.8334 10L10 4.16669M15.8334 10L10 15.8334"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>
              )}
            </Button>

            {/* Соглашение */}
            <div className="flex items-start gap-2 text-xs text-slate-400">
              <input
                type="checkbox"
                name="agreement"
                id="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="mt-1 w-4 h-4 rounded border-slate-600 bg-slate-800 text-teal-500 focus:ring-teal-500/20 focus:ring-2 disabled:opacity-50"
              />
              <label htmlFor="agreement" className="leading-relaxed">
                Нажимая на кнопку «Отправить заявку» вы даете свое согласие на
                обработку своих персональных данных и соглашаетесь с{" "}
                
                  href="#"
                  className="text-teal-400 hover:text-teal-300 underline"
                >
                  Политикой конфиденциальности
                </a>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
