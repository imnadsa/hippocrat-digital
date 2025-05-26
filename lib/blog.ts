import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content/blog')

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

// Получить все категории
export function getAllCategories(): string[] {
  const posts = getAllPosts()
  const categories = posts.map(post => post.category)
  return Array.from(new Set(categories)).sort()
}

// Получить все теги
export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = posts.flatMap(post => post.tags || [])
  return Array.from(new Set(tags)).sort()
}

// Получить все посты (только метаданные)
export function getAllPosts(): BlogMeta[] {
  // Проверяем существование папки
  if (!fs.existsSync(contentDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(contentDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(contentDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      // Вычисляем время чтения (примерно 200 слов в минуту)
      const wordCount = content.split(/\s+/).length
      const readTime = Math.ceil(wordCount / 200)

      return {
        slug,
        title: data.title || 'Без названия',
        description: data.description || '',
        date: data.date || new Date().toISOString(),
        category: data.category || 'Общее',
        tags: data.tags || [],
        image: data.image || null,
        readTime
      }
    })

  // Сортируем по дате (новые первыми)
  return allPostsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Получить пост по slug
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Вычисляем время чтения
    const wordCount = content.split(/\s+/).length
    const readTime = Math.ceil(wordCount / 200)

    return {
      slug,
      title: data.title || 'Без названия',
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      category: data.category || 'Общее',
      tags: data.tags || [],
      image: data.image || null,
      content,
      readTime
    }
  } catch (error) {
    console.error(`Ошибка при чтении поста ${slug}:`, error)
    return null
  }
}

// Получить посты по категории
export function getPostsByCategory(category: string): BlogMeta[] {
  const allPosts = getAllPosts()
  return allPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  )
}

// Получить посты по тегу
export function getPostsByTag(tag: string): BlogMeta[] {
  const allPosts = getAllPosts()
  return allPosts.filter(post => 
    post.tags?.some(postTag => 
      postTag.toLowerCase() === tag.toLowerCase()
    )
  )
}

// Поиск постов
export function searchPosts(query: string): BlogMeta[] {
  const allPosts = getAllPosts()
  const searchTerm = query.toLowerCase()
  
  return allPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.description.toLowerCase().includes(searchTerm) ||
    post.category.toLowerCase().includes(searchTerm) ||
    post.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
  )
}

// Получить похожие посты
export function getSimilarPosts(currentSlug: string, limit: number = 3): BlogMeta[] {
  const currentPost = getPostBySlug(currentSlug)
  if (!currentPost) return []

  const allPosts = getAllPosts()
  const otherPosts = allPosts.filter(post => post.slug !== currentSlug)

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

// Утилита для форматирования даты
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Утилита для создания excerpt из контента
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
