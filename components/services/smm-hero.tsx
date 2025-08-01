"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare, Camera, TrendingUp, Users } from "lucide-react"
import { useState, useEffect } from "react"

// Instagram SVG компонент
const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      fill="currentColor"
      d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0-2.16C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.39C1.34 2.69.93 3.36.62 4.15.32 4.91.12 5.79.06 7.06.01 8.34 0 8.75 0 12s.01 3.66.06 4.94c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.64.5 2.91.56C8.34 23.99 8.75 24 12 24s3.66-.01 4.94-.06c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.39.67-.67 1.08-1.34 1.39-2.13.3-.76.5-1.64.56-2.91.05-1.28.06-1.69.06-4.94s-.01-3.66-.06-4.94c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.39-2.13C20.31 1.34 19.64.93 18.85.62 18.09.32 17.21.12 15.94.06 14.66.01 14.25 0 12 0zm0 5.84c-3.4 0-6.16 2.76-6.16 6.16s2.76 6.16 6.16 6.16 6.16-2.76 6.16-6.16-2.76-6.16-6.16-6.16zm0 10.15c-2.2 0-3.99-1.79-3.99-3.99S9.8 8.01 12 8.01s3.99 1.79 3.99 3.99-1.79 3.99-3.99 3.99zm6.4-11.85c-.8 0-1.44-.64-1.44-1.44s.64-1.44 1.44-1.44 1.44.64 1.44 1.44-.64 1.44-1.44 1.44z"
    />
  </svg>
)

export default function SmmHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="container mx-auto px-4 pt-32 pb-16 relative overflow-hidden">
      {/* Анимированные декоративные элементы */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '-3s' }}></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className={`md:w-1/2 space-y-6 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm animate-fadeIn">
              SMM для медицинских клиник
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight font-fixedsys">
              <span className="bg-gradient-to-r from-teal-400 via-indigo-500 to-teal-400 bg-clip-text text-transparent animate-gradient">
                Превращаем соцсети в источник пациентов
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 animate-fadeInUp delay-100">
              Комплексное ведение соцсетей с соблюдением медицинской этики. Создаём доверие, привлекаем пациентов и повышаем лояльность к клинике
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-lg font-fixedsys animate-fadeInUp delay-200 active:animate-buttonClick hover-lift"
                onClick={() => scrollToSection("contact")}
              >
                Обсудить SMM-стратегию
              </Button>
            </div>
          </div>
          
          <div className={`md:w-1/2 ${isVisible ? 'animate-fadeInRight delay-200' : 'opacity-0'}`}>
            {/* Анимированная сетка с иконками соцсетей */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-teal-500/30 transition-all hover-lift hover-glow animate-scaleUp delay-300">
                  <div className="w-12 h-12 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 mb-4 group-hover:animate-iconBounce">
                    <Users size={24} />
                  </div>
                  <div className="text-2xl font-bold font-fixedsys text-white mb-2">12.5K</div>
                  <p className="text-slate-400 text-sm">Средний рост подписчиков</p>
                </div>
                
                <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-indigo-500/30 transition-all hover-lift hover-glow animate-scaleUp delay-500">
                  <div className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 mb-4 group-hover:animate-iconBounce">
                    <Camera size={24} />
                  </div>
                  <div className="text-2xl font-bold font-fixedsys text-white mb-2">8.3%</div>
                  <p className="text-slate-400 text-sm">Engagement Rate</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 pt-8">
                <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-teal-500/30 transition-all hover-lift hover-glow animate-scaleUp delay-700">
                  <div className="w-12 h-12 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 mb-4 group-hover:animate-iconBounce">
                    <MessageSquare size={24} />
                  </div>
                  <div className="text-2xl font-bold font-fixedsys text-white mb-2">+35%</div>
                  <p className="text-slate-400 text-sm">Увеличение записей</p>
                </div>
                
                <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-indigo-500/30 transition-all hover-lift hover-glow animate-scaleUp delay-900">
                  <div className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 mb-4 group-hover:animate-iconBounce">
                    <TrendingUp size={24} />
                  </div>
                  <div className="text-2xl font-bold font-fixedsys text-white mb-2">87%</div>
                  <p className="text-slate-400 text-sm">Рост узнаваемости</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
