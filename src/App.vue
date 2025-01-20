<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <nav>
      <ul class="w-full flex items-center justify between block p-6 space-x-6"> 
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/form">Form</router-link></li>
        <li><router-link to="/condition">Condition</router-link></li>
      </ul>
    </nav>
    <main>
      <router-view />
    </main>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>

#app {

    text-align: center;
    color: var(--text-color-primary);
    margin-top: 60px;
    background-color: var(--background-color);
}
</style>
