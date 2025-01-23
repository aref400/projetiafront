<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <!-- Titre -->
    <h1 class="text-4xl font-bold mb-8">Configuration de l'IA</h1>
    <form @submit.prevent="saveConfig"
      class="w-full max-w-md  shadow-lg rounded-lg p-6 space-y-6 bg-[#404254]">
      <div class="flex flex-col">
        <p class=" font-semibold mb-1">Modifier le prompt de l'IA :</p>
        <div v-if="loading">Chargement...</div>
        <div v-else>
          <textarea
            v-model="text"
            class="w-full p-2 border rounded mb-4"
            rows="5"
          ></textarea>
        </div>
      </div> 
      <div class="text-center">
        <button 
          type="submit" 
          :disabled="isLoading" 
          class="w-full bg-rose-400/50 text-white font-bold py-2 px-4 rounded-lg 
          transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-rose-400 duration-200 "
        >
          {{ isLoading ? 'Chargement...' : 'Mettre à Jour' }}
        </button>
        <div v-if="isLoading" class="flex items-center justify-center mt-4">
          <div class="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      </div>
    </form>
    <p v-if="status">{{ status }}</p>
  </div>
</template>
  
  <script>
  import axiosInstance from '@/services/axiosInstance';
  export default {
    name: 'ConfigPage',
    data() {
      return {
        text: "", // Contenu du texte
        loading: true, // Chargement initial
        saving: false, // Indicateur d'enregistrement
        error: null, // Message d'erreur
        success: null, // Message de succès
      };
    },
    methods: {
      // Récupérer le texte depuis le backend
    async fetchText() {
      try {
        const result = await axiosInstance.post('/ia/ollama', this.formData);
        this.text = result.data;
      } catch (error) {
        console.error('Erreur lors de l’appel API :', error.response || error);
      } finally {
        this.loading = false; // Désactiver le loader
      }
    },
    },
  };
  </script>
  
  <style scoped>
  /* Ajoute des styles pour cette page */
  </style>