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
    components: {
      include: ["Button", "Menubar"],
    },
  },

  css: ["primeicons/primeicons.css", "~/assets/css/primeicons-override.css"],

  site: {
    url: "https://www.denizlipandoratemizlik.com.tr",
    name: "Pandora Temizlik Denizli",
    description:
      "Denizli profesyonel koltuk yıkama, yatak yıkama ve yerinde temizlik hizmetleri.",
    defaultLocale: "tr",
  },

  app: {
    head: {
      htmlAttrs: { lang: "tr" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: "/_nuxt/primeicons.C6QP2o4f.woff2",
          crossorigin: "anonymous",
        },
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
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Pandora Temizlik Denizli",
            description:
              "Denizli Merkezefendi ve Pamukkale'de yerinde koltuk yıkama, yatak yıkama ve stor perde temizliği. %100 organik şampuan, leke çıkarma garantisi.",
            image:
              "https://www.denizlipandoratemizlik.com.tr/pandora_temizlik_ana_fotograf.png",
            logo: "https://www.denizlipandoratemizlik.com.tr/pandora_icon.png",
            telephone: "+905530257011",
            url: "https://www.denizlipandoratemizlik.com.tr",
            email: "",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Denizli",
              addressRegion: "Denizli",
              postalCode: "20000",
              addressCountry: "TR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 37.7765,
              longitude: 29.0864,
            },
            areaServed: [
              { "@type": "City", name: "Denizli" },
              { "@type": "AdministrativeArea", name: "Merkezefendi" },
              { "@type": "AdministrativeArea", name: "Pamukkale" },
              { "@type": "AdministrativeArea", name: "Kınıklı" },
              { "@type": "AdministrativeArea", name: "Bağbaşı" },
            ],
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "08:00",
                closes: "20:00",
              },
            ],
            priceRange: "₺₺",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Temizlik Hizmetleri",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Yerinde Koltuk Yıkama",
                    url: "https://www.denizlipandoratemizlik.com.tr/#hizmetler",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Yatak Yıkama",
                    url: "https://www.denizlipandoratemizlik.com.tr/denizli-yatak-yikama",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Stor ve Zebra Perde Yıkama",
                    url: "https://www.denizlipandoratemizlik.com.tr/#hizmetler",
                  },
                },
              ],
            },
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+905530257011",
                contactType: "customer service",
                areaServed: "TR",
                availableLanguage: "Turkish",
                contactOption: "TollFree",
              },
              {
                "@type": "ContactPoint",
                telephone: "+905539409093",
                contactType: "customer service",
                areaServed: "TR",
                availableLanguage: "Turkish",
              },
            ],
            sameAs: [
              "https://www.instagram.com/pandora.temizlik/",
              "https://www.facebook.com/people/Pandora-Temizlik/pfbid02zwfYs71G1HUMBKK7pfzw22Bg5RYfKjHutEwbhtVhD5E7sEX4ZvsJJn3XpDNntxtel/",
            ],
          }),
        },
      ],
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