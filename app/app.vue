<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": "https://denizlipandoratemizlik.com.tr",
        "name": "Pandora Temizlik Denizli",
        "alternateName": "Denizli Pandora Halı Yıkama",
        "url": "https://denizlipandoratemizlik.com.tr",
        "logo": "https://denizlipandoratemizlik.com.tr/pandora_temizlik_ana_fotograf.webp",
        "image": "https://denizlipandoratemizlik.com.tr/pandora_temizlik_ana_fotograf.webp",
        "description": "Denizli Merkezefendi ve Pamukkale'de yerinde koltuk yıkama, halı yıkama, yatak yıkama ve stor perde yıkama hizmeti. Organik şampuanlar ve güçlü vakum teknolojisiyle %100 memnuniyet garantisi.",
        "telephone": "+905530257011",
        "priceRange": "₺₺",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Denizli",
          "addressRegion": "Denizli",
          "postalCode": "20000",
          "addressCountry": "TR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 37.7765,
          "longitude": 29.0864
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "20:00"
        },
        "areaServed": [
          { "@type": "City", "name": "Denizli" },
          { "@type": "AdministrativeArea", "name": "Merkezefendi" },
          { "@type": "AdministrativeArea", "name": "Pamukkale" },
          { "@type": "Neighborhood", "name": "Kınıklı" },
          { "@type": "Neighborhood", "name": "Bağbaşı" },
          { "@type": "Neighborhood", "name": "1200 Evler" },
          { "@type": "Neighborhood", "name": "Servergazi" },
          { "@type": "Neighborhood", "name": "Yenişehir" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Temizlik Hizmetleri",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Koltuk Yıkama" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Halı Yıkama" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Yatak Yıkama" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stor Perde Yıkama" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Yorgan ve Battaniye Yıkama" } }
          ]
        },
        "sameAs": [
          "https://www.instagram.com/pandora.temizlik/",
          "https://www.facebook.com/people/Pandora-Temizlik/pfbid02zwfYs71G1HUMBKK7pfzw22Bg5RYfKjHutEwbhtVhD5E7sEX4ZvsJJn3XpDNntxtel/"
        ]
      })
    }
  ]
})
</script>