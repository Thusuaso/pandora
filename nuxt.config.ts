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
    "@vercel/analytics",
  ],

  // ✅ YENİ: Image modülü config
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
      ripple: true,
    },
    autoImport: true,
    components: {
      include: ["Button", "Dialog", "Toast"],
    },
  },

  css: ["primeicons/primeicons.css"],

  site: {
    url: "https://www.denizlipandoratemizlik.com.tr",
    name: "Pandora Temizlik Denizli",
    description:
      "Denizli profesyonel koltuk yıkama, halı yıkama ve yerinde temizlik hizmetleri. Buharlı ve vakumlu makinelerle derinlemesine hijyen.",
    defaultLocale: "tr",
  },

  app: {
    head: {
      htmlAttrs: { lang: "tr" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "google-site-verification",
          content: "MktfqoDL8O-CPqEu9v6gW8rsqe37WsTIquuJMp6X9po",
        },
      ],
      // ✅ YENİ: Hero görsel preload
      link: [
        {
          rel: "preload",
          as: "image",
          href: "/_ipx/f_webp&q_80&w_1920/pandora_temizlik_ana_fotograf.webp",
          type: "image/webp",
          fetchpriority: "high",
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
    images: true,
    defaults: {
      changefreq: "daily",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
  },
});
