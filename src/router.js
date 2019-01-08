import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import  Hot from  './components/Hot'
import    Regist from './components/Regist'
import  Login from './components/Login'
import  BlogList from './components/Home/BlogList'
import  Recommend  from './components/Home/Recommend'
import  BlogDetail from './components/Home/BlogDetail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:"/home"
    },
      {
          path: '/home',
          name: 'home',
          component: Home,
          redirect:"/home/recommend",
         children:[
              {
                  path:"list_*",
                  name:"blogList",
                  component:BlogList,
              },
             {
               path:"recommend",
                 name:"recommend",
                 component:Recommend
             },
             {
                 path:"blogDetail_*",
                 name:"blogDetail",
                 component:BlogDetail
             }
          ]
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
