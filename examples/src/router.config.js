import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import hello from '../pages/hello'
import button from '../pages/button'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/hello',
      component: hello
    },
    {
      path: '/button',
      component: button
    },
  ]
})
