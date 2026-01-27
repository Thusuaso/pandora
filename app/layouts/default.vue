<template>
  <div class="min-h-screen font-sans flex flex-col">
    <AppHeader />
    
    <main class="flex-grow">
      <slot />
    </main>

    <AppFooter />
        <WatsappFloat/>

    
    </div>
</template>