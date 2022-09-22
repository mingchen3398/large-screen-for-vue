import Vue from 'vue'
import App from './App.vue'
import scaleContainer from '../package/index'

Vue.config.productionTip = false
Vue.use(scaleContainer)
new Vue({
  render: h => h(App)
}).$mount('#app')
