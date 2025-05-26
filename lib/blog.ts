// lib/blog.ts - Версия без использования fs модуля
import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

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

// Статичные данные блога (временное решение)
const blogData: BlogMeta[] = [
  {
    slug: "digital-marketing-2024",
    title: "Цифровой маркетинг в медицине: тренды 2024 года",
    description: "Разбираем основные тенденции цифрового маркетинга в healthcare сфере и прогнозы на будущий год",
    date: "2024-05-20",
    category: "Маркетинг",
    tags: ["цифровой маркетинг", "healthcare", "тренды", "медицина"],
    image: "/blog/images/digital-marketing-2024.jpg",
    readTime: 5
  },
  {
    slug: "medical-seo-guide",
    title: "SEO для медицинских сайтов: полное руководство",
    description: "Подробное руководство по поисковой оптимизации медицинских сайтов с учетом требований YMYL",
    date: "2024-05-15",
    category: "SEO",
    tags: ["SEO", "медицинские сайты", "YMYL", "поисковая оптимизация"],
    image: "/blog/images/medical-seo-guide.jpg",
    readTime: 8
  },
  {
    slug: "diagnostika-serdca",
    title: "Современная диагностика сердечно-сосудистых заболеваний",
    description: "Обзор современных методов диагностики сердечно-сосудистых заболеваний: от классической ЭКГ до инновационных технологий",
    date: "2024-05-25",
    category: "Кардиология",
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
    slug: "marketing-klinik-2024",
    title: "Маркетинг частных клиник: эффективные стратегии 2024",
    description: "Разбираем работающие стратегии продвижения частных медицинских центров в условиях высокой конкуренции",
    date: "2024-05-05",
    category: "Маркетинг",
    tags: ["маркетинг клиник", "стратегии продвижения", "частная медицина", "реклама"],
    image: "/blog/images/clinic-marketing.jpg",
    readTime: 9
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

// Контент статей
const blogContent: Record<string, string> = {
  "digital-marketing-2024": `
# Цифровой маркетинг в медицине: тренды 2024 года

Медицинская индустрия стремительно адаптируется к цифровым изменениям. В этой статье мы рассмотрим **ключевые тренды** цифрового маркетинга в healthcare на 2024 год.

## Основные тенденции

### 1. Персонализированный контент

Пациенты все больше ожидают **персонализированный подход** к коммуникации. Медицинские учреждения должны:

- Сегментировать аудиторию по возрасту и потребностям
- Создавать целевой контент для разных групп пациентов
- Использовать данные для улучшения пользовательского опыта

### 2. Телемедицина и цифровые консультации

*Телемедицина* стала неотъемлемой частью современного здравоохранения:

> **Важно:** 78% пациентов готовы использовать телемедицинские услуги для консультаций.

Медицинские центры должны интегрировать телемедицину в свою маркетинговую стратегию.

## Практические рекомендации

<Alert type="success">
**Совет эксперта:** Начните с аудита вашего текущего цифрового присутствия, прежде чем внедрять новые стратегии.
</Alert>

1. **Оптимизируйте сайт** для мобильных устройств
2. **Развивайте контент-маркетинг** с фокусом на образование пациентов
3. **Используйте социальные сети** для построения доверия

## Заключение

Цифровой маркетинг в медицине требует деликатного подхода, учитывающего специфику отрасли и потребности пациентов.

<Highlight>
Успешная цифровая стратегия в healthcare строится на доверии, экспертности и персонализации.
</Highlight>
  `,
  
  "medical-seo-guide": `
# SEO для медицинских сайтов: полное руководство

Поисковая оптимизация медицинских сайтов имеет свои **особенности и требования**. В этом руководстве разберем все аспекты SEO для healthcare.

## Особенности медицинского SEO

### YMYL-требования Google

Медицинские сайты попадают под категорию *"Your Money or Your Life"* (YMYL), что означает повышенные требования к:

- **Экспертности** (Expertise)
- **Авторитетности** (Authoritativeness)  
- **Достоверности** (Trustworthiness)

### Ключевые факторы ранжирования

<Alert type="info">
Google особенно строго оценивает медицинские сайты из-за их влияния на здоровье и безопасность людей.
</Alert>

## Техническая оптимизация

### Обязательные страницы

1. **О клинике** - с информацией о лицензиях
2. **Врачи** - с указанием квалификации
3. **Политика конфиденциальности**
4. **Контакты** - с полными данными

## Контентная стратегия

| Тип контента | Цель | Примеры |
|--------------|------|---------|
| Образовательный | Информирование | Статьи о заболеваниях |
| Сервисный | Описание услуг | Страницы процедур |
| Экспертный | Демонстрация опыта | Кейсы лечения |

<Highlight>
Весь медицинский контент должен быть написан или проверен квалифицированными специалистами.
</Highlight>

## Локальное SEO

Для медицинских учреждений критически важна **локальная оптимизация**:

- Настройка Google My Business
- Сбор и обработка отзывов пациентов
- Локальные ключевые слова
- NAP-консистентность

---

*Нужна помощь с SEO вашего медицинского сайта? Обратитесь к экспертам Hippocrat Digital!*
  `,

  "diagnostika-serdca": `
# Современная диагностика сердечно-сосудистых заболеваний

Сердечно-сосудистые заболевания остаются **ведущей причиной смертности** во всем мире. Ранняя и точная диагностика является ключевым фактором успешного лечения и профилактики осложнений.

## Классические методы диагностики

### Электрокардиография (ЭКГ)

**ЭКГ** остается золотым стандартом первичной диагностики сердечных заболеваний. Этот метод позволяет:

- Выявить нарушения ритма сердца
- Диагностировать ишемические изменения
- Определить признаки гипертрофии камер сердца
- Оценить проводящую систему сердца

<Alert type="info">
**Важно знать:** Стандартная ЭКГ фиксирует активность сердца только в течение нескольких секунд. Для выявления преходящих нарушений используется холтеровское мониторирование.
</Alert>

### Эхокардиография (УЗИ сердца)

*Эхокардиография* предоставляет детальную информацию о структуре и функции сердца:

#### Основные параметры оценки:

1. **Сократительная функция левого желудочка**
2. **Состояние клапанного аппарата**
3. **Толщина стенок миокарда**
4. **Размеры камер сердца**
5. **Наличие жидкости в перикарде**

## Современные методы визуализации

### Компьютерная томография сердца (КТ)

**Мультиспиральная компьютерная томография** (МСКТ) с контрастированием позволяет:

- Визуализировать коронарные артерии неинвазивно
- Оценить степень кальциноза сосудов
- Выявить аномалии развития сердца
- Диагностировать тромбоэмболию легочной артерии

<Highlight>
КТ-коронарография может заменить инвазивную коронарографию у пациентов с низким и промежуточным риском ИБС.
</Highlight>

## Заключение

Современная диагностика сердечно-сосудистых заболеваний стремительно развивается благодаря внедрению новых технологий. **Ключевой задачей** остается разумное сочетание классических и инновационных методов.
  `
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
  if (!post) return null

  const content = blogContent[slug] || `# ${post.title}\n\nСодержимое статьи будет добавлено позже.`

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
