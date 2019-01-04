import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import  Hot from  './components/Hot'
import    Regist from './components/Regist'
import  Login from './components/Login'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {
        path:"/hot",
          name:"hot",
          component:Hot
      },
      {
        path:"/regist",
          name:'regist',
          component:Regist
      },
      {
        path:"/login",
          name:"login",
          component:Login
      }


  ]
})
