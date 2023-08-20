import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jquery from 'jquery'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import Bootstrapjs from 'bootstrap/dist/js/bootstrap.js'
// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.css'
// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.js' 


createApp(App).use(store).use(router).use(jquery).use(Bootstrap).use(Bootstrapjs).mount('#app')
