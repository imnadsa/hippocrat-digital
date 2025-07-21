export interface CaseData {
  id: string
  title: string
  subtitle: string
  category: string
  shortDescription: string
  images: string[]
  metrics: {
    before: string
    after: string
    improvement: string
    label: string
  }[]
  content: {
    challenge: string
    solution: string
    results: string
    details: string[]
  }
  tags: string[]
  // SEO данные
  seo: {
    title: string
    description: string
    keywords: string[]
  }
  // Дата создания для сортировки
  createdAt: string
}
