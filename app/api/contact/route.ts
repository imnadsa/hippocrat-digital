// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'

// Типы для форм
interface CTAFormData {
  name: string
  contact: string
  service?: string
  message?: string
}

interface ContactFormData {
  name: string
  email: string
  phone: string
  clinic?: string
  message?: string
}

interface ModalFormData {
  name: string
  phone: string
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('API called with data:', body)

    // Ваши данные бота из переменных окружения
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Missing Telegram credentials')
      return NextResponse.json(
        { success: false, message: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Определяем тип формы и формируем сообщение
    let telegramMessage = ''
    
    // Если это форма из CTA секции (есть поле contact)
    if (body.contact) {
      const { name, contact, service, message }: CTAFormData = body
      
      telegramMessage = `
🔔 <b>Новая заявка на КП с Hippocrat Digital</b>

👤 <b>Имя:</b> ${name}
📞 <b>Контакт:</b> ${contact}
🛠 <b>Услуга:</b> ${service || 'Не выбрана'}

💬 <b>Сообщение:</b>
${message || 'Не указано'}

📅 <b>Дата:</b> ${new Date().toLocaleString('ru-RU', {
        timeZone: 'Europe/Moscow',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      })} (МСК)
      `.trim()
    } 
    // Если это обычная контактная форма (есть поля email, phone)
    else if (body.email && body.phone) {
      const { name, email, phone, clinic, message }: ContactFormData = body
      
      telegramMessage = `
🔔 <b>Новая заявка с формы контактов Hippocrat Digital</b>

👤 <b>Имя:</b> ${name}
📧 <b>Email:</b> ${email}
📞 <b>Телефон:</b> ${phone}
🏥 <b>Клиника:</b> ${clinic || 'Не указана'}

💬 <b>Сообщение:</b>
${message || 'Не указано'}

📅 <b>Дата:</b> ${new Date().toLocaleString('ru-RU', {
        timeZone: 'Europe/Moscow',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      })} (МСК)
      `.trim()
    }
    // Если это модальное окно (только name и phone, БЕЗ email)
    else if (body.phone && body.name && !body.email) {
      const { name, phone }: ModalFormData = body
      
      telegramMessage = `
🔔 <b>Новая заявка из попапа "Обсудить проект"</b>

👤 <b>Имя:</b> ${name}
📞 <b>Телефон:</b> ${phone}

📅 <b>Дата:</b> ${new Date().toLocaleString('ru-RU', {
        timeZone: 'Europe/Moscow',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      })} (МСК)
      `.trim()
    }
    // Если структура данных не совпадает
    else {
      console.error('Unknown form data structure:', body)
      return NextResponse.json(
        { success: false, message: 'Invalid form data' },
        { status: 400 }
      )
    }

    // Отправляем сообщение в Telegram
    console.log('Sending to Telegram...')
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: [
              [
                { text: "✅ Отвечено", callback_data: "replied" },
                { text: "📞 Позвонить", callback_data: "call" }
              ]
            ]
          }
        }),
      }
    )

    console.log('Telegram response status:', telegramResponse.status)

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.text()
      console.error('Telegram API error:', errorData)
      return NextResponse.json(
        { success: false, message: 'Telegram API error: ' + errorData },
        { status: 500 }
      )
    }

    console.log('Message sent successfully!')
    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Server error: ' + (error instanceof Error ? error.message : 'Unknown error') },
      { status: 500 }
    )
  }
}
