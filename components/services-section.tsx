"use client"

import Link from "next/link"

// Компонент кастомной SVG иконки для таргетированной рекламы
const TargetingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 72 72">
    <path fill="currentColor" d="M32.604 24.36a1.35 1.35 0 0 0-1.351 1.351v.08a1.35 1.35 0 0 0 2.702 0v-.08a1.35 1.35 0 0 0-1.351-1.35ZM27.2 24.36a1.35 1.35 0 0 0-1.35 1.351v.08a1.35 1.35 0 0 0 2.701 0v-.08a1.35 1.35 0 0 0-1.35-1.35ZM21.797 24.36a1.35 1.35 0 0 0-1.35 1.351v.08a1.35 1.35 0 0 0 2.7 0v-.08a1.35 1.35 0 0 0-1.35-1.35Z"/>
    <path fill="currentColor" d="M50.356 29.178v-8.827A1.35 1.35 0 0 0 49.005 19H16.351A1.35 1.35 0 0 0 15 20.35v31.104c0 .746.605 1.351 1.35 1.351h28.788c1.215.409 2.516.63 3.867.63 6.709 0 12.166-5.457 12.166-12.166 0-6.252-4.74-11.416-10.815-12.09Zm-32.654-7.476h29.952v7.476c-.901.1-1.773.3-2.604.586H17.702v-8.062Zm0 28.401V32.465h22.915a12.143 12.143 0 0 0-3.703 7.453h-3.522l-2.314-4.095a1.35 1.35 0 0 0-1.176-.686h-8.105a1.35 1.35 0 0 0-1.176 2.015l2.327 4.117-2.327 4.117a1.351 1.351 0 0 0 1.177 2.016h8.104a1.35 1.35 0 0 0 1.176-.687l2.314-4.095h3.522a12.143 12.143 0 0 0 3.735 7.483H17.702Zm7.585-10.184-1.175-2.08h5.002l1.175 2.08h-5.002Zm5.002 2.701-1.175 2.08h-5.002l1.175-2.08h5.002Zm18.716 8.114c-4.76 0-8.71-3.533-9.368-8.114h2.74c.629 3.084 3.361 5.412 6.628 5.412a6.77 6.77 0 0 0 6.763-6.763 6.77 6.77 0 0 0-6.763-6.763c-3.267 0-6 2.328-6.627 5.412h-2.74c.657-4.58 4.607-8.113 9.367-8.113 5.219 0 9.464 4.245 9.464 9.464s-4.245 9.465-9.464 9.465Zm0-10.816h-3.83a4.067 4.067 0 0 1 3.83-2.71 4.066 4.066 0 0 1 4.061 4.061 4.066 4.066 0 0 1-4.061 4.062 4.068 4.068 0 0 1-3.83-2.71h3.83a1.35 1.35 0 0 0 0-2.703Z"/>
  </svg>
)

// Компонент кастомной SVG иконки для создания сайтов
const WebsiteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 84 84">
    <path fill="currentColor" d="M36.604 27.142a1.35 1.35 0 0 0 1.351-1.35v-.08a1.35 1.35 0 0 0-2.702 0v.08c0 .746.605 1.35 1.351 1.35ZM31.2 27.142a1.35 1.35 0 0 0 1.352-1.35v-.08a1.35 1.35 0 0 0-2.702 0v.08c0 .746.605 1.35 1.35 1.35ZM25.797 27.142a1.35 1.35 0 0 0 1.351-1.35v-.08a1.35 1.35 0 0 0-2.701 0v.08c0 .746.605 1.35 1.35 1.35Z"/>
    <path fill="currentColor" d="M63.757 19H20.351A1.35 1.35 0 0 0 19 20.35v43.386c0 .746.605 1.351 1.35 1.351h43.407a1.35 1.35 0 0 0 1.351-1.35V20.35A1.35 1.35 0 0 0 63.758 19Zm-1.35 2.702v8.062H21.702v-8.062h40.705Zm0 40.683H21.702v-29.92h40.705v29.92Z"/>
    <path fill="currentColor" d="M42.054 59.707c6.782 0 12.298-5.517 12.298-12.298S48.837 35.11 42.055 35.11c-6.782 0-12.299 5.517-12.299 12.298 0 6.78 5.517 12.298 12.298 12.298Zm-9.5-10.947h2.668c.145 2.476.684 4.792 1.56 6.663a9.61 9.61 0 0 1-4.228-6.663Zm10.851 7.644V48.76h2.776c-.144 2.198-.637 4.215-1.428 5.781-.409.811-.87 1.442-1.348 1.863Zm0-10.346v-7.645c.478.421.94 1.052 1.348 1.863.79 1.567 1.284 3.584 1.428 5.782h-2.776Zm-2.701-7.645v7.645h-2.776c.144-2.198.638-4.215 1.428-5.782.409-.81.87-1.442 1.348-1.863Zm0 10.347v7.644c-.478-.42-.94-1.052-1.348-1.863-.79-1.566-1.284-3.583-1.428-5.781h2.776Zm6.623 6.663c.876-1.87 1.415-4.187 1.56-6.663h2.668a9.611 9.611 0 0 1-4.228 6.663Zm4.228-9.365h-2.668c-.145-2.477-.684-4.792-1.56-6.664a9.611 9.611 0 0 1 4.228 6.664Zm-14.773-6.663c-.875 1.87-1.415 4.187-1.56 6.663h-2.668a9.61 9.61 0 0 1 4.228-6.663Z"/>
  </svg>
)

// Компонент кастомной SVG иконки для SMM
const SMMIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 72 72">
    <path fill="currentColor" d="M15.589 30.8c-.364.209-.589.596-.589 1.016v23.042c0 .647.525 1.172 1.173 1.172h24.683c.648 0 1.173-.525 1.173-1.172V41.466h6.718L53.18 44.4c.769.517 1.827-.053 1.82-.978V17.173c0-.648-.525-1.173-1.173-1.173H27.845c-.647 0-1.173.525-1.173 1.173v16.711h-4.626l-5.282-3.08a1.173 1.173 0 0 0-1.175-.005Zm26.422 4.056a1.172 1.172 0 0 0-1.155-.972h-3.54a6.232 6.232 0 0 1-2.753-5.189 6.28 6.28 0 0 1 6.273-6.273 6.28 6.28 0 0 1 6.273 6.273c0 3.054-2.2 5.608-5.098 6.16Zm-12.993-16.51h23.636v22.893l-2.907-1.923a1.173 1.173 0 0 0-.647-.195h-7.07v-1.89c4.187-.584 7.425-4.193 7.425-8.536 0-4.752-3.866-8.619-8.619-8.619-4.752 0-8.618 3.867-8.618 8.62a8.607 8.607 0 0 0 1.74 5.188h-4.94V18.346ZM17.346 33.858l3.792 2.212c.18.105.383.16.591.16h17.955v17.455H17.346V33.858Z"/>
    <path fill="currentColor" d="M43.19 27.165c-.647 0-1.172.525-1.172 1.173a1.183 1.183 0 0 1-2.363 0 1.173 1.173 0 0 0-2.346 0 3.531 3.531 0 0 0 3.527 3.527 3.531 3.531 0 0 0 3.527-3.527c0-.648-.525-1.173-1.172-1.173ZM31.412 38.544a4.804 4.804 0 0 0-2.897.867 4.807 4.807 0 0 0-2.899-.867c-2.513.068-4.56 2.072-4.66 4.562a4.678 4.678 0 0 0-.003.158c-.01 1.302.574 2.546 1.596 3.407l5.205 4.43a1.17 1.17 0 0 0 1.52.001l5.2-4.42c1.022-.862 1.607-2.1 1.602-3.4 0-.054-.001-.11-.003-.164-.094-2.497-2.142-4.506-4.661-4.574Zm1.546 6.347-4.443 3.778-4.45-3.787c-.491-.415-.77-.998-.766-1.602l.001-.08c.05-1.261 1.096-2.276 2.38-2.311l.069-.001c.725 0 1.405.31 1.875.858a1.172 1.172 0 0 0 1.78 0 2.46 2.46 0 0 1 1.945-.857c1.287.034 2.332 1.052 2.38 2.317l.001.084c.003.602-.277 1.185-.772 1.601Z"/>
  </svg>
)

// Компонент кастомной SVG иконки для контекстной рекламы
const ContextualIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 72 72">
    <path fill="currentColor" d="M14.673 57.432c2.304 2.372 6.385 2.195 8.475-.363l6.049-7.184a19.698 19.698 0 0 0 10.09 2.752A19.69 19.69 0 0 0 53.3 46.833a19.689 19.689 0 0 0 5.805-14.014A19.69 19.69 0 0 0 53.3 18.805 19.689 19.689 0 0 0 39.286 13a19.69 19.69 0 0 0-14.014 5.805 19.689 19.689 0 0 0-5.804 14.014c0 3.607.957 7.066 2.752 10.089l-7.184 6.049c-2.56 2.09-2.734 6.173-.363 8.475Zm7.496-24.613c0-9.439 7.679-17.117 17.117-17.117 9.439 0 17.117 7.678 17.117 17.117 0 9.438-7.678 17.117-17.117 17.117-9.438 0-17.117-7.679-17.117-17.117Zm1.593 12.322a20.153 20.153 0 0 0 3.202 3.202l-3.473 4.125-3.854-3.854 4.125-3.473Zm-8.07 8.09a3.023 3.023 0 0 1 1.084-2.208l.787-.662 4.181 4.181-.663.787a3.022 3.022 0 0 1-2.206 1.085c-1.738.116-3.3-1.446-3.184-3.184Z"/>
    <path fill="currentColor" d="M36.1 38.436h3.609a1.216 1.216 0 1 0 0-2.431h-2.393v-1.851h2.127a1.216 1.216 0 0 0 0-2.432h-2.127v-1.85h2.393a1.216 1.216 0 1 0 0-2.431H36.1c-.671 0-1.215.544-1.215 1.215v8.564c0 .672.544 1.216 1.215 1.216ZM32.757 35.6c.225-1.259-.34-2.9-2.599-3.734l-1.953-.779c-.53-.225-.5-.995.05-1.165l.018-.005c1.157-.349 2.247.52 2.247.52.52.425 1.293.403 1.734-.105a1.218 1.218 0 0 0-.17-1.757c-.084-.07-2.082-1.719-4.512-.986-2.589.722-3.221 4.182-.844 5.508.05.023 1.244.554 2.589 1.05.27.1 1.146.469 1.047 1.026-.065.362-.535.87-1.377.87-.807 0-1.582-.317-2.083-.851-.461-.49-1.23-.57-1.733-.125a1.216 1.216 0 0 0-.097 1.728c.968 1.068 2.394 1.68 3.913 1.68 1.887 0 3.473-1.209 3.77-2.875ZM48.276 38.475a5.543 5.543 0 0 0 5.537-5.537 5.543 5.543 0 0 0-5.537-5.537 5.543 5.543 0 0 0-5.537 5.537 5.543 5.543 0 0 0 5.537 5.537Zm0-8.642a3.109 3.109 0 0 1 3.105 3.105 3.11 3.11 0 0 1-3.105 3.106 3.11 3.11 0 0 1-3.106-3.106 3.109 3.109 0 0 1 3.106-3.105Z"/>
  </svg>
)

const AIIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 72 72">
    <path fill="currentColor" d="M43.604 40.672c.212.008.416-.026.603-.094a1.63 1.63 0 0 0 1.06-1.517l.206-12.316c.016-.925-.704-1.703-1.606-1.739-.902-.035-1.647.686-1.662 1.611l-.207 12.316c-.016.925.703 1.703 1.606 1.739ZM30.984 26.236 26.841 38.74c-.284.846.198 1.769 1.028 2.05a1.586 1.586 0 0 0 2.036-.99l.684-2.066 5.35-.153.864 2.017c.925 1.944 3.73.785 2.962-1.223l-2.62-6.117-2.621-6.118a1.93 1.93 0 0 0-1.828-1.167 1.85 1.85 0 0 0-1.699 1.227l-.013.037Zm3.59 8.16-2.906.082 1.283-3.872 1.623 3.79Z"/>
    <path fill="currentColor" d="M56.746 19.194c0-.66-.535-1.194-1.194-1.194H17.194c-.66 0-1.194.535-1.194 1.194v28.05c0 .658.535 1.193 1.194 1.193h10.01c.887-.048 1.657.721 1.64 1.607.017.799-.62 1.533-1.419 1.569H23.6a1.194 1.194 0 0 0 0 2.387h25.625a1.194 1.194 0 0 0 0-2.388h-3.824c-.799-.035-1.436-.769-1.42-1.568-.017-.885.752-1.655 1.639-1.607h9.932c.66 0 1.194-.535 1.194-1.194v-28.05ZM41.913 51.612h-11a4.023 4.023 0 0 0-.014-3.175h11.027a4.018 4.018 0 0 0-.013 3.175ZM54.36 46.05H18.386V20.387h35.971V46.05Z"/>
  </svg>
)

export default function ServicesSection() {
  // Ссылки на страницы услуг
  const serviceUrls = {
    targeting: "/services/targeting",
    websites: "/services/websites",
    smm: "/services/smm",
    contextual: "/services/contextual",
    ai: "/services/ai-solutions"
  }

  return (
    <section id="services" className="py-16 md:py-20 relative overflow-hidden">
      {/* Добавляем декоративные элементы */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-teal-500/8 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-10 left-20 w-40 h-40 bg-indigo-500/8 rounded-full blur-3xl animate-floatBackground delay-600"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12 animate-fadeInUp">
          <div className="px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6 hover:border-teal-500/50 transition-all duration-300">
            Услуги
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent animate-gradient font-fixedsys text-shadow-lg">
            Комплексные решения для роста вашей клиники
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Услуга 1: Таргетированная реклама */}
          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-8 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-900/20 transition-all duration-300 flex flex-col hover-lift blur-backdrop animate-slideInStagger delay-100">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="text-teal-400 mr-4">
                  <TargetingIcon />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold font-fixedsys text-shadow">Таргетированная реклама</h3>
              </div>
              <div className="md:hidden">
                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <ul className="space-y-4 flex-grow">
              <li>
                <Link href={serviceUrls.targeting} className="text-slate-300 hover:text-teal-400 transition-colors duration-300 text-base md:text-lg block">
                  Таргетированная реклама для медицинских центров
                </Link>
              </li>
              <li>
                <Link href={serviceUrls.targeting} className="text-slate-300 hover:text-teal-400 transition-colors duration-300 text-base md:text-lg block">
                  Реклама стоматологических услуг в ВК
                </Link>
              </li>
              <li>
                <Link href={serviceUrls.targeting} className="text-slate-300 hover:text-teal-400 transition-colors duration-300 text-base md:text-lg block">
                  Таргетинг пациентов для частных клиник
                </Link>
              </li>
              <li>
                <Link href={serviceUrls.targeting} className="text-slate-300 hover:text-teal-400 transition-colors duration-300 text-base md:text-lg block">
                  Реклама медицинских услуг в tg ads
                </Link>
              </li>
              <li>
                <Link href={serviceUrls.targeting} className="text-slate-400 hover:text-teal-400 transition-colors duration-300 text-base md:text-lg block italic">
                  еще...
                </Link>
              </li>
            </ul>
          </div>

          {/* Услуга 2: Создание сайтов */}
          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-8 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-900/20 transition-all duration-300 flex flex-col hover-lift blur-backdrop animate-slideInStagger delay-200">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="text-indigo-400 mr-4">
                  <WebsiteIcon />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold font-fixedsys text-shadow">Создание сайтов</h3>
              </div>
              <div className="md:hidden">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <ul className="space-y-4 flex-grow">
              <li>
                <Link href={serviceUrls.websites} className="text-slate-300 hover:text-indigo-400 transition-colors duration-300 text-base md:text-lg block">
                  Создание медицинского сайта для медицинского центра
                </Link>
              </li>
              <li>
                <Link href={serviceUrls.websites} className="text-slate-300 hover:text-indigo-400 transition-colors duration-300 text-base md:text-lg block">
                  Разработка сайта стоматологической клиники
                </Link>
              </li>
              <li>
                <Link href={serviceUrls.websites} className="text-slate-300 hover:text-indigo-400 transition-colors duration-300 text-base md:text-lg block">
                  Создание медицинского сайта на конструкторах
                </Link>
              </li>
              <li>
                <Link href={serviceUrls.websites} className="text-slate-300 hover:text-indigo-400 transition-colors duration-300 text-base md:text-lg block">
                  Адаптивный дизайн медицинского сайта
                </Link>
              </li>
              <li>
                <Link href={serviceUrls.websites} className="text-slate-400 hover:text-indigo-400 transition-colors duration-300 text-base md:text-lg block italic">
                  еще...
                </Link>
              </li>
            </ul>
          </div>

          {/* Услуга 3: SMM */}
          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-8 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-900/20 transition-all duration-300 flex flex-col hover-lift blur-backdrop animate-slideInStagger delay-300">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="text-teal-400 mr-4">
                  <SMMIcon />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold font-fixedsys text-shadow">SMM</h3>
              </div>
              <div className="md:hidden">
                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <ul className="space-y-4 flex-grow">
              <li>
                <Link href={serviceUrls.smm} className="text-slate-300 hover:text-teal-400 transition-colors duration-300 text-base md:text-lg block">
                  SMM для медицинских клиник
                </Link>
              </li>
              <li>
                <Link href={serviceUrls.smm} className="text-slate-300 hover:text-teal-400 transition-colors duration-300 text-base md:text-lg block">
                  Продвижение стоматологии в социальных сетях
                </Link>
              </li>
              <li>
                <Link href={serviceUrls.smm} className="text-slate-300 hover:text-teal-400 transition-colors duration-300 text-base md:text-lg block">
                  SMM для косметологических центров
                </Link>
              </li>
              <li>
                <Link href={serviceUrls.smm} className="text-slate-300 hover:text-teal-400 transition-colors duration-300 text-base md:text-lg block">
                  Ведение соц сетей для врачей
                </Link>
              </li>
              <li>
                <Link href={serviceUrls.smm} className="text-slate-300 hover:text-teal-400 transition-colors duration-300 text-base md:text-lg block">
                  Контент-маркетинг для медицинских услуг
                </Link>
              </li>
              <li>
                <Link href={serviceUrls.smm} className="text-slate-400 hover:text-teal-400 transition-colors duration-300 text-base md:text-lg block italic">
                  еще...
                </Link>
              </li>
            </ul>
          </div>

          {/* Услуга 4: Контекстная реклама */}
          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-8 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-900/20 transition-all duration-300 flex flex-col hover-lift blur-backdrop animate-slideInStagger delay-400">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="text-indigo-400 mr-4">
                  <ContextualIcon />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold font-fixedsys text-shadow">Контекстная реклама</h3>
              </div>
              <div className="md:hidden">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <ul className="space-y-4 flex-grow">
              <li>
                <Link href={serviceUrls.contextual} className="text-slate-300 hover:text-indigo-400 transition-colors duration-300 text-base md:text-lg block">
                  Контекстная реклама медицинских услуг
                </Link>
              </li>
              <li>
                <Link href={serviceUrls.contextual} className="text-slate-300 hover:text-indigo-400 transition-colors duration-300 text-base md:text-lg block">
                  Реклама в Яндекс.Директ для клиник
                </Link>
              </li>
              <li>
                <Link href={serviceUrls.contextual} className="text-slate-300 hover:text-indigo-400 transition-colors duration-300 text-base md:text-lg block">
                  Идеальный подбор медицинских ключевых слов
                </Link>
              </li>
              <li>
                <Link href={serviceUrls.contextual} className="text-slate-300 hover:text-indigo-400 transition-colors duration-300 text-base md:text-lg block">
                  Оптимизация скликиваний
                </Link>
              </li>
              <li>
                <Link href={serviceUrls.contextual} className="text-slate-400 hover:text-indigo-400 transition-colors duration-300 text-base md:text-lg block italic">
                  еще...
                </Link>
              </li>
            </ul>
          </div>

          {/* Услуга 5: ИИ-Решения */}
          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-8 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-900/20 transition-all duration-300 flex flex-col hover-lift blur-backdrop animate-slideInStagger delay-500 md:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="text-teal-400 mr-4">
                  <AIIcon />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold font-fixedsys text-shadow">ИИ-Решения</h3>
              </div>
              <div className="md:hidden">
                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <ul className="space-y-4 flex-grow">
              <li>
                <Link href={serviceUrls.ai} className="text-slate-300 hover:text-teal-400 transition-colors duration-300 text-base md:text-lg block">
                  ИИ Ассистент для оптимизации записей в клинику
                </Link>
              </li>
              <li>
                <Link href={serviceUrls.ai} className="text-slate-300 hover:text-teal-400 transition-colors duration-300 text-base md:text-lg block">
                  ИИ-чат-боты для медицинских клиник
                </Link>
              </li>
              <li>
                <Link href={serviceUrls.ai} className="text-slate-300 hover:text-teal-400 transition-colors duration-300 text-base md:text-lg block">
                  Автоматизация записи пациентов через ИИ
                </Link>
              </li>
              <li>
                <Link href={serviceUrls.ai} className="text-slate-300 hover:text-teal-400 transition-colors duration-300 text-base md:text-lg block">
                  Ассистент для сбора отзывов
                </Link>
              </li>
              <li>
                <Link href={serviceUrls.ai} className="text-slate-300 hover:text-teal-400 transition-colors duration-300 text-base md:text-lg block">
                  ИИ ассистент для повторных записей в клинику
                </Link>
              </li>
              <li>
                <Link href={serviceUrls.ai} className="text-slate-400 hover:text-teal-400 transition-colors duration-300 text-base md:text-lg block italic">
                  еще...
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
