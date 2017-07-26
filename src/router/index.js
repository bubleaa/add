import Vue from 'vue'
import Router from 'vue-router'
import movie from '@/components/movie/movie.vue'
import movieA from '@/components/movieA/movieA.vue'
import shou from '../components/shou/shou.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
     
      component: movie
    },
      {
      path: '/movieA',
     
      component: movieA
    },
     {
      path:'/shou',
     
      component:shou
    }
  ]
})
