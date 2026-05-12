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

  // ✅ CSS'i inline'a çek — entry.css render blocking zincirini kır
  experimental: {
    inlineSSRStyles: true,
  },

  image: {
    quality: 80,
    format: ["webp", "png"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1920,
    },
  },

  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: ".fake-dark-mode",
        },
      },
      ripple: false,
    },
    autoImport: true,
    // ✅ Sadece kullandığın componentler — TBT düşer
    components: {
      include: ["Button", "Menubar"],
    },
  },

  css: [
    "primeicons/primeicons.css",
    "~/assets/css/primeicons-override.css", // ✅ font-display: swap
  ],

  site: {
    url: "https://www.denizlipandoratemizlik.com.tr",
    name: "Pandora Temizlik Denizli",
    description:
      "Denizli profesyonel koltuk yıkama, halı yıkama ve yerinde temizlik hizmetleri.",
    defaultLocale: "tr",
  },

  app: {
    head: {
      htmlAttrs: { lang: "tr" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        // ✅ PrimeIcons font'unu preload et — CSS'ten keşfedilmesini bekleme
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: "/_nuxt/primeicons.C6QP2o4f.woff2",
          crossorigin: "anonymous",
        },
        // ✅ Hero görsel preload
        {
          rel: "preload",
          as: "image",
          type: "image/webp",
          href: "/_ipx/f_webp&q_80&w_1920/pandora_temizlik_ana_fotograf.png",
          fetchpriority: "high",
        },
      ],
      meta: [
        {
          name: "google-site-verification",
          content: "MktfqoDL8O-CPqEu9v6gW8rsqe37WsTIquuJMp6X9po",
        },
      ],
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-T7ZCB5X1Z3",
          defer: true,
          tagPosition: "bodyClose",
        },
      ],
      // ✅ PrimeIcons font-display: swap — inline olarak da ekle
      style: [
        {
          innerHTML: `@font-face{font-family:"primeicons";src:url("/_nuxt/primeicons.C6QP2o4f.woff2") format("woff2");font-display:swap;font-weight:normal;font-style:normal;}`,
        },
      ],
    },
  },

  sitemap: {
    images: true,
    defaults: {
      changefreq: "daily",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
  },
});
