<template>
  <nav class="mx-auto flex items-center justify-between p-6 lg:px-8">
    <div class="flex lg:flex-1">
    <img class="h-8 w-auto" alt="Vue logo" src="./assets/logo.png">
    </div>
  
    <div class="flex ">
      <ul class="flex"> 
        <li class=" flex-auto"><router-link to="/">Home</router-link></li>
        <li class="flex-auto"><router-link to="/form">Form</router-link></li>
        <li class="flex-auto"><router-link to="/condition">Condition</router-link></li>
      </ul>
    </div>
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
