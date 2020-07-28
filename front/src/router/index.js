import Vue from 'vue'
import VueRouter from 'vue-router'
import Model from '../views/Model.vue'
import Gallery from '../views/Gallery.vue'
import Serivce from '../views/Serivce.vue'
import Company from '../views/Company.vue'
import Showroom from '../views/Showroom.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Model',
    component: Model,
    meta: {layout : 'DefaultLayout'}
  },
  {
    path: '/',
    name: 'Gallery',
    component: Gallery,
    meta: {layout : 'DefaultLayout'}
  },
  {
    path: '/',
    name: 'Serivce',
    component: Serivce,
    meta: {layout : 'DefaultLayout'}
  },
  {
    path: '/',
    name: 'Company',
    component: Company,
    meta: {layout : 'DefaultLayout'}
  },
  {
    path: '/',
    name: 'Showroom',
    component: Showroom,
    meta: {layout : 'DefaultLayout'}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
