"use client"

import { Button } from "@/components/ui/button"
import { MousePointer, Target, TrendingUp, Users } from "lucide-react"

export default function TargetingHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="container mx-auto px-4 pt-32 pb-16 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm">
              Таргетированная реклама
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight font-fixedsys">
              <span className="bg-gradient-to-r from-teal-400 via-indigo-500 to-teal-400 bg-clip-text text-transparent animate-gradient">
                Привлекаем пациентов с помощью точного таргетинга
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300">
              Увеличиваем поток записей в клинику до +200% с соблюдением всех требований законодательства о рекламе медицинских услуг
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-lg font-fixedsys"
                onClick={() => scrollToSection("contact")}
              >
                Получить расчет
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-700 text-teal-400 hover:bg-teal-950/50"
                onClick={() => scrollToSection("targeting-portfolio")}
              >
                Смотреть кейсы
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-teal-500/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 mb-4">
                  <Target size={24} />
                </div>
                <div className="text-2xl font-bold font-fixedsys text-white mb-2">98%</div>
                <p className="text-slate-400 text-sm">Попадание в целевую аудиторию</p>
              </div>
              
              <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-indigo-500/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 mb-4">
                  <TrendingUp size={24} />
                </div>
                <div className="text-2xl font-bold font-fixedsys text-white mb-2">-40%</div>
                <p className="text-slate-400 text-sm">Снижение стоимости лида</p>
              </div>
              
              <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-teal-500/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 mb-4">
                  <Users size={24} />
                </div>
                <div className="text-2xl font-bold font-fixedsys text-white mb-2">+200%</div>
                <p className="text-slate-400 text-sm">Увеличение потока пациентов</p>
              </div>
              
              <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-indigo-500/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 mb-4">
                  <MousePointer size={24} />
                </div>
                <div className="text-2xl font-bold font-fixedsys text-white mb-2">2.5x</div>
                <p className="text-slate-400 text-sm">Рост конверсии в запись</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
