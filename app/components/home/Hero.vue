<template>
  <section
    class="relative h-[700px] flex items-center justify-center text-center text-white overflow-hidden"
  >
    <div class="absolute inset-0 z-0">
      <img
        src="/pandora_temizlik_ana_fotograf.png"
        alt="Pandora Hero"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-slate-900/70"></div>
      <div
        class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f172a] to-transparent"
      ></div>
    </div>

    <div class="relative z-10 container mx-auto px-4 mt-16">
      <div
        class="inline-block mb-4 px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md"
      >
        <span class="text-blue-300 text-sm font-bold tracking-wide uppercase"
          >✨ Profesyonel Temizlik Hizmetleri</span
        >
      </div>

      <h1
        class="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-2xl"
      >
        Koltuklarınızda <br />
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
          >Pandora Işıltısı</span
        >
      </h1>

      <p
        class="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
      >
        Evlerinize hijyen, eşyalarınıza değer katıyoruz. Son teknoloji
        makinelerle derinlemesine temizlik ve %100 memnuniyet garantisi.
      </p>

      <div class="flex flex-col sm:flex-row gap-5 justify-center">
        <Button
          label="Randevu Oluştur"
          size="large"
          icon="pi pi-calendar"
          class="!bg-blue-600 !border-blue-600 hover:!bg-blue-500 !text-white !font-bold !rounded-xl !px-8 !py-4 shadow-lg shadow-blue-600/30 transition-transform hover:-translate-y-1"
          as="a"
          href="/iletisim"
        />
        <Button
          label="Hizmetlerimiz"
          size="large"
          variant="outlined"
          icon="pi pi-arrow-down"
          class="!text-white !border-white/30 hover:!bg-white/10 !rounded-xl !px-8 !py-4 backdrop-blur-sm"
          as="a"
          href="#hizmetler"
        />
      </div>
    </div>
  </section>
</template>
