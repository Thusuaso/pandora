<template>
  <header class="sticky top-0 z-50 h-[68px]">
    <Menubar
      :model="items"
      class="!border-none !rounded-none !bg-[#0f172a]/80 !backdrop-blur-xl !border-b !border-white/10 px-4 py-3 transition-all duration-300 h-full"
    >
      <template #start>
        <NuxtLink to="/" class="flex items-center gap-2 no-underline group">
          <div
            class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all"
          >
            <!-- ✅ pi pi-sparkles yerine inline SVG — font bağımlılığı yok, CLS olmaz -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              width="18"
              height="18"
              aria-hidden="true"
            >
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
          </div>
          <div class="flex flex-col">
            <span class="text-xl font-bold text-white tracking-tight leading-none">PANDORA</span>
            <span class="text-[10px] text-slate-400 tracking-widest uppercase">Premium Cleaning</span>
          </div>
        </NuxtLink>
      </template>

      <template #item="{ item, props }">
        <NuxtLink
          v-if="item.route"
          :to="item.route"
          class="flex items-center px-4 py-2 mx-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
          active-class="!text-blue-400 !bg-blue-500/10 font-semibold"
        >
          <!-- ✅ İkon için sabit boyut — yüklenmeden önce yer kaplasın -->
          <span :class="[item.icon, 'text-lg w-[18px] h-[18px] inline-block']" />
          <span class="ml-2 text-sm font-medium">{{ item.label }}</span>
        </NuxtLink>

        <a
          v-else
          :href="item.url"
          target="_blank"
          class="flex items-center px-4 py-2 mx-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
        >
          <span :class="[item.icon, 'text-lg w-[18px] h-[18px] inline-block']" />
          <span class="ml-2 text-sm font-medium">{{ item.label }}</span>
        </a>
      </template>

      <template #end>
        <!-- ✅ pi pi-phone yerine SVG — kritik CLS kaynağıydı -->
        <a
          href="tel:+905530257011"
          class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-xl px-5 py-2 shadow-lg shadow-blue-900/40 hover:shadow-blue-600/40 transition-all transform hover:-translate-y-0.5 text-sm no-underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
          </svg>
          Hemen Ara
        </a>
      </template>
    </Menubar>
  </header>
</template>

<script setup>
import { ref } from "vue";
const items = ref([
  { label: "Anasayfa", icon: "pi pi-home", route: "/" },
  { label: "Hizmetler", icon: "pi pi-list", route: "/#hizmetler" },
  { label: "Fiyatlar", icon: "pi pi-wallet", route: "/fiyatlar" },
  { label: "Galeri", icon: "pi pi-images", route: "/galeri" },
  { label: "İletişim", icon: "pi pi-envelope", route: "/iletisim" },
]);
</script>

<style scoped>
:deep(.p-menubar-root-list) {
  gap: 0.5rem;
}
:deep(.p-menubar-mobile-active .p-menubar-root-list) {
  background-color: #0f172a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 1rem;
  margin-top: 1rem;
}
/* ✅ İkonlar font yüklenmeden önce yer kaplasın */
:deep(.pi) {
  display: inline-block;
  min-width: 1em;
  min-height: 1em;
}
</style>