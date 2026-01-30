<template>
  <header class="sticky top-0 z-50">
    <Menubar :model="items" class="!border-none !rounded-none !bg-[#0f172a]/80 !backdrop-blur-xl !border-b !border-white/10 px-4 py-3 transition-all duration-300">
      
      <template #start>
        <NuxtLink to="/" class="flex items-center gap-2 no-underline group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
             <i class="pi pi-sparkles text-white text-lg"></i>
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
          v-ripple 
          class="flex items-center px-4 py-2 mx-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
          active-class="!text-blue-400 !bg-blue-500/10 font-semibold"
        >
          <span :class="[item.icon, 'text-lg']" />
          <span class="ml-2 text-sm font-medium">{{ item.label }}</span>
        </NuxtLink>
        
        <a 
          v-else 
          v-ripple 
          :href="item.url" 
          target="_blank"
          class="flex items-center px-4 py-2 mx-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
        >
           <span :class="[item.icon, 'text-lg']" />
           <span class="ml-2 text-sm font-medium">{{ item.label }}</span>
        </a>
      </template>

      <template #end>
        <Button 
          label="Hemen Ara" 
          icon="pi pi-phone" 
          class="!bg-gradient-to-r !from-blue-600 !to-blue-500 hover:!from-blue-500 hover:!to-blue-400 !border-none !text-white !font-bold !rounded-xl !px-5 shadow-lg shadow-blue-900/40 hover:shadow-blue-600/40 transition-all transform hover:-translate-y-0.5" 
          as="a" 
          href="tel:+905530257011" 
        />
      </template>
    </Menubar>
  </header>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    { label: 'Anasayfa', icon: 'pi pi-home', route: '/' },
    { label: 'Hizmetler', icon: 'pi pi-list', route: '/#hizmetler' },
    { label: 'Fiyatlar', icon: 'pi pi-wallet', route: '/fiyatlar' },
    { label: 'Galeri', icon: 'pi pi-images', route: '/galeri' },
    { label: 'İletişim', icon: 'pi pi-envelope', route: '/iletisim' },

]);
</script>

<style scoped>
/* PrimeVue Menubar varsayılan paddinglerini ezmek için */
:deep(.p-menubar-root-list) {
  gap: 0.5rem;
}

/* Mobilde menü arka planını düzeltmek için */
:deep(.p-menubar-mobile-active .p-menubar-root-list) {
  background-color: #0f172a;
  border: 1px solid rgba(255,255,255,0.1);
  padding: 1rem;
  border-radius: 1rem;
  margin-top: 1rem;
}
</style>