<template>
  <div class="flex flex-col min-h-screen">
  <header class="bg-rose-400/50 ">
    <div class="container mx-auto flex items-center justify-evenly space-x-40 py-4">
      <!-- Logo -->
      <RouterLink to="/">
        <img src="./assets/logo2-projetIA-transparent.png" class="h-16 w-28"/>
      </RouterLink>

      <!-- Menu -->
      <nav class="hidden md:flex space-x-4">
        <RouterLink to="/" class="hover:underline">Accueil</RouterLink>
        <RouterLink
        to="/form" class="hover:underline">Formulaire</RouterLink>
        <RouterLink to="/config" class="hover:underline">Configuration</RouterLink>
      </nav>

      <!-- Menu burger -->
      <button class="md:hidden" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>

    <div v-if="isMobileMenuOpen" class="md:hidden">
      <nav class="flex flex-col items-center space-y-2 p-4">
        <RouterLink to="/" class="hover:underline">Accueil</RouterLink>
        <RouterLink to="/form" class="hover:underline">Formulaire</RouterLink>
        <RouterLink to="/config" class="hover:underline">Configuration</RouterLink>
      </nav>
    </div>

  </header>
  
  <!-- Redirection vers les composants via les routes -->
  <main class="">
    <transition name="fade-slide" mode="out-in">
        <router-view />
    </transition>
  </main>

  <footer class="bg-rose-400/50">
    <div class="container mx-auto flex items-center justify-between p-8">
      <div class="text-xl font-bold">
        <p>© 2025 Projet IA - Tous droits réservés</p>
      </div>
      <div class="flex">
        <p> Site réalisé par Yev Nico Lucas</p>
    </div>
    </div>

  </footer>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
}
</script>

<style>


#app {
    text-align: center;
    color: var(--text-color-primary);
    background-color: var(--background-color);
}

/* Animation personnalisée pour les transitions */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
