import { createWebHistory, createRouter } from 'vue-router'

import DashboardLayout from './pages/dashboard/DashboardLayout.vue'
import DashboardAds from './pages/dashboard/ads/DashboardAds.vue'
import DashboardClients from './pages/dashboard/DashboardClients.vue'
import DashboardAnalytics from './pages/dashboard/DashboardAnalytics.vue'
import DashboardPartners from './pages/dashboard/DashboardPartners.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    children: [
      {
        path: 'dashboard/ads',
        component: DashboardAds,
      },
      {
        path: 'dashboard/clients',
        component: DashboardClients,
      },
      {
        path: 'dashboard/partners',
        component: DashboardPartners,
      },
      {
        path: 'dashboard/analytics',
        component: DashboardAnalytics,
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
