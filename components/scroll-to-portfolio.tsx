'use client'

import { useEffect } from 'react'

export default function ScrollToPortfolio() {
  useEffect(() => {
    // Небольшая задержка чтобы страница успела отрендериться
    const timer = setTimeout(() => {
      const portfolioSection = document.getElementById('portfolio')
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ 
          behavior: 'instant', 
          block: 'start' 
        })
      }
    }, 50)

    return () => clearTimeout(timer)
  }, [])

  return null // Компонент ничего не рендерит
}
