'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { X, ArrowLeft, ArrowRight } from 'phosphor-react'
import { Button } from '@/components/ui/button'
import { CaseData } from '@/lib/types/case'
import { getAdjacentCases } from '@/lib/cases'
import Image from 'next/image'

interface CasePageClientProps {
  caseData: CaseData
}

export default function CasePageClient({ caseData }: CasePageClientProps) {
  const router = useRouter()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  // Блокировка скролла
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  // Закрытие по ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  // Получаем соседние кейсы для навигации
  const { prev: prevCase, next: nextCase } = getAdjacentCases(caseData.id)

  // Навигация между кейсами
  const goToPrevCase = () => {
    if (prevCase) router.push(`/cases/${prevCase}`)
  }

  const goToNextCase = () => {
    if (nextCase) router.push(`/cases/${nextCase}`)
  }

  // Закрытие (возврат на главную с якорем)
  const handleClose = () => {
    // Сначала переходим на главную
    router.push('/')
    
    // Затем прокручиваем к портфолио
    setTimeout(() => {
      const portfolioSection = document.getElementById('portfolio')
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  // Обработка формы
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  // Навигация по изображениям
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === caseData.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? caseData.images.length - 1 : prev - 1
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm">
      {/* Backdrop - клик для закрытия */}
      <div 
        className="absolute inset-0"
        onClick={handleClose}
      />
      
      {/* Навигация между кейсами */}
      {prevCase && (
        <button
          onClick={goToPrevCase}
          className="fixed left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900/80 hover:bg-slate-900 rounded-full flex items-center justify-center text-white transition-all duration-200 z-10"
          aria-label="Предыдущий кейс"
        >
          <ArrowLeft size={24} weight="bold" />
        </button>
      )}
      
      {nextCase && (
        <button
          onClick={goToNextCase}
          className="fixed right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900/80 hover:bg-slate-900 rounded-full flex items-center justify-center text-white transition-all duration-200 z-10"
          aria-label="Следующий кейс"
        >
          <ArrowRight size={24} weight="bold" />
        </button>
      )}

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] md:max-h-[85vh] bg-slate-900 md:rounded-t-2xl md:rounded-b-2xl overflow-hidden animate-slideUp md:animate-scaleUp z-10">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white font-fixedsys">
                {caseData.title}
              </h1>
              <p className="text-teal-400 text-sm md:text-base">{caseData.subtitle}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="text-slate-400 hover:text-white hover:bg-slate-800"
              aria-label="Закрыть кейс"
            >
              <X size={24} weight="bold" />
            </Button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)] md:max-h-[calc(85vh-100px)]">
          <div className="p-4 md:p-6 space-y-8">
            {/* Category Badge */}
            <div className="inline-block px-3 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm">
              {caseData.category}
            </div>

            {/* Image Gallery */}
            <div className="relative">
              <div className="relative aspect-video bg-slate-800 rounded-xl overflow-hidden">
                <Image
                  src={caseData.images[currentImageIndex]}
                  alt={`Кейс ${caseData.title} - изображение ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                />
                
                {/* Navigation arrows */}
                {caseData.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900/80 hover:bg-slate-900 rounded-full flex items-center justify-center text-white transition-all duration-200"
                      aria-label="Предыдущее изображение"
                    >
                      <ArrowLeft size={20} weight="bold" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900/80 hover:bg-slate-900 rounded-full flex items-center justify-center text-white transition-all duration-200"
                      aria-label="Следующее изображение"
                    >
                      <ArrowRight size={20} weight="bold" />
                    </button>
                  </>
                )}
              </div>
              
              {/* Image indicators */}
              {caseData.images.length > 1 && (
                <div className="flex justify-center mt-4 space-x-2">
                  {caseData.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'bg-teal-400 w-6' 
                          : 'bg-slate-600 hover:bg-slate-500'
                      }`}
                      aria-label={`Показать изображение ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {caseData.metrics.map((metric, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-4 text-center">
                  <div className="text-slate-400 text-sm mb-2">{metric.label}</div>
                  <div className="text-red-400 text-lg font-bold mb-1">{metric.before}</div>
                  <div className="text-xs text-slate-500 mb-2">↓</div>
                  <div className="text-teal-400 text-lg font-bold mb-1">{metric.after}</div>
                  <div className="text-teal-400 text-sm font-medium">{metric.improvement}</div>
                </div>
              ))}
            </div>

            {/* Content Sections */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white mb-3 font-fixedsys">Задача</h2>
                <div className="text-slate-300 leading-relaxed whitespace-pre-line">{caseData.content.challenge}</div>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3 font-fixedsys">Решение</h2>
                <div className="text-slate-300 leading-relaxed whitespace-pre-line mb-4">{caseData.content.solution}</div>
                <ul className="space-y-2">
                  {caseData.content.details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3 font-fixedsys">Результаты</h2>
                <div className="text-slate-300 leading-relaxed whitespace-pre-line">{caseData.content.results}</div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {caseData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 font-fixedsys">
                Хотите такой же результат?
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <textarea
                  name="message"
                  placeholder="Расскажите о вашем проекте"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white font-medium py-3"
                >
                  Получить консультацию
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        
        .animate-scaleUp {
          animation: scaleUp 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
