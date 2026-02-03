<template>
  <div>
    <HomeHero />
    <HomeServices />
    <HomeFeatures />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Denizli Koltuk ve Halı Yıkama - Pandora Temizlik', // Koltuk kelimesini başa aldık
  ogTitle: 'Denizli Pandora Temizlik - Profesyonel Koltuk Yıkama',
  description: 'Denizli\'de yerinde koltuk, yatak ve halı yıkama hizmetleri. İnatçı lekeler için özel solüsyonlar ve güçlü vakum teknolojisi.',
  keywords: 'denizli koltuk yıkama, denizli yerinde yıkama, koltuk temizliği denizli, pandora temizlik, denizli halı yıkama'
})
// Meta tagleri (SEO) buraya ekleyelim
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Pandora Halı ve Koltuk Yıkama",
        "image": "https://www.pandorahaliyikama.com/logo.png", // Logonuzun linki
        "telephone": "+905530257011",
        "priceRange": "₺₺",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Merkez Mahallesi Atatürk Caddesi",
          "addressLocality": "Merkezefendi",
          "addressRegion": "Denizli",
          "postalCode": "20000",
          "addressCountry": "TR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 37.7765, // Denizli koordinatları (Kendi dükkanınızınkini koymalısınız)
          "longitude": 29.0864
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "08:00",
          "closes": "20:00"
        }
      })
    }
  ]
})
</script>