import Vue from 'vue'
import App from './App.vue'
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'
import PortalVue from 'portal-vue'
import 'lightbox2/dist/css/lightbox.min.css'
import 'lightbox2/dist/js/lightbox.min.js'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(PortalVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')