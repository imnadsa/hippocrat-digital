"use client"

import { Button } from "@/components/ui/button"
import Logo from "@/components/logo"
import Link from "next/link"

export default function Footer() {
  const openExternalLink = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-24 h-24 bg-teal-500/5 rounded-full blur-2xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl animate-pulse-slow delay-400"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="flex items-center gap-3 mb-6 lg:mb-0 animate-fadeInLeft hover-lift transition-all duration-300 w-full lg:w-auto justify-center lg:justify-start">
            <Logo size="sm" />
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 md:gap-10 lg:gap-12 mb-6 lg:mb-0 w-full lg:w-auto">
            <div className="w-full sm:w-auto animate-fadeInUp delay-100">
              <h3 className="font-semibold mb-3 text-center sm:text-left text-white font-fixedsys text-shadow">Контакты</h3>
              <div className="flex flex-col space-y-2">
                <p className="text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors duration-300 cursor-pointer hover-lift">
                  info@hippocrat.digital
                </p>
                <p className="text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors duration-300 cursor-pointer hover-lift">
                  +7 (977) 100-44-19
                </p>
              </div>
            </div>

            <div className="w-full sm:w-auto animate-fadeInUp delay-200">
              <h3 className="font-semibold mb-3 text-center sm:text-left text-white font-fixedsys text-shadow">Навигация</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/about" className="text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors duration-300 cursor-pointer hover-lift">
                  О нас
                </Link>
                <Link href="/services" className="text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors duration-300 cursor-pointer hover-lift">
                  Услуги
                </Link>
                <Link href="/cases" className="text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors duration-300 cursor-pointer hover-lift">
                  Кейсы
                </Link>
                <Link href="/blog" className="text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors duration-300 cursor-pointer hover-lift">
                  Блог
                </Link>
              </nav>
            </div>

            <div className="w-full sm:w-auto animate-fadeInUp delay-300">
              <h3 className="font-semibold mb-3 text-center sm:text-left text-white font-fixedsys text-shadow">
                ИП Антошкин А.Г.
              </h3>
              <div className="flex flex-col space-y-1">
                <p className="text-slate-400 text-sm text-center sm:text-left">
                  ИНН 772799039046
                </p>
                <p className="text-slate-400 text-sm text-center sm:text-left mb-3">
                  ОГРНИП 325774600768729
                </p>
              </div>
              <div className="flex justify-center sm:justify-start mt-3">
                <Link href="/requisites" className="inline-flex items-center gap-2 text-teal-400 text-sm font-medium hover:text-teal-300 transition-colors duration-300 group">
                  <span>Реквизиты</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 animate-fadeInRight delay-400 w-full lg:w-auto justify-center lg:justify-end">
            <a href="https://arda.digital" target="_blank" rel="noopener noreferrer" className="group relative hover-lift hover:scale-105 transition-all duration-300 animate-scaleUp delay-450" aria-label="Перейти на сайт Arda Digital">
              <svg className="w-32 h-12 sm:w-36 sm:h-14" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_arda)">
                  <path d="M586.7 492.3L607.4 544H566L586.7 492.3Z" fill="#14b8a6"/>
                  <path d="M629.9 597.7L607.4 544L650.6 544L673.1 597.7H629.9Z" fill="#14b8a6"/>
                  <path d="M586.7 597.7L566 544H607.4L629.9 597.7H586.7Z" fill="#14b8a6"/>
                  <path d="M522.7 597.7L501.9 544H543.3L566 597.7H522.7Z" fill="#14b8a6"/>
                  <path d="M543.3 544L522.6 492.3L543.3 440.6L565.9 492.3L586.7 544H543.3Z" fill="#14b8a6"/>
                  <path d="M650.6 544L629.9 492.3L650.6 440.6L673.2 492.3L694 544H650.6Z" fill="#14b8a6"/>
                  <path d="M522.6 597.8L479.4 597.8L458.6 544L479.4 492.3L522.6 492.3L543.3 544L522.6 597.8Z" fill="#14b8a6"/>
                  <path d="M543.3 440.6L522.6 388.9L543.3 337.2L565.9 388.9L586.7 440.6H543.3Z" fill="#14b8a6"/>
                  <path d="M694 544L673.2 492.3L694 440.6L716.6 492.3L737.3 544H694Z" fill="#14b8a6"/>
                  <path d="M650.6 440.6L629.9 388.9L650.6 337.2L673.2 388.9L694 440.6H650.6Z" fill="#14b8a6"/>
                  <path d="M586.7 597.7L565.9 544L586.7 492.3L629.9 492.3L650.6 544L629.9 597.7H586.7Z" fill="#14b8a6"/>
                  <path d="M458.6 544L437.9 492.3L458.6 440.6L481.2 492.3L501.9 544H458.6Z" fill="#14b8a6"/>
                  <path d="M693.9 597.7L673.1 544L716.6 544L737.3 597.7H693.9Z" fill="#14b8a6"/>
                  <path d="M802 508.6C809.9 511.6 815.5 518.3 815.5 527.6C815.5 541.7 803.7 551.9 784 551.9H748.6V483.1H782.1C800.6 483.1 812.4 493.9 812.4 506.3C812.4 512 809.8 516.8 805.2 519.8C810.2 519.8 814.8 522 818.2 525.7C817.6 517.6 811.7 510.7 802 508.6ZM769.5 514.4H780.6C787.5 514.4 791.6 510.1 791.6 505.2C791.6 500.3 787.5 496 780.6 496H769.5V514.4ZM769.5 527.8V538.7H782.2C790.2 538.7 794.7 533.8 794.7 527.8C794.7 521.8 790.2 516.9 782.2 516.9H769.5V527.8Z" fill="#94a3b8"/>
                  <path d="M916.1 526.8C916.1 544.1 901.8 552.5 886.6 552.5C871.4 552.5 857.1 544.1 857.1 526.8V483.2H877.8V525C877.8 534.1 882.3 539 886.6 539C890.9 539 895.4 534.1 895.4 525V483.2H916.1V526.8Z" fill="#94a3b8"/>
                  <path d="M942.5 483.1H963.2V551.8H942.5V483.1Z" fill="#94a3b8"/>
                  <path d="M987.8 483.1H1008.5V538.9H1043.3V551.8H987.8V483.1Z" fill="#94a3b8"/>
                  <path d="M1058.9 483.1H1107.9C1128.3 483.1 1142.6 497.8 1142.6 517.5C1142.6 537.2 1128.3 551.8 1107.9 551.8H1058.9V483.1ZM1079.6 496.3V538.9H1106.6C1113.8 538.9 1121.8 534 1121.8 517.5C1121.8 501.5 1113.8 496.3 1106.6 496.3H1079.6Z" fill="#94a3b8"/>
                  <path d="M1165.6 483.1H1232.6V496.3H1186.3V510.5H1231.8V523.7H1186.3V538.9H1232.6V552.1H1165.6V483.1Z" fill="#94a3b8"/>
                  <path d="M1256.7 483.1H1292.8C1313.5 483.1 1324.8 494.2 1324.8 508.9C1324.8 520.8 1318.2 530.1 1305 533.5L1327.1 552.1H1301.8L1281.7 535H1277.4V552.1H1256.7V483.1ZM1277.4 496.3V522.2H1290.9C1299 522.2 1304 517.9 1304 509.2C1304 500.5 1299 496.3 1290.9 496.3H1277.4Z" fill="#94a3b8"/>
                </g>
                <defs>
                  <clipPath id="clip0_arda">
                    <rect width="1920" height="1080" fill="transparent"/>
                  </clipPath>
                </defs>
              </svg>
            </a>

            <Button variant="outline" size="icon" className="rounded-full border-slate-700 text-slate-400 hover:text-teal-400 hover:border-teal-500 hover:bg-teal-950/20 hover-lift hover:scale-110 transition-all duration-300 animate-scaleUp delay-500" onClick={() => openExternalLink("https://t.me/imnadsa")} aria-label="Написать в Telegram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.16-.04-.23-.02-.1.02-1.62 1.03-4.58 3.03-.43.3-.82.44-1.17.43-.39-.01-1.13-.22-1.67-.4-.68-.23-1.22-.35-1.17-.74.02-.2.3-.4.81-.6 3.15-1.37 5.26-2.27 6.33-2.71 3.02-1.24 3.65-1.46 4.06-1.46.09 0 .29.02.42.12.11.07.18.21.21.33.03.14.05.27.03.43z"/>
              </svg>
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm animate-fadeInUp delay-700">
          © {new Date().getFullYear()} Hippocrat Digital. Все права защищены.
        </div>
      </div>
    </footer>
  )
}
