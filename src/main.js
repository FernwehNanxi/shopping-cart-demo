// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ConfigRouter from './router'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)
var router=new VueRouter()
ConfigRouter(router)

/* eslint-disable no-new */
router.beforeEach(function(){
  window.scrollTo(0,0)
})
router.redirect({
  '*':'/'
})
router.start(App,'#root')
