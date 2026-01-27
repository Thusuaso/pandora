<template>
  <section class="py-12 bg-[#0B0F19] border-t border-slate-800">
  <div class="container mx-auto px-4">
    <h3 class="text-slate-500 text-sm font-bold uppercase tracking-widest mb-6 text-center">Denizli Hizmet Ağımız</h3>
    
    <div class="flex flex-wrap justify-center gap-3 text-sm text-slate-400">
      <span class="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default">Merkezefendi Halı Yıkama</span>
      <span class="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default">Pamukkale Halı Yıkama</span>
      <span class="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default">Kınıklı Koltuk Yıkama</span>
      <span class="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default">Çınar Mahallesi</span>
      <span class="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default">Bağbaşı Halı Yıkama</span>
      <span class="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default">Servergazi</span>
      <span class="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default">Yenişehir</span>
      <span class="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default">Adalet Mahallesi</span>
      <span class="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default">Üçler</span>
      <span class="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default">1200 Evler</span>
    </div>
    
    <p class="text-center text-xs text-slate-600 mt-6 max-w-4xl mx-auto">
      Denizli Pandora Halı Yıkama olarak; Merkezefendi ve Pamukkale ilçelerinin tüm mahallelerine ücretsiz servisimiz bulunmaktadır. Halı, koltuk, yorgan, battaniye ve stor perde yıkama işlemlerinizde profesyonel çözüm ortağınız.
    </p>
  </div>
</section>
  <footer class="bg-[#0f172a] border-t border-slate-800 pt-16 pb-8 text-slate-400 font-sans relative overflow-hidden">
    
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        <div class="space-y-6">
          <div class="flex items-center gap-3">
             <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <i class="pi pi-sparkles text-white"></i>
             </div>
             <div>
                <span class="block text-white font-bold text-xl tracking-tight">PANDORA</span>
                <span class="text-[10px] text-blue-400 uppercase tracking-widest font-bold">Premium Cleaning</span>
             </div>
          </div>
          <p class="text-sm leading-relaxed text-slate-500">
            Pandora Halı Yıkama olarak, son teknoloji ekipmanlar ve %100 organik şampuanlarla evinizin hijyenini güvence altına alıyoruz.
          </p>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6 flex items-center gap-2">
            <span class="w-1 h-4 bg-blue-500 rounded-full"></span>
            Hızlı Erişim
          </h4>
          <ul class="space-y-3 text-sm">
            <li><NuxtLink to="/" class="hover:text-blue-400 transition-colors flex items-center gap-2"><i class="pi pi-angle-right text-xs"></i> Anasayfa</NuxtLink></li>
            <li><NuxtLink to="/#hizmetler" class="hover:text-blue-400 transition-colors flex items-center gap-2"><i class="pi pi-angle-right text-xs"></i> Hizmetlerimiz</NuxtLink></li>
            <li><NuxtLink to="/iletisim" class="hover:text-blue-400 transition-colors flex items-center gap-2"><i class="pi pi-angle-right text-xs"></i> İletişim & Teklif</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6 flex items-center gap-2">
            <span class="w-1 h-4 bg-purple-500 rounded-full"></span>
            Hizmetlerimiz
          </h4>
          <ul class="space-y-3 text-sm">
            <li class="hover:text-purple-400 transition-colors cursor-pointer">Detaylı Halı Yıkama</li>
            <li class="hover:text-purple-400 transition-colors cursor-pointer">Koltuk Takımı Yıkama</li>
            <li class="hover:text-purple-400 transition-colors cursor-pointer">Yorgan & Battaniye</li>
            <li class="hover:text-purple-400 transition-colors cursor-pointer">Stor Perde Temizliği</li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6 flex items-center gap-2">
            <span class="w-1 h-4 bg-green-500 rounded-full"></span>
            Bize Ulaşın
          </h4>
          <ul class="space-y-4 text-sm">
            <li class="flex items-start gap-3 group">
              <i class="pi pi-map-marker mt-1 text-slate-500 group-hover:text-white transition-colors"></i>
              <span class="group-hover:text-slate-300 transition-colors">Merkez Mah. Atatürk Cad. No:123 İstanbul</span>
            </li>
            <li class="flex items-center gap-3 group">
              <i class="pi pi-phone text-slate-500 group-hover:text-blue-400 transition-colors"></i>
              <a href="tel:+905550000000" class="group-hover:text-white transition-colors font-semibold">0555 000 00 00</a>
            </li>
            <li class="flex items-center gap-3 group">
              <i class="pi pi-whatsapp text-slate-500 group-hover:text-green-400 transition-colors"></i>
              <a href="https://wa.me/905550000000" target="_blank" class="group-hover:text-white transition-colors">WhatsApp Destek</a>
            </li>
          </ul>
        </div>

      </div>

      <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-xs text-slate-600">
          © 2024 <span class="text-slate-400">Pandora Halı Yıkama</span>. Tüm hakları saklıdır.
        </p>
        
        <div class="flex items-center gap-4">
          <a href="#" class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300">
            <i class="pi pi-instagram"></i>
          </a>
          <a href="#" class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
            <i class="pi pi-facebook"></i>
          </a>
          <a href="#" class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300">
            <i class="pi pi-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>