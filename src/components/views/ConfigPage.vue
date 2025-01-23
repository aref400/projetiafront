<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <!-- Titre -->
    <h1 class="text-4xl font-bold mb-8">Configuration de l'IA</h1>
    <form @submit.prevent="saveConfig" class="w-full max-w-md shadow-lg rounded-lg p-6 space-y-6 bg-[#404254]">
      <div class="flex flex-col">
        <p class="font-semibold mb-1">Modifier le prompt de l'IA :</p>
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
          :disabled="saving" 
          class="w-full bg-rose-400/50 text-white font-bold py-2 px-4 rounded-lg 
          transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-rose-400 duration-200"
        >
          {{ saving ? 'Chargement...' : 'Mettre à Jour' }}
        </button>
        <div v-if="saving" class="flex items-center justify-center mt-4">
          <div class="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      </div>
    </form>
    <p v-if="success" class="text-green-500 mt-4">{{ success }}</p>
    <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
  </div>
</template>

<script>
import axiosInstance from '@/services/axiosInstance';

export default {
  name: 'ConfigPage',
  data() {
    return {
      text: '', // Contenu du texte
      loading: true, // Chargement initial
      saving: false, // Indicateur d'enregistrement
      error: null, // Message d'erreur
      success: null, // Message de succès
    };
  },
  methods: {
    async fetchText() {
      try {
        const result = await axiosInstance.get('/prompt/latest'); // Récupération du dernier prompt
        this.text = result.data;
      } catch (error) {
        console.error('Erreur lors de la récupération du prompt :', error.response || error);
        this.error = "Impossible de charger le prompt.";
      } finally {
        this.loading = false;
      }
    },
    async saveConfig() {
      this.saving = true;
      try {
        await axiosInstance.post('/prompt/update', this.text); // Enregistrement du nouveau prompt
        this.success = "Le prompt a été mis à jour avec succès.";
      } catch (error) {
        console.error('Erreur lors de la mise à jour du prompt :', error.response || error);
        this.error = "Erreur lors de la mise à jour du prompt.";
      } finally {
        this.saving = false;
      }
    },
  },
  mounted() {
    this.fetchText();
  },
};
</script>
