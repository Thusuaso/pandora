<template>
  <section id="hizmetler" class="py-24 bg-[#0B0F19] relative overflow-hidden">
    <div
      class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"
    ></div>
    <div
      class="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"
      style="animation-delay: 2s"
    ></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <span
          class="text-blue-500 font-bold tracking-widest uppercase text-xs mb-2 block"
          >Hizmetlerimiz</span
        >
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Profesyonel
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
            >Temizlik Çözümleri</span
          >
        </h2>
        <p class="text-slate-400 text-lg">
          Eşyalarınızın dokusuna zarar vermeden, son teknoloji makinelerle
          derinlemesine hijyen sağlıyoruz.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.id"
          class="group relative bg-[#111827] border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer shadow-2xl hover:shadow-blue-900/20"
          @click="openServiceDetail(service)"
        >
          <div class="h-60 overflow-hidden relative">
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent z-10 opacity-80"
            ></div>

            <img
              :src="service.image"
              :alt="service.title"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />

            <div
              class="absolute top-4 right-4 z-20 bg-[#0B0F19]/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-blue-400 border border-slate-700 shadow-lg"
            >
              {{ service.category }}
            </div>
          </div>

          <div class="p-6 relative z-20 -mt-6">
            <div class="flex items-center justify-between mb-3">
              <h3
                class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300"
              >
                {{ service.title }}
              </h3>
              <div
                class="w-10 h-10 rounded-full bg-[#1F2937] flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
              >
                <i :class="service.icon"></i>
              </div>
            </div>

            <p
              class="text-slate-400 text-sm line-clamp-2 mb-6 leading-relaxed border-b border-slate-800 pb-4"
            >
              {{ service.shortDesc }}
            </p>

            <div class="flex items-center justify-between text-sm font-medium">
              <span
                class="text-slate-500 group-hover:text-slate-300 transition-colors"
                >İncelemek için tıklayın</span
              >
              <i
                class="pi pi-arrow-right text-blue-500 transform group-hover:translate-x-1 transition-transform"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Dialog
      v-model:visible="isDialogVisible"
      modal
      :header="selectedService?.title"
      :style="{ width: '55rem' }"
      :breakpoints="{ '1199px': '75vw', '575px': '95vw' }"
      :pt="{
        root: {
          class:
            '!bg-[#111827] !border !border-slate-700 !shadow-2xl !rounded-2xl',
        },
        header: {
          class:
            '!bg-[#111827] !text-white !border-b !border-slate-800 !px-6 !py-4 !rounded-t-2xl',
        },
        title: { class: '!font-bold !text-xl' },
        content: { class: '!bg-[#111827] !text-slate-300 !p-6' },
        footer: {
          class:
            '!bg-[#111827] !border-t !border-slate-800 !p-4 !rounded-b-2xl',
        },
        mask: { class: '!backdrop-blur-sm !bg-slate-950/80' },
        closeButton: {
          class:
            '!text-slate-400 hover:!text-white hover:!bg-slate-800 !rounded-full',
        },
      }"
    >
      <div v-if="selectedService" class="flex flex-col md:flex-row gap-8">
        <div class="w-full md:w-5/12">
          <div
            class="h-64 md:h-full rounded-xl overflow-hidden border border-slate-700 relative group"
          >
            <img
              :src="selectedService.image"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
            ></div>
            <div
              class="absolute bottom-4 left-4 text-white font-bold flex items-center gap-2"
            >
              <i class="pi pi-clock text-blue-400"></i>
              <span>{{ selectedService.duration }}</span>
            </div>
          </div>
        </div>

        <div class="w-full md:w-7/12 flex flex-col gap-5">
          <p class="text-slate-300 leading-relaxed text-sm md:text-base">
            {{ selectedService.fullDesc }}
          </p>

          <div
            class="bg-[#1F2937]/50 p-5 rounded-xl border border-slate-700/50"
          >
            <h4
              class="font-bold text-blue-400 text-xs uppercase tracking-wider mb-3 flex items-center gap-2"
            >
              <i class="pi pi-cog"></i> İşlem Süreci
            </h4>
            <ul class="space-y-2.5">
              <li
                v-for="(step, index) in selectedService.steps"
                :key="index"
                class="flex items-center gap-3 text-sm text-slate-300"
              >
                <div
                  class="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0"
                >
                  <i
                    class="pi pi-check text-green-400 text-[10px] font-bold"
                  ></i>
                </div>
                {{ step }}
              </li>
            </ul>
          </div>

          <div class="mt-auto pt-2">
            <div
              class="flex items-center justify-between bg-blue-600/10 border border-blue-600/20 p-4 rounded-xl"
            >
              <span class="text-sm text-blue-200">Tahmini Fiyat</span>
              <span class="text-xl font-bold text-blue-400">{{
                selectedService.priceRange
              }}</span>
            </div>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-3 w-full">
          <Button
            label="Vazgeç"
            text
            class="!text-slate-400 hover:!text-white hover:!bg-white/5"
            @click="isDialogVisible = false"
          />
          <Button
            label="WhatsApp ile Randevu"
            icon="pi pi-whatsapp"
            class="!bg-green-600 !border-none hover:!bg-green-500 !text-white !font-bold !px-6"
            as="a"
            href="https://wa.me/905530257011"
            target="_blank"
          />
        </div>
      </template>
    </Dialog>
  </section>
</template>

<script setup>
import { ref } from "vue";

const isDialogVisible = ref(false);
const selectedService = ref(null);

const openServiceDetail = (service) => {
  selectedService.value = service;
  isDialogVisible.value = true;
};

const services = ref([
  {
    id: 1,
    title: "Detaylı Halı Yıkama",
    category: "Halı",
    shortDesc:
      "Tam otomatik makinelerde, anti-bakteriyel şampuanlarla derinlemesine temizlik.",
    fullDesc:
      "Pandora olarak halılarınızı türüne göre ayırıyor (yün, makine, shaggy), toz alma işleminden geçiriyor ve yerinde yıkıyoruz.",
    priceRange: "40₺ - 70₺ / m²",
    duration: "1-2 Saat",
    image: "/images/ai/denizli-pandora-hali-yikama-örnek.png",
    icon: "pi pi-star",
    steps: ["Toz Alma & Çırpma", "El ile Özenli Yıkama", "Güçlü Vakumlama"],
  },
  {
    id: 2,
    title: "Yerinde Koltuk Yıkama",
    category: "Koltuk",
    shortDesc:
      "Güçlü vakum makineleri ile koltuklarınızın süngerine kadar inen hijyen.",
    fullDesc:
      "Koltuklarınızı evinizden çıkarmadan, güçlü vakum makineleri ve leke çıkarıcı özel solüsyonlarla yıkıyoruz. Kumaş yapısına göre fırça sertliği ayarlanır.",
    priceRange: "1000₺ - 5000₺ / Takım",
    duration: "2-3 Saat",
    image: "/images/ai/denizli-pandora-koltuk-yikama-örnek.png",
    icon: "pi pi-home",
    steps: [
      "Köpükleme & Yumuşatma",
      "Fırçalama",
      "Vakumlama (Durulama)",
      "Leke Kontrolü",
    ],
  },
  {
    id: 4,
    title: "Stor & Zebra Perde",
    category: "Perde",
    shortDesc:
      "Mekanizmalarına zarar vermeden, özel ilaçlarla ilk günkü parlaklık.",
    fullDesc:
      "Stor ve zebra perdeleriniz mekanizmasından dikkatlice sökülür, düz zemin üzerinde kırılmadan yıkanır. Perde aprelerine zarar vermeyen özel şampuanlar kullanılır.",
    priceRange: "35₺ - 60₺ / m²",
    duration: "1 Saat",
    image: "/images/ai/denizli-pandora-stor-perde-yikama-örnek.png",
    icon: "pi pi-sun",
    steps: [
      "Mekanizma Sökümü",
      "Düz Zemin Yıkama",
      "Durulama",
      "Mekanizma Montajı",
    ],
  },
  {
    id: 5,
    title: "Yatak Yıkama",
    category: "Yatak",
    shortDesc:
      "Yataklarınızdaki mayt, akar ve bakterileri %99 oranında temizliyoruz.",
    fullDesc:
      "Hayatımızın üçte birini geçirdiğimiz yataklar zamanla bakteri yuvasına döner. Güçlü vakum ile yatağınızın derinliklerindeki kirleri çekiyoruz.",
    priceRange: "400₺ - 800₺ / Adet",
    duration: "1 Saat",
    image: "/images/ai/denizli-pandora-yatak-yikama-örnek.png",
    icon: "pi pi-heart",
    steps: [
      "Güçlü Vakum",
      "Derinlemesine Temizlik",
      "Leke Çıkarma",
      "Kurumaya Bırakma",
    ],
  },
]);
</script>

<style scoped>
/* Dialog geçiş animasyonları için opsiyonel */
:deep(.p-dialog-mask) {
  transition: background-color 0.3s;
}
</style>
