<template>
  <section class="py-24 bg-[#0B0F19] relative overflow-hidden">
    
    <div class="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        <div class="w-full lg:w-1/2 relative group">
           <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
           
           <div class="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200" 
                alt="Profesyonel Yıkama" 
                class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
              />
              <div class="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors"></div>
           </div>

           <div class="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-[#1e293b] p-4 rounded-xl border border-slate-700 shadow-xl flex items-center gap-4 animate-bounce-slow">
              <div class="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                 <i class="pi pi-verified text-xl font-bold"></i>
              </div>
              <div>
                 <span class="block text-white font-bold text-lg">%100</span>
                 <span class="text-slate-400 text-xs uppercase tracking-wider">Müşteri Memnuniyeti</span>
              </div>
           </div>
        </div>

        <div class="w-full lg:w-1/2">
          <span class="text-blue-500 font-bold tracking-widest uppercase text-xs mb-2 block">Neden Bizi Seçmelisiniz?</span>
          <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
            Standartların Ötesinde <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Pandora Kalitesi</span>
          </h2>

          <div class="space-y-6">
            <div 
              v-for="(item, index) in features" 
              :key="index" 
              class="group flex items-start gap-5 p-5 rounded-2xl border border-transparent hover:border-slate-700 hover:bg-[#111827] transition-all duration-300 cursor-default"
            >
              <div :class="`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${item.bgClass} group-hover:scale-110`">
                <i :class="`${item.icon} text-xl text-white`"></i>
              </div>
              
              <div>
                <h4 class="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{{ item.title }}</h4>
                <p class="text-slate-400 leading-relaxed text-sm md:text-base border-b border-transparent group-hover:border-slate-800 pb-2">
                  {{ item.desc }}
                </p>
              </div>
            </div>
          </div>

          <div class="mt-10">
            <Button 
                label="Hemen Fiyat Al" 
                icon="pi pi-arrow-right" 
                iconPos="right" 
                class="!text-white !font-bold !bg-transparent !border !border-slate-600 hover:!border-blue-500 hover:!bg-blue-600/10 !rounded-xl !px-8 !py-3 transition-all"
                as="a"
                href="/iletisim"
            />
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const features = ref([
    { 
      title: 'Ücretsiz Servis Ağı', 
      desc: 'Halılarınızı kapınızdan alıyor, işlemler bittikten sonra tekrar kapınıza kadar ücretsiz teslim ediyoruz.',
      icon: 'pi pi-truck',
      bgClass: 'bg-blue-600'
    },
    { 
      title: 'Anti-Bakteriyel Temizlik', 
      desc: 'Sağlığa zararsız, %100 bitkisel ve organik şampuanlarla derinlemesine hijyen sağlıyoruz.',
      icon: 'pi pi-shield',
      bgClass: 'bg-purple-600'
    },
    { 
      title: 'Leke Çıkarma Garantisi', 
      desc: 'Kahve, çay, mürekkep gibi inatçı lekeler için özel kimyager destekli solüsyonlar kullanıyoruz.',
      icon: 'pi pi-star',
      bgClass: 'bg-orange-500'
    },
    { 
      title: 'Hızlı Teslimat', 
      desc: 'Maksimum 3-4 iş günü içerisinde halılarınız kurumuş, parfümlenmiş ve paketlenmiş olarak teslim edilir.',
      icon: 'pi pi-bolt',
      bgClass: 'bg-cyan-600'
    },
]);
</script>

<style scoped>
/* Yavaş Zıplama Animasyonu (Rozet için) */
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-bounce-slow {
  animation: bounce-slow 3s infinite ease-in-out;
}
</style>