import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

// Vue.config.productionTip = false;

Vue.use(VueRouter);
import Home from './components/Home';
import VenueNew from './components/VenueNew';

const routes = [
  { path: '/', component: Home },
  { path: '/venues/new', component: VenueNew }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
