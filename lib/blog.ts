// lib/blog.ts - Работа с файлами из content/blog/

import fs from 'fs'
import path from 'path'

// Импортируем типы и утилиты
export type { BlogPost, BlogMeta } from './blog-types'
export { formatDate, createExcerpt } from './blog-types'

// Метаданные статей
const blogData: import('./blog-types').BlogMeta[] = [
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
  }
]

// Функция чтения контента из файла
function getArticleContent(slug: string): string {
  try {
    // Путь к файлу в папке content/blog
    const contentDirectory = path.join(process.cwd(), 'content', 'blog')
    const filePath = path.join(contentDirectory, `${slug}.md`)
    
    // Проверяем существование файла
    if (!fs.existsSync(filePath)) {
      console.warn(`Article file not found: ${filePath}`)
      return `# Статья "${slug}" не найдена\n\nСодержимое временно недоступно.`
    }
    
    // Читаем файл
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return fileContents
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error)
    return `# Ошибка загрузки статьи\n\nНе удалось загрузить содержимое статьи "${slug}".`
  }
}

// Функции для работы с данными
export function getAllCategories(): string[] {
  const categories = blogData.map(post => post.category)
  return Array.from(new Set(categories)).sort()
}

export function getAllTags(): string[] {
  const tags = blogData.flatMap(post => post.tags || [])
  return Array.from(new Set(tags)).sort()
}

export function getAllPosts(): import('./blog-types').BlogMeta[] {
  return blogData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): import('./blog-types').BlogPost | null {
  const postMeta = blogData.find(p => p.slug === slug)
  if (!postMeta) {
    return null
  }

  // Читаем контент из файла
  const content = getArticleContent(slug)

  return {
    ...postMeta,
    content
  }
}

export function getPostsByCategory(category: string): import('./blog-types').BlogMeta[] {
  return blogData.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  )
}

export function getPostsByTag(tag: string): import('./blog-types').BlogMeta[] {
  return blogData.filter(post => 
    post.tags?.some(postTag => 
      postTag.toLowerCase() === tag.toLowerCase()
    )
  )
}

export function searchPosts(query: string): import('./blog-types').BlogMeta[] {
  const searchTerm = query.toLowerCase()
  
  return blogData.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.description.toLowerCase().includes(searchTerm) ||
    post.category.toLowerCase().includes(searchTerm) ||
    post.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
  )
}

export function getSimilarPosts(currentSlug: string, limit: number = 3): import('./blog-types').BlogMeta[] {
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
