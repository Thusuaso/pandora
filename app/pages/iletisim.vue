<template>
  <div class="min-h-screen bg-[#0f172a] text-white py-12 lg:py-24 relative overflow-hidden">
    
    <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div class="lg:col-span-5 pt-8">
          <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Evinizin Işıltısını <br>
            <span class="text-blue-500">Birlikte Geri Getirelim</span>
          </h1>
          <p class="text-slate-400 text-lg leading-relaxed mb-8">
            Halılarınızın türüne özel yıkama tekniklerimiz ve profesyonel ekibimizle hizmetinizdeyiz. Formu doldurun, projenizi (temizliğinizi) nasıl hayata geçirebileceğimizi konuşalım.
          </p>

          <div class="space-y-4">
            <div class="bg-[#1e293b] p-4 rounded-xl border border-slate-700 flex items-center gap-4">
                <div class="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <i class="pi pi-envelope"></i>
                </div>
                <div>
                    <span class="text-xs text-slate-500 font-bold uppercase">E-Posta</span>
                    <p class="text-sm font-semibold">info@pandorahali.com</p>
                </div>
            </div>
            
            <div class="bg-[#1e293b] p-4 rounded-xl border border-slate-700 flex items-center gap-4">
                <div class="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <i class="pi pi-map-marker"></i>
                </div>
                <div>
                    <span class="text-xs text-slate-500 font-bold uppercase">Ofis</span>
                    <p class="text-sm font-semibold">Merkez Mah. İstanbul</p>
                </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7">
          <div class="bg-[#1e293b]/50 backdrop-blur-sm border border-slate-700 p-6 md:p-8 rounded-3xl shadow-2xl">
            <form class="space-y-6">
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="flex flex-col gap-2">
                        <label class="text-sm text-slate-400">Adınız Soyadınız</label>
                        <input type="text" placeholder="İsim Soyisim" class="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="text-sm text-slate-400">Telefon Numaranız</label>
                        <input type="text" placeholder="0555 000 00 00" class="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
                    </div>
                </div>

                <div class="flex flex-col gap-2">
                    <label class="text-sm text-slate-400">E-Posta Adresiniz (Opsiyonel)</label>
                    <input type="email" placeholder="ornek@mail.com" class="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
                </div>

                <div class="flex flex-col gap-3">
                    <label class="text-sm text-slate-400">Hangi konuda yardıma ihtiyacınız var?</label>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <button 
                            v-for="item in services" 
                            :key="item"
                            type="button"
                            @click="selectedService = item"
                            :class="[
                                'px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 border',
                                selectedService === item 
                                    ? 'bg-[#1e293b] border-blue-500 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)]' 
                                    : 'bg-[#0f172a] border-slate-700 text-slate-400 hover:border-slate-500'
                            ]"
                        >
                            {{ item }}
                        </button>
                    </div>
                </div>

                <div class="flex flex-col gap-2">
                    <label class="text-sm text-slate-400">Tahmini Halı Metrekaresi</label>
                    <select class="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                        <option>Bir aralık seçin</option>
                        <option>0 - 10 m²</option>
                        <option>10 - 20 m²</option>
                        <option>20 m² ve üzeri</option>
                    </select>
                </div>

                <div class="flex flex-col gap-2">
                    <label class="text-sm text-slate-400">Proje Detayları</label>
                    <textarea rows="4" placeholder="Lekeler hakkında bilgi veya özel istekleriniz..." class="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
                </div>

                <button type="button" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2">
                    <i class="pi pi-send"></i>
                    Teklif İste
                </button>

            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

useHead({
  title: 'İletişim - Pandora Halı Yıkama'
});

const selectedService = ref('Halı Yıkama');

const services = [
    'Halı Yıkama', 
    'Koltuk Yıkama', 
    'Yorgan Yıkama', 
    'Stor Perde', 
    'Yatak Yıkama', 
    'Diğer'
];
</script>

<style scoped>
/* Select için ok işareti (custom styling) */
select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
}
</style>