import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import RequisitesSection from '@/components/requisites/requisites-section';

export const metadata: Metadata = {
  title: 'Реквизиты Hippocrat Digital | ИП Антошкин А.Г.',
  description: 'Реквизиты компании Hippocrat Digital: ИНН, КПП, ОГРН, банковские счета, адреса и контактная информация. Полные данные для расчётов.',
  keywords: 'реквизиты, ИНН, КПП, ОГРН, банковские реквизиты, Hippocrat Digital, медицинский маркетинг',
  authors: [{ name: 'Hippocrat Digital' }],
  creator: 'Hippocrat Digital',
  publisher: 'Hippocrat Digital',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://hippocrat-digital.ru/requisites',
    siteName: 'Hippocrat Digital',
    title: 'Реквизиты Hippocrat Digital | ИП Антошкин А.Г.',
    description: 'Реквизиты компании Hippocrat Digital: ИНН, КПП, ОГРН, банковские счета, адреса и контактная информация.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://hippocrat-digital.ru/requisites',
  },
  verification: {
    google: 'oKD1I9eMq5kUH6h9oskvJ8lPcub0M-zZtlNJxc4yS_E',
    yandex: '0e5a5ac52ea54100',
  },
};

export default function RequisitesPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <Header />
      
      {/* Requisites Section */}
      <RequisitesSection />
      
      {/* Footer */}
      <Footer />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Hippocrat Digital',
            description: 'Цифровые решения для медицинских клиник. Маркетинг, таргетированная реклама, SMM, создание сайтов.',
            url: 'https://hippocrat-digital.ru',
            logo: 'https://hippocrat-digital.ru/logo.png',
            image: 'https://hippocrat-digital.ru/og-image.jpg',
            telephone: '+7 (977) 100-44-19',
            email: 'antoshkin.info@bk.ru',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Севастопольский пр-кт, д 19 к 2',
              addressLocality: 'Москва',
              postalCode: '117649',
              addressCountry: 'RU',
            },
            sameAs: [
              'https://hippocrat-digital.ru',
            ],
            priceRange: '$$',
            areaServed: 'RU',
            '@id': 'https://hippocrat-digital.ru/#organization',
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Главная',
                item: 'https://hippocrat-digital.ru/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Реквизиты',
                item: 'https://hippocrat-digital.ru/requisites',
              },
            ],
          }),
        }}
      />
    </div>
  );
}
