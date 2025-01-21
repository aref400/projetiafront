<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <!-- Titre -->
    <h1 class="text-4xl font-bold text-blue-600 mb-8">Remplissez le formulaire</h1>

    <!-- Formulaire -->
    <form 
      @submit.prevent="handleSubmit" 
      class="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-6"
    >
      <!-- Nombre de personnes -->
      <div class="flex flex-col">
        <label for="nb_people" class="text-gray-700 font-semibold mb-1">Nombre de personnes :</label>
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
        <label for="city" class="text-gray-700 font-semibold mb-1">Ville :</label>
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
        <label for="activity_location" class="text-gray-700 font-semibold mb-1">Lieu (intérieur/extérieur) :</label>
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
        <label for="time_of_day" class="text-gray-700 font-semibold mb-1">Moment de la journée :</label>
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
          class="w-full bg-blue-600 font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Envoyer
        </button>
      </div>
    </form>

    <!-- Affichage de la réponse -->
    <div 
  v-if="response" 
  class="mt-8 w-full max-w-md bg-green-100 border-l-4 border-green-500 text-green-700 p-4 space-y-2 rounded-lg"
>
  <p class="font-semibold text-lg">Réponse de l'IA :</p>
  <!-- Diviser la réponse en différentes idées ou phrases -->
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
    };
  },
  methods: {
  async handleSubmit() {
    try {
      const result = await axiosInstance.post('/ia/ollama', this.formData);
      this.response = result.data;
    } catch (error) {
      console.error('Erreur lors de l’appel API :', error.response || error);
    }
  },
  formatResponse(response) {
  // Séparer par les caractères *, : ou . sans antislash inutile
  return response
    .split(/[*:.]/g) // Pas besoin d'échapper *, : ou . dans ce cas
    .map(line => line.trim()) // Supprimer les espaces inutiles
    .filter(line => line.length > 0); // Ignorer les lignes vides
},
},
};
</script>

<style scoped>
/* Styles personnalisés au besoin */
</style>
