// lib/blog.ts - Правильная серверная версия

// Типы для блога
export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  category: string
  tags?: string[]
  image?: string
  content: string
  readTime?: number
}

export interface BlogMeta {
  slug: string
  title: string
  description: string
  date: string
  category: string
  tags?: string[]
  image?: string
  readTime?: number
}

// Метаданные статей
const blogData: BlogMeta[] = [
  {
    slug: "digital-marketing-2025",
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
    image: "/public/gamification-guide.jpg",
    readTime: 8
  },
  {
    slug: "diagnostika-serdca",
    title: "Современная диагностика сердечно-сосудистых заболеваний",
    description: "Обзор современных методов диагностики сердечно-сосудистых заболеваний: от классической ЭКГ до инновационных технологий",
    date: "2024-05-25",
    category: "Медицина",
    tags: ["кардиология", "диагностика", "ЭКГ", "эхокардиография", "современные технологии"],
    image: "/blog/images/heart-diagnostics.jpg",
    readTime: 12
  },
  {
    slug: "telemedicina-trendy",
    title: "Телемедицина: будущее здравоохранения уже здесь",
    description: "Как телемедицинские решения меняют подход к лечению пациентов и какие возможности открывают для медицинских учреждений",
    date: "2024-05-10",
    category: "Технологии",
    tags: ["телемедицина", "цифровые технологии", "healthcare", "инновации"],
    image: "/blog/images/telemedicine-trends.jpg",
    readTime: 7
  },
  {
    slug: "reklama-dlya-klinik",
    title: "Эффективная реклама для частных клиник в 2024 году",
    description: "Разбираем лучшие рекламные каналы и стратегии для привлечения пациентов в частные медицинские центры",
    date: "2024-05-26",
    category: "Реклама",
    tags: ["реклама", "частные клиники", "привлечение пациентов", "маркетинг"],
    image: "/blog/images/clinic-advertising-2024.jpg",
    readTime: 8
  },
  {
    slug: "ai-v-meditsine",
    title: "Искусственный интеллект в медицине: реальность и перспективы",
    description: "Как ИИ уже сейчас помогает врачам в диагностике и лечении, и какие изменения нас ждут в будущем",
    date: "2024-04-30",
    category: "Технологии",
    tags: ["искусственный интеллект", "AI в медицине", "диагностика", "инновации"],
    image: "/blog/images/ai-medicine.jpg",
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

export function getAllPosts(): BlogMeta[] {
  return blogData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
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

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function createExcerpt(content: string, maxLength: number = 150): string {
  // Убираем markdown разметку
  const plainText = content
    .replace(/#{1,6}\s+/g, '') // заголовки
    .replace(/\*\*(.*?)\*\*/g, '$1') // жирный текст
    .replace(/\*(.*?)\*/g, '$1') // курсив
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // ссылки
    .replace(/`(.*?)`/g, '$1') // инлайн код
    .replace(/```[\s\S]*?```/g, '') // блоки кода
    .replace(/>\s+/g, '') // цитаты
    .trim()

  if (plainText.length <= maxLength) {
    return plainText
  }

  return plainText.substring(0, maxLength).trim() + '...'
}
