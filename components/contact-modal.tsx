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

      setSubmitStatus('success')
      setFormData({
        name: "",
        phone: "",
        agreement: false,
      })
      
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-md bg-slate-900 border border-teal-700/30 rounded-2xl shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        <button 
          onClick={onClose} 
          type="button"
          className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-slate-800/50 transition-colors hover:text-white focus:outline-none"
          aria-label="Закрыть"
        >
          <X size={24} className="text-slate-400 hover:text-white" />
        </button>

        <div className="relative z-10 p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
            Обсудим ваш проект?
          </h2>

          {submitStatus === 'success' && (
            <div className="mb-4 p-3 bg-teal-900/30 border border-teal-700/50 rounded-lg text-teal-400 text-sm">
              ✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-4 p-3 bg-red-900/30 border border-red-700/50 rounded-lg text-red-400 text-sm">
              ❌ Произошла ошибка. Попробуйте еще раз.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Имя"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all disabled:opacity-50"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="+7 (___) __-__-__"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all disabled:opacity-50"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || submitStatus === 'success'}
              className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
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
                <span>✓ Отправлено</span>
              ) : (
                <span>Оставить заявку</span>
              )}
            </Button>

            <div className="flex items-start gap-2 text-xs text-slate-400">
              <input
                type="checkbox"
                name="agreement"
                id="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="mt-1 w-4 h-4 rounded border-slate-600 bg-slate-800 text-teal-500"
              />
              <label htmlFor="agreement">
                Нажимая на кнопку вы даете согласие на обработку персональных данных
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
