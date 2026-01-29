<template>
  <a
    href="https://wa.me/905530257011?text=Merhaba,%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum."
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-6 right-6 z-[999] flex items-center justify-center group cursor-pointer"
    aria-label="WhatsApp"
  >
    <span
      class="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping group-hover:hidden"
    ></span>

    <div
      class="relative bg-green-500 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-transform duration-300 transform group-hover:scale-110 group-hover:bg-green-600"
    >
      <i class="pi pi-whatsapp text-3xl"></i>
    </div>

    <span
      class="absolute right-16 bg-white text-slate-800 px-3 py-1 rounded shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none"
    >
      Bize Yazın
    </span>
  </a>
</template>
