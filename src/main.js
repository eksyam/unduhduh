import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'

import router from './router/index';

import Menu from './components/Menu.vue';

Vue.config.productionTip = false

Vue.component('menu-utama', Menu);

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
