<template>
  <div>
    <HomeHero />
    <HomeServices />
    <HomeFeatures />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Denizli Halı Yıkama - Profesyonel Temizlik & Ücretsiz Servis',
  ogTitle: 'Pandora Halı Yıkama - Denizli',
  description: 'Denizli halı yıkama, koltuk yıkama ve yerinde temizlik hizmetleri. Merkezefendi ve Pamukkale ilçelerine aynı gün ücretsiz servis imkanı.',
  ogDescription: 'Denizli\'nin en hijyenik halı yıkama fabrikası. Leke garantili ve sigortalı yıkama.',
  keywords: 'denizli halı yıkama, denizli koltuk yıkama, pamukkale halı yıkama, merkezefendi halı yıkama, denizli yorgan yıkama, en yakın halı yıkamacı'
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
        "telephone": "+905550000000",
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