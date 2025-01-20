<template>
    <div>
      <h1>Formulaire</h1>
      <form @submit.prevent="handleSubmit">
        <label for="query">Question à l'IA :</label>
        <input id="query" v-model="query" type="text" />
        <button type="submit">Envoyer</button>
      </form>
      <p v-if="response">Réponse de l'IA : {{ response }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FormPage',
    data() {
      return {
        query: '',
        response: null,
      };
    },
    methods: {
      async handleSubmit() {
        try {
          const result = await fetch('/api/ai', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: this.query }),
          });
          this.response = await result.json();
        } catch (error) {
          console.error('Erreur lors de l’appel API:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Ajoute des styles pour ton formulaire ici */
  </style>