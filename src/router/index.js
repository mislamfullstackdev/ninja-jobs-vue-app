import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Jobs from '@/views/jobs/Jobs.vue'
import JobDetails from '@/views/jobs/JobDetails.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs,
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true,

  },
  {
    path: '/all-jobs',
    redirect: '/jobs',
  },
  // 404 route
  {
    path: '/:catchAll(.*)',
    name : NotFoundView,
    component: NotFoundView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
