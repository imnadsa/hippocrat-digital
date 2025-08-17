// lib/blog.ts - Серверная версия с fs

// Импортируем типы и утилиты из безопасного файла
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
    description: "Исследуем, как игровые механики (награды, челленджи, трекеры прогресса) используются в приложениях для здоровья. Делимся идеями, как создать приложение, которое мотивирует пациентов придерживаться лечения или вести здоровый образ жизни.",
    date: "2025-05-15",
    category: "AI",
    tags: ["AI", "ИИ в медицине", "Медицинский маркетинг"],
    image: "/blog/images/gamification-guide.jpg",
    readTime: 8
  },
  {
    slug: "ai-inmed",
    title: "Чат-боты и ИИ-ассистенты: автоматизация коммуникации с пациентами",
    description: "Анализируем, как чат-боты на базе ИИ помогают клиникам отвечать на вопросы пациентов, записывать на приём и напоминать о приёме лекарств. Делимся примерами успешных чат-ботов и советами по их разработке для медицинских учреждений.",
    date: "2025-05-25",
    category: "AI автоматизации",
    tags: ["AI автоматизация", "диагностика", "ЭКГ", "эхокардиография", "современные технологии"],
    image: "/blog/images/ai-inmed.jpg",
    readTime: 9
  },
  {
    slug: "seo-website",
    title: "SEO-диагностика сайта клиники: 7 симптомов, что пациенты вас не находят",
    description: "Отсутствие на первых позициях в поисковых системах — это не просто упущенная выгода. Это критический диагноз, который говорит о том, что ваш главный цифровой актив «болен». И как в медицине, чем раньше вы заметите симптомы и начнете лечение тем быстрее и эффективнее будет выздоровление.",
    date: "2025-06-25",
    category: "Сайты",
    tags: ["seo", "seo решения", "создание сайтов", "метаданные"],
    image: "/blog/images/seo-website.jpg",
    readTime: 5
  },
  {
    slug: "target-blog",
    title: "Хирургическая точность в рекламе клиники: как не слить бюджет и привлечь «своего» пациента",
    description: "Конкретика по контекстной и таргетированной рекламе. Как таргетироваться на жителей определенного района для клиники у дома. Как рекламировать высокомаржинальные услуги (имплантация, ЭКО, лазерная коррекция) на правильную аудиторию. Как проходить модерацию с чувствительными темами (косметология, гинекология) и писать объявления, которые вызывают доверие, а не отторжение.",
    date: "2025-05-26",
    category: "Реклама",
    tags: ["реклама", "частные клиники", "привлечение пациентов", "маркетинг"],
    image: "/blog/images/target-blog.jpg",
    readTime: 8
  },
  {
    slug: "anatomy-trust",
    title: "Анатомия доверия: как сайт, врачи и отзывы убеждают пациента записаться на прием",
    description: "Представьте себе цифровое рукопожатие. Это тот самый невидимый, но абсолютно реальный контакт, который происходит в первые секунды, когда потенциальный пациент открывает сайт вашей клиники. Будет ли это рукопожатие крепким, уверенным и теплым, вызывающим мгновенное расположение? Или оно окажется вялым, холодным и неуверенным, заставляя инстинктивно отдернуть руку и закрыть вкладку?",
    date: "2025-06-30",
    category: "Технологии",
    tags: ["Лояльность паицента", "маркетинг", "привлечение пациентов", "репутация"],
    image: "/blog/images/anatomy-trust.jpg",
    readTime: 10
  }
]

// Функция для чтения контента статьи из файла - ТОЛЬКО на сервере
function getArticleContent(slug: string): string {
  // Проверяем, что мы на сервере
  if (typeof window !== 'undefined') {
    console.log('Running in browser - returning fallback content')
    return `# ${slug}\n\nЗагружается...`
  }

  try {
    // Динамический импорт fs только на сервере
    const fs = require('fs')
    const path = require('path')
    
    // Читаем из public/content/blog/
    const filePath = path.join(process.cwd(), 'public', 'content', 'blog', `${slug}.md`)
    
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`)
      throw new Error(`Article ${slug} not found`)
    }
    
    const content = fs.readFileSync(filePath, 'utf8')
    console.log(`Successfully loaded article ${slug} from ${filePath}`)
    return content
  } catch (error) {
    console.error(`Error loading article ${slug}:`, error)
    // Возвращаем заглушку с информацией об ошибке
    return `# ${slug}

К сожалению, содержимое этой статьи временно недоступно.

Возможные причины:
- Файл \`${slug}.md\` не найден в папке \`public/content/blog/\`
- Проблема с загрузкой файла

Путь к файлу: \`public/content/blog/${slug}.md\`
    `
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
  const post = blogData.find(p => p.slug === slug)
  if (!post) {
    console.log(`Post metadata not found for slug: ${slug}`)
    return null
  }

  console.log(`Loading content for post: ${slug}`)
  const content = getArticleContent(slug)

  return {
    ...post,
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

  // Сортируем по релевантности (категория + теги)
  const scoredPosts = otherPosts.map(post => {
    let score = 0
    
    // Бонус за ту же категорию
    if (post.category === currentPost.category) {
      score += 10
    }
    
    // Бонус за общие теги
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
