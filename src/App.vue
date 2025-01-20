<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <nav>
      <ul>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
