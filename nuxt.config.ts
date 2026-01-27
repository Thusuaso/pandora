// nuxt.config.ts
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@primevue/nuxt-module', '@nuxtjs/seo'],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.fake-dark-mode', // Sadece aydınlık mod istiyorsak bunu ekleriz
        }
      },
      ripple: true
    },
    autoImport: true
  },
  css: [
    'primeicons/primeicons.css'
  ],
site: {
    url: 'https://www.denizlipandoratemizlik.com.tr', // <-- YENİ DOMAIN BURAYA
    name: 'Pandora Temizlik Denizli',
    description: 'Denizli profesyonel koltuk yıkama, halı yıkama ve yerinde temizlik hizmetleri. Buharlı ve vakumlu makinelerle derinlemesine hijyen.',
    defaultLocale: 'tr',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'tr' }, // Sitenin Türkçe olduğunu belirtir
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
})