import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

// Vue.config.productionTip = false;

import './assets/scss/style.scss';

Vue.use(VueRouter);
import Home from './components/Home';
// import VenueNew from './components/VenueNew';
// import VenueShow from './components/VenueShow';

const routes = [
  { path: '/', component: Home }
  // { path: '/venues/new', component: VenueNew },
  // { path: '/venues/', component: VenueShow }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
