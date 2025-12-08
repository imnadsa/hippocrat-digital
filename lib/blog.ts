// lib/blog.ts - КЛИЕНТСКАЯ часть (полностью независимая)

import type { BlogMeta } from './blog-types'

// Экспортируем типы
export type { BlogPost, BlogMeta } from './blog-types'
export { formatDate, createExcerpt } from './blog-types'

// ✅ Дублируем метаданные здесь (без fs!)
export const blogData: BlogMeta[] = [
  {
    slug: "digital-marketing-2024",
    title: "Цифровой маркетинг в медицине: тренды 2025 года",
    description: "Разбираем основные тенденции цифрового маркетинга в healthcare сфере и прогнозы на будущий год",
    date: "2025-05-20",
    category: "Маркетинг",
    tags: ["цифровой маркетинг", "healthcare", "тренды", "медицина"],
    image: "/blog/images/digital-marketing-2024.jpg",
    readTime: 5
  },
  {
    slug: "gamification-guide",
    title: "Геймификация в здравоохранении: как мотивировать пациентов следить за здоровьем и приходить в вашу клинику еще раз",
    description: "Исследуем, как игровые механики используются в приложениях для здоровья.",
    date: "2025-05-15",
    category: "AI",
    tags: ["AI", "ИИ в медицине", "Медицинский маркетинг"],
    image: "/blog/images/gamification-guide.jpg",
    readTime: 8
  },
  {
    slug: "ai-inmed",
    title: "Чат-боты и ИИ-ассистенты: автоматизация коммуникации с пациентами",
    description: "Анализируем, как чат-боты на базе ИИ помогают клиникам отвечать на вопросы пациентов.",
    date: "2025-05-25",
    category: "AI автоматизации",
    tags: ["AI автоматизация", "диагностика", "ЭКГ", "эхокардиография", "современные технологии"],
    image: "/blog/images/ai-inmed.jpg",
    readTime: 9
  },
  {
    slug: "seo-website",
    title: "SEO-диагностика сайта клиники: 7 симптомов, что пациенты вас не находят",
    description: "Отсутствие на первых позициях в поисковых системах — это не просто упущенная выгода.",
    date: "2025-06-25",
    category: "Сайты",
    tags: ["seo", "seo решения", "создание сайтов", "метаданные"],
    image: "/blog/images/seo-website.jpg",
    readTime: 5
  },
  {
    slug: "targetirovannaya-reklama-vk-medicina",
    title: "Таргетированная реклама в ВК для медицинских клиник",
    description: "Как привлечь качественных пациентов через ВКонтакте",
    date: "2025-11-01",
    category: "Маркетинг",
    tags: ["реклама", "ВК", "маркетинг", "таргетинг"],
    image: "/blog/images/targetirovannaya-reklama-vk.jpg",
    readTime: 8
  },
  {
    slug: "target-blog",
    title: "Хирургическая точность в рекламе клиники",
    description: "Конкретика по контекстной и таргетированной рекламе.",
    date: "2025-05-26",
    category: "Реклама",
    tags: ["реклама", "частные клиники", "привлечение пациентов", "маркетинг"],
    image: "/blog/images/target-blog.jpg",
    readTime: 8
  },
  {
    slug: "anatomy-trust",
    title: "Анатомия доверия: как сайт, врачи и отзывы убеждают пациента записаться на прием",
    description: "Цифровое рукопожатие с пациентом.",
    date: "2025-06-30",
    category: "Технологии",
    tags: ["Лояльность пациента", "маркетинг", "привлечение пациентов", "репутация"],
    image: "/blog/images/anatomy-trust.jpg",
    readTime: 10
  },
  {
    slug: "agregatory",
    title: "Агрегаторы и отзовики для клиник в 2026: ПроДокторов, НаПоправку, СберЗдоровье, Яндекс.Карты и 2ГИС — полный гид по привлечению пациентов", 
    description: "Агрегаторы дают до 32% пациентов. Разбираем ПроДокторов, НаПоправку, СберЗдоровье, Zoon, 2ГИС и Яндекс.Карты: цены, стратегия, кейсы. Гид для владельцев клиник.",
    date: "2025-12-08",                                
    category: "Маркетинг, Агрегаторы",                            
    tags: ["агрегаторы", "ПроДокторов", "НаПоправку", "ЯндексКарты", "2ГИС", "Отзовики для клиник"], 
    image: "/blog/images/agregatory.jpg",
    readTime: 7                                       
  }
]

// КЛИЕНТСКИЕ функции (БЕЗ чтения файлов)
export function getAllCategories(): string[] {
  const categories = blogData.map(post => post.category)
  return Array.from(new Set(categories)).sort()
}

export function getAllTags(): string[] {
  const tags = blogData.flatMap(post => post.tags || [])
  return Array.from(new Set(tags)).sort()
}

export function getAllPosts(): BlogMeta[] {
  return blogData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostsByCategory(category: string): BlogMeta[] {
  return blogData.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  )
}

export function getPostsByTag(tag: string): BlogMeta[] {
  return blogData.filter(post => 
    post.tags?.some(postTag => 
      postTag.toLowerCase() === tag.toLowerCase()
    )
  )
}

export function searchPosts(query: string): BlogMeta[] {
  const searchTerm = query.toLowerCase()
  
  return blogData.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.description.toLowerCase().includes(searchTerm) ||
    post.category.toLowerCase().includes(searchTerm) ||
    post.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
  )
}

export function getSimilarPosts(currentSlug: string, limit: number = 3): BlogMeta[] {
  const currentPost = blogData.find(p => p.slug === currentSlug)
  if (!currentPost) return []

  const otherPosts = blogData.filter(post => post.slug !== currentSlug)

  const scoredPosts = otherPosts.map(post => {
    let score = 0
    
    if (post.category === currentPost.category) {
      score += 10
    }
    
    const commonTags = post.tags?.filter(tag => 
      currentPost.tags?.includes(tag)
    ) || []
    score += commonTags.length * 5

    return { post, score }
  })

  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post)
}
