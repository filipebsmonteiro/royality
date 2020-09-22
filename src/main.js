import Vue from 'vue'
import App from './App.vue'
import "@/assets/scss/index.scss";
import RouterServiceProvider from "@/providers/RouterServiceProvider"
import StorageServiceProvider from "@/providers/StorageServiceProvider"
import "@/providers/PackagesProviders"
import './filters'

Vue.config.productionTip = false

new Vue({
  router: RouterServiceProvider,
  store: StorageServiceProvider,
  render: h => h(App),
}).$mount('#app')
