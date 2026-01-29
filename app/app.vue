<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
// app.vue içine:

useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Denizli Pandora Temizlik",
        image: "https://denizlipandoratemizlik.com.tr/logo.png", // Logonuzun yolu
        "@id": "https://denizlipandoratemizlik.com.tr",
        url: "https://denizlipandoratemizlik.com.tr",
        telephone: "+905530257011", // Telefonunuz
        priceRange: "₺₺",
        address: {
          "@type": "20180",
          streetAddress: "Merkez Mahallesi",
          addressLocality: "Merkezefendi", // İlçe
          addressRegion: "Denizli",
          postalCode: "20000",
          addressCountry: "TR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 37.7765, // Denizli koordinatlarınız (Google Maps'ten bakın)
          longitude: 29.0864,
        },
        openingHoursSpecification: {
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
      }),
    },
  ],
});
</script>
