<template>
  <div
    class="min-h-screen bg-[#0f172a] text-white py-12 lg:py-24 relative overflow-hidden"
  >
    <div
      class="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"
    ></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div class="lg:col-span-5 pt-8">
          <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Evinizin Işıltısını <br />
            <span class="text-blue-500">Birlikte Geri Getirelim</span>
          </h1>
          <p class="text-slate-400 text-lg leading-relaxed mb-8">
            Halılarınızın türüne özel yıkama tekniklerimiz ve profesyonel
            ekibimizle hizmetinizdeyiz. Formu doldurun, projenizi
            (temizliğinizi) nasıl hayata geçirebileceğimizi konuşalım.
          </p>

          <div class="space-y-4">
            <div
              class="bg-[#1e293b] p-4 rounded-xl border border-slate-700 flex items-center gap-4"
            >
              <div
                class="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400"
              >
                <i class="pi pi-envelope"></i>
              </div>
              <div>
                <span class="text-xs text-slate-500 font-bold uppercase"
                  >E-Posta</span
                >
                <p class="text-sm font-semibold">
                  info@denizlipandoratemizlik.com.tr
                </p>
              </div>
            </div>

            <div
              class="bg-[#1e293b] p-4 rounded-xl border border-slate-700 flex items-center gap-4"
            >
              <div
                class="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400"
              >
                <i class="pi pi-phone"></i>
              </div>
              <div>
                <span class="text-xs text-slate-500 font-bold uppercase"
                  >Telefon (Semih DEMİR)</span
                >
                <p class="text-sm font-semibold">+90 553 025 70 11</p>
              </div>
            </div>
            <div
              class="bg-[#1e293b] p-4 rounded-xl border border-slate-700 flex items-center gap-4"
            >
              <div
                class="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400"
              >
                <i class="pi pi-phone"></i>
              </div>
              <div>
                <span class="text-xs text-slate-500 font-bold uppercase"
                  >Telefon (Mertcan KAYNAK)</span
                >
                <p class="text-sm font-semibold">+90 553 940 90 93</p>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7">
          <div
            class="bg-[#1e293b]/50 backdrop-blur-sm border border-slate-700 p-6 md:p-8 rounded-3xl shadow-2xl"
          >
            <form class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex flex-col gap-2">
                  <label class="text-sm text-slate-400">Adınız Soyadınız</label>
                  <input
                    type="text"
                    placeholder="İsim Soyisim"
                    class="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                    v-model="form.name"
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm text-slate-400"
                    >Telefon Numaranız</label
                  >
                  <input
                    type="text"
                    placeholder="0555 000 00 00"
                    class="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                    v-model="form.phone"
                  />
                </div>
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-sm text-slate-400"
                  >E-Posta Adresiniz (Opsiyonel)</label
                >
                <input
                  type="email"
                  placeholder="ornek@mail.com"
                  class="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  v-model="form.email"
                />
              </div>

              <div class="flex flex-col gap-3">
                <label class="text-sm text-slate-400"
                  >Hangi konuda yardıma ihtiyacınız var?</label
                >
                <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <button
                    v-for="item in services"
                    :key="item"
                    type="button"
                    @click="selectService(item)"
                    :class="[
                      'px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 border',
                      selectedService === item
                        ? 'bg-[#1e293b] border-blue-500 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)]'
                        : 'bg-[#0f172a] border-slate-700 text-slate-400 hover:border-slate-500',
                    ]"
                  >
                    {{ item }}
                  </button>
                </div>
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-sm text-slate-400"
                  >Tahmini Halı Metrekaresi</label
                >
                <select
                  class="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                  v-model="form.area"
                >
                  <option>Bir aralık seçin</option>
                  <option>0 - 10 m²</option>
                  <option>10 - 20 m²</option>
                  <option>20 m² ve üzeri</option>
                </select>
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-sm text-slate-400">Proje Detayları</label>
                <textarea
                  rows="4"
                  placeholder="Lekeler hakkında bilgi veya özel istekleriniz..."
                  class="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              <div
                v-if="showSuccess"
                class="mb-4 p-4 bg-green-500/20 border border-green-500 rounded-lg flex items-center gap-3 animate-bounce-in"
              >
                <div class="bg-green-500 rounded-full p-1">
                  <i class="pi pi-check text-white text-xs"></i>
                </div>
                <div>
                  <h4 class="text-green-400 font-bold text-sm">
                    Talebiniz Alındı!
                  </h4>
                  <p class="text-slate-400 text-xs">
                    En kısa sürede sizi arayıp fiyat vereceğiz.
                  </p>
                </div>
              </div>

              <Button
                @click="sendOffer"
                :loading="loading"
                label="Teklif İste"
                icon="pi pi-send"
                class="w-full !bg-blue-600 hover:!bg-blue-500 !py-4 !font-bold !border-none"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

useSeoMeta({
  title: "İletişim - Fiyat Teklifi Al | Pandora Temizlik",
  description:
    "Denizli koltuk yıkama fiyatları için bizimle iletişime geçin. WhatsApp üzerinden anında fiyat teklifi.",
});
const loading = ref(false);
const showSuccess = ref(false); // Başarılı mesajını göstermek için
const form = ref({
  name: "",
  phone: "",
  email: "",
  service: "",
  area: null,
  message: "",
});
let selectedService = ref("Halı Yıkama");
const selectService = (serviceName) => {
  selectedService.value = serviceName;
  form.value.service = serviceName;
};
const services = [
  "Halı Yıkama",
  "Koltuk Yıkama",
  "Yorgan Yıkama",
  "Stor Perde",
  "Yatak Yıkama",
  "Diğer",
];

const sendOffer = async () => {
  // Basit Doğrulama
  if (!form.value.name || !form.value.phone) {
    alert("Lütfen İsim ve Telefon alanlarını doldurunuz.");
    return;
  }

  loading.value = true; // Yükleniyor başlat

  try {
    // server/api/contact.post.ts adresine verileri yolla
    const response = await $fetch("/api/contact", {
      method: "POST",
      body: form.value,
    });

    if (response.success) {
      showSuccess.value = true; // Yeşil başarı kutusunu göster
      // Formu temizle
      form.value = {
        name: "",
        phone: "",
        email: "",
        service: "",
        area: null,
        message: "",
      };

      // 3 saniye sonra başarı mesajını gizle
      setTimeout(() => (showSuccess.value = false), 5000);
    }
  } catch (error) {
    alert("Bir hata oluştu. Lütfen WhatsApp üzerinden ulaşınız.");
    console.error(error);
  } finally {
    loading.value = false; // Yükleniyor durdur
  }
};
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
