<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <!-- Titre -->
    <h1 class="text-4xl font-bold text-blue-600 mb-8">Remplissez le formulaire</h1>

    <!-- Formulaire -->
    <form 
      @submit.prevent="handleSubmit" 
      class="w-full max-w-md  shadow-lg rounded-lg p-6 space-y-6 bg-[#404254]"
    >
      <!-- Nombre de personnes -->
      <div class="flex flex-col">
        <label for="nb_people" class=" font-semibold mb-1">Nombre de personnes :</label>
        <input 
          id="nb_people" 
          v-model="formData.nb_people" 
          type="number" 
          required 
          class="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <!-- Ville -->
      <div class="flex flex-col">
        <label for="city" class="font-semibold mb-1">Ville :</label>
        <input 
          id="city" 
          v-model="formData.city" 
          type="text" 
          required 
          class="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <!-- Lieu -->
      <div class="flex flex-col">
        <label for="activity_location" class="font-semibold mb-1">Lieu (intérieur/extérieur) :</label>
        <select 
          id="activity_location" 
          v-model="formData.activity_location" 
          class="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="interieur">Intérieur</option>
          <option value="exterieur">Extérieur</option>
        </select>
      </div>

      <!-- Moment de la journée -->
      <div class="flex flex-col">
        <label for="time_of_day" class="font-semibold mb-1">Moment de la journée :</label>
        <select 
          id="time_of_day" 
          v-model="formData.time_of_day" 
          class="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="jour">Jour</option>
          <option value="nuit">Nuit</option>
        </select>
      </div>

      <!-- Bouton Envoyer -->
      <div class="text-center">
       
        <button 
          type="submit" 
          :disabled="isLoading" 
          class="w-full bg-rose-400/50 text-white font-bold py-2 px-4 rounded-lg 
          transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-rose-400 duration-200 "
        >
          {{ isLoading ? 'Chargement...' : 'Envoyer' }}
        </button>
        <div v-if="isLoading" class="flex items-center justify-center mt-4">
      <div class="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
    </div>
      </div>
    </form>

    <!-- Affichage de la réponse -->
    <div 
      v-if="response" 
      class="mt-8 w-full max-w-md bg-green-100 border-l-4 border-green-500 p-4 space-y-2 rounded-lg"
    >
      <p class="font-semibold text-lg">Réponse de l'IA :</p>
      <div v-for="(line, index) in formatResponse(response)" :key="index" class="mt-2">
        <p v-if="line">{{ line }}</p>
      </div>
    </div>
  </div>
</template>



<script>
import axiosInstance from '@/services/axiosInstance';

export default {
  name: 'FormPage',
  data() {
    return {
      formData: {
        nb_people: 0,
        city: '',
        activity_location: 'interieur',
        time_of_day: 'jour',
      },
      response: null,
      isLoading: false, // Indicateur de chargement
    };
  },
  methods: {
    async handleSubmit() {
      this.isLoading = true; // Activer le loader
      this.response = null; // Réinitialiser la réponse
      try {
        const result = await axiosInstance.post('/ia/ollama', this.formData);
        this.response = result.data;
      } catch (error) {
        console.error('Erreur lors de l’appel API :', error.response || error);
      } finally {
        this.isLoading = false; // Désactiver le loader
      }
    },
    formatResponse(response) {
      return response
        .split(/[*:.]/g)
        .map(line => line.trim())
        .filter(line => line.length > 0);
    },
  },
};
</script>


<style scoped>
/* Styles personnalisés au besoin */
</style>
