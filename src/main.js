import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import "font-awesome/css/font-awesome.min.css"
import store from './store'
import router from './router'

new Vue({
  render: h => h(App),
  store,
  router,
  provide:function(){
    return {
      menuEventBus:new Vue(),
      tabEventBus:new Vue()
    }
  }
}).$mount('#app')
