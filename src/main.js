import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import axios from './plugins/axios';
import './plugins/element';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
