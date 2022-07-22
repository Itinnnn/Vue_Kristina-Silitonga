import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FigmaTask from '../views/FigmaTask.vue'
import GitHub from '../views/GitHub.vue'
import IntroductionUIUX from '../views/IntroductionUIUX.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/figmatask',
    name: 'FigmaTask',
    component: FigmaTask
  },
  {
    path: '/github',
    name: 'GitHub',
    component: GitHub
  },
  {
    path: '/introduction',
    name: 'IntroductionUIUX',
    component: IntroductionUIUX
  },

]

const router = new VueRouter({
  routes
})

export default router
