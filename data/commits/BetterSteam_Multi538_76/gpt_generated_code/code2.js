// index.ts

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'; // Import the routes configuration

Vue.use(VueRouter);

// Create the router instance
const router = new VueRouter({
  mode: 'history', // Use history mode for cleaner URLs
  routes,
});

// Create the main Vue instance and mount it to the DOM
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');