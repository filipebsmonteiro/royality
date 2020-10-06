import Vue from 'vue'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import Snotify from 'vue-snotify'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueAxios, axios)
// Vue.use(Snotify)