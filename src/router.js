import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/views/HomePage.vue';
import FormPage from './components/views/FormPage.vue';
import ConfigPage from './components/views/ConfigPage.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/form', name: 'Form', component: FormPage },
  { path: '/config', name: 'Config', component: ConfigPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;