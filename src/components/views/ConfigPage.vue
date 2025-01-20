<template>
    <div>
      <h1>Configuration de l'IA</h1>
      <form @submit.prevent="saveConfig">
        <label for="apiKey">Clé API :</label>
        <input id="apiKey" v-model="config.apiKey" type="text" />
        
        <label for="model">Modèle :</label>
        <input id="model" v-model="config.model" type="text" />
  
        <button type="submit">Sauvegarder</button>
      </form>
      <p v-if="status">{{ status }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ConfigPage',
    data() {
      return {
        config: {
          apiKey: '',
          model: '',
        },
        status: null,
      };
    },
    methods: {
      async saveConfig() {
        try {
          await fetch('/api/config', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.config),
          });
          this.status = 'Configuration mise à jour avec succès !';
        } catch (error) {
          console.error('Erreur lors de la sauvegarde de configuration:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Ajoute des styles pour cette page */
  </style>