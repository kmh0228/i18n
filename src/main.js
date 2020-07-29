// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import i18n from './i18n'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false

// 使用ElementUI
Vue.use(ElementUI,{size:'mini',i18n:(key,value)=>i18n.t(key,value)})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store,
  i18n,
  router
})
