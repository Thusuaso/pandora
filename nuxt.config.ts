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
    url: 'https://www.pandorahaliyikama.com', // BURAYA GERÇEK DOMAIN ADRESİNİZİ YAZIN
    name: 'Pandora Halı Yıkama Denizli',
    description: 'Denizli profesyonel halı ve koltuk yıkama hizmetleri. Pamukkale ve Merkezefendi bölgesinde ücretsiz servis.',
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