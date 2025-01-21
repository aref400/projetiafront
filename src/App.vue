<template>
  <nav class="mx-auto flex items-center justify-around p-6 lg:px-8">
    <div class="">
      <img class="h-10 w-auto" alt="Vue logo" src="./assets/logo.png">
    </div>
  
      <ul class="flex flex-row justify-evenly"> 
        <li class="basis-1/3"><router-link to="/">Home</router-link></li>
        <li class="basis-1/3"><router-link to="/form">Form</router-link></li>
        <li class="basis-1/3"><router-link to="/condition">Condition</router-link></li>
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
    background-color: var(--background-color);
}
</style>
