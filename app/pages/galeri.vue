<template>
  <div class="min-h-screen bg-[#0B0F19] relative overflow-hidden font-sans pb-20">
    
    <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-1/3 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="container mx-auto px-4 relative z-10 pt-20">
      
      <div class="text-center mb-20 max-w-4xl mx-auto">
        <span class="inline-block py-1 px-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold tracking-widest uppercase mb-4 animate-pulse">
          Canlı Sonuçlar
        </span>
        <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Söz Değil, <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Kanıt Sunuyoruz</span>
        </h1>
        <p class="text-slate-400 text-lg md:text-xl leading-relaxed">
          Pandora kalitesiyle tanışan halı ve koltukların muazzam değişimine tanık olun. Aşağıdaki görsellerde hiçbir filtre kullanılmamıştır.
        </p>
      </div>

      <div class="mb-32">
        <div class="flex items-center gap-4 mb-8">
           <div class="h-px bg-slate-800 flex-1"></div>
           <h2 class="text-2xl font-bold text-white flex items-center gap-2">
             <i class="pi pi-sliders-h text-blue-500"></i>
             Değişimi Görmek İçin Kaydırın
           </h2>
           <div class="h-px bg-slate-800 flex-1"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div class="relative group rounded-3xl overflow-hidden border border-slate-700 shadow-2xl select-none" style="height: 400px;">
             <div class="absolute inset-0 w-full h-full">
                <img src="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1000" class="absolute inset-0 w-full h-full object-cover" draggable="false" />
                <div class="absolute top-4 right-4 bg-green-600/90 text-white text-xs font-bold px-3 py-1 rounded-full z-10">SONRASI</div>

                <div class="absolute inset-0 w-full h-full overflow-hidden" :style="{ width: slider1 + '%' }">
                   <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1000" class="absolute inset-0 w-full max-w-none h-full object-cover filter brightness-[0.4] sepia-[0.6] grayscale-[0.3]" draggable="false" />
                   <div class="absolute top-4 left-4 bg-red-600/90 text-white text-xs font-bold px-3 py-1 rounded-full z-10">ÖNCESİ</div>
                </div>

                <div class="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_20px_rgba(0,0,0,0.5)] z-20 flex items-center justify-center" :style="{ left: slider1 + '%' }" @mousedown="startDrag($event, 1)" @touchstart="startDrag($event, 1)">
                   <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg transform active:scale-90 transition-transform">
                      <i class="pi pi-arrows-h text-slate-900 text-xs"></i>
                   </div>
                </div>
             </div>
             <div class="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 class="text-white font-bold text-lg">İpek Halı Restorasyonu</h3>
                <p class="text-slate-300 text-sm">Kahve lekesi ve genel kararma.</p>
             </div>
          </div>

          <div class="relative group rounded-3xl overflow-hidden border border-slate-700 shadow-2xl select-none" style="height: 400px;">
             <div class="absolute inset-0 w-full h-full">
                <img src="https://images.unsplash.com/photo-1632927282741-be042457c122?q=80&w=1000" class="absolute inset-0 w-full h-full object-cover" draggable="false" />
                <div class="absolute top-4 right-4 bg-green-600/90 text-white text-xs font-bold px-3 py-1 rounded-full z-10">SONRASI</div>

                <div class="absolute inset-0 w-full h-full overflow-hidden" :style="{ width: slider2 + '%' }">
                   <img src="https://images.unsplash.com/photo-1632927282741-be042457c122?q=80&w=1000" class="absolute inset-0 w-full max-w-none h-full object-cover filter brightness-[0.5] contrast-[1.2]" draggable="false" />
                   <div class="absolute top-4 left-4 bg-red-600/90 text-white text-xs font-bold px-3 py-1 rounded-full z-10">ÖNCESİ</div>
                </div>

                <div class="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-xl z-20 flex items-center justify-center" :style="{ left: slider2 + '%' }" @mousedown="startDrag($event, 2)" @touchstart="startDrag($event, 2)">
                   <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <i class="pi pi-arrows-h text-slate-900 text-xs"></i>
                   </div>
                </div>
             </div>
             <div class="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 class="text-white font-bold text-lg">Nubuk Koltuk Temizliği</h3>
                <p class="text-slate-300 text-sm">Yıllanmış kirlerin vakumla çekilmesi.</p>
             </div>
          </div>

        </div>
      </div>

      <div class="mb-32">
        <div class="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
           <div>
              <span class="text-blue-500 font-bold tracking-widest uppercase text-xs mb-2 block">Nasıl Yapıyoruz?</span>
              <h2 class="text-3xl font-extrabold text-white">Yıkama Anından Kareler</h2>
           </div>
           <Button label="Instagram'da İzle" icon="pi pi-instagram" class="!bg-[#111827] !border-slate-700 !text-white hover:!bg-slate-800" />
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
           <div v-for="i in 4" :key="i" class="relative group rounded-2xl overflow-hidden aspect-[9/16] border border-slate-800 cursor-pointer">
              <img :src="`https://images.unsplash.com/photo-1558317374-a354d5f86548?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-40" />
              <div class="absolute inset-0 flex items-center justify-center">
                 <div class="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-125 transition-transform duration-300">
                    <i class="pi pi-play text-white ml-1"></i>
                 </div>
              </div>
              <div class="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black/90 to-transparent">
                 <span class="text-white text-sm font-bold block">Otomatik Yıkama</span>
                 <span class="text-slate-400 text-xs">0:45 sn</span>
              </div>
           </div>
        </div>
      </div>

      <div>
         <h2 class="text-3xl font-extrabold text-white mb-8 text-center">Mutlu Müşteri Albümü</h2>
         
         <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            
            <div v-for="(img, idx) in galleryImages" :key="idx" class="break-inside-avoid relative group rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
               <img :src="img.src" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" loading="lazy" />
               <div class="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                  <h4 class="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{{ img.title }}</h4>
                  <p class="text-blue-300 text-sm mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{{ img.desc }}</p>
               </div>
            </div>

         </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

useHead({
  title: 'Galeri - Pandora Halı Yıkama'
});

// Slider Durumları (Yüzde olarak)
const slider1 = ref(50);
const slider2 = ref(50);
let activeSlider = null;

// Sürükleme Mantığı
const startDrag = (e, id) => {
   activeSlider = id;
   document.addEventListener('mousemove', onDrag);
   document.addEventListener('touchmove', onDrag);
   document.addEventListener('mouseup', stopDrag);
   document.addEventListener('touchend', stopDrag);
};

const onDrag = (e) => {
   if (!activeSlider) return;
   
   const sliderContainer = e.target.closest('.relative.group'); // Slider konteynerini bul
   if (!sliderContainer) return;

   const rect = sliderContainer.getBoundingClientRect();
   const x = (e.type.includes('mouse') ? e.clientX : e.touches[0].clientX) - rect.left;
   let percent = (x / rect.width) * 100;
   
   // Sınırlandırma
   percent = Math.max(0, Math.min(100, percent));

   if (activeSlider === 1) slider1.value = percent;
   if (activeSlider === 2) slider2.value = percent;
};

const stopDrag = () => {
   activeSlider = null;
   document.removeEventListener('mousemove', onDrag);
   document.removeEventListener('touchmove', onDrag);
   document.removeEventListener('mouseup', stopDrag);
   document.removeEventListener('touchend', stopDrag);
};

// Galeri Resimleri (Masonry için)
const galleryImages = ref([
    { src: 'https://images.unsplash.com/photo-1596230678248-c31a7b8e515d?q=80&w=800', title: 'Shaggy Halı', desc: 'Derinlemesine temizlik sonrası' },
    { src: 'https://images.unsplash.com/photo-1505693416388-b0346d6771b4?q=80&w=800', title: 'Yerinde Yıkama', desc: 'Ofis halıfleks temizliği' },
    { src: 'https://images.unsplash.com/photo-1558317374-a354d5f86548?q=80&w=800', title: 'Fabrikamız', desc: 'Otomatik bant sistemi' },
    { src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800', title: 'Yorgan Yıkama', desc: 'Hijyenik paketleme' },
    { src: 'https://images.unsplash.com/photo-1528644784462-23c2a63e9447?q=80&w=800', title: 'El Dokuma', desc: 'Renkleri karışmadan temizlik' },
    { src: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800', title: 'Kurutma Odası', desc: 'Nem alma cihazları ile' },
]);
</script>