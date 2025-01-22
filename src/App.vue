<template>
  <div class="flex flex-col min-h-screen">
  <header class="bg-rose-400/50 ">
    <div class="container mx-auto flex items-center justify-between p-8">
      <!-- Logo -->
      <div class="text-xl font-bold">
        MonLogo
      </div>

      <!-- Menu -->
      <nav class="flex space-x-4">
        <RouterLink to="/" class="hover:underline">Accueil</RouterLink>
        <RouterLink
        to="/form" class="hover:underline">Formulaire</RouterLink>
        <RouterLink to="/config" class="hover:underline">Configuration</RouterLink>
      </nav>
    </div>
  </header>
  
  <!-- Redirection vers les composants via les routes -->
  <main class="p">
    <router-view />
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
}
</script>

<style>


#app {

    text-align: center;
    color: var(--text-color-primary);
    background-color: var(--background-color);
}
</style>
