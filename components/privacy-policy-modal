"use client"
import { X } from "phosphor-react"

interface PrivacyPolicyModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-teal-700/30 rounded-2xl shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        <button 
          onClick={onClose} 
          type="button"
          className="absolute top-3 right-3 z-20 p-3 rounded-full hover:bg-slate-700/80 transition-all duration-200 hover:text-white focus:outline-none active:scale-95"
          aria-label="Закрыть"
        >
          <X size={28} className="text-slate-400 hover:text-white transition-colors" weight="bold" />
        </button>

        <div className="relative z-10 p-8 overflow-y-auto max-h-[90vh]">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
            Согласие на обработку и передачу персональных данных
          </h2>

          <div className="text-slate-300 space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              Настоящим, оставляя заявку на веб-сайте <a href="https://hippocrat-digital.ru/" className="text-teal-400 hover:text-teal-300 transition-colors">https://hippocrat-digital.ru/</a> через заполнение специальной формы, ознакомившись с Политикой обработки персональных данных, действуя свободно, своей волей и в своих интересах, а также подтверждая свою дееспособность, предоставляю свое согласие на обработку персональных данных (далее – Согласие) <strong className="text-white">Индивидуальному предпринимателю Антошкину Александру Григорьевичу (ИНН 772799039046, ОГРНИП: 325774600768729)</strong> <a href="mailto:antoshkin.info@bk.ru" className="text-teal-400 hover:text-teal-300 transition-colors">antoshkin.info@bk.ru</a>, <a href="tel:+79771004419" className="text-teal-400 hover:text-teal-300 transition-colors">+7 (977) 100-44-19</a>, которому принадлежит веб-сайт <a href="https://hippocrat-digital.ru/" className="text-teal-400 hover:text-teal-300 transition-colors">https://hippocrat-digital.ru/</a> и который зарегистрирован по адресу: <strong className="text-white">г. Москва, Севастопольский пр-кт д. 19 к. 2</strong>, на обработку и передачу своих персональных данных со следующими условиями:
            </p>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">1. Согласие на обработку</h3>
                <p>Данное Согласие дается на обработку и передачу персональных данных, как без использования средств автоматизации, так и с их использованием.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2. Персональные данные</h3>
                <p className="mb-2">Согласие дается на обработку следующих персональных данных пользователя:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>имя;</li>
                  <li>контактный номер телефона;</li>
                  <li>электронная почта.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">3. Цели обработки</h3>
                <p>Целью обработки персональных данных является обсуждение возможного сотрудничества, а также заключение, исполнение и прекращение гражданско-правовых договоров.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">4. Действия с персональными данными</h3>
                <p className="mb-2">В ходе обработки с персональными данными возможно совершение следующих действий:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>сбор;</li>
                  <li>запись;</li>
                  <li>систематизация;</li>
                  <li>накопление;</li>
                  <li>хранение;</li>
                  <li>уточнение (обновление, изменение);</li>
                  <li>использование;</li>
                  <li>удаление.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">5. Срок действия</h3>
                <p>Настоящее согласие является бессрочным.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">6. Право на отзыв согласия</h3>
                <p>Пользователь имеет право отозвать свое согласие посредством направления в ИП Антошкин А.Г. письменного заявления или электронного заявления, подписанного согласно законодательству Российской Федерации в области электронной подписи, по адресу, указанному выше или по адресу электронной почты <a href="mailto:antoshkin.info@bk.ru" className="text-teal-400 hover:text-teal-300 transition-colors">antoshkin.info@bk.ru</a></p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">7. Обработка после отзыва</h3>
                <p>В случае отзыва субъектом персональных данных или его представителем согласия на обработку персональных данных Оператор вправе продолжить обработку персональных данных без согласия субъекта персональных данных при наличии оснований, указанных в пунктах 2–11 части 1 статьи 6, части 2 статьи 10 и части 2 статьи 11 Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных».</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
