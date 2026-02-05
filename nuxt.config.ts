// nuxt.config.ts
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
    "@nuxtjs/seo",
    "@nuxtjs/sitemap",
    "@nuxt/image",
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: ".fake-dark-mode", // Sadece aydınlık mod istiyorsak bunu ekleriz
        },
      },
      ripple: true,
    },
    autoImport: true,
  },
  css: ["primeicons/primeicons.css"],
  site: {
    url: "https://www.denizlipandoratemizlik.com.tr", // <-- YENİ DOMAIN BURAYA
    name: "Pandora Temizlik Denizli",
    description:
      "Denizli profesyonel koltuk yıkama, halı yıkama ve yerinde temizlik hizmetleri. Buharlı ve vakumlu makinelerle derinlemesine hijyen.",
    defaultLocale: "tr",
  },

  app: {
    head: {
      htmlAttrs: { lang: "tr" }, // Sitenin Türkçe olduğunu belirtir
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        // Size verilen kodu buraya yapıştırın:
        {
          name: "google-site-verification",
          content: "MktfqoDL8O-CPqEu9v6gW8rsqe37WsTIquuJMp6X9po",
        },
      ],
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-T7ZCB5X1Z3",
          async: true,
        },
      ],
    },
  },

  sitemap: {
    defaults: {
      changefreq: "daily",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
  },
});
