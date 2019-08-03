import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/home',
      name: 'home',
      component: ()=> import('./views/home/home.vue'),
      children:[
        {
          path: '/home/peisong',
          name: 'peisong',
          component: () => import( './views/peisong/index.vue'),
          children:[
            {
              path: '/home/peisong/duodian',
              name: 'duodian',
              component: () => import( './views/peisong/duodian.vue'), 
            },
            {
              path: '/home/peisong//around',
              name: 'around',
              component: () => import( './views/peisong/around'),
            },
            {
              path:'/home/peisong',
              redirect:'/home/peisong/duodian'
            }


          ]
        },
        {
          path: '/home/vip',
          name: 'vip',
          component: ()=> import('./views/vip/index.vue')
        },
        {
          path: '/home/classify',
          name: 'classify',
          component: ()=> import('./views/classify/index.vue')
        },
        {
          path: '/home/car',
          name: 'car',
          component: ()=> import('./views/car/index.vue')
        }, 
      
      ]
    },
    {
      path: '/my',
      name: 'my',
      component: ()=> import('./views/my/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: ()=> import('./views/login/index.vue')
    },
    {
      path: '/detail/:id',
      name: 'datail',
      component: ()=> import('./views/detail/index.vue')
    },
      {
        path:'*',
        redirect: '/home'
      },

    
  ]
})
