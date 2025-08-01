"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import AiHero from "@/components/services/ai-hero"
import AiSolutions from "@/components/services/ai-solutions"
import AiIntegration from "@/components/services/ai-integration"
import AiCases from "@/components/services/ai-cases"
import BlogSection from '@/components/blog-section'
import AiPackages from "@/components/services/ai-packages"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function AiSolutionsPage() {
  const [scrolled, setScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Этот флаг нужен, чтобы избежать ошибок гидратации при доступе к window
    setIsMounted(true)

    // Проверяем наличие window перед доступом к scrollY
    if (typeof window !== 'undefined') {
      setScrolled(window.scrollY > 20)
    }

    const handleScroll = () => {
      // Убедимся, что window доступен
      if (typeof window !== 'undefined') {
        setScrolled(window.scrollY > 20)
      }
    }

    // Добавляем слушатель только если window доступен
    if (typeof window !== 'undefined') {
        window.addEventListener("scroll", handleScroll)
        // Возвращаем функцию очистки, которая удалит слушатель
        return () => window.removeEventListener("scroll", handleScroll)
    }
  }, []) // Пустой массив зависимостей, эффект выполнится один раз после монтирования

  // Пока компонент не смонтирован на клиенте, показываем заглушку или ничего
  // Это предотвращает ошибки гидратации
  if (!isMounted) {
    // Можно вернуть null или простой div-заглушку
    return <div className="min-h-screen bg-[#0b101b]"></div>;
  }

  // Основная разметка страницы, рендерится только на клиенте или после гидратации
  return (
    <div className="min-h-screen bg-[#0b101b] text-white flex flex-col"> {/* Добавлен flex flex-col для прижатия футера */}
      <Header scrolled={scrolled} />

      <main className="flex-grow"> {/* Добавлен flex-grow, чтобы main занимал доступное пространство */}
        <AiHero />
        <AiSolutions />
        <AiIntegration />
        <AiCases />
        <AiPackages />
        <BlogSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  )
}
// --- Лишние строки ниже были удалены ---
//    </div>
//  )
//}
