import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Routes from './routes';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import moment from 'moment';

Vue.prototype.$moment = moment;
Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

Vue.config.productionTip = false


const router = new VueRouter({
  routes: Routes,
  mode: "history",
});

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
