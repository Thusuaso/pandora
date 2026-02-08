<template>
  <div
    class="min-h-screen bg-[#0B0F19] py-20 relative overflow-hidden font-sans"
  >
    <div
      class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"
    ></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <span
          class="inline-block py-1 px-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4"
        >
          Güncel Liste (2026)
        </span>
        <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-6">
          Şeffaf
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
            >Fiyat Politikası</span
          >
        </h1>
        <p class="text-slate-400 text-lg leading-relaxed">
          Sürpriz ek ücretler yok. Halınızın türüne ve eşyanızın cinsine göre
          belirlenmiş standart ve adil fiyatlar.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          class="group bg-[#111827] border border-slate-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
        >
          <div
            class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"
          >
            <i
              class="pi pi-stop bg-gradient-to-br from-blue-500 to-transparent bg-clip-text text-transparent text-9xl"
            ></i>
          </div>

          <div class="flex items-center gap-4 mb-8">
            <div
              class="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400"
            >
              <i class="pi pi-clone text-xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-white">Halı Yıkama</h3>
          </div>

          <ul class="space-y-6 relative z-10">
            <li
              v-for="item in carpetPrices"
              :key="item.name"
              class="flex items-end justify-between border-b border-dashed border-slate-800 pb-2"
            >
              <div>
                <span class="text-slate-300 font-medium block">{{
                  item.name
                }}</span>
                <span class="text-xs text-slate-500">{{ item.unit }}</span>
              </div>
              <span class="text-xl font-bold text-blue-400"
                >{{ item.price }}₺</span
              >
            </li>
          </ul>
        </div>

        <div
          class="group bg-[#111827] border border-slate-800 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
        >
          <div
            class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"
          >
            <i
              class="pi pi-home bg-gradient-to-br from-purple-500 to-transparent bg-clip-text text-transparent text-9xl"
            ></i>
          </div>

          <div class="flex items-center gap-4 mb-8">
            <div
              class="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400"
            >
              <i class="pi pi-home text-xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-white">Koltuk & Yatak</h3>
          </div>

          <ul class="space-y-6 relative z-10">
            <li
              v-for="item in sofaPrices"
              :key="item.name"
              class="flex items-end justify-between border-b border-dashed border-slate-800 pb-2"
            >
              <div>
                <span class="text-slate-300 font-medium block">{{
                  item.name
                }}</span>
                <span class="text-xs text-slate-500">{{ item.unit }}</span>
              </div>
              <span class="text-xl font-bold text-purple-400"
                >{{ item.price }}₺</span
              >
            </li>
          </ul>
        </div>

        <div
          class="group bg-[#111827] border border-slate-800 rounded-3xl p-8 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
        >
          <div
            class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"
          >
            <i
              class="pi pi-sparkles bg-gradient-to-br from-green-500 to-transparent bg-clip-text text-transparent text-9xl"
            ></i>
          </div>

          <div class="flex items-center gap-4 mb-8">
            <div
              class="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400"
            >
              <i class="pi pi-inbox text-xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-white">Yorgan & Perde</h3>
          </div>

          <ul class="space-y-6 relative z-10">
            <li
              v-for="item in otherPrices"
              :key="item.name"
              class="flex items-end justify-between border-b border-dashed border-slate-800 pb-2"
            >
              <div>
                <span class="text-slate-300 font-medium block">{{
                  item.name
                }}</span>
                <span class="text-xs text-slate-500">{{ item.unit }}</span>
              </div>
              <span class="text-xl font-bold text-green-400"
                >{{ item.price }}₺</span
              >
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-16 bg-gradient-to-r from-blue-900/40 to-slate-900/40 border border-blue-500/30 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
      >
        <div class="relative z-10">
          <h3 class="text-2xl font-bold text-white mb-4">
            Toplu Siparişleriniz İçin Özel Teklif
          </h3>
          <p class="text-slate-300 mb-8 max-w-2xl mx-auto">
            Otel, yurt, cami veya toplu konut projeleriniz için metrekareye göre
            özel indirimli fiyatlarımızdan yararlanın.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              label="Teklif İste"
              icon="pi pi-file"
              class="!bg-white !text-slate-900 !font-bold !border-none hover:!bg-blue-50"
              as="a"
              href="/iletisim"
            />
            <Button
              label="WhatsApp'tan Yaz"
              icon="pi pi-whatsapp"
              class="!bg-green-600 !border-none hover:!bg-green-500 !text-white !font-bold"
              as="a"
              href="https://wa.me/905530257011"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

useHead({
  title: "Fiyat Listesi - Pandora Halı Yıkama",
});

const carpetPrices = ref([
  { name: "Makine Halısı", unit: "Metrekare (m²)", price: "50" },
  { name: "Shaggy Halı", unit: "Metrekare (m²)", price: "60" },
  { name: "Yün Halı", unit: "Metrekare (m²)", price: "70" },
  { name: "Bambu / İpek", unit: "Metrekare (m²)", price: "90" },
  { name: "El Dokuma", unit: "Metrekare (m²)", price: "85" },
]);
const sofaPrices = ref([
  { name: "Oturma Grubu (3+2+1+1)", unit: "Takım", price: "1500-5000" },
  { name: "Köşe Koltuk (L Tipi)", unit: "Adet", price: "900" },
  { name: "Tek Kişilik Yatak", unit: "Adet", price: "400" },
  { name: "Çift Kişilik Yatak", unit: "Adet", price: "600" },
  { name: "Sandalye", unit: "Adet", price: "75" },
]);
const otherPrices = ref([
  { name: "Tek Kişilik Yorgan", unit: "Adet", price: "200" },
  { name: "Çift Kişilik Yorgan", unit: "Adet", price: "250" },
  { name: "Battaniye", unit: "Adet", price: "180" },
  { name: "Stor Perde", unit: "Metrekare (m²)", price: "45" },
  { name: "Zebra Perde", unit: "Metrekare (m²)", price: "55" },
]);
</script>
