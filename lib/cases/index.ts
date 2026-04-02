import { CaseData } from '@/lib/types/case'
import { onlineOkoCase } from './online-oko'
import { hippocratAiCase } from './hippocrat-ai'
import { yasnyVzorCase } from './yasny-vzor'// 👈 Добавил импорт
import { klinikaIrisCase } from './klinika-iris'

// Объединяем все кейсы
export const allCases: CaseData[] = [
  onlineOkoCase,
  hippocratAiCase,  // 👈 Добавил в массив
  yasnyVzorCase,
  klinikaIrisCase,
  // aiMedicalCase,
]

// Создаем объект для быстрого доступа по slug
export const casesData: Record<string, CaseData> = allCases.reduce((acc, caseData) => {
  acc[caseData.id] = caseData
  return acc
}, {} as Record<string, CaseData>)

// Утилитарные функции
export const getCaseBySlug = (slug: string): CaseData | null => {
  return casesData[slug] || null
}

export const getAllCaseSlugs = (): string[] => {
  return Object.keys(casesData)
}

export const getCasesCount = (): number => {
  return allCases.length
}

// Получить следующий/предыдущий кейс для навигации
export const getAdjacentCases = (currentSlug: string) => {
  const slugs = getAllCaseSlugs()
  const currentIndex = slugs.indexOf(currentSlug)
  
  return {
    prev: currentIndex > 0 ? slugs[currentIndex - 1] : null,
    next: currentIndex < slugs.length - 1 ? slugs[currentIndex + 1] : null
  }
}
