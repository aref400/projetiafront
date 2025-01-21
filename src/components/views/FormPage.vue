<template>
  <div>
    <h1>Formulaire</h1>
    <form @submit.prevent="handleSubmit">
      <label for="nb_people">Nombre de personnes :</label>
      <input id="nb_people" v-model="formData.nb_people" type="number" required />

      <label for="city">Ville :</label>
      <input id="city" v-model="formData.city" type="text" required />

      <label for="activity_location">Lieu (intérieur/extérieur) :</label>
      <select id="activity_location" v-model="formData.activity_location">
        <option value="interieur">Intérieur</option>
        <option value="exterieur">Extérieur</option>
      </select>

      <label for="time_of_day">Moment de la journée :</label>
      <select id="time_of_day" v-model="formData.time_of_day">
        <option value="jour">Jour</option>
        <option value="nuit">Nuit</option>
      </select>

      <button type="submit">Envoyer</button>
    </form>

    <p v-if="response">Réponse de l'IA : {{ response }}</p>
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
  },
};
</script>

<style scoped>
/* Ajoute tes styles ici */
</style>
