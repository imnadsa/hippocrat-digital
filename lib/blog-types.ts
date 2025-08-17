// lib/blog-types.ts - Типы и утилиты БЕЗ fs (безопасно для клиента)

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

// Утилиты БЕЗ fs - безопасны для клиента
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
