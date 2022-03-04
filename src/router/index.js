import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'wd',
      component:resolve=>{require(['@/view/wd'],resolve)}
    },
    {
      path:'/activate',
      name:'activate',
      component:resolve=>{require(['@/components/activate'],resolve)}
    },
    {
      path:'/head',
      name:'head',
      component:resolve=>{require(['@/components/head'],resolve)}
    },
    {
      path:'/bottom',
      name:'bottom',
      component:resolve=>{require(['@/components/bottom'],resolve)}
    },
    {
      path:'/submission',
      name:'submission',
      component:resolve=>{require(['@/view/submission'],resolve)}
    },
    {
      path:'/recommend',
      name:'recommend',
      component:resolve=>{require(['@/components/recommend'],resolve)}
    },
    {
      path:'/wd',
      name:'wd',
      component:resolve=>{require(['@/view/wd'],resolve)}
    }
  ]
})
