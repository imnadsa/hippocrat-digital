// lib/blog-server.ts - СЕРВЕРНАЯ часть (с fs)

import fs from 'fs'
import path from 'path'
import type { BlogPost, BlogMeta } from './blog-types'

// Метаданные статей
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
  }
]

// Функция чтения контента (только на сервере!)
function getArticleContent(slug: string): string {
  try {
    const contentDirectory = path.join(process.cwd(), 'content', 'blog')
    const filePath = path.join(contentDirectory, `${slug}.md`)
    
    if (!fs.existsSync(filePath)) {
      console.warn(`Article file not found: ${filePath}`)
      return `# Статья "${slug}" не найдена\n\nСодержимое временно недоступно.`
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return fileContents
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error)
    return `# Ошибка загрузки статьи\n\nНе удалось загрузить содержимое статьи "${slug}".`
  }
}

// СЕРВЕРНЫЕ функции (используют fs)
export function getPostBySlug(slug: string): BlogPost | null {
  const postMeta = blogData.find(p => p.slug === slug)
  if (!postMeta) return null

  const content = getArticleContent(slug)
  return { ...postMeta, content }
}
