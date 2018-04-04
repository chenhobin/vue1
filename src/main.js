import Vue from 'vue'
import App from './App.vue'
import vuer from 'vue-resource'
import router from './router'

Vue.config.productionTip = false
Vue.use(vuer)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
