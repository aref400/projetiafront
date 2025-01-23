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
            <label for="hasChildren" class="font-semibold mb-1">Y a-t-il des enfants dans le groupe (oui/non) :</label>
            <select id="hasChildren" v-model="formData.hasChildren"
              class="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value=true>Oui</option>
              <option value=false>Non</option>
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
            <label for="isFree" class="font-semibold mb-1">Gratuit ou Payant :</label>
            <select id="isFree" v-model="formData.isFree"
              class="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value=true>Gratuit</option>
              <option value=false>Payant</option>
            </select>
          </div>

          <!-- Semaine Ou Weekend -->
          <div class="flex flex-col">
            <label for="isWeekend" class="font-semibold mb-1">Semaine ou Weekend :</label>
            <select id="isWeekend" v-model="formData.isWeekend"
              class="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value= true>Semaine</option>
              <option value= false>Weekend</option>
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
        hasChildren : false,
        city: '',
        activity_location: 'interieur',
        isFree: false,
        time_of_day: 'jour',
        isWeekend: false,
      },
      response: null,
      isLoading: false, // Indicateur de chargement
    };
  },
  methods: {
    async handleSubmit() {
  this.isLoading = true;
  this.response = null;
  try {
    // Créer un objet aligné avec le backend si les champs diffèrent
    const payload = {
      nb_people: this.formData.nb_people,
      hasChildren: this.formData.hasChildren, // Correspondance si backend attend `has_children`
      city: this.formData.city,
      activity_location: this.formData.activity_location,
      isFree: this.formData.isFree,      // Correspondance si backend attend `free_or_paid`
      time_of_day: this.formData.time_of_day,
      isWeekend: this.formData.isWeekend,          // Correspondance si backend attend `week`
    };
    
    console.log('Données envoyées au backend :', payload);
    const result = await axiosInstance.post('/ia/ollama', payload);
    console.log('Réponse de l’API :', result.data);
    this.response = result.data;
  } catch (error) {
    console.error('Erreur lors de l’appel API :', error.response || error);
  } finally {
    this.isLoading = false;
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
