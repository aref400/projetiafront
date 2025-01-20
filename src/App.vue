<template>
  <link href="./assets/main.css" rel="stylesheet">
  <img alt="Vue logo" src="./assets/logo.png">
  <nav>
      <ul
      class="lg:flex gap-x-5 max-lg:space-y-3 font-bold max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
        <li class='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
          <router-link to="/">Home</router-link></li>
        <li><router-link to="/form">Form</router-link></li>
        <li><router-link to="/condition">Condition</router-link></li>
      </ul>
      <p class="">Ce texte devrait être rouge</p>
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
li {
  list-style: none;
}
</style>
