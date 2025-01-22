<template>
  <div class=" flex items-center justify-center bg-gray-50 min-h-screen">
    <div class="max-w-4xl text-center p-6  bg-[#404254] shadow-lg rounded-lg">
      <!-- Titre principal -->
      <h1 class="text-4xl font-bold  mb-4">Bienvenue sur Projet IA</h1>
      
      <!-- Description -->
      <p class="text-lg text-gray-700 mb-4">
        Le but de ce site est de vous proposer des activités à faire en groupe.
      </p>
      
      <p class="text-gray-700 mb-4">
        La création de notre site part d'un constat <span class="font-bold">frappant</span> : le manque d'idées d'activités à faire. C'est pour pallier à ce constat qu'on vous met à disposition notre 
        IA révolutionnaire.
      </p>
      
      <p class="text-gray-700 mb-6">
        Que fait notre IA, vous vous demandez sûrement ? Via notre formulaire, notre IA vous proposera une liste 
        d'activités susceptible de vous plaire.
      </p>
      
      <!-- Appel à l'action -->
      <h3 class="text-xl font-semibold  mb-6">
        Alors, n'hésitez plus à trouver une activité, on le fait pour vous !
      </h3>
      
      <!-- Bouton d'accès -->
       <button class="bg-rose-400/50
       px-6 py-3 text-white font-medium rounded-md">
        <RouterLink
        to="/form"
      >
        Accès au formulaire
      </RouterLink>
       </button>
      
    </div>
  </div>
</template>

  
  <script>
  export default {
    name: 'HomePage',
  };
  </script>
  
  <style scoped>
  /* Ajoute tes styles spécifiques ici */
  </style>