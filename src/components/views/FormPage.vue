<template>
  <div class="flex flex-col items-center justify-center min-h-screen py-8 md:py-0">
    <!-- Titre -->
    <h1 class="text-4xl font-bold mb-8">Remplissez le formulaire</h1>
    <form @submit.prevent="handleSubmit" class="w-full max-w-4xl mx-auto shadow-lg rounded-lg p-6 bg-[#404254]">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Colonne gauche -->
        <div class="md:cols-span-1 space-y-6">
          <!-- Nombre de personnes -->
          <div class="flex flex-col">
            <label for="nb_people" class="font-semibold mb-1">Nombre de personnes :</label>
            <input id="nb_people" v-model="formData.nb_people" type="number" required
              class="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>

          <!-- Présence d'enfants -->
          <div class="flex flex-col">
            <label for="has_children" class="font-semibold mb-1">Y a-t-il des enfants dans le groupe (oui/non) :</label>
            <select id="has_children" v-model="formData.has_children"
              class="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value="oui">Oui</option>
              <option value="non">Non</option>
            </select>
          </div>

          <!-- Ville -->
          <div class="flex flex-col">
            <label for="city" class="font-semibold mb-1">Ville :</label>
            <input id="city" v-model="formData.city" type="text" required
              class="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>

          <!-- Moment de la journée -->
          <div class="flex flex-col">
            <label for="time_of_day" class="font-semibold mb-1">Moment de la journée :</label>
            <select id="time_of_day" v-model="formData.time_of_day"
              class="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value="jour">Jour</option>
              <option value="nuit">Nuit</option>
            </select>
          </div>
        </div>

        <!-- Colonne droite -->
        <div class=" md:cols-span-1 space-y-6">
          <!-- Lieu -->
          <div class="flex flex-col">
            <label for="activity_location" class="font-semibold mb-1">Lieu (intérieur/extérieur) :</label>
            <select id="activity_location" v-model="formData.activity_location"
              class="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value="interieur">Intérieur</option>
              <option value="exterieur">Extérieur</option>
            </select>
          </div>

          <!-- Gratuit ou Payant -->
          <div class="flex flex-col">
            <label for="free_or_paid" class="font-semibold mb-1">Gratuit ou Payant :</label>
            <select id="free_or_paid" v-model="formData.free_or_paid"
              class="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value="gratuit">Gratuit</option>
              <option value="payant">Payant</option>
            </select>
          </div>

          <!-- Semaine Ou Weekend -->
          <div class="flex flex-col">
            <label for="week" class="font-semibold mb-1">Semaine ou Weekend :</label>
            <select id="week" v-model="formData.week"
              class="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value="semaine">Semaine</option>
              <option value="weekend">Weekend</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Bouton Envoyer -->
      <div class="text-center mt-8">
        <button type="submit" :disabled="isLoading" class="w-full bg-rose-400/50 text-white font-bold py-2 px-4 rounded-lg 
          transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-rose-400 duration-200 ">
          {{ isLoading ? 'Chargement...' : 'Envoyer' }}
        </button>
        <div v-if="isLoading" class="flex items-center justify-center mt-4">
          <div class="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      </div>
    </form>


    <!-- Affichage de la réponse -->
    <div v-if="response" class="mt-8 w-full max-w-md bg-green-100 border-l-4 border-green-500 p-4 space-y-2 rounded-lg">
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
        has_children : 'non',
        city: '',
        activity_location: 'interieur',
        free_or_paid: 'gratuit',
        time_of_day: 'jour',
        week: 'weekend',
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
