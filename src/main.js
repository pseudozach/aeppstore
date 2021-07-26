import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/components/vuetify' // path to vuetify export

Vue.config.productionTip = false

new Vue({
	vuetify, render:h => h(App),
}).$mount('#app')
