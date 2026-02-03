export default defineNuxtPlugin((nuxtApp) => {
  const { gtagId } = { gtagId: 'G-T7ZCB5X1Z3' }; // ID'nizi buraya yazın

  if (process.client) {
    // Google Analytics kütüphanesini yükle
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', gtagId);

    // Sayfa değişimlerini takip et (Nuxt Router ile)
    nuxtApp.$router.afterEach((to) => {
      window.gtag('config', gtagId, {
        page_path: to.fullPath,
      });
    });
  }
});

// TypeScript hata vermemesi için pencereye tanımlama yapalım
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}