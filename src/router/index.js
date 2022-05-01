import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
   
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/alfatihah',
    name: 'alfatihah',
   
    component: () => import( '../views/AlfatihahView.vue')
  },
  {
    path: '/annas',
    name: 'annas',  
    component: () => import( '../views/AnnasView.vue')
  },
  {
    path: '/alfalaq',
    name: 'alfalaq',
    component: () => import( '../views/AlFalaqView.vue')
  },
  {
    path: '/alihklas',
    name: 'alihklas',
    component: () => import( '../views/AlikhlasView.vue')
  },
  {
    path: '/allahab',
    name: 'allahab',
    component: () => import( '../views/AllahabView.vue')
  
  },
  {
    path: '/annasr',
    name: 'annasr',
    component: () => import( '../views/AnnasrView.vue')
  
  },
  {
    path: '/alkafirun',
    name: 'alkafirun',
    component: () => import( '../views/AlkafirunView.vue')
  },
  {
    path: '/alkauthar',
    name: 'alkauthar',
    component: () => import( '../views/AlkautharView.vue')
  },
  {
    path: '/almaun',
    name: 'almaun',
    component: () => import( '../views/AlmaunView.vue')
  },
  {
    path: '/alquraish',
    name: 'alquraish',
    component: () => import( '../views/AlquraishView.vue')
  },
  {
    path: '/alfill',
    name: 'alfill',
    component: () => import( '../views/AlfillView.vue')
  },
  {
    path: '/alhumazah',
    name: 'alhumazah',
    component: () => import( '../views/AlhumazahView.vue')
  },
  {
    path: '/alasr',
    name: 'alasr',
    component: () => import( '../views/AlasrView.vue')
  },
  {
    path: '/attakathur',
    name: 'attakathur',
    component: () => import( '../views/AttakathurView.vue')
  },
  {
    path: '/alqariah',
    name: 'alqariah',
    component: () => import( '../views/AlqariahView.vue')
  },
  {
    path: '/aladiyat',
    name: 'aladiyat',
    component: () => import( '../views/AladiyatView.vue')
  },
  {
    path: '/alzalzalah',
    name: 'alzalzalah',
    component: () => import( '../views/AlzalzalahView.vue')
  },
  {
    path: '/albayyinah',
    name: 'albayyinah',
    component: () => import( '../views/AlbayyinahView.vue')
  },
  {
    path: '/alqadr',
    name: 'alqadr',
    component: () => import( '../views/AlqadrView.vue')
  },
  {
    path: '/alalaq',
    name: 'alalaq',
    component: () => import( '../views/AlalaqView.vue')
  },
  {
    path: '/attin',
    name: 'attin',
    component: () => import( '../views/AttinView.vue')
  },
  {
    path: '/ashsharh',
    name: 'ashsharh',
    component: () => import( '../views/AssharhView.vue')
  },
  {
    path: '/adduha',
    name: 'adduha',
    component: () => import( '../views/AdduhaView.vue')
  },
  {
    path: '/allail',
    name: 'allail',
    component: () => import( '../views/AllailView.vue')
  },
  {
    path: '/ashshams',
    name: 'ashshams',
    component: () => import( '../views/AshshamsView.vue')
  },
  {
    path: '/albalad',
    name: 'albalad',
    component: () => import( '../views/AlbaladView.vue')
  },
  {
    path: '/alfajr',
    name: 'alfajr',
    component: () => import( '../views/AlfajrView.vue')
  },
  {
    path: '/alghasiyah',
    name: 'alghasiyah',
    component: () => import( '../views/AlghasiyahView.vue')
  },
  {
    path: '/alala',
    name: 'alala',
    component: () => import( '../views/AlalaView.vue')
  },
  {
    path: '/attariq',
    name: 'attariq',
    component: () => import( '../views/AttariqView.vue')
  },
  {
    path: '/alburuj',
    name: 'alburuj',
    component: () => import( '../views/AlburujView.vue')
  },
  {
    path: '/alinshiqaq',
    name: 'alinshiqaq',
    component: () => import( '../views/AlinshiqaqView.vue')
  },
  {
    path: '/almutaffifin',
    name: 'almutaffifin',
    component: () => import( '../views/AlmutaffifinView.vue')
  },
  {
    path: '/alinfitar',
    name: 'alinfitar',
    component: () => import( '../views/AlinfitarView.vue')
  },
  {
    path: '/attakwir',
    name: 'attakwir',
    component: () => import( '../views/AttakwirView.vue')
  },
  {
    path: '/abasa',
    name: 'abasa',
    component: () => import( '../views/AbasaView.vue')
  },
  {
    path: '/annaziat',
    name: 'annaziat',
    component: () => import( '../views/AnnaziatView.vue')
  },
  {
    path: '/annaba',
    name: 'annaba',
    component: () => import( '../views/AnnabaView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
