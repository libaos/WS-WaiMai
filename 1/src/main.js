// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Split from './components/Split/Split.vue'
import './filters' // 加载自定义过滤器
import './mock/mockServer' // 加载mockServer即可

// 注册为全局组件标签
Vue.component('Split', Split)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
